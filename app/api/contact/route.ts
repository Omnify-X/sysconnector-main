import { NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(5, '1 h'),
        prefix: 'contact',
      })
    : null;

/**
 * POST /api/contact
 * Sends a contact-form submission to the configured recipient via Brevo's
 * transactional email API (v3/smtp/email).
 *
 * Required environment variables:
 *   BREVO_API_KEY          - Brevo v3 API key (shared with the signup route)
 *   CONTACT_FROM_EMAIL     - Verified sender email in your Brevo account
 *
 * Optional:
 *   CONTACT_FROM_NAME      - Display name on outgoing email (default: "sysConnector")
 *   CONTACT_TO_EMAIL       - Recipient override (default: contact@sysconnector.com)
 *   CONTACT_TO_NAME        - Recipient display name (default: "sysConnector")
 */

// Basic shape check + simple email regex. Keeps server-side defensive validation
// independent from anything the client does.
function isValidEmail(v: unknown): v is string {
  return typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function sanitize(v: unknown, maxLen: number): string {
  if (typeof v !== 'string') return '';
  return v.trim().slice(0, maxLen);
}

// Minimal HTML escape so user-submitted text can't inject markup
// into the HTML email body.
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  // Rate limiting: 5 submissions per IP per hour
  if (ratelimit) {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'anonymous';
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 },
      );
    }
  }

  const raw = body as Record<string, unknown>;

  // Turnstile verification
  const cfToken = sanitize(raw.cf_token, 2048);
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    if (!cfToken) {
      return NextResponse.json({ error: 'Missing verification token.' }, { status: 400 });
    }
    const verifyRes = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: turnstileSecret, response: cfToken }),
      },
    );
    const { success: turnstileOk } = (await verifyRes.json()) as { success: boolean };
    if (!turnstileOk) {
      return NextResponse.json({ error: 'Verification failed.' }, { status: 400 });
    }
  }

  const name = sanitize(raw.name, 120);
  const email = sanitize(raw.email, 254);
  const company = sanitize(raw.company, 120);
  const message = sanitize(raw.message, 5000);

  // Honeypot: bots tend to fill every field. A hidden field named "website"
  // should stay empty. If populated, silently accept and drop.
  const honeypot = sanitize(raw.website, 200);

  // Validation
  if (!name) {
    return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 },
    );
  }
  if (!message) {
    return NextResponse.json({ error: 'Please enter a message.' }, { status: 400 });
  }

  // Silent honeypot accept — don't tell bots we spotted them.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const fromName = process.env.CONTACT_FROM_NAME || 'sysConnector';
  const toEmail = process.env.CONTACT_TO_EMAIL || 'contact@sysconnector.com';
  const toName = process.env.CONTACT_TO_NAME || 'sysConnector';

  if (!apiKey || !fromEmail) {
    // Dev fallback: log the submission and return success so the form flow
    // can be tested locally without live Brevo credentials.
    console.warn(
      '[contact] BREVO_API_KEY or CONTACT_FROM_EMAIL not set. Submission received:',
      { name, email, company, message },
    );
    return NextResponse.json({ ok: true, dev: true });
  }

  const subject = `New enquiry from ${name}${company ? ' (' + company + ')' : ''}`;

  // Plain-text fallback for email clients that don't render HTML
  const textBody = [
    'New enquiry from the sysConnector contact form.',
    '',
    `Name:    ${name}`,
    `Email:   ${email}`,
    company ? `Company: ${company}` : null,
    '',
    'Message:',
    message,
    '',
    '---',
    'Reply directly to this email to respond to the sender.',
  ]
    .filter(Boolean)
    .join('\n');

  const htmlBody = `
<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0a0a0a; max-width: 560px; margin: 0 auto; padding: 24px;">
  <h2 style="margin: 0 0 16px; font-size: 20px; font-weight: 600;">New contact enquiry</h2>
  <p style="margin: 0 0 24px; color: #525252; font-size: 14px;">Submitted via the sysConnector contact form.</p>
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
    <tr>
      <td style="padding: 8px 0; color: #737373; font-size: 13px; width: 90px; vertical-align: top;">Name</td>
      <td style="padding: 8px 0; font-size: 14px;">${escapeHtml(name)}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #737373; font-size: 13px; vertical-align: top;">Email</td>
      <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${escapeHtml(email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(email)}</a></td>
    </tr>
    ${
      company
        ? `<tr>
      <td style="padding: 8px 0; color: #737373; font-size: 13px; vertical-align: top;">Company</td>
      <td style="padding: 8px 0; font-size: 14px;">${escapeHtml(company)}</td>
    </tr>`
        : ''
    }
  </table>
  <div style="border-top: 1px solid #e7e5e4; padding-top: 20px;">
    <p style="margin: 0 0 8px; color: #737373; font-size: 13px;">Message</p>
    <div style="white-space: pre-wrap; font-size: 14px; line-height: 1.55;">${escapeHtml(message)}</div>
  </div>
  <p style="margin-top: 32px; color: #a3a3a3; font-size: 12px;">Reply to this email to respond directly to ${escapeHtml(name)}.</p>
</body>
</html>`.trim();

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        sender: { name: fromName, email: fromEmail },
        to: [{ email: toEmail, name: toName }],
        replyTo: { email, name },
        subject,
        textContent: textBody,
        htmlContent: htmlBody,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('[contact] Brevo error:', res.status, text);
      return NextResponse.json(
        { error: 'Could not send your message. Please try again.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return NextResponse.json(
      { error: 'Unexpected server error.' },
      { status: 500 },
    );
  }
}

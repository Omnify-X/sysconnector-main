import { NextResponse } from 'next/server';

/**
 * POST /api/subscribe
 * Creates or updates a contact in Brevo.
 *
 * Required environment variables:
 *   BREVO_API_KEY        - Your Brevo (SendinBlue) API key
 *   BREVO_LIST_ID        - (optional) numeric list ID to add the contact to
 *
 * If BREVO_API_KEY is not set, the route still returns success so the form
 * works in local dev. Check server logs for the payload.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, firstName, lastName } = body ?? {};

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = process.env.BREVO_LIST_ID
      ? Number(process.env.BREVO_LIST_ID)
      : undefined;

    if (!apiKey) {
      // Dev fallback: log and return success so the form flow is testable
      // without a live Brevo account. Replace with hard error in prod if desired.
      console.warn(
        '[subscribe] BREVO_API_KEY not set. Submission received:',
        { email, firstName, lastName }
      );
      return NextResponse.json({ ok: true, dev: true });
    }

    const payload: Record<string, unknown> = {
      email,
      attributes: {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
      },
      updateEnabled: true,
    };
    if (listId) payload.listIds = [listId];

    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok && res.status !== 204) {
      const text = await res.text();
      console.error('[subscribe] Brevo error:', res.status, text);
      return NextResponse.json(
        { error: 'Could not save your details. Please try again.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[subscribe] Unexpected error:', err);
    return NextResponse.json(
      { error: 'Unexpected server error.' },
      { status: 500 }
    );
  }
}

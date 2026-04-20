'use client';

import { FormEvent, forwardRef, useRef, useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { Button } from './Button';
import { CheckCircle2 } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  rows?: number;
  describedById?: string;
}

const Field = forwardRef<HTMLInputElement | HTMLTextAreaElement, FieldProps>(
  function Field(
    { label, name, type = 'text', required, autoComplete, rows, describedById },
    ref,
  ) {
    const common =
      'w-full rounded-lg border border-border bg-bg px-4 text-fg placeholder:text-fg-subtle transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25';
    return (
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-fg">
          {label}
          {required && <span className="text-fg-muted"> *</span>}
        </span>
        {rows ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            name={name}
            required={required}
            rows={rows}
            aria-describedby={describedById}
            className={`${common} py-3 resize-y min-h-[120px]`}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            name={name}
            type={type}
            required={required}
            autoComplete={autoComplete}
            aria-describedby={describedById}
            className={`${common} h-11`}
          />
        )}
      </label>
    );
  },
);

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [cfToken, setCfToken] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const successHeadingRef = useRef<HTMLHeadingElement | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      company: String(data.get('company') || '').trim(),
      message: String(data.get('message') || '').trim(),
      website: String(data.get('website') || '').trim(), // honeypot
      cf_token: cfToken,
    };

    if (!payload.name || !payload.email || !payload.message) {
      setState('error');
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    // Lightweight client-side email check. Server re-validates.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setState('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setState('submitting');
    setErrorMsg(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(
          body?.error || 'Something went wrong. Please try again.',
        );
      }

      setState('success');
      form.reset();
      // Move focus to the success heading so screen-reader users hear it.
      setTimeout(() => successHeadingRef.current?.focus(), 50);
    } catch (err) {
      setState('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Unable to send your message.',
      );
    }
  };

  if (state === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-border bg-bg-elevated p-8 md:p-10"
      >
        <div className="flex items-start gap-4">
          <span
            aria-hidden
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent"
          >
            <CheckCircle2 size={20} strokeWidth={2} />
          </span>
          <div>
            <h2
              ref={successHeadingRef}
              tabIndex={-1}
              className="text-[1.5rem] font-semibold leading-tight tracking-tight text-fg outline-none"
            >
              Thanks for your enquiry.
            </h2>
            <p className="mt-2 text-fg-muted">
              We will respond to you shortly.
            </p>
            <button
              type="button"
              onClick={() => {
                setState('idle');
                setTimeout(() => nameRef.current?.focus(), 50);
              }}
              className="mt-6 text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 transition hover:decoration-accent"
            >
              Send another message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-border bg-bg-elevated p-8 md:p-10"
    >
      <Field
        ref={nameRef}
        label="Your name"
        name="name"
        required
        autoComplete="name"
      />
      <Field
        label="Email address"
        name="email"
        type="email"
        required
        autoComplete="email"
      />
      <Field
        label="Company"
        name="company"
        autoComplete="organization"
      />
      <Field
        label="Message"
        name="message"
        required
        rows={5}
        describedById={errorMsg ? 'contact-error' : undefined}
      />

      {/* Honeypot — hidden from humans, tempting to bots */}
      <div
        aria-hidden
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          onSuccess={setCfToken}
          onError={() => setCfToken(null)}
          onExpire={() => setCfToken(null)}
        />
      )}

      {errorMsg && (
        <p
          id="contact-error"
          role="alert"
          className="text-sm text-red-600 dark:text-red-400"
        >
          {errorMsg}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={
          state === 'submitting' ||
          (!!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !cfToken)
        }
      >
        {state === 'submitting' ? 'Sending…' : 'Send message'}
      </Button>

      <p className="text-xs text-fg-subtle">
        We&rsquo;ll only use your details to respond to your enquiry.
      </p>
    </form>
  );
}

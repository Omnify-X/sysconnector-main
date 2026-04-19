'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  forwardRef,
  ReactNode,
  FormEvent,
} from 'react';
import { X } from 'lucide-react';
import { signupModal } from '@/lib/content';
import { Button } from './Button';

type ModalState = 'idle' | 'submitting' | 'success' | 'error';

interface SignupContextValue {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const SignupContext = createContext<SignupContextValue | null>(null);

export function useSignupModal() {
  const ctx = useContext(SignupContext);
  if (!ctx) {
    throw new Error('useSignupModal must be used within SignupModalProvider');
  }
  return ctx;
}

interface FieldProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}

const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  { label, name, type, required },
  ref,
) {
  const autoComplete =
    name === 'email'
      ? 'email'
      : name === 'firstName'
      ? 'given-name'
      : name === 'lastName'
      ? 'family-name'
      : 'off';

  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-fg">
        {label}
        {required && <span className="text-fg-muted"> *</span>}
      </span>
      <input
        ref={ref}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="h-11 w-full rounded-lg border border-border bg-bg px-4 text-fg placeholder:text-fg-subtle transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
      />
    </label>
  );
});

export function SignupModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<ModalState>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const open = useCallback(() => {
    lastFocused.current = document.activeElement as HTMLElement;
    setIsOpen(true);
    setState('idle');
    setErrorMsg(null);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => lastFocused.current?.focus(), 0);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
        return;
      }
      if (e.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'button, input, textarea, [href], [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    const focusTimer = setTimeout(() => firstFieldRef.current?.focus(), 60);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', onKeyDown);
      clearTimeout(focusTimer);
    };
  }, [isOpen, close]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      email: String(data.get('email') || '').trim(),
      firstName: String(data.get('firstName') || '').trim(),
      lastName: String(data.get('lastName') || '').trim(),
    };

    if (!payload.email || !payload.firstName) {
      setState('error');
      setErrorMsg('Please fill in your email and first name.');
      return;
    }

    setState('submitting');
    setErrorMsg(null);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || 'Something went wrong. Please try again.');
      }

      setState('success');
      form.reset();
    } catch (err) {
      setState('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Unable to submit right now.',
      );
    }
  };

  return (
    <SignupContext.Provider value={{ open, close, isOpen }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 px-4 pb-12 pt-20 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="signup-modal-title"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            ref={panelRef}
            className="relative w-full max-w-lg rounded-2xl border border-border bg-bg-elevated p-8 shadow-2xl md:p-10"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-fg-muted transition hover:bg-bg-sunken hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <X size={18} />
            </button>

            <h2
              id="signup-modal-title"
              className="text-[1.75rem] font-semibold leading-tight tracking-tight text-fg md:text-[2rem]"
            >
              {signupModal.heading}
            </h2>
            <p className="mt-3 leading-relaxed text-fg-muted">
              {signupModal.body}
            </p>

            {state === 'success' ? (
              <div className="mt-8 rounded-xl border border-border bg-bg-sunken p-6">
                <p className="text-lg font-semibold text-fg">You’re on the list.</p>
                <p className="mt-2 text-sm text-fg-muted">
                  We’ll be in touch shortly with next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 space-y-4" noValidate>
                <Field
                  ref={firstFieldRef}
                  label="Email address"
                  name="email"
                  type="email"
                  required
                />
                <Field label="First name" name="firstName" type="text" required />
                <Field label="Last name" name="lastName" type="text" />

                {errorMsg && (
                  <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                    {errorMsg}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={state === 'submitting'}
                >
                  {state === 'submitting' ? 'Submitting…' : signupModal.cta}
                </Button>
                <p className="text-center text-xs text-fg-subtle">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </SignupContext.Provider>
  );
}

/**
 * Unified customer profile mockup for the CustomerProfile section.
 * Demonstrates the "one profile built from many sources" value prop.
 * Purely decorative — aria-hidden.
 */

import {
  Facebook,
  MessageCircle,
  FileSpreadsheet,
  Linkedin,
  Mail,
  Phone,
  Building2,
  Target,
} from 'lucide-react';

interface FieldRow {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  source: 'Meta' | 'HubSpot' | 'WhatsApp' | 'LinkedIn';
}

const fields: FieldRow[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'priya.raman@acme.com',
    source: 'Meta',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+65 •••• 4821',
    source: 'WhatsApp',
  },
  {
    icon: Building2,
    label: 'Company',
    value: 'Acme Retail Group',
    source: 'LinkedIn',
  },
  {
    icon: Target,
    label: 'Campaign',
    value: 'Q2 Demo Request — SG',
    source: 'HubSpot',
  },
];

const sourceStyles: Record<
  FieldRow['source'],
  { icon: React.ComponentType<{ size?: number; className?: string }>; tint: string }
> = {
  Meta: { icon: Facebook, tint: 'bg-blue-500/15 text-blue-600 dark:text-blue-400' },
  LinkedIn: { icon: Linkedin, tint: 'bg-sky-500/15 text-sky-600 dark:text-sky-400' },
  WhatsApp: {
    icon: MessageCircle,
    tint: 'bg-green-500/15 text-green-600 dark:text-green-400',
  },
  HubSpot: {
    icon: FileSpreadsheet,
    tint: 'bg-orange-500/15 text-orange-600 dark:text-orange-400',
  },
};

export function CustomerProfileMockup() {
  return (
    <div aria-hidden className="relative w-full">
      {/* Source chips floating above the card — visual for "3 sources → 1 profile" */}
      <div className="relative mx-auto flex max-w-md items-center justify-center gap-2 pb-6">
        {(['Meta', 'LinkedIn', 'WhatsApp', 'HubSpot'] as const).map((s) => {
          const { icon: Icon, tint } = sourceStyles[s];
          return (
            <span
              key={s}
              className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg-elevated ${tint}`}
            >
              <Icon size={14} />
            </span>
          );
        })}
      </div>

      {/* Dotted connector lines */}
      <svg
        className="mx-auto -mt-4 mb-1 h-6 text-border-strong"
        viewBox="0 0 240 24"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M30 0 L120 22 M90 0 L120 22 M150 0 L120 22 M210 0 L120 22"
          stroke="currentColor"
          strokeDasharray="2 3"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* The unified profile card */}
      <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-xl shadow-black/5 dark:shadow-black/40">
        {/* Glow */}
        <div
          className="pointer-events-none absolute -top-16 left-1/2 h-32 w-48 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
          aria-hidden
        />

        {/* Header */}
        <div className="relative flex items-center gap-3 border-b border-border bg-bg-sunken/60 px-5 py-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/60 font-mono text-[0.85rem] font-semibold text-accent-fg">
            PR
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[0.95rem] font-semibold text-fg">
              Priya Raman
            </p>
            <p className="flex items-center gap-1.5 text-[0.7rem] text-fg-subtle">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Active · unified from 4 sources
            </p>
          </div>
          <span className="rounded-md border border-border bg-bg px-2 py-0.5 font-mono text-[0.6rem] text-fg-subtle">
            ID · 9F2A
          </span>
        </div>

        {/* Field rows */}
        <ul>
          {fields.map((f, i) => {
            const Icon = f.icon;
            const { icon: SourceIcon, tint } = sourceStyles[f.source];
            return (
              <li
                key={f.label}
                className={[
                  'flex items-center gap-3 px-5 py-3',
                  i !== fields.length - 1 ? 'border-b border-border' : '',
                ].join(' ')}
              >
                <Icon size={14} className="shrink-0 text-fg-subtle" />
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-fg-subtle">
                    {f.label}
                  </p>
                  <p className="truncate text-[0.8rem] text-fg">{f.value}</p>
                </div>
                <span
                  className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${tint}`}
                  title={`Source: ${f.source}`}
                >
                  <SourceIcon size={10} />
                </span>
              </li>
            );
          })}
        </ul>

        {/* Activity strip */}
        <div className="border-t border-border bg-bg-sunken/60 px-5 py-3">
          <p className="mb-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-fg-subtle">
            Recent activity
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {[
              { label: 'Form submit', time: '2m' },
              { label: 'Synced to Brevo', time: '2m' },
              { label: 'Email opened', time: '—' },
            ].map((a) => (
              <li
                key={a.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-2 py-0.5 text-[0.7rem] text-fg-muted"
              >
                <span className="h-1 w-1 rounded-full bg-accent" />
                {a.label}
                <span className="font-mono text-[0.65rem] text-fg-subtle">
                  {a.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

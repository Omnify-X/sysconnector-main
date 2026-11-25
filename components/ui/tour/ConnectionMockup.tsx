/**
 * Recreation of the Create New Connection dialog: the five-step stepper
 * and the source application picker.
 */
import { Search, Facebook, Linkedin, FileSpreadsheet, FileUp, MessageCircle } from 'lucide-react';
import { AppFrame } from './AppFrame';

const steps = ['Source', 'Connect', 'Destination', 'Connect', 'Configure'];
const filters = ['All', 'CRM', 'Lead Ads', 'Spreadsheets', 'Messaging', 'Others'];

const sources = [
  { name: 'Facebook Lead Forms', icon: Facebook, tint: 'text-blue-600 dark:text-blue-400', selected: true },
  { name: 'LinkedIn', icon: Linkedin, tint: 'text-sky-700 dark:text-sky-400' },
  { name: 'TikTok', badge: 'TT' },
  { name: 'Google Sheets', icon: FileSpreadsheet, tint: 'text-green-600 dark:text-green-400' },
  { name: 'SFTP Source', icon: FileUp, tint: 'text-fg-muted' },
  { name: 'Messaging Bot', icon: MessageCircle, tint: 'text-accent' },
];

export function ConnectionMockup() {
  return (
    <AppFrame path="dashboard / new-connection">
      <div className="bg-bg-sunken/40 p-4">
        <div className="rounded-xl border border-border bg-bg-elevated p-4">
          <p className="text-[0.85rem] font-semibold text-fg">Create New Connection</p>
          <p className="text-[0.62rem] text-fg-muted">Set up a data synchronisation between your applications.</p>

          {/* Stepper */}
          <ol className="mt-3 flex items-start justify-between">
            {steps.map((s, i) => (
              <li key={`${s}-${i}`} className="flex flex-1 flex-col items-center gap-1">
                <span
                  className={[
                    'flex h-5 w-5 items-center justify-center rounded-full text-[0.58rem] font-semibold',
                    i === 0 ? 'bg-accent text-accent-fg' : 'bg-bg-sunken text-fg-muted',
                  ].join(' ')}
                >
                  {i + 1}
                </span>
                <span className={i === 0 ? 'text-[0.56rem] font-medium text-accent' : 'text-[0.56rem] text-fg-muted'}>
                  {s}
                </span>
              </li>
            ))}
          </ol>

          <p className="mt-3 text-[0.72rem] font-semibold text-fg">Select Source Application</p>

          <div className="mt-2 flex items-center gap-2 rounded-md border border-accent/60 bg-bg px-2.5 py-1.5 ring-2 ring-accent/15">
            <Search size={11} className="text-fg-subtle" />
            <span className="text-[0.62rem] text-fg-subtle">Search applications…</span>
          </div>

          <div className="mt-2 flex flex-wrap gap-1">
            {filters.map((f, i) => (
              <span
                key={f}
                className={[
                  'rounded-full px-2 py-0.5 text-[0.56rem]',
                  i === 0 ? 'bg-accent text-accent-fg' : 'bg-bg-sunken text-fg-muted',
                ].join(' ')}
              >
                {f}
              </span>
            ))}
          </div>

          <div className="mt-2.5 grid grid-cols-3 gap-1.5">
            {sources.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.name}
                  className={[
                    'flex flex-col items-center gap-1 rounded-md border px-1 py-2 text-center',
                    s.selected ? 'border-accent bg-accent/[0.06]' : 'border-border',
                  ].join(' ')}
                >
                  {Icon ? (
                    <Icon size={14} className={s.tint} />
                  ) : (
                    <span className="flex h-3.5 items-center font-mono text-[0.55rem] font-bold text-fg">{s.badge}</span>
                  )}
                  <span className="text-[0.56rem] font-medium leading-tight text-fg">{s.name}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-3 flex justify-between">
            <span className="rounded-md border border-border px-2 py-0.5 text-[0.58rem] text-fg">Cancel</span>
            <span className="rounded-md bg-accent px-2.5 py-0.5 text-[0.58rem] font-medium text-accent-fg">Next →</span>
          </div>
        </div>
      </div>
    </AppFrame>
  );
}

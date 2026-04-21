import type { Connector } from '@/lib/connectors';

function IconFallback({ name }: { name: string }) {
  const letter = name.charAt(0).toUpperCase();
  const colours = [
    'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
    'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
    'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
    'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
    'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
    'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
  ];
  const colour = colours[letter.charCodeAt(0) % colours.length];
  return (
    <span
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-semibold ${colour}`}
    >
      {letter}
    </span>
  );
}

export function ConnectorCard({ connector }: { connector: Connector }) {
  const isLive = connector.status === 'live';

  return (
    <div
      className={`flex flex-col gap-3 rounded-xl border bg-bg-elevated p-5 transition hover:shadow-sm ${
        isLive
          ? 'border-border hover:border-border-strong'
          : 'border-border opacity-60'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <IconFallback name={connector.name} />
        {isLive ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Live
          </span>
        ) : (
          <span className="inline-flex items-center rounded-full border border-dashed border-border px-2 py-0.5 text-xs text-fg-subtle">
            Coming soon
          </span>
        )}
      </div>

      <div>
        <p className="text-sm font-semibold text-fg">{connector.name}</p>
        <p className="mt-0.5 text-xs text-fg-subtle">{connector.category}</p>
      </div>

      <p className="text-xs text-fg-muted leading-relaxed">{connector.description}</p>
    </div>
  );
}

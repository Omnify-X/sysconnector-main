/**
 * Browser-window frame shared by the product tour mockups, matching the
 * chrome on HeroMockup. Purely decorative — aria-hidden.
 */
export function AppFrame({ path, children }: { path: string; children: React.ReactNode }) {
  return (
    <div aria-hidden className="relative w-full">
      <div className="pointer-events-none absolute inset-x-12 -bottom-6 h-32 rounded-full bg-accent/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-xl shadow-black/5 dark:shadow-black/40">
        <div className="flex items-center gap-1.5 border-b border-border bg-bg-sunken px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <div className="ml-4 truncate rounded-md border border-border bg-bg px-2.5 py-1 font-mono text-[0.65rem] text-fg-subtle">
            app.sysconnector.com / {path}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { painPoints } from '@/lib/content';
import { X } from 'lucide-react';

export function PainPoints() {
  return (
    <section className="border-t border-border bg-bg-sunken">
      <Container className="section-y">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow>The reality</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-5 text-h2 text-fg">{painPoints.heading}</h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-base leading-relaxed text-fg-muted md:text-lg">
              {painPoints.intro}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {painPoints.sources.map((s) => (
                <li
                  key={s}
                  className="rounded-lg border border-border bg-bg-elevated px-4 py-2.5 font-mono text-sm text-fg-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-10 space-y-4 text-base leading-relaxed text-fg-muted md:text-lg">
              <p className="text-fg">{painPoints.middleLead}</p>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
                {painPoints.middleFollow}
              </p>
              <ul className="space-y-2">
                {painPoints.negativeList.map((n) => (
                  <li key={n} className="flex items-start gap-2.5">
                    <X
                      size={16}
                      strokeWidth={2}
                      className="mt-1 shrink-0 text-red-500 dark:text-red-400"
                    />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
              <p className="text-fg font-medium">{painPoints.punchline}</p>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <aside className="mt-10 rounded-2xl border border-border bg-bg-elevated p-6 md:p-8">
              <p className="text-lg font-medium leading-snug text-fg md:text-xl">
                “{painPoints.pullquote}”
              </p>
              <p className="mt-3 text-sm text-fg-muted">
                {painPoints.pullquoteFollow}
              </p>
            </aside>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-12">
              <h3 className="text-h3 text-fg">{painPoints.familiarHeading}</h3>
              <ul className="mt-5 space-y-3">
                {painPoints.familiarQuotes.map((q) => (
                  <li
                    key={q}
                    className="rounded-lg border-l-2 border-accent bg-bg-elevated px-4 py-3 text-fg-muted"
                  >
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={460}>
            <p className="mt-10 text-lg font-medium text-fg md:text-xl">
              {painPoints.closingQuestion}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

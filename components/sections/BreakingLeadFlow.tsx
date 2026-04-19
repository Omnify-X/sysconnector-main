import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { breakingLeadFlow } from '@/lib/content';
import { AlertTriangle } from 'lucide-react';

export function BreakingLeadFlow() {
  return (
    <section className="border-t border-border">
      <Container className="section-y">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>The breakdowns</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-h2 text-fg">
              {breakingLeadFlow.heading}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-fg-muted md:text-lg">
              {breakingLeadFlow.subheading}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {breakingLeadFlow.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 40}>
              <article className="flex h-full flex-col gap-3 rounded-xl border border-border bg-bg-elevated p-6 transition hover:border-border-strong">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <AlertTriangle size={16} strokeWidth={2} />
                  </span>
                  <span className="font-mono text-xs text-fg-subtle">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-h3 text-fg">{item.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-fg-muted">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

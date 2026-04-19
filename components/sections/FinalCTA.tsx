import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SignupCTA } from '@/components/ui/SignupCTA';
import { finalCta } from '@/lib/content';
import { Check } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="border-t border-border">
      <Container className="section-y">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-elevated p-8 md:p-14">
          {/* Subtle gradient glow accent (dark-mode friendly) */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-accent">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Early access
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-6 text-h2 text-fg">{finalCta.heading}</h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-4 text-lg font-medium text-fg">
                {finalCta.subhead}
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted md:text-lg">
                {finalCta.body}
              </p>
            </Reveal>

            <Reveal delay={280}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {finalCta.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-[0.95rem] text-fg"
                  >
                    <Check
                      size={16}
                      strokeWidth={2.25}
                      className="mt-1 shrink-0 text-accent"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={340}>
              <p className="mt-8 max-w-2xl text-base text-fg">
                {finalCta.pitch}
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <SignupCTA label={finalCta.cta} />
                <p className="text-xs text-fg-subtle">
                  No credit card required
                </p>
              </div>
            </Reveal>

            <Reveal delay={460}>
              <p className="mt-10 border-t border-border pt-8 text-sm text-fg-muted">
                {finalCta.closingItalic}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

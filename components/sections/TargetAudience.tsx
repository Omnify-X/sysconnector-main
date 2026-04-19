import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { targetAudience } from '@/lib/content';
import { Check, HelpCircle } from 'lucide-react';

export function TargetAudience() {
  return (
    <section className="border-t border-border">
      <Container className="section-y">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow>Audience</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-h2 text-fg">{targetAudience.heading}</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-base leading-relaxed text-fg-muted md:text-lg">
              {targetAudience.intro}
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl border border-border bg-bg-elevated p-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
                Ideal for
              </p>
              <ul className="mt-4 space-y-2.5">
                {targetAudience.idealFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[0.95rem] text-fg"
                  >
                    <Check
                      size={16}
                      strokeWidth={2.25}
                      className="mt-1 shrink-0 text-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-xl border border-border bg-bg-elevated p-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
                Ask yourself
              </p>
              <ul className="mt-4 space-y-2.5">
                {targetAudience.askYourself.map((q) => (
                  <li
                    key={q}
                    className="flex items-start gap-2.5 text-[0.95rem] text-fg"
                  >
                    <HelpCircle
                      size={16}
                      strokeWidth={2}
                      className="mt-1 shrink-0 text-fg-subtle"
                    />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <p className="mx-auto mt-10 max-w-3xl text-lg font-medium text-fg md:text-xl">
            {targetAudience.punchline}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

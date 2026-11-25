import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { features } from '@/lib/content';
import { Layers, Shield, type LucideIcon } from 'lucide-react';

// One icon per card in features.cards: workspaces, then security.
const icons: LucideIcon[] = [Layers, Shield];

export function Features() {
  return (
    <section className="border-t border-border">
      <Container className="section-y">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Teams &amp; agencies</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-h2 text-fg">{features.heading}</h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
          {features.cards.map((card, i) => {
            const Icon = icons[i] ?? Layers;
            return (
              <Reveal key={card.title} delay={i * 60}>
                <article className="flex h-full flex-col gap-4 rounded-xl border border-border bg-bg-elevated p-6 transition hover:border-border-strong">
                  <span
                    aria-hidden
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent"
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="text-h3 text-fg">{card.title}</h3>
                  <p className="text-[0.95rem] leading-relaxed text-fg-muted">
                    {card.body}
                  </p>
                  {card.note && (
                    <p className="mt-auto pt-2 text-sm text-fg-subtle">
                      {card.note}
                    </p>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { features } from '@/lib/content';
import {
  Inbox,
  Zap,
  Eye,
  Wand2,
  Shield,
  Layers,
  Activity,
  type LucideIcon,
} from 'lucide-react';

const icons: LucideIcon[] = [Inbox, Zap, Eye, Wand2, Shield, Layers, Activity];

export function Features() {
  return (
    <section className="border-t border-border">
      <Container className="section-y">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Capabilities</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-h2 text-fg">{features.heading}</h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.cards.map((card, i) => {
            const Icon = icons[i] ?? Inbox;
            const isLastOdd = features.cards.length % 3 !== 0 && i === features.cards.length - 1;
            return (
              <Reveal key={card.title} delay={i * 60} className={isLastOdd ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}>
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

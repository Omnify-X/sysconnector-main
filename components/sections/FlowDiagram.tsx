import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { flowDiagram } from '@/lib/content';
import { ArrowRight, ArrowDown } from 'lucide-react';

export function FlowDiagram() {
  return (
    <section className="border-t border-border bg-bg-sunken">
      <Container className="section-y">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-h2 text-fg">
              Every source. One destination. No babysitting.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {/* Sources */}
          <Reveal>
            <Stage
              eyebrow="Inputs"
              title={flowDiagram.sources.title}
              items={flowDiagram.sources.items}
            />
          </Reveal>

          <Arrow />

          {/* Hub */}
          <Reveal delay={140}>
            <Stage
              eyebrow="Hub"
              title={flowDiagram.hub.title}
              subtitle={flowDiagram.hub.subtitle}
              accent
            />
          </Reveal>

          <Arrow />

          {/* Destinations */}
          <Reveal delay={280}>
            <Stage
              eyebrow="Outputs"
              title={flowDiagram.destinations.title}
              items={flowDiagram.destinations.items}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

interface StageProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  items?: string[];
  accent?: boolean;
}

function Stage({ eyebrow, title, subtitle, items, accent }: StageProps) {
  return (
    <div
      className={[
        'flex h-full flex-col rounded-xl border p-6',
        accent
          ? 'border-accent/30 bg-accent/[0.04] ring-1 ring-accent/20'
          : 'border-border bg-bg-elevated',
      ].join(' ')}
    >
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-fg-subtle">
        {eyebrow}
      </p>
      <h3 className="mt-2 text-h3 text-fg">{title}</h3>
      {subtitle && (
        <p className="mt-1 text-sm text-fg-muted">{subtitle}</p>
      )}
      {items && items.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-md border border-border bg-bg px-2 py-1 font-mono text-[0.75rem] text-fg-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      {accent && (
        <div className="mt-5 space-y-1.5 rounded-lg border border-dashed border-accent/30 bg-bg p-3">
          {['capture', 'clean', 'map', 'sync', 'unify'].map((step, i) => (
            <div
              key={step}
              className="flex items-center gap-2 font-mono text-[0.7rem] text-fg-muted"
            >
              <span className="text-accent">0{i + 1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center" aria-hidden>
      <ArrowRight
        size={20}
        className="hidden text-fg-subtle md:block"
        strokeWidth={1.5}
      />
      <ArrowDown
        size={20}
        className="block text-fg-subtle md:hidden"
        strokeWidth={1.5}
      />
    </div>
  );
}

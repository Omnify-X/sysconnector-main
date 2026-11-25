'use client';

import { ComponentType, KeyboardEvent, useRef, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { BotSetupMockup } from '@/components/ui/tour/BotSetupMockup';
import { CommentToDmMockup } from '@/components/ui/tour/CommentToDmMockup';
import { ConnectionMockup } from '@/components/ui/tour/ConnectionMockup';
import { CustomerProfileMockup } from '@/components/ui/CustomerProfileMockup';
import { productTour } from '@/lib/content';
import { Check } from 'lucide-react';

// Visual for each tab, keyed by productTour.tabs[].id.
const visuals: Record<string, ComponentType> = {
  bots: BotSetupMockup,
  'comment-to-dm': CommentToDmMockup,
  integrations: ConnectionMockup,
  profiles: CustomerProfileMockup,
};

export function ProductTour() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const count = productTour.tabs.length;

  // Arrow keys move between tabs, as in the WAI-ARIA tabs pattern.
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (active + delta + count) % count;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="border-t border-border">
      <Container className="section-y">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>{productTour.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-h2 text-fg">{productTour.heading}</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-fg-muted md:text-lg">
              {productTour.intro}
            </p>
          </Reveal>
        </div>

        {/* Tabs: desktop only. On mobile every panel is shown, stacked. */}
        <div
          role="tablist"
          aria-label="Product tour"
          onKeyDown={onKeyDown}
          className="mx-auto mt-12 hidden w-fit gap-1 rounded-xl border border-border bg-bg-sunken p-1 md:flex"
        >
          {productTour.tabs.map((tab, i) => (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`tour-tab-${tab.id}`}
              role="tab"
              type="button"
              aria-selected={i === active}
              aria-controls={`tour-panel-${tab.id}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              className={[
                'h-10 rounded-lg px-4 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                i === active
                  ? 'bg-bg-elevated text-fg shadow-sm'
                  : 'text-fg-muted hover:text-fg',
              ].join(' ')}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-12 space-y-20 md:mt-10 md:space-y-0">
          {productTour.tabs.map((tab, i) => {
            const Visual = visuals[tab.id];
            return (
              <div
                key={tab.id}
                id={`tour-panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`tour-tab-${tab.id}`}
                className={[
                  'grid items-center gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14',
                  i === active ? '' : 'md:hidden',
                ].join(' ')}
              >
                <div className="max-w-xl">
                  <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] text-accent">
                    {tab.plan}
                  </span>
                  <h3 className="mt-5 text-h3 text-fg md:text-[1.6rem] md:leading-tight">{tab.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-fg-muted">{tab.body}</p>
                  <ul className="mt-6 space-y-3">
                    {tab.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[0.95rem] text-fg">
                        <Check size={16} strokeWidth={2.25} className="mt-1 shrink-0 text-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Remounts when its tab opens, so the Comment-to-DM demo replays. */}
                {Visual && <Visual key={i === active ? `${tab.id}-on` : tab.id} />}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

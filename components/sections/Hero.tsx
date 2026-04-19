import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SignupCTA } from '@/components/ui/SignupCTA';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { HeroMockup } from '@/components/ui/HeroMockup';
import { hero } from '@/lib/content';
import { Check } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.7] dark:opacity-[0.4]"
      />
      <Container className="section-y relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow>Early Access · Lead Sync Platform</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-h1 text-fg">{hero.headline}</h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-fg-muted md:text-lg">
              {hero.subhead}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-fg-subtle md:text-base">
              {hero.italicNote}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {hero.bullets.map((b) => (
                <li
                  key={b}
                  className="inline-flex items-center gap-2 text-sm text-fg-muted"
                >
                  <Check
                    size={14}
                    strokeWidth={2.5}
                    className="text-accent"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <SignupCTA label={hero.cta} />
            </div>
          </Reveal>

          <Reveal delay={480}>
            <p className="mt-4 text-xs text-fg-subtle">
              No credit card required · 2-minute setup
            </p>
          </Reveal>
        </div>

        {/* Product mockup */}
        <Reveal delay={560}>
          <div className="mx-auto mt-16 max-w-5xl md:mt-20">
            {/* On narrow viewports the dashboard is rendered at its natural
               width inside a horizontally scrollable frame so columns stay
               readable rather than getting squeezed. On md+ it fits naturally. */}
            <div className="overflow-x-auto md:overflow-visible">
              <div className="min-w-[900px] md:min-w-0">
                <HeroMockup />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

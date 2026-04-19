import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CustomerProfileMockup } from '@/components/ui/CustomerProfileMockup';
import { customerProfile } from '@/lib/content';
import { Sparkles } from 'lucide-react';

export function CustomerProfile() {
  return (
    <section className="border-t border-border bg-bg-sunken">
      <Container className="section-y">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>Unified data</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-h2 text-fg">
                {customerProfile.heading}
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/[0.04] p-6">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-fg"
                  >
                    <Sparkles size={18} strokeWidth={2} />
                  </span>
                  <p className="text-lg font-medium leading-snug text-fg">
                    {customerProfile.quote}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-6 text-base leading-relaxed text-fg-muted">
                {customerProfile.caption}
              </p>
            </Reveal>
          </div>

          {/* Right: product mockup */}
          <Reveal delay={200} className="order-first lg:order-last">
            <CustomerProfileMockup />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

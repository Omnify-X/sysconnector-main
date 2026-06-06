import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CustomerProfileMockup } from '@/components/ui/CustomerProfileMockup';
import { customerProfile } from '@/lib/content';
import { Sparkles, Wand2, BrainCircuit } from 'lucide-react';

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
              <ul className="mt-6 flex flex-col gap-4">
                {customerProfile.aiFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                      {i === 0 ? <Wand2 size={14} strokeWidth={2} /> : <BrainCircuit size={14} strokeWidth={2} />}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-fg">{feature.label}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-fg-muted">{feature.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
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

import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { futureIntegrations } from '@/lib/content';

export function FutureIntegrations() {
  return (
    <section className="border-t border-border">
      <Container className="section-y">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Roadmap</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-h2 text-fg">
              {futureIntegrations.heading}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-fg-muted md:text-lg">
              {futureIntegrations.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

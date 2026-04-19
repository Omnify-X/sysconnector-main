import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { solution } from '@/lib/content';

export function Solution() {
  return (
    <section className="border-t border-border bg-bg-sunken">
      <Container className="section-y">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>The answer</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-h2 text-fg">{solution.heading}</h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-fg-muted md:text-lg">
              {solution.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

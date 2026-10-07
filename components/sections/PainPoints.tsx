import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { painPoints } from '@/lib/content';
import { X } from 'lucide-react';

export function PainPoints() {
  return (
    <section className="border-t border-border bg-bg-sunken">
      <Container className="section-y">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow>The reality</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-5 text-h2 text-fg">{painPoints.heading}</h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-base leading-relaxed text-fg-muted md:text-lg">
              {painPoints.intro}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <ul className="mt-8 space-y-2 text-base leading-relaxed text-fg-muted md:text-lg">
              {painPoints.negativeList.map((n) => (
                <li key={n} className="flex items-start gap-2.5">
                  <X
                    size={16}
                    strokeWidth={2}
                    className="mt-1 shrink-0 text-red-500 dark:text-red-400"
                  />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

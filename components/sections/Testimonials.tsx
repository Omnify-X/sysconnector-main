import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { testimonials } from '@/lib/content';
import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="border-t border-border bg-bg-sunken">
      <Container className="section-y">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>From the field</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-h2 text-fg">{testimonials.heading}</h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-2">
          {testimonials.quotes.map((q, i) => (
            <Reveal key={q} delay={i * 60}>
              <figure className="flex h-full flex-col gap-4 rounded-xl border border-border bg-bg-elevated p-6">
                <Quote
                  size={18}
                  className="text-accent"
                  strokeWidth={2}
                  aria-hidden
                />
                <blockquote className="text-[1.05rem] leading-snug text-fg">
                  {q}
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <div className="mx-auto mt-12 max-w-3xl space-y-4 text-base leading-relaxed text-fg-muted md:text-lg">
            {testimonials.outro.map((p, i) => (
              <p
                key={p}
                className={
                  i === testimonials.outro.length - 1 ? 'text-fg font-medium' : ''
                }
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

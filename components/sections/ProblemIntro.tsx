import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { problemIntro } from '@/lib/content';

export function ProblemIntro() {
  return (
    <section className="border-t border-border">
      <Container className="section-y">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow>The problem</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-h2 text-fg">{problemIntro.heading}</h2>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-fg-muted md:text-lg">
              {problemIntro.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={220}>
            <ul className="mt-8 grid gap-2 rounded-xl border border-border bg-bg-sunken p-6 sm:grid-cols-2">
              {problemIntro.list.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[0.95rem] text-fg"
                >
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-fg-muted md:text-lg">
              {problemIntro.closing.map((p, i) => (
                <p
                  key={p}
                  className={
                    i === problemIntro.closing.length - 1
                      ? 'text-fg font-medium'
                      : ''
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

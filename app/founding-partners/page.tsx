import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { ContactForm } from '@/components/ui/ContactForm';
import { foundingPartners as fp } from '@/lib/content';
import { ArrowRight, Check } from 'lucide-react';

export const metadata = {
  title: 'Founding partners — sysConnector',
  description:
    '3 months of sysConnector Professional free, plus WhatsApp Business setup done with you. Limited to 20 teams in Malaysia.',
};

export default function FoundingPartnersPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.7] dark:opacity-[0.4]"
          />
          <Container className="section-y">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <Eyebrow>{fp.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 text-h1 text-fg">{fp.headline}</h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-fg-muted md:text-lg">
                  {fp.subhead}
                </p>
              </Reveal>
              <Reveal delay={240}>
                <a
                  href="#apply"
                  className="mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-black bg-black px-7 font-medium tracking-tight text-white shadow-sm transition-all duration-150 hover:border-accent hover:bg-accent dark:border-white dark:bg-white dark:text-black dark:hover:border-accent dark:hover:bg-accent dark:hover:text-accent-fg"
                >
                  {fp.cta}
                  <ArrowRight size={16} strokeWidth={2.25} />
                </a>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="border-t border-border bg-bg-sunken">
          <Container className="section-y">
            <h2 className="text-center text-h2 text-fg">{fp.get.heading}</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {fp.get.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <article className="flex h-full flex-col gap-3 rounded-xl border border-border bg-bg-elevated p-6">
                    <h3 className="text-h3 text-fg">{item.title}</h3>
                    <p className="text-[0.95rem] leading-relaxed text-fg-muted">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
              {[fp.ask, fp.forWho].map((block) => (
                <Reveal key={block.heading}>
                  <div className="h-full rounded-xl border border-border bg-bg-elevated p-6">
                    <h3 className="text-h3 text-fg">{block.heading}</h3>
                    <ul className="mt-4 space-y-2.5">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[0.95rem] text-fg">
                          <Check size={16} strokeWidth={2.25} className="mt-1 shrink-0 text-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-border">
          <Container className="section-y">
            <h2 className="text-center text-h2 text-fg">{fp.steps.heading}</h2>
            <ol className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
              {fp.steps.items.map((step, i) => (
                <Reveal key={step.title} delay={i * 60}>
                  <li className="flex h-full flex-col gap-3 rounded-xl border border-border bg-bg-elevated p-6">
                    <span className="font-mono text-xs text-fg-subtle">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-h3 text-fg">{step.title}</h3>
                    <p className="text-[0.95rem] leading-relaxed text-fg-muted">{step.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        <section id="apply" className="scroll-mt-20 border-t border-border bg-bg-sunken">
          <Container className="section-y">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-h2 text-fg">{fp.form.heading}</h2>
              <div className="mt-8">
                <ContactForm
                  source="Founding partner"
                  withPhone
                  messageLabel={fp.form.messageLabel}
                  submitLabel={fp.form.submitLabel}
                />
              </div>
              <p className="mt-6 text-xs leading-relaxed text-fg-subtle">{fp.smallPrint}</p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

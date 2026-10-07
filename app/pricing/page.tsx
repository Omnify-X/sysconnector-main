import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { SignupCTA } from '@/components/ui/SignupCTA';
import { pricing } from '@/lib/content';
import { Check, Minus } from 'lucide-react';

export const metadata = {
  title: 'Pricing — sysConnector',
  description:
    'Start free with real-time lead sync. Bots from $39, Customer Profiles from $99.',
};

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <Check size={16} strokeWidth={2.25} className="mx-auto text-accent" aria-label="Included" />
    );
  }
  if (value === false) {
    return (
      <Minus size={16} className="mx-auto text-fg-subtle" aria-label="Not included" />
    );
  }
  return <span>{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container className="section-y">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <Eyebrow>Pricing</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-5 text-h1 text-fg">{pricing.heading}</h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-fg-muted md:text-lg">
                  {pricing.intro}
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {pricing.plans.map((plan, i) => (
                <Reveal key={plan.name} delay={i * 60}>
                  <article
                    className={`flex h-full flex-col rounded-xl border bg-bg-elevated p-6 ${
                      plan.featured ? 'border-accent' : 'border-border'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="text-h3 text-fg">{plan.name}</h2>
                      {plan.featured && (
                        <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-accent">
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className="mt-4">
                      <span className="text-4xl font-semibold tracking-tight text-fg">
                        {plan.price}
                      </span>
                      <span className="ml-1.5 text-sm text-fg-muted">{plan.period}</span>
                    </p>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-fg-muted">
                      {plan.description}
                    </p>
                    <ul className="mt-6 flex-1 space-y-2.5">
                      {plan.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-[0.95rem] text-fg">
                          <Check
                            size={16}
                            strokeWidth={2.25}
                            className="mt-1 shrink-0 text-accent"
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <SignupCTA
                      label={plan.cta}
                      size="md"
                      withArrow={false}
                      variant={plan.featured ? 'primary' : 'secondary'}
                      className="mt-8 w-full"
                    />
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-border bg-bg-elevated p-6 md:flex-row md:items-center">
                <div>
                  <h2 className="text-h3 text-fg">{pricing.enterprise.heading}</h2>
                  <p className="mt-1 text-[0.95rem] text-fg-muted">{pricing.enterprise.body}</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center rounded-lg border border-border-strong bg-bg-elevated px-5 text-[0.9375rem] font-medium text-fg transition hover:bg-bg-sunken"
                >
                  {pricing.enterprise.cta}
                </Link>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="border-t border-border bg-bg-sunken">
          <Container className="section-y">
            <h2 className="text-center text-h2 text-fg">{pricing.compareHeading}</h2>
            <div className="mt-10 overflow-x-auto rounded-xl border border-border bg-bg-elevated">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-4 py-3 text-left font-medium text-fg-muted">
                      <span className="sr-only">Feature</span>
                    </th>
                    {pricing.plans.map((plan) => (
                      <th key={plan.name} className="px-4 py-3 text-center font-semibold text-fg">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pricing.rows.map((row) => (
                    <tr key={row.label} className="border-b border-border last:border-0">
                      <th scope="row" className="px-4 py-3 text-left font-normal text-fg">
                        {row.label}
                      </th>
                      {row.values.map((v, i) => (
                        <td key={i} className="px-4 py-3 text-center text-fg-muted">
                          <Cell value={v} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

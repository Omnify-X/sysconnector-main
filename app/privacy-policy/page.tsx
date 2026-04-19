import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

export const metadata = {
  title: 'Privacy Policy — sysConnector',
  description: 'sysConnector privacy policy.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container className="section-y">
            <div className="mx-auto max-w-2xl">
              <Eyebrow>Legal</Eyebrow>
              <h1 className="mt-5 text-h1 text-fg">Privacy Policy</h1>
              <p className="mt-4 text-sm text-fg-subtle">
                <em>Last updated: June 2025</em>
              </p>

              <div className="mt-10 space-y-10 text-[0.95rem] leading-relaxed text-fg-muted md:text-base">
                <p>
                  Welcome to SysConnector. Protecting your privacy is one of
                  our top priorities. This Privacy Policy describes what
                  personal data we collect, how we use it, and your rights with
                  respect to that data when you use our website, application,
                  and related services (&ldquo;Services&rdquo;).
                </p>

                <Section n="1" title="Information We Collect">
                  <p>
                    When you use SysConnector, we may collect the following
                    types of information:
                  </p>

                  <h3 className="text-base font-semibold text-fg">
                    Personal Information
                  </h3>
                  <List>
                    <li>
                      <strong className="text-fg">
                        Account and Contact Information:
                      </strong>{' '}
                      Name, company name, job title, email address, phone
                      number, and billing information when you register or make
                      a purchase.
                    </li>
                    <li>
                      <strong className="text-fg">Usage Data:</strong>{' '}
                      Information about your interactions with our website and
                      services, including IP address, browser type, device
                      identifiers, and activity logs.
                    </li>
                    <li>
                      <strong className="text-fg">Customer Data:</strong> Data
                      you submit to SysConnector as part of your use of the
                      Service (e.g. contact lists, lead information), which we
                      process on your behalf.
                    </li>
                  </List>

                  <h3 className="text-base font-semibold text-fg">
                    Cookies and Similar Technologies
                  </h3>
                  <p>
                    We use cookies and similar technologies to improve
                    performance, enhance your user experience, and support
                    analytics.
                  </p>
                </Section>

                <Section n="2" title="How We Use Information">
                  <p>SysConnector processes personal data to:</p>
                  <List>
                    <li>Provide and maintain the Service.</li>
                    <li>Communicate with you about your account and updates.</li>
                    <li>Process transactions and provide support.</li>
                    <li>Improve our Service based on usage data and feedback.</li>
                    <li>Comply with applicable legal obligations.</li>
                  </List>
                </Section>

                <Section n="3" title="Data Sharing and Third Parties">
                  <p>We do not sell your personal data. We may share data with:</p>
                  <List>
                    <li>
                      <strong className="text-fg">Service Providers:</strong>{' '}
                      Trusted third-party service providers who support our
                      operations (e.g. hosting, analytics, customer support)
                      under strict confidentiality agreements.
                    </li>
                    <li>
                      <strong className="text-fg">Compliance and Safety:</strong>{' '}
                      Where required by law or to protect SysConnector, our
                      customers, or the public.
                    </li>
                  </List>
                </Section>

                <Section n="4" title="Data Retention and Security">
                  <p>
                    We retain personal data as long as your account is active
                    or as needed to provide the Service and comply with legal
                    obligations.
                  </p>
                  <p>
                    We take industry-standard measures to protect your data,
                    including encryption, access controls, and regular security
                    audits.
                  </p>
                </Section>

                <Section n="5" title="International Transfers">
                  <p>
                    SysConnector is a global service. Personal data may be
                    transferred to and processed in countries outside your
                    jurisdiction. Wherever we transfer data, we take measures
                    to ensure adequate protections under applicable data
                    protection laws.
                  </p>
                </Section>

                <Section n="6" title="Your Rights">
                  <p>
                    Depending on where you live, you may have rights under data
                    protection laws (e.g. GDPR or CCPA) including:
                  </p>
                  <List>
                    <li>
                      Accessing, correcting, or deleting your personal data.
                    </li>
                    <li>Objecting to or restricting certain processing.</li>
                    <li>Data portability.</li>
                    <li>Opting out of marketing communications.</li>
                  </List>
                  <p>
                    To exercise your rights, please contact us at{' '}
                    <a
                      href="mailto:contact@sysconnector.com"
                      className="link-underline text-fg"
                    >
                      contact@sysconnector.com
                    </a>
                    .
                  </p>
                </Section>

                <Section n="7" title="Changes to This Policy">
                  <p>
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or legal requirements. The
                    most recent version will be posted on this page with its
                    effective date.
                  </p>
                </Section>

                <Section n="8" title="Contact Us">
                  <p>
                    If you have questions about this Privacy Policy or our
                    privacy practices, please reach out at:
                  </p>
                  <div className="mt-4 rounded-xl border border-border bg-bg-sunken p-5 text-sm">
                    <p>
                      <span className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
                        Email
                      </span>
                      <br />
                      <a
                        href="mailto:contact@sysconnector.com"
                        className="link-underline text-fg"
                      >
                        contact@sysconnector.com
                      </a>
                    </p>
                    <p className="mt-4">
                      <span className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
                        Address
                      </span>
                      <br />
                      <span className="text-fg">
                        155 Franklin Street, Melbourne 3000
                      </span>
                    </p>
                  </div>
                </Section>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Section({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="flex items-baseline gap-3 text-h3 text-fg">
        <span className="font-mono text-sm font-medium text-fg-subtle tabular-nums">
          {n.padStart(2, '0')}
        </span>
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="space-y-2 pl-1 [&>li]:flex [&>li]:items-start [&>li]:gap-3 [&>li]:before:mt-2 [&>li]:before:inline-block [&>li]:before:h-1 [&>li]:before:w-1 [&>li]:before:shrink-0 [&>li]:before:rounded-full [&>li]:before:bg-accent [&>li]:before:content-['']">
      {children}
    </ul>
  );
}

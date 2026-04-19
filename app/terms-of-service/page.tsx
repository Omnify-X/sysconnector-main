import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

export const metadata = {
  title: 'Terms of Service — sysConnector',
  description: 'sysConnector terms of service.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container className="section-y">
            <div className="mx-auto max-w-2xl">
              <Eyebrow>Legal</Eyebrow>
              <h1 className="mt-5 text-h1 text-fg">Terms of Service</h1>
              <p className="mt-4 text-sm text-fg-subtle">
                <em>Last updated: June 2025</em>
              </p>

              <div className="mt-10 space-y-10 text-[0.95rem] leading-relaxed text-fg-muted md:text-base">
                <p>
                  Welcome to <strong className="text-fg">SysConnector</strong>!
                  These Terms of Service (&ldquo;Terms&rdquo;) govern your
                  access to and use of our website, products, and services
                  (collectively, the &ldquo;Service&rdquo;). By signing up for
                  or using our Service, you agree to these Terms. If you do not
                  agree to these Terms, please do not use the Service.
                </p>

                <Section n="1" title="Eligibility">
                  <p>
                    You must be at least 18 years old and capable of forming a
                    legally binding contract to use the Service. By using
                    SysConnector, you represent and warrant that you meet these
                    requirements.
                  </p>
                </Section>

                <Section n="2" title="Account Registration">
                  <p>
                    You must register for an account to use the Service. You
                    agree to provide accurate, up-to-date information and to
                    keep your login credentials secure. You&rsquo;re
                    responsible for all activity that happens under your
                    account.
                  </p>
                </Section>

                <Section n="3" title="Service Usage">
                  <p>
                    You may use SysConnector only as permitted by these Terms
                    and applicable law. You agree not to:
                  </p>
                  <List>
                    <li>
                      Modify, reverse engineer, or otherwise attempt to access
                      source code.
                    </li>
                    <li>
                      Use the Service for unlawful or fraudulent purposes.
                    </li>
                    <li>
                      Interfere with or disrupt the integrity or performance of
                      the Service.
                    </li>
                  </List>
                </Section>

                <Section n="4" title="Subscriptions and Payments">
                  <p>
                    Access to the Service may require a paid subscription.
                    Fees, billing intervals, and terms will be clearly
                    displayed at the time of subscription.
                  </p>
                  <p>
                    Your subscription will automatically renew unless canceled
                    before the renewal date. You may manage your subscription
                    via your account settings.
                  </p>
                </Section>

                <Section n="5" title="Customer Data">
                  <p>
                    When using SysConnector, you may submit data, including
                    personal data of your customers (&ldquo;Customer
                    Data&rdquo;).
                  </p>
                  <p>
                    You retain all rights and ownership of your Customer Data.
                    You grant SysConnector a limited, non-exclusive license to
                    process Customer Data solely as required to provide the
                    Service.
                  </p>
                </Section>

                <Section n="6" title="Privacy">
                  <p>
                    Your privacy is important to us. Our{' '}
                    <a href="/privacy-policy" className="link-underline text-fg">
                      Privacy Policy
                    </a>{' '}
                    describes how we collect, use, and protect your personal
                    information. By using SysConnector, you consent to these
                    practices.
                  </p>
                </Section>

                <Section n="7" title="Intellectual Property">
                  <p>
                    We own all rights, title, and interest in and to the
                    Service, including all related software, design, content,
                    and branding. Except as expressly permitted, you may not
                    use our intellectual property without prior written
                    consent.
                  </p>
                </Section>

                <Section n="8" title="Support and Availability">
                  <p>
                    We strive to keep the Service available and accessible but
                    do not guarantee uptime. Scheduled maintenance or
                    unforeseen events may cause interruptions. Support is
                    available as outlined in your subscription plan.
                  </p>
                </Section>

                <Section n="9" title="Limitation of Liability">
                  <p>
                    To the fullest extent permitted by law, SysConnector will
                    not be liable for any indirect, incidental, special, or
                    consequential damages arising from your use of the Service.
                    Our total liability is limited to the fees you have paid
                    for the Service in the past 12 months.
                  </p>
                </Section>

                <Section n="10" title="Indemnification">
                  <p>
                    You agree to indemnify and hold harmless SysConnector and
                    its affiliates from any claims, liabilities, or expenses
                    arising out of your violation of these Terms or misuse of
                    the Service.
                  </p>
                </Section>

                <Section n="11" title="Modifications to Terms">
                  <p>
                    We may update these Terms from time to time. Material
                    changes will be communicated by email or posted prominently
                    on our website. Continued use of the Service after updates
                    take effect indicates your acceptance of the revised Terms.
                  </p>
                </Section>

                <Section n="12" title="Termination">
                  <p>
                    We reserve the right to suspend or terminate your account
                    if you breach these Terms. Upon termination, your right to
                    use the Service will cease immediately, and we may delete
                    any associated data.
                  </p>
                </Section>

                <Section n="13" title="Governing Law">
                  <p>
                    These Terms are governed by Australian federal law. Any
                    disputes will be resolved in the competent courts of that
                    jurisdiction.
                  </p>
                </Section>

                <Section n="14" title="Contact Us">
                  <p>
                    If you have questions about these Terms of Service, please
                    contact us at:
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

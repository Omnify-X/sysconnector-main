import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ContactForm } from '@/components/ui/ContactForm';
import { Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact — sysConnector',
  description: 'Get in touch with the sysConnector team.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container className="section-y">
            <div className="mx-auto max-w-2xl">
              <Eyebrow>Contact</Eyebrow>
              <h1 className="mt-5 text-h1 text-fg">Let&rsquo;s talk.</h1>
              <p className="mt-6 text-base leading-relaxed text-fg-muted md:text-lg">
                Questions, pilot requests, integration suggestions &mdash; we
                read every message and typically respond within one business
                day.
              </p>

              <div className="mt-10">
                <ContactForm />
              </div>

              <div className="mt-10 flex items-center gap-3 border-t border-border pt-8">
                <span
                  aria-hidden
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-bg-sunken text-fg-muted"
                >
                  <Mail size={16} />
                </span>
                <p className="text-sm text-fg-muted">
                  Prefer email? Reach us at{' '}
                  <a
                    href="mailto:contact@sysconnector.com"
                    className="font-medium text-fg link-underline"
                  >
                    contact@sysconnector.com
                  </a>
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

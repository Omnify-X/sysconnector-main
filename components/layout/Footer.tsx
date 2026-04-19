import Link from 'next/link';
import Image from 'next/image';
import { footer } from '@/lib/content';

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-sunken">
      <div className="container-x py-14 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5"
              aria-label="sysConnector home"
            >
              <Image
                src="/sysconnector-logo.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-[1.05rem] font-semibold tracking-tight text-fg">
                <span className="text-fg-muted">sys</span>Connector
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-fg-muted">
              {footer.tagline}
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 md:items-end">
            <nav className="flex gap-6 text-sm">
              {footer.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-fg-muted transition hover:text-fg"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="text-xs text-fg-subtle">{footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

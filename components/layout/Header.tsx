import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between md:h-18">
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
            priority
            className="h-8 w-8"
          />
          <span className="text-[1.05rem] font-semibold tracking-tight text-fg">
            <span className="text-fg-muted">sys</span>Connector
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden h-9 items-center rounded-lg px-4 text-sm font-medium text-fg-muted transition hover:bg-bg-sunken hover:text-fg sm:inline-flex"
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

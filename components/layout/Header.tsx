import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, BookOpen, LifeBuoy } from 'lucide-react';
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
            href="/connectors"
            className="hidden h-9 items-center rounded-lg px-4 text-sm font-medium text-fg-muted transition hover:bg-bg-sunken hover:text-fg sm:inline-flex"
          >
            Connectors
          </Link>

          {/* Resources dropdown */}
          <div className="group relative hidden sm:block">
            <button className="flex h-9 items-center gap-1 rounded-lg px-4 text-sm font-medium text-fg-muted transition hover:bg-bg-sunken hover:text-fg">
              Resources
              <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {/* Dropdown panel */}
            <div className="invisible absolute right-0 top-full pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="w-56 overflow-hidden rounded-xl border border-border bg-bg-elevated shadow-lg">
                <Link
                  href="/blog"
                  className="flex items-start gap-3 px-4 py-3 transition hover:bg-bg-sunken"
                >
                  <BookOpen size={16} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-fg">Articles</p>
                    <p className="text-xs text-fg-subtle">Tips and insights from the team</p>
                  </div>
                </Link>
                <div className="mx-4 border-t border-border" />
                <a
                  href="https://help.sysconnector.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 px-4 py-3 transition hover:bg-bg-sunken"
                >
                  <LifeBuoy size={16} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-fg">Help Center</p>
                    <p className="text-xs text-fg-subtle">Guides, FAQs, and documentation</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

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

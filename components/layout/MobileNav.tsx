'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { Menu, X, BookOpen, LifeBuoy } from 'lucide-react';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const close = () => setOpen(false);

  const drawer = (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />
      {/* Drawer panel */}
      <div className="fixed inset-y-0 right-0 z-[101] flex w-72 flex-col border-l border-border bg-bg-elevated shadow-2xl">
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <span className="text-sm font-semibold text-fg">Menu</span>
          <button
            onClick={close}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-fg-muted transition hover:bg-bg-sunken hover:text-fg"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          <Link
            href="/connectors"
            onClick={close}
            className="flex h-10 items-center rounded-lg px-4 text-sm font-medium text-fg-muted transition hover:bg-bg-sunken hover:text-fg"
          >
            Connectors
          </Link>

          <div className="mx-1 my-1 border-t border-border" />

          <p className="px-4 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-widest text-fg-subtle">
            Resources
          </p>

          <Link
            href="/blog"
            onClick={close}
            className="flex items-start gap-3 rounded-lg px-4 py-3 transition hover:bg-bg-sunken"
          >
            <BookOpen size={16} className="mt-0.5 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-medium text-fg">Articles</p>
              <p className="text-xs text-fg-subtle">Tips and insights from the team</p>
            </div>
          </Link>

          <a
            href="https://help.sysconnector.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="flex items-start gap-3 rounded-lg px-4 py-3 transition hover:bg-bg-sunken"
          >
            <LifeBuoy size={16} className="mt-0.5 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-medium text-fg">Help Center</p>
              <p className="text-xs text-fg-subtle">Guides, FAQs, and documentation</p>
            </div>
          </a>

          <div className="mx-1 my-1 border-t border-border" />

          <Link
            href="/contact"
            onClick={close}
            className="flex h-10 items-center rounded-lg px-4 text-sm font-medium text-fg-muted transition hover:bg-bg-sunken hover:text-fg"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-fg-muted transition hover:bg-bg-sunken hover:text-fg sm:hidden"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {mounted && open && createPortal(drawer, document.body)}
    </>
  );
}

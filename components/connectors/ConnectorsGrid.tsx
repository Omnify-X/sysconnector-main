'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { ConnectorCard } from '@/components/connectors/ConnectorCard';
import { categories } from '@/lib/connectors';
import type { Connector, Category } from '@/lib/connectors';

function normalize(s: string) {
  return s.toLowerCase();
}

function matches(c: Connector, query: string): boolean {
  const q = normalize(query);
  return (
    normalize(c.name).includes(q) ||
    normalize(c.description).includes(q) ||
    normalize(c.category).includes(q)
  );
}

export function ConnectorsGrid({ connectors }: { connectors: Connector[] }) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const trimmed = query.trim();

  const filtered = connectors.filter((c) => {
    const categoryMatch = activeCategory === 'All' || c.category === activeCategory;
    const queryMatch = trimmed === '' || matches(c, trimmed);
    return categoryMatch && queryMatch;
  });

  const liveCount = connectors.filter((c) => c.status === 'live').length;

  return (
    <>
      {/* Hero band */}
      <section className="border-t border-border bg-bg-sunken">
        <Container className="py-10 md:py-14">
          <Reveal>
            <Eyebrow>Connectors</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-tight text-fg md:text-[2.25rem]">
              Connect everything.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-3 max-w-xl text-base text-fg-muted">
              {liveCount} live connectors — from lead sources to CRMs and marketing tools.
              More added regularly.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="relative mt-6 max-w-md">
              <Search
                size={16}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-fg-subtle"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search connectors…"
                aria-label="Search connectors"
                className="h-10 w-full rounded-lg border border-border bg-bg pl-10 pr-4 text-sm text-fg placeholder:text-fg-subtle transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Filter pills + grid */}
      <section>
        <Container className="pt-8 pb-24 md:pt-10 md:pb-32">
          {/* Category pills */}
          <div className="mb-8 flex flex-wrap gap-2">
            {(['All', ...categories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                  activeCategory === cat
                    ? 'bg-accent text-accent-fg'
                    : 'border border-border bg-bg text-fg-muted hover:bg-bg-sunken hover:text-fg'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Result count when filtering */}
          {(trimmed || activeCategory !== 'All') && (
            <p className="mb-6 text-sm text-fg-subtle">
              {filtered.length === 0
                ? 'No connectors match your search.'
                : `${filtered.length} connector${filtered.length === 1 ? '' : 's'}`}
            </p>
          )}

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filtered.map((connector) => (
                <ConnectorCard key={connector.slug} connector={connector} />
              ))}
            </div>
          ) : (
            <p className="text-fg-muted">No connectors found.</p>
          )}

          {/* CTA */}
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <p className="text-base font-medium text-fg">Don&rsquo;t see your tool?</p>
            <p className="max-w-sm text-sm text-fg-muted">
              We add new connectors regularly. Let us know what you need.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-border-strong bg-bg-elevated px-5 text-[0.9375rem] font-medium text-fg transition hover:bg-bg-sunken hover:border-fg-subtle"
            >
              Request a connector →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

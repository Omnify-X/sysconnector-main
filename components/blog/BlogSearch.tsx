'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { PostCard } from '@/components/blog/PostCard';
import { FeaturedPostCard } from '@/components/blog/FeaturedPostCard';
import type { PostMeta } from '@/lib/blog';

function normalize(s: string) {
  return s.toLowerCase();
}

function matches(post: PostMeta, query: string): boolean {
  const q = normalize(query);
  return (
    normalize(post.title).includes(q) ||
    normalize(post.excerpt).includes(q) ||
    (post.tags ?? []).some((t) => normalize(t).includes(q))
  );
}

export function BlogSearch({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState('');
  const trimmed = query.trim();
  const isSearching = trimmed.length > 0;

  const filtered = isSearching ? posts.filter((p) => matches(p, trimmed)) : posts;
  const [featured, ...rest] = filtered;

  return (
    <>
      {/* Hero band */}
      <section className="border-t border-border bg-bg-sunken">
        <Container className="py-10 md:py-14">
          <Reveal>
            <Eyebrow>Resources</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-tight text-fg md:text-[2.25rem]">
              Insights &amp; updates
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-3 max-w-xl text-base text-fg-muted">
              Practical advice on lead routing, CRM automation, and building
              revenue operations that actually scale.
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
                placeholder="Search posts…"
                aria-label="Search blog posts"
                className="h-10 w-full rounded-lg border border-border bg-bg pl-10 pr-4 text-sm text-fg placeholder:text-fg-subtle transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Posts */}
      <section>
        <Container className="pt-8 pb-24 md:pt-10 md:pb-32 space-y-10">
          {isSearching && (
            <p className="text-sm text-fg-subtle">
              {filtered.length === 0
                ? `No results for "${trimmed}"`
                : `${filtered.length} result${filtered.length === 1 ? '' : 's'} for "${trimmed}"`}
            </p>
          )}

          {filtered.length === 0 ? (
            !isSearching && <p className="text-fg-muted">No posts yet — check back soon.</p>
          ) : isSearching ? (
            /* Search results — flat 2-col grid, no featured treatment */
            <div className="grid gap-6 md:grid-cols-2">
              {filtered.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            /* Default view — featured + rest */
            <>
              <FeaturedPostCard post={featured} />
              {rest.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2">
                  {rest.map((post, i) => (
                    <Reveal key={post.slug} delay={i * 60}>
                      <PostCard post={post} />
                    </Reveal>
                  ))}
                </div>
              )}
            </>
          )}
        </Container>
      </section>
    </>
  );
}

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
  const featuredIndex = filtered.findIndex((p) => p.featured);
  const featured = filtered[featuredIndex !== -1 ? featuredIndex : 0];
  const rest = filtered.filter((p) => p !== featured);

  return (
    <>
      {/* Hero band */}
      <section className="border-t border-border bg-bg-sunken">
        <Container className="py-5 md:py-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Reveal>
              <div>
                <Eyebrow>Resources</Eyebrow>
                <h1 className="mt-1.5 text-lg font-semibold leading-tight tracking-tight text-fg md:text-xl">
                  Insights &amp; updates
                </h1>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative w-full max-w-xs shrink-0">
                <Search
                  size={15}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-fg-subtle"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search posts…"
                  aria-label="Search blog posts"
                  className="h-9 w-full rounded-lg border border-border bg-bg pl-9 pr-4 text-sm text-fg placeholder:text-fg-subtle transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Posts */}
      <section>
        <Container className="pt-6 pb-16 md:pt-8 md:pb-24 space-y-6">
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
            /* Search results — flat 3-col grid, no featured treatment */
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            /* Default view — featured + 3-col rest */
            <>
              <FeaturedPostCard post={featured} />
              {rest.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

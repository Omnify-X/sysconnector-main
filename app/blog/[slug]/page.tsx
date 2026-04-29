import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { PostBody } from '@/components/blog/PostBody';
import { ReadingProgress } from '@/components/blog/ReadingProgress';
import { PostCard } from '@/components/blog/PostCard';
import { AuthorBio } from '@/components/blog/AuthorBio';
import {
  getAllPosts,
  getPost,
  extractKeyFacts,
  extractMainBody,
  parseQuickSummary,
  parseFAQ,
  parseNextStep,
  extractTOCHeadings,
} from '@/lib/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: `${post.title} — sysConnector`,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([getPost(slug), getAllPosts()]);
  const morePosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const keyFacts = extractKeyFacts(post.content);
  const summaryItems = parseQuickSummary(post.content);
  const faqItems = parseFAQ(post.content);
  const nextStep = parseNextStep(post.content);
  const mainBody = extractMainBody(post.content);
  const toc = extractTOCHeadings(post.content);

  return (
    <>
      <ReadingProgress />
      <Header />
      <main>

        {/* ── Hero: back link + tag + title + meta + image / key facts ── */}
        <section className="border-t border-border">
          <Container className="pt-8 pb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg transition mb-6"
            >
              <ArrowLeft size={15} />
              All posts
            </Link>

            {post.tags?.[0] && (
              <div className="mb-3">
                <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs uppercase tracking-wider text-fg-subtle">
                  {post.tags[0]}
                </span>
              </div>
            )}

            <h1 className="text-[1.875rem] font-semibold leading-tight tracking-tight text-fg md:text-[2.5rem] max-w-3xl">
              {post.title}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-fg-subtle">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.author && (
                <>
                  <span aria-hidden>·</span>
                  <span>{post.author}</span>
                </>
              )}
              <span aria-hidden>·</span>
              <span>{post.readTime} min read</span>
            </div>

            {(post.coverImage || keyFacts.length > 0) && (
              <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-stretch">
                {post.coverImage && (
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-bg-elevated md:aspect-auto md:min-h-[280px] md:w-[56%] shrink-0">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}
                {keyFacts.length > 0 && (
                  <div className="flex flex-col gap-3 md:flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                      Key Facts
                    </p>
                    {keyFacts.map((fact, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-xl border border-border bg-bg-elevated p-4 flex flex-col gap-1.5"
                      >
                        <p className="text-sm font-semibold text-fg leading-snug">{fact.q}</p>
                        <p className="text-sm text-fg-muted leading-relaxed">{fact.a}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </Container>
        </section>

        {/* ── Quick Summary ── */}
        {summaryItems.length > 0 && (
          <section className="border-y border-accent/20 bg-accent/5">
            <Container className="py-8 md:py-10">
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-accent">
                Quick Summary
              </p>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {summaryItems.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-fg leading-snug">{item.label}</p>
                      <p className="mt-0.5 text-sm text-fg-muted leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* ── Article body + sticky TOC ── */}
        <section>
          <Container className="pt-10 pb-16">
            <div className="flex gap-16 items-start">
              <div className="min-w-0 flex-1 max-w-prose">
                <PostBody content={mainBody} />
              </div>
              {toc.filter((h) => h.level === 2).length > 0 && (
                <aside className="hidden lg:block w-48 shrink-0">
                  <div className="sticky top-24">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-fg-subtle">
                      On this page
                    </p>
                    <nav className="flex flex-col border-l border-border">
                      {toc
                        .filter((h) => h.level === 2)
                        .map((h) => (
                          <a
                            key={h.id}
                            href={`#${h.id}`}
                            className="py-1.5 pl-3 text-xs text-fg-subtle hover:text-fg hover:border-l-2 hover:border-accent hover:-ml-px transition-colors leading-snug"
                          >
                            {h.text}
                          </a>
                        ))}
                      {faqItems.length > 0 && (
                        <a
                          href="#faq"
                          className="py-1.5 pl-3 text-xs text-fg-subtle hover:text-fg hover:border-l-2 hover:border-accent hover:-ml-px transition-colors leading-snug"
                        >
                          Frequently asked questions
                        </a>
                      )}
                    </nav>
                  </div>
                </aside>
              )}
            </div>
          </Container>
        </section>

        {/* ── FAQ ── */}
        {faqItems.length > 0 && (
          <section id="faq" className="border-y border-border bg-bg-sunken">
            <Container className="py-10 md:py-14">
              <h2 className="mb-6 text-xl font-semibold text-fg">Frequently asked questions</h2>
              <div className="max-w-2xl divide-y divide-border rounded-2xl border border-border bg-bg overflow-hidden">
                {faqItems.map((item, i) => (
                  <div key={i} className="px-5 py-4">
                    <p className="text-sm font-semibold text-fg leading-snug">{item.q}</p>
                    <p className="mt-1.5 text-sm text-fg-muted leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* ── Next Step CTA ── */}
        {nextStep && (
          <section>
            <Container className="py-12">
              <div className="rounded-2xl bg-accent px-7 py-8 md:px-10 md:py-10">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/60">
                  Next step
                </p>
                <h2 className="text-xl font-semibold text-white md:text-2xl leading-snug">
                  {nextStep.headline}
                </h2>
                {nextStep.body && (
                  <p className="mt-2 max-w-xl text-sm text-white/75 leading-relaxed">
                    {nextStep.body}
                  </p>
                )}
                <Link
                  href={nextStep.linkUrl}
                  className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-accent transition hover:bg-white/90"
                >
                  {nextStep.linkText}
                  <ChevronRight size={15} />
                </Link>
              </div>
            </Container>
          </section>
        )}

        {/* ── Author bio ── */}
        <section>
          <Container className="pb-10">
            <AuthorBio />
          </Container>
        </section>

        {/* ── More articles ── */}
        {morePosts.length > 0 && (
          <section className="border-t border-border bg-bg-sunken">
            <Container className="py-14">
              <h2 className="mb-6 text-lg font-semibold text-fg">More from the blog</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {morePosts.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            </Container>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}

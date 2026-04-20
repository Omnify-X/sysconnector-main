import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { PostBody } from '@/components/blog/PostBody';
import { ReadingProgress } from '@/components/blog/ReadingProgress';
import { PostCard } from '@/components/blog/PostCard';
import { getAllPosts, getPost } from '@/lib/blog';

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
  const morePosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <ReadingProgress />
      <Header />
      <main>
        {/* Post hero */}
        <section className="border-t border-border border-b border-border">
          <Container className="pt-8 pb-10">
            <div className="max-w-prose">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg transition mb-6"
              >
                <ArrowLeft size={15} />
                All posts
              </Link>

              {post.tags && post.tags.length > 0 && (
                <span className="mb-3 flex">
                  <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs uppercase tracking-wider text-fg-subtle">
                    {post.tags[0]}
                  </span>
                </span>
              )}
              <h1 className="text-[1.75rem] font-semibold leading-tight tracking-tight text-fg md:text-[2.25rem]">
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

              {post.coverImage && (
                <div className="relative mt-8 aspect-[2/1] w-full overflow-hidden rounded-xl bg-bg-elevated">
                  <Image
                    src={post.coverImage}
                    alt=""
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* Post body */}
        <section>
          <Container className="pt-10 pb-20">
            <div className="max-w-prose">
              <PostBody content={post.content} />
            </div>
          </Container>
        </section>

        {/* More articles */}
        {morePosts.length > 0 && (
          <section className="border-t border-border">
            <Container className="py-16">
              <h2 className="text-h2 text-fg mb-8">More from the blog</h2>
              <div className="grid gap-6 md:grid-cols-2">
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

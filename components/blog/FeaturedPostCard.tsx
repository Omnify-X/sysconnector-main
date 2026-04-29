import Link from 'next/link';
import Image from 'next/image';
import type { PostMeta } from '@/lib/blog';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function FeaturedPostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-xl border border-border bg-bg-elevated transition hover:border-border-strong hover:shadow-lg"
    >
      <div className="flex flex-col md:flex-row md:min-h-[200px]">
        {/* Image — top on mobile, right on desktop */}
        <div className="relative min-h-[180px] overflow-hidden md:order-last md:w-[42%] md:rounded-r-xl">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-accent/8 to-accent/5" />
          )}
        </div>

        {/* Content — bottom on mobile, left on desktop */}
        <div className="flex flex-col justify-center gap-3 p-5 md:p-7 md:w-[58%]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-accent">
              Featured
            </span>
            {post.tags?.[0] && (
              <span className="rounded-full border border-border px-2 py-0.5 font-mono text-xs uppercase tracking-wider text-fg-subtle">
                {post.tags[0]}
              </span>
            )}
          </div>

          <h2 className="text-[1.125rem] font-semibold leading-snug tracking-tight text-fg transition group-hover:text-accent md:text-[1.25rem]">
            {post.title}
          </h2>

          <p className="text-sm text-fg-muted leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-2 text-xs text-fg-subtle">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readTime} min read</span>
          </div>

          <span className="text-sm font-semibold text-accent">
            Read article →
          </span>
        </div>

      </div>
    </Link>
  );
}

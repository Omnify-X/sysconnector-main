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
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated transition hover:border-border-strong hover:shadow-lg md:flex-row"
    >
      {/* Image / gradient panel */}
      <div className="relative min-h-[220px] w-full shrink-0 overflow-hidden md:w-[40%]">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt=""
            fill
            className="object-cover transition group-hover:scale-[1.02]"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-accent/8 to-accent/5" />
        )}
      </div>

      {/* Content panel */}
      <div className="flex flex-1 flex-col justify-center gap-4 p-8 md:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Featured
          </span>
          {post.tags && post.tags.length > 0 && (
            <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs uppercase tracking-wider text-fg-subtle">
              {post.tags[0]}
            </span>
          )}
        </div>

        <h2 className="text-xl font-semibold tracking-tight text-fg transition group-hover:text-accent md:text-2xl">
          {post.title}
        </h2>

        <p className="text-base text-fg-muted line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-3 text-sm text-fg-subtle">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readTime} min read</span>
        </div>

        <span className="mt-1 text-sm font-semibold text-accent">
          Read article →
        </span>
      </div>
    </Link>
  );
}

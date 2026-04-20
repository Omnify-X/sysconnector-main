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

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-bg-elevated overflow-hidden transition hover:border-border-strong hover:shadow-md"
    >
      {post.coverImage && (
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt=""
            fill
            className="object-cover transition group-hover:scale-[1.02]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-fg-subtle">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readTime} min read</span>
          {post.tags && post.tags.length > 0 && (
            <>
              <span aria-hidden>·</span>
              <span className="rounded-full border border-border px-2 py-0.5 font-mono uppercase tracking-wider">
                {post.tags[0]}
              </span>
            </>
          )}
        </div>

        <h3 className="text-h3 text-fg transition group-hover:text-accent line-clamp-2">
          {post.title}
        </h3>

        <p className="text-[0.95rem] text-fg-muted line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        <span className="mt-1 text-sm font-medium text-accent">
          Read more →
        </span>
      </div>
    </Link>
  );
}

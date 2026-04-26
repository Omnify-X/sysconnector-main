import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

const POSTS_DIR = path.join(process.cwd(), 'content/blog');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  readTime: number;
  coverImage?: string;
  tags?: string[];
  featured?: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

function calcReadTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = await fs.readdir(POSTS_DIR);
  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith('.mdx'))
      .map(async (filename) => {
        const slug = filename.replace(/\.mdx$/, '');
        const raw = await fs.readFile(path.join(POSTS_DIR, filename), 'utf-8');
        const { data, content } = matter(raw);
        return {
          slug,
          title: data.title ?? '',
          date: data.date ?? '',
          excerpt: data.excerpt ?? '',
          author: data.author ?? '',
          readTime: calcReadTime(content),
          coverImage: data.coverImage,
          tags: data.tags,
          featured: data.featured ?? false,
        } satisfies PostMeta;
      }),
  );
  return posts.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.date < b.date ? 1 : -1;
  });
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export interface KeyFact { q: string; a: string }
export interface TOCItem { id: string; text: string; level: number }

export interface SummaryItem { label: string; text: string }
export interface FAQItem { q: string; a: string }
export interface NextStep { headline: string; body: string; linkText: string; linkUrl: string }

export function parseQuickSummary(content: string): SummaryItem[] {
  const match = content.match(/^## Quick Summary\n\n([\s\S]*?)(?=\n## )/m);
  if (!match) return [];
  return [...match[1].matchAll(/^-\s+\*\*(.+?)\*\*\s+(.+)$/gm)].map((m) => ({
    label: m[1].replace(/:$/, ''),
    text: m[2].trim(),
  }));
}

export function parseFAQ(content: string): FAQItem[] {
  const sectionMatch = content.match(/## FAQ\n\n([\s\S]*?)(?=\n---|\n## [^#]|$)/);
  if (!sectionMatch) return [];
  const items: FAQItem[] = [];
  const pattern = /### (.+)\n\n([\s\S]*?)(?=\n### |$)/g;
  let m;
  while ((m = pattern.exec(sectionMatch[1])) !== null) {
    items.push({ q: m[1].trim(), a: m[2].trim() });
  }
  return items;
}

export function parseNextStep(content: string): NextStep | null {
  const match = content.match(/## Next step\n\n([\s\S]*?)(?=\n---|\n## |$)/i);
  if (!match) return null;
  const section = match[1].trim();
  const headline = (section.match(/^\*\*(.+?)\*\*/) || [])[1]?.replace(/\.$/, '') ?? '';
  const body = section
    .replace(/^\*\*.+?\*\*\n+/, '')
    .replace(/\[.+?\]\(.+?\)\s*$/, '')
    .trim();
  const linkMatch = section.match(/\[(.+?)\]\((.+?)\)/);
  return {
    headline,
    body,
    linkText: linkMatch?.[1] ?? 'Learn more',
    linkUrl: linkMatch?.[2] ?? '/',
  };
}

export function extractMainBody(content: string): string {
  let body = stripKeyFacts(content);
  body = body.replace(/^## Quick Summary\n\n[\s\S]*?(?=\n## )/m, '');
  const hrIndex = body.search(/\n---\n/);
  if (hrIndex !== -1) body = body.slice(0, hrIndex);
  return body.trim();
}

export function extractKeyFacts(content: string): KeyFact[] {
  const match = content.match(/## Key Facts\n\n([\s\S]*?)(?=\n## )/);
  if (!match) return [];
  return match[1].trim().split(/\n\n(?=\*\*)/).flatMap((block) => {
    const qMatch = block.match(/^\*\*(.+?)\*\*/);
    if (!qMatch) return [];
    return [{ q: qMatch[1], a: block.replace(/^\*\*.+?\*\*\n/, '').trim() }];
  });
}

export function stripKeyFacts(content: string): string {
  return content.replace(/## Key Facts\n\n[\s\S]*?(?=\n## )/, '').trimStart();
}

const SKIP_HEADINGS = new Set(['key facts', 'quick summary', 'faq', 'next step', 'references']);

export function extractTOCHeadings(content: string): TOCItem[] {
  const stripped = stripKeyFacts(content);
  return [...stripped.matchAll(/^(#{2,3})\s+(.+)$/gm)]
    .filter((m) => !SKIP_HEADINGS.has(m[2].trim().toLowerCase()))
    .map((m) => ({ level: m[1].length, text: m[2].trim(), id: slugify(m[2].trim()) }));
}

export async function getPost(slug: string): Promise<Post> {
  const filepath = path.join(POSTS_DIR, `${slug}.mdx`);
  let raw: string;
  try {
    raw = await fs.readFile(filepath, 'utf-8');
  } catch {
    notFound();
  }
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    author: data.author ?? '',
    readTime: calcReadTime(content),
    coverImage: data.coverImage,
    tags: data.tags,
    featured: data.featured ?? false,
    content,
  };
}

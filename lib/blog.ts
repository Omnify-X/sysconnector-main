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
        } satisfies PostMeta;
      }),
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
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
    content,
  };
}

import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BlogSearch } from '@/components/blog/BlogSearch';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — sysConnector',
  description: 'Insights on lead management, data routing, and CRM automation.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <>
      <Header />
      <main>
        <BlogSearch posts={posts} />
      </main>
      <Footer />
    </>
  );
}

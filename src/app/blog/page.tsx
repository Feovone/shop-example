import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Pagination } from '@/components/ui/Pagination';
import { formatDate } from '@/lib/utils';
import { mockArticles } from '@/lib/mock-data';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog Susetti - porady, inspiracje i nowości ze świata biżuterii',
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-12">
      <Breadcrumbs items={[{ label: 'Blog' }]} />

      <h1 className="text-2xl md:text-3xl font-serif font-bold mb-8">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockArticles.map((article) => (
          <Link
            key={article.id}
            href={`/blog/${article.slug}`}
            className="group border border-border overflow-hidden hover:border-gold transition-colors"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-bg-secondary">
              {article.image && (
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
            </div>
            <div className="p-5">
              <p className="text-xs text-text-muted">
                {formatDate(article.publishedAt)} · {article.author}
              </p>
              <h2 className="mt-2 text-lg font-semibold group-hover:text-gold transition-colors">
                {article.title}
              </h2>
              {article.excerpt && (
                <p className="mt-2 text-sm text-text-light line-clamp-3">{article.excerpt}</p>
              )}
              <span className="inline-block mt-3 text-sm font-medium text-gold">
                Czytaj całość →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <Pagination currentPage={1} totalPages={2} baseUrl="/blog" />
    </div>
  );
}

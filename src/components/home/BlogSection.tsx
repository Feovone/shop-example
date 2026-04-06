import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { Article } from '@/types';

interface BlogSectionProps {
  articles: Article[];
}

export function BlogSection({ articles }: BlogSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold">Blog</h2>
          <Link
            href="/blog"
            className="flex items-center gap-1 text-sm font-medium text-text-light hover:text-gold transition-colors"
          >
            Wszystkie wpisy
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="group bg-white overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {article.image && (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-5">
                <p className="text-xs text-text-muted">
                  {formatDate(article.publishedAt)} · {article.author}
                </p>
                <h3 className="mt-2 font-semibold group-hover:text-gold transition-colors">
                  {article.title}
                </h3>
                {article.excerpt && (
                  <p className="mt-2 text-sm text-text-light line-clamp-2">
                    {article.excerpt}
                  </p>
                )}
                <span className="inline-block mt-3 text-sm font-medium text-gold">
                  Czytaj całość →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

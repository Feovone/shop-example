import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { formatDate } from '@/lib/utils';
import { mockArticles } from '@/lib/mock-data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = mockArticles.find((a) => a.slug === slug) ?? mockArticles[0];
  return {
    title: article.title,
    description: article.excerpt ?? article.title,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = mockArticles.find((a) => a.slug === slug) ?? mockArticles[0];

  return (
    <div className="mx-auto max-w-3xl px-4 pb-12">
      <Breadcrumbs items={[
        { label: 'Blog', href: '/blog' },
        { label: article.title },
      ]} />

      <article className="mt-4">
        <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center gap-3 mt-4 text-sm text-text-muted">
          <span>{formatDate(article.publishedAt)}</span>
          <span>·</span>
          <span>{article.author}</span>
        </div>

        <div className="mt-8 prose prose-lg max-w-none">
          {article.content || (
            <p className="text-text-light">
              Treść artykułu zostanie załadowana z API...
            </p>
          )}
        </div>
      </article>
    </div>
  );
}

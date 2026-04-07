import type { Metadata } from 'next';
import { CategoryPageClient } from './CategoryPageClient';
import { mainNavigation } from '@/config/navigation';
import type { NavigationItem } from '@/types';

function collectSlugArrays(items: NavigationItem[]): string[][] {
  const result: string[][] = [];
  for (const item of items) {
    const match = item.href.match(/^\/kategoria\/(.+)$/);
    if (match) result.push(match[1].split('/'));
    if (item.children) result.push(...collectSlugArrays(item.children));
  }
  return result;
}

const allSlugArrays = collectSlugArrays(mainNavigation);

export async function generateStaticParams() {
  return allSlugArrays.map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lastSegment = slug[slug.length - 1];
  const title = lastSegment
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title,
    description: `${title} - szeroki wybór biżuterii w sklepie Susetti`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  return <CategoryPageClient slug={slug.join('/')} searchParams={{}} />;
}

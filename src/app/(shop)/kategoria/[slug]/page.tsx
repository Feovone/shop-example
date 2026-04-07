import type { Metadata } from 'next';
import { CategoryPageClient } from './CategoryPageClient';

const defaultSlugs = [
  'bizuteria-zlota', 'bizuteria-srebrna', 'motywy', 'dewocjonalia',
  'komplety-srebrne', 'kolczyki-srebrne', 'wisiorki-srebrne',
  'bransoletki-srebrne', 'pierscionki-srebrne', 'naszyjniki-srebrne',
];

export async function generateStaticParams() {
  return defaultSlugs.map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
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

  return <CategoryPageClient slug={slug} searchParams={{}} />;
}

import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Pagination } from '@/components/ui/Pagination';
import { mockNewProducts, mockCollections } from '@/lib/mock-data';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = mockCollections.find((c) => c.slug === slug) ?? mockCollections[0];
  return {
    title: collection.name,
    description: collection.description,
  };
}

export default async function CollectionPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const page = Number(resolvedSearchParams.page) || 1;
  const collection = mockCollections.find((c) => c.slug === slug) ?? mockCollections[0];

  return (
    <div className="mx-auto max-w-7xl px-4 pb-12">
      <Breadcrumbs items={[
        { label: 'Kolekcje', href: '/kolekcja' },
        { label: collection.name },
      ]} />

      <div className="relative bg-bg-secondary aspect-[3/1] mb-8 overflow-hidden flex items-center">
        <div className="px-8 md:px-16 max-w-lg relative z-10">
          <h1 className="text-3xl md:text-4xl font-serif font-bold">{collection.name}</h1>
          <p className="mt-2 text-text-light">{collection.description}</p>
        </div>
      </div>

      <ProductGrid products={mockNewProducts} />
      <Pagination currentPage={page} totalPages={4} baseUrl={`/kolekcja/${slug}`} />
    </div>
  );
}

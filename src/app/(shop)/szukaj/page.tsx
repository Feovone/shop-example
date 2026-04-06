import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Pagination } from '@/components/ui/Pagination';
import { mockNewProducts } from '@/lib/mock-data';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolved = await searchParams;
  const query = typeof resolved.q === 'string' ? resolved.q : '';
  return {
    title: query ? `Wyniki wyszukiwania: ${query}` : 'Wyszukiwanie',
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const resolved = await searchParams;
  const query = typeof resolved.q === 'string' ? resolved.q : '';
  const page = Number(resolved.page) || 1;

  // TODO: real search API
  const results = query ? mockNewProducts : [];

  return (
    <div className="mx-auto max-w-7xl px-4 pb-12">
      <Breadcrumbs items={[{ label: 'Wyszukiwanie' }]} />

      <h1 className="text-2xl md:text-3xl font-serif font-bold mt-4 mb-2">
        {query ? `Wyniki wyszukiwania: "${query}"` : 'Wyszukiwanie'}
      </h1>

      {query && (
        <p className="text-sm text-text-muted mb-8">
          Znaleziono {results.length} produktów
        </p>
      )}

      {results.length > 0 ? (
        <>
          <ProductGrid products={results} />
          <Pagination currentPage={page} totalPages={1} baseUrl="/szukaj" searchParams={{ q: query }} />
        </>
      ) : query ? (
        <div className="py-16 text-center">
          <p className="text-text-muted">Nie znaleziono produktów dla frazy &quot;{query}&quot;</p>
          <p className="text-sm text-text-muted mt-2">Spróbuj wpisać inną frazę</p>
        </div>
      ) : null}
    </div>
  );
}

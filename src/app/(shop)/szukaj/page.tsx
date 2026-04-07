'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ProductGrid } from '@/components/product/ProductGrid';
import { mockNewProducts } from '@/lib/mock-data';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') ?? '';

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
        <ProductGrid products={results} />
      ) : query ? (
        <div className="py-16 text-center">
          <p className="text-text-muted">Nie znaleziono produktów dla frazy &quot;{query}&quot;</p>
          <p className="text-sm text-text-muted mt-2">Spróbuj wpisać inną frazę</p>
        </div>
      ) : null}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchContent />
    </Suspense>
  );
}

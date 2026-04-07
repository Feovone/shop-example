'use client';

import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ProductGrid } from '@/components/product/ProductGrid';
import { FilterSidebar } from '@/components/catalog/FilterSidebar';
import { SortDropdown } from '@/components/catalog/SortDropdown';
import { Pagination } from '@/components/ui/Pagination';
import { mockNewProducts, mockBestsellers } from '@/lib/mock-data';
import { mockFilterGroups } from '@/lib/mock-filters';
import type { ActiveFilters } from '@/types';

function prettify(segment: string): string {
  return segment
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

interface CategoryPageClientProps {
  slug: string;
  searchParams: { [key: string]: string | string[] | undefined };
}

export function CategoryPageClient({ slug, searchParams }: CategoryPageClientProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({});
  const [sort, setSort] = useState('default');

  const segments = slug.split('/');

  const breadcrumbItems = segments.map((seg, i) => {
    const path = '/kategoria/' + segments.slice(0, i + 1).join('/');
    const isLast = i === segments.length - 1;
    return { label: prettify(seg), href: isLast ? undefined : path };
  });

  const firstSegment = prettify(segments[0]);
  const lastSegment = prettify(segments[segments.length - 1]);
  const categoryName = segments.length > 1 && firstSegment !== lastSegment
    ? `${firstSegment} ${lastSegment}`
    : firstSegment;

  const page = Number(searchParams.page) || 1;

  const handleFilterChange = (attrSlug: string, valSlug: string) => {
    setActiveFilters((prev) => {
      const current = prev[attrSlug] ?? [];
      const updated = current.includes(valSlug)
        ? current.filter((v) => v !== valSlug)
        : [...current, valSlug];
      if (updated.length === 0) {
        const next = { ...prev };
        delete next[attrSlug];
        return next;
      }
      return { ...prev, [attrSlug]: updated };
    });
  };

  const products = [...mockNewProducts, ...mockBestsellers];
  const totalPages = 12;

  return (
    <div className="mx-auto max-w-7xl px-4 pb-12">
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="text-2xl md:text-3xl font-serif font-bold mb-6">{categoryName}</h1>

      <div className="flex gap-8">
        <div className="hidden md:block w-64 flex-shrink-0">
          <FilterSidebar
            filterGroups={mockFilterGroups}
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            onClearAll={() => setActiveFilters({})}
            priceRange={{ min: 0, max: 1000 }}
            onPriceChange={() => {}}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 text-sm font-medium"
            >
              <Filter className="w-4 h-4" />
              Filtry
            </button>
            <SortDropdown value={sort} onChange={setSort} totalProducts={products.length} />
          </div>

          <ProductGrid products={products} />
        </div>
      </div>

      <Pagination currentPage={page} totalPages={totalPages} baseUrl={`/kategoria/${slug}`} />

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-semibold">Filtry</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <FilterSidebar
                filterGroups={mockFilterGroups}
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
                onClearAll={() => setActiveFilters({})}
                priceRange={{ min: 0, max: 1000 }}
                onPriceChange={() => {}}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

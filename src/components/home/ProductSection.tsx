'use client';

import Link from 'next/link';
import { ProductCard } from '@/components/product/ProductCard';
import { ChevronRight } from 'lucide-react';
import type { Product } from '@/types';

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewAllHref?: string;
  viewAllLabel?: string;
}

export function ProductSection({ title, products, viewAllHref, viewAllLabel = 'Zobacz wszystkie' }: ProductSectionProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold">{title}</h2>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="flex items-center gap-1 text-sm font-medium text-text-light hover:text-gold transition-colors"
            >
              {viewAllLabel}
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

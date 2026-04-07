'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Bell } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/stores/cart-store';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const mainImage = product.images.find((img) => img.isMain) ?? product.images[0];

  return (
    <div className="group relative flex flex-col h-full">
      <Link href={`/produkt/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-bg-secondary">
          {mainImage && (
            <Image
              src={mainImage.url}
              alt={mainImage.alt || product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}

          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && <Badge variant="new" />}
            {product.isBestseller && <Badge variant="bestseller" />}
            {product.compareAtPrice && <Badge variant="sale" />}
          </div>
        </div>

        <div className="mt-3 space-y-1 flex-1">
          <p className="text-xs text-text-muted uppercase tracking-wide">Susetti</p>
          <h3 className="text-sm font-medium leading-tight line-clamp-2 group-hover:text-gold transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">{formatPrice(product.price)}</p>
            {product.compareAtPrice && (
              <p className="text-xs text-text-muted line-through">{formatPrice(product.compareAtPrice)}</p>
            )}
          </div>
        </div>
      </Link>

      <div className="mt-auto pt-2">
        {product.isAvailable ? (
          <Button
            variant="outline"
            size="sm"
            className="w-full gap-2"
            onClick={() => addItem(product)}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Do koszyka
          </Button>
        ) : (
          <Button variant="ghost" size="sm" className="w-full gap-2">
            <Bell className="w-3.5 h-3.5" />
            Powiadom o dostępności
          </Button>
        )}
      </div>
    </div>
  );
}

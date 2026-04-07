'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, Share2, Mail, ShoppingCart, Bell, Minus, Plus } from 'lucide-react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { StarRating } from '@/components/ui/StarRating';
import { TrustBadges } from '@/components/home/TrustBadges';
import { ProductGrid } from '@/components/product/ProductGrid';
import { formatPrice, asset } from '@/lib/utils';
import { useCartStore } from '@/stores/cart-store';
import type { Product } from '@/types';

interface ProductPageClientProps {
  product: Product;
}

const mockVariants = [
  {
    name: 'Rozmiar',
    options: [
      { label: 'R12', slug: 'r12', available: true },
      { label: 'R14', slug: 'r14', available: true },
      { label: 'R16', slug: 'r16', available: true },
      { label: 'R17', slug: 'r17', available: true },
      { label: 'R18', slug: 'r18', available: false },
      { label: 'R20', slug: 'r20', available: true },
    ],
  },
  {
    name: 'Kolor',
    options: [
      { label: 'Srebro', slug: 'srebro', available: true },
      { label: 'Pozłacane', slug: 'pozlacane', available: true },
      { label: 'Oksydowane', slug: 'oksydowane', available: true },
    ],
  },
];

export function ProductPageClient({ product }: ProductPageClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({
    'Rozmiar': 'r17',
    'Kolor': 'srebro',
  });
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewName, setReviewName] = useState('');
  const [reviewContent, setReviewContent] = useState('');
  const addItem = useCartStore((s) => s.addItem);

  const images = product.images.length > 0
    ? product.images
    : [{ id: '0', url: asset('/images/products/new/2-pierscionek-lisc.webp'), alt: product.name, position: 0, isMain: true }];

  const avgRating = product.reviews.length > 0
    ? product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length
    : 0;

  return (
    <div className="mx-auto max-w-7xl px-4 pb-12">
      <Breadcrumbs items={[
        { label: 'Biżuteria Srebrna', href: '/kategoria/bizuteria-srebrna' },
        { label: product.name },
      ]} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-4">
        <div>
          <div className="relative aspect-square bg-bg-secondary overflow-hidden">
            <Image
              src={images[selectedImageIndex].url}
              alt={images[selectedImageIndex].alt || product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute top-3 left-3 flex flex-col gap-1">
              {product.isNew && <Badge variant="new" />}
              {product.isBestseller && <Badge variant="bestseller" />}
            </div>
          </div>

          {images.length > 1 && (
            <div className="flex gap-2 mt-3 overflow-x-auto">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImageIndex(i)}
                  className={`relative w-16 h-16 flex-shrink-0 border-2 overflow-hidden transition-colors ${
                    i === selectedImageIndex ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <Image src={img.url} alt={img.alt} fill sizes="64px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mt-3">
            {product.reviews.length > 0 && (
              <div className="flex items-center gap-2">
                <StarRating rating={avgRating} />
                <span className="text-sm text-text-muted">({product.reviews.length})</span>
              </div>
            )}
            <span className="text-xs text-text-muted">Kod: {product.sku}</span>
          </div>

          <div className="mt-6">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold">{formatPrice(product.price)}</span>
              {product.compareAtPrice && (
                <span className="text-lg text-text-muted line-through">{formatPrice(product.compareAtPrice)}</span>
              )}
            </div>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <p>
              <span className="text-text-muted">Dostępność:</span>{' '}
              <span className={product.isAvailable ? 'text-success font-medium' : 'text-error font-medium'}>
                {product.isAvailable ? `${product.stockQuantity} szt.` : 'Brak'}
              </span>
            </p>
            <p>
              <span className="text-text-muted">Wysyłka w:</span>{' '}
              <span className="font-medium">{product.shippingTime}</span>
            </p>
          </div>

          {product.isAvailable ? (
            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center border border-border rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-bg-secondary transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  min={1}
                  max={product.stockQuantity}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Math.min(product.stockQuantity, Number(e.target.value) || 1)))}
                  className="w-12 h-10 text-center text-sm border-x border-border focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-bg-secondary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button
                size="lg"
                className="flex-1 gap-2"
                onClick={() => addItem(product, quantity)}
              >
                <ShoppingCart className="w-5 h-5" />
                Do koszyka
              </Button>
            </div>
          ) : (
            <div className="mt-6">
              <Button variant="secondary" size="lg" className="w-full gap-2">
                <Bell className="w-5 h-5" />
                Powiadom o dostępności
              </Button>
            </div>
          )}

          <div className="mt-4 flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-sm text-text-light hover:text-gold transition-colors">
              <Heart className="w-4 h-4" /> Dodaj do ulubionych
            </button>
            <button className="flex items-center gap-1.5 text-sm text-text-light hover:text-gold transition-colors">
              <Share2 className="w-4 h-4" /> Poleć znajomemu
            </button>
          </div>

          <div className="mt-6 border-t border-border pt-6 space-y-4">
            <h2 className="font-semibold">Warianty</h2>
            {mockVariants.map((variant) => (
              <div key={variant.name}>
                <p className="text-sm text-text-muted mb-2">
                  {variant.name}: <span className="font-medium text-text">{variant.options.find((o) => o.slug === selectedVariants[variant.name])?.label}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {variant.options.map((option) => (
                    <button
                      key={option.slug}
                      disabled={!option.available}
                      onClick={() => setSelectedVariants((prev) => ({ ...prev, [variant.name]: option.slug }))}
                      className={`min-w-[3rem] h-9 px-3 border rounded text-sm font-medium transition-colors ${
                        selectedVariants[variant.name] === option.slug
                          ? 'border-gold bg-gold/10 text-gold'
                          : option.available
                            ? 'border-border hover:border-gold/50 text-text'
                            : 'border-border-light text-text-muted line-through cursor-not-allowed opacity-50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {product.description && (
            <div className="mt-8 border-t border-border pt-6">
              <h2 className="font-semibold mb-3">Opis</h2>
              <div className="text-sm text-text-light leading-relaxed">
                {product.description}
              </div>
            </div>
          )}

          {product.attributes.length > 0 && (
            <div className="mt-6 border-t border-border pt-6">
              <h2 className="font-semibold mb-3">Dane techniczne</h2>
              <table className="w-full text-sm">
                <tbody>
                  {product.attributes.map((attr) => (
                    <tr key={attr.attribute.slug} className="border-b border-border-light">
                      <td className="py-2 pr-4 text-text-muted">{attr.attribute.name}</td>
                      <td className="py-2 font-medium">{attr.value.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <section className="mt-12 border-t border-border pt-8">
        <h2 className="text-xl font-serif font-bold mb-6">
          Opinie o produkcie ({product.reviews.length})
        </h2>

        {product.reviews.length > 0 ? (
          <div className="space-y-4 mb-8">
            {product.reviews.map((review) => (
              <div key={review.id} className="border-b border-border-light pb-4">
                <div className="flex items-center gap-3">
                  <StarRating rating={review.rating} />
                  <span className="text-sm font-medium">{review.authorName}</span>
                </div>
                <p className="mt-2 text-sm text-text-light">{review.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-text-muted mb-6">Brak opinii. Bądź pierwszy!</p>
        )}

        <div className="max-w-lg bg-bg-secondary p-6 rounded">
          <h3 className="font-semibold mb-4">Dodaj opinię</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Ocena</label>
              <StarRating rating={reviewRating} interactive onChange={setReviewRating} size="md" />
            </div>
            <div>
              <label htmlFor="reviewName" className="block text-sm mb-1">Imię / pseudonim</label>
              <input
                id="reviewName"
                value={reviewName}
                onChange={(e) => setReviewName(e.target.value)}
                className="w-full h-10 px-3 border border-border rounded text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="reviewContent" className="block text-sm mb-1">Treść opinii</label>
              <textarea
                id="reviewContent"
                value={reviewContent}
                onChange={(e) => setReviewContent(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-border rounded text-sm focus:outline-none focus:border-gold resize-none"
              />
            </div>
            <Button>Wyślij opinię</Button>
          </div>
        </div>
      </section>

      {product.relatedProducts.length > 0 && (
        <section className="mt-12 border-t border-border pt-8">
          <h2 className="text-xl font-serif font-bold mb-6">Do kompletu</h2>
          <ProductGrid products={product.relatedProducts} columns={4} />
        </section>
      )}

      <div className="mt-12">
        <TrustBadges />
      </div>
    </div>
  );
}

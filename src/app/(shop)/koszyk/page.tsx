'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/stores/cart-store';
import { formatPrice } from '@/lib/utils';
import { FREE_SHIPPING_THRESHOLD } from '@/config/constants';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getSubtotal } = useCartStore();
  const subtotal = getSubtotal();
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 pb-12">
        <Breadcrumbs items={[{ label: 'Koszyk' }]} />
        <div className="py-16 text-center">
          <ShoppingBag className="w-16 h-16 mx-auto text-border mb-4" />
          <h1 className="text-2xl font-serif font-bold mb-2">Twój koszyk jest pusty</h1>
          <p className="text-text-muted mb-6">Dodaj produkty, aby kontynuować zakupy</p>
          <Link href="/">
            <Button>Kontynuuj zakupy</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pb-12">
      <Breadcrumbs items={[{ label: 'Koszyk' }]} />

      <h1 className="text-2xl md:text-3xl font-serif font-bold mt-4 mb-8">Koszyk</h1>

      {freeShippingRemaining > 0 && (
        <div className="bg-bg-secondary p-4 mb-6 text-sm text-center">
          Do darmowej dostawy brakuje Ci jeszcze <strong>{formatPrice(freeShippingRemaining)}</strong>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => {
            const mainImage = item.product.images.find((img) => img.isMain) ?? item.product.images[0];
            return (
              <div key={item.product.id} className="flex gap-4 border-b border-border-light pb-4">
                <div className="relative w-20 h-20 flex-shrink-0 bg-bg-secondary">
                  {mainImage && (
                    <Image
                      src={mainImage.url}
                      alt={item.product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <Link
                    href={`/produkt/${item.product.slug}`}
                    className="text-sm font-medium hover:text-gold transition-colors line-clamp-2"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-sm font-bold mt-1">{formatPrice(item.product.price)}</p>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-border rounded-sm">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-bg-secondary"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 h-8 flex items-center justify-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-bg-secondary"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-1 text-text-muted hover:text-error transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-bg-secondary p-6 sticky top-24">
            <h2 className="font-semibold mb-4">Podsumowanie</h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-text-muted">Produkty</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Dostawa</span>
                <span>{freeShippingRemaining <= 0 ? 'Gratis' : 'Obliczona w kasie'}</span>
              </div>
            </div>

            <div className="border-t border-border mt-4 pt-4">
              <div className="flex justify-between font-bold">
                <span>Razem</span>
                <span className="text-lg">{formatPrice(subtotal)}</span>
              </div>
            </div>

            <Link href="/zamowienie">
              <Button className="w-full mt-6" size="lg">
                Złóż zamówienie
              </Button>
            </Link>

            <Link href="/" className="block text-center text-sm text-gold mt-3 hover:underline">
              Kontynuuj zakupy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

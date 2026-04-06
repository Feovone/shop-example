import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Moje zamówienia',
};

export default function OrdersPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-12">
      <Breadcrumbs items={[
        { label: 'Moje konto', href: '/konto' },
        { label: 'Zamówienia' },
      ]} />

      <h1 className="text-2xl md:text-3xl font-serif font-bold mt-4 mb-8">Moje zamówienia</h1>

      <div className="py-16 text-center">
        <Package className="w-12 h-12 mx-auto text-border mb-4" />
        <p className="text-text-muted">Nie masz jeszcze żadnych zamówień</p>
      </div>
    </div>
  );
}

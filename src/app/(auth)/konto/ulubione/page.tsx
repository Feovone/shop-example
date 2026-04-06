import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ulubione',
};

export default function WishlistPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-12">
      <Breadcrumbs items={[
        { label: 'Moje konto', href: '/konto' },
        { label: 'Ulubione' },
      ]} />

      <h1 className="text-2xl md:text-3xl font-serif font-bold mt-4 mb-8">Ulubione</h1>

      <div className="py-16 text-center">
        <Heart className="w-12 h-12 mx-auto text-border mb-4" />
        <p className="text-text-muted">Nie masz jeszcze żadnych ulubionych produktów</p>
      </div>
    </div>
  );
}

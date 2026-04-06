import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { mockCollections } from '@/lib/mock-data';

export const metadata: Metadata = {
  title: 'Kolekcje',
  description: 'Odkryj kolekcje biżuterii Susetti',
};

export default function CollectionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-12">
      <Breadcrumbs items={[{ label: 'Kolekcje' }]} />

      <h1 className="text-2xl md:text-3xl font-serif font-bold mb-8">Kolekcje</h1>

      <div className="space-y-8">
        {mockCollections.map((collection) => (
          <div key={collection.id} className="relative overflow-hidden bg-bg-secondary aspect-[21/9]">
            {collection.image && (
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                sizes="100vw"
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 md:px-16">
              <div className="max-w-md">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                  {collection.name}
                </h2>
                <p className="mt-2 text-white/80 text-sm md:text-base">
                  {collection.description}
                </p>
                <Link href={`/kolekcja/${collection.slug}`} className="inline-block mt-4">
                  <Button>Odkryj kolekcję</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

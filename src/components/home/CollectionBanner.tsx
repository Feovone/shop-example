import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import type { Collection } from '@/types';

interface CollectionBannerProps {
  collection: Collection;
}

export function CollectionBanner({ collection }: CollectionBannerProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden bg-bg-secondary aspect-[21/9] md:aspect-[3/1]">
          <Image
            src={collection.image}
            alt={collection.name}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 md:px-16 max-w-lg">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                {collection.name}
              </h2>
              <p className="mt-2 text-white/80 text-sm md:text-base">
                {collection.description}
              </p>
              <Link href={`/kolekcja/${collection.slug}`} className="inline-block mt-6">
                <Button>Odkryj kolekcję</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
      <Image
        src="/images/hero-banner.webp"
        alt="Niepowtarzalna biżuteria Susetti"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 lg:py-32 flex items-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-white">
            Niepowtarzalna biżuteria na każdą okazję!
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-md">
            Autorska biżuteria srebrna i złota od polskiego producenta z Gdańska
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/kategoria/motywy">
              <Button size="lg">Zobacz Motywy</Button>
            </Link>
            <Link href="/kategoria/bizuteria-srebrna">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Biżuteria Srebrna
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

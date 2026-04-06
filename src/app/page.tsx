import { HeroBanner } from '@/components/home/HeroBanner';
import { CategoryShowcase } from '@/components/home/CategoryShowcase';
import { ProductSection } from '@/components/home/ProductSection';
import { CollectionBanner } from '@/components/home/CollectionBanner';
import { BlogSection } from '@/components/home/BlogSection';
import { TrustBadges } from '@/components/home/TrustBadges';
import {
  mockNewProducts,
  mockBestsellers,
  mockFeaturedProducts,
  mockCategories,
  mockCollections,
  mockArticles,
} from '@/lib/mock-data';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategoryShowcase categories={mockCategories} />
      <ProductSection title="Nowości" products={mockNewProducts} viewAllHref="/kategoria/nowosci" />
      <ProductSection title="Bestsellery" products={mockBestsellers} viewAllHref="/kategoria/bestsellery" />
      <CollectionBanner collection={mockCollections[0]} />
      <ProductSection title="Polecane produkty" products={mockFeaturedProducts} />
      <BlogSection articles={mockArticles} />
      <TrustBadges />
    </>
  );
}

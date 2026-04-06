import type { Metadata } from 'next';
import { ProductPageClient } from './ProductPageClient';
import { mockDetailProduct, mockAllProducts, mockBestsellers } from '@/lib/mock-data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = mockAllProducts.find((p) => p.slug === slug) ?? mockDetailProduct;
  return {
    title: product.name,
    description: product.description || `${product.name} - kup w sklepie Susetti`,
    openGraph: {
      title: product.name,
      description: product.description || `${product.name} - kup w sklepie Susetti`,
      images: product.images[0]?.url ? [product.images[0].url] : [],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const found = mockAllProducts.find((p) => p.slug === slug);
  const product = found
    ? { ...mockDetailProduct, ...found, images: mockDetailProduct.images, attributes: mockDetailProduct.attributes, reviews: mockDetailProduct.reviews, description: mockDetailProduct.description }
    : mockDetailProduct;

  const related = mockBestsellers.slice(0, 4);

  return <ProductPageClient product={{ ...product, relatedProducts: related }} />;
}

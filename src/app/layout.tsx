import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { TopBar } from '@/components/layout/TopBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin', 'latin-ext'],
});

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: {
    default: 'Susetti — Sklep internetowy z biżuterią',
    template: '%s | Susetti',
  },
  description: 'Sklep internetowy jubilerski z biżuterią - biżuteria damska, męska online. Srebrna i złota biżuteria od polskiego producenta z Gdańska.',
  metadataBase: new URL('https://susetti.pl'),
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Susetti',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

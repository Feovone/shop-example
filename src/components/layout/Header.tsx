'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Heart, User, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '@/stores/cart-store';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';
import { formatPrice, asset } from '@/lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);
  const itemCount = useCartStore((s) => s.getItemCount());
  const subtotal = useCartStore((s) => s.getSubtotal());

  useEffect(() => { setMounted(true); }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/szukaj?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center h-16 md:h-20">
          <div className="flex items-center gap-2 flex-1">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -ml-2"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Link href="/" className="flex-shrink-0">
              <Image
                src={asset('/images/logo.svg')}
                alt="Susetti — sklep z biżuterią"
                width={120}
                height={30}
                className="w-[100px] h-auto md:w-[160px]"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex justify-center flex-1">
            <form onSubmit={handleSearch} className="w-full max-w-md relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Szukaj biżuterii..."
                className="w-full h-10 pl-4 pr-10 border border-border rounded-full text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-gold transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="flex items-center justify-end gap-2 md:gap-4 flex-1">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2"
              aria-label="Szukaj"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link href="/konto/ulubione" className="hidden md:flex p-2 hover:text-gold transition-colors" aria-label="Ulubione">
              <Heart className="w-5 h-5" />
            </Link>

            <Link href="/logowanie" className="hidden md:flex p-2 hover:text-gold transition-colors" aria-label="Konto">
              <User className="w-5 h-5" />
            </Link>

            <Link href="/koszyk" className="relative flex items-center gap-2 p-2 hover:text-gold transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {mounted && itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
              <span className="hidden lg:inline text-sm font-medium">
                {mounted ? formatPrice(subtotal) : formatPrice(0)}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className="md:hidden border-t border-border px-4 py-3">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Szukaj biżuterii..."
              className="w-full h-10 pl-4 pr-10 border border-border rounded-full text-sm focus:outline-none focus:border-gold"
              autoFocus
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
              <Search className="w-4 h-4 text-text-muted" />
            </button>
          </form>
        </div>
      )}

      <div className="hidden md:block border-t border-border-light">
        <MegaMenu />
      </div>

      {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
    </header>
  );
}

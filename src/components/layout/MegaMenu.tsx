'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { mainNavigation } from '@/config/navigation';
import { asset } from '@/lib/utils';
import type { NavigationItem } from '@/types';

interface PopularItem {
  href: string;
  label: string;
  price: string;
  image: string;
}

const popularByCategory: Record<string, PopularItem[]> = {
  '/kategoria/bizuteria-zlota': [
    { href: '/produkt/srebrne-kolczyki-925-skrzydla-aniola', label: 'Złote kolczyki Skrzydła Anioła', price: '169,00 zł', image: '/images/products/new/1-skrzydla-aniola.webp' },
    { href: '/produkt/srebrny-pierscionek-925-lisc-r17', label: 'Złoty pierścionek ażurowy liść', price: '119,00 zł', image: '/images/products/new/2-pierscionek-lisc.webp' },
    { href: '/produkt/srebrny-pierscionek-925-drut-kolczasty-r20', label: 'Złoty pierścionek drut kolczasty', price: '269,00 zł', image: '/images/products/new/3-pierscionek-drut.webp' },
    { href: '/produkt/srebrna-bransoletka-925-celebrytka', label: 'Złota bransoletka celebrytka', price: '449,00 zł', image: '/images/products/new/4-bransoletka-celebrytka.webp' },
    { href: '/produkt/srebrne-kolczyki-kulki-3mm', label: 'Złote kolczyki kulki 3mm', price: '39,00 zł', image: '/images/products/bestsellers/3-kulki-3mm.webp' },
    { href: '/produkt/srebrne-kolczyki-kuleczki-5mm', label: 'Złote kolczyki kuleczki 5mm', price: '42,00 zł', image: '/images/products/bestsellers/4-kuleczki-5mm.webp' },
  ],
  '/kategoria/bizuteria-srebrna': [
    { href: '/produkt/srebrne-kolczyki-925-pozlacane-wiszace', label: 'Kolczyki pozłacane wiszące', price: '155,00 zł', image: '/images/products/new/5-kolczyki-pozlacane-wiszace.webp' },
    { href: '/produkt/srebrne-kolczyki-okragle-z-szara-perla', label: 'Kolczyki z szarą perłą 12mm', price: '175,00 zł', image: '/images/products/new/6-kolczyki-szara-perla.webp' },
    { href: '/produkt/srebrne-kolczyki-nausznice-gladkie', label: 'Kolczyki nausznice gładkie', price: '55,00 zł', image: '/images/products/bestsellers/6-nausznice.webp' },
    { href: '/produkt/srebrne-kolczyki-pozlacane-polokragle', label: 'Kolczyki półokrągłe z cyrkoniami', price: '109,00 zł', image: '/images/products/bestsellers/5-polokragle-cyrkonie.webp' },
    { href: '/produkt/bransoletka-oksydowana-zielone-cyrkonie', label: 'Bransoletka zielone cyrkonie', price: '499,00 zł', image: '/images/products/featured/4-bransoletka-zielone-cyrkonie.webp' },
    { href: '/produkt/srebrne-kolczyki-z-czerwona-perla', label: 'Kolczyki z czerwoną perłą', price: '175,00 zł', image: '/images/products/bestsellers/7-czerwona-perla.webp' },
  ],
  '/kategoria/motywy': [
    { href: '/produkt/kolczyki-serce-czarne-cyrkonie', label: 'Serce z czarnymi cyrkoniami', price: '99,00 zł', image: '/images/products/featured/1-serce-czarne-cyrkonie.webp' },
    { href: '/produkt/srebrne-kolczyki-pozlacane-drzewko-szczescia', label: 'Drzewko szczęścia', price: '47,00 zł', image: '/images/products/bestsellers/1-drzewko-szczescia.webp' },
    { href: '/produkt/srebrne-kolczyki-z-cyrkoniami-skrzydla-aniola', label: 'Skrzydła Anioła z cyrkoniami', price: '62,00 zł', image: '/images/products/bestsellers/2-skrzydla-aniola.webp' },
    { href: '/produkt/kolczyki-pozlacane-grecki-wzor-okragle', label: 'Grecki wzór okrągłe', price: '99,00 zł', image: '/images/products/featured/2-grecki-wzor-okragle.webp' },
    { href: '/produkt/kolczyki-pozlacane-grecki-wzor', label: 'Grecki wzór', price: '99,00 zł', image: '/images/products/featured/3-grecki-wzor.webp' },
    { href: '/produkt/srebrny-pierscionek-925-lisc-r17', label: 'Pierścionek liść ażurowy', price: '119,00 zł', image: '/images/products/new/2-pierscionek-lisc.webp' },
  ],
  '/kategoria/komplety-srebrne': [
    { href: '/produkt/srebrne-kolczyki-pozlacane-polokragle', label: 'Komplet półokrągły z cyrkoniami', price: '109,00 zł', image: '/images/products/bestsellers/5-polokragle-cyrkonie.webp' },
    { href: '/produkt/kolczyki-serce-czarne-cyrkonie', label: 'Komplet serce czarne cyrkonie', price: '99,00 zł', image: '/images/products/featured/1-serce-czarne-cyrkonie.webp' },
    { href: '/produkt/srebrne-kolczyki-925-skrzydla-aniola', label: 'Komplet Skrzydła Anioła', price: '169,00 zł', image: '/images/products/new/1-skrzydla-aniola.webp' },
    { href: '/produkt/srebrne-kolczyki-okragle-z-szara-perla', label: 'Komplet z szarą perłą', price: '175,00 zł', image: '/images/products/new/6-kolczyki-szara-perla.webp' },
  ],
  '/kategoria/dewocjonalia': [
    { href: '/produkt/srebrny-wisiorek-krzyzyk-z-cyrkoniami', label: 'Krzyżyk z cyrkoniami', price: '89,00 zł', image: '/images/products/new/7-wisiorek-krzyzyk.webp' },
    { href: '/produkt/srebrne-kolczyki-925-pozlacane-z-perla', label: 'Medalik pozłacany', price: '145,00 zł', image: '/images/products/new/8-wisiorek-cyrkonie.webp' },
    { href: '/produkt/srebrne-kolczyki-z-czerwona-perla', label: 'Różaniec srebrny z koralem', price: '175,00 zł', image: '/images/products/bestsellers/7-czerwona-perla.webp' },
    { href: '/produkt/srebrne-kolczyki-kulki-3mm', label: 'Smoczek srebrny na chrzest', price: '39,00 zł', image: '/images/products/bestsellers/3-kulki-3mm.webp' },
  ],
};

export function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const activeItem = mainNavigation.find((item) => item.href === activeMenu);

  return (
    <nav
      onMouseLeave={() => { setActiveMenu(null); setActiveSubMenu(null); }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <ul className="flex items-center justify-center gap-1">
          {mainNavigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeMenu === item.href
                    ? 'text-gold border-b-2 border-gold'
                    : 'text-primary hover:text-gold border-b-2 border-transparent'
                }`}
                onMouseEnter={() => { setActiveMenu(item.href); setActiveSubMenu(null); }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {activeItem?.children && (
        <div className="absolute left-0 right-0 z-50 bg-white border-t border-border shadow-lg">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-center gap-1 py-3 border-b border-border-light overflow-x-auto">
              {activeItem.children.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors ${
                    activeSubMenu === sub.href
                      ? 'text-gold border-b-2 border-gold'
                      : 'text-text-light hover:text-gold border-b-2 border-transparent'
                  }`}
                  onMouseEnter={() => setActiveSubMenu(sub.href)}
                >
                  {sub.label}
                </Link>
              ))}
            </div>

            <SubContent
              items={activeItem.children}
              activeSubMenu={activeSubMenu}
              parentHref={activeItem.href}
            />
          </div>
        </div>
      )}
    </nav>
  );
}

function SubContent({ items, activeSubMenu, parentHref }: { items: NavigationItem[]; activeSubMenu: string | null; parentHref: string }) {
  const activeSub = items.find((item) => item.href === activeSubMenu);

  if (!activeSub?.children) {
    const popular = popularByCategory[parentHref] ?? [];
    return (
      <div className="py-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">Popularne</p>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {popular.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group text-center"
            >
              <div className="relative w-full aspect-square bg-bg-secondary rounded-sm mb-2 overflow-hidden">
                <Image
                  src={asset(item.image)}
                  alt={item.label}
                  fill
                  sizes="150px"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="text-xs font-medium group-hover:text-gold transition-colors line-clamp-2">
                {item.label}
              </p>
              <p className="text-xs text-text-muted mt-0.5">{item.price}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-4">
        {activeSub.children.map((child) => (
          <div key={child.href}>
            <Link
              href={child.href}
              className="text-sm font-semibold text-primary hover:text-gold transition-colors"
            >
              {child.label}
            </Link>
            {child.children && (
              <ul className="mt-1.5 space-y-1">
                {child.children.map((grandchild) => (
                  <li key={grandchild.href}>
                    <Link
                      href={grandchild.href}
                      className="text-sm text-text-light hover:text-gold transition-colors"
                    >
                      {grandchild.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border-light">
        <Link
          href={activeSub.href}
          className="text-xs font-semibold uppercase tracking-wider text-gold hover:underline"
        >
          Zobacz wszystko: {activeSub.label} →
        </Link>
      </div>
    </div>
  );
}

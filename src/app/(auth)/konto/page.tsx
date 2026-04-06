import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Package, Heart, Settings, LogOut } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Moje konto',
};

const accountLinks = [
  { icon: Package, label: 'Twoje zamówienia', href: '/konto/zamowienia', description: 'Sprawdź status zamówień' },
  { icon: Heart, label: 'Ulubione', href: '/konto/ulubione', description: 'Twoja lista życzeń' },
  { icon: Settings, label: 'Ustawienia konta', href: '/konto/ustawienia', description: 'Zmień dane i hasło' },
];

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-12">
      <Breadcrumbs items={[{ label: 'Moje konto' }]} />

      <h1 className="text-2xl md:text-3xl font-serif font-bold mt-4 mb-8">Moje konto</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {accountLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-4 p-5 border border-border hover:border-gold transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center group-hover:bg-gold/10 transition-colors">
              <item.icon className="w-5 h-5 text-text-light group-hover:text-gold transition-colors" />
            </div>
            <div>
              <p className="font-medium group-hover:text-gold transition-colors">{item.label}</p>
              <p className="text-xs text-text-muted">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <button className="flex items-center gap-2 mt-8 text-sm text-text-muted hover:text-error transition-colors">
        <LogOut className="w-4 h-4" />
        Wyloguj się
      </button>
    </div>
  );
}

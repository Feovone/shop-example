'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronLeft, Heart, User } from 'lucide-react';
import { mainNavigation } from '@/config/navigation';
import type { NavigationItem } from '@/types';

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const [stack, setStack] = useState<NavigationItem[][]>([mainNavigation]);
  const [titles, setTitles] = useState<string[]>(['Menu']);

  const pushLevel = (items: NavigationItem[], title: string) => {
    setStack((prev) => [...prev, items]);
    setTitles((prev) => [...prev, title]);
  };

  const popLevel = () => {
    setStack((prev) => prev.slice(0, -1));
    setTitles((prev) => prev.slice(0, -1));
  };

  const currentItems = stack[stack.length - 1];
  const currentTitle = titles[titles.length - 1];
  const canGoBack = stack.length > 1;

  return (
    <div className="absolute left-0 right-0 top-full bottom-0 h-[calc(100vh-100%)] z-40 bg-white overflow-y-auto md:hidden">
      <div className="p-4">
        {canGoBack && (
          <button
            onClick={popLevel}
            className="flex items-center gap-2 text-sm text-text-light mb-4 hover:text-gold transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Wróć
          </button>
        )}

        <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-3">
          {currentTitle}
        </p>

        <ul className="space-y-0 divide-y divide-border-light">
          {currentItems.map((item) => (
            <li key={item.href}>
              {item.children ? (
                <button
                  onClick={() => pushLevel(item.children!, item.label)}
                  className="flex items-center justify-between w-full py-3 text-sm font-medium"
                >
                  {item.label}
                  <ChevronRight className="w-4 h-4 text-text-muted" />
                </button>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 text-sm font-medium hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-6 border-t border-border space-y-3">
          <Link
            href="/konto/ulubione"
            onClick={onClose}
            className="flex items-center gap-3 py-2 text-sm text-text-light hover:text-gold transition-colors"
          >
            <Heart className="w-5 h-5" />
            Ulubione
          </Link>
          <Link
            href="/logowanie"
            onClick={onClose}
            className="flex items-center gap-3 py-2 text-sm text-text-light hover:text-gold transition-colors"
          >
            <User className="w-5 h-5" />
            Zaloguj się
          </Link>
        </div>
      </div>
    </div>
  );
}

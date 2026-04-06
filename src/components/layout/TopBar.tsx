'use client';

import Link from 'next/link';
import { Phone, Mail, Truck } from 'lucide-react';
import { COMPANY, FREE_SHIPPING_THRESHOLD } from '@/config/constants';

export function TopBar() {
  return (
    <div className="bg-bg-dark text-white text-xs">
      <div className="mx-auto max-w-7xl px-4 flex items-center h-8">
        <div className="hidden md:flex items-center gap-4 flex-1">
          <a href={`tel:${COMPANY.phone.replace(/-/g, '')}`} className="flex items-center gap-1 hover:text-gold-light transition-colors">
            <Phone className="w-3 h-3" />
            <span>{COMPANY.phone}</span>
          </a>
          <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-1 hover:text-gold-light transition-colors">
            <Mail className="w-3 h-3" />
            <span>{COMPANY.email}</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-1 text-gold-light flex-1">
          <Truck className="w-3 h-3" />
          <span className="font-medium">DARMOWA DOSTAWA OD {FREE_SHIPPING_THRESHOLD} ZŁ</span>
        </div>

        <div className="hidden md:flex items-center justify-end gap-4 flex-1">
          <Link href="/info/o-firmie" className="hover:text-gold-light transition-colors">O firmie</Link>
          <Link href="/blog" className="hover:text-gold-light transition-colors">Blog</Link>
        </div>
      </div>
    </div>
  );
}

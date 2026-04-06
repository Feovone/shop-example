import { clsx, type ClassValue } from 'clsx';
import { CURRENCY_SYMBOL, LOCALE } from '@/config/constants';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number): string {
  return `${price.toLocaleString(LOCALE, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${CURRENCY_SYMBOL}`;
}

export function slugify(text: string): string {
  const polishMap: Record<string, string> = {
    'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n',
    'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
    'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N',
    'Ó': 'O', 'Ś': 'S', 'Ź': 'Z', 'Ż': 'Z',
  };

  return text
    .split('')
    .map((char) => polishMap[char] ?? char)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
}

export function getImageUrl(path: string, width?: number, height?: number): string {
  if (path.startsWith('http')) return path;
  const params = width && height ? `?w=${width}&h=${height}` : '';
  return `${process.env.NEXT_PUBLIC_API_URL ?? ''}/images${path}${params}`;
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString(LOCALE, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

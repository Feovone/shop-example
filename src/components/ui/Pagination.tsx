'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  searchParams?: Record<string, string>;
}

export function Pagination({ currentPage, totalPages, baseUrl, searchParams = {} }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page > 1) {
      params.set('page', String(page));
    } else {
      params.delete('page');
    }
    const qs = params.toString();
    return qs ? `${baseUrl}?${qs}` : baseUrl;
  };

  const pages = generatePageNumbers(currentPage, totalPages);

  return (
    <nav aria-label="Paginacja" className="flex items-center justify-center gap-1 mt-8">
      <Link
        href={getPageUrl(currentPage - 1)}
        className={cn(
          'flex items-center justify-center w-9 h-9 rounded-sm text-sm transition-colors',
          currentPage <= 1 ? 'pointer-events-none opacity-30' : 'hover:bg-bg-secondary'
        )}
        aria-disabled={currentPage <= 1}
      >
        <ChevronLeft className="w-4 h-4" />
      </Link>

      {pages.map((page, i) =>
        page === '...' ? (
          <span key={`dots-${i}`} className="w-9 h-9 flex items-center justify-center text-text-muted text-sm">
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={getPageUrl(page as number)}
            className={cn(
              'flex items-center justify-center w-9 h-9 rounded-sm text-sm font-medium transition-colors',
              page === currentPage ? 'bg-primary text-white' : 'hover:bg-bg-secondary'
            )}
          >
            {page}
          </Link>
        )
      )}

      <Link
        href={getPageUrl(currentPage + 1)}
        className={cn(
          'flex items-center justify-center w-9 h-9 rounded-sm text-sm transition-colors',
          currentPage >= totalPages ? 'pointer-events-none opacity-30' : 'hover:bg-bg-secondary'
        )}
        aria-disabled={currentPage >= totalPages}
      >
        <ChevronRight className="w-4 h-4" />
      </Link>
    </nav>
  );
}

function generatePageNumbers(current: number, total: number): (number | '...')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | '...')[] = [1];

  if (current > 3) pages.push('...');

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (current < total - 2) pages.push('...');

  pages.push(total);

  return pages;
}

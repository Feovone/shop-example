'use client';

import { SORT_OPTIONS } from '@/config/constants';

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
  totalProducts?: number;
}

export function SortDropdown({ value, onChange, totalProducts }: SortDropdownProps) {
  return (
    <div className="flex items-center justify-between">
      {totalProducts !== undefined && (
        <p className="text-sm text-text-muted">
          {totalProducts} {totalProducts === 1 ? 'produkt' : 'produktów'}
        </p>
      )}
      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm text-text-muted whitespace-nowrap">
          Sortuj:
        </label>
        <select
          id="sort"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-9 px-3 pr-8 border border-border rounded text-sm bg-white focus:outline-none focus:border-gold"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

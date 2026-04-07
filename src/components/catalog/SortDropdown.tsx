'use client';

import { SORT_OPTIONS } from '@/config/constants';

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort" className="hidden sm:inline text-sm text-text-muted whitespace-nowrap">
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
  );
}

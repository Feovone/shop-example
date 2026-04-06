'use client';

import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import type { FilterGroup, ActiveFilters } from '@/types';

interface FilterSidebarProps {
  filterGroups: FilterGroup[];
  activeFilters: ActiveFilters;
  onFilterChange: (attributeSlug: string, valueSlug: string) => void;
  onClearAll: () => void;
  priceRange?: { min: number; max: number };
  onPriceChange?: (min: number, max: number) => void;
}

export function FilterSidebar({
  filterGroups,
  activeFilters,
  onFilterChange,
  onClearAll,
  priceRange,
  onPriceChange,
}: FilterSidebarProps) {
  const activeCount = Object.values(activeFilters).flat().length;

  return (
    <aside className="w-full">
      {activeCount > 0 && (
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm text-text-muted">Aktywne filtry ({activeCount})</span>
          <button
            onClick={onClearAll}
            className="text-xs text-gold hover:underline"
          >
            Wyczyść wszystkie
          </button>
        </div>
      )}

      {filterGroups.map((group) => (
        <FilterGroupSection
          key={group.attribute.slug}
          group={group}
          activeValues={activeFilters[group.attribute.slug] ?? []}
          onToggle={(valueSlug) => onFilterChange(group.attribute.slug, valueSlug)}
        />
      ))}

      {priceRange && onPriceChange && (
        <PriceFilter
          min={priceRange.min}
          max={priceRange.max}
          onChange={onPriceChange}
        />
      )}
    </aside>
  );
}

function FilterGroupSection({
  group,
  activeValues,
  onToggle,
}: {
  group: FilterGroup;
  activeValues: string[];
  onToggle: (valueSlug: string) => void;
}) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="border-b border-border-light py-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full text-sm font-semibold"
      >
        {group.attribute.name}
        <ChevronDown className={cn('w-4 h-4 transition-transform', expanded && 'rotate-180')} />
      </button>

      {expanded && (
        <div className="mt-3 space-y-2 max-h-48 overflow-y-auto">
          {group.values.map((fv) => {
            const isActive = activeValues.includes(fv.value.slug);
            return (
              <label key={fv.value.slug} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={() => onToggle(fv.value.slug)}
                  className="w-4 h-4 border-border rounded accent-gold"
                />
                <span className="text-sm text-text-light">{fv.value.value}</span>
                <span className="text-xs text-text-muted ml-auto">({fv.count})</span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

function PriceFilter({
  min,
  max,
  onChange,
}: {
  min: number;
  max: number;
  onChange: (min: number, max: number) => void;
}) {
  const [localMin, setLocalMin] = useState(String(min));
  const [localMax, setLocalMax] = useState(String(max));

  const handleSubmit = () => {
    onChange(Number(localMin) || 0, Number(localMax) || 0);
  };

  return (
    <div className="border-b border-border-light py-4">
      <p className="text-sm font-semibold mb-3">Cena (zł)</p>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={localMin}
          onChange={(e) => setLocalMin(e.target.value)}
          placeholder="od"
          className="w-full h-9 px-3 border border-border rounded text-sm"
        />
        <span className="text-text-muted">—</span>
        <input
          type="number"
          value={localMax}
          onChange={(e) => setLocalMax(e.target.value)}
          placeholder="do"
          className="w-full h-9 px-3 border border-border rounded text-sm"
        />
        <Button size="sm" onClick={handleSubmit}>
          OK
        </Button>
      </div>
    </div>
  );
}

export function ActiveFilterTags({
  activeFilters,
  filterGroups,
  onRemove,
  onClearAll,
}: {
  activeFilters: ActiveFilters;
  filterGroups: FilterGroup[];
  onRemove: (attrSlug: string, valSlug: string) => void;
  onClearAll: () => void;
}) {
  const tags: { attrSlug: string; valSlug: string; label: string }[] = [];

  for (const [attrSlug, valSlugs] of Object.entries(activeFilters)) {
    const group = filterGroups.find((g) => g.attribute.slug === attrSlug);
    for (const valSlug of valSlugs) {
      const fv = group?.values.find((v) => v.value.slug === valSlug);
      tags.push({
        attrSlug,
        valSlug,
        label: fv?.value.value ?? valSlug,
      });
    }
  }

  if (tags.length === 0) return null;

  return (
    <div className="flex items-center flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <button
          key={`${tag.attrSlug}-${tag.valSlug}`}
          onClick={() => onRemove(tag.attrSlug, tag.valSlug)}
          className="flex items-center gap-1 px-2 py-1 bg-bg-secondary text-xs rounded hover:bg-border transition-colors"
        >
          {tag.label}
          <X className="w-3 h-3" />
        </button>
      ))}
      <button onClick={onClearAll} className="text-xs text-gold hover:underline ml-2">
        Wyczyść
      </button>
    </div>
  );
}

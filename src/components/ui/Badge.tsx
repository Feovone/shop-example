import { cn } from '@/lib/utils';

type BadgeVariant = 'new' | 'sale' | 'bestseller';

interface BadgeProps {
  variant: BadgeVariant;
  className?: string;
}

const styles: Record<BadgeVariant, string> = {
  new: 'bg-gold text-white',
  sale: 'bg-error text-white',
  bestseller: 'bg-primary text-white',
};

const labels: Record<BadgeVariant, string> = {
  new: 'Nowość',
  sale: 'Wyprzedaż',
  bestseller: 'Bestseller',
};

export function Badge({ variant, className }: BadgeProps) {
  return (
    <span className={cn('px-2 py-0.5 text-xs font-semibold uppercase tracking-wide', styles[variant], className)}>
      {labels[variant]}
    </span>
  );
}

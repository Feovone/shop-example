import { Truck, RotateCcw, Shield, Gift } from 'lucide-react';

const badges = [
  { icon: Truck, title: 'Darmowa dostawa', description: 'od 200 zł' },
  { icon: RotateCcw, title: '30 dni na zwrot', description: 'darmowy zwrot InPost' },
  { icon: Shield, title: '2 lata gwarancji', description: 'na wszystkie produkty' },
  { icon: Gift, title: 'Pakowanie prezentowe', description: 'gotowe do wręczenia' },
];

export function TrustBadges() {
  return (
    <section className="py-8 border-y border-border">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge) => (
            <div key={badge.title} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center">
                <badge.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold">{badge.title}</p>
                <p className="text-xs text-text-muted">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

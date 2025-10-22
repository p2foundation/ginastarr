'use client';

import { useMemo, useState } from 'react';
import { Building2, Package, Truck, Globe2, ArrowUpRight } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Construction',
  'Procurement',
  'Transportation',
  'Import/Export',
] as const;

const PROJECTS = [
  { id: 1, title: 'Municipal Road Upgrade', category: 'Construction', location: 'Kumasi', icon: Building2 },
  { id: 2, title: 'Hospital Wing Renovation', category: 'Construction', location: 'Accra', icon: Building2 },
  { id: 3, title: 'Water Treatment Equipment', category: 'Procurement', location: 'Cape Coast', icon: Package },
  { id: 4, title: 'School Supplies Framework', category: 'Procurement', location: 'Tema', icon: Package },
  { id: 5, title: 'Bulk Haulage (Cement)', category: 'Transportation', location: 'Takoradi', icon: Truck },
  { id: 6, title: 'Last-Mile Distribution', category: 'Transportation', location: 'Tamale', icon: Truck },
  { id: 7, title: 'Agri Commodities Export', category: 'Import/Export', location: 'Ghana → ECOWAS', icon: Globe2 },
  { id: 8, title: 'Machinery Import', category: 'Import/Export', location: 'EU → Ghana', icon: Globe2 },
] as const;

export default function ProjectsBrowser() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>('All');
  const filtered = useMemo(
    () => (active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
              active === c
                ? 'bg-[var(--color-secondary)] border-[var(--color-secondary)] text-white'
                : 'bg-white border-[var(--color-muted)] text-[var(--color-foreground)] hover:bg-[var(--color-muted)]/40'
            }`}
            aria-pressed={active === c}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.id}
              className="group rounded-lg border border-[var(--color-muted)] bg-white p-6 shadow-sm transition-transform hover:translate-y-[-2px]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[var(--color-primary)]">
                  <Icon />
                </div>
                <span className="rounded bg-[var(--color-muted)] px-2 py-0.5 text-xs text-[var(--color-foreground)]">
                  {p.category}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-[var(--color-foreground)]">{p.title}</h3>
              <p className="text-sm text-[var(--color-muted-foreground)]">{p.location}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)]">
                View details <ArrowUpRight size={16} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

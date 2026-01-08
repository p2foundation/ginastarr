'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, getProjectsByCategory, type ProjectCategory } from '@/lib/projects';

const CATEGORIES: (ProjectCategory | 'All')[] = [
  'All',
  'Construction',
  'Procurement',
  'Transportation',
  'Import/Export',
] as const;

export default function ProjectsBrowser() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>('All');
  const filtered = useMemo(
    () => getProjectsByCategory(active),
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
            <Link
              key={p.id}
              href={`/projects/${p.id}`}
              className="group block rounded-lg border border-[var(--color-muted)] bg-white shadow-sm transition-all hover:translate-y-[-2px] hover:shadow-md"
            >
              {/* Image Placeholder */}
              <div className="relative aspect-video overflow-hidden rounded-t-lg bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="h-12 w-12 text-[var(--color-primary)]/30" />
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,58,138,0.1),_transparent_70%)]" />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/5 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-[var(--color-primary)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded bg-[var(--color-muted)] px-2 py-0.5 text-xs font-medium text-[var(--color-foreground)]">
                    {p.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">{p.location}</p>
                <p className="mt-2 text-sm text-[var(--color-muted-foreground)] line-clamp-2">
                  {p.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] group-hover:gap-2 transition-all">
                  View details <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

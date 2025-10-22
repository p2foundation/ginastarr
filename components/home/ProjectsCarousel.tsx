"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

const projects = [
  { title: "Accra Commercial Complex", category: "Construction", year: 2024, location: "Accra" },
  { title: "Northern Roads Upgrade", category: "Infrastructure", year: 2023, location: "Tamale" },
  { title: "Port Logistics Optimization", category: "Logistics", year: 2022, location: "Tema" },
  { title: "Healthcare Procurement Drive", category: "Procurement", year: 2024, location: "Kumasi" },
  { title: "Residential Estate", category: "Construction", year: 2023, location: "East Legon" },
  { title: "Export Facilitation", category: "Import/Export", year: 2022, location: "Takoradi" },
];

export default function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [emblaApi]);

  useEffect(() => autoplay && autoplay(), [autoplay]);

  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--color-foreground)]">Featured Projects</h2>
            <p className="mt-2 text-[var(--color-muted-foreground)]">A selection of our recent work across Ghana.</p>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {projects.map((p, i) => (
              <article key={i} className="relative min-w-[85%] sm:min-w-[48%] lg:min-w-[32%]">
                <div className="group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-[var(--color-muted)]/70">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,58,138,0.25),_transparent_60%)]" />
                    <div className="h-full w-full bg-[var(--color-background)]" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center bg-black/30">
                      <a href="#" className="rounded-md bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-white">View Details</a>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="inline-block rounded bg-[var(--color-primary)] px-2 py-1 text-xs font-semibold text-white">
                      {p.category}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-[var(--color-foreground)]">{p.title}</h3>
                    <p className="text-sm text-[var(--color-muted-foreground)]">{p.location} · {p.year}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

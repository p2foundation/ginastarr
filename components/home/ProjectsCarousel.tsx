"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import { PROJECTS } from "@/lib/projects";

export default function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [emblaApi]);

  useEffect(() => autoplay && autoplay(), [autoplay]);

  // Get featured projects (first 6)
  const featuredProjects = PROJECTS.slice(0, 6);

  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--color-foreground)]">Featured Projects</h2>
            <p className="mt-2 text-[var(--color-muted-foreground)]">A selection of our recent work across Ghana.</p>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex text-sm font-medium text-[var(--color-primary)] hover:underline"
          >
            View All Projects →
          </Link>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {featuredProjects.map((p) => {
              const Icon = p.icon;
              return (
                <article key={p.id} className="relative min-w-[85%] sm:min-w-[48%] lg:min-w-[32%]">
                  <Link href={`/projects/${p.id}`} className="group block overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-[var(--color-muted)]/70 transition-transform hover:scale-[1.02]">
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="h-16 w-16 text-[var(--color-primary)]/20" />
                      </div>
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,58,138,0.15),_transparent_70%)]" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center bg-black/30">
                        <span className="rounded-md bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-white">View Details</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <span className="inline-block rounded bg-[var(--color-primary)] px-2 py-1 text-xs font-semibold text-white">
                        {p.category}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">{p.title}</h3>
                      <p className="text-sm text-[var(--color-muted-foreground)]">{p.location} · {p.year}</p>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

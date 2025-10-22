"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";

const testimonials = [
  {
    text:
      "Working with Ginastarr was transformative for our project. Their attention to detail and commitment to quality is unmatched.",
    author: "Ama Boateng",
    company: "Accra Estates",
    year: 2024,
  },
  {
    text:
      "Professional team, timely delivery, and excellent communication throughout.",
    author: "Kofi Mensah",
    company: "Northern Works",
    year: 2023,
  },
  {
    text:
      "They handled our procurement flawlessly and saved us significant costs.",
    author: "Esi Owusu",
    company: "HealthPlus GH",
    year: 2024,
  },
  {
    text:
      "Reliable logistics partner. Our nationwide rollout was a success.",
    author: "Yaw Asante",
    company: "Ghana Logistics Co.",
    year: 2022,
  },
  {
    text:
      "A trusted partner for our import/export operations.",
    author: "Nana Adjei",
    company: "Global Trade Hub",
    year: 2023,
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 4500);
    return () => clearInterval(id);
  }, [emblaApi]);

  useEffect(() => autoplay && autoplay(), [autoplay]);

  return (
    <section className="bg-[var(--color-background)] py-20">
      <div className="container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--color-foreground)]">What Our Clients Say</h2>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="min-w-[90%] sm:min-w-[70%] lg:min-w-[48%]">
                <div className="h-full rounded-lg border border-[var(--color-muted)] bg-white p-6 shadow-sm">
                  <div className="text-5xl text-[var(--color-secondary)]" aria-hidden>“</div>
                  <p className="mt-2 text-[var(--color-foreground)]">{t.text}</p>
                  <footer className="mt-4 text-sm text-[var(--color-muted-foreground)]">
                    — {t.author}, {t.company} ({t.year})
                  </footer>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

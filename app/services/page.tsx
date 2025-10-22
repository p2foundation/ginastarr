import Link from "next/link";
import { Building2, Package, Truck, Globe2, ShieldCheck, Timer, Handshake } from "lucide-react";

export const metadata = {
  title: "Services | Ginastarr Company",
  description: "Explore our integrated services across construction, procurement, transportation, and import/export.",
};

const services = [
  { href: "/services/construction", title: "Construction", desc: "Building Tomorrow, Today", icon: Building2 },
  { href: "/services/procurement", title: "Procurement", desc: "Your Global Supply Chain Partner", icon: Package },
  { href: "/services/transportation", title: "Transportation", desc: "Delivering Excellence, On Time", icon: Truck },
  { href: "/services/import-export", title: "Import/Export", desc: "Connecting Ghana to the World", icon: Globe2 },
] as const;

export default function ServicesPage() {
  return (
    <section className="container py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold text-[var(--color-foreground)]">Integrated Services, End‑to‑End</h1>
        <p className="mt-3 text-[var(--color-muted-foreground)]">
          From concept to delivery, our multidisciplinary team executes with quality, safety, and speed. Explore how we can support your project.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <Link key={s.href} href={s.href} className="group rounded-lg border border-[var(--color-muted)] bg-white p-6 shadow-sm transition-transform hover:-translate-y-0.5">
              <div className="text-[var(--color-primary)]"><Icon /></div>
              <h2 className="mt-3 text-lg font-semibold text-[var(--color-foreground)]">{s.title}</h2>
              <p className="text-sm text-[var(--color-muted-foreground)]">{s.desc}</p>
              <div className="mt-4 text-sm font-medium text-[var(--color-primary)]">Explore →</div>
            </Link>
          );
        })}
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]"><ShieldCheck />
            <h3 className="text-base font-semibold">Quality & Safety</h3>
          </div>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">Rigorous QA/QC and HSE practices baked into every phase of delivery.</p>
        </div>
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]"><Timer />
            <h3 className="text-base font-semibold">On‑Time Delivery</h3>
          </div>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">Lean planning, reliable schedules, and transparent reporting.</p>
        </div>
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]"><Handshake />
            <h3 className="text-base font-semibold">Partner Mindset</h3>
          </div>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">We co-create solutions and stand by our work beyond handover.</p>
        </div>
      </div>
    </section>
  );
}

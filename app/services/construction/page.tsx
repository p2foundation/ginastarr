export const metadata = { title: "Construction | Ginastarr Company" };
import { Building2, Hammer, Ruler, ShieldCheck, Workflow } from "lucide-react";

export default function Page() {
  return (
    <section className="container py-16">
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold text-[var(--color-foreground)]">Construction</h1>
          <p className="mt-3 max-w-2xl text-[var(--color-muted-foreground)]">
            End‑to‑end civil and building works executed with rigorous QA/QC, safety, and transparent delivery.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-[var(--color-muted)] bg-white p-4"><div className="text-[var(--color-primary)]"><Hammer /></div><div className="mt-2 text-sm font-semibold">Civil Works</div></div>
            <div className="rounded-lg border border-[var(--color-muted)] bg-white p-4"><div className="text-[var(--color-primary)]"><Building2 /></div><div className="mt-2 text-sm font-semibold">Building</div></div>
            <div className="rounded-lg border border-[var(--color-muted)] bg-white p-4"><div className="text-[var(--color-primary)]"><Ruler /></div><div className="mt-2 text-sm font-semibold">Fit‑Out</div></div>
          </div>
        </div>
        <div className="aspect-[4/3] w-full rounded-xl border border-[var(--color-muted)] bg-white shadow-sm" />
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]"><ShieldCheck /><h3 className="text-base font-semibold">HSE First</h3></div>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">Method statements, toolbox talks, and supervision on every site.</p>
        </div>
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]"><Workflow /><h3 className="text-base font-semibold">Clear Process</h3></div>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">Design coordination, permits, execution, handover — clearly tracked.</p>
        </div>
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]"><Ruler /><h3 className="text-base font-semibold">Quality Finish</h3></div>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">Standards‑driven workmanship and documented inspections.</p>
        </div>
      </div>

      <div className="mt-16 rounded-xl border border-[var(--color-muted)] bg-white p-6 md:p-10">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Have drawings or a BOQ ready?</h3>
            <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">Share your scope for a detailed program and competitive quote.</p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-white shadow-sm">Request Quote</a>
            <a href="tel:0544746949" className="inline-flex items-center justify-center rounded-md border border-[var(--color-muted)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-foreground)]">Call Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

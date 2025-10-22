export const metadata = { title: "Import/Export | Ginastarr Company" };
import { Globe2, Ship, ShieldCheck, FileText, Package, Workflow } from "lucide-react";

export default function Page() {
  return (
    <section className="container py-16">
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold text-[var(--color-foreground)]">Import/Export</h1>
          <p className="mt-3 max-w-2xl text-[var(--color-muted-foreground)]">
            Cross‑border sourcing and trade facilitation with compliant documentation and reliable freight.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-[var(--color-muted)] bg-white p-4"><div className="text-[var(--color-primary)]"><Globe2 /></div><div className="mt-2 text-sm font-semibold">Trade Facilitation</div></div>
            <div className="rounded-lg border border-[var(--color-muted)] bg-white p-4"><div className="text-[var(--color-primary)]"><FileText /></div><div className="mt-2 text-sm font-semibold">Docs & Customs</div></div>
            <div className="rounded-lg border border-[var(--color-muted)] bg-white p-4"><div className="text-[var(--color-primary)]"><Ship /></div><div className="mt-2 text-sm font-semibold">Freight</div></div>
          </div>
        </div>
        <div className="aspect-[4/3] w-full rounded-xl border border-[var(--color-muted)] bg-white shadow-sm" />
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]"><ShieldCheck /><h3 className="text-base font-semibold">Compliance</h3></div>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">LC, invoices, packing lists, permits — handled end‑to‑end.</p>
        </div>
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]"><Package /><h3 className="text-base font-semibold">Cargo Care</h3></div>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">Proper packing, insurance coordination, and tracking.</p>
        </div>
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]"><Workflow /><h3 className="text-base font-semibold">Clear Process</h3></div>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">Supplier to port to delivery — milestones you can trust.</p>
        </div>
      </div>

      <div className="mt-16 rounded-xl border border-[var(--color-muted)] bg-white p-6 md:p-10">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Moving goods across borders?</h3>
            <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">Share origin, destination, and cargo — we’ll advise route and timelines.</p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-white shadow-sm">Start Shipment</a>
            <a href="tel:0544746949" className="inline-flex items-center justify-center rounded-md border border-[var(--color-muted)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-foreground)]">Call Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

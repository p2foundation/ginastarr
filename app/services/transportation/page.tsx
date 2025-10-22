export const metadata = { title: "Transportation | Ginastarr Company" };
import { Truck, Route, Clock4, ShieldCheck, Workflow, Package } from "lucide-react";

export default function Page() {
  return (
    <section className="container py-16">
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold text-[var(--color-foreground)]">Transportation</h1>
          <p className="mt-3 max-w-2xl text-[var(--color-muted-foreground)]">
            Reliable fleet and route planning for bulk haulage and last‑mile distribution across Ghana.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-[var(--color-muted)] bg-white p-4"><div className="text-[var(--color-primary)]"><Truck /></div><div className="mt-2 text-sm font-semibold">Bulk Haulage</div></div>
            <div className="rounded-lg border border-[var(--color-muted)] bg-white p-4"><div className="text-[var(--color-primary)]"><Package /></div><div className="mt-2 text-sm font-semibold">Last‑Mile</div></div>
            <div className="rounded-lg border border-[var(--color-muted)] bg-white p-4"><div className="text-[var(--color-primary)]"><Route /></div><div className="mt-2 text-sm font-semibold">Route Planning</div></div>
          </div>
        </div>
        <div className="aspect-[4/3] w-full rounded-xl border border-[var(--color-muted)] bg-white shadow-sm" />
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]"><Clock4 /><h3 className="text-base font-semibold">On‑Time</h3></div>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">Dispatch control, GPS tracking, and SLAs for delivery windows.</p>
        </div>
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]"><ShieldCheck /><h3 className="text-base font-semibold">Safe & Secure</h3></div>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">Driver training, vehicle checks, and cargo protection.</p>
        </div>
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]"><Workflow /><h3 className="text-base font-semibold">Clear Process</h3></div>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">Booking to POD with transparent status updates.</p>
        </div>
      </div>

      <div className="mt-16 rounded-xl border border-[var(--color-muted)] bg-white p-6 md:p-10">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Move goods with confidence</h3>
            <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">Tell us your lanes and volumes — we’ll share a schedule and rates.</p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-white shadow-sm">Request Rates</a>
            <a href="tel:0544746949" className="inline-flex items-center justify-center rounded-md border border-[var(--color-muted)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-foreground)]">Call Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

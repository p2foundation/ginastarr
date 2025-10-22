export const metadata = { title: "Procurement | Ginastarr Company" };
import { Package, ShieldCheck, ReceiptText, Handshake, Workflow, Truck } from "lucide-react";

export default function Page() {
  return (
    <section className="container py-16">
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold text-[var(--color-foreground)]">Procurement</h1>
          <p className="mt-3 max-w-2xl text-[var(--color-muted-foreground)]">
            Strategic sourcing, vendor management, and compliant purchasing that keep your projects moving.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-[var(--color-muted)] bg-white p-4"><div className="text-[var(--color-primary)]"><Package /></div><div className="mt-2 text-sm font-semibold">Capital Goods</div></div>
            <div className="rounded-lg border border-[var(--color-muted)] bg-white p-4"><div className="text-[var(--color-primary)]"><ReceiptText /></div><div className="mt-2 text-sm font-semibold">Frameworks</div></div>
            <div className="rounded-lg border border-[var(--color-muted)] bg-white p-4"><div className="text-[var(--color-primary)]"><Handshake /></div><div className="mt-2 text-sm font-semibold">Vendor Mgmt</div></div>
          </div>
        </div>
        <div className="aspect-[4/3] w-full rounded-xl border border-[var(--color-muted)] bg-white shadow-sm" />
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]"><ShieldCheck /><h3 className="text-base font-semibold">Compliance</h3></div>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">Transparent tendering, documentation, and due diligence.</p>
        </div>
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]"><Workflow /><h3 className="text-base font-semibold">Efficient Process</h3></div>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">Requisitions to PO to delivery — tracked and reported.</p>
        </div>
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]"><Truck /><h3 className="text-base font-semibold">Logistics Ready</h3></div>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">Freight coordination and customs where required.</p>
        </div>
      </div>

      <div className="mt-16 rounded-xl border border-[var(--color-muted)] bg-white p-6 md:p-10">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Need a sourcing partner?</h3>
            <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">Send your specifications or BOQ for pricing and lead‑time options.</p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-white shadow-sm">Start a RFQ</a>
            <a href="tel:0544746949" className="inline-flex items-center justify-center rounded-md border border-[var(--color-muted)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-foreground)]">Call Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

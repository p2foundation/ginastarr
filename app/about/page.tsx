export const metadata = {
  title: "About Us | Ginastarr Company",
  description: "Learn about Ginastarr Company — established in 2014, delivering construction, procurement, transportation, and international trade solutions.",
};
import { Award, CheckCircle2, Globe2, Handshake, Shield, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="container py-16">
      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-semibold text-[var(--color-foreground)]">About Ginastarr</h1>
          <p className="mt-4 max-w-2xl text-[var(--color-muted-foreground)]">
            Founded in September 2014, Ginastarr Company delivers integrated solutions across construction, procurement, transportation, and international trade. We combine deep local expertise with global standards to deliver work that is on time, on budget, and built to last.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-[var(--color-muted)] bg-white p-4">
              <div className="text-[var(--color-primary)]"><Shield /></div>
              <div className="mt-2 text-sm font-semibold">Quality First</div>
              <div className="text-xs text-[var(--color-muted-foreground)]">ISO-minded delivery</div>
            </div>
            <div className="rounded-lg border border-[var(--color-muted)] bg-white p-4">
              <div className="text-[var(--color-primary)]"><Handshake /></div>
              <div className="mt-2 text-sm font-semibold">Trusted Partner</div>
              <div className="text-xs text-[var(--color-muted-foreground)]">Long-term relationships</div>
            </div>
            <div className="rounded-lg border border-[var(--color-muted)] bg-white p-4">
              <div className="text-[var(--color-primary)]"><Globe2 /></div>
              <div className="mt-2 text-sm font-semibold">Global Reach</div>
              <div className="text-xs text-[var(--color-muted-foreground)]">Regional supply networks</div>
            </div>
          </div>
        </div>
        <div className="aspect-[4/3] w-full rounded-xl border border-[var(--color-muted)] bg-white shadow-sm"></div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]"><Award />
            <h3 className="text-lg font-semibold text-[var(--color-foreground)]">Our Mission</h3>
          </div>
          <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">To build enduring infrastructure and supply chains that power Ghana’s growth, while upholding safety, quality, and integrity.</p>
        </div>
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]"><Users />
            <h3 className="text-lg font-semibold text-[var(--color-foreground)]">Our Vision</h3>
          </div>
          <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">To be Ghana’s most reliable partner for construction, procurement, logistics, and international trade.</p>
        </div>
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]"><CheckCircle2 />
            <h3 className="text-lg font-semibold text-[var(--color-foreground)]">Our Values</h3>
          </div>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted-foreground)]">
            <li>Integrity and accountability</li>
            <li>Safety and sustainability</li>
            <li>Customer success</li>
          </ul>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-2xl font-semibold">Our Journey</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-[var(--color-muted)] bg-white p-5">
            <div className="text-sm font-semibold">2014</div>
            <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">Company founded in Accra with a focus on civil works and local procurement.</p>
          </div>
          <div className="rounded-lg border border-[var(--color-muted)] bg-white p-5">
            <div className="text-sm font-semibold">2018</div>
            <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">Expanded transportation and logistics capabilities across regions.</p>
          </div>
          <div className="rounded-lg border border-[var(--color-muted)] bg-white p-5">
            <div className="text-sm font-semibold">2022–Now</div>
            <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">International trade operations and strategic partnerships across Africa.</p>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-2xl font-semibold">Leadership</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Esther Gina Bart-Plange", role: "CEO" },
            { name: "Operations Lead", role: "Operations" },
            { name: "Commercial Lead", role: "Commercial" },
          ].map((m) => (
            <div key={m.name} className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
              <div className="h-24 w-24 rounded-full bg-[var(--color-muted)]"></div>
              <div className="mt-4 text-base font-semibold">{m.name}</div>
              <div className="text-sm text-[var(--color-muted-foreground)]">{m.role}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-xl border border-[var(--color-muted)] bg-white p-6 md:p-10">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Let’s build something enduring</h3>
            <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">Discuss your project, RFP, or supply needs and get a tailored proposal.</p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-white shadow-sm">Get a Quote</a>
            <a href="tel:0544746949" className="inline-flex items-center justify-center rounded-md border border-[var(--color-muted)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-foreground)]">Call Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

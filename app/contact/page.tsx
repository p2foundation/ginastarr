export const metadata = {
  title: "Contact | Ginastarr Company",
  description: "Get in touch with Ginastarr for quotes, consultations, and project inquiries.",
};
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="container py-16">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-semibold text-[var(--color-foreground)]">Contact Us</h1>
        <p className="mx-auto mt-2 max-w-2xl text-[var(--color-muted-foreground)]">
          Ready to start your project? Send us a message and our team will respond promptly.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Left: Form */}
        <div className="lg:col-span-3 rounded-lg border border-[var(--color-muted)] bg-white p-6 shadow-sm">
          <ContactForm />
        </div>

        {/* Right: Info + Map */}
        <aside className="lg:col-span-2 space-y-4">
          <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[var(--color-foreground)]">Office</h2>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted-foreground)]">
              <li>6 Tanbu Lane, East Legon, Accra, Ghana</li>
              <li>0544746949 | 0504230183</li>
              <li>info@ginastarr.com</li>
              <li>Mon–Fri, 9:00–17:00 GMT</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-lg border border-[var(--color-muted)] shadow-sm">
            <iframe
              title="Ginastarr Office Map"
              src="https://www.google.com/maps?q=East%20Legon%2C%20Accra%2C%20Ghana&z=14&output=embed"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}

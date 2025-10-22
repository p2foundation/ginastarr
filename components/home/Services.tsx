'use client';
import { Hammer, Truck, Ship, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Hammer,
    title: "Construction",
    description:
      "From commercial to residential, we deliver high-quality builds with precision and safety.",
    href: "/services/construction",
  },
  {
    icon: ShoppingCart,
    title: "Procurement",
    description:
      "End-to-end sourcing and supply chain solutions for cost-effective project delivery.",
    href: "/services/procurement",
  },
  {
    icon: Truck,
    title: "Transportation",
    description:
      "Reliable logistics and nationwide delivery across all regions of Ghana.",
    href: "/services/transportation",
  },
  {
    icon: Ship,
    title: "Import/Export",
    description:
      "Compliant international trade services connecting Ghana to global markets.",
    href: "/services/import-export",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--color-foreground)]">Our Core Services</h2>
          <p className="mt-3 text-[var(--color-muted-foreground)]">
            Integrated solutions across construction, procurement, transportation, and global trade.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.a
              key={s.title}
              href={s.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: "easeOut" }}
              className="group block rounded-lg bg-white p-6 shadow-sm ring-1 ring-[var(--color-muted)]/70 transition-transform hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--color-primary)] text-white">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--color-foreground)]">{s.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">{s.description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)]">
                Learn More <span aria-hidden>→</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

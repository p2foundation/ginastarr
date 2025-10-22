"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Building2, Package, Truck, Globe2, ChevronDown } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { 
        href: "/services/construction", 
        label: "Construction",
        description: "Civil works, roads, and building projects delivered on time",
        icon: Building2
      },
      { 
        href: "/services/procurement", 
        label: "Procurement",
        description: "Global sourcing and supply chain management solutions",
        icon: Package
      },
      { 
        href: "/services/transportation", 
        label: "Transportation",
        description: "Reliable logistics and fleet services across Ghana",
        icon: Truck
      },
      { 
        href: "/services/import-export", 
        label: "Import/Export",
        description: "International trade and customs clearance expertise",
        icon: Globe2
      },
    ],
  },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div
        className={`transition-colors ${
          scrolled ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-[var(--color-primary)]" aria-hidden />
            <span className="text-lg font-semibold tracking-wide text-[var(--color-foreground)]">
              Ginastarr
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <div className="relative group" key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />}
                </Link>
                {item.children ? (
                  <div className="invisible absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[600px] rounded-lg border border-[var(--color-muted)] bg-white shadow-xl opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                    <div className="grid grid-cols-[200px_1fr] gap-0">
                      {/* Left section - Overview */}
                      <div className="bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 p-5 rounded-l-lg border-r border-[var(--color-muted)]">
                        <h3 className="text-base font-semibold text-[var(--color-foreground)]">Our Services</h3>
                        <p className="mt-2 text-xs text-[var(--color-muted-foreground)] leading-relaxed">
                          Comprehensive solutions tailored to your business needs
                        </p>
                      </div>
                      
                      {/* Right section - Services Grid */}
                      <div className="grid grid-cols-2 gap-1 p-2">
                        {item.children.map((child) => {
                          const Icon = child.icon;
                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="group/item rounded-md p-3 hover:bg-[var(--color-muted)]/30 transition-colors"
                            >
                              <div className="flex items-start gap-3">
                                {Icon && (
                                  <div className="text-[var(--color-primary)] mt-0.5">
                                    <Icon className="h-5 w-5" />
                                  </div>
                                )}
                                <div className="flex-1">
                                  <div className="text-sm font-semibold text-[var(--color-foreground)] group-hover/item:text-[var(--color-primary)] transition-colors">
                                    {child.label}
                                  </div>
                                  {child.description && (
                                    <div className="mt-0.5 text-xs text-[var(--color-muted-foreground)] line-clamp-2">
                                      {child.description}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-secondary)]"
            >
              Get a Quote
            </Link>
            <a
              href="tel:0544746949"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)]"
            >
              <Phone size={18} aria-hidden /> 0544746949
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-muted)] bg-white/70 text-[var(--color-foreground)]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden border-t border-[var(--color-muted)] bg-white">
            <nav className="container py-3">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="py-1">
                  <Link
                    href={item.href}
                    className="block py-2 text-[var(--color-foreground)] font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-1 text-sm text-[var(--color-muted-foreground)]"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-white shadow-sm"
                  onClick={() => setOpen(false)}
                >
                  Get a Quote
                </Link>
                <a
                  href="tel:0544746949"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)]"
                >
                  <Phone size={18} aria-hidden /> 0544746949
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

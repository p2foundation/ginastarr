import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-0 bg-[color:var(--color-foreground)] text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-4">
        {/* Company info */}
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-[var(--color-secondary)]" aria-hidden />
            <span className="text-lg font-semibold tracking-wide">Ginastarr Company</span>
          </div>
          <p className="mt-3 text-sm/6 text-white/80">
            Building Ghana&apos;s future through excellence in construction, procurement & global trade.
          </p>
          <div className="mt-4 flex items-center gap-3 text-white/80">
            <a aria-label="LinkedIn" href="#" className="hover:text-white"><Linkedin size={18} /></a>
            <a aria-label="Facebook" href="#" className="hover:text-white"><Facebook size={18} /></a>
            <a aria-label="Instagram" href="#" className="hover:text-white"><Instagram size={18} /></a>
            <a aria-label="Twitter/X" href="#" className="hover:text-white"><Twitter size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm/6 text-white/80">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-base font-semibold">Services</h4>
          <ul className="mt-3 space-y-2 text-sm/6 text-white/80">
            <li><Link href="/services/construction" className="hover:text-white">Construction</Link></li>
            <li><Link href="/services/procurement" className="hover:text-white">Procurement</Link></li>
            <li><Link href="/services/transportation" className="hover:text-white">Transportation</Link></li>
            <li><Link href="/services/import-export" className="hover:text-white">Import/Export</Link></li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h4 className="text-base font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm/6 text-white/80">
            <li className="flex items-start gap-2"><MapPin size={18} className="mt-0.5" /> 6 Tanbu Lane, East Legon, Accra, Ghana</li>
            <li className="flex items-center gap-2"><Phone size={18} /> 0544746949</li>
            <li className="flex items-center gap-2"><Mail size={18} /> info@ginastarr.com</li>
          </ul>
          <form className="mt-4 flex overflow-hidden rounded-md bg-white/10 p-1 backdrop-blur">
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email for newsletter"
              className="flex-1 bg-transparent px-3 py-2 text-sm placeholder:text-white/60 focus:outline-none"
            />
            <button type="submit" className="rounded-md bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/70">
        © 2025 Ginastarr Company · <Link href="/privacy" className="hover:text-white">Privacy</Link> · <Link href="/terms" className="hover:text-white">Terms</Link>
      </div>
    </footer>
  );
}

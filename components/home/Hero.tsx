'use client';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[82vh] grid place-items-center overflow-hidden">
      {/* Background video (optional) */}
      <video
        className="absolute -z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      {/* Gradient overlay */}
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(30,58,138,0.85),_rgba(30,58,138,0.55)_40%,_transparent)]" />
      <div className="absolute inset-0 -z-20 bg-[var(--color-background)]" />
      <div className="absolute -z-20 inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_#1E3A8A_0%,_transparent_60%)]" />

      <div className="container relative text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight"
        >
          Building Ghana&apos;s Future Through Excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/90"
        >
          10+ Years of Trusted Construction, Procurement & Logistics Solutions
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[var(--color-secondary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
          >
            Get a Quote
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white/95 hover:bg-white/10"
          >
            Our Services
          </a>
        </motion.div>
        <div className="absolute left-1/2 top-[calc(100%-42px)] -translate-x-1/2">
          <span className="block h-10 w-[2px] animate-bounce rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}

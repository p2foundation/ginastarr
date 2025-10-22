export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)] py-16 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_right,_#F59E0B_0%,_transparent_60%)]" aria-hidden />
      <div className="container relative text-center">
        <h3 className="text-3xl font-semibold">Ready to Start Your Project?</h3>
        <p className="mx-auto mt-2 max-w-2xl text-white/85">
          Contact us today for a free consultation and discover how we can help deliver your vision.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[var(--color-secondary)] px-6 py-3 text-sm font-semibold text-white shadow-sm"
          >
            Contact Us Now
          </a>
          <a href="tel:0544746949" className="text-sm font-medium text-white/90 underline-offset-4 hover:underline">
            0544746949 · info@ginastarr.com
          </a>
        </div>
      </div>
    </section>
  );
}

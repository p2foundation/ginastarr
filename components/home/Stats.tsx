"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Years Established", value: 10, suffix: "+" },
  { label: "Projects Completed", value: 500, suffix: "+" },
  { label: "Happy Clients", value: 50, suffix: "+" },
  { label: "Core Services", value: 4, suffix: "" },
];

function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setCount(Math.round(target * p));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return count;
}

export default function Stats() {
  return (
    <section className="bg-[var(--color-primary)] py-16 text-white">
      <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, idx) => (
          <StatCard key={s.label} idx={idx} label={s.label} value={s.value} suffix={s.suffix} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ idx, label, value: target, suffix }: { idx: number; label: string; value: number; suffix: string }) {
  const value = useCountUp(target);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
      className="text-center"
    >
      <div className="text-4xl font-bold">
        {value}
        {suffix}
      </div>
      <div className="mt-1 text-sm/6 text-white/80">{label}</div>
    </motion.div>
  );
}

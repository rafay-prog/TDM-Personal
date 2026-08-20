"use client";

import { useEffect, useRef } from "react";

/**
 * Animates the numeric part of a stat value ("150+", "10×", "2,400+", "100%")
 * counting up when scrolled into view. Non-numeric values render as-is.
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;
    const target = parseFloat(match[2].replace(/,/g, ""));
    if (Number.isNaN(target)) return;
    const hasComma = match[2].includes(",");
    const prefix = match[1];
    const suffix = match[3];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const format = (n: number) => {
      const rounded = Math.round(n);
      const s = hasComma ? rounded.toLocaleString("en-US") : String(rounded);
      return `${prefix}${s}${suffix}`;
    };

    if (reduced) {
      el.textContent = format(target);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const duration = 1300;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = format(target * eased);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [match]);

  if (!match) return <span>{value}</span>;
  return <span ref={ref}>{value}</span>;
}

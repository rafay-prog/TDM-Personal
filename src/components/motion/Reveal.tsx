"use client";

import { useEffect, useRef } from "react";

/** How the block enters when it scrolls into view. */
export type RevealFrom = "up" | "left" | "right" | "snap";

const variantClass: Record<RevealFrom, string> = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  snap: "reveal-snap",
};

/** Fades/slides children in when scrolled into view. Server children stay server-rendered. */
export function Reveal({
  children,
  delay = 0,
  from = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  from?: RevealFrom;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Toggle rather than disconnect, so the entrance replays every time the
    // block scrolls back into view instead of firing once per page load.
    const io = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle("is-visible", entry.isIntersecting);
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${variantClass[from]} ${className}`}
      style={{ "--reveal-delay": `${delay}s` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

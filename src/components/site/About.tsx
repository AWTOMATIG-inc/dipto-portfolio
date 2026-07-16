"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const stats = [
  { value: 180, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "", label: "Industries Served" },
  { value: 25, suffix: "+", label: "Global Partners" },
  { value: 12, suffix: "", label: "Countries" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1400;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="text-xs tracking-[0.3em] text-muted-foreground">01 — ABOUT DIPTO</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            A creative communication ecosystem, built for the{" "}
            <span className="text-gradient-brand">next decade of brands.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-base leading-relaxed text-muted-foreground">
            Dipto Communication empowers businesses, organizations, creators and communities
            through digital innovation, strategic communication, creative production, AI-powered
            solutions and technology-driven growth. We connect craft with code, story with system —
            everything a modern brand needs to move faster, feel deeper and grow smarter.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl glass p-5">
                <div className="font-display text-3xl font-semibold text-gradient-brand">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
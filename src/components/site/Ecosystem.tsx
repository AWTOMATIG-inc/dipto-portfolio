import { Reveal } from "./Reveal";

const ring = [
  "Creative",
  "Film & Media",
  "Marketing",
  "SEO",
  "AI Automation",
  "Software",
  "Hospitality",
  "Analytics",
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 grid-perspective opacity-30" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs tracking-[0.3em] text-muted-foreground">04 — DIGITAL ECOSYSTEM</p>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            An interconnected system —{" "}
            <span className="text-gradient-brand">not a menu of services.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Strategy informs content. Content feeds data. Data trains AI. AI compounds performance.
            Every discipline at Dipto plugs into the next, so nothing about your brand lives on an
            island.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            {[
              "Unified brand + product + growth teams",
              "AI copilots embedded across the funnel",
              "One roadmap, one dashboard, one accountable partner",
            ].map((l) => (
              <li key={l} className="flex items-start gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--gradient-brand)" }}
                />
                {l}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-8 rounded-full border border-white/10" />
            <div className="absolute inset-20 rounded-full border border-white/10" />
            <div
              className="absolute inset-0 animate-spin-slower rounded-full"
              style={{
                background: "var(--gradient-brand-conic)",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
                opacity: 0.6,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-elegant">
                <span className="font-display font-semibold">DIPTO</span>
              </div>
            </div>
            {ring.map((label, i) => {
              const angle = (i / ring.length) * 2 * Math.PI - Math.PI / 2;
              const r = 180;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              return (
                <div
                  key={label}
                  className="absolute left-1/2 top-1/2 rounded-full glass px-3 py-1.5 text-xs text-foreground"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  {label}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

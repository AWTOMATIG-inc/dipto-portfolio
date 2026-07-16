import { Rocket, Lightbulb, TrendingUp, Shuffle, Gauge } from "lucide-react";
import { Reveal } from "./Reveal";

const pillars = [
  { letter: "D", name: "Development", desc: "Building lasting systems, products and skill.", icon: Rocket, color: "var(--brand-blue)" },
  { letter: "I", name: "Innovation", desc: "Rethinking what a brand or business can be.", icon: Lightbulb, color: "var(--brand-cyan)" },
  { letter: "P", name: "Progress", desc: "Measurable steps forward — every quarter.", icon: TrendingUp, color: "var(--brand-green)" },
  { letter: "T", name: "Transformation", desc: "Reshaping communication for a digital-first world.", icon: Shuffle, color: "var(--brand-yellow)" },
  { letter: "O", name: "Optimization", desc: "Tuning every touchpoint for real, compounding results.", icon: Gauge, color: "var(--brand-orange)" },
];

export function Philosophy() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] text-muted-foreground">02 — THE DIPTO PHILOSOPHY</p>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Five principles behind everything we make.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p, i) => (
            <Reveal key={p.letter} delay={i * 80}>
              <div className="group relative h-full rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:border-white/25">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background: `color-mix(in oklab, ${p.color} 18%, transparent)`,
                    color: p.color,
                  }}
                >
                  <p.icon className="h-5 w-5" />
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-semibold" style={{ color: p.color }}>
                    {p.letter}
                  </span>
                  <span className="font-display text-lg text-foreground">{p.name}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

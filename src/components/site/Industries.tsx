import {
  Landmark,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Building2,
  Clapperboard,
  Sprout,
  Hotel,
  Users,
  Factory,
} from "lucide-react";
import { Reveal } from "./Reveal";

const industries = [
  { icon: Landmark, label: "Finance" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: Building2, label: "Real Estate" },
  { icon: Clapperboard, label: "Entertainment" },
  { icon: Sprout, label: "Agriculture" },
  { icon: Hotel, label: "Hospitality" },
  { icon: Users, label: "NGO & Non-profit" },
  { icon: Factory, label: "Manufacturing" },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] text-muted-foreground">05 — INDUSTRIES</p>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Industries we serve.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((i, idx) => (
            <Reveal key={i.label} delay={(idx % 5) * 60}>
              <div className="group flex flex-col items-center gap-3 rounded-2xl glass p-6 text-center transition-all hover:-translate-y-1">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-foreground transition-all group-hover:text-primary-foreground"
                  style={{
                    background:
                      "color-mix(in oklab, var(--brand-blue) 12%, transparent)",
                  }}
                >
                  <i.icon className="h-5 w-5" />
                </div>
                <span className="text-xs tracking-wider text-muted-foreground">{i.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

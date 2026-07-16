import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const pillars = [
  {
    title: "Innovative Solutions",
    desc: "Cutting-edge technology and creative thinking for real-world impact.",
    color: "var(--brand-blue)",
  },
  {
    title: "End-to-End Ecosystem",
    desc: "From strategy to execution, all under one digital ecosystem.",
    color: "var(--brand-green)",
  },
  {
    title: "Impact Driven",
    desc: "We build solutions that create business value and social good.",
    color: "var(--brand-orange)",
  },
  {
    title: "Future Ready",
    desc: "Scalable, sustainable and built for tomorrow's challenges.",
    color: "var(--brand-yellow)",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] text-muted-foreground">06 — WHY DIPTO</p>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Why teams partner with us.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="flex items-start gap-5 rounded-2xl glass p-6">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2"
                  style={{ borderColor: p.color, color: p.color }}
                >
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

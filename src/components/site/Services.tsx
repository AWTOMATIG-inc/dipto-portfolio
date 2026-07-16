import {
  Palette,
  Film,
  MessageCircle,
  Megaphone,
  Search,
  Bot,
  Code2,
  Hotel,
  BarChart3,
} from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  { icon: Palette, title: "Creative & Brand Communication", desc: "Identity, positioning and story systems that make brands recognizable and remembered.", color: "var(--brand-blue)" },
  { icon: Film, title: "Film, Media & Content Production", desc: "Documentary, commercial and social content produced end-to-end, in-house.", color: "var(--brand-cyan)" },
  { icon: MessageCircle, title: "Social Media Management", desc: "Editorial calendars, community and campaigns that build real audiences.", color: "var(--brand-green)" },
  { icon: Megaphone, title: "Digital Marketing", desc: "Performance-driven acquisition across search, social and programmatic.", color: "var(--brand-yellow)" },
  { icon: Search, title: "Search Engine Optimization", desc: "Technical, content and authority work that compounds into organic growth.", color: "var(--brand-orange)" },
  { icon: Bot, title: "AI Automation Solutions", desc: "Custom AI agents, workflows and copilots that unlock hours every week.", color: "var(--brand-blue)" },
  { icon: Code2, title: "Website & Software Solutions", desc: "Scalable, secure, beautifully engineered products for web and mobile.", color: "var(--brand-cyan)" },
  { icon: Hotel, title: "Hospitality Digital Solutions", desc: "Booking journeys, guest experience and revenue systems for hospitality.", color: "var(--brand-green)" },
  { icon: BarChart3, title: "Analytics & Business Intelligence", desc: "Dashboards and models that turn data into confident decisions.", color: "var(--brand-orange)" },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] text-muted-foreground">03 — SERVICES</p>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            One partner. <span className="text-gradient-brand">Nine disciplines.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything strategy, story and system needs — under one roof.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-40"
                  style={{ background: s.color }}
                />
                <div
                  className="relative flex h-12 w-12 items-center justify-center rounded-xl border"
                  style={{
                    borderColor: `color-mix(in oklab, ${s.color} 40%, transparent)`,
                    color: s.color,
                    background: `color-mix(in oklab, ${s.color} 10%, transparent)`,
                  }}
                >
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-5 font-display text-lg text-foreground">{s.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

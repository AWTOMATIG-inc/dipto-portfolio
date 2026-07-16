import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const posts = [
  {
    tag: "AI",
    title: "Where AI actually earns its keep in modern marketing teams.",
    read: "6 min read",
  },
  {
    tag: "Brand",
    title: "Editorial thinking is the missing layer between brand and product.",
    read: "8 min read",
  },
  {
    tag: "Growth",
    title: "The compounding ecosystem: rethinking growth beyond channels.",
    read: "5 min read",
  },
];

export function Insights() {
  return (
    <section id="insights" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <Reveal className="max-w-2xl">
            <p className="text-xs tracking-[0.3em] text-muted-foreground">07 — INSIGHTS</p>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
              Fresh thinking from the studio.
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group flex h-full flex-col justify-between rounded-2xl glass p-6 transition-all hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="rounded-full px-2.5 py-1 text-[0.65rem] tracking-widest"
                      style={{
                        background: "color-mix(in oklab, var(--brand-blue) 18%, transparent)",
                        color: "var(--brand-cyan)",
                      }}
                    >
                      {p.tag}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <h3 className="mt-6 font-display text-lg leading-snug text-foreground">
                    {p.title}
                  </h3>
                </div>
                <div className="mt-8 text-xs text-muted-foreground">{p.read}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

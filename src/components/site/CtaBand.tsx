import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass p-10 text-center sm:p-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(600px 300px at 20% 0%, color-mix(in oklab, var(--brand-blue) 30%, transparent), transparent 70%), radial-gradient(500px 300px at 100% 100%, color-mix(in oklab, var(--brand-orange) 25%, transparent), transparent 70%)",
              }}
            />
            <div className="relative">
              <p className="text-xs tracking-[0.3em] text-muted-foreground">08 — LET&apos;S BUILD</p>
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Let&apos;s build something{" "}
                <span className="text-gradient-brand">extraordinary together.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                Tell us about your brand, your product, your community. We&apos;ll bring the
                ecosystem.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:hello@diptocommunication.com"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
                  style={{ boxShadow: "var(--shadow-glow)" }}
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="mailto:hello@diptocommunication.com?subject=Free%20Consultation"
                  className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground hover:bg-white/10"
                >
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

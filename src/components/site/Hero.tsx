import { ArrowRight, Sparkles } from "lucide-react";
import { EcosystemRing } from "./EcosystemRing";
import { ParticleField } from "./ParticleField";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 grid-perspective opacity-40" />
      <ParticleField />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="animate-[fade-in_0.8s_ease-out]">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs tracking-wider text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--brand-yellow)" }} />
            CONNECT · CREATE · EMPOWER
          </div>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            <span style={{ color: "var(--brand-blue)" }}>Innovation.</span>
            <br />
            <span style={{ color: "var(--brand-green)" }}>Creativity.</span>
            <br />
            <span className="text-gradient-brand">Sustainable Growth.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            A digital ecosystem for business, creativity, innovation and social impact, blending
            AI, strategy, storytelling and technology to power tomorrow&apos;s brands.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Let&apos;s Build Something Extraordinary
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>

        <div className="relative">
          <EcosystemRing />
        </div>
      </div>
    </section>
  );
}

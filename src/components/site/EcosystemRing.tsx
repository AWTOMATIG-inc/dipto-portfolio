export function EcosystemRing() {
  const nodes = [
    { label: "AI", angle: 0 },
    { label: "Web", angle: 60 },
    { label: "Film", angle: 120 },
    { label: "SEO", angle: 180 },
    { label: "Brand", angle: 240 },
    { label: "Data", angle: 300 },
  ];
  const R = 160;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      {/* Outer conic ring */}
      <div
        className="absolute inset-0 animate-spin-slower rounded-full"
        style={{
          background: "var(--gradient-brand-conic)",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 14px), black calc(100% - 14px))",
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 14px), black calc(100% - 14px))",
          filter: "drop-shadow(0 0 40px color-mix(in oklab, var(--brand-blue) 40%, transparent))",
        }}
      />
      {/* Inner subtle ring */}
      <div className="absolute inset-8 rounded-full border border-white/10" />
      <div className="absolute inset-16 rounded-full border border-white/5" />

      {/* Core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-40 w-40 items-center justify-center rounded-full glass">
          <div
            className="absolute inset-0 animate-pulse-glow rounded-full"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--brand-blue) 30%, transparent), transparent 70%)",
            }}
          />
          <div className="relative text-center">
            <div className="font-display text-2xl text-gradient-brand">DIPTO</div>
            <div className="mt-1 text-[0.55rem] tracking-[0.3em] text-muted-foreground">
              ECOSYSTEM
            </div>
          </div>
        </div>
      </div>

      {/* Orbiting nodes */}
      <div className="absolute inset-0 animate-spin-slow">
        {nodes.map((n) => {
          const rad = (n.angle * Math.PI) / 180;
          const x = Math.cos(rad) * R;
          const y = Math.sin(rad) * R;
          return (
            <div
              key={n.label}
              className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full glass text-xs font-medium text-foreground"
              style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
            >
              <span className="animate-spin-slower" style={{ animationDirection: "reverse" }}>
                {n.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

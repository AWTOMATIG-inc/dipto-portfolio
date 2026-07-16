export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="dipto-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--brand-blue)" />
          <stop offset="30%" stopColor="var(--brand-cyan)" />
          <stop offset="60%" stopColor="var(--brand-green)" />
          <stop offset="85%" stopColor="var(--brand-yellow)" />
          <stop offset="100%" stopColor="var(--brand-orange)" />
        </linearGradient>
      </defs>
      <circle
        cx="32"
        cy="32"
        r="24"
        fill="none"
        stroke="url(#dipto-ring)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray="140 30"
        transform="rotate(-90 32 32)"
      />
      <circle cx="32" cy="10" r="4" fill="var(--brand-blue)" />
    </svg>
  );
}

export function LogoLockup() {
  return (
    <div className="flex items-center gap-2.5">
      <LogoMark />
      <div className="flex flex-col leading-none">
        <span className="text-base font-semibold tracking-[0.18em] text-foreground">
          DIPTO
        </span>
        <span className="text-[0.6rem] tracking-[0.28em] text-muted-foreground">
          COMMUNICATION
        </span>
      </div>
    </div>
  );
}

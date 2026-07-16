"use client";

import { useEffect, useState } from "react";
import { LogoLockup } from "./Logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all sm:px-6 ${
          scrolled ? "glass" : ""
        }`}
      >
        <a href="#top" aria-label="Dipto Communication home">
          <LogoLockup />
        </a>
        <ul className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
          style={{ boxShadow: "var(--shadow-elegant)" }}
        >
          Book a Consultation
        </a>
      </nav>
    </header>
  );
}
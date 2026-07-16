import { Globe, Mail, Phone } from "lucide-react";
import { LogoLockup } from "./Logo";

const partners = ["Google Partner", "Meta Business Partner", "Microsoft Partner", "AWS Partner Network"];

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <LogoLockup />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A creative communication ecosystem blending digital innovation, AI, strategy and
              storytelling. Connect · Create · Empower.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <a href="https://www.diptocommunication.com" className="flex items-center gap-2 hover:text-foreground">
                <Globe className="h-4 w-4" /> www.diptocommunication.com
              </a>
              <a href="mailto:hello@diptocommunication.com" className="flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4" /> hello@diptocommunication.com
              </a>
              <a href="tel:+8801234567890" className="flex items-center gap-2 hover:text-foreground">
                <Phone className="h-4 w-4" /> +880 1234 567890
              </a>
            </div>
          </div>
          <FooterCol
            title="Ecosystem"
            links={[
              ["About", "#about"],
              ["Philosophy", "#ecosystem"],
              ["Services", "#services"],
              ["Industries", "#industries"],
            ]}
          />
          <FooterCol
            title="Services"
            links={[
              ["Creative & Brand", "#services"],
              ["Film & Media", "#services"],
              ["AI Automation", "#services"],
              ["Analytics & BI", "#services"],
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              ["Insights", "#insights"],
              ["Contact", "#contact"],
              ["Careers", "#contact"],
              ["Press", "#contact"],
            ]}
          />
        </div>

        <div className="mt-14 rounded-2xl glass px-6 py-5">
          <p className="text-xs tracking-[0.3em] text-muted-foreground">TECHNOLOGY PARTNERS</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-10 gap-y-3 text-sm text-foreground/80">
            {partners.map((p) => (
              <span key={p} className="font-display tracking-tight">
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Dipto Communication. All rights reserved.</p>
          <p className="tracking-[0.3em]">CONNECT · CREATE · EMPOWER</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="font-display text-sm text-foreground">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="hover:text-foreground">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

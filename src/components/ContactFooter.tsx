import { ArrowUp, Heart } from "lucide-react";
import Reveal from "@/src/components/Reveal";
import { footerContact } from "@/src/data/content";

function BrandIcon({ name, className }: { name: "instagram" | "github" | "linkedin" | "mail"; className?: string }) {
  switch (name) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
          <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.5v-1.77c-2.95.64-3.57-1.42-3.57-1.42-.48-1.23-1.18-1.56-1.18-1.56-.96-.66.07-.65.07-.65 1.06.08 1.62 1.09 1.62 1.09.94 1.62 2.48 1.15 3.08.88.1-.68.37-1.15.67-1.41-2.34-.27-4.8-1.17-4.8-5.2 0-1.15.41-2.08 1.08-2.82-.1-.27-.47-1.35.11-2.81 0 0 .88-.28 2.9 1.08a10 10 0 0 1 5.26 0c2-1.36 2.9-1.08 2.9-1.08.58 1.46.21 2.54.1 2.81.67.74 1.08 1.67 1.08 2.82 0 4.04-2.46 4.93-4.81 5.19.38.33.72.97.72 1.95v2.9c0 .28.18.61.73.5A10.5 10.5 0 0 0 12 1.5z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
  }
}

const socials = [
  { name: "mail" as const, label: "Email", handle: footerContact.email, href: `mailto:${footerContact.email}` },
  { name: "github" as const, label: "GitHub", handle: "/naufalhakims", href: footerContact.github },
  { name: "linkedin" as const, label: "LinkedIn", handle: "/naufal-syafi-hakim", href: "https://www.linkedin.com/in/naufal-syafi-hakim" },
  { name: "instagram" as const, label: "Instagram", handle: "@nplhkm._", href: footerContact.instagram },
];

export default function ContactFooter() {
  return (
    <footer id="contact" data-theme="dark" className="bg-black pb-8 text-white">
      <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8 lg:pt-16">
        {/* Social links grid */}
        <Reveal>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-4 bg-black p-5 transition-colors hover:bg-acid sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <BrandIcon name={social.name} className="size-5 text-acid transition-colors group-hover:text-black" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 transition-colors group-hover:text-black/70">
                      {social.label}
                    </p>
                    <p className="mt-0.5 text-lg font-medium text-white transition-colors group-hover:text-black sm:text-xl">
                      {social.handle}
                    </p>
                  </div>
                </div>
                <ArrowUp className="size-6 -rotate-315 text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black sm:size-7" />
              </a>
            ))}
          </div>
        </Reveal>

        {/* Giant wordmark + back-to-top */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex items-end justify-between gap-6">
            <div>
              <h2 className="font-display font-bold text-[clamp(3rem,13vw,10rem)] uppercase leading-[0.85] tracking-tight">
                {footerContact.wordmark}
              </h2>
              <p className="mt-4 flex items-center gap-2 text-sm text-white/60">
                made with{" "}
                <Heart className="size-4 fill-acid text-acid" /> by{" "}
                <span className="font-semibold text-acid">naufal</span>
              </p>
            </div>
            <a
              href="#home"
              aria-label="Back to top"
              className="mb-2 flex size-16 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-acid hover:bg-acid hover:text-black sm:size-20"
            >
              <ArrowUp className="size-6 transition-transform group-hover:-translate-y-1 sm:size-7" />
            </a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
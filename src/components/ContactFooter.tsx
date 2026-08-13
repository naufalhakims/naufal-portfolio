import { ArrowUp, Mail, Phone, Globe, MapPin } from "lucide-react";
import Reveal from "@/src/components/Reveal";
import { footerNav, footerContact, profile } from "@/src/data/content";

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8 lg:pt-28">
        {/* Nav columns */}
        <Reveal>
          <nav className="mb-16 flex flex-wrap gap-x-16 gap-y-10" aria-label="Footer">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                Menu
              </p>
              <ul className="space-y-2.5">
                {footerNav.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/80 transition-colors hover:text-acid"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                Contact
              </p>
              <ul className="space-y-2.5 text-sm text-white/80">
                <li className="flex items-center gap-2.5">
                  <Mail className="size-4 text-acid" />
                  <a href={`mailto:${footerContact.email}`} className="hover:text-acid">
                    {footerContact.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="size-4 text-acid" />
                  <a href={`tel:${footerContact.phone}`} className="hover:text-acid">
                    {footerContact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Globe className="size-4 text-acid" />
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-acid"
                  >
                    {footerContact.linkedin}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="size-4 text-acid" />
                  {footerContact.location}
                </li>
              </ul>
            </div>
          </nav>
        </Reveal>

        {/* Giant wordmark + back-to-top */}
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(3rem,13vw,10rem)] uppercase leading-[0.85] tracking-tight">
              {footerContact.wordmark}
            </h2>
            <a
              href="#home"
              aria-label="Back to top"
              className="mb-2 flex size-16 shrink-0 items-center justify-center rounded-full bg-acid text-black transition-transform hover:scale-110 sm:size-20"
            >
              <ArrowUp className="size-6 sm:size-7" />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Bottom strip */}
      <div className="mt-16 bg-acid px-5 py-4 text-center sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-black">
          {footerContact.copyright}
        </p>
      </div>
    </footer>
  );
}

import { ArrowRight } from "lucide-react";
import Reveal from "@/src/components/Reveal";
import { certifications } from "@/src/data/content";

export default function Certifications() {
  return (
    <section id="certifications" data-theme="light" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-center justify-between gap-6">
            <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] uppercase leading-[0.9] tracking-tight text-black">
              Certifications
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-acid px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-black transition-transform hover:scale-105"
            >
              Let&apos;s Talk
              <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>

        <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.05}>
              <li className="group flex flex-col gap-2 py-6 transition-colors sm:flex-row sm:items-center sm:gap-8">
                <span className="w-16 shrink-0 font-display text-2xl text-neutral-400 transition-colors group-hover:text-acid">
                  {cert.year}
                </span>
                <h3 className="flex-1 text-lg font-bold leading-snug text-black">{cert.name}</h3>
                <span className="shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                  {cert.issuer}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import Reveal from "@/src/components/Reveal";
import { certifications } from "@/src/data/content";

export default function Certifications() {
  return (
    <section id="certifications" data-theme="light" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-5">
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.75rem)] uppercase leading-[0.92] tracking-tight text-black">
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
              <li className="group flex flex-col gap-2 py-4 transition-colors sm:flex-row sm:items-center sm:gap-6">
                <span className="w-16 shrink-0 font-display font-bold text-2xl text-neutral-400 transition-[color,-webkit-text-stroke] group-hover:text-acid group-hover:[-webkit-text-stroke:0.5px_#0A0A0A]">
                  {cert.year}
                </span>
                <h3 className="flex-1 text-base font-bold leading-snug text-black">{cert.name}</h3>
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

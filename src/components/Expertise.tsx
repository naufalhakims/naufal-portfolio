import Reveal from "@/src/components/Reveal";
import { expertise, education } from "@/src/data/content";

export default function Expertise() {
  return (
    <section id="about" data-theme="light" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.75rem)] uppercase leading-[0.92] tracking-tight text-black">
              {expertise.headline}
            </h2>
            {expertise.filters.length > 0 && (
              <div className="flex flex-wrap gap-2.5">
                {expertise.filters.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-neutral-300 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-600"
                  >
                    {f}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Reveal>

        <div className="grid gap-3 md:grid-cols-3">
          {expertise.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col justify-between rounded-2xl p-8 ${
                  stat.featured
                    ? "bg-acid text-black"
                    : "border border-neutral-200 bg-white text-black"
                }`}
              >
                <p
                  className={`text-xs font-bold uppercase tracking-[0.18em] ${
                    stat.featured ? "text-black/70" : "text-neutral-500"
                  }`}
                >
                  {stat.label}
                </p>
                <p className="mt-8 font-display font-bold text-[clamp(2.25rem,4.5vw,3.25rem)] leading-none tracking-tight">
                  {stat.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education card */}
        <Reveal delay={0.15}>
          <div className="mt-3 flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                Education
              </p>
              <h3 className="mt-2 text-lg font-bold text-black">{education.school}</h3>
              <p className="mt-1 text-sm text-neutral-600">{education.degree}</p>
            </div>
            <div className="shrink-0 text-left sm:text-right">
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
                {education.period}
              </p>
              <p className="text-xs text-neutral-500">{education.location}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

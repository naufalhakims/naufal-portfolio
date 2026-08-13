"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/src/components/Reveal";
import { experience, experienceFilters } from "@/src/data/content";

type FilterKey = "all" | "work" | "organization";

export default function ExperienceGrid() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const visible = experience
    .filter((e) => filter === "all" || e.type === filter)
    .sort((a, b) => {
      if (filter !== "all") return 0;
      return a.type === b.type ? 0 : a.type === "work" ? -1 : 1;
    });

  return (
    <section id="experience" data-theme="light" className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] uppercase leading-[0.9] tracking-tight text-black">
              Experience
            </h2>
            <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter experience by type">
              {experienceFilters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key as FilterKey)}
                  aria-pressed={filter === f.key}
                  className={`rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors ${
                    filter === f.key
                      ? "border-black bg-black text-white"
                      : "border-neutral-300 text-neutral-600 hover:border-black"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <motion.div layout className="grid grid-cols-1 gap-3">
          <AnimatePresence mode="popLayout">
            {visible.map((exp) => (
              <motion.article
                layout
                key={exp.role}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={
                  exp.featured
                    ? "group flex min-h-[260px] flex-col justify-between rounded-2xl bg-acid p-5 text-black transition-transform hover:-translate-y-1 lg:min-h-[300px]"
                    : "group flex min-h-[260px] flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 text-black transition-transform hover:-translate-y-1 hover:border-black lg:min-h-[300px]"
                }
                data-cursor-view
              >
                {exp.featured ? (
                  <>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/60">
                        {exp.period}
                      </p>
                      <h3 className="mt-3 font-display text-2xl uppercase leading-tight tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-black/80">{exp.org}</p>
                      <p className="mt-4 text-xs leading-relaxed text-black/70">
                        {exp.points[0]}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-6 size-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                ) : (
                  <>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                        {exp.period}
                      </p>
                      <h3 className="mt-3 text-base font-bold leading-snug">{exp.role}</h3>
                      <p className="mt-1 text-sm font-semibold text-neutral-500">{exp.org}</p>
                      <ul className="mt-4 space-y-2">
                        {exp.points.map((point) => (
                          <li key={point} className="flex gap-2 text-xs leading-relaxed text-neutral-600">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-acid" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                      <ArrowUpRight className="size-4" />
                      {exp.location}
                    </div>
                  </>
                )}
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/src/components/Reveal";
import { experience, experienceFilters } from "@/src/data/content";

type FilterKey = "all" | "work" | "organization";

// Bolds numeric achievements like "400+" or "90%" inside a bullet point.
const NUM_RE = /(\d[\d,]*\.?\d*\s?(?:GB|MB|KB|ms)?%?\+?)/;

function Highlight({ text }: { text: string }) {
  const parts = text.split(NUM_RE);
  return (
    <span>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-bold">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </span>
  );
}

export default function ExperienceGrid() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const visible = experience.filter((e) => filter === "all" || e.type === filter);

  return (
    <section id="experience" data-theme="light" className="bg-neutral-50 py-16 transition-colors duration-300 dark:bg-zinc-950 lg:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.75rem)] uppercase leading-[0.92] tracking-tight text-black dark:text-white">
                Experience
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                Here are some of the roles where I already worked and contributed so far
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter experience by type">
              {experienceFilters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key as FilterKey)}
                  aria-pressed={filter === f.key}
                  className={`rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors ${
                    filter === f.key
                      ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                      : "border-neutral-300 text-neutral-600 hover:border-black dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-white"
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
            {visible.map((exp) => {
              const isFeatured = exp.featured && exp.type === "work";

              return (
                <motion.article
                  layout
                  key={exp.role}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={
                    isFeatured
                      ? "group flex min-h-[220px] flex-col justify-between rounded-2xl bg-acid p-6 text-black transition-transform hover:-translate-y-1 lg:min-h-[240px]"
                      : "group flex min-h-[220px] flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 text-black transition-transform hover:-translate-y-1 hover:border-black dark:border-neutral-800 dark:bg-zinc-900 dark:text-white dark:hover:border-white lg:min-h-[240px]"
                  }
                >
                {isFeatured ? (
                  <>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/60">
                        {exp.period}
                      </p>
                      <h3 className="mt-2 font-display font-bold text-xl uppercase leading-tight tracking-tight sm:text-2xl">
                        {exp.role}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-black/80">{exp.org}</p>
                      <ul className="mt-3 max-w-3xl space-y-1.5">
                        {exp.points.map((point, index) => (
                          <li key={`${point}-${index}`} className="flex gap-2 text-sm leading-relaxed text-black/70">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black/50" />
                            <Highlight text={point} />
                          </li>
                        ))}
                      </ul>
                      {exp.techStack && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.techStack.map((tech) => (
                            <span key={tech} className="rounded-full bg-black/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <ArrowUpRight className="mt-6 size-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                ) : (
                  <>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                        {exp.period}
                      </p>
                      <h3 className="mt-2 text-lg font-bold leading-snug">{exp.role}</h3>
                      <p className="mt-1 text-sm font-semibold text-neutral-500 dark:text-neutral-400">{exp.org}</p>
                      <ul className="mt-3 space-y-1.5">
                        {exp.points.map((point) => (
                          <li key={point} className="flex gap-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-acid" />
                            <Highlight text={point} />
                          </li>
                        ))}
                      </ul>
                      {exp.techStack && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.techStack.map((tech) => (
                            <span key={tech} className="rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                      <ArrowUpRight className="size-4" />
                      {exp.location}
                    </div>
                  </>
                )}
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/src/components/Reveal";
import { projects, projectFilters } from "@/src/data/content";

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");

  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="projects" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] uppercase leading-[0.9] tracking-tight text-black">
              Projects
            </h2>
            <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter projects by type">
              {projectFilters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
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

        <motion.div layout className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={
                  project.featured
                    ? "group flex min-h-[280px] flex-col justify-between rounded-2xl bg-acid p-8 text-black transition-transform hover:-translate-y-1"
                    : "group flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white text-black transition-transform hover:-translate-y-1 hover:border-black"
                }
              >
                {project.featured ? (
                  <>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/60">
                        Featured
                      </p>
                      <h3 className="mt-3 font-display text-3xl uppercase leading-tight tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-black/70">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={`${tag}-${i}`}
                            className="rounded-full bg-black/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] underline-offset-4 hover:underline"
                      >
                        View Project
                        <ArrowUpRight className="size-4" />
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      {/* TODO: replace placeholder image with a real grayscale screenshot */}
                      <Image
                        src={project.image}
                        alt={`${project.title} project`}
                        fill
                        className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 40rem"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-bold leading-snug">{project.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {project.description}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span
                              key={`${tag}-${i}`}
                              className="rounded-full border border-neutral-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] underline-offset-4 hover:underline"
                        >
                          View Project
                          <ArrowUpRight className="size-4" />
                        </a>
                      </div>
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

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/src/components/Reveal";
import ProjectCard from "@/src/components/ProjectCard";
import ProjectDetail from "@/src/components/ProjectDetail";
import { projects, projectFilters, type Project } from "@/src/data/content";

const MAX_CARDS = 5;

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [expanded, setExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visible = projects.filter((p) => filter === "all" || p.category === filter);
  const isTruncated = visible.length > MAX_CARDS;
  const shown = isTruncated && !expanded ? visible.slice(0, MAX_CARDS) : visible;

  return (
    <section id="projects" data-theme="light" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.75rem)] uppercase leading-[0.92] tracking-tight text-black">
              Projects
            </h2>
            <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter projects by type">
              {projectFilters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => {
                    setFilter(f.key);
                    setExpanded(false);
                  }}
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

        <motion.div layout className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {shown.map((project) => (
            <ProjectCard key={project.title} project={project} onOpen={setSelectedProject} />
          ))}

          {/* Reveal remaining cards when a category has more than 5 */}
          {isTruncated && !expanded && (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              data-cursor-view
              className="group flex min-h-[190px] flex-col items-start justify-between rounded-2xl border border-dashed border-neutral-300 p-4 text-left text-black transition-colors hover:border-black"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                {visible.length - MAX_CARDS} more
              </span>
              <span className="flex items-center gap-2 font-display font-bold text-xl uppercase tracking-tight">
                See all projects
                <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            key={selectedProject.title}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
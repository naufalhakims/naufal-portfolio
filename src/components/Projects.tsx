"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import Reveal from "@/src/components/Reveal";
import { projects, projectFilters, type Project } from "@/src/data/content";

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  const sourceUrl = project.sourceCode ?? (project.link !== "#" ? project.link : undefined);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/75 p-4 sm:p-8"
      role="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="my-auto w-full max-w-4xl overflow-hidden rounded-2xl bg-white text-black shadow-2xl"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div className="flex items-start justify-between gap-6 border-b border-neutral-200 p-6 sm:p-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
              {project.category}
            </p>
            <h2 id="project-dialog-title" className="mt-2 font-display font-bold text-3xl uppercase leading-none sm:text-5xl">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full border border-neutral-200 p-2 transition-colors hover:border-black"
            aria-label="Close project details"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm leading-relaxed text-neutral-600">{project.description}</p>
            <div className="mt-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">Tech stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={`${tag}-${index}`} className="rounded-full bg-acid px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.sourcePrivate ? (
                <span className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-500">
                  Source code private
                </span>
              ) : sourceUrl ? (
                <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-acid hover:text-black">
                  Link to source code <ExternalLink className="size-3.5" />
                </a>
              ) : (
                <span className="text-xs text-neutral-500">Source link not added yet.</span>
              )}
              {project.livePreview && (
                <a
                  href={project.livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors hover:bg-acid"
                >
                  Open live preview <ExternalLink className="size-3.5" />
                </a>
              )}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">Live preview</p>
            <div className="relative mt-3 aspect-[16/10] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
              <Image
                src={project.image}
                alt={`${project.title} preview image`}
                fill
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 100vw, 40rem"
              />
            </div>
            {!project.livePreview && (
              <p className="mt-3 text-sm text-neutral-500">
                This project does not have a browser-based live preview. See the source repository for details.
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visible = projects.filter((p) => filter === "all" || p.category === filter);

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

        <motion.div layout className="grid grid-cols-1 gap-3 md:grid-cols-3">
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
                    ? "group flex min-h-[190px] flex-col justify-between rounded-2xl bg-acid p-4 text-black transition-transform hover:-translate-y-1"
                    : "group flex min-h-[190px] flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white text-black transition-transform hover:-translate-y-1 hover:border-black"
                }
                data-cursor-view
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.title}`}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                {project.featured ? (
                  <>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/60">
                        Featured
                      </p>
                      <h3 className="mt-2 font-display font-bold text-lg uppercase leading-tight tracking-tight sm:text-xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-black/70">
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
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] underline-offset-4 hover:underline"
                      >
                        View Project
                        <ArrowUpRight className="size-4" />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      {/* TODO: replace placeholder image with a real grayscale screenshot */}
                      <Image
                        src={project.image}
                        alt={`${project.title} project`}
                        fill
                        className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 40rem"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="text-base font-bold leading-snug">{project.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {project.description}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center justify-between gap-2.5">
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
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            setSelectedProject(project);
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] underline-offset-4 hover:underline"
                        >
                          View Project
                          <ArrowUpRight className="size-4" />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </motion.article>
            ))}
          </AnimatePresence>
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

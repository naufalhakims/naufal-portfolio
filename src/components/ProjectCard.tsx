"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/src/data/content";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const shownTags = project.tags.slice(0, 3);
  const extraCount = project.tags.length - shownTags.length;

  return (
    <article
      className={
        project.featured
          ? "group flex min-h-[190px] flex-col overflow-hidden rounded-2xl bg-acid text-black transition-transform hover:-translate-y-1"
          : "group flex min-h-[190px] flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white text-black transition-transform hover:-translate-y-1 hover:border-black dark:border-neutral-800 dark:bg-zinc-900 dark:text-white dark:hover:border-white"
      }
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onClick={() => onOpen(project)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(project);
        }
      }}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/10">
        <Image
          src={project.image}
          alt={`${project.title} project`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 40rem"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div>
          {project.featured && (
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/60">
              Featured
            </p>
          )}
          <h3 className={project.featured ? "mt-2 font-display font-bold text-lg uppercase leading-tight tracking-tight sm:text-xl" : "text-base font-bold leading-snug"}>
            {project.title}
          </h3>
        </div>

        {/* Tech stack — first 3, "+N" if more */}
        <div className="mb-5 mt-5 flex flex-wrap gap-1.5">
          {shownTags.map((tag, i) => (
            <span
              key={`${tag}-${i}`}
              className={
                project.featured
                  ? "rounded-full bg-black/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em]"
                  : "rounded-full border border-neutral-200 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-neutral-600 dark:border-neutral-700 dark:text-neutral-300"
              }
            >
              {tag}
            </span>
          ))}
          {extraCount > 0 && (
            <span
              className={
                project.featured
                  ? "rounded-full bg-black/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em]"
                  : "rounded-full border border-neutral-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-neutral-600 dark:border-neutral-700 dark:text-neutral-300"
              }
            >
              +{extraCount}
            </span>
          )}
        </div>

        {/* View project — pinned bottom-right */}
        <span
          className={`mt-auto inline-flex items-center gap-1.5 self-end text-xs font-bold uppercase tracking-[0.15em] underline-offset-4 group-hover:underline ${
            project.featured ? "text-black/80" : "text-black dark:text-white"
          }`}
        >
          View Project
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </article>
  );
}

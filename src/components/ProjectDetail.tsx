"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import type { Project } from "@/src/data/content";

export default function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
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
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag, index) => (
                  <span key={`${tag}-${index}`} className="rounded-full bg-acid px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em]">
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
                  Open project link <ExternalLink className="size-3.5" />
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
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">Gallery</p>
            <div className="relative mt-3 aspect-[16/10] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
              <Image
                src={project.image}
                alt={`${project.title} gallery image`}
                fill
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 100vw, 40rem"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Marquee from "@/src/components/Marquee";
import { heroSkills, profile, cvUrl, heroPhoto } from "@/src/data/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const lastName = profile.name.replace(`${profile.firstName} `, "");

  return (
    <section id="home" data-theme="dark" className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute -left-24 top-40 size-72 rounded-full bg-acid/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-px w-1/3 bg-acid/50" />

      <div className="relative mx-auto grid min-h-[calc(100svh-78px)] max-w-7xl items-center gap-12 px-5 pb-14 pt-32 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-12 lg:pb-20 lg:pt-36">
        <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
          <motion.div variants={item} className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
            <span className="size-2 rounded-full bg-acid" />
            {profile.location} · Portfolio 2026
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-4xl font-display font-bold text-[clamp(3.8rem,9vw,8.5rem)] leading-[0.84] tracking-[-0.06em] text-white"
          >
            <span className="block">Hi, I&apos;m</span>
            <span className="mt-3 block">
              {profile.firstName}{" "}
              <span className="font-serif font-normal italic tracking-[-0.08em] text-acid">{lastName}</span>
            </span>
          </motion.h1>

          <motion.div variants={item} className="mt-8 flex max-w-2xl items-start gap-3 sm:gap-5">
            <ArrowRight className="mt-1 size-7 shrink-0 text-acid sm:size-9" strokeWidth={1.5} />
            <p className="text-[clamp(1.3rem,2.6vw,2.25rem)] font-medium leading-[1.05] tracking-tight text-white">
              an <span className="text-acid">information technology student</span> building with data, systems, and curiosity.
            </p>
          </motion.div>

          <motion.p variants={item} className="mt-7 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-acid px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-black transition-transform hover:scale-105"
            >
              Explore my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:border-acid hover:text-acid"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex max-w-2xl flex-wrap gap-2">
            {heroSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 2 }}
          transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[31rem] lg:justify-self-end"
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-acid/10 blur-2xl" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/15 shadow-[20px_24px_0_rgba(212,255,61,0.18)]">
            <Image
              src={heroPhoto}
              alt={`Portrait of ${profile.firstName} ${lastName}`}
              fill
              priority
              className="object-cover grayscale contrast-105"
              style={{ objectPosition: "50% 38%" }}
              sizes="(max-width: 1024px) 85vw, 31rem"
            />
            <div className="absolute left-5 top-5 rounded-full bg-black px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-acid">
              01 / Profile
            </div>
            <div className="absolute bottom-5 right-5 rounded-full border border-white/25 bg-black/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
              NHS · Surabaya
            </div>
          </div>
        </motion.div>
      </div>

      <Marquee />
    </section>
  );
}

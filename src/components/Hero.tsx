"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Marquee from "@/src/components/Marquee";
import { profile, cvUrl } from "@/src/data/content";

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
    <section id="home" data-theme="dark" className="relative min-h-screen overflow-hidden bg-black">
      <div className="pointer-events-none absolute -left-24 top-40 size-72 rounded-full bg-acid/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-px w-1/3 bg-acid/50" />

      <div className="relative mx-auto grid min-h-[calc(100svh-44px)] max-w-7xl items-center gap-8 px-5 pb-8 pt-24 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-12 lg:pb-8 lg:pt-24">
        <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
          <motion.h1
            variants={item}
            className="max-w-none font-display font-bold text-[clamp(2.4rem,5.5vw,5.1rem)] leading-[0.92] tracking-[-0.06em] text-white lg:whitespace-nowrap"
          >
            <span className="block">Hi! I&apos;m {profile.firstName}{" "}<span className="font-serif font-normal italic tracking-[-0.08em] text-acid">{lastName}</span></span>
          </motion.h1>

          <motion.div variants={item} className="mt-5 flex max-w-2xl items-start gap-3 sm:gap-4">
            <ArrowRight className="mt-1 size-7 shrink-0 text-acid sm:size-9" strokeWidth={2} />
            <p className="text-[clamp(1.1rem,2vw,1.75rem)] font-medium leading-[1.05] tracking-tight text-white">
              a <span className="font-serif font-normal italic tracking-[-0.08em] text-acid">Software Engineer</span> building with data, systems, and curiosity.
            </p>
          </motion.div>

          <motion.p variants={item} className="mt-5 max-w-xl text-sm leading-relaxed text-white/60 sm:text-[15px]">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-3">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[22rem] lg:justify-self-end lg:translate-x-20"
        >
          <div className="absolute -inset-8 rounded-full bg-acid/15 blur-3xl" aria-hidden="true" />

          <div className="relative aspect-[3/5] overflow-hidden bg-white/[0.02]">
            {/* ghost initial */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-14 select-none font-display text-[15rem] font-bold leading-none text-white/5"
            >
              N
            </span>

            {/* registration marks */}
            <span aria-hidden="true" className="absolute left-3 top-3 size-4 border-l-2 border-t-2 border-acid" />
            <span aria-hidden="true" className="absolute bottom-3 right-3 size-4 border-b-2 border-r-2 border-acid" />

            {/* cutout portrait */}
            <Image
              src="/photos/naufal-cutout.png"
              alt={`Portrait of ${profile.firstName} ${lastName}`}
              fill
              priority
              sizes="(max-width: 1024px) 85vw, 22rem"
              className="object-contain grayscale contrast-105 drop-shadow-[0_16px_30px_rgba(0,0,0,0.6)]"
            />

            {/* top spec strip */}
            <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/75 to-transparent px-5 pb-8 pt-4">
              <div className="flex items-start justify-between gap-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-acid">Fig. 01 — Portrait</p>
                <p className="text-right text-[9px] font-bold uppercase tracking-[0.28em] text-white/70">Hello!</p>
              </div>
            </div>

            {/* vertical watermark */}
            <p
              aria-hidden="true"
              className="pointer-events-none absolute bottom-1/2 right-2 translate-y-1/2 text-[10px] font-bold uppercase tracking-[0.6em] text-white/35 [writing-mode:vertical-rl]"
            >
              {profile.name}
            </p>

            {/* bottom spec strip */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-5 pb-4 pt-8">
              <div className="flex items-end justify-between gap-4 border-t border-white/25 pt-3">
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/85">
                  {profile.name}
                </p>
                <p className="text-right text-[9px] font-bold uppercase tracking-[0.28em] text-white/55">
                  {profile.location}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="lg:absolute lg:inset-x-0 lg:bottom-0">
        <Marquee />
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, MoveRight } from "lucide-react";
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
      <Image
        src="/photos/sigma-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="pointer-events-none object-cover object-[right_top] lg:object-center"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/45" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />

      <div className="relative mx-auto grid min-h-[calc(100svh-44px)] max-w-7xl items-center gap-8 px-5 pb-8 pt-24 sm:px-8 lg:grid-cols-[1.18fr_0.82fr] lg:gap-12 lg:px-12 lg:pb-8 lg:pt-24">
        <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
          <motion.h1
            variants={item}
            className="max-w-none font-display font-bold text-[clamp(1.5rem,3.4vw,3.1rem)] leading-[0.96] tracking-[-0.02em] text-white lg:whitespace-nowrap"
          >
            <span className="block">Hi! I&apos;m <span className="font-serif font-normal italic tracking-[0.01em] text-acid">{profile.name}</span></span>
          </motion.h1>

          <motion.div variants={item} className="mt-2 flex max-w-4xl items-start gap-4 sm:gap-6">
            <MoveRight aria-hidden="true" className="mt-3 h-4 w-20 shrink-0 text-acid sm:mt-3.5 sm:h-5 sm:w-28 lg:mt-4 lg:h-8 lg:w-10" strokeWidth={1.5} />
            <p className="font-display text-[clamp(1.5rem,3.4vw,3.1rem)] font-bold leading-[1.04] tracking-[0em] text-white">
              <span className="block">a software engineer</span>
            </p>
          </motion.div>

          <motion.p variants={item} className="mt-7 max-w-xl text-sm leading-relaxed text-white/60 sm:text-[15px]">
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

      </div>

      <div className="lg:absolute lg:inset-x-0 lg:bottom-0">
        <Marquee />
      </div>
    </section>
  );
}

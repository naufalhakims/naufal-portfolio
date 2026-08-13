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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section id="home" data-theme="dark" className="relative overflow-hidden bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-10 pt-28 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-16 lg:pt-36">
        {/* Left: copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-5 inline-block rounded-full border border-white/25 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80"
          >
            {profile.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.5rem,8vw,6rem)] uppercase leading-[0.9] tracking-tight text-white"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-acid"
          >
            {profile.role}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-full bg-acid px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-black transition-transform hover:scale-105"
            >
              View My Work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:border-acid hover:text-acid"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </motion.div>

          {/* Floating skill badge chips */}
          <motion.div variants={item} className="mt-12 flex flex-wrap gap-3">
            {heroSkills.map((skill, i) => (
              <motion.span
                key={skill}
                className="rounded-lg border border-white/15 bg-white px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-black"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: grayscale photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          {/* Swappable portrait — replace /photos/hero.svg with a real grayscale photo */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-800">
            <Image
              src={heroPhoto}
              alt={`Grayscale portrait of ${profile.firstName}`}
              fill
              priority
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 24rem, 28rem"
            />
          </div>
        </motion.div>
      </div>

      {/* Lime transition strip into the light expertise section */}
      <Marquee />
    </section>
  );
}

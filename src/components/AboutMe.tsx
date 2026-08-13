import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/src/components/Reveal";
import { profile, aboutMePhoto } from "@/src/data/content";

export default function AboutMe() {
  return (
    <section id="about-me" className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-center justify-between gap-6">
            <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] uppercase leading-[0.9] tracking-tight text-black">
              About Me
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-transform hover:scale-105"
            >
              Get In Touch
              <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-neutral-600">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
              <p className="pt-2 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                {profile.location}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="overflow-hidden rounded-2xl bg-neutral-200">
              {/* Swappable photo — replace /photos/about.jpg with a real grayscale portrait */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={aboutMePhoto.src}
                  alt={aboutMePhoto.caption}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 1024px) 100vw, 40rem"
                />
              </div>
              <figcaption className="border-t border-neutral-200 bg-white px-6 py-4 text-sm font-semibold text-neutral-700">
                {aboutMePhoto.caption}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

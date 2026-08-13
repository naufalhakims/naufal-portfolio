"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/src/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[data-theme], footer[data-theme]"));

    const updateThemeFromViewport = () => {
      const underneath = document
        .elementsFromPoint(window.innerWidth / 2, 40)
        .map((element) => element.closest<HTMLElement>("[data-theme]"))
        .find((section): section is HTMLElement => Boolean(section));

      if (underneath) {
        setTheme(underneath.dataset.theme === "light" ? "light" : "dark");
      }
    };

    const sectionObserver = new IntersectionObserver(
      () => updateThemeFromViewport(),
      { rootMargin: "-76px 0px -70% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    const activeObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55%", threshold: 0 },
    );

    sections.forEach((section) => sectionObserver.observe(section));
    updateThemeFromViewport();
    window.addEventListener("scroll", updateThemeFromViewport, { passive: true });
    window.addEventListener("resize", updateThemeFromViewport, { passive: true });
    nav.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) activeObserver.observe(section);
    });

    return () => {
      sectionObserver.disconnect();
      activeObserver.disconnect();
      window.removeEventListener("scroll", updateThemeFromViewport);
      window.removeEventListener("resize", updateThemeFromViewport);
    };
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-250 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <nav
        className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="font-display text-lg uppercase tracking-[0.12em] transition-colors duration-250 hover:text-acid"
        >
          Naufal's
        </a>

        <ul className="hidden items-center gap-7 md:flex lg:gap-9">
          {nav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setActive(item.href.slice(1))}
                className={`nav-link relative block text-[12px] font-medium uppercase tracking-[0.12em] transition-colors duration-250 hover:text-acid ${
                  active === item.href.slice(1) ? "nav-link--active" : ""
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 transition-colors duration-250 hover:text-acid md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-40 flex flex-col bg-black px-8 pt-28 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {nav.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <a
                    href={item.href}
                    onClick={() => { setOpen(false); setActive(item.href.slice(1)); }}
                    className="block py-3 font-display text-4xl uppercase tracking-tight text-white transition-colors hover:text-acid"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-10"
            >
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-acid px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-black"
              >
                Let&apos;s Connect
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

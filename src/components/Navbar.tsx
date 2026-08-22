"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { nav } from "@/src/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>("home");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextDarkMode = savedTheme ? savedTheme === "dark" : prefersDark;

    setDarkMode(nextDarkMode);
    document.documentElement.classList.toggle("dark", nextDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const nextDarkMode = !darkMode;
    setDarkMode(nextDarkMode);
    document.documentElement.classList.toggle("dark", nextDarkMode);
    window.localStorage.setItem("portfolio-theme", nextDarkMode ? "dark" : "light");
  };

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

    const updateActiveSection = () => {
      const marker = Math.min(window.innerHeight * 0.35, 280);
      let nextActive = "home";

      nav.forEach((item) => {
        const section = document.querySelector<HTMLElement>(item.href);
        if (section && section.getBoundingClientRect().top <= marker) {
          nextActive = item.href.slice(1);
        }
      });

      setActive((current) => (current === nextActive ? current : nextActive));
    };

    const sectionObserver = new IntersectionObserver(
      () => updateThemeFromViewport(),
      { rootMargin: "-76px 0px -70% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => sectionObserver.observe(section));
    updateThemeFromViewport();
    updateActiveSection();
    window.addEventListener("scroll", updateThemeFromViewport, { passive: true });
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateThemeFromViewport, { passive: true });
    window.addEventListener("resize", updateActiveSection, { passive: true });

    return () => {
      sectionObserver.disconnect();
      window.removeEventListener("scroll", updateThemeFromViewport);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateThemeFromViewport);
      window.removeEventListener("resize", updateActiveSection);
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
        darkMode || theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <nav
        className="relative z-50 mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="font-display font-medium text-lg uppercase tracking-[0.12em] transition-colors duration-250 hover:text-acid"
        >
          Naufal&apos;s
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
            {open ? <X size={24} className="text-white" /> : <Menu size={24} />}
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
                    className="block py-3 font-display font-bold text-4xl uppercase tracking-tight text-white transition-colors hover:text-acid"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={toggleDarkMode}
        className="fixed bottom-5 right-5 z-[70] flex size-11 items-center justify-center rounded-full border border-black/10 bg-white/90 text-black shadow-lg backdrop-blur transition-colors hover:bg-acid hover:text-black dark:border-white/10 dark:bg-zinc-900/90 dark:text-white sm:bottom-7 sm:right-7"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={darkMode}
        title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
      </button>
    </header>
  );
}

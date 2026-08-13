"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<"idle" | "interactive" | "view">("idle");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 38, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 500, damping: 38, mass: 0.35 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(media.matches);
    updateEnabled();
    media.addEventListener("change", updateEnabled);
    return () => media.removeEventListener("change", updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("cursor-enabled");
    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as HTMLElement;
      const section = document
        .elementsFromPoint(event.clientX, event.clientY)
        .map((element) => element.closest<HTMLElement>("[data-theme]"))
        .find((element): element is HTMLElement => Boolean(element));

      setTheme(section?.dataset.theme === "light" ? "light" : "dark");
      setMode(
        target.closest("[data-cursor-view]")
          ? "view"
          : target.closest("a, button")
            ? "interactive"
            : "idle",
      );
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.classList.remove("cursor-enabled");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      transformTemplate={(_, generated) => `${generated} translate(-50%, -50%)`}
      className={`custom-cursor custom-cursor--${mode} custom-cursor--${theme}`}
    >
      <ArrowUpLeft aria-hidden="true" />
    </motion.div>
  );
}

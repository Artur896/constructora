"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { COMPANY } from "@/lib/data";

const LETTERS = COMPANY.name.split("");

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [contentOut, setContentOut] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const contentOutTimer = setTimeout(() => setContentOut(true), 2900);
    const exitTimer = setTimeout(() => setExiting(true), 3200);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 4400);

    return () => {
      clearTimeout(contentOutTimer);
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          animate={exiting ? { clipPath: "inset(0% 0% 100% 0%)" } : undefined}
          transition={{ duration: 1.2, ease: EASE }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-carbon"
        >
          <motion.div
            animate={contentOut ? { opacity: 0, y: -16 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col items-center"
          >
            <div className="flex overflow-hidden">
              {LETTERS.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: "60%", filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: "0%", filter: "blur(0px)" }}
                  transition={{
                    delay: 0.3 + i * 0.1,
                    duration: 1.0,
                    ease: EASE,
                  }}
                  className="font-display text-3xl tracking-[0.35em] text-paper sm:text-4xl"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.3, duration: 1.2, ease: EASE }}
              className="mt-7 h-px w-24 origin-center bg-bronze"
            />

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.8, ease: EASE }}
              className="label-sm mt-5 text-paper/50"
            >
              Arquitectura &amp; Construcción
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

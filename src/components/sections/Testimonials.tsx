"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function go(next: number) {
    setDirection(next > index ? 1 : -1);
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  const testimonial = TESTIMONIALS[index];

  return (
    <section className="relative bg-carbon py-28 md:py-40">
      <div className="container-px mx-auto max-w-content">
        <Reveal>
          <span className="label-sm text-bronze">Testimonios</span>
          <h2 className="heading-lg mt-6 max-w-2xl text-4xl text-paper md:text-5xl">
            La confianza de quienes construyeron con nosotros.
          </h2>
        </Reveal>

        <div className="relative mt-16 max-w-3xl">
          <Quote className="text-bronze" size={40} strokeWidth={1} />

          <div className="relative mt-6 min-h-[220px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={testimonial.name}
                custom={direction}
                initial={{ opacity: 0, x: direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 24 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-display text-2xl leading-relaxed text-paper md:text-3xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-8">
                  <p className="label-sm text-paper">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-architect">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <button
              onClick={() => go(index - 1)}
              aria-label="Testimonio anterior"
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-paper transition-colors duration-300 hover:border-bronze hover:text-bronze"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => go(index + 1)}
              aria-label="Siguiente testimonio"
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-paper transition-colors duration-300 hover:border-bronze hover:text-bronze"
            >
              <ChevronRight size={18} />
            </button>

            <div className="flex items-center gap-2 pl-4">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => go(i)}
                  aria-label={`Ver testimonio de ${t.name}`}
                  className={`h-1.5 transition-all duration-300 ${
                    i === index ? "w-6 bg-bronze" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

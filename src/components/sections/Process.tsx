"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    const steps = stepsRef.current;
    if (!section || !line || !steps) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(line, { scaleY: 1 });
      return;
    }

    gsap.set(line, { scaleY: 0, transformOrigin: "top" });

    const tween = gsap.to(line, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: steps,
        start: "top 70%",
        end: "bottom 60%",
        scrub: 0.6,
      },
    });

    const items = steps.querySelectorAll("[data-step]");
    gsap.set(items, { filter: "blur(8px)", opacity: 0, y: 24 });

    items.forEach((item) => {
      gsap.to(item, {
        filter: "blur(0px)",
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 78%",
          once: true,
        },
      });
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger && items && Array.from(items).includes(st.trigger as Element)) {
          st.kill();
        }
      });
    };
  }, []);

  return (
    <section id="proceso" ref={sectionRef} className="relative bg-carbon py-28 md:py-40">
      <div className="container-px mx-auto max-w-content">
        <Reveal>
          <span className="label-sm text-bronze">Cómo trabajamos</span>
          <h2 className="heading-lg mt-6 max-w-2xl text-4xl text-paper md:text-5xl">
            Un proceso claro, de principio a fin.
          </h2>
        </Reveal>

        <div ref={stepsRef} className="relative mt-20 pl-10 md:pl-16">
          <div className="absolute left-0 top-0 h-full w-px bg-white/10 md:left-0">
            <div ref={lineRef} className="h-full w-px bg-bronze" />
          </div>

          <div className="flex flex-col gap-16 md:gap-20">
            {PROCESS.map((step) => (
              <div
                key={step.index}
                data-step
                className="relative grid grid-cols-1 gap-3 md:grid-cols-[auto_1fr] md:gap-10"
              >
                <span className="absolute -left-10 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-bronze md:-left-16" />
                <span className="font-display text-3xl text-architect md:text-4xl">
                  {step.index}
                </span>
                <div className="md:max-w-xl">
                  <h3 className="font-display text-2xl text-paper md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-architect">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

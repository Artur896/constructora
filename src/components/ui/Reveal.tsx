"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "span";
};

export function Reveal({ children, className, delay = 0, y = 32, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(el, { opacity: 0, y });

    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1.1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, y]);

  const Tag = as;
  return (
    <Tag ref={ref as never} className={cn(className)}>
      {children}
    </Tag>
  );
}

export function RevealLines({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const spans = el.querySelectorAll("[data-word]");

    if (prefersReducedMotion) {
      gsap.set(spans, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(spans, { opacity: 0, y: "100%" });

    const tween = gsap.to(spans, {
      opacity: 1,
      y: "0%",
      duration: 0.9,
      delay,
      stagger: 0.04,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay]);

  return (
    <div ref={containerRef} className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => (
        <span key={i} className="reveal-mask mr-[0.28em] pb-[0.1em]">
          <span data-word className="inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { RevealLines } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import HeroSceneLoader from "@/components/three/HeroSceneLoader";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const tween = gsap.fromTo(
      el,
      { scale: 1.12 },
      { scale: 1, duration: 10, ease: "power1.out" }
    );

    const onScroll = () => {
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      gsap.to(el, { yPercent: progress * 18, duration: 0.3, overwrite: true });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      tween.kill();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-carbon"
    >
      <div ref={imageRef} className="absolute inset-0 h-[118%]">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop"
          alt="Torre arquitectónica moderna de alto nivel al atardecer"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/70 via-carbon/50 to-carbon" />
        <div className="absolute inset-0 bg-carbon/20" />
      </div>

      <HeroSceneLoader />

      <div className="container-px relative z-10 mx-auto w-full max-w-content pb-20 pt-24 md:pb-0">
        <span className="label-sm text-bronze">Arquitectura &amp; Construcción</span>

        <h1 className="heading-xl mt-6 max-w-4xl text-[12vw] text-paper md:text-[6.2vw] lg:text-[5.2vw]">
          <RevealLines text="Construimos espacios que trascienden." />
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/70 md:text-lg">
          Diseño, ingeniería y construcción de proyectos que combinan innovación,
          precisión y excelencia.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-12">
          <MagneticButton href="#contacto" variant="solid">
            Solicitar cotización
          </MagneticButton>
          <MagneticButton href="#proyectos" variant="outline">
            Conocer nuestros proyectos
          </MagneticButton>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-4 z-10 hidden flex-col items-center gap-3 text-paper/60 sm:bottom-8 sm:flex">
        <span className="label-sm">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-white/15 sm:h-16">
          <span className="absolute inset-x-0 top-0 h-6 w-px animate-[scrollline_2.2s_ease-in-out_infinite] bg-bronze" />
        </span>
      </div>

      <style>{`
        @keyframes scrollline {
          0% { transform: translateY(-100%); }
          60% { transform: translateY(160%); }
          100% { transform: translateY(160%); }
        }
      `}</style>
    </section>
  );
}

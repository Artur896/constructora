"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function HeroSceneLoader() {
  const [ready, setReady] = useState(false);
  const [capable, setCapable] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isCapable = window.innerWidth >= 768 && !prefersReducedMotion;
    setCapable(isCapable);

    if (!isCapable) return;

    const idle =
      (window as Window & { requestIdleCallback?: (cb: () => void) => number })
        .requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 400));

    idle(() => setReady(true));
  }, []);

  if (!capable || !ready) return null;

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <HeroScene />
    </div>
  );
}

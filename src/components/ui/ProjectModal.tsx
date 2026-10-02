"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-carbon/95 backdrop-blur-sm overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={project.name}
        >
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="fixed top-6 right-6 z-[110] flex h-12 w-12 items-center justify-center border border-white/20 text-paper transition-colors duration-300 hover:border-bronze hover:text-bronze"
          >
            <X size={20} />
          </button>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="mx-auto max-w-content container-px py-24 md:py-32"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-carbon2">
              <Image
                src={project.gallery[activeImage]}
                alt={`${project.name} — imagen ${activeImage + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              {project.gallery.length > 1 && (
                <>
                  <button
                    aria-label="Imagen anterior"
                    onClick={() =>
                      setActiveImage((i) => (i === 0 ? project.gallery.length - 1 : i - 1))
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center bg-carbon/60 text-paper transition-colors hover:bg-bronze hover:text-carbon"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    aria-label="Imagen siguiente"
                    onClick={() =>
                      setActiveImage((i) => (i === project.gallery.length - 1 ? 0 : i + 1))
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center bg-carbon/60 text-paper transition-colors hover:bg-bronze hover:text-carbon"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            <div className="mt-6 flex gap-3">
              {project.gallery.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  aria-label={`Ver imagen ${i + 1}`}
                  className={`relative h-16 w-24 overflow-hidden border transition-colors ${
                    i === activeImage ? "border-bronze" : "border-white/10"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="96px" />
                </button>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr]">
              <div>
                <span className="label-sm text-bronze">{project.category}</span>
                <h2 className="heading-lg mt-3 text-4xl md:text-5xl text-paper">
                  {project.name}
                </h2>
                <p className="mt-6 max-w-xl text-architect text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="border-t border-white/10 pt-6 md:border-t-0 md:border-l md:pl-10 md:pt-0">
                <dl className="space-y-5">
                  <div>
                    <dt className="label-sm text-architect">Ubicación</dt>
                    <dd className="mt-1 text-paper">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="label-sm text-architect">Año</dt>
                    <dd className="mt-1 text-paper">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="label-sm text-architect">Superficie</dt>
                    <dd className="mt-1 text-paper">{project.surface}</dd>
                  </div>
                  <div>
                    <dt className="label-sm text-architect">Servicios realizados</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {project.services.map((s) => (
                        <span
                          key={s}
                          className="border border-white/15 px-3 py-1 text-xs text-paper/80"
                        >
                          {s}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

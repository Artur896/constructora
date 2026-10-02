"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import ProjectModal from "@/components/ui/ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="proyectos" className="relative bg-carbon py-28 md:py-40">
      <div className="container-px mx-auto max-w-content">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="label-sm text-bronze">Portafolio</span>
            <h2 className="heading-lg mt-6 max-w-2xl text-4xl text-paper md:text-5xl">
              Proyectos destacados.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-architect">
            Una selección de desarrollos que reflejan nuestra forma de construir:
            precisa, sofisticada y atenta a cada detalle.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.1}>
              <button
                onClick={() => setSelected(project)}
                className="group block w-full text-left"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-carbon2">
                  <Image
                    src={project.image}
                    alt={`${project.name} — ${project.category} en ${project.location}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-carbon/0 transition-colors duration-500 group-hover:bg-carbon/20" />

                  <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-paper/90 text-carbon opacity-0 transition-all duration-400 ease-premium group-hover:opacity-100">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl text-paper transition-colors duration-300 group-hover:text-bronze">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-architect">
                      {project.category} · {project.location}
                    </p>
                  </div>
                  <span className="label-sm shrink-0 text-architect">{project.year}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { SERVICES } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="servicios" className="relative bg-carbon py-28 md:py-40">
      <div className="container-px mx-auto max-w-content">
        <Reveal>
          <span className="label-sm text-bronze">Lo que hacemos</span>
          <h2 className="heading-lg mt-6 max-w-2xl text-4xl text-paper md:text-5xl">
            Servicios diseñados para cada etapa del proyecto.
          </h2>
        </Reveal>

        {/* Desktop: expanding panels */}
        <div className="mt-20 hidden h-[560px] gap-2 md:flex">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              onMouseEnter={() => setActive(i)}
              className={cn(
                "group relative cursor-pointer overflow-hidden transition-all duration-700 ease-premium",
                active === i ? "flex-[4]" : "flex-[1]"
              )}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className={cn(
                  "object-cover transition-all duration-700 ease-premium",
                  active === i ? "opacity-60 scale-100" : "opacity-30 scale-110"
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/40 to-carbon/10" />

              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <span className="label-sm text-bronze">{service.index}</span>

                <div>
                  <h3
                    className={cn(
                      "font-display text-xl text-paper transition-all duration-500",
                      active === i ? "text-2xl" : "text-lg"
                    )}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 max-w-xs text-sm leading-relaxed text-paper/70 transition-all duration-500",
                      active === i
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3 pointer-events-none"
                    )}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical list */}
        <div className="mt-14 flex flex-col divide-y divide-white/10 md:hidden">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex gap-5 py-6">
              <span className="label-sm text-bronze">{service.index}</span>
              <div>
                <h3 className="font-display text-xl text-paper">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-architect">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  ShieldCheck,
  Users,
  Eye,
  Gem,
  Clock,
  HardHat,
  Cpu,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import { DIFFERENTIATORS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

const ICONS: LucideIcon[] = [ShieldCheck, Users, Eye, Gem, Clock, HardHat, Cpu, Headphones];

export default function Differentiators() {
  return (
    <section className="relative bg-carbon py-28 md:py-40">
      <div className="container-px mx-auto max-w-content">
        <Reveal>
          <span className="label-sm text-bronze">Por qué elegirnos</span>
          <h2 className="heading-lg mt-6 max-w-2xl text-4xl text-paper md:text-5xl">
            Calidad que se nota en cada detalle.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIATORS.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.06} className="group">
                <div className="flex h-12 w-12 items-center justify-center border border-white/15 text-bronze transition-all duration-400 ease-premium group-hover:border-bronze group-hover:scale-110">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-display mt-5 text-lg text-paper">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-architect">
                  {item.description}
                </p>
                <span className="mt-4 block h-px w-0 bg-bronze transition-all duration-500 ease-premium group-hover:w-12" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { STATS } from "@/lib/data";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";

export default function Stats() {
  return (
    <section className="relative border-y border-white/10 bg-carbon">
      <div className="container-px mx-auto grid max-w-content grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="px-4 py-14 text-center md:py-20">
            <div className="heading-lg text-4xl text-bronze md:text-5xl lg:text-6xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="label-sm mt-4 text-architect">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

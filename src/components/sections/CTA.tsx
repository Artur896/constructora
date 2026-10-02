import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-carbon py-28 md:py-36">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop"
          alt="Fachada arquitectónica contemporánea"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon via-carbon/85 to-carbon" />
      </div>

      <div className="container-px relative z-10 mx-auto max-w-content text-center">
        <Reveal>
          <h2 className="heading-lg mx-auto max-w-3xl text-3xl text-paper md:text-5xl">
            ¿Listo para construir su próximo proyecto?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-architect">
            Hablemos sobre su visión y cómo podemos convertirla en un espacio real.
          </p>
          <div className="mt-10 flex justify-center">
            <MagneticButton href="#contacto" variant="solid">
              Solicitar cotización
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

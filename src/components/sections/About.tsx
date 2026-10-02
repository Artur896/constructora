import { Reveal } from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="nosotros" className="relative bg-carbon py-28 md:py-40">
      <div className="container-px mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <span className="label-sm text-bronze">Quiénes somos</span>
            <h2 className="heading-lg mt-6 text-4xl text-paper md:text-5xl lg:text-6xl">
              Construimos con visión.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6 text-base leading-relaxed text-architect md:text-lg">
              <p>
                Somos una constructora especializada en el desarrollo de proyectos
                arquitectónicos de alto nivel. Durante más de quince años hemos
                acompañado a desarrolladores, empresas e inversionistas en la
                materialización de espacios que combinan precisión técnica con una
                visión estética depurada.
              </p>
              <p>
                Nuestra filosofía parte de una premisa simple: cada proyecto merece
                el mismo rigor, sin importar su escala. Integramos diseño,
                ingeniería y ejecución en un solo equipo para garantizar coherencia
                desde el primer boceto hasta la entrega final.
              </p>
              <p>
                Trabajamos con tecnología aplicada, supervisión permanente y un
                compromiso absoluto con la calidad — porque entendemos que
                construir es, ante todo, un acto de responsabilidad.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

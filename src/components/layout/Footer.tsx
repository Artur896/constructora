import { Instagram, Linkedin, Facebook } from "lucide-react";
import { COMPANY } from "@/lib/data";

const NAV = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

const SERVICES = [
  "Construcción",
  "Diseño y arquitectura",
  "Remodelación",
  "Obra comercial",
  "Obra residencial",
  "Supervisión y gestión",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-carbon">
      <div className="container-px mx-auto max-w-content py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="font-display text-2xl tracking-[0.15em] text-paper">
              {COMPANY.name}
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-architect">
              Diseño, ingeniería y construcción de proyectos arquitectónicos de
              alto nivel. Construimos espacios que trascienden.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center border border-white/15 text-architect transition-colors duration-300 hover:border-bronze hover:text-bronze"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center border border-white/15 text-architect transition-colors duration-300 hover:border-bronze hover:text-bronze"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center border border-white/15 text-architect transition-colors duration-300 hover:border-bronze hover:text-bronze"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <p className="label-sm text-architect">Navegación</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-paper/80 transition-colors duration-300 hover:text-bronze"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-sm text-architect">Servicios</p>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s} className="text-sm text-paper/80">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-sm text-architect">Contacto</p>
            <ul className="mt-5 space-y-3 text-sm text-paper/80">
              <li>{COMPANY.phoneDisplay}</li>
              <li>{COMPANY.email}</li>
              <li>{COMPANY.address}</li>
              <li>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-bronze"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-architect md:flex-row md:items-center">
          <p>
            © {year} {COMPANY.fullName}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors duration-300 hover:text-bronze">
              Aviso de privacidad
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-bronze">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

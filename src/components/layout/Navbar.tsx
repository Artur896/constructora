"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { COMPANY } from "@/lib/data";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[90] transition-all duration-500 ease-premium",
          scrolled
            ? "bg-carbon/80 backdrop-blur-md border-b border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            : "bg-transparent"
        )}
      >
        <nav className="container-px mx-auto flex max-w-content items-center justify-between py-6">
          <a href="#inicio" className="font-display text-xl tracking-[0.15em] text-paper">
            {COMPANY.name}
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="label-sm text-paper/80 transition-colors duration-300 hover:text-bronze"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="hidden label-sm border border-white/30 px-5 py-2.5 text-paper transition-all duration-300 hover:border-bronze hover:text-bronze md:inline-flex"
          >
            Solicitar cotización
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            className="flex h-10 w-10 items-center justify-center text-paper md:hidden"
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[95] flex flex-col bg-carbon md:hidden"
          >
            <div className="container-px flex items-center justify-between py-6">
              <span className="font-display text-xl tracking-[0.15em] text-paper">
                {COMPANY.name}
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
                className="flex h-10 w-10 items-center justify-center text-paper"
              >
                <X size={26} strokeWidth={1.5} />
              </button>
            </div>

            <ul className="container-px flex flex-1 flex-col justify-center gap-6">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="heading-lg text-4xl text-paper transition-colors duration-300 hover:text-bronze"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="container-px pb-10">
              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="label-sm inline-flex border border-white/30 px-6 py-4 text-paper"
              >
                Solicitar cotización
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

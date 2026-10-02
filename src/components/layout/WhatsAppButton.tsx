"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/data";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const href = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    "Hola, me gustaría cotizar un proyecto."
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[80] flex items-center"
    >
      <span
        className={`hidden md:inline-flex items-center whitespace-nowrap bg-carbon text-paper label-sm px-4 py-3 mr-3 border border-white/10 transition-all duration-300 ease-premium ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3 pointer-events-none"
        }`}
      >
        ¿Hablamos de tu proyecto?
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-carbon shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-premium hover:scale-105">
        <MessageCircle size={26} strokeWidth={1.75} />
      </span>
    </a>
  );
}

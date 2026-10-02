"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "solid",
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.25, y: relY * 0.4 });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  const styles = cn(
    "relative inline-flex items-center justify-center gap-3 px-8 py-4 label-sm transition-colors duration-300 ease-premium",
    variant === "solid"
      ? "bg-paper text-carbon hover:bg-bronze"
      : "border border-white/30 text-paper hover:border-bronze hover:text-bronze",
    className
  );

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
      className={styles}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className="inline-block disabled:cursor-not-allowed disabled:opacity-60"
      type={type}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/**
 * Revelado editorial al entrar en viewport.
 * Componente cliente mínimo para que los Server Components
 * (Manifesto, secciones estáticas) conserven animación de entrada.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 60, damping: 18, delay }}
    >
      {children}
    </motion.div>
  );
}

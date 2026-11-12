"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type MagneticButtonProps = {
  href: string;
  className?: string;
  children: ReactNode;
  /** Cuánto se desplaza el botón hacia el cursor (0–1). */
  strength?: number;
};

/**
 * Botón magnético: sigue suavemente el cursor con física de resorte.
 * El elemento hijo interno compensa el desplazamiento para que el
 * contenido se mantenga estable mientras la superficie se imanta.
 */
export default function MagneticButton({
  href,
  className,
  children,
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.1 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.1 });

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

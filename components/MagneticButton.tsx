"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

type MagneticButtonProps = {
  href: string;
  className?: string;
  children: ReactNode;
  strength?: number;
  external?: boolean;
};

/**
 * Botón magnético de doble capa (estilo Motionframe / Ubernatural):
 * la superficie sigue al cursor con resorte físico y el texto interior
 * acompaña con un paralaje sutil para dar sensación de volumen real.
 */
export default function MagneticButton({
  href,
  className,
  children,
  strength = 0.32,
  external = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  const innerX = useTransform(x, (v) => v * 0.35);
  const innerY = useTransform(y, (v) => v * 0.35);

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    rawX.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    rawY.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function onLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x, y }}
      className={className}
    >
      <motion.span
        style={{ x: innerX, y: innerY }}
        className="inline-flex items-center gap-3"
      >
        {children}
      </motion.span>
    </motion.a>
  );
}

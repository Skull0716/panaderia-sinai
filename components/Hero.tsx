"use client";

import { useRef, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { PAINTING_URL, TELEFONO } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Paralaje y escala suave de la obra al hacer scroll
  const imgY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 72]),
    { stiffness: 65, damping: 22, mass: 0.6 },
  );
  const imgScale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1.02, 1.12]),
    { stiffness: 65, damping: 22, mass: 0.6 },
  );

  // Inclinación física 3D sutil al mover el puntero sobre el cuadro
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 140, damping: 18, mass: 0.4 });
  const rotateY = useSpring(tiltY, { stiffness: 140, damping: 18, mass: 0.4 });

  function handleFrameMove(e: MouseEvent<HTMLDivElement>) {
    if (reduced) return;
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(-ny * 5);
    tiltY.set(nx * 5);
  }

  function handleFrameLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <section ref={ref} id="inicio" className="relative overflow-hidden">
      {/* Resplandor ambiental cálido de horno detrás de la composición */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-[8%] top-[18%] h-[480px] w-[480px] animate-breathe rounded-full bg-gold/15 blur-[130px]" />
        <div className="absolute bottom-[10%] left-[12%] h-[360px] w-[360px] animate-breathe rounded-full bg-ember/15 blur-[120px] [animation-delay:-4s]" />
      </div>

      <div className="shell relative grid min-h-screen items-center gap-14 pb-24 pt-28 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 xl:gap-24 xl:pb-24">
        {/* ---------- Columna Editorial ---------- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 border-b border-gold/35 pb-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
              Obrador Tradicional · Más de 25 años
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="mt-7 font-display text-5xl font-normal leading-[0.94] tracking-[-0.025em] text-ivory sm:text-6xl md:text-7xl xl:text-[5.4rem]"
          >
            Panadería
            <span className="mt-1 block text-gold">Sinaí</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="mt-8 max-w-lg text-base leading-relaxed text-ivory/75 sm:text-lg"
          >
            El pan no tiene prisa. Veinticinco años amasando de madrugada lo que
            el fuego y la paciencia deciden. Concha, pan de manteca, pan de
            yema, amarillo, bolillo y resobado; horneados exclusivamente bajo
            pedido para salir del horno a tu mesa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <MagneticButton
              href="#encargo"
              className="btn-primary group"
            >
              <span>Hacer un pedido</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </MagneticButton>

            <a
              href="#oficio"
              className="group inline-flex items-center gap-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-ivory/70 transition-colors duration-300 hover:text-gold"
            >
              <span>Ver repertorio de panes</span>
              <span className="h-px w-8 bg-ivory/35 transition-all duration-500 ease-[var(--flight-ease)] group-hover:w-14 group-hover:bg-gold" />
            </a>
          </motion.div>

          {/* Ficha rápida de oficio */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-ivory/10 pt-7 max-w-lg"
          >
            <div>
              <dt className="text-[10px] uppercase tracking-[0.22em] text-ivory/45">
                Tradición
              </dt>
              <dd className="mt-1 font-display text-lg text-ivory sm:text-xl">
                Desde 2001
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.22em] text-ivory/45">
                Modalidad
              </dt>
              <dd className="mt-1 font-display text-lg text-ivory sm:text-xl">
                Bajo pedido
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.22em] text-ivory/45">
                Contacto directo
              </dt>
              <dd className="mt-1 font-display text-lg text-gold sm:text-xl">
                {TELEFONO}
              </dd>
            </div>
          </motion.dl>
        </div>

        {/* ---------- Columna de la Obra de Octavio Ocampo ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ perspective: 1200 }}
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
        >
          <motion.figure
            ref={frameRef}
            onMouseMove={handleFrameMove}
            onMouseLeave={handleFrameLeave}
            style={{ rotateX, rotateY }}
            className="painting-frame relative border border-ivory/15 bg-card p-3 sm:p-4 transition-colors duration-500"
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-ivory/10 bg-[#14110f]">
              <motion.div
                style={{ y: imgY, scale: imgScale }}
                className="absolute inset-0"
              >
                <Image
                  src={PAINTING_URL}
                  alt="El Pan de Muerto (1991), óleo metamórfico de Octavio Ocampo — Emblema de Panadería Sinaí"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 92vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Viñeta sutil que integra el óleo con el marco */}
              <div className="vignette pointer-events-none absolute inset-0" />
            </div>

            {/* Cédula museográfica integrada al pie del marco */}
            <figcaption className="mt-3.5 flex items-baseline justify-between gap-4 border-t border-ivory/10 pt-3 px-1">
              <div>
                <p className="font-display text-sm tracking-wide text-ivory sm:text-base">
                  “El Pan de Muerto” <span className="text-ivory/50">(1991)</span>
                </p>
                <p className="mt-0.5 text-xs text-ivory/55">
                  Óleo de Octavio Ocampo · Emblema de Panadería Sinaí
                </p>
              </div>
              <span className="shrink-0 text-[10px] uppercase tracking-[0.22em] text-gold">
                Arte Metamórfico
              </span>
            </figcaption>
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
}

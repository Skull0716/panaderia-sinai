"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { PAINTING_URL } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Paralaje + zoom suave de la pintura
  const imgY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 90]),
    { stiffness: 60, damping: 20, mass: 0.6 },
  );
  const imgScale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 1.1]),
    { stiffness: 60, damping: 20, mass: 0.6 },
  );

  // El texto se aleja y desvanece al hacer scroll
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="inicio" className="relative overflow-hidden">
      {/* Iluminación ambiental cálida detrás de la pintura */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/3 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 animate-breathe rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-[8%] right-[10%] h-72 w-72 animate-breathe rounded-full bg-ember/15 blur-3xl [animation-delay:-3.5s]" />
      </div>

      <div className="shell relative grid min-h-screen items-center gap-16 pb-28 pt-32 xl:grid-cols-[1.05fr_0.95fr] xl:gap-20 xl:pb-24">
        {/* ---------- Columna de texto ---------- */}
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-8 font-display text-5xl font-normal leading-[0.92] tracking-tight text-ivory md:text-8xl"
          >
            Panadería
            <span className="block bg-gradient-to-b from-ivory via-ivory to-ivory/40 bg-clip-text text-transparent">
              Sinaí
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="mt-8 max-w-md text-lg leading-relaxed text-ivory/65"
          >
            Horno tradicional oaxaqueño. Veinticinco años amasando de
            madrugada lo que el fuego y la paciencia deciden. Sin vitrina,
            sin desperdicio: sólo lo que se encarga.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <MagneticButton
              href="#encargo"
              className="group inline-flex items-center gap-3 border border-gold/40 bg-gold/10 px-7 py-4 text-sm uppercase tracking-[0.2em] text-ivory backdrop-blur-sm transition-colors duration-300 hover:bg-gold/20"
            >
              Encargar pan
              <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </MagneticButton>

            <a
              href="#oficio"
              className="group inline-flex items-center gap-3 text-sm text-ivory/60 transition-colors duration-300 hover:text-ivory"
            >
              Ver los panes
              <span className="h-px w-8 bg-ivory/30 transition-all duration-500 group-hover:w-14 group-hover:bg-gold" />
            </a>
          </motion.div>
        </motion.div>

        {/* ---------- Columna de la pintura de Octavio Ocampo ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="relative mx-auto w-full max-w-md xl:max-w-none"
        >
          <div className="relative aspect-[3/4] overflow-hidden border border-ivory/10 bg-card">
            <motion.div
              style={{ y: imgY, scale: imgScale }}
              className="absolute inset-0"
            >
              <Image
                src={PAINTING_URL}
                alt="El Pan de Muerto (1991), óleo de Octavio Ocampo"
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 90vw"
                className="object-cover"
              />
            </motion.div>

            {/* Viñeta que funde la obra con el fondo */}
            <div className="vignette absolute inset-0" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />

            {/* Biseles finos de esquina */}
            <span className="absolute left-3 top-3 h-6 w-6 border-l border-t border-ivory/25" />
            <span className="absolute right-3 top-3 h-6 w-6 border-r border-t border-ivory/25" />
            <span className="absolute bottom-3 left-3 h-6 w-6 border-b border-l border-ivory/25" />
            <span className="absolute bottom-3 right-3 h-6 w-6 border-b border-r border-ivory/25" />
          </div>

          {/* Tarjeta flotante de metadatos, tipo museo */}
          <motion.figcaption
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
            className="absolute -bottom-8 -left-4 max-w-[280px] border border-ivory/10 bg-card/90 p-5 backdrop-blur-md md:-left-10"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-ivory/40">
              Óleo · 1991
            </p>
            <p className="mt-2 font-display text-xl leading-snug text-ivory">
              “El Pan de Muerto”
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ivory/60">
              Octavio Ocampo · Emblema del Obrador Sinaí
            </p>
          </motion.figcaption>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/40">
          Desliza
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-ivory/40" />
        </motion.span>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Plus } from "lucide-react";
import {
  panesOficio,
  panesYema,
  panesTemporada,
  formatPrecio,
  type Pan,
} from "@/lib/data";
import Reveal from "@/components/Reveal";

const grupos: { titulo: string; subtitulo: string; items: Pan[] }[] = [
  {
    titulo: "Panes de oficio",
    subtitulo: "Horneados cada madrugada bajo encargo previo",
    items: panesOficio,
  },
  {
    titulo: "Panes de yema",
    subtitulo: "Receta tradicional oaxaqueña con huevo de rancho y anís",
    items: panesYema,
  },
  {
    titulo: "Temporada",
    subtitulo: "Piezas rituales de calendario por pedido especial",
    items: panesTemporada,
  },
];

function Badge({ p }: { p: Pan }) {
  if (p.categoria === "temporada" && p.temporada) {
    return (
      <span className="inline-flex items-center border border-ember/45 bg-ember/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-ember">
        {p.temporada}
      </span>
    );
  }
  if (p.categoria === "yema") {
    return (
      <span className="inline-flex items-center border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
        Yema
      </span>
    );
  }
  return null;
}

type PanRowProps = {
  p: Pan;
  indice: number;
  abierto: boolean;
  onToggle: () => void;
  onHover: (id: string | null) => void;
};

function PanRow({ p, indice, abierto, onToggle, onHover }: PanRowProps) {
  return (
    <article
      onPointerEnter={(e) => e.pointerType === "mouse" && onHover(p.id)}
      onPointerLeave={(e) => e.pointerType === "mouse" && onHover(null)}
      className={`group border-b border-ivory/10 transition-colors duration-300 ${
        abierto ? "bg-card/70" : "hover:bg-card/35"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={abierto}
        className="flex w-full items-center gap-4 px-3 py-6 text-left sm:px-5 md:gap-6 md:py-7"
      >
        <span className="w-7 shrink-0 font-display text-xs tracking-widest text-ivory/35 md:text-sm">
          {String(indice + 1).padStart(2, "0")}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-3">
            <h3 className="font-display text-xl font-normal text-ivory transition-colors duration-300 group-hover:text-gold md:text-2xl lg:text-3xl">
              {p.nombre}
            </h3>
            <Badge p={p} />
          </div>
          <p className="mt-1.5 line-clamp-1 text-sm text-ivory/55">
            {p.descripcion}
          </p>
        </div>

        <span className="flex shrink-0 items-center gap-4 sm:gap-6">
          <span className="whitespace-nowrap font-display text-base text-gold md:text-xl">
            {formatPrecio(p)}
          </span>
          <motion.span
            animate={{ rotate: abierto ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex h-8 w-8 items-center justify-center border transition-colors ${
              abierto
                ? "border-gold bg-gold text-coal"
                : "border-ivory/15 text-ivory/70 group-hover:border-gold/50 group-hover:text-gold"
            }`}
          >
            <Plus className="h-4 w-4" />
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {abierto && (
          <motion.div
            key="detalle"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 28,
              mass: 0.8,
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-ivory/10 px-4 pb-8 pt-6 sm:px-6 md:pl-16">
              <p className="max-w-2xl text-base leading-relaxed text-ivory/80 md:text-lg">
                {p.descripcion}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="mr-2 text-[10px] uppercase tracking-[0.22em] text-ivory/40">
                    Ingredientes:
                  </span>
                  {p.ingredientes.map((ing) => (
                    <span
                      key={ing}
                      className="border border-ivory/12 bg-coal/50 px-3 py-1 text-xs text-ivory/70"
                    >
                      {ing}
                    </span>
                  ))}
                </div>

                <a
                  href="#encargo"
                  className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gold transition-colors hover:text-ivory"
                >
                  <span>Incluir en mi pedido</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default function PanesGrid() {
  const [activo, setActivo] = useState<string | null>("concha");

  return (
    <section id="oficio" className="relative py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl font-normal tracking-tight text-ivory sm:text-4xl md:text-5xl">
            Nuestros panes
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/65">
            Todo nuestro pan se elabora bajo pedido para salir fresco del horno.
            Toca cualquier pieza para conocer su descripción e ingredientes.
          </p>
        </Reveal>

        <div className="mt-16 space-y-16">
          {grupos.map((g) => (
            <div key={g.titulo}>
              <div className="flex flex-col justify-between gap-2 pb-4 sm:flex-row sm:items-baseline">
                <h3 className="font-display text-lg uppercase tracking-[0.2em] text-gold">
                  {g.titulo}
                </h3>
                <p className="text-xs text-ivory/45">{g.subtitulo}</p>
              </div>
              <div className="border-t border-ivory/15">
                {g.items.map((p, i) => (
                  <PanRow
                    key={p.id}
                    p={p}
                    indice={i}
                    abierto={activo === p.id}
                    onToggle={() => setActivo(activo === p.id ? null : p.id)}
                    onHover={setActivo}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

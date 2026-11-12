"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CalendarDays, Plus, Wheat } from "lucide-react";
import {
  panesOficio,
  panesYema,
  panesTemporada,
  formatPrecio,
  type Pan,
} from "@/lib/data";
import Reveal from "@/components/Reveal";

const grupos: { titulo: string; items: Pan[] }[] = [
  { titulo: "Panes de oficio", items: panesOficio },
  { titulo: "Panes de yema", items: panesYema },
  { titulo: "Temporada", items: panesTemporada },
];

function Badge({ p }: { p: Pan }) {
  if (p.categoria === "temporada" && p.temporada) {
    return (
      <span className="inline-flex items-center gap-1.5 border border-ember/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-ember">
        <CalendarDays className="h-3 w-3" />
        {p.temporada}
      </span>
    );
  }
  if (p.categoria === "yema") {
    return (
      <span className="inline-flex items-center border border-gold/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-gold">
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
      className="group border-b border-ivory/10"
    >
      <button
        onClick={onToggle}
        aria-expanded={abierto}
        className="flex w-full items-center gap-5 py-6 text-left md:gap-8 md:py-7"
      >
        <span className="w-8 shrink-0 font-display text-sm text-ivory/30 md:text-base">
          {String(indice + 1).padStart(2, "0")}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-xl font-normal text-ivory transition-colors duration-300 group-hover:text-gold md:text-3xl">
              {p.nombre}
            </h3>
            <Badge p={p} />
          </div>
          <p className="mt-1 hidden text-sm text-ivory/50 md:block">
            {p.descripcion}
          </p>
        </div>

        <span className="flex shrink-0 items-center gap-4">
          <span className="whitespace-nowrap font-display text-base text-gold md:text-lg">
            {formatPrecio(p)}
          </span>
          <motion.span
            animate={{ rotate: abierto ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="flex h-8 w-8 items-center justify-center border border-ivory/15 text-ivory/70"
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
              stiffness: 260,
              damping: 30,
              mass: 0.9,
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-ivory/5 px-1 pb-8 pt-8 md:pl-16">
              <p className="max-w-2xl text-ivory/70 md:text-lg">
                {p.descripcion}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <Wheat className="h-4 w-4 text-gold" />
                {p.ingredientes.map((ing) => (
                  <span
                    key={ing}
                    className="border border-ivory/10 px-3 py-1 text-xs text-ivory/60"
                  >
                    {ing}
                  </span>
                ))}
              </div>
              {p.temporada && (
                <div className="mt-6 flex items-center gap-2 text-ember">
                  <CalendarDays className="h-4 w-4" />
                  <span className="text-sm">
                    Temporada de {p.temporada.toLowerCase()}.
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default function PanesGrid() {
  const [activo, setActivo] = useState<string | null>(null);

  return (
    <section id="oficio" className="relative py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Los panes de oficio</p>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-normal tracking-tight text-ivory md:text-5xl">
            De oficio, de yema y de temporada.
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-ivory/60">
            Todo se hornea bajo pedido, de madrugada. No hay vitrina: hay
            promesas hechas la víspera. Precios por pieza, en pesos.
          </p>
        </Reveal>

        <div className="mt-16 space-y-14">
          {grupos.map((g) => (
            <div key={g.titulo}>
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
                {g.titulo}
              </p>
              <div className="mt-1 border-t border-ivory/10">
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

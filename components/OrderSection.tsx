"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { MessageCircle, Minus, Phone, Plus, RotateCcw } from "lucide-react";
import {
  panes,
  panesOficio,
  panesYema,
  panesTemporada,
  formatPrecio,
  TELEFONO,
  TELEFONO_LINK,
  WA_LINK,
  type Pan,
} from "@/lib/data";
import Reveal from "@/components/Reveal";

const inicial: Record<string, number> = Object.fromEntries(
  panes.map((p) => [p.id, 0]),
);

export default function OrderSection() {
  const [pedido, setPedido] = useState<Record<string, number>>(inicial);
  const [nota, setNota] = useState("");

  const total = useMemo(
    () => Object.values(pedido).reduce((a, b) => a + b, 0),
    [pedido],
  );

  const totalPrecio = useMemo(
    () =>
      panes.reduce(
        (acc, p) => acc + (p.precio ?? 0) * (pedido[p.id] ?? 0),
        0,
      ),
    [pedido],
  );

  const hayPorEncargo = useMemo(
    () => panes.some((p) => p.precio == null && pedido[p.id] > 0),
    [pedido],
  );

  function sumar(id: string, delta: number) {
    setPedido((prev) => ({ ...prev, [id]: Math.max(0, prev[id] + delta) }));
  }

  function limpiar() {
    setPedido(inicial);
    setNota("");
  }

  const href = useMemo(() => {
    const lineas = panes
      .filter((p) => pedido[p.id] > 0)
      .map((p) => `• ${pedido[p.id]} × ${p.nombre} (${formatPrecio(p)})`);

    const mensaje = [
      "Hola, Panadería Sinaí. Me gustaría encargar:",
      ...lineas,
      total > 0
        ? `Total: ${total} pieza${total === 1 ? "" : "s"}${
            totalPrecio > 0 ? ` ≈ $${totalPrecio} MXN` : ""
          }.`
        : "",
      nota.trim() ? `Nota: ${nota.trim()}` : "",
      "¿Me confirman disponibilidad y horario de entrega?",
    ]
      .filter(Boolean)
      .join("\n");

    return WA_LINK(mensaje);
  }, [pedido, total, totalPrecio, nota]);

  return (
    <section
      id="encargo"
      className="relative border-t border-ivory/10 bg-surface py-24 md:py-36"
    >
      <div className="shell grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
        {/* ---------- Columna de contexto y contacto ---------- */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <h2 className="font-display text-3xl font-normal leading-tight tracking-tight text-ivory sm:text-4xl md:text-5xl">
              Haz tu pedido
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/65">
              Trabajamos todos los días excepto los miércoles. Arma tu pedido
              aquí al lado y envíalo directo a nuestro WhatsApp, o llámanos
              para apartar tu pan.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 space-y-4">
              <a
                href={TELEFONO_LINK}
                className="group flex items-center gap-4 border border-ivory/10 bg-card/60 p-4 text-ivory/80 transition-colors hover:border-gold/50 hover:text-ivory"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-ivory/15 bg-coal/60 text-gold transition-colors group-hover:bg-gold group-hover:text-coal">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.22em] text-ivory/45">
                    Llamada directa
                  </span>
                  <span className="font-display text-lg tracking-wide text-ivory">
                    {TELEFONO}
                  </span>
                </span>
              </a>

              <a
                href={WA_LINK("Hola, Panadería Sinaí. Quiero hacer un pedido de pan.")}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 border border-ivory/10 bg-card/60 p-4 text-ivory/80 transition-colors hover:border-gold/50 hover:text-ivory"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-ivory/15 bg-coal/60 text-gold transition-colors group-hover:bg-gold group-hover:text-coal">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.22em] text-ivory/45">
                    WhatsApp de pedidos
                  </span>
                  <span className="font-display text-lg tracking-wide text-ivory">
                    {TELEFONO}
                  </span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* ---------- Comanda / Selector de encargo ---------- */}
        <Reveal delay={0.05}>
          <div className="border border-ivory/15 bg-card p-6 shadow-card sm:p-8 md:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-ivory/10 pb-5">
              <div>
                <h3 className="font-display text-2xl text-ivory">
                  Comanda de encargo
                </h3>
                <p className="mt-1 text-xs text-ivory/50">
                  Selecciona las piezas que deseas reservar
                </p>
              </div>
              {total > 0 && (
                <button
                  onClick={limpiar}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-ivory/50 transition-colors hover:text-ember"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Reiniciar
                </button>
              )}
            </div>

            <GrupoStepper
              titulo="Panes de oficio"
              items={panesOficio}
              pedido={pedido}
              onSumar={sumar}
            />
            <GrupoStepper
              titulo="Panes de yema"
              items={panesYema}
              pedido={pedido}
              onSumar={sumar}
            />
            <GrupoStepper
              titulo="Temporada"
              items={panesTemporada}
              pedido={pedido}
              onSumar={sumar}
            />

            {/* Nota opcional */}
            <label className="mt-8 block">
              <span className="text-[11px] uppercase tracking-[0.2em] text-ivory/50">
                Fecha de entrega u observaciones (opcional)
              </span>
              <textarea
                value={nota}
                onChange={(e) => setNota(e.target.value)}
                rows={2}
                placeholder="Ej. Para el sábado por la mañana, conchas de azúcar blanca…"
                className="mt-2.5 w-full resize-none border border-ivory/15 bg-coal/60 px-4 py-3 text-sm text-ivory placeholder:text-ivory/35 focus:border-gold focus:outline-none"
              />
            </label>

            {/* Resumen y CTA */}
            <div className="mt-8 flex flex-col gap-5 border-t border-ivory/15 pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.22em] text-ivory/55">
                  Resumen del pedido
                </span>
                <motion.span
                  key={`${total}-${totalPrecio}`}
                  initial={{ scale: 0.96, opacity: 0.7 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  className="text-right font-display text-2xl text-ivory sm:text-3xl"
                >
                  {total}{" "}
                  <span className="text-base text-ivory/70">
                    pieza{total === 1 ? "" : "s"}
                  </span>
                  {totalPrecio > 0 && (
                    <span className="ml-2.5 text-gold">≈ ${totalPrecio}</span>
                  )}
                </motion.span>
              </div>

              {hayPorEncargo && (
                <p className="text-xs text-ivory/50">
                  * Las piezas de temporada (Pan de Muerto / Rosca de Reyes) se
                  cotizan según tamaño al confirmar por WhatsApp.
                </p>
              )}

              {total > 0 ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full py-4 text-center"
                >
                  <MessageCircle className="h-4 w-4" />
                  Enviar pedido al {TELEFONO}
                </a>
              ) : (
                <a
                  href={WA_LINK("Hola, Panadería Sinaí. Quiero hacer un pedido de pan.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 border border-ivory/15 bg-coal/40 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ivory/70 transition-colors hover:border-gold/50 hover:text-ivory"
                >
                  <MessageCircle className="h-4 w-4 text-gold" />
                  O escríbenos directo por WhatsApp
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

type GrupoStepperProps = {
  titulo: string;
  items: Pan[];
  pedido: Record<string, number>;
  onSumar: (id: string, delta: number) => void;
};

function GrupoStepper({
  titulo,
  items,
  pedido,
  onSumar,
}: GrupoStepperProps) {
  return (
    <div className="mt-7">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
        {titulo}
      </p>
      <ul className="mt-3 divide-y divide-ivory/10">
        {items.map((p) => {
          const cant = pedido[p.id] ?? 0;
          return (
            <li
              key={p.id}
              className={`flex items-center justify-between gap-3 py-3.5 transition-all duration-200 ${
                cant > 0
                  ? "border-l-2 border-l-gold bg-gold/[0.06] pl-3 pr-2"
                  : ""
              }`}
            >
              <div className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-ivory md:text-base">
                  {p.nombre}
                </span>
                <span className="mt-0.5 block font-display text-xs text-gold">
                  {formatPrecio(p)}
                </span>
              </div>
              <span className="flex shrink-0 items-center gap-2.5 sm:gap-3">
                <button
                  onClick={() => onSumar(p.id, -1)}
                  disabled={cant === 0}
                  className="stepper-btn"
                  aria-label={`Quitar ${p.nombre}`}
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span
                  className={`w-8 text-center font-display text-lg ${
                    cant > 0 ? "font-semibold text-gold" : "text-ivory/60"
                  }`}
                >
                  {cant}
                </span>
                <button
                  onClick={() => onSumar(p.id, 1)}
                  className="stepper-btn"
                  aria-label={`Agregar ${p.nombre}`}
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

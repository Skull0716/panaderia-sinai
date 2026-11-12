"use client";

import { useMemo, useState } from "react";
import { MessageCircle, Minus, Phone, Plus } from "lucide-react";
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
      <div className="shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* ---------- Columna de contexto y contacto ---------- */}
        <div>
          <Reveal>
            <h2 className="font-display text-3xl font-normal leading-tight tracking-tight text-ivory md:text-5xl">
              Encarga. Nosotros horneamos de madrugada.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-ivory/65">
              Cero vitrina, cero desperdicio. Reservas la noche anterior y
              el pan sale del horno fresco, al amanecer, sólo para ti.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 space-y-4">
              <a
                href={TELEFONO_LINK}
                className="group flex items-center gap-4 text-ivory/70 transition-colors hover:text-ivory"
              >
                <span className="flex h-11 w-11 items-center justify-center border border-ivory/15 text-gold">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.2em] text-ivory/40">
                    Teléfono directo
                  </span>
                  <span className="font-display text-lg tracking-wide">
                    {TELEFONO}
                  </span>
                </span>
              </a>
              <a
                href={WA_LINK("Hola, Panadería Sinaí. Quiero encargar pan.")}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 text-ivory/70 transition-colors hover:text-ivory"
              >
                <span className="flex h-11 w-11 items-center justify-center border border-ivory/15 text-gold">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.2em] text-ivory/40">
                    WhatsApp
                  </span>
                  <span className="font-display text-lg tracking-wide">
                    Escribir ahora
                  </span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* ---------- Selector de encargo ---------- */}
        <Reveal delay={0.05}>
          <div className="border border-ivory/10 bg-card p-6 md:p-8">
            <div className="flex items-baseline justify-between border-b border-ivory/10 pb-5">
              <h3 className="font-display text-xl text-ivory md:text-2xl">
                Tu encargo
              </h3>
              <span className="text-[11px] uppercase tracking-[0.2em] text-ivory/40">
                Precio por pieza
              </span>
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
            <label className="mt-6 block">
              <span className="text-[11px] uppercase tracking-[0.2em] text-ivory/40">
                Nota — fecha de entrega u observaciones
              </span>
              <textarea
                value={nota}
                onChange={(e) => setNota(e.target.value)}
                rows={2}
                placeholder="Ej. Para el sábado por la mañana…"
                className="mt-2 w-full resize-none border border-ivory/10 bg-coal/60 px-4 py-3 text-sm text-ivory placeholder:text-ivory/30 focus:border-gold/50 focus:outline-none"
              />
            </label>

            {/* Resumen y CTA */}
            <div className="mt-6 flex flex-col gap-4 border-t border-ivory/10 pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-sm uppercase tracking-[0.2em] text-ivory/50">
                  Total
                </span>
                <span className="text-right font-display text-2xl text-ivory">
                  {total}{" "}
                  <span className="text-base">pieza{total === 1 ? "" : "s"}</span>
                  {totalPrecio > 0 && (
                    <span className="ml-2 text-gold">≈ ${totalPrecio}</span>
                  )}
                </span>
              </div>
              {hayPorEncargo && (
                <p className="text-xs text-ivory/40">
                  Incluye piezas por encargo: se cotizan aparte.
                </p>
              )}

              {total > 0 ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  Enviar por WhatsApp
                </a>
              ) : (
                <p className="text-center text-sm text-ivory/40">
                  Selecciona al menos un pan para continuar.
                </p>
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
    <div className="mt-6">
      <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
        {titulo}
      </p>
      <ul className="mt-3 divide-y divide-ivory/5">
        {items.map((p) => (
          <li
            key={p.id}
            className="flex items-center justify-between gap-3 py-3"
          >
            <div className="min-w-0 flex-1">
              <span className="block text-sm text-ivory/80 md:text-base">
                {p.nombre}
              </span>
              <span className="mt-0.5 block font-display text-xs text-gold">
                {formatPrecio(p)}
              </span>
            </div>
            <span className="flex shrink-0 items-center gap-3">
              <button
                onClick={() => onSumar(p.id, -1)}
                disabled={pedido[p.id] === 0}
                className="stepper-btn"
                aria-label={`Quitar ${p.nombre}`}
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-6 text-center font-display text-lg text-ivory">
                {pedido[p.id]}
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
        ))}
      </ul>
    </div>
  );
}

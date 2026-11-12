import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import {
  DIRECCION,
  HORARIO,
  MAPS_EMBED,
  MAPS_LINK,
  TELEFONO,
  TELEFONO_LINK,
} from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Ubicacion() {
  return (
    <section
      id="ubicacion"
      className="relative border-t border-ivory/10 py-24 md:py-32"
    >
      <div className="shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Columna de datos de ubicación y horario */}
        <div>
          <Reveal>
            <h2 className="font-display text-3xl font-normal leading-tight tracking-tight text-ivory sm:text-4xl md:text-5xl">
              Dónde estamos
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/65">
              Visítanos o recoge tu pedido directamente en nuestra panadería en
              el Barrio de Arriba, Ocotlán de Morelos.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 space-y-5 border-t border-ivory/10 pt-7">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-ivory/15 bg-card text-gold">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-ivory/45">
                    Dirección
                  </p>
                  <p className="mt-1 font-display text-lg leading-snug text-ivory">
                    {DIRECCION}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-ivory/15 bg-card text-gold">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-ivory/45">
                    Días de trabajo
                  </p>
                  <p className="mt-1 font-display text-lg text-ivory">
                    Trabajamos todos los días menos los miércoles
                  </p>
                  <p className="mt-0.5 text-xs text-ivory/50">{HORARIO}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-ivory/15 bg-card text-gold">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-ivory/45">
                    Teléfono y WhatsApp
                  </p>
                  <a
                    href={TELEFONO_LINK}
                    className="mt-1 inline-block font-display text-lg text-gold transition-colors hover:text-ivory"
                  >
                    {TELEFONO}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 border border-gold/45 bg-gold/10 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition-all duration-500 ease-[var(--flight-ease)] hover:border-gold hover:bg-gold hover:text-coal"
              >
                <span>Abrir en Google Maps</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Mapa interactivo */}
        <Reveal delay={0.1}>
          <div className="overflow-hidden border border-ivory/15 bg-card p-2.5 sm:p-3 shadow-card">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-ivory/10 bg-coal">
              <iframe
                title="Ubicación de Panadería Sinaí en Galeana 309, Barrio de Arriba, Ocotlán de Morelos"
                src={MAPS_EMBED}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-2.5 flex items-center justify-between px-1 text-xs text-ivory/55">
              <span>Galeana 309, Barrio de Arriba</span>
              <span>Ocotlán de Morelos, Oax.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

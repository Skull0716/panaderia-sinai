import { MapPin, MessageCircle, Phone } from "lucide-react";
import {
  DIRECCION,
  HORARIO,
  MAPS_LINK,
  TELEFONO,
  TELEFONO_LINK,
  WA_LINK,
} from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-ivory/10 py-14">
      <div className="shell flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl tracking-[0.14em] text-ivory">
            Panadería <span className="text-gold">Sinaí</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory/55">
            Pan tradicional hecho a mano bajo pedido en Ocotlán de Morelos,
            Oaxaca. {HORARIO}.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-ivory/60 transition-colors hover:text-ivory"
          >
            <MapPin className="h-4 w-4 shrink-0 text-gold" />
            <span>{DIRECCION}</span>
          </a>
          <a
            href={TELEFONO_LINK}
            className="inline-flex items-center gap-2 text-ivory/60 transition-colors hover:text-ivory"
          >
            <Phone className="h-4 w-4 shrink-0 text-gold" />
            {TELEFONO}
          </a>
          <a
            href={WA_LINK("Hola, Panadería Sinaí. Quiero encargar pan.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-ivory/60 transition-colors hover:text-ivory"
          >
            <MessageCircle className="h-4 w-4 shrink-0 text-gold" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="shell mt-12 flex flex-col gap-2 border-t border-ivory/10 pt-6 text-xs text-ivory/35 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Panadería Sinaí · Ocotlán de Morelos, Oaxaca</p>
        <p>“El Pan de Muerto” · Octavio Ocampo</p>
      </div>
    </footer>
  );
}

import { MessageCircle, Phone } from "lucide-react";
import { TELEFONO, TELEFONO_LINK, WA_LINK } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-ivory/10 py-14">
      <div className="shell flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl tracking-[0.28em] text-ivory">
            SINAÍ
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/50">
            Obrador tradicional oaxaqueño. Pan de madrugada, hecho a mano,
            bajo pedido.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <a
            href={TELEFONO_LINK}
            className="inline-flex items-center gap-2 text-ivory/60 transition-colors hover:text-ivory"
          >
            <Phone className="h-4 w-4 text-gold" />
            {TELEFONO}
          </a>
          <a
            href={WA_LINK("Hola, Panadería Sinaí. Quiero encargar pan.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-ivory/60 transition-colors hover:text-ivory"
          >
            <MessageCircle className="h-4 w-4 text-gold" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="shell mt-12 flex flex-col gap-2 border-t border-ivory/10 pt-6 text-xs text-ivory/30 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Panadería Sinaí · Oaxaca, México</p>
        <p>“El Pan de Muerto” (1991) · Óleo de Octavio Ocampo</p>
      </div>
    </footer>
  );
}

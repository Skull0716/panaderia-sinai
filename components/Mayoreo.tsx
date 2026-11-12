import { MessageCircle } from "lucide-react";
import { WA_LINK } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Mayoreo() {
  return (
    <section
      id="mayoreo"
      className="relative border-t border-ivory/10 bg-surface py-24 md:py-32"
    >
      <div className="shell grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
        <div>
          <Reveal>
            <h2 className="font-display text-3xl font-normal leading-tight tracking-tight text-ivory md:text-5xl">
              Mayoreo
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-ivory/65">
              ¿Fiesta, evento o reventa? A partir de 100 piezas el precio es
              especial. Horneamos tu pedido completo de madrugada, con la
              misma masa y el mismo fuego.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={WA_LINK(
                "Hola, Panadería Sinaí. Quiero cotizar un pedido de mayoreo (100 piezas o más).",
              )}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-8"
            >
              <MessageCircle className="h-4 w-4" />
              Cotizar por WhatsApp
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="border border-ivory/10 bg-card p-8 md:p-10">
            <span className="font-display text-7xl leading-none text-gold md:text-8xl">
              100+
            </span>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-ivory/50">
              piezas
            </p>
            <p className="mt-2 text-ivory/60">Precio especial de mayoreo.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

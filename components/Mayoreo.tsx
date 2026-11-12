import { MessageCircle } from "lucide-react";
import { WA_LINK } from "@/lib/data";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

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
              ¿Fiesta, mayordomía, compromiso o reventa? A partir de 100
              piezas el precio es especial. Horneamos tu pedido completo para
              que lo recibas recién hecho.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8">
              <MagneticButton
                href={WA_LINK(
                  "Hola, Panadería Sinaí. Quiero cotizar un pedido de mayoreo (100 piezas o más).",
                )}
                external
                className="btn-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Cotizar por WhatsApp
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="border border-ivory/15 bg-card p-8 md:p-12">
            <span className="font-display text-7xl leading-none text-gold md:text-8xl">
              100+
            </span>
            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-ivory/50">
              piezas por horneada
            </p>
            <p className="mt-2 text-sm text-ivory/65">
              Precio especial de mayoreo bajo encargo previo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

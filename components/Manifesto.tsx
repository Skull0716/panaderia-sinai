import Reveal from "@/components/Reveal";

const principios = [
  {
    numeral: "I",
    titulo: "Horneado",
    texto: "Cada charola entra al horno en su punto exacto, cuidando el dorado y la suavidad de cada pieza.",
  },
  {
    numeral: "II",
    titulo: "Paciencia",
    texto: "La masa manda. Respetamos el tiempo de reposo y fermentación para que el pan salga esponjoso.",
  },
  {
    numeral: "III",
    titulo: "Tradición",
    texto: "Recetas familiares que llevamos preparando más de veinticinco años en Ocotlán de Morelos.",
  },
];

export default function Manifesto() {
  return (
    <section
      id="manifiesto"
      className="relative border-t border-ivory/10 bg-surface py-24 md:py-36"
    >
      <div className="shell grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Columna de ubicación */}
        <div>
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-ivory/45">
              Ocotlán de Morelos, Oax.
            </p>
          </Reveal>
        </div>

        {/* Columna del relato */}
        <div>
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-normal leading-tight tracking-tight text-ivory md:text-5xl">
              El tiempo como ingrediente.
              <span className="text-gold"> Oaxaca en la masa.</span>
            </h2>
          </Reveal>

          <div className="mt-10 max-w-[65ch] space-y-6 text-lg leading-relaxed text-ivory/65 md:text-xl">
            <Reveal delay={0.05}>
              <p>
                Antes de que Ocotlán despierte, en Panadería Sinaí ya estamos
                trabajando la masa. Llevamos más de veinticinco años con una
                sola certeza: el buen pan no se improvisa, se prepara con calma.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                No horneamos para que el pan se quede frío en una vitrina. Cada
                pedido se prepara especialmente para quien lo encarga: harina,
                huevo, manteca y el tiempo necesario para que salga recién
                hecho.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Seguimos trabajando a mano todos los días —excepto los
                miércoles— para que a tu mesa llegue pan caliente, suave y con
                el sabor de siempre.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Principios */}
      <div className="shell mt-20 md:mt-28">
        <div className="grid gap-px overflow-hidden border border-ivory/15 bg-ivory/15 md:grid-cols-3">
          {principios.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 0.08} className="bg-surface">
              <div className="group h-full p-8 transition-colors duration-300 hover:bg-card/70 md:p-10">
                <span className="font-display text-3xl text-gold/50 transition-colors duration-300 group-hover:text-gold">
                  {p.numeral}
                </span>
                <h3 className="mt-6 font-display text-2xl font-normal text-ivory transition-colors duration-300 group-hover:text-gold md:text-3xl">
                  {p.titulo}
                </h3>
                <p className="mt-3 leading-relaxed text-ivory/65">
                  {p.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

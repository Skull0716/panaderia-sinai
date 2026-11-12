import Reveal from "@/components/Reveal";

const principios = [
  {
    numeral: "I",
    titulo: "Fuego",
    texto: "El horno de leña no tiene prisa. Leña de encino y horas de brasa.",
  },
  {
    numeral: "II",
    titulo: "Paciencia",
    texto: "La masa manda. Nosotros obedecemos su tiempo, no el reloj.",
  },
  {
    numeral: "III",
    titulo: "Memoria",
    texto: "Recetas que pasan de manos a manos desde hace veinticinco años.",
  },
];

export default function Manifesto() {
  return (
    <section
      id="manifiesto"
      className="relative border-t border-ivory/10 bg-surface py-24 md:py-36"
    >
      <div className="shell grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Columna de etiqueta */}
        <div>
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-ivory/40">
              2001 — hoy
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
                Antes de que Oaxaca despierte, el horno de Sinaí ya respira.
                Hace veinticinco años encendimos el fuego con una sola
                certeza: el pan no se improvisa, se espera.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                No horneamos para llenar vitrinas ni para que sobre. Cada
                pieza nace de una promesa hecha la víspera. Harina, agua,
                fuego y paciencia: el tiempo como ingrediente, Oaxaca en la
                masa.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Hoy seguimos amasando a mano, en silencio, de madrugada.
                Porque el buen pan — como la buena memoria — se cocina
                despacio y nunca se desperdicia.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Principios del oficio */}
      <div className="shell mt-20 md:mt-28">
        <div className="grid gap-px overflow-hidden border border-ivory/15 bg-ivory/15 md:grid-cols-3">
          {principios.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 0.08} className="bg-surface">
              <div className="group h-full p-8 transition-colors duration-300 hover:bg-card/70 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl text-gold/50 transition-colors duration-300 group-hover:text-gold">
                    {p.numeral}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ivory/30">
                    Oficio 0{i + 1}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-normal text-ivory transition-colors duration-300 group-hover:text-gold md:text-3xl">
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

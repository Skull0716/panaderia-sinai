import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      /* ============ PALETA — extraída de “El Pan de Muerto” (Octavio Ocampo, 1991) ============
         Se resuelve desde tokens CSS para soportar modo claro/oscuro. */
      colors: {
        coal: "rgb(var(--bg-primary) / <alpha-value>)", // fondo (negro en oscuro / marfil en claro)
        surface: "rgb(var(--bg-surface) / <alpha-value>)", // superficie
        card: "rgb(var(--bg-card) / <alpha-value>)", // tarjeta
        ivory: "rgb(var(--text-primary) / <alpha-value>)", // texto (marfil en oscuro / carbón en claro)
        gold: "rgb(var(--accent-gold) / <alpha-value>)", // corteza recién horneada
        ember: "rgb(var(--accent-ember) / <alpha-value>)", // brasa de horno / teja
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "Georgia", "serif"],
        sans: ["var(--font-instrument)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      /* ============ ILUMINACIÓN ============ */
      boxShadow: {
        "ambient-gold": "0 0 120px 0 rgba(201, 138, 62, 0.18)",
        "ambient-ember": "0 0 90px 0 rgba(138, 54, 34, 0.22)",
        card: "0 1px 0 0 rgba(245, 239, 230, 0.06), 0 32px 64px -24px rgba(0, 0, 0, 0.7)",
      },
      /* ============ CURVAS DE RESORTE (CSS) ============ */
      transitionTimingFunction: {
        spring: "cubic-bezier(0.22, 1, 0.36, 1)",
        "spring-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      /* ============ ALIENTO DEL HORNO ============ */
      keyframes: {
        breathe: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        flicker: {
          "0%, 100%": { opacity: "0.4" },
          "25%": { opacity: "0.7" },
          "50%": { opacity: "0.35" },
          "75%": { opacity: "0.85" },
        },
      },
      animation: {
        breathe: "breathe 8s ease-in-out infinite",
        flicker: "flicker 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

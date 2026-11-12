import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import PanesGrid from "@/components/PanesGrid";
import OrderSection from "@/components/OrderSection";
import Mayoreo from "@/components/Mayoreo";
import Ubicacion from "@/components/Ubicacion";
import Footer from "@/components/Footer";
import { PAINTING_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Panadería Sinaí · Ocotlán de Morelos, Oaxaca",
  description:
    "Panadería tradicional en Ocotlán de Morelos, Oaxaca, con más de 25 años haciendo pan bajo pedido: concha, pan de manteca, pan de yema, amarillo, bolillo, resobado, regañadas, pan de muerto y rosca de reyes. Pedidos al 951 190 0287.",
  openGraph: {
    title: "Panadería Sinaí · Ocotlán de Morelos, Oaxaca",
    description:
      "Más de 25 años haciendo pan tradicional bajo pedido en Galeana 309, Barrio de Arriba, Ocotlán de Morelos.",
    url: "https://panaderia-sinai.mx",
    siteName: "Panadería Sinaí",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: PAINTING_URL,
        width: 1200,
        height: 1600,
        alt: "El Pan de Muerto de Octavio Ocampo — Panadería Sinaí",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panadería Sinaí · Ocotlán de Morelos, Oaxaca",
    description: "El tiempo como ingrediente. Oaxaca en la masa.",
    images: [PAINTING_URL],
  },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main className="overflow-hidden">
        <Hero />
        <Manifesto />
        <PanesGrid />
        <OrderSection />
        <Mayoreo />
        <Ubicacion />
      </main>
      <Footer />
    </>
  );
}

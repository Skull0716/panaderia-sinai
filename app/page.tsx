import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import PanesGrid from "@/components/PanesGrid";
import OrderSection from "@/components/OrderSection";
import Mayoreo from "@/components/Mayoreo";
import Footer from "@/components/Footer";
import { PAINTING_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Panadería Sinaí · Horno Tradicional Oaxaqueño",
  description:
    "Obrador tradicional oaxaqueño con más de 25 años de oficio. Pan de madrugada, 100% bajo pedido: concha, pan de yema, bolillo de horno, pan de muerto y rosca de reyes. Encarga por WhatsApp al 951 190 0287.",
  openGraph: {
    title: "Panadería Sinaí · Horno Tradicional Oaxaqueño",
    description:
      "El tiempo como ingrediente. Oaxaca en la masa. Más de 25 años horneando de madrugada, sin vitrina y sin desperdicio.",
    url: "https://panaderia-sinai.mx",
    siteName: "Panadería Sinaí",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: PAINTING_URL,
        width: 1200,
        height: 1600,
        alt: "El Pan de Muerto (1991), óleo de Octavio Ocampo — emblema del Obrador Sinaí",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panadería Sinaí · Horno Tradicional Oaxaqueño",
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
      </main>
      <Footer />
    </>
  );
}

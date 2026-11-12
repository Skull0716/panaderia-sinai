import type { Metadata } from "next";
import Script from "next/script";
import { Cinzel, Instrument_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://panaderia-sinai.mx"),
  title: {
    default: "Panadería Sinaí · Horno Tradicional Oaxaqueño",
    template: "%s · Panadería Sinaí",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      data-theme="dark"
      suppressHydrationWarning
      className={`${cinzel.variable} ${instrument.variable}`}
    >
      <body className="bg-coal font-sans text-ivory antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("theme");var next=t==="light"?"light":"dark";document.documentElement.setAttribute("data-theme",next);}catch(e){}})();`}
        </Script>
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}

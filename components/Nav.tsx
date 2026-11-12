"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { WA_LINK } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#oficio", label: "Oficio" },
  { href: "#manifiesto", label: "Manifiesto" },
  { href: "#encargo", label: "Encargo" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ivory/10 bg-coal/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between md:h-20">
        <a
          href="#inicio"
          className="font-display text-lg tracking-[0.28em] text-ivory"
        >
          SINAÍ
        </a>

        {/* Navegación de escritorio */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-ivory/55 transition-colors duration-300 hover:text-ivory"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href={WA_LINK("Hola, Panadería Sinaí. Quiero encargar pan.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-gold/40 px-4 py-2 text-sm tracking-wide text-ivory transition-colors duration-300 hover:bg-gold/10"
          >
            <MessageCircle className="h-4 w-4 text-gold" />
            Encargar
          </a>
        </nav>

        {/* Botón de menú móvil */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`h-px w-6 bg-ivory transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-ivory transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-ivory transition-all duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Menú móvil */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 32 }}
        className="overflow-hidden border-b border-ivory/10 bg-coal/95 backdrop-blur-md md:hidden"
      >
        <nav className="shell flex flex-col gap-4 py-6">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.25em] text-ivory/40">
              Tema
            </span>
            <ThemeToggle />
          </div>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-lg text-ivory/75 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK("Hola, Panadería Sinaí. Quiero encargar pan.")}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 border border-gold/40 px-4 py-3 text-sm tracking-wide text-ivory"
          >
            <MessageCircle className="h-4 w-4 text-gold" />
            Encargar por WhatsApp
          </a>
        </nav>
      </motion.div>
    </header>
  );
}

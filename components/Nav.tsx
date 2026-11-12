"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { WA_LINK } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#oficio", label: "Panes" },
  { href: "#manifiesto", label: "Historia" },
  { href: "#encargo", label: "Encargar" },
  { href: "#mayoreo", label: "Mayoreo" },
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
          ? "border-b border-ivory/10 bg-coal/85 backdrop-blur-xl"
          : "border-b border-ivory/[0.06] bg-coal/30 backdrop-blur-sm"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between md:h-20">
        <a
          href="#inicio"
          className="group flex items-baseline gap-3"
        >
          <span className="font-display text-lg tracking-[0.26em] text-ivory transition-colors group-hover:text-gold">
            SINAÍ
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.24em] text-ivory/40 sm:inline-block">
            Est. 2001 · Oaxaca
          </span>
        </a>

        {/* Navegación de escritorio */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative py-1 text-xs uppercase tracking-[0.2em] text-ivory/65 transition-colors duration-300 hover:text-ivory after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <div className="h-4 w-px bg-ivory/15" aria-hidden />
          <ThemeToggle />
          <a
            href={WA_LINK("Hola, Panadería Sinaí. Quiero hacer un pedido de pan.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 border border-gold/45 bg-gold/10 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-ivory transition-all duration-500 ease-[var(--flight-ease)] hover:border-gold hover:bg-gold hover:text-coal"
          >
            <MessageCircle className="h-3.5 w-3.5 text-gold transition-colors group-hover:text-coal" />
            <span>951 190 0287</span>
          </a>
        </nav>

        {/* Controles móviles */}
        <div className="flex items-center gap-2.5 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex h-10 w-10 items-center justify-center border border-ivory/15 bg-card/40 text-ivory"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300 ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-1.5 h-px bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300 ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Panel móvil con resorte físico */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="overflow-hidden border-t border-ivory/10 bg-coal/95 backdrop-blur-xl md:hidden"
          >
            <div className="shell flex flex-col gap-5 py-7">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-xl tracking-wide text-ivory transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WA_LINK("Hola, Panadería Sinaí. Quiero hacer un pedido de pan.")}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                <MessageCircle className="h-4 w-4" />
                Pedir al 951 190 0287
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

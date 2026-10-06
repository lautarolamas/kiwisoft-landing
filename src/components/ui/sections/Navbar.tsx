"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { handleScroll } from "@/utils/scrollToElement";
import KiwiMascot from "@/components/ui/sections/KiwiMascot";
import { CONTACT_EMAIL } from "@/lib/knowledge";

const LINKS = [
  { href: "#nuestros-servicios", label: "Servicios" },
  { href: "#planes", label: "Planes" },
  { href: "#preguntale-a-kiwi", label: "Kiwi IA" },
  { href: "#faq", label: "Preguntas" },
];

const MAIL = `mailto:${CONTACT_EMAIL}?subject=Consulta%20sobre%20KiwiSoft&body=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios.`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <nav
        className={`pointer-events-auto mx-auto flex max-w-5xl items-center justify-between rounded-full border px-3 sm:px-5 transition-all duration-300 ${
          scrolled
            ? "h-14 border-white/10 bg-[#1C1C1C]/70 backdrop-blur-xl shadow-lg shadow-black/30"
            : "h-16 border-transparent bg-transparent"
        }`}
      >
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-1 text-xl font-bold tracking-tight">
          <KiwiMascot size={40} alive={false} />
          <span>Kiwisoft</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleScroll}
              className="rounded-full px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={MAIL}
          className="hidden md:inline-flex rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/30"
        >
          Contáctanos
        </a>

        <button
          className="md:hidden grid h-10 w-10 place-items-center rounded-full text-white hover:bg-white/10"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <IconMenu2 />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto fixed inset-0 z-[80] flex flex-col items-center justify-center gap-2 bg-[#1C1C1C]/95 backdrop-blur-2xl"
          >
            <button
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full text-white hover:bg-white/10"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <IconX />
            </button>
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                onClick={(e) => {
                  setOpen(false);
                  document.body.style.overflow = "";
                  handleScroll(e);
                }}
                className="rounded-full px-6 py-3 text-2xl font-semibold text-white hover:text-emerald-400"
              >
                {l.label}
              </motion.a>
            ))}
            <a
              href={MAIL}
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-emerald-500 px-8 py-3 text-lg font-medium text-white"
            >
              Contáctanos
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

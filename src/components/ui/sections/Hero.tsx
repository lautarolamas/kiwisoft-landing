"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconArrowRight, IconSparkles } from "@tabler/icons-react";
import KiwiMascot from "@/components/ui/sections/KiwiMascot";
import { askKiwi } from "@/components/ui/sections/ChatWidget";
import { handleScroll } from "@/utils/scrollToElement";

const WORDS = [
  "soluciones digitales",
  "experiencias únicas",
  "futuro innovador",
  "éxito digital",
];

const CHIPS = [
  { label: "Next.js", cls: "left-0 top-[12%]", d: 0 },
  { label: "React", cls: "right-0 top-[22%]", d: 0.6 },
  { label: "SEO", cls: "left-[4%] bottom-[16%]", d: 1.2 },
  { label: "Responsive", cls: "right-[2%] bottom-[8%]", d: 1.8 },
];

export default function Hero() {
  const [i, setI] = useState(0);
  const [bubble, setBubble] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % WORDS.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto grid items-center gap-10 px-4 pb-16 pt-28 sm:pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:pb-24">
        <div className="space-y-7 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300"
          >
            <IconSparkles size={16} /> Estudio web · Buenos Aires
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Transformamos ideas en{" "}
            <span className="relative inline-block min-h-[1.2em] align-bottom">
              <AnimatePresence mode="wait">
                <motion.span
                  key={i}
                  initial={{ y: 24, opacity: 0, filter: "blur(6px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -24, opacity: 0, filter: "blur(6px)" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="inline-block bg-gradient-to-r from-emerald-300 via-emerald-400 to-lime-300 bg-clip-text text-transparent"
                >
                  {WORDS[i]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mx-auto max-w-xl text-base text-gray-400 sm:text-lg lg:mx-0"
          >
            En KiwiSoft, nos dedicamos a crear páginas web a medida, landing
            pages, sitios institucionales y diseños OnePage, ideales para
            representar tu marca y destacar en el mundo digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="flex flex-col items-center gap-3 sm:flex-row lg:justify-start justify-center"
          >
            <a
              href="#nuestros-servicios"
              onClick={handleScroll}
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-base font-medium text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
            >
              Conoce más
              <IconArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => askKiwi("¿Qué servicios ofrecen?")}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              Preguntale a Kiwi
            </button>
          </motion.div>
        </div>

        {/* Mascota */}
        <div className="relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-md">
          <div className="absolute inset-[8%] rounded-full bg-emerald-500/25 blur-3xl" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative w-[min(68vw,300px)]">
              <KiwiMascot
                size="100%"
                onPoke={() => {
                  setBubble(true);
                  setTimeout(() => setBubble(false), 2200);
                }}
                className="drop-shadow-[0_20px_40px_rgba(16,185,129,0.35)]"
              />
              <AnimatePresence>
                {bubble && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl bg-white px-4 py-2 text-sm font-medium text-[#1C1C1C] shadow-xl"
                  >
                    ¡Hola! Soy Kiwi 🥝
                    <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          {CHIPS.map((c) => (
            <motion.span
              key={c.label}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: c.d, ease: "easeInOut" }}
              className={`absolute ${c.cls} rounded-full border border-white/10 bg-[#1C1C1C]/70 px-3 py-1.5 text-xs text-gray-200 backdrop-blur sm:text-sm`}
            >
              {c.label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

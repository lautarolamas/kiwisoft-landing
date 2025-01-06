"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Player } from "@lottiefiles/react-lottie-player";
import { handleScroll } from "@/utils/scrollToElement";
export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  const words = [
    "soluciones digitales",
    "experiencias únicas",
    "futuro innovador",
    "éxito digital",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto px-4 py-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contenido de texto */}
        <div className="space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Transformamos ideas en{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-block bg-emerald-500/20 text-emerald-400 px-4 py-1 rounded-full"
              >
                {words[currentWord]}
              </motion.span>
            </AnimatePresence>
          </h1>
          <p className="text-gray-400 text-lg max-w-full sm:max-w-lg">
            En KiwiSoft, nos dedicamos a crear páginas web a medida, landing
            pages, sitios institucionales y diseños OnePage, ideales para
            representar tu marca y destacar en el mundo digital.
          </p>
          <a
            onClick={handleScroll}
            href="#nuestros-servicios"
            className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-8 py-3 rounded-full inline-block"
          >
            Conoce más
          </a>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 80%)",
            }}
          />
          <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
            <AspectRatio>
              <Player
                autoplay
                loop
                src="/images/Animation.json"
                style={{ width: "100%", height: "100%" }}
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}

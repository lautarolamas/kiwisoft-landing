"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    <section className="container mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
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
          <p className="text-gray-400 text-lg max-w-lg">
            En KiwiSoft, nos especializamos en el desarrollo de software a
            medida, aplicaciones web y móviles, y soluciones tecnológicas
            innovadoras para impulsar tu negocio hacia el futuro digital.
          </p>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-8 py-3 rounded-full">
            Comienza tu proyecto
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-full blur-3xl" />
          <div className="w-[450px]">
            <AspectRatio></AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}

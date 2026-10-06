"use client";

import { motion } from "framer-motion";
import KiwiMascot from "@/components/ui/sections/KiwiMascot";
import { askKiwi } from "@/components/ui/sections/ChatWidget";
import { SUGGESTIONS } from "@/lib/knowledge";

export default function AskKiwi() {
  return (
    <section id="preguntale-a-kiwi" className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-emerald-500/25 bg-gradient-to-br from-emerald-500/15 via-white/[0.03] to-transparent p-8 sm:p-12"
      >
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr]">
          <div className="mx-auto"><KiwiMascot size={150} /></div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Preguntale a Kiwi</h2>
            <p className="mt-3 text-gray-400">
              Nuestro asistente con IA te responde al instante sobre servicios, planes y tiempos.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => askKiwi(s)}
                  className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-100 transition hover:bg-emerald-500/25"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

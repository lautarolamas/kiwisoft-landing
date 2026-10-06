"use client";

import { motion } from "framer-motion";
import { IconBolt, IconTargetArrow, IconDeviceMobile } from "@tabler/icons-react";
import Spotlight from "./Spotlight";

const PILLARS = [
  {
    tag: "PRESENCIA",
    title: "Tu marca, bien representada",
    text: "Un sitio con identidad propia, claro y coherente, que se ve profesional en cualquier pantalla.",
    Icon: IconDeviceMobile,
  },
  {
    tag: "VELOCIDAD",
    title: "Rápido y optimizado",
    text: "Código liviano y buenas prácticas de rendimiento y SEO para que cargue rápido y se encuentre fácil.",
    Icon: IconBolt,
  },
  {
    tag: "CONVERSIÓN",
    title: "Pensado para que te contacten",
    text: "Cada sección guía a la persona hacia una acción: escribirte, consultar un plan o pedir un presupuesto.",
    Icon: IconTargetArrow,
  },
];

export default function Pillars() {
  return (
    <section className="container mx-auto px-4 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-emerald-400">QUÉ RESOLVEMOS</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Menos fricción,{" "}
          <span className="bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
            más resultados
          </span>
        </h2>
        <p className="mt-4 text-gray-400">
          Trabajamos sobre lo que de verdad importa en un sitio: que se vea bien, que ande rápido y que traiga consultas.
        </p>
      </motion.div>
      <div className="grid gap-4 md:grid-cols-3">
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.tag}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Spotlight className="h-full">
              <div className="p-7">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-emerald-400">{p.tag}</span>
                  <p.Icon className="text-emerald-300/70" size={26} />
                </div>
                <h3 className="text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 text-gray-400">{p.text}</p>
              </div>
            </Spotlight>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

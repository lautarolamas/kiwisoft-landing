"use client";

import { motion } from "framer-motion";
import {
  IconLayoutGrid, IconSparkles, IconMoon, IconWand,
  IconGauge, IconRobot, IconAccessible, IconPointer,
} from "@tabler/icons-react";
import Spotlight from "./Spotlight";

const TRENDS = [
  { Icon: IconLayoutGrid, title: "Bento grids", text: "Contenido en bloques modulares, ordenados y fáciles de escanear." },
  { Icon: IconWand, title: "Microinteracciones", text: "Detalles que reaccionan al toque y al cursor y dan vida a la interfaz." },
  { Icon: IconSparkles, title: "Mascotas de marca", text: "Personajes animados que le dan personalidad y cercanía a la marca." },
  { Icon: IconRobot, title: "Asistentes con IA", text: "Chats que responden dudas al instante con la información del sitio." },
  { Icon: IconMoon, title: "Modo oscuro nativo", text: "Interfaces cuidadas en oscuro, con contraste y color bien pensados." },
  { Icon: IconPointer, title: "Animación al scroll", text: "Secciones que aparecen y se mueven mientras recorrés la página." },
  { Icon: IconGauge, title: "Rendimiento primero", text: "Cargas rápidas y buen puntaje en las métricas que mira Google." },
  { Icon: IconAccessible, title: "Accesibilidad", text: "Sitios usables por todos: contraste, teclado y respeto por el movimiento reducido." },
];

export default function Trends() {
  return (
    <section id="tendencias" className="container mx-auto px-4 py-20 sm:py-28">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-emerald-400">TENDENCIAS 2026</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Diseño al día, no de hace cinco años</h2>
        <p className="mt-4 text-gray-400">Lo que hoy se espera de una web moderna, y lo que aplicamos en cada proyecto.</p>
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TRENDS.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 4) * 0.07, duration: 0.45 }}
          >
            <Spotlight className="h-full">
              <div className="p-6">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-400">
                  <t.Icon size={22} />
                </div>
                <h3 className="font-bold text-white">{t.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{t.text}</p>
              </div>
            </Spotlight>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

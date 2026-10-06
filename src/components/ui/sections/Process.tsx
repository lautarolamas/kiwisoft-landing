"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const STEPS = [
  { n: "01", title: "Conversamos", text: "Entendemos tu negocio, tu público y qué querés lograr con tu sitio." },
  { n: "02", title: "Diseñamos", text: "Definimos estructura, estilo y contenido, respetando la identidad de tu marca." },
  { n: "03", title: "Desarrollamos", text: "Construimos tu sitio a medida: rápido, responsive y listo para buscadores." },
  { n: "04", title: "Lanzamos y acompañamos", text: "Publicamos y seguimos al lado tuyo con soporte y mantenimiento." },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const h = useSpring(scrollYProgress, { stiffness: 100, damping: 24 });

  return (
    <section id="metodo" className="container mx-auto px-4 py-20 sm:py-28">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-emerald-400">MÉTODO</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Primero entendemos tu idea.{" "}
          <span className="text-gray-500">Después la construimos.</span>
        </h2>
      </div>

      <div ref={ref} className="relative mx-auto max-w-3xl">
        <div className="absolute bottom-0 left-5 top-0 w-px bg-white/10 sm:left-1/2" />
        <motion.div
          style={{ scaleY: h }}
          className="absolute bottom-0 left-5 top-0 w-px origin-top bg-gradient-to-b from-emerald-300 to-emerald-500 sm:left-1/2"
        />
        <ol className="space-y-12">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`relative pl-14 sm:w-1/2 ${
                i % 2 === 0 ? "sm:pl-0 sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"
              }`}
            >
              <span
                className={`absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border border-emerald-500/50 bg-[#1C1C1C] text-sm font-bold text-emerald-300 sm:left-auto ${
                  i % 2 === 0 ? "sm:-right-5" : "sm:-left-5"
                }`}
              >
                {s.n}
              </span>
              <h3 className="text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-gray-400">{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

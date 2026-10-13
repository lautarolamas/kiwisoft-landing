"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IconArrowUpRight, IconStarFilled } from "@tabler/icons-react";

const BASE = "https://landings-jade.vercel.app";

// TODO: sumar las landings que falten (cada una con su ruta real).
const PROJECTS = [
  {
    name: "Frutilla",
    tag: "Landing page",
    text: "Sitio de marca con identidad propia, pensado para mostrar el producto y convertir visitas en consultas.",
    url: "https://frutilla-inky.vercel.app/",
    accent: "#f43f5e",
  },
  {
    name: "Café",
    tag: "Gastronomía",
    text: "Carta, ambiente y ubicación en una sola página, rápida y cómoda desde el celular.",
    url: `${BASE}/cafe`,
    accent: "#f59e0b",
  },
  {
    name: "Gimnasio",
    tag: "Fitness",
    text: "Planes, horarios y contacto directo para sumar nuevos socios.",
    url: `${BASE}/gimnasio`,
    accent: "#38bdf8",
  },
];

const PREVIEW_W = 1280;
const PREVIEW_H = 800;

// Vista previa real del sitio: iframe escalado al ancho de la tarjeta.
function Preview({ url, accent }: { url: string; accent: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / PREVIEW_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={box}
      className="relative overflow-hidden bg-[#161616]"
      style={{ aspectRatio: `${PREVIEW_W} / ${PREVIEW_H}` }}
    >
      <div
        aria-hidden
        className="absolute inset-0 animate-pulse"
        style={{ background: `linear-gradient(135deg, ${accent}33, transparent)` }}
      />
      <div
        className={`absolute left-0 top-0 origin-top-left transition-all duration-700 ease-out group-hover:brightness-110 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ width: PREVIEW_W, height: PREVIEW_H, transform: `scale(${scale})` }}
      >
        <iframe
          src={url}
          title={`Vista previa de ${url}`}
          loading="lazy"
          tabIndex={-1}
          onLoad={() => setLoaded(true)}
          className="pointer-events-none h-full w-full border-0"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

// Reseñas ficticias de ejemplo.
const REVIEWS = [
  {
    name: "Camila R.",
    role: "Dueña de Frutilla",
    text: "Nos entregaron la página en pocos días y quedó exactamente como la imaginábamos. Las consultas aumentaron desde la primera semana.",
  },
  {
    name: "Martín S.",
    role: "Gastronomía",
    text: "Muy buena comunicación y cero vueltas. El sitio carga rapidísimo y mis clientes reservan desde el celular.",
  },
  {
    name: "Lucía P.",
    role: "Emprendedora",
    text: "Me explicaron todo en simple y me ayudaron a elegir lo que realmente necesitaba. Súper recomendables.",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="container mx-auto px-4 py-20 sm:py-28">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-emerald-400">PROYECTOS REALIZADOS</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Sitios que ya están funcionando</h2>
        <p className="mt-4 text-gray-400">Algunas de las landings que creamos. Tocá cualquiera para verla en vivo.</p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-emerald-400/40"
          >
            <Preview url={p.url} accent={p.accent} />
            <div className="p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-bold">{p.name}</h3>
                <IconArrowUpRight size={20} className="text-gray-500 transition group-hover:text-emerald-400" />
              </div>
              <span className="mt-1 inline-block rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs text-emerald-300">
                {p.tag}
              </span>
              <p className="mt-3 text-sm text-gray-400">{p.text}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-3 flex gap-1" aria-label="5 de 5 estrellas">
              {[0, 1, 2, 3, 4].map((n) => (
                <IconStarFilled key={n} size={16} className="text-emerald-400" />
              ))}
            </div>
            <blockquote className="text-gray-300">“{r.text}”</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500/20 text-sm font-bold text-emerald-300">
                {r.name[0]}
              </span>
              <span>
                <span className="block text-sm font-semibold">{r.name}</span>
                <span className="block text-xs text-gray-400">{r.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

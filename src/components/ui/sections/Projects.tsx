"use client";

import { motion } from "framer-motion";
import { IconArrowUpRight, IconStarFilled } from "@tabler/icons-react";

// TODO: reemplazar nombre/rubro/url de las landings 2-5 por los reales.
const PROJECTS = [
  {
    name: "Frutilla",
    tag: "Landing page",
    text: "Sitio de marca con identidad propia, pensado para mostrar el producto y convertir visitas en consultas.",
    url: "https://frutilla-inky.vercel.app/",
    accent: "#f43f5e",
  },
  {
    name: "Landing Gastronomía",
    tag: "Restaurante",
    text: "Menú, reservas y ubicación en una sola página, rápida y cómoda desde el celular.",
    url: "https://landings-jade.vercel.app/",
    accent: "#f59e0b",
  },
  {
    name: "Landing Servicios",
    tag: "Profesionales",
    text: "Presentación clara de servicios, prueba social y contacto directo por WhatsApp.",
    url: "https://landings-jade.vercel.app/",
    accent: "#38bdf8",
  },
  {
    name: "Landing Salud y Bienestar",
    tag: "Turnos online",
    text: "Diseño cálido y confiable con llamado a la acción para reservar turnos.",
    url: "https://landings-jade.vercel.app/",
    accent: "#a78bfa",
  },
  {
    name: "Landing Emprendimiento",
    tag: "OnePage",
    text: "Todo el recorrido de un emprendimiento en un scroll fluido: propuesta, galería y contacto.",
    url: "https://landings-jade.vercel.app/",
    accent: "#34d399",
  },
];

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
            <div className="relative h-44 overflow-hidden border-b border-white/10 bg-[#161616]">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                <span className="ml-2 flex-1 truncate rounded bg-white/5 px-2 py-0.5 text-[11px] text-gray-500">
                  {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </span>
              </div>
              <div className="space-y-2 p-4">
                <div className="h-2 w-1/4 rounded" style={{ background: p.accent }} />
                <div className="h-4 w-4/5 rounded bg-white/20" />
                <div className="h-4 w-3/5 rounded bg-white/10" />
                <div className="mt-3 h-5 w-20 rounded-full" style={{ background: p.accent }} />
              </div>
              <div
                aria-hidden
                className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full opacity-30 blur-2xl"
                style={{ background: p.accent }}
              />
            </div>
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

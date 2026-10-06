"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconCheck, IconDeviceDesktop, IconDeviceMobile } from "@tabler/icons-react";

const TYPES = [
  {
    id: "landing",
    label: "Landing page",
    title: "Una página, un objetivo",
    text: "Pensada para convertir: mensaje claro, prueba social y un llamado a la acción bien visible.",
    points: ["Mensaje directo", "Formulario o contacto", "Carga ultra rápida"],
    blocks: ["hero", "cards", "cta"],
  },
  {
    id: "institucional",
    label: "Sitio institucional",
    title: "La cara completa de tu empresa",
    text: "Varias secciones para contar quién sos, qué hacés y cómo trabajás, con navegación simple.",
    points: ["Varias secciones", "Equipo y servicios", "Fácil de actualizar"],
    blocks: ["hero", "split", "cards"],
  },
  {
    id: "onepage",
    label: "OnePage",
    title: "Todo en un solo recorrido",
    text: "Una página que se desliza de arriba hacia abajo, con todo lo importante en un scroll fluido.",
    points: ["Scroll fluido", "Menú por secciones", "Ideal para emprendimientos"],
    blocks: ["hero", "split", "cards", "cta"],
  },
];

function Block({ kind }: { kind: string }) {
  if (kind === "hero")
    return (
      <div className="space-y-2 rounded-lg bg-white/[0.04] p-3">
        <div className="h-2 w-1/4 rounded bg-emerald-400/80" />
        <div className="h-4 w-4/5 rounded bg-white/20" />
        <div className="h-4 w-3/5 rounded bg-white/12" />
        <div className="mt-2 h-5 w-16 rounded-full bg-emerald-500" />
      </div>
    );
  if (kind === "cards")
    return (
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((n) => (
          <div key={n} className="h-12 rounded-lg bg-gradient-to-br from-emerald-500/30 to-emerald-500/5" />
        ))}
      </div>
    );
  if (kind === "split")
    return (
      <div className="grid grid-cols-2 gap-2">
        <div className="h-16 rounded-lg bg-white/[0.06]" />
        <div className="space-y-2 py-1">
          <div className="h-2 w-full rounded bg-white/20" />
          <div className="h-2 w-4/5 rounded bg-white/12" />
          <div className="h-2 w-3/5 rounded bg-white/12" />
        </div>
      </div>
    );
  return <div className="h-9 rounded-lg bg-emerald-500/80" />;
}

export default function SiteTypes() {
  const [active, setActive] = useState(0);
  const [mobile, setMobile] = useState(false);
  const t = TYPES[active];

  return (
    <section id="tipos-de-sitio" className="container mx-auto px-4 py-20 sm:py-28">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-emerald-400">QUÉ PODEMOS CONSTRUIR</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Elegí el formato de tu sitio</h2>
        <p className="mt-4 text-gray-400">Explorá los tipos de sitio que hacemos y cómo se ven en escritorio y celular.</p>
      </div>

      <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-2">
        <div>
          <div role="tablist" className="mb-6 flex flex-wrap gap-2">
            {TYPES.map((x, i) => (
              <button
                key={x.id}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  i === active
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                    : "border border-white/15 text-gray-300 hover:bg-white/10"
                }`}
              >
                {x.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-2xl font-bold sm:text-3xl">{t.title}</h3>
              <p className="mt-3 text-gray-400">{t.text}</p>
              <ul className="mt-6 space-y-3">
                {t.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-gray-200">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500/20">
                      <IconCheck size={14} className="text-emerald-400" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative">
          <div className="absolute inset-6 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="relative mb-3 flex justify-end gap-1">
            {[
              { m: false, Icon: IconDeviceDesktop, l: "Escritorio" },
              { m: true, Icon: IconDeviceMobile, l: "Celular" },
            ].map(({ m, Icon, l }) => (
              <button
                key={l}
                onClick={() => setMobile(m)}
                aria-label={l}
                aria-pressed={mobile === m}
                className={`grid h-9 w-9 place-items-center rounded-full transition ${
                  mobile === m ? "bg-white/15 text-white" : "text-gray-500 hover:text-white"
                }`}
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
          <motion.div
            layout
            transition={{ type: "spring", damping: 24, stiffness: 220 }}
            className={`relative mx-auto overflow-hidden rounded-2xl border border-white/10 bg-[#161616] shadow-2xl ${
              mobile ? "w-[15rem] rounded-[2rem] border-4 border-white/15" : "w-full"
            }`}
          >
            <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5">
              <span className="h-2 w-2 rounded-full bg-red-400/70" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
              <span className="ml-2 flex-1 truncate rounded bg-white/5 px-2 py-0.5 text-[11px] text-gray-500">tumarca.com</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="min-h-[18rem] space-y-3 p-4"
              >
                {t.blocks.map((b, i) => (
                  <Block key={i} kind={b} />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

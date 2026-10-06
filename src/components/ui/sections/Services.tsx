"use client";

import { motion } from "framer-motion";
import { Code, Gem, Shield } from "lucide-react";

export default function Services() {
  return (
    <section id="nuestros-servicios" className="container mx-auto px-4 py-20 sm:py-28">
      <Heading
        title="Nuestros Servicios"
        sub="Ofrecemos soluciones tecnológicas completas para tu empresa"
      />

      <div className="grid gap-4 md:grid-cols-6 md:grid-rows-2">
        {/* Bento grande con mockup de navegador */}
        <BentoCard className="md:col-span-4 md:row-span-2 min-h-[22rem]">
          <Icon><Code /></Icon>
          <h3 className="mt-4 text-2xl font-bold text-white">Páginas Web Personalizadas</h3>
          <p className="mt-2 max-w-md text-gray-400">
            Diseñamos páginas web modernas, optimizadas y adaptadas a tus necesidades.
          </p>
          <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#161616] shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-xs text-gray-500">
                tumarca.com
              </span>
            </div>
            <div className="space-y-3 p-5">
              <div className="h-3 w-1/3 rounded bg-emerald-400/70" />
              <div className="h-6 w-4/5 rounded bg-white/15" />
              <div className="h-6 w-3/5 rounded bg-white/10" />
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[0, 1, 2].map((n) => (
                  <motion.div
                    key={n}
                    initial={{ opacity: 0.3 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 * n, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="h-16 rounded-lg bg-gradient-to-br from-emerald-500/30 to-emerald-500/5"
                  />
                ))}
              </div>
            </div>
          </div>
        </BentoCard>

        <BentoCard className="md:col-span-2">
          <Icon><Gem /></Icon>
          <h3 className="mt-4 text-xl font-bold text-white">Diseño Web Atractivo</h3>
          <p className="mt-2 text-gray-400">
            Desarrollamos interfaces atractivas y funcionales para tu sitio web.
          </p>
        </BentoCard>

        <BentoCard className="md:col-span-2">
          <Icon><Shield /></Icon>
          <h3 className="mt-4 text-xl font-bold text-white">Protección Digital</h3>
          <p className="mt-2 text-gray-400">
            Aseguramos que tu sitio web sea seguro y confiable
          </p>
        </BentoCard>
      </div>
    </section>
  );
}

export function Heading({ title, sub }: { title: string; sub: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center sm:mb-16"
    >
      <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      <p className="text-base text-gray-400 sm:text-lg">{sub}</p>
    </motion.div>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-400 [&_svg]:h-6 [&_svg]:w-6">
      {children}
    </div>
  );
}

function BentoCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-emerald-500/40 sm:p-8 ${className}`}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl transition group-hover:bg-emerald-500/20" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

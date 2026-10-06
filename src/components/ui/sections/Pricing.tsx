"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Heading } from "@/components/ui/sections/Services";
import { CONTACT_EMAIL } from "@/lib/knowledge";

interface Plan {
  plan: string;
  features: string[];
  popular?: boolean;
}

const PLANS: Plan[] = [
  {
    plan: "Básico",
    features: ["Desarrollo Web Básico", "Soporte 8/5", "1 Revisión Mensual", "Hosting no incluido"],
  },
  {
    plan: "Profesional",
    features: ["Desarrollo Web Avanzado", "Soporte 24/7", "4 Revisiones Mensuales", "SEO Optimización"],
    popular: true,
  },
  {
    plan: "Empresarial",
    features: ["Desarrollo Personalizado", "Soporte Premium 24/7", "Revisiones Ilimitadas", "Consultoría Estratégica"],
  },
];

export default function Pricing() {
  return (
    <section id="planes" className="container mx-auto px-4 py-20 sm:py-28">
      <Heading title="Planes" sub="Encontra el plan perfecto para tu negocio" />
      <div className="mx-auto grid max-w-5xl items-stretch gap-5 md:grid-cols-3">
        {PLANS.map((p, i) => (
          <motion.a
            key={p.plan}
            href={`mailto:${CONTACT_EMAIL}?subject=Consulta%20sobre%20el%20plan%20${p.plan}&body=Hola,%20quiero%20más%20información%20sobre%20el%20plan%20${p.plan}.`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`group relative flex flex-col rounded-3xl p-px transition duration-300 hover:-translate-y-1 ${
              p.popular
                ? "bg-gradient-to-b from-emerald-400 to-emerald-700 md:scale-[1.04]"
                : "bg-white/10 hover:bg-emerald-500/40"
            }`}
          >
            <div className="flex h-full flex-col rounded-[calc(1.5rem-1px)] bg-[#202221] p-7">
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-emerald-500/40">
                  Popular
                </span>
              )}
              <h3 className="mb-6 mt-1 text-center text-xl font-bold text-white">{p.plan}</h3>
              <ul className="mb-8 flex-1 space-y-4">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-200">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/20">
                      <Check className="h-3 w-3 text-emerald-400" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <span
                className={`block w-full rounded-full py-3 text-center font-medium transition ${
                  p.popular
                    ? "bg-emerald-500 text-white group-hover:bg-emerald-400"
                    : "border border-white/15 text-white group-hover:bg-white/10"
                }`}
              >
                Consultar
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

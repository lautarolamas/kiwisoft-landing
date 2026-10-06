"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { IconMail, IconMapPin, IconSend2 } from "@tabler/icons-react";
import KiwiMascot from "./KiwiMascot";
import { CONTACT_EMAIL } from "@/lib/knowledge";

const KINDS = ["Landing page", "Sitio institucional", "OnePage", "Otro"];

export default function Contact() {
  const [name, setName] = useState("");
  const [kind, setKind] = useState(KINDS[0]);
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  // Abre el mail del usuario con el mensaje armado (no se guarda nada en servidor).
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consulta: ${kind}`);
    const body = encodeURIComponent(`Hola, soy ${name}.\n\nMe interesa: ${kind}\n\n${msg}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const input =
    "w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-base text-white placeholder:text-gray-500 outline-none transition focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/30";

  return (
    <section id="contacto" className="container mx-auto px-4 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-emerald-500/25 bg-gradient-to-br from-emerald-500/15 via-white/[0.03] to-transparent p-6 sm:p-12"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="text-center lg:text-left">
            <div className="mx-auto w-28 lg:mx-0"><KiwiMascot size="100%" /></div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Hablemos de tu proyecto</h2>
            <p className="mt-4 text-gray-400">
              Contanos qué sitio necesitás y vemos juntos cuál es el mejor punto de partida.
            </p>
            <div className="mt-6 space-y-3 text-gray-300">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center justify-center gap-3 transition hover:text-emerald-400 lg:justify-start">
                <IconMail size={20} className="text-emerald-400" /> {CONTACT_EMAIL}
              </a>
              <p className="flex items-center justify-center gap-3 lg:justify-start">
                <IconMapPin size={20} className="text-emerald-400" /> Buenos Aires, AR
              </p>
            </div>
          </div>

          <form onSubmit={submit} className="space-y-4">
            <input className={input} required value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" aria-label="Tu nombre" maxLength={80} />
            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Tipo de sitio">
              {KINDS.map((k) => (
                <button
                  type="button"
                  key={k}
                  role="radio"
                  aria-checked={kind === k}
                  onClick={() => setKind(k)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    kind === k ? "bg-emerald-500 text-white" : "border border-white/15 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
            <textarea className={`${input} min-h-32 resize-none`} required value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Contanos sobre tu idea…" aria-label="Tu mensaje" maxLength={800} />
            <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 font-medium text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400 sm:w-auto">
              Enviar consulta <IconSend2 size={18} className="transition group-hover:translate-x-1" />
            </button>
            {sent && <p className="text-sm text-emerald-300">Se abrió tu app de correo con el mensaje listo para enviar. ¡Gracias!</p>}
          </form>
        </div>
      </motion.div>
    </section>
  );
}

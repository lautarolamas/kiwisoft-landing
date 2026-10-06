"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Heading } from "@/components/ui/sections/Services";

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar un proyecto?",
    answer:
      "El tiempo de desarrollo varía según la complejidad del proyecto. Un proyecto básico puede tomar de 1 a 2 semanas.",
  },
  {
    question: "¿Ofrecen mantenimiento post-desarrollo?",
    answer:
      "Sí, ofrecemos planes de mantenimiento y soporte continuo para garantizar que tu aplicación funcione correctamente y se mantenga actualizada.",
  },
  {
    question: "¿Qué tecnologías utilizan?",
    answer:
      "Trabajamos con las últimas tecnologías como React, Next.js, Node.js, y más, seleccionando la stack adecuada para cada proyecto.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="container mx-auto px-4 py-20 sm:py-28">
      <Heading title="Preguntas Frecuentes" sub="Resolvemos tus dudas" />
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 transition data-[state=open]:border-emerald-500/40 data-[state=open]:bg-emerald-500/[0.06]"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

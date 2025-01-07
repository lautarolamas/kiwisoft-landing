"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
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

  return (
    <section id="faq" className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
        <p className="text-gray-400 text-lg">Resolvemos tus dudas</p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-gray-700"
            >
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

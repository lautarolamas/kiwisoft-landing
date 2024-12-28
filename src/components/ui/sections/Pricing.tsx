"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export default function Pricing() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Planes y Precios</h2>
        <p className="text-gray-400 text-lg">
          Encuentra el plan perfecto para tu negocio
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <PricingCard
          plan="Básico"
          price="$999"
          features={[
            "Desarrollo Web Básico",
            "Soporte 8/5",
            "1 Revisión Mensual",
          ]}
        />
        <PricingCard
          plan="Profesional"
          price="$2499"
          features={[
            "Desarrollo Web Avanzado",
            "Soporte 24/7",
            "4 Revisiones Mensuales",
            "SEO Optimización",
          ]}
          popular
        />
        <PricingCard
          plan="Empresarial"
          price="$4999"
          features={[
            "Desarrollo Personalizado",
            "Soporte Premium 24/7",
            "Revisiones Ilimitadas",
            "Consultoría Estratégica",
          ]}
        />
      </div>
    </section>
  );
}

function PricingCard({ plan, price, features, popular }: PricingCardProps) {
  return (
    <Card className="bg-gray-800/50 border-gray-700 relative overflow-hidden group">
      {popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm z-10">
          Popular
        </div>
      )}
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2 text-white">{plan}</h3>
          <div className="text-4xl font-bold mb-2 text-white">
            {price}
            <span className="text-lg text-gray-400">/mes</span>
          </div>
        </div>
        <ul className="space-y-4 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-white">
              <Check className="text-emerald-400" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
          Comenzar
        </Button>
      </CardContent>
    </Card>
  );
}

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Gem, Shield } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Services() {
  return (
    <section id="nuestros-servicios" className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
        <p className="text-gray-400 text-lg">
          Ofrecemos soluciones tecnológicas completas para tu empresa
        </p>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon={<Code />}
          title="Páginas Web Personalizadas"
          description="Diseñamos páginas web modernas, optimizadas y adaptadas a tus necesidades."
        />
        {/*<ServiceCard
          icon={<Blocks />}
          title="Aplicaciones Móviles"
          description="Apps nativas y multiplataforma."
  />*/}
        <ServiceCard
          icon={<Gem />}
          title="Diseño Web Atractivo"
          description="Desarrollamos interfaces atractivas y funcionales para tu sitio web."
        />
        <ServiceCard
          icon={<Shield />}
          title="Protección Digital"
          description="Aseguramos que tu sitio web sea seguro y confiable"
        />
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardContent className="p-6 space-y-4">
        <div className="w-12 h-12 text-emerald-400">{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}

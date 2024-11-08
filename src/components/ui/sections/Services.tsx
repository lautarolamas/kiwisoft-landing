"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Blocks, Gem, Shield, Workflow, Zap } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Services() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
        <p className="text-gray-400 text-lg">
          Ofrecemos soluciones tecnológicas completas para tu empresa
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon={<Code />}
          title="Desarrollo Web"
          description="Creamos sitios web modernos y optimizados."
        />
        <ServiceCard
          icon={<Blocks />}
          title="Aplicaciones Móviles"
          description="Apps nativas y multiplataforma."
        />
        <ServiceCard
          icon={<Gem />}
          title="UI/UX Design"
          description="Interfaces intuitivas y atractivas."
        />
        <ServiceCard
          icon={<Shield />}
          title="Ciberseguridad"
          description="Protegemos tu negocio digital."
        />
        <ServiceCard
          icon={<Workflow />}
          title="Consultoría IT"
          description="Transformación digital estratégica."
        />
        <ServiceCard
          icon={<Zap />}
          title="Soporte Técnico"
          description="Soporte continuo y mantenimiento."
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

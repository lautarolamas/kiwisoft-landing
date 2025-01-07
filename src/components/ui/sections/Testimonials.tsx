import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  position: string;
  feedback: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      position: "CEO, TechStart",
      feedback:
        "KiwiSoft transformó completamente nuestra presencia digital. Su equipo es altamente profesional y entregaron más allá de nuestras expectativas.",
      rating: 4.8,
      avatar: "/images/avatars/maria-gonzalez.jpg",
    },
    {
      name: "Carlos Ruiz",
      position: "Director, InnovaTech",
      feedback:
        "La atención al detalle y el compromiso con la calidad de KiwiSoft es excepcional. Han sido fundamentales en nuestro crecimiento digital.",
      rating: 4,
      avatar: "/images/avatars/carlos-ruiz.jpg",
    },
    {
      name: "Ana Martínez",
      position: "CTO, DataFlow",
      feedback:
        "Trabajar con KiwiSoft ha sido una experiencia excepcional. Su equipo no solo es técnicamente competente, sino también muy colaborativo.",
      rating: 4.2,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Valoraciones</h2>
        <p className="text-gray-400 text-lg">Lo que dicen nuestros clientes</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({
  name,
  position,
  feedback,
  rating,
}: TestimonialCardProps) {
  const avatarUrl = `https://avatars.dicebear.com/api/initials/${encodeURIComponent(
    name
  )}.svg`;

  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < Math.floor(rating)
                  ? "fill-emerald-400 text-emerald-400"
                  : "fill-none text-emerald-400"
              }`}
              strokeWidth={i < Math.floor(rating) ? 0 : 1.5}
            />
          ))}
        </div>
        <p className="text-gray-400 mb-4">{feedback}</p>
        <div className="flex items-center gap-4">
          <img
            src={avatarUrl}
            alt={`Avatar de ${name}`}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="font-bold text-white">{name}</div>
            <div className="text-gray-400">{position}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

"use client";

interface FooterSectionProps {
  title: string;
  content?: string;
  links?: string[];
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <FooterSection title="KiwiSoft" content="Transformando el futuro digital con soluciones tecnológicas innovadoras." />
          <FooterSection title="Servicios" links={["Desarrollo Web", "Aplicaciones Móviles", "UI/UX Design", "Consultoría IT"]} />
          <FooterSection title="Empresa" links={["Sobre Nosotros", "Proyectos", "Testimonios", "Contacto"]} />
          <FooterSection title="Contacto" links={["info@kiwisoft.com", "+1 (555) 123-4567", "San Francisco, CA"]} />
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 KiwiSoft. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterSection({ title, content, links }: FooterSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">{title}</h3>
      {content && <p className="text-gray-400">{content}</p>}
      {links && (
        <ul className="space-y-2 text-gray-400">
          {links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

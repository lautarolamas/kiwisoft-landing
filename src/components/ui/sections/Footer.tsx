"use client";

interface FooterSectionProps {
  title: string;
  content?: string;
  links?: string[];
}

export default function Footer() {
  return (
    <footer id="contactos" className="border-t border-gray-500">
      <div className="container mx-auto px-4 py-4">
        <div className="grid md:grid-cols-1 gap-10">
          {/* <FooterSection
            title="KiwiSoft"
            content="Transformando el futuro digital con soluciones tecnológicas innovadoras."
          /> */}
          {/* <FooterSection
            title="Servicios"
            links={["Desarrollo Web", "Aplicaciones Móviles", "UI/UX Design"]}
          /> */}
          {/* <FooterSection
            title="Empresa"
            links={["Sobre Nosotros", "Proyectos", "Testimonios", "Contacto"]}
          /> */}
          <FooterSection
            title="Contacto"
            links={["info.kiwisoft@gmail.com", "Buenos Aires, AR"]}
          />
        </div>
        <p className="mt-10">©2025 KiwiSoft</p>
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

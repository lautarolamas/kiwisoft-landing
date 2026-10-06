"use client";

const ITEMS = [
  "Next.js", "React", "Node.js", "SEO", "Responsive", "Rendimiento",
  "Accesibilidad", "Landing Pages", "OnePage", "Sitios institucionales",
  "Diseño a medida", "Seguridad",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-4 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
    >
      <div className="flex w-max animate-[kiwi-marquee_38s_linear_infinite] gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-medium text-gray-400">
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
          </span>
        ))}
      </div>
    </div>
  );
}

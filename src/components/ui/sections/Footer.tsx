"use client";

import KiwiMascot from "@/components/ui/sections/KiwiMascot";
import { CONTACT_EMAIL } from "@/lib/knowledge";

export default function Footer() {
  return (
    <footer id="contactos" className="relative pb-24 border-t border-white/10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-10 pb-10 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2">
          <KiwiMascot size={48} alive={false} />
          <div>
            <p className="text-lg font-bold">Kiwisoft</p>
            <p className="text-sm text-gray-400">Soluciones digitales a medida</p>
          </div>
        </div>
        <div className="space-y-1 text-sm text-gray-400">
          <a href={`mailto:${CONTACT_EMAIL}`} className="block transition hover:text-emerald-400">
            {CONTACT_EMAIL}
          </a>
          <p>Buenos Aires, AR</p>
          <p>©{new Date().getFullYear()} KiwiSoft</p>
        </div>
      </div>
      <p
        aria-hidden
        className="select-none overflow-hidden whitespace-nowrap text-center text-[22vw] font-black leading-[0.8] tracking-tighter text-white/[0.04] sm:text-[16vw]"
      >
        kiwisoft
      </p>
    </footer>
  );
}

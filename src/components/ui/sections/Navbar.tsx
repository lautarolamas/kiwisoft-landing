"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <Link
            className="flex items-center space-x-2 text-2xl font-bold"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-emerald-500"
            >
              <path d="M12.97 2.59a1.5 1.5 0 00-1.94 0l-7.5 6.363A1.5 1.5 0 003 10.097V19.5A1.5 1.5 0 004.5 21h4.75a.75.75 0 00.75-.75V14h4v6.25c0 .414.336.75.75.75h4.75a1.5 1.5 0 001.5-1.5v-9.403a1.5 1.5 0 00-.53-1.144l-7.5-6.363z" />
            </svg>
            <span>kiwisoft</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-sm hover:text-emerald-400" href="#">
              Inicio
            </Link>
            <Link className="text-sm hover:text-emerald-400" href="#">
              Servicios
            </Link>
            <Link className="text-sm hover:text-emerald-400" href="#">
              Proyectos
            </Link>
            <Link className="text-sm hover:text-emerald-400" href="#">
              Nosotros
            </Link>
            <Link className="text-sm hover:text-emerald-400" href="#">
              Contacto
            </Link>
          </div>
        </div>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 ">
          Contáctanos
        </Button>
      </div>
    </nav>
  );
}

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IconBadge4k, IconMenu2, IconX } from "@tabler/icons-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const iconClass = "w-6 h-6 text-emerald-500";

  return (
    <nav className="relative container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <Link
            className="flex items-center space-x-2 text-2xl font-bold"
            href="#"
          >
            <span>Kiwisoft</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-sm hover:text-emerald-400" href="#">
              Inicio
            </Link>
            <Link
              className="text-sm hover:text-emerald-400"
              href="#nuestros-servicios"
            >
              Servicios
            </Link>
            <Link className="text-sm hover:text-emerald-400" href="#planes">
              Planes
            </Link>
            <Link className="text-sm hover:text-emerald-400" href="#faq">
              Preguntas frecuentes
            </Link>
          </div>
        </div>
        <a
          href="mailto:info@kiwisoft.com?subject=Consulta%20sobre%20KiwiSoft&body=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios."
          className="hidden md:inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 ml-4 rounded"
        >
          Contáctanos
        </a>
        <button className="md:hidden text-white text-3xl" onClick={toggleMenu}>
          <IconMenu2 stroke={2} />
        </button>
      </div>

      {/* Menu lateral para mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "90%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center space-y-6"
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={toggleMenu}
            >
              <IconX stroke={2} />
            </button>
            <Link
              className="flex items-center space-x-2 font-bold text-whitetext-xl"
              href="#"
              onClick={toggleMenu}
            >
              <span>Inicio</span>
            </Link>
            <Link
              className="flex items-center space-x-2 font-bold text-white text-xl"
              href="#nuestros-servicios"
              onClick={toggleMenu}
            >
              <span>Servicios</span>
            </Link>
            <Link
              className="flex items-center space-x-2 font-bold text-whitetext-xl"
              href="#planes"
              onClick={toggleMenu}
            >
              <span>Planes</span>
            </Link>
            <Link
              className="flex items-center space-x-2 font-bold text-white text-xl"
              href="#faq"
              onClick={toggleMenu}
            >
              <span>Preguntas frecuentes</span>
            </Link>

            <a
              href="mailto:info@kiwisoft.com?subject=Consulta%20sobre%20KiwiSoft&body=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios."
              className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded"
              onClick={toggleMenu}
            >
              <span>Contáctanos</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

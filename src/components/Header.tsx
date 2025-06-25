"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Search, Menu, X, Phone } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemsCount, toggleCart } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-white shadow-md">
      {/* Top bar with phones */}
      <div className="bg-slate-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="font-bold">LLÁMENOS</span>
            </div>
            <a href="tel:3333645451" className="hover:text-orange-400 transition-colors">
              33 33 64 54 51
            </a>
            <span>•</span>
            <a href="tel:3338579944" className="hover:text-orange-400 transition-colors">
              33 38 57 99 44
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://ext.same-assets.com/2048919527/1983779621.webp"
              alt="Empaques Transformados"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="BÚSQUEDA RÁPIDA DE PRODUCTOS...."
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-orange-500 text-white rounded-r-md hover:bg-orange-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cart and Menu buttons */}
          <div className="flex items-center gap-4">
            {/* Cart button */}
            <button
              onClick={toggleCart}
              className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors relative"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="hidden sm:inline">
                ${0}.00
              </span>
              <span className="hidden sm:inline text-sm text-gray-500">
                {getCartItemsCount()} Cart
              </span>
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex mt-4 border-t pt-4">
          <ul className="flex items-center gap-8 w-full">
            <li>
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
              >
                INICIO
              </Link>
            </li>
            <li>
              <Link
                href="/conocenos"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
              >
                CONÓCENOS
              </Link>
            </li>
            <li className="relative group">
              <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors flex items-center gap-1">
                PRODUCTOS
              </button>
              {/* Dropdown menu */}
              <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-lg border rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="grid grid-cols-2 gap-4 p-4">
                  <div>
                    <h3 className="font-bold text-orange-500 mb-2">ALIMENTICIO</h3>
                    <ul className="space-y-1">
                      <li><Link href="/categoria/alimenticio/bolsa" className="text-sm text-gray-600 hover:text-orange-500">Bolsa</Link></li>
                      <li><Link href="/categoria/alimenticio/gofrados" className="text-sm text-gray-600 hover:text-orange-500">Gofrados</Link></li>
                      <li><Link href="/categoria/alimenticio/stand-up" className="text-sm text-gray-600 hover:text-orange-500">Stand Up</Link></li>
                      <li><Link href="/categoria/alimenticio/empacadoras" className="text-sm text-gray-600 hover:text-orange-500">Empacadoras</Link></li>
                      <li><Link href="/categoria/alimenticio/refacciones" className="text-sm text-gray-600 hover:text-orange-500">Refacciones</Link></li>
                      <li><Link href="/categoria/alimenticio/vitafilm" className="text-sm text-gray-600 hover:text-orange-500">Vitafilm</Link></li>
                      <li><Link href="/categoria/alimenticio/varios" className="text-sm text-gray-600 hover:text-orange-500">Varios</Link></li>
                      <li><Link href="/categoria/alimenticio/especialidades" className="text-sm text-gray-600 hover:text-orange-500">Especialidades</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-orange-500 mb-2">INDUSTRIAL</h3>
                    <ul className="space-y-1">
                      <li><Link href="/categoria/industrial/cintas" className="text-sm text-gray-600 hover:text-orange-500">Cintas</Link></li>
                      <li><Link href="/categoria/industrial/proteccion" className="text-sm text-gray-600 hover:text-orange-500">Protección</Link></li>
                      <li><Link href="/categoria/industrial/carton" className="text-sm text-gray-600 hover:text-orange-500">Cartón</Link></li>
                      <li><Link href="/categoria/industrial/polietileno" className="text-sm text-gray-600 hover:text-orange-500">Polietileno</Link></li>
                      <li><Link href="/categoria/industrial/maquinaria" className="text-sm text-gray-600 hover:text-orange-500">Maquinaria</Link></li>
                      <li><Link href="/categoria/industrial/especialidades" className="text-sm text-gray-600 hover:text-orange-500">Especialidades</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/contacto"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
              >
                CONTACTO
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 border-t pt-4">
            <div className="mb-4">
              <input
                type="text"
                placeholder="BÚSQUEDA RÁPIDA DE PRODUCTOS...."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-orange-500 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  INICIO
                </Link>
              </li>
              <li>
                <Link
                  href="/conocenos"
                  className="block text-gray-700 hover:text-orange-500 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONÓCENOS
                </Link>
              </li>
              <li>
                <div className="text-gray-700 font-medium">PRODUCTOS</div>
                <div className="ml-4 mt-2 space-y-2">
                  <div>
                    <div className="font-medium text-orange-500 text-sm">ALIMENTICIO</div>
                    <div className="ml-2 mt-1 space-y-1">
                      <Link href="/categoria/alimenticio/bolsa" className="block text-sm text-gray-600" onClick={() => setIsMenuOpen(false)}>Bolsa</Link>
                      <Link href="/categoria/alimenticio/gofrados" className="block text-sm text-gray-600" onClick={() => setIsMenuOpen(false)}>Gofrados</Link>
                      <Link href="/categoria/alimenticio/stand-up" className="block text-sm text-gray-600" onClick={() => setIsMenuOpen(false)}>Stand Up</Link>
                      <Link href="/categoria/alimenticio/empacadoras" className="block text-sm text-gray-600" onClick={() => setIsMenuOpen(false)}>Empacadoras</Link>
                      <Link href="/categoria/alimenticio/refacciones" className="block text-sm text-gray-600" onClick={() => setIsMenuOpen(false)}>Refacciones</Link>
                      <Link href="/categoria/alimenticio/vitafilm" className="block text-sm text-gray-600" onClick={() => setIsMenuOpen(false)}>Vitafilm</Link>
                      <Link href="/categoria/alimenticio/varios" className="block text-sm text-gray-600" onClick={() => setIsMenuOpen(false)}>Varios</Link>
                      <Link href="/categoria/alimenticio/especialidades" className="block text-sm text-gray-600" onClick={() => setIsMenuOpen(false)}>Especialidades</Link>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-orange-500 text-sm">INDUSTRIAL</div>
                    <div className="ml-2 mt-1 space-y-1">
                      <Link href="/categoria/industrial/cintas" className="block text-sm text-gray-600" onClick={() => setIsMenuOpen(false)}>Cintas</Link>
                      <Link href="/categoria/industrial/proteccion" className="block text-sm text-gray-600" onClick={() => setIsMenuOpen(false)}>Protección</Link>
                      <Link href="/categoria/industrial/carton" className="block text-sm text-gray-600" onClick={() => setIsMenuOpen(false)}>Cartón</Link>
                      <Link href="/categoria/industrial/polietileno" className="block text-sm text-gray-600" onClick={() => setIsMenuOpen(false)}>Polietileno</Link>
                      <Link href="/categoria/industrial/maquinaria" className="block text-sm text-gray-600" onClick={() => setIsMenuOpen(false)}>Maquinaria</Link>
                      <Link href="/categoria/industrial/especialidades" className="block text-sm text-gray-600" onClick={() => setIsMenuOpen(false)}>Especialidades</Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="block text-gray-700 hover:text-orange-500 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACTO
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

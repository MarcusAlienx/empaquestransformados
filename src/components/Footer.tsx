import Link from "next/link";
import { Facebook, Youtube, Instagram, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">NOS COMPLACE DECIR SÍ</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Sí cumplimos con las fechas</li>
              <li>Sí tenemos el material.</li>
              <li>Sí lo podemos ajustar a sus requerimientos.</li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">UBICACIONES</h3>

            {/* Sucursal principal */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Sucursal Principal
              </h4>
              <p className="text-gray-300 text-sm">
                Sta. Esther 107, Santa Margarita<br />
                1a Secc., 45140 Zapopan, Jal.
              </p>
            </div>

            {/* Nueva sucursal */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Sucursal Zona Real
              </h4>
              <p className="text-gray-300 text-sm">
                Av. Base Aerea 755, El Triángulo<br />
                45138 Zapopan, Jal.
              </p>
            </div>
          </div>

          {/* Contact and hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">CONTACTO</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Teléfonos
                </h4>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>
                    <a href="tel:3333645451" className="hover:text-orange-400 transition-colors">
                      33 33 64 54 51
                    </a>
                  </p>
                  <p>
                    <a href="tel:3338579944" className="hover:text-orange-400 transition-colors">
                      33 38 57 99 44
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Horario de Atención
                </h4>
                <div className="text-gray-300 text-sm space-y-1">
                  <p><strong>Lunes a Viernes:</strong> 8:00 am - 5:30 pm</p>
                  <p><strong>Sábados:</strong> 8:00 am - 1:30 pm</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-300 text-sm">
                  <a
                    href="mailto:proyectos@empaquestransformados.com"
                    className="hover:text-orange-400 transition-colors"
                  >
                    proyectos@empaquestransformados.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              Copyright © 2025 Empaques Transformados • Todos los derechos reservados
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/aviso-de-privacidad"
                className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
              >
                Aviso de privacidad
              </Link>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/people/Empaques-transformados/100063700713607/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=5v7zAzMUGts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/empaquetransformados/?hl=es-la"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { MapPin, Phone, Clock, Mail, MessageSquare } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              CONTACTO
            </h1>
            <p className="text-xl text-gray-600">
              Estamos aquí para ayudarte con todos tus requerimientos de empaque
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Sucursal Principal */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-orange-500 text-white p-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                Sucursal Principal
              </h2>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Dirección</h3>
                  <p className="text-gray-600">
                    Sta. Esther 107, Santa Margarita<br />
                    1a Secc., 45140 Zapopan, Jal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Teléfonos</h3>
                  <div className="space-y-1">
                    <p className="text-gray-600">
                      <a href="tel:3333645451" className="hover:text-orange-500 transition-colors">
                        33 33 64 54 51
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:3338579944" className="hover:text-orange-500 transition-colors">
                        33 38 57 99 44
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Horario de Atención</h3>
                  <div className="text-gray-600 space-y-1">
                    <p><strong>Lunes a Viernes:</strong> 8:00 am - 5:30 pm</p>
                    <p><strong>Sábados:</strong> 8:00 am - 1:30 pm</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:proyectos@empaquestransformados.com"
                      className="hover:text-orange-500 transition-colors"
                    >
                      proyectos@empaquestransformados.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed - Principal */}
            <div className="h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.8976543210123!2d-103.39876542345678!3d20.72345632109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae24c6b0d5e7%3A0x9876543210fedcba!2sSta.%20Esther%20107%2C%20Santa%20Margarita%201a%20Secc.%2C%2045140%20Zapopan%2C%20Jal.!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Sucursal Principal"
              />
            </div>
          </div>

          {/* Sucursal Zona Real */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-slate-700 text-white p-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                Sucursal Zona Real
              </h2>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Dirección</h3>
                  <p className="text-gray-600">
                    Av. Base Aerea 755, El Triángulo<br />
                    45138 Zapopan, Jal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-slate-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Teléfonos</h3>
                  <div className="space-y-1">
                    <p className="text-gray-600">
                      <a href="tel:3333645451" className="hover:text-slate-600 transition-colors">
                        33 33 64 54 51
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:3338579944" className="hover:text-slate-600 transition-colors">
                        33 38 57 99 44
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-slate-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Horario de Atención</h3>
                  <div className="text-gray-600 space-y-1">
                    <p><strong>Lunes a Viernes:</strong> 8:00 am - 5:30 pm</p>
                    <p><strong>Sábados:</strong> 8:00 am - 1:30 pm</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-slate-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:proyectos@empaquestransformados.com"
                      className="hover:text-slate-600 transition-colors"
                    >
                      proyectos@empaquestransformados.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed - Zona Real */}
            <div className="h-64">
              <iframe
                src="https://maps.app.goo.gl/sz9r6ykQ9E1qA8Ff9"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Sucursal Zona Real"
              />
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              <MessageSquare className="w-8 h-8 text-orange-500" />
              Envíanos un Mensaje
            </h2>
            <p className="text-gray-600">
              ¿Tienes alguna pregunta o necesitas más información? Contáctanos y te responderemos a la brevedad.
            </p>
          </div>

          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Apellido *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Tu apellido"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="33 1234 5678"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Asunto *
              </label>
              <select
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">Selecciona un asunto</option>
                <option value="cotizacion">Solicitud de Cotización</option>
                <option value="informacion">Información de Productos</option>
                <option value="servicio">Servicio Técnico</option>
                <option value="distribucion">Distribución</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje *
              </label>
              <textarea
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Cuéntanos en qué podemos ayudarte..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors font-semibold"
              >
                <Mail className="w-5 h-5" />
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-orange-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">
              NOS COMPLACE DECIR SÍ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-orange-700">
                <h4 className="font-semibold mb-2">✓ Cumplimos con las fechas</h4>
                <p className="text-sm">Respetamos los tiempos de entrega acordados</p>
              </div>
              <div className="text-orange-700">
                <h4 className="font-semibold mb-2">✓ Tenemos el material</h4>
                <p className="text-sm">Amplio inventario y disponibilidad inmediata</p>
              </div>
              <div className="text-orange-700">
                <h4 className="font-semibold mb-2">✓ Ajustamos a sus requerimientos</h4>
                <p className="text-sm">Soluciones personalizadas para cada cliente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Contacto - Empaques Transformados",
  description: "Contáctanos para solicitar cotizaciones, información de productos o servicio técnico. Tenemos dos sucursales en Zapopan, Jalisco para atenderte mejor.",
};

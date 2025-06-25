import Image from "next/image";
import Link from "next/link";
import { Award, Users, Target, Eye, Heart, CheckCircle, Factory, Truck, Clock } from "lucide-react";

export default function ConocenosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              CONÓCENOS
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Más de una década comprometidos con la excelencia en empaques y materiales de protección
            </p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Nuestra Historia
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <strong>Empaques Transformados</strong> nace de la necesidad de brindar soluciones integrales
                en el mundo del empaque y protección de productos. Desde nuestros inicios, nos hemos
                especializado en la fabricación y distribución de bolsas para alto vacío, materiales
                de protección y una amplia gama de productos para el sector alimenticio e industrial.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Con sede en Zapopan, Jalisco, hemos crecido hasta convertirnos en una empresa de
                referencia en el sector, atendiendo clientes en todo México y expandiendo nuestros
                servicios a nivel internacional.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nuestro compromiso con la calidad, la innovación y el servicio al cliente nos ha
                permitido establecer relaciones duraderas y de confianza con nuestros socios comerciales.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/2048919527/842200396.jpeg"
                alt="Empaques Transformados - Nuestra empresa"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Proveer soluciones innovadoras y de alta calidad en empaques y materiales de protección,
                satisfaciendo las necesidades específicas de nuestros clientes con productos que garanticen
                la preservación, frescura y seguridad de sus productos.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser la empresa líder en México en la fabricación y distribución de empaques especializados,
                reconocida por nuestra innovación, calidad y compromiso con la satisfacción del cliente,
                expandiendo nuestra presencia a nivel internacional.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Valores</h3>
              <ul className="text-gray-600 text-left space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Calidad en cada producto
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Compromiso con el cliente
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Innovación constante
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Responsabilidad social
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Integridad y transparencia
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nuestras Fortalezas
            </h2>
            <p className="text-xl text-gray-600">
              Lo que nos distingue en el mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Manufacturing */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Factory className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fabricación Propia
              </h3>
              <p className="text-gray-600 text-sm">
                Somos fabricantes directos de bolsas para alto vacío con tecnología de punta
              </p>
            </div>

            {/* Distribution */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Truck className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Distribución Nacional
              </h3>
              <p className="text-gray-600 text-sm">
                Red de distribución que abarca todo el territorio mexicano
              </p>
            </div>

            {/* Experience */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Award className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Experiencia Comprobada
              </h3>
              <p className="text-gray-600 text-sm">
                Más de una década de experiencia sirviendo a diversos sectores
              </p>
            </div>

            {/* Service */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Clock className="w-10 h-10 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Servicio Rápido
              </h3>
              <p className="text-gray-600 text-sm">
                Tiempos de entrega competitivos y atención personalizada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nuestras Especialidades
            </h2>
            <p className="text-xl text-gray-600">
              Dos grandes líneas de productos para cubrir todas sus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Alimenticio */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-orange-500 text-white p-6">
                <h3 className="text-2xl font-bold">LÍNEA ALIMENTICIA</h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <Image
                    src="https://ext.same-assets.com/2048919527/2396841788.jpeg"
                    alt="Productos Alimenticios"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-600 mb-4">
                  Especialistas en bolsas para alto vacío, gofrados, stand up, empacadoras
                  y accesorios para la industria alimentaria.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    Bolsas para alto vacío (múltiples colores y medidas)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    Rollos gofrados para empacadoras caseras
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    Empacadoras y refacciones
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    Vitafilm y productos especializados
                  </li>
                </ul>
              </div>
            </div>

            {/* Industrial */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-slate-700 text-white p-6">
                <h3 className="text-2xl font-bold">LÍNEA INDUSTRIAL</h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <Image
                    src="https://ext.same-assets.com/2048919527/472644325.webp"
                    alt="Productos Industriales"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-600 mb-4">
                  Soluciones completas para protección, empaque y transporte de
                  productos industriales y comerciales.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-slate-600" />
                    Cintas adhesivas (hot melt, acrílicas, masking)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-slate-600" />
                    Materiales de protección (burbuja, emplaye)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-slate-600" />
                    Productos de cartón y polietileno
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-slate-600" />
                    Maquinaria especializada
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-xl opacity-90">
              NOS COMPLACE DECIR SÍ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sí cumplimos con las fechas</h3>
              <p className="opacity-90">
                Respetamos los tiempos de entrega acordados porque entendemos la importancia
                de la puntualidad en sus operaciones.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sí tenemos el material</h3>
              <p className="opacity-90">
                Mantenemos inventarios estratégicos y relaciones sólidas con proveedores
                para garantizar disponibilidad inmediata.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sí lo ajustamos a sus requerimientos</h3>
              <p className="opacity-90">
                Ofrecemos soluciones personalizadas y flexibles que se adaptan a las
                necesidades específicas de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Descubre cómo podemos ayudarte con tus necesidades de empaque y protección
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              Contáctanos
            </Link>
            <Link
              href="/categoria/alimenticio/bolsa"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors font-semibold"
            >
              Ver Productos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: "Conócenos - Empaques Transformados",
  description: "Conoce la historia, misión y valores de Empaques Transformados. Más de una década ofreciendo soluciones en bolsas para alto vacío y materiales de protección.",
};

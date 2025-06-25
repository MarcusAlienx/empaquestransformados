import { Shield, Lock, Eye, Users, FileText, Mail } from "lucide-react";

export default function AvisoPrivacidadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              AVISO DE PRIVACIDAD
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empaques Transformados se compromete a proteger la privacidad y confidencialidad
              de sus datos personales
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Summary */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Resumen del Aviso de Privacidad
            </h2>
            <p className="text-gray-600">
              Este aviso describe cómo Empaques Transformados recopila, usa y protege su información personal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Protección</h3>
              <p className="text-sm text-gray-600">Sus datos están protegidos con medidas de seguridad física y digital</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Eye className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Transparencia</h3>
              <p className="text-sm text-gray-600">Le informamos claramente cómo usamos su información</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Control</h3>
              <p className="text-sm text-gray-600">Usted tiene derechos sobre sus datos personales</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose prose-gray max-w-none">

            {/* Identidad del Responsable */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-orange-500" />
                1. Identidad del Responsable
              </h2>
              <p className="text-gray-600 mb-4">
                <strong>Empaques Transformados</strong> con domicilio en Sta. Esther 107, Santa Margarita 1a Secc.,
                45140 Zapopan, Jalisco, México, es el responsable del tratamiento de sus datos personales.
              </p>
              <p className="text-gray-600">
                Para cualquier consulta relacionada con este aviso de privacidad, puede contactarnos en:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Email: proyectos@empaquestransformados.com</li>
                <li>Teléfono: 33 33 64 54 51 / 33 38 57 99 44</li>
              </ul>
            </section>

            {/* Datos Personales */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                2. Datos Personales que Recabamos
              </h2>
              <p className="text-gray-600 mb-4">
                Podemos recabar los siguientes tipos de datos personales:
              </p>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Datos de Identificación:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Nombre completo</li>
                  <li>Teléfono</li>
                  <li>Correo electrónico</li>
                  <li>Dirección</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Datos Comerciales:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Empresa o razón social</li>
                  <li>Giro comercial</li>
                  <li>Historial de compras</li>
                  <li>Preferencias de productos</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Datos de Navegación:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Dirección IP</li>
                  <li>Cookies y tecnologías similares</li>
                  <li>Páginas visitadas en nuestro sitio web</li>
                </ul>
              </div>
            </section>

            {/* Finalidades */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                3. Finalidades del Tratamiento
              </h2>
              <p className="text-gray-600 mb-4">
                Sus datos personales serán utilizados para las siguientes finalidades:
              </p>

              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-green-800 mb-2">Finalidades Primarias (necesarias):</h3>
                <ul className="list-disc list-inside text-green-700">
                  <li>Procesamiento de cotizaciones y pedidos</li>
                  <li>Prestación de servicios contratados</li>
                  <li>Facturación y cobranza</li>
                  <li>Atención al cliente y soporte técnico</li>
                  <li>Cumplimiento de obligaciones legales</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Finalidades Secundarias (opcional):</h3>
                <ul className="list-disc list-inside text-blue-700">
                  <li>Envío de promociones y ofertas especiales</li>
                  <li>Invitaciones a eventos comerciales</li>
                  <li>Mejora de nuestros productos y servicios</li>
                  <li>Estudios de mercado y estadísticas comerciales</li>
                </ul>
                <p className="text-blue-700 text-sm mt-2">
                  Para estas finalidades, requerimos su consentimiento expreso.
                </p>
              </div>
            </section>

            {/* Transferencias */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                4. Transferencias de Datos
              </h2>
              <p className="text-gray-600 mb-4">
                Podemos compartir sus datos personales con:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Proveedores de servicios de mensajería y logística para entregas</li>
                <li>Instituciones financieras para procesamiento de pagos</li>
                <li>Autoridades competentes cuando sea requerido por ley</li>
                <li>Proveedores de servicios de tecnología bajo estrictos acuerdos de confidencialidad</li>
              </ul>
            </section>

            {/* Derechos ARCO */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                5. Sus Derechos (ARCO)
              </h2>
              <p className="text-gray-600 mb-4">
                Usted tiene los siguientes derechos respecto a sus datos personales:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">Acceso</h3>
                  <p className="text-orange-700 text-sm">Conocer qué datos tenemos sobre usted</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">Rectificación</h3>
                  <p className="text-orange-700 text-sm">Corregir datos inexactos o incompletos</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">Cancelación</h3>
                  <p className="text-orange-700 text-sm">Solicitar la eliminación de sus datos</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">Oposición</h3>
                  <p className="text-orange-700 text-sm">Oponerse al tratamiento de sus datos</p>
                </div>
              </div>

              <p className="text-gray-600 mt-4">
                Para ejercer sus derechos ARCO, envíe su solicitud por escrito a:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mt-2">
                <p className="text-gray-700">
                  <strong>Email:</strong> proyectos@empaquestransformados.com<br />
                  <strong>Asunto:</strong> Ejercicio de Derechos ARCO
                </p>
              </div>
            </section>

            {/* Medidas de Seguridad */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                6. Medidas de Seguridad
              </h2>
              <p className="text-gray-600 mb-4">
                Implementamos medidas de seguridad físicas, técnicas y administrativas para proteger sus datos:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Cifrado de datos en transmisión y almacenamiento</li>
                <li>Control de acceso con autenticación de usuarios</li>
                <li>Respaldos periódicos de información</li>
                <li>Capacitación continua del personal en protección de datos</li>
                <li>Revisiones periódicas de seguridad</li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                7. Uso de Cookies
              </h2>
              <p className="text-gray-600 mb-4">
                Nuestro sitio web utiliza cookies para:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Mejorar la funcionalidad del sitio web</li>
                <li>Recordar sus preferencias</li>
                <li>Analizar el tráfico del sitio</li>
                <li>Personalizar su experiencia de usuario</li>
              </ul>
              <p className="text-gray-600">
                Puede configurar su navegador para rechazar cookies, aunque esto puede afectar
                la funcionalidad del sitio.
              </p>
            </section>

            {/* Cambios al Aviso */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                8. Cambios al Aviso de Privacidad
              </h2>
              <p className="text-gray-600">
                Nos reservamos el derecho de modificar este aviso de privacidad. Cualquier cambio
                será publicado en nuestro sitio web y, cuando sea aplicable, se lo notificaremos
                por los medios de contacto que nos haya proporcionado.
              </p>
            </section>

            {/* Vigencia */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                9. Vigencia
              </h2>
              <p className="text-gray-600">
                Este aviso de privacidad entró en vigor el 1 de enero de 2025 y se actualiza
                periódicamente para cumplir con la legislación vigente.
              </p>
            </section>

            {/* Marco Legal */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                10. Marco Legal
              </h2>
              <p className="text-gray-600">
                Este aviso cumple con la Ley Federal de Protección de Datos Personales en Posesión
                de los Particulares y su Reglamento, así como con los Lineamientos del Aviso de
                Privacidad emitidos por el Instituto Nacional de Transparencia, Acceso a la
                Información y Protección de Datos Personales (INAI).
              </p>
            </section>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-orange-500 text-white rounded-lg p-8 text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mb-4">
            ¿Tiene preguntas sobre este aviso?
          </h3>
          <p className="mb-6 opacity-90">
            Estamos aquí para resolver sus dudas sobre el manejo de sus datos personales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:proyectos@empaquestransformados.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-500 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <Mail className="w-5 h-5 mr-2" />
              Enviar Email
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-500 transition-colors font-semibold"
            >
              Ir a Contacto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Aviso de Privacidad - Empaques Transformados",
  description: "Conoce cómo Empaques Transformados protege y maneja tus datos personales según la Ley Federal de Protección de Datos Personales.",
};

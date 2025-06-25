import { Download } from "lucide-react";

export function CatalogDownload() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          EMPAQUES TRANSFORMADOS
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Descarga ahora nuestros catálogos en línea
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="https://www.empaquestransformados.com/wp-content/uploads/2022/12/CATALOGO-ALIMENTICIO-DIGITAL.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200"
          >
            <Download className="w-5 h-5" />
            ALIMENTICIO
          </a>

          <a
            href="https://www.empaquestransformados.com/wp-content/uploads/2022/12/CATALOGO-INDUSTRIAL-DIGITAL.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-slate-700 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200"
          >
            <Download className="w-5 h-5" />
            INDUSTRIAL
          </a>
        </div>
      </div>
    </section>
  );
}

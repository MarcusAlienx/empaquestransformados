import Image from "next/image";

const brands = [
  {
    name: "Reyma",
    image: "https://ext.same-assets.com/2048919527/2136124798.jpeg"
  },
  {
    name: "Tuck",
    image: "https://ext.same-assets.com/2048919527/2021347171.webp"
  },
  {
    name: "Tuck Embalar",
    image: "https://ext.same-assets.com/2048919527/1732695880.webp"
  },
  {
    name: "Burbutek",
    image: "https://ext.same-assets.com/2048919527/36064953.jpeg"
  }
];

export function BrandsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Somos su mejor aliado en cuestión de empaques
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-orange-500 mb-6">
            MATERIALES Y SOLUCIONES DE EMPAQUE
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Los mejores empaques y materiales para el envío protegido de sus productos,
            con las marcas más preferidas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {brands.map((brand) => (
            <div key={brand.name} className="flex justify-center">
              <Image
                src={brand.image}
                alt={brand.name}
                width={150}
                height={100}
                className="max-h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-orange-500 mb-4">
            NOS COMPLACE DECIR SÍ
          </h3>
          <ul className="text-gray-700 space-y-2 max-w-md mx-auto">
            <li>Sí cumplimos con las fechas</li>
            <li>Sí tenemos el material.</li>
            <li>Sí lo podemos ajustar a sus requerimientos.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

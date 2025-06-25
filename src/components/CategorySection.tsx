import Link from "next/link";
import Image from "next/image";
import { categoryData } from "@/data/products";

export function CategorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* ALIMENTICIO Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-12">
            {categoryData.alimenticio.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categoryData.alimenticio.subcategories.map((subcategory) => (
              <Link
                key={subcategory.id}
                href={`/categoria/alimenticio/${subcategory.id}`}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={subcategory.image}
                    alt={subcategory.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
                    {subcategory.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* INDUSTRIAL Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-700 mb-12">
            {categoryData.industrial.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categoryData.industrial.subcategories.map((subcategory) => (
              <Link
                key={subcategory.id}
                href={`/categoria/industrial/${subcategory.id}`}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={subcategory.image}
                    alt={subcategory.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-800 group-hover:text-slate-600 transition-colors">
                    {subcategory.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

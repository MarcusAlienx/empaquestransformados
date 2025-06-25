import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products, categoryData } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import type { Category } from "@/types/product";

interface CategoryPageProps {
  params: Promise<{
    category: Category;
    subcategory: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category, subcategory } = await params;

  // Validar que la categoría y subcategoría existan
  if (!categoryData[category]) {
    notFound();
  }

  const categoryInfo = categoryData[category];
  const subcategoryInfo = categoryInfo.subcategories.find(
    (sub) => sub.id === subcategory
  );

  if (!subcategoryInfo) {
    notFound();
  }

  // Filtrar productos por categoría y subcategoría
  const categoryProducts = products.filter(
    (product) =>
      product.category === category && product.subcategory === subcategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-orange-500 transition-colors"
            >
              Inicio
            </Link>
            <span>/</span>
            <Link
              href={`/categoria/${category}`}
              className="hover:text-orange-500 transition-colors capitalize"
            >
              {categoryInfo.name}
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">
              {subcategoryInfo.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {subcategoryInfo.name}
          </h1>
          <p className="text-gray-600">
            {categoryProducts.length} producto{categoryProducts.length !== 1 ? "s" : ""} disponible{categoryProducts.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Productos */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mb-4">
              <Image
                src={subcategoryInfo.image}
                alt={subcategoryInfo.name}
                width={200}
                height={200}
                className="mx-auto rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Próximamente en {subcategoryInfo.name}
            </h3>
            <p className="text-gray-600 mb-6">
              Estamos trabajando en agregar más productos a esta categoría.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Ver otros productos
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

// Generar páginas estáticas para todas las combinaciones de categoría/subcategoría
export async function generateStaticParams() {
  const params = [];

  for (const [category, categoryInfo] of Object.entries(categoryData)) {
    for (const subcategory of categoryInfo.subcategories) {
      params.push({
        category,
        subcategory: subcategory.id,
      });
    }
  }

  return params;
}

// Generar metadata dinámica
export async function generateMetadata({ params }: CategoryPageProps) {
  const { category, subcategory } = await params;

  if (!categoryData[category]) {
    return {
      title: "Categoría no encontrada - Empaques Transformados",
    };
  }

  const categoryInfo = categoryData[category];
  const subcategoryInfo = categoryInfo.subcategories.find(
    (sub) => sub.id === subcategory
  );

  if (!subcategoryInfo) {
    return {
      title: "Subcategoría no encontrada - Empaques Transformados",
    };
  }

  return {
    title: `${subcategoryInfo.name} - ${categoryInfo.name} | Empaques Transformados`,
    description: `Encuentra los mejores productos de ${subcategoryInfo.name.toLowerCase()} en ${categoryInfo.name.toLowerCase()}. Calidad garantizada en Empaques Transformados.`,
  };
}

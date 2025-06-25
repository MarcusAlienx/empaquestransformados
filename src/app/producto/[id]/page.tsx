import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ProductPageClient } from "@/components/ProductPageClient";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return <ProductPageClient product={product} />;
}

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Producto no encontrado - Empaques Transformados",
    };
  }

  return {
    title: `${product.name} - ${product.category} | Empaques Transformados`,
    description: product.description,
  };
}

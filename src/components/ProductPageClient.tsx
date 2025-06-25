"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Plus, Minus, ArrowLeft, Package, Ruler, Info } from "lucide-react";

interface ProductPageClientProps {
  product: Product;
}

export function ProductPageClient({ product }: ProductPageClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "");
  const [selectedPackage, setSelectedPackage] = useState(product.packages[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");

  const { addItem, openCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize || !selectedPackage) {
      alert("Por favor selecciona una medida y paquete");
      return;
    }

    addItem(product, selectedSize, selectedPackage, quantity, notes);
    openCart();
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link
              href="/"
              className="hover:text-orange-500 transition-colors"
            >
              Inicio
            </Link>
            <span>/</span>
            <Link
              href={`/categoria/${product.category}`}
              className="hover:text-orange-500 transition-colors capitalize"
            >
              {product.category}
            </Link>
            <span>/</span>
            <Link
              href={`/categoria/${product.category}/${product.subcategory}`}
              className="hover:text-orange-500 transition-colors capitalize"
            >
              {product.subcategory}
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">{product.name}</span>
          </nav>

          <Link
            href={`/categoria/${product.category}/${product.subcategory}`}
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a {product.subcategory}
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={`${product.id}-image-${index}`}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-orange-500"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full capitalize">
                  {product.category}
                </span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full capitalize">
                  {product.subcategory}
                </span>
              </div>
            </div>

            {/* Price */}
            {product.price && (
              <div className="text-2xl font-bold text-orange-500">
                ${product.price.min} - ${product.price.max}
              </div>
            )}

            {/* Description */}
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">{product.description}</p>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="flex items-center gap-2 font-semibold text-blue-800 mb-2">
                  <Info className="w-5 h-5" />
                  Especificaciones
                </h3>
                <p className="text-blue-700 text-sm">{product.specifications}</p>
              </div>
            )}

            {/* Additional Info */}
            {product.additionalInfo && (
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="flex items-center gap-2 font-semibold text-green-800 mb-2">
                  <Info className="w-5 h-5" />
                  Información Adicional
                </h3>
                <p className="text-green-700 text-sm">{product.additionalInfo}</p>
              </div>
            )}

            {/* Product Options */}
            <div className="space-y-4 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">
                Opciones de Producto
              </h3>

              {/* Sizes */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <Ruler className="w-4 h-4" />
                  Medida:
                </label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              {/* Packages */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <Package className="w-4 h-4" />
                  Paquete:
                </label>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  {product.packages.map((pkg) => (
                    <option key={pkg} value={pkg}>
                      {pkg}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cantidad:
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={decrementQuantity}
                    className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 bg-gray-50 border border-gray-300 rounded-md min-w-[4rem] text-center font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notas adicionales (opcional):
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Especificaciones adicionales o comentarios..."
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-3 bg-orange-500 text-white py-4 px-6 rounded-md hover:bg-orange-600 transition-colors font-semibold text-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                Agregar para Cotizar
              </button>
            </div>

            {/* SKU */}
            {product.sku && (
              <div className="text-sm text-gray-500">
                SKU: {product.sku}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

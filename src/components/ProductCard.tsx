"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Plus, Minus } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // Asegurarse de que los arrays existan y no estén vacíos
  const sizes = product.sizes || [];
  const packages = product.packages || [];

  const [selectedSize, setSelectedSize] = useState(sizes.length > 0 ? sizes[0] : "");
  const [selectedPackage, setSelectedPackage] = useState(packages.length > 0 ? packages[0] : "");
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCart();

  const handleAddToCart = () => {
    // Si no hay tamaños o paquetes seleccionados pero existen opciones, mostrar alerta
    if ((sizes.length > 0 && !selectedSize) || (packages.length > 0 && !selectedPackage)) {
      alert("Por favor selecciona una medida y paquete");
      return;
    }

    addItem(product, selectedSize, selectedPackage, quantity);
    openCart();
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Imagen del producto */}
      <Link href={`/producto/${product.id}`} className="block">
        <div className="aspect-square relative overflow-hidden bg-gray-100">
          <Image
            src={product.images[0] || "https://via.placeholder.com/400?text=Sin+Imagen"}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Contenido */}
      <div className="p-4">
        <Link href={`/producto/${product.id}`}>
          <h3 className="text-lg font-bold text-gray-800 hover:text-orange-500 transition-colors mb-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Precio (si está disponible) */}
        {product.price && (
          <div className="mb-4">
            <span className="text-orange-500 font-bold text-lg">
              ${product.price.min} - ${product.price.max}
            </span>
          </div>
        )}

        {/* Selecciones */}
        <div className="space-y-3 mb-4">
          {/* Medidas */}
          {sizes.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Medida:
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Paquetes */}
          {packages.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Paquete:
              </label>
              <select
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                {packages.map((pkg) => (
                  <option key={pkg} value={pkg}>
                    {pkg}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Cantidad */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cantidad:
            </label>
            <div className="flex items-center gap-2">
              <button
                onClick={decrementQuantity}
                className="p-1 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-3 py-1 bg-gray-50 border border-gray-300 rounded-md min-w-[3rem] text-center">
                {quantity}
              </span>
              <button
                onClick={incrementQuantity}
                className="p-1 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="space-y-2">
          <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            Agregar para cotizar
          </button>

          <Link
            href={`/producto/${product.id}`}
            className="w-full block text-center bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
}

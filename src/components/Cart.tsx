"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { X, Plus, Minus, Mail, ShoppingCart, Trash2 } from "lucide-react";

export function Cart() {
  const {
    state,
    removeItem,
    updateQuantity,
    clearCart,
    closeCart,
    getCartItemsCount,
  } = useCart();

  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Preparar el contenido del email
      const quoteContent = {
        customerInfo,
        items: state.items,
        timestamp: new Date().toISOString(),
      };

      // Simular envío de email (aquí implementarías la funcionalidad real)
      console.log("Enviando cotización:", quoteContent);

      // En una implementación real, esto sería una llamada a tu API
      // await fetch('/api/send-quote', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(quoteContent)
      // });

      alert(
        "¡Solicitud de cotización enviada exitosamente! Nos pondremos en contacto contigo pronto."
      );

      // Limpiar carrito y formulario
      clearCart();
      setCustomerInfo({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setShowQuoteForm(false);
      closeCart();
    } catch (error) {
      console.error("Error enviando cotización:", error);
      alert("Error al enviar la cotización. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!state.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={closeCart}
      />

      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Carrito de Cotización ({getCartItemsCount()})
            </h2>
            <button
              onClick={closeCart}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {state.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-6 text-gray-500">
                <ShoppingCart className="w-16 h-16 mb-4" />
                <h3 className="text-lg font-medium mb-2">
                  Tu carrito está vacío
                </h3>
                <p className="text-center text-sm">
                  Agrega productos para solicitar una cotización
                </p>
              </div>
            ) : (
              <>
                {/* Items */}
                <div className="p-4 space-y-4">
                  {state.items.map((item, index) => (
                    <div
                      key={`${item.product.id}-${item.size}-${item.package}-${index}`}
                      className="flex gap-4 bg-gray-50 p-3 rounded-lg"
                    >
                      <div className="w-16 h-16 relative bg-white rounded-md overflow-hidden">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-gray-800 truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1">
                          {item.size} • {item.package}
                        </p>
                        {item.notes && (
                          <p className="text-xs text-gray-500 mt-1">
                            Notas: {item.notes}
                          </p>
                        )}

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.product.id,
                                item.quantity - 1
                              )
                            }
                            className="p-1 hover:bg-gray-200 rounded transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.product.id,
                                item.quantity + 1
                              )
                            }
                            className="p-1 hover:bg-gray-200 rounded transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="p-1 hover:bg-red-100 text-red-600 rounded transition-colors ml-2"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote Form */}
                {showQuoteForm ? (
                  <div className="border-t p-4">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Información para Cotización
                    </h3>
                    <form onSubmit={handleQuoteSubmit} className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Nombre"
                          value={customerInfo.name}
                          onChange={(e) =>
                            setCustomerInfo({ ...customerInfo, name: e.target.value })
                          }
                          className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500"
                          required
                        />
                        <input
                          type="text"
                          placeholder="Apellido"
                          value={customerInfo.lastName}
                          onChange={(e) =>
                            setCustomerInfo({ ...customerInfo, lastName: e.target.value })
                          }
                          className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500"
                          required
                        />
                      </div>
                      <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={customerInfo.email}
                        onChange={(e) =>
                          setCustomerInfo({ ...customerInfo, email: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500"
                        required
                      />
                      <input
                        type="tel"
                        placeholder="Teléfono"
                        value={customerInfo.phone}
                        onChange={(e) =>
                          setCustomerInfo({ ...customerInfo, phone: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500"
                        required
                      />
                      <textarea
                        placeholder="Mensaje adicional (opcional)"
                        value={customerInfo.message}
                        onChange={(e) =>
                          setCustomerInfo({ ...customerInfo, message: e.target.value })
                        }
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500"
                      />
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setShowQuoteForm(false)}
                          className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm"
                        >
                          Cancelar
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors text-sm disabled:opacity-50"
                        >
                          {isSubmitting ? "Enviando..." : "Enviar Cotización"}
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="border-t p-4 space-y-3">
                    <div className="text-center text-sm text-gray-600 bg-orange-50 p-3 rounded-lg">
                      <Mail className="w-5 h-5 mx-auto mb-2 text-orange-500" />
                      <p>
                        Los productos se enviarán como solicitud de cotización a{" "}
                        <strong>proyectos@empaquestransformados.com</strong>
                      </p>
                    </div>
                    <button
                      onClick={() => setShowQuoteForm(true)}
                      className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Solicitar Cotización
                    </button>
                    <button
                      onClick={clearCart}
                      className="w-full py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm"
                    >
                      Limpiar Carrito
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

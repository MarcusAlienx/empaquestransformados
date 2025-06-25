"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { products as initialProducts } from "@/data/products";
import type { Product } from "@/types/product";
import Link from "next/link";

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState<Partial<Product>>({});

  function resetForm() {
    setEditing(null);
    setForm({});
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleArrayChange(name: keyof Product, value: string) {
    const arr = value.split(",").map(s => s.trim()).filter(Boolean);
    setForm(prev => ({ ...prev, [name]: arr }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Validar campos obligatorios
    if (!form.id || !form.category) {
      alert("ID y categoría son obligatorios");
      return;
    }
    const item: Product = {
      id: form.id.trim(),
      name: form.name || "",
      description: form.description || "",
      category: form.category as Product['category'],
      subcategory: form.subcategory || "",
      images: (form.images as string[]) || [],
      sizes: (form.sizes as string[]) || [],
      packages: (form.packages as string[]) || [],
      price: form.price,
      specifications: form.specifications,
      additionalInfo: form.additionalInfo,
    };
    let updated: Product[];
    if (editing) {
      updated = products.map(p => p.id === editing.id ? item : p);
    } else {
      updated = [...products, item];
    }
    setProducts(updated);
    resetForm();
  }

  function handleEdit(p: Product) {
    setEditing(p);
    setForm({ ...p });
  }

  function handleDelete(id: string) {
    if (confirm("Eliminar producto?")) {
      setProducts(products.filter(p => p.id !== id));
      if (editing?.id === id) resetForm();
    }
  }

  function downloadJSON() {
    const blob = new Blob([JSON.stringify(products, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'products.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Productos</h1>
      <button onClick={downloadJSON} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Descargar JSON</button>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">{editing ? 'Editar' : 'Agregar'} Producto</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">ID</label>
              <input name="id" required value={form.id || ''} onChange={handleChange} className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Nombre</label>
              <input name="name" required value={form.name || ''} onChange={handleChange} className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Descripción</label>
              <textarea name="description" required value={form.description || ''} onChange={handleChange} className="w-full border p-2 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Categoría</label>
                <select name="category" required value={form.category || ''} onChange={handleChange} className="w-full border p-2 rounded">
                  <option value="">--</option>
                  <option value="alimenticio">Alimenticio</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Subcategoría</label>
                <input name="subcategory" required value={form.subcategory || ''} onChange={handleChange} className="w-full border p-2 rounded" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Imágenes (URLs, separadas por coma)</label>
              <input value={(form.images as string[] || []).join(', ')} onChange={e => handleArrayChange('images', e.target.value)} className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Tamaños (separados por coma)</label>
              <input value={(form.sizes as string[] || []).join(', ')} onChange={e => handleArrayChange('sizes', e.target.value)} className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Paquetes (separados por coma)</label>
              <input value={(form.packages as string[] || []).join(', ')} onChange={e => handleArrayChange('packages', e.target.value)} className="w-full border p-2 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Precio Min</label>
                <input name="price.min" type="number" value={form.price?.min ?? ''} onChange={e => {
                  const min = Number(e.target.value);
                  setForm(prev => ({
                    ...prev,
                    price: {
                      min,
                      max: prev.price?.max ?? min,
                    },
                  }));
                }} className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium">Precio Max</label>
                <input name="price.max" type="number" value={form.price?.max ?? ''} onChange={e => {
                  const max = Number(e.target.value);
                  setForm(prev => ({
                    ...prev,
                    price: {
                      max,
                      min: prev.price?.min ?? max,
                    },
                  }));
                }} className="w-full border p-2 rounded" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Especificaciones</label>
              <textarea name="specifications" value={form.specifications || ''} onChange={handleChange} className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Info Adicional</label>
              <textarea name="additionalInfo" value={form.additionalInfo || ''} onChange={handleChange} className="w-full border p-2 rounded" />
            </div>
            <div className="flex gap-4">
              <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Guardar</button>
              <button type="button" onClick={resetForm} className="px-4 py-2 bg-gray-300 text-black rounded">Cancelar</button>
            </div>
          </form>
        </div>

        <div className="bg-white p-6 rounded shadow overflow-auto">
          <h2 className="text-xl font-semibold mb-4">Listado de Productos</h2>
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-2 py-1">ID</th>
                <th className="px-2 py-1">Nombre</th>
                <th className="px-2 py-1">Categoría</th>
                <th className="px-2 py-1">Subcategoría</th>
                <th className="px-2 py-1">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id} className="border-t">
                  <td className="px-2 py-1 text-sm truncate max-w-xs">{p.id}</td>
                  <td className="px-2 py-1 text-sm truncate max-w-xs">{p.name}</td>
                  <td className="px-2 py-1 text-sm">{p.category}</td>
                  <td className="px-2 py-1 text-sm">{p.subcategory}</td>
                  <td className="px-2 py-1 space-x-2">
                    <button onClick={() => handleEdit(p)} className="px-2 py-1 bg-yellow-400 text-white rounded text-xs">Editar</button>
                    <button onClick={() => handleDelete(p.id)} className="px-2 py-1 bg-red-500 text-white rounded text-xs">Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6">
        <Link href="/" className="text-blue-500 hover:underline">← Volver al sitio</Link>
      </div>
    </div>
  );
}

export interface Product {
  id: string;
  name: string;
  description: string; // Kept as is, all-products.json has it often empty
  category: "alimenticio" | "industrial" | string; // Made more general for all-products
  subcategory: string;
  images: string[];
  sizes?: string[]; // Made optional as not in all-products
  packages?: string[]; // Made optional as not in all-products
  price?: string | number | { min: number; max: number }; // Made flexible
  specifications?: string; // Kept as optional
  additionalInfo?: string; // Kept as optional
  sku?: string; // Kept as optional
  url?: string; // Made optional to align with actual data in products.ts and admin page context
  names_id?: number; // Added from products.json, optional
}

export interface CartItem {
  product: Product;
  size: string;
  package: string;
  quantity: number;
  notes?: string;
}

export interface QuoteRequest {
  items: CartItem[];
  customerInfo: {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    message?: string;
  };
}

export type Category = "alimenticio" | "industrial";

export type SubcategoryAlimenticio =
  | "bolsa"
  | "gofrados"
  | "stand-up"
  | "empacadoras"
  | "refacciones"
  | "vitafilm"
  | "varios"
  | "especialidades";

export type SubcategoryIndustrial =
  | "cintas"
  | "proteccion"
  | "carton"
  | "polietileno"
  | "maquinaria"
  | "especialidades";

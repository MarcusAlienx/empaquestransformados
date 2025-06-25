export interface Product {
  id: string;
  name: string;
  description: string;
  category: "alimenticio" | "industrial";
  subcategory: string;
  images: string[];
  sizes: string[];
  packages: string[];
  price?: {
    min: number;
    max: number;
  };
  specifications?: string;
  additionalInfo?: string;
  sku?: string;
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

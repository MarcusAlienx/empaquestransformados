import type { Product, Category } from "@/types/product";
import allProductsJson from "./all-products.json";

// Interfaz para los productos importados del JSON
interface ImportedProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  images: string[];
  price: string;
  url: string;
}

// Función para validar que la categoría sea válida
function validateCategory(category: string): Category {
  if (category === "alimenticio" || category === "industrial") {
    return category as Category;
  }
  // Valor por defecto si la categoría no es válida
  console.warn(`Categoría inválida: ${category}, usando "alimenticio" como valor por defecto`);
  return "alimenticio";
}

// Transformar los productos reales para adaptarlos al tipo Product
const realProducts: Product[] = (allProductsJson as ImportedProduct[]).map((product) => ({
  id: product.id,
  name: product.name,
  description: product.description || "",
  category: validateCategory(product.category),
  subcategory: product.subcategory,
  images: product.images || [],
  sizes: [],  // No tenemos esta información en los datos originales
  packages: [], // No tenemos esta información en los datos originales
  price: {
    min: 0,
    max: 0
  },
  specifications: "",
  additionalInfo: ""
}));

// Datos simulados temporales con información más detallada
const sampleProducts: Product[] = [
  // Alimenticio - Bolsa
  {
    id: "bolsa-alto-vacio-transparente",
    name: "TRANSPARENTE",
    description: "Nuestras bolsas son diseñadas para ser utilizadas en procesos de empacado al alto vacío, mediante una coextrusión de 7 capas, generando una barrera que evita la entrada de oxígeno, gases y/o vapor de agua.",
    category: "alimenticio",
    subcategory: "bolsa",
    images: ["https://empaquestransformados.com/wp-content/uploads/2022/12/TRANSP-PESCADO-600x600.png"],
    sizes: ["20x30cm", "25x35cm", "30x40cm"],
    packages: ["100 piezas", "500 piezas", "1000 piezas"],
    price: {
      min: 250,
      max: 1200
    },
    specifications: "Espesor: 70 micras, Material: 7 capas coextruidas",
    additionalInfo: "Ideal para conservación de alimentos"
  },
  {
    id: "bolsa-para-alto-vacio-negro",
    name: "FONDO NEGRO",
    description: "Bolsas de alto vacío con fondo negro para mejor presentación de productos cárnicos y otros alimentos.",
    category: "alimenticio",
    subcategory: "bolsa",
    images: ["https://empaquestransformados.com/wp-content/uploads/2022/12/FONDO-NEGRO-600x600.png"],
    sizes: ["20x30cm", "25x35cm", "30x40cm"],
    packages: ["100 piezas", "500 piezas", "1000 piezas"],
    price: {
      min: 280,
      max: 1350
    },
    specifications: "Espesor: 70 micras, Material: 7 capas coextruidas con fondo negro",
    additionalInfo: "Ideal para carnes y productos que requieren mejor presentación"
  },

  // Alimenticio - Gofrados
  {
    id: "bolsa-gofrada",
    name: "BOLSA GOFRADA",
    description: "Bolsas con textura gofrada para mejor presentación y conservación de alimentos.",
    category: "alimenticio",
    subcategory: "gofrados",
    images: ["https://empaquestransformados.com/wp-content/uploads/2022/12/BOLSA-GOFRADA-600x600.jpg"],
    sizes: ["20x30cm", "25x35cm", "30x40cm"],
    packages: ["100 piezas", "500 piezas", "1000 piezas"],
    price: {
      min: 300,
      max: 1400
    },
    specifications: "Espesor: 75 micras, Material: Polietileno gofrado",
    additionalInfo: "Proporciona mejor aspecto a los productos"
  },

  // Alimenticio - Stand Up
  {
    id: "stand-up-transparente",
    name: "STAND UP TRANSPARENTE",
    description: "Bolsas tipo stand up transparentes para presentación de alimentos.",
    category: "alimenticio",
    subcategory: "stand-up",
    images: ["https://empaquestransformados.com/wp-content/uploads/2022/12/TRANSPARENTE-1-600x600.jpg"],
    sizes: ["13x21cm", "16x24cm", "18x30cm"],
    packages: ["100 piezas", "500 piezas", "1000 piezas"],
    price: {
      min: 350,
      max: 1500
    },
    specifications: "Material: Multicapa laminado, con cierre zip",
    additionalInfo: "Ideal para alimentos secos, snacks y productos que requieren presentación visible"
  },

  // Alimenticio - Empacadoras
  {
    id: "mesa-vt-260",
    name: "MESA VT-260",
    description: "Empacadora al vacío de mesa con barra de sellado de 260mm. Ideal para uso comercial ligero.",
    category: "alimenticio",
    subcategory: "empacadoras",
    images: ["https://empaquestransformados.com/wp-content/uploads/2022/12/4.-MESA-600x600.png"],
    sizes: ["260mm"],
    packages: ["1 unidad"],
    price: {
      min: 12000,
      max: 15000
    },
    specifications: "Potencia: 370W, Voltaje: 110V, Barra de sellado: 260mm",
    additionalInfo: "Incluye manual de usuario y garantía de 1 año"
  },

  // Alimenticio - Refacciones
  {
    id: "bomba-al-vacio",
    name: "BOMBA AL VACÍO",
    description: "Bomba de vacío para reemplazo en empacadoras al vacío.",
    category: "alimenticio",
    subcategory: "refacciones",
    images: ["https://empaquestransformados.com/wp-content/uploads/2023/03/BOMBA-AL-VACIO-600x600.png"],
    sizes: ["Estándar"],
    packages: ["1 unidad"],
    price: {
      min: 4500,
      max: 6000
    },
    specifications: "Potencia: 0.5HP, Voltaje: 110V",
    additionalInfo: "Compatible con la mayoría de empacadoras al vacío"
  },

  // Alimenticio - Vitafilm
  {
    id: "vitafilm-standard",
    name: "VITAFILM",
    description: "Film transparente para envoltura de alimentos.",
    category: "alimenticio",
    subcategory: "vitafilm",
    images: ["https://empaquestransformados.com/wp-content/uploads/2022/12/VITAFILM-1-600x600.jpg"],
    sizes: ["30cm x 300m", "38cm x 500m", "45cm x 1000m"],
    packages: ["1 rollo", "Caja 6 rollos"],
    price: {
      min: 180,
      max: 600
    },
    specifications: "Material: PVC de grado alimenticio",
    additionalInfo: "Alta transparencia y adherencia"
  },

  // Alimenticio - Varios
  {
    id: "bolsa-con-zipper",
    name: "BOLSA CON ZIPPER",
    description: "Bolsas con cierre hermético tipo zipper para almacenamiento de alimentos.",
    category: "alimenticio",
    subcategory: "varios",
    images: ["https://empaquestransformados.com/wp-content/uploads/2022/12/bolsa-zipper-SANDWICH-600x600.jpg"],
    sizes: ["15x15cm", "20x20cm", "25x25cm"],
    packages: ["100 piezas", "1000 piezas"],
    price: {
      min: 150,
      max: 450
    },
    specifications: "Espesor: 50 micras, Material: Polietileno",
    additionalInfo: "Cierre hermético reutilizable"
  },

  // Alimenticio - Especialidades
  {
    id: "bolsa-impresa-alimentos",
    name: "BOLSA IMPRESA",
    description: "Bolsas personalizadas con impresión para productos alimenticios.",
    category: "alimenticio",
    subcategory: "especialidades",
    images: ["https://empaquestransformados.com/wp-content/uploads/2023/03/mock-up-vertical-logotipo-nuevo-600x576.png"],
    sizes: ["A medida"],
    packages: ["Mínimo 1000 piezas"],
    price: {
      min: 3000,
      max: 15000
    },
    specifications: "Impresión hasta 6 colores, Material a elección",
    additionalInfo: "Diseño personalizado a las necesidades del cliente"
  },

  // Industrial - Cintas
  {
    id: "t-182",
    name: "T-278 ACRILICA",
    description: "Cinta adhesiva acrílica de alta calidad para uso industrial y sellado de cajas.",
    category: "industrial",
    subcategory: "cintas",
    images: ["https://empaquestransformados.com/wp-content/uploads/2022/12/T-278-5-600x600.jpg"],
    sizes: ["48mm x 150m"],
    packages: ["36 rollos"],
    price: {
      min: 800,
      max: 1200
    },
    specifications: "Adhesivo: Acrílico, Espesor: 45 micras",
    additionalInfo: "Alta resistencia a condiciones variables de temperatura"
  },

  // Industrial - Protección
  {
    id: "poliburbuja",
    name: "BOBINA POLIBURBUJA",
    description: "Película de polietileno con burbujas para protección de productos.",
    category: "industrial",
    subcategory: "proteccion",
    images: ["https://empaquestransformados.com/wp-content/uploads/2022/12/burbuja-1-600x600.jpg"],
    sizes: ["1.2m x 100m"],
    packages: ["1 rollo"],
    price: {
      min: 950,
      max: 1500
    },
    specifications: "Burbuja: 10mm de diámetro, Material: Polietileno",
    additionalInfo: "Excelente protección contra golpes e impactos"
  },

  // Industrial - Cartón
  {
    id: "cajas-de-carton",
    name: "CAJAS DE CARTÓN",
    description: "Cajas de cartón corrugado para embalaje de productos.",
    category: "industrial",
    subcategory: "carton",
    images: ["https://empaquestransformados.com/wp-content/uploads/2022/12/CAJA-1.png"],
    sizes: ["30x20x15cm", "40x30x20cm", "50x40x30cm"],
    packages: ["25 piezas", "50 piezas", "100 piezas"],
    price: {
      min: 500,
      max: 2000
    },
    specifications: "Cartón corrugado de una onda, Resistencia: ECT-32",
    additionalInfo: "Disponible en diferentes calibres según necesidad"
  },

  // Industrial - Polietileno
  {
    id: "bolsa-plana-transparente",
    name: "BOLSA TRANSPARENTE",
    description: "Bolsas de polietileno transparentes para uso industrial.",
    category: "industrial",
    subcategory: "polietileno",
    images: ["https://empaquestransformados.com/wp-content/uploads/2022/12/CAN-LINER-600x600.jpg"],
    sizes: ["40x60cm", "50x70cm", "60x90cm"],
    packages: ["100 piezas", "1000 piezas"],
    price: {
      min: 300,
      max: 1200
    },
    specifications: "Calibre: 300, Material: Polietileno de baja densidad",
    additionalInfo: "Alta transparencia y resistencia"
  },

  // Industrial - Maquinaria
  {
    id: "selladora-impulso",
    name: "SELLADORA DE IMPULSO",
    description: "Selladora de bolsas por impulso para cierre de bolsas de polietileno.",
    category: "industrial",
    subcategory: "maquinaria",
    images: ["https://empaquestransformados.com/wp-content/uploads/2022/12/SELLADORA.png"],
    sizes: ["400mm"],
    packages: ["1 unidad"],
    price: {
      min: 3500,
      max: 5000
    },
    specifications: "Potencia: 500W, Voltaje: 110V, Longitud de sellado: 400mm",
    additionalInfo: "Incluye repuestos y garantía de 6 meses"
  },

  // Industrial - Especialidades
  {
    id: "bolsa-impresa-industrial",
    name: "BOLSA IMPRESA INDUSTRIAL",
    description: "Bolsas personalizadas con impresión para uso industrial.",
    category: "industrial",
    subcategory: "especialidades",
    images: ["https://empaquestransformados.com/wp-content/uploads/2023/03/mock-up-vertical-logotipo-nuevo-600x576.png"],
    sizes: ["A medida"],
    packages: ["Mínimo 1000 piezas"],
    price: {
      min: 5000,
      max: 20000
    },
    specifications: "Impresión hasta 6 colores, Material a elección según uso",
    additionalInfo: "Diseño personalizado para aplicaciones industriales"
  }
];

// Combinar productos reales con información adicional simulada
export const products: Product[] = realProducts.map(realProduct => {
  // Buscar si tenemos información detallada para este producto
  const detailedProduct = sampleProducts.find(p =>
    p.id === realProduct.id ||
    (p.category === realProduct.category && p.subcategory === realProduct.subcategory)
  );

  if (detailedProduct) {
    return {
      ...realProduct,
      description: realProduct.description || detailedProduct.description,
      sizes: detailedProduct.sizes,
      packages: detailedProduct.packages,
      price: detailedProduct.price,
      specifications: detailedProduct.specifications,
      additionalInfo: detailedProduct.additionalInfo
    };
  }

  // Si no hay información detallada, agregar valores por defecto
  return {
    ...realProduct,
    description: realProduct.description || `${realProduct.name} de alta calidad para uso profesional.`,
    sizes: ["Estándar"],
    packages: ["1 unidad"],
    price: {
      min: 100,
      max: 500
    },
    specifications: "Consultar especificaciones técnicas detalladas",
    additionalInfo: "Envíos a todo México"
  };
});

export const categoryData = {
  alimenticio: {
    name: "ALIMENTICIO",
    subcategories: [
      { id: "bolsa", name: "BOLSA", image: "https://ext.same-assets.com/2048919527/2396841788.jpeg" },
      { id: "gofrados", name: "GOFRADOS", image: "https://ext.same-assets.com/2048919527/1825721253.webp" },
      { id: "stand-up", name: "STAND UP", image: "https://ext.same-assets.com/2048919527/2785692813.webp" },
      { id: "empacadoras", name: "EMPACADORAS", image: "https://ext.same-assets.com/2048919527/2301795055.webp" },
      { id: "refacciones", name: "REFACCIONES", image: "https://ext.same-assets.com/2048919527/841523713.jpeg" },
      { id: "vitafilm", name: "VITAFILM", image: "https://ext.same-assets.com/2048919527/3576460062.jpeg" },
      { id: "varios", name: "VARIOS", image: "https://ext.same-assets.com/2048919527/2001026947.webp" },
      { id: "especialidades", name: "ESPECIALIDADES", image: "https://ext.same-assets.com/2048919527/3558791953.webp" }
    ]
  },
  industrial: {
    name: "INDUSTRIAL",
    subcategories: [
      { id: "cintas", name: "CINTAS", image: "https://ext.same-assets.com/2048919527/472644325.webp" },
      { id: "proteccion", name: "PROTECCIÓN", image: "https://ext.same-assets.com/2048919527/1023099729.webp" },
      { id: "carton", name: "CARTÓN", image: "https://ext.same-assets.com/2048919527/10567744.webp" },
      { id: "polietileno", name: "POLIETILENO", image: "https://ext.same-assets.com/2048919527/842438969.webp" },
      { id: "maquinaria", name: "MAQUINARIA", image: "https://ext.same-assets.com/2048919527/745158358.webp" },
      { id: "especialidades", name: "ESPECIALIDADES", image: "https://ext.same-assets.com/2048919527/1585886130.webp" }
    ]
  }
};

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Empaques Transformados - Bolsas para alto vacío, todo para la protección",
  description: "Fabricantes de bolsas para alto vacío, cartón, cintas tuck, plástico con burbujas, rollos de emplaye, cajas de cartón y más.",
  keywords: "empaques, bolsas vacío, cartón, cintas, protección, empacado, Guadalajara, Zapopan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Cart />
        </CartProvider>
      </body>
    </html>
  );
}

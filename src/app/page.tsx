import { HeroSlider } from "@/components/HeroSlider";
import { CategorySection } from "@/components/CategorySection";
import { ServicesSection } from "@/components/ServicesSection";
import { CatalogDownload } from "@/components/CatalogDownload";
import { BrandsSection } from "@/components/BrandsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Services Section */}
      <ServicesSection />

      {/* Catalog Download */}
      <CatalogDownload />

      {/* Category Sections */}
      <CategorySection />

      {/* Brands Section */}
      <BrandsSection />
    </div>
  );
}

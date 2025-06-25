"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://ext.same-assets.com/2048919527/842200396.jpeg",
    title: "Prolonga la vida de tus alimentos y garantiza la frescura",
    subtitle: "Somos fabricantes de bolsa para alto vacío"
  },
  {
    id: 2,
    image: "https://ext.same-assets.com/2048919527/3543370369.jpeg",
    title: "Todo para empaque",
    subtitle: "Gran variedad de medidas y colores"
  },
  {
    id: 3,
    image: "https://ext.same-assets.com/2048919527/1144080704.jpeg",
    title: "Distribuidores de empacadoras para alto vacío",
    subtitle: "Contamos con servicio técnico"
  },
  {
    id: 4,
    image: "https://ext.same-assets.com/2048919527/3069549146.jpeg",
    title: "Prolonga la vida de tus alimentos y garantiza la frescura",
    subtitle: "Somos fabricantes de bolsa para alto vacío"
  },
  {
    id: 5,
    image: "https://ext.same-assets.com/2048919527/2417986467.jpeg",
    title: "Todo para empaque",
    subtitle: "Gran variedad de medidas y colores"
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto text-center text-white px-4">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-orange-300">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-orange-500"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import { Truck, CreditCard, Clock, Users } from "lucide-react";

const services = [
  {
    icon: Truck,
    image: "https://ext.same-assets.com/2048919527/203186120.jpeg",
    title: "Envíos",
    description: "Nacionales e Internacionales"
  },
  {
    icon: CreditCard,
    image: "https://ext.same-assets.com/2048919527/2460357249.jpeg",
    title: "Pagos",
    description: "Transferencia Bancaria"
  },
  {
    icon: Clock,
    image: "https://ext.same-assets.com/2048919527/4246234089.jpeg",
    title: "Tiempos de entrega",
    description: "Nuestro mayor compromiso"
  },
  {
    icon: Users,
    image: "https://ext.same-assets.com/2048919527/3171144931.jpeg",
    title: "Atención a clientes",
    description: "Lunes a Viernes: 8 am – 5:30 pm\nSábados: 8 am – 1:30 pm"
  }
];

export function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

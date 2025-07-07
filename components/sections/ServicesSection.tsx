import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tent, Table, Utensils, Wind, Music2, Fence } from "lucide-react";
import Image from "next/image";

export function ServicesSection() {
  const services = [
    {
      title: "Carpas y Gazebos",
      description:
        "Desde 3x3m hasta 20x30m. Resistentes al viento y lluvia, ideales para cualquier clima.",
      icon: Tent,
      image: "/placeholder.svg?height=300&width=400",
      alt: "Carpas elegantes para eventos",
    },
    {
      title: "Mesas y Sillas",
      description:
        "Mesas redondas, rectangulares y cocktail. Sillas Tiffany, plegables y ejecutivas.",
      icon: Table,
      image: "/placeholder.svg?height=300&width=400",
      alt: "Mesas y sillas para eventos",
    },
    {
      title: "Vajilla y Cristalería",
      description:
        "Platos, copas, cubiertos y mantelería de alta calidad para eventos elegantes.",
      icon: Utensils,
      image: "/placeholder.svg?height=300&width=400",
      alt: "Vajilla y cristalería elegante",
    },
    {
      title: "Climatización",
      description:
        "Equipos de aire acondicionado y calefacción para mantener el confort perfecto.",
      icon: Wind,
      image: "/placeholder.svg?height=300&width=400",
      alt: "Sistemas de climatización",
    },
    {
      title: "Escenarios y Tarimas",
      description:
        "Estructuras modulares para presentaciones, shows y ceremonias especiales.",
      icon: Music2,
      image: "/placeholder.svg?height=300&width=400",
      alt: "Escenarios y tarimas",
    },
    {
      title: "Vallas y Cerramientos",
      description:
        "Control de acceso y delimitación de espacios para eventos seguros y organizados.",
      icon: Fence,
      image: "/placeholder.svg?height=300&width=400",
      alt: "Vallas y cerramientos",
    },
  ];

  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestro Equipamiento
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para tu evento en un solo lugar
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-[#003056]">
                  <service.icon className="h-4 w-4 mr-1" />
                  {service.title}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

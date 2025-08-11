import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Tent,
  Table,
  Utensils,
  Wind,
  Music2,
  Fence,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

export function ServicesSection() {
  // Servicios principales (ocuparán 6 columnas cada uno)
  const mainServices = [
    {
      title: 'Carpas y Gazebos',
      description:
        'Desde 3x3m hasta 20x30m. Resistentes al viento y lluvia, ideales para cualquier clima.',
      icon: Tent,
      image: '/catalogo/carpa.jpg',
      alt: 'Carpas elegantes para eventos',
    },
    {
      title: 'Escenarios y Tarimas',
      description:
        'Estructuras modulares para presentaciones, shows y ceremonias especiales.',
      icon: Music2,
      image: '/catalogo/escenario.jpg',
      alt: 'Escenarios y tarimas',
    },
  ];

  // Servicios secundarios (ocuparán 3 columnas cada uno)
  const secondaryServices = [
    {
      title: 'Mesas y Sillas',
      description:
        'Mesas redondas, rectangulares y cocktail. Sillas Tiffany, plegables y ejecutivas.',
      icon: Table,
      image: '/catalogo/sillasymesas.jpg',
      alt: 'Mesas y sillas para eventos',
    },
    {
      title: 'Vajilla y Cristalería',
      description:
        'Platos, copas, cubiertos y mantelería de alta calidad para eventos elegantes.',
      icon: Utensils,
      image: '/catalogo/vajilla.jpg',
      alt: 'Vajilla y cristalería elegante',
    },
    {
      title: 'Climatización',
      description:
        'Equipos de aire acondicionado y calefacción para mantener el confort perfecto.',
      icon: Wind,
      image: '/catalogo/DSC_2048.JPG',
      alt: 'Sistemas de climatización',
    },
    {
      title: 'Vallas y Cerramientos',
      description:
        'Control de acceso y delimitación de espacios para eventos seguros y organizados.',
      icon: Fence,
      image: '/catalogo/vallas.jpg',
      alt: 'Vallas y cerramientos',
    },
  ];

  return (
    <section id="servicios" className="py-0">
      <div className="container mx-auto px-4">
        <div className="text-center  mb-6 md:mb-16">
          <h2 className="text-xl md:text-4xl font-semibold text-gray-900 mb-4">
            Nuestro Equipamiento
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para tu evento en un solo lugar
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Servicios principales - 6 columnas cada uno */}
          {mainServices.map((service) => (
            <Card
              key={service.title}
              className="lg:col-span-6 overflow-hidden group relative hover:shadow-xl transition-shadow "
            >
              <div className="relative h-96 overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90" />
                {/* Badge especial en la esquina superior derecha */}
                <div className="absolute top-3 right-3 group-hover:opacity-0 transition-opacity duration-300">
                  <Badge className="bg-yellow-400 text-gray-900 text-xs uppercase font-semibold tracking-wide rounded-full px-3 py-1">
                    {service.title === 'Carpas y Gazebos'
                      ? 'Nuestra Especialidad'
                      : 'Alto Impacto'}
                  </Badge>
                </div>
                {/* Título en la esquina superior izquierda */}
                <div className="absolute top-4 left-4">
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-gray-200 group-hover:opacity-0 transition-opacity duration-300">
                    {service.description}
                  </p>
                </CardContent>
                {/* Nuevo overlay con botones */}
                <div className="absolute inset-0 p-6 flex justify-center items-end  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-row gap-2 w-full justify-center ">
                    <a
                      href="#detalles"
                      className="px-4 py-2 border w-full text-center border-white text-white font-semibold rounded hover:bg-white hover:text-gray-900 transition-colors"
                    >
                      Ver Trabajos
                    </a>
                    <a
                      href="#cotizar"
                      className="px-4 py-2 bg-yellow-400 text-gray-900 font-bold rounded hover:bg-yellow-300 transition-colors w-full text-center"
                    >
                      Cotizar Ahora
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* Servicios secundarios - 3 columnas cada uno */}
          {secondaryServices.map((service) => (
            <Card
              key={service.title}
              className="lg:col-span-3 overflow-hidden group relative hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 md:h-auto md:aspect-square overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90" />
                {/* Título en la esquina superior izquierda */}
                <div className="absolute top-4 left-4">
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                {/* Botones en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center items-center gap-2 w-full">
                  <a
                    href="#detalles"
                    className="w-full px-4 py-2 border border-white text-white font-semibold rounded hover:bg-white hover:text-gray-900 transition-colors text-center"
                  >
                    Catálogo
                  </a>
                  <a
                    href="#cotizar"
                    className="w-full px-4 py-2 bg-yellow-400 text-gray-900 font-bold rounded hover:bg-yellow-300 transition-colors text-center"
                  >
                    Cotizar
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

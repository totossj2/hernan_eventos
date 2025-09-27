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
import Link from 'next/link';

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
      href: '/servicios/carpas',
    },
    {
      title: 'Escenarios y Tarimas',
      description:
        'Estructuras modulares para presentaciones, shows y ceremonias especiales.',
      icon: Music2,
      image: '/catalogo/escenario.jpg',
      alt: 'Escenarios y tarimas',
      href: '/servicios/escenarios',
    },
  ];

  // Servicios secundarios (ocuparán 3 columnas cada uno)
  const secondaryServices = [
    {
      title: 'Mesas y Sillas',
      description:
        'Mesas redondas, rectangulares y cocktail. Sillas plasticas o plegables.',
      icon: Table,
      image: '/catalogo/sillasymesas.jpg',
      alt: 'Mesas y sillas para eventos',
      href: '/servicios/mesas',
    },
    {
      title: 'Vajilla y Cristalería',
      description:
        'Platos, copas, cubiertos y mantelería de alta calidad para eventos elegantes.',
      icon: Utensils,
      image: '/catalogo/vajilla.jpg',
      alt: 'Vajilla y cristalería elegante',
      href: '/servicios/vajilla',
    },
    {
      title: 'Climatización',
      description:
        'Equipos de aire acondicionado y calefacción para mantener el clima perfecto.',
      icon: Wind,
      image: '/catalogo/DSC_2048.JPG',
      alt: 'Sistemas de climatización',
      href: '/servicios/climatizacion',
    },
    {
      title: 'Vallas y Cerramientos',
      description: 'Eventos masivos seguros y organizados.',
      icon: Fence,
      image: '/catalogo/vallas.jpg',
      alt: 'Vallas y cerramientos',
      href: '/servicios', // Por ahora redirige a la página general de servicios
    },
  ];

  return (
    <section id="servicios" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center  mb-6 md:mb-16">
          <h2 className="text-xl md:text-4xl font-semibold text-gray-900 mb-4">
            Nuestro Equipamiento
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para tu evento en un solo lugar
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          {/* Servicios principales - 6 columnas cada uno */}
          {mainServices.map((service) => (
            <Card
              key={service.title}
              className="lg:col-span-6 overflow-hidden group relative hover:shadow-xl transition-shadow "
            >
              <div className="relative h-96 overflow-hidden rounded-lg flex flex-col group-hover:shadow-xl transition-shadow p-4">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90" />
                <div className="relative z-10 flex flex-col-reverse md:flex-row justify-between">
                  {/* Título en la esquina superior izquierda */}
                  <div className="text-left flex items-center">
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  {/* Badge especial en la esquina superior derecha */}
                  <div className="hidden md:flex md:justify-end transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <Badge className="bg-yellow-400 hover:bg-yellow-300 hover:text-gray-900 text-gray-900 text-xs uppercase font-semibold tracking-wide rounded-full px-3 py-1 h-fit">
                      {service.title === 'Carpas y Gazebos'
                        ? 'Resistente a lluvias'
                        : 'Grandes eventos'}
                    </Badge>
                  </div>
                </div>
                {/* Espacio flexible para empujar contenido hacia abajo */}
                <div className="flex-1"></div>

                {/* Contenido inferior - texto y botones siempre visibles en mobile */}
                <div className="relative z-10 h-24 flex gap-4 flex-col justify-end">
                  {/* Descripción - siempre visible en mobile, oculta en hover solo en desktop */}
                  <div className="md:group-hover:opacity-0 transition-opacity duration-300">
                    <p className="text-gray-200 text-sm text-left break-words hyphens-auto">
                      {service.description}
                    </p>
                  </div>
                  {/* Botones - siempre visibles en mobile, por encima del texto en hover solo en desktop */}
                  <div className="flex flex-row gap-2 w-full justify-center items-end md:absolute md:inset-0 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={service.href}
                      className="px-4 py-2 border w-full text-center border-white text-white font-semibold rounded hover:bg-white hover:text-gray-900 transition-colors"
                    >
                      <span className="md:hidden">Trabajos</span>
                      <span className="hidden md:inline">Ver Trabajos</span>
                    </Link>
                    <a
                      href="#cotizar"
                      className="px-4 py-2 bg-yellow-400 text-gray-900 font-bold rounded hover:bg-yellow-300 transition-colors w-full text-center"
                    >
                      <span className="md:hidden">Cotizar</span>
                      <span className="hidden md:inline">Cotizar Ahora</span>
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
              <div className="relative h-64 md:h-auto md:aspect-square overflow-hidden flex flex-col group-hover:shadow-xl transition-shadow p-4">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90" />
                {/* Título en la esquina superior izquierda */}
                <div className="relative z-10 text-left">
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                </div>

                {/* Espacio flexible para empujar contenido hacia abajo */}
                <div className="flex-1"></div>

                {/* Contenido inferior - texto y botones siempre visibles en mobile */}
                <div className="relative z-10 flex h-fit gap-3 flex-col justify-end">
                  {/* Descripción - siempre visible en mobile, oculta en hover solo en desktop */}
                  <div className="md:group-hover:opacity-0 transition-opacity duration-300">
                    <p className="text-gray-200 text-sm text-left break-words hyphens-auto">
                      {service.description}
                    </p>
                  </div>
                  {/* Botones - siempre visibles en mobile, por encima del texto en hover solo en desktop */}
                  <div className="flex flex-row gap-2 w-full justify-center items-end md:absolute md:inset-x-0 md:bottom-0 md:h-fit md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={service.href}
                      className="w-full px-4 py-2 border border-white text-white font-semibold rounded hover:bg-white hover:text-gray-900 transition-colors text-center"
                    >
                      <span className="md:hidden">Catálogo</span>
                      <span className="hidden md:inline">Catálogo</span>
                    </Link>
                    <a
                      href="#cotizar"
                      className="w-full px-4 py-2 bg-yellow-400 text-gray-900 font-bold rounded hover:bg-yellow-300 transition-colors text-center"
                    >
                      <span className="md:hidden">Cotizar</span>
                      <span className="hidden md:inline">Cotizar</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Botón adicional para ver todos los servicios */}
        <div className="text-center mt-8">
          <Link href="/servicios">
            <Button className="bg-[#003056] hover:bg-[#002040] text-white px-8 py-3">
              Ver Todos los Servicios
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

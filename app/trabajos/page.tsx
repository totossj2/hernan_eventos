'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from '@/components/ui/carousel';
import Form from '@/components/sections/SimpleForm';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

// Objeto constante con las imágenes y pies de foto para el carrusel
const GALLERY_DATA = [
  {
    id: 1,
    image: {
      mobile: '/catalogo/carpa.webp',
      desktop: '/catalogo/carpa.webp',
      alt: 'Montaje de carpas para eventos corporativos',
    },
    caption:
      'Montaje de carpas para eventos corporativos con iluminación profesional',
  },
  {
    id: 2,
    image: {
      mobile: '/catalogo/escenario_mobile.jpg',
      desktop: '/catalogo/escenario.jpg',
      alt: 'Escenarios modulares para presentaciones',
    },
    caption:
      'Escenarios modulares para presentaciones y espectáculos en espacios abiertos',
  },
  {
    id: 3,
    image: {
      mobile: '/catalogo/sillasymesas_mobile.webp',
      desktop: '/catalogo/sillasymesas.webp',
      alt: 'Mobiliario completo para banquetes',
    },
    caption:
      'Mobiliario completo para banquetes y eventos sociales con capacidad para 200 personas',
  },
  {
    id: 4,
    image: {
      mobile: '/catalogo/vajilla_mobile.webp',
      desktop: '/catalogo/vajilla.webp',
      alt: 'Servicio de vajilla premium',
    },
    caption:
      'Servicio de vajilla premium para eventos de alta gama y celebraciones especiales',
  },
  {
    id: 5,
    image: {
      mobile: '/catalogo/vallas_mobile.webp',
      desktop: '/catalogo/vallas.webp',
      alt: 'Sistemas de vallado y seguridad',
    },
    caption:
      'Sistemas de vallado y seguridad para eventos masivos y festivales al aire libre',
  },
];

// Hook optimizado para detectar si es mobile con debounce
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificar al montar
    checkIsMobile();

    // Debounce para evitar muchos re-renders
    let timeoutId: NodeJS.Timeout;
    const debouncedCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkIsMobile, 100);
    };

    // Escuchar cambios de tamaño con debounce
    window.addEventListener('resize', debouncedCheck);

    return () => {
      window.removeEventListener('resize', debouncedCheck);
      clearTimeout(timeoutId);
    };
  }, []);

  return isMobile;
}

export default function Home() {
  const isMobile = useIsMobile();
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col gap-8 pt-20">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Nuestros Trabajos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eventos que confiaron en nosotros
          </p>
        </div>
        <div className="w-full lg:px-16">
          <Carousel
            className="w-full"
            plugins={[autoplayPlugin.current]}
            onMouseEnter={() => autoplayPlugin.current.stop()}
            onMouseLeave={() => autoplayPlugin.current.play()}
            opts={{ loop: true }}
          >
            <CarouselContent>
              {GALLERY_DATA.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="w-full">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative w-full h-[400px] md:h-[600px] 2xl:h-[700px]">
                          {isMobile ? (
                            <Image
                              src={item.image.mobile}
                              alt={item.image.alt}
                              fill
                              className="object-cover"
                              sizes="100vw"
                              priority={item.id === 1}
                            />
                          ) : (
                            <Image
                              src={item.image.desktop}
                              alt={item.image.alt}
                              fill
                              className="object-cover"
                              sizes="100vw"
                              priority={item.id === 1}
                            />
                          )}
                        </div>
                        <div className="p-4 bg-white">
                          <p className="text-center text-gray-700 font-medium">
                            {item.caption}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
            <CarouselDots />
          </Carousel>
        </div>
        <Form />
      </main>
      <Footer />
    </div>
  );
}

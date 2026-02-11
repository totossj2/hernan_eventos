'use client';

import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const images = [
  {
    src: '/trabajos/carpas/casamiento.webp',
    alt: 'Casamiento - Carpa para evento',
  },
  {
    src: '/trabajos/carpas/four_paws_aerea.webp',
    alt: 'Carpa 8x36m - Four Paws',
  },
  {
    src: '/trabajos/escenarios/andamio_tanque_MG.jpg',
    alt: 'Escenario con andamio y tanque',
  },
  {
    src: '/trabajos/escenarios/Escenario_amat.jpg',
    alt: 'Escenario Amat',
  },
  {
    src: '/trabajos/escenarios/escenario_brown.jpg',
    alt: 'Escenario Brown',
  },
];

export function WhoWeAre() {
  return (
    <section id="nosotros" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center  mx-auto">
          {/* Columna de texto (desktop) */}
          <div className="space-y-6 mb-6 md:mb-16">
            <h2 className="text-xl md:text-4xl font-semibold text-gray-900">
              Confianza y Experiencia para tu Evento
            </h2>
            <div className="w-20 h-1 bg-[#003056]"></div>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl">
              En Ferrario Structures no solo alquilamos equipos; diseñamos y
              montamos{' '}
              <strong>Infraestructura completa para eventos</strong> con la
              tranquilidad que da más de{' '}
              <strong>35 años en el rubro</strong>. Conocemos cada detalle para
              que tu evento sea un éxito, desde la planificación hasta el
              montaje profesional.
            </p>
          </div>

          {/* Carrusel de imágenes */}
          <div className="relative w-full">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="h-[450px] md:h-[500px]">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="pl-0">
                    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover rounded-lg"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4" />
              <CarouselNext className="right-2 md:right-4" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;

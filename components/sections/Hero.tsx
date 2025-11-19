'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import heroMobile from '@/public/hero_mobile.webp';
import dynamic from 'next/dynamic';

// Lazy load framer-motion to avoid LCP impact
const MotionText = dynamic(
  () =>
    import('framer-motion').then((mod) => ({
      default: ({
        textIndex,
        texts,
      }: {
        textIndex: number;
        texts: string[];
      }) => {
        const { motion, AnimatePresence } = mod;
        return (
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-sm md:text-base text-gray-300"
            >
              {texts[textIndex]}
            </motion.p>
          </AnimatePresence>
        );
      },
    })),
  {
    ssr: false,
    loading: () => (
      <p className="mt-4 text-sm md:text-base text-gray-300 opacity-0">
        ✅ Atención rápida por WhatsApp
      </p>
    ),
  }
);

// Array de imágenes del hero (fácil de extender)
const heroImages = {
  desktop: [
    '/hero_desktop.webp',
    // '/hero_desktop_2.webp',
    // '/hero_desktop_3.webp',
  ],
  mobile: [
    heroMobile,
    // Agregar más imágenes aquí cuando estén disponibles
    // heroMobile2,
  ],
};

export function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const texts = [
    '✅ Atención rápida por WhatsApp',
    '⏱️ Respondemos en menos de 1 hora',
  ];

  // Efecto para cambiar el texto
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((current) => (current === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Efecto para cambiar las imágenes con fade cada 4 segundos
  useEffect(() => {
    // Obtener el número máximo de imágenes entre desktop y mobile
    const maxImages = Math.max(
      heroImages.desktop.length,
      heroImages.mobile.length
    );

    // Solo iniciar el carrusel si hay más de una imagen
    if (maxImages <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setImageIndex((current) => (current + 1) % maxImages);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Función helper para obtener el índice de la siguiente imagen
  const nextImageIndex = (current: number, total: number) =>
    total > 1 ? (current + 1) % total : 0;

  return (
    <>
      <section
        id="hero"
        className="w-full h-[470px] md:h-[70vh] grid grid-cols-1 grid-rows-1 overflow-hidden"
      >
        {/* Contenedor de imágenes para desktop */}
        <div className="col-start-1 row-start-1 hidden md:block h-[470px] md:h-[70vh] relative">
          {heroImages.desktop.map((src, index) => {
            const isActive = index === imageIndex;
            const isNext =
              index === nextImageIndex(imageIndex, heroImages.desktop.length);

            return (
              <div
                key={`desktop-${index}`}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{
                  transitionDuration: '700ms',
                }}
              >
                <Image
                  src={src}
                  alt={`Evento elegante con carpas y decoración profesional ${
                    index + 1
                  }`}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover object-center"
                  priority={index === 0}
                  fetchPriority={index === 0 ? 'high' : isNext ? 'high' : 'low'}
                  sizes="100vw"
                  quality={85}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            );
          })}
        </div>

        {/* Contenedor de imágenes para mobile */}
        <div className="col-start-1 row-start-1 block md:hidden h-[470px] md:h-[70vh] relative">
          {heroImages.mobile.map((src, index) => {
            const isActive = index === imageIndex;
            const isNext =
              index === nextImageIndex(imageIndex, heroImages.mobile.length);

            return (
              <div
                key={`mobile-${index}`}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{
                  transitionDuration: '700ms',
                }}
              >
                <Image
                  src={src}
                  alt={`Evento elegante con carpas y decoración profesional ${
                    index + 1
                  }`}
                  width={360}
                  height={670}
                  className="w-full h-full object-cover"
                  priority={index === 0}
                  fetchPriority={index === 0 ? 'high' : isNext ? 'high' : 'low'}
                  sizes="100vw"
                  quality={85}
                  placeholder={index === 0 ? 'blur' : undefined}
                  blurDataURL={index === 0 ? '/tiny-hero.webp' : undefined}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            );
          })}
        </div>

        {/* Gradiente overlay */}
        <div className="col-start-1 row-start-1 bg-gradient-to-r from-black/40 via-black/60 to-black/60 h-[470px] md:h-[70vh] z-20" />

        {/* Contenido centrado */}
        <div className="col-start-1 row-start-1 flex items-center justify-center text-center text-white max-w-4xl mx-auto px-4 py-4 h-[470px] md:h-[70vh] z-30 relative">
          <div>
            <h1 className=" text-2xl md:text-6xl font-semibold mb-6 leading-tight">
              Alquiler de Carpas y Escenarios con 35 Años de Experiencia
            </h1>
            <p className="text-base md:text-2xl mb-8 text-gray-200">
              Montajes seguros para eventos de 80 a 3.000 personas en Buenos
              Aires. <br></br>
              Proveedor de municipios, empresas y eventos sociales.{' '}
            </p>
            <div className="flex flex-col md:flex-row gap-2 justify-center w-full max-w-lg md:max-w-xl mx-auto">
              {' '}
              <a
                href="https://wa.me/5491160939880?text=Hola%2C%20quiero%20más%20info%20sobre%20los%20servicios%20de%20eventos"
                target="_blank"
                className="flex-1"
              >
                <Button
                  size="lg"
                  className="w-full bg-[#003056] border border-[#003056] hover:bg-green-500 hover:border-green-500 transition-all duration-300 ease-in-out text-lg px-8 py-4 flex items-center justify-center gap-3"
                >
                  <Image
                    src="/whatsapp.svg"
                    alt="WhatsApp"
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                  COTIZAR AHORA
                </Button>
              </a>
              <a href="/trabajos" className="flex-1 hidden">
                <Button
                  size="lg"
                  className="w-full border border-white  bg-black/30 text-white hover:bg-white hover:text-[#002040] transition-all duration-300 ease-in-out text-lg px-8 py-4"
                >
                  Ver Nuestros Trabajos
                </Button>
              </a>
            </div>

            <MotionText textIndex={textIndex} texts={texts} />
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import heroMobile from '@/public/hero/hero_mobile.webp';
import dynamic from 'next/dynamic';
import { trackContactWithTime } from '@/lib/tracking';

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
    '/hero/hero_desktop.webp',
    '/hero/hero_desktop_2.webp',
    '/hero/hero_desktop_3.webp',
  ],
  mobile: [
    heroMobile,
    '/hero/hero_mobile_3.webp',
    '/hero/hero_mobile_2.webp'

  ],
};

export function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  const texts = [
    '⚠️ Solo 5 fechas disponibles en Junio',
    '🎁 15% OFF si señás esta semana',
    '⏰ Reservá antes que se agote tu fecha'
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(media.matches);

    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  // Efecto para cambiar el texto
  useEffect(() => {
    if (reduceMotion) return;
    if (texts.length <= 1) return;

    const interval = setInterval(() => {
      setTextIndex((current) => (current + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reduceMotion, texts.length]);

  // Efecto para cambiar las imágenes con fade cada 4 segundos
  useEffect(() => {
    if (reduceMotion) return;

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
    }, 6000);

    return () => clearInterval(interval);
  }, [reduceMotion]);

  // Función helper para obtener el índice de la siguiente imagen
  const nextImageIndex = (current: number, total: number) =>
    total > 1 ? (current + 1) % total : 0;

  return (
    <>
      <section id="hero" className="relative block w-full min-h-0 bg-[#00142b] md:min-h-[90svh] md:!flex">
        {/* Contenedor de imágenes para desktop */}
        <div className="absolute inset-0 hidden md:block">
          {heroImages.desktop.map((src, index) => {
            const activeIndex =
              heroImages.desktop.length > 0
                ? imageIndex % heroImages.desktop.length
                : 0;
            const isActive = index === activeIndex;
            const isNext =
              index === nextImageIndex(activeIndex, heroImages.desktop.length);

            return (
              <div
                key={`desktop-${index}`}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                style={{
                  transitionDuration: '700ms',
                }}
              >
                <Image
                  src={src}
                  alt={`Evento elegante con carpas y decoración profesional ${index + 1
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
        <div className="relative h-[36svh] block md:hidden">

          {heroImages.mobile.map((src, index) => {
            const activeIndex =
              heroImages.mobile.length > 0 ? imageIndex % heroImages.mobile.length : 0;
            const isActive = index === activeIndex;
            const isNext =
              index === nextImageIndex(activeIndex, heroImages.mobile.length);

            return (
              <div
                key={`mobile-${index}`}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                style={{
                  transitionDuration: '700ms',
                }}
              >
                <Image
                  src={src}
                  alt={`Evento elegante con carpas y decoración profesional ${index + 1
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#00142b] via-[#00142b]/20 to-transparent z-20" />
        </div>

        {/* Gradiente overlay */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/40 via-black/60 to-black/60 z-20" />

        {/* Contenido centrado desktop */}
        <div className="relative z-30 hidden md:flex items-center justify-center text-center text-white max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14">
          <div className="max-w-4xl lg:max-w-5xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-3 md:mb-4 leading-tight md:leading-tight">
              De Espacio Vacío a Evento Listo en{' '}
              <span className="text-[#f26b00] drop-shadow-[0_0_6px_rgba(242,107,0,0.85)]">
                24 Horas
              </span>
            </h1>
            {/* SUBHEADLINE (lo que ofrecés) */}

            {/* DESCRIPCIÓN (credibilidad + target) */}
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-7 lg:mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed md:leading-8">
              Un solo proveedor. Alquiler y montaje de carpas, escenarios, vallas y mobiliario. Para eventos de 80 a 6.000 personas en Buenos Aires.  <br className="hidden md:block" /><span className='md:hidden'> </span>
              35 años equipando eventos corporativos, municipios, fiestas y casamientos.
            </p>
            <div className="flex flex-col md:flex-row gap-3 justify-center w-full max-w-lg md:max-w-xl mx-auto">              {' '}
              <a
                href="https://wa.me/5491160939880?text=Hola%20Hernan,%20me%20interesa%20cotizar%20mi%20evento"
                target="_blank"
                className="w-full md:w-auto md:flex-1"
                onClick={() => trackContactWithTime('whatsapp_click', 'hero', { button_text: 'Cotizá tu evento por WhatsApp' })}
              >
                <Button
                  size="lg"
                  className="bg-[#f26b00] hover:bg-[#D95F00] border-2 border-[#f26b00] hover:border-[#B84F00] transition-all duration-300 ease-in-out text-lg md:text-xl font-semibold shadow-2xl hover:drop-shadow-[0_0_10px_rgba(242,107,0,0.85)] w-full md:w-auto md:min-w-[280px] rounded-full"
                >
                  Cotizá tu evento por WhatsApp
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

        {/* Contenido en bloque separado mobile */}
        <div className="md:hidden relative z-30 bg-[#00142b] text-white text-center px-4 py-8 pt-0 md:pt-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold mb-3 leading-tight text-start">
              De Espacio Vacío a Evento Listo en <span className="text-[#f26b00] drop-shadow-[0_0_6px_rgba(242,107,0,0.85)]">24 Horas</span>
            </h1>

            <ul className="text-base mb-6 text-gray-100 max-w-3xl mx-auto leading-relaxed text-start space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#f26b00] font-semibold">✓</span>
                <span className="text-[#ffffff]">Alquiler y montaje de carpas, escenarios, vallas y mobiliario.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f26b00] font-semibold">✓</span>
                <span className="text-[#ffffff]">Un solo proveedor.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f26b00] font-semibold">✓</span>
                <span className="text-[#ffffff]">Para eventos de 80 a 6.000 personas en Buenos Aires.</span>
              </li>
            </ul>

            <div className="flex flex-col gap-3 justify-center w-full max-w-lg mx-auto">
              <a
                href="https://wa.me/5491160939880?text=Hola%20Hernan,%20me%20interesa%20cotizar%20mi%20evento"
                target="_blank"
                className="w-full"
                onClick={() => trackContactWithTime('whatsapp_click', 'hero', { button_text: 'Cotizá tu evento por WhatsApp' })}
              >
                <Button
                  size="lg"
                  className="bg-[#f26b00] hover:bg-[#D95F00] border-2 border-[#f26b00] hover:border-[#B84F00] transition-all duration-300 ease-in-out text-lg font-semibold shadow-2xl w-full rounded-full"
                >
                  Cotizá tu evento por WhatsApp
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

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

export function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    '✅ Atención rápida por WhatsApp',
    '⏱️ Respondemos en menos de 1 hora',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((current) => (current === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="hero"
        className="w-full h-[670px] md:h-[90vh] grid grid-cols-1 grid-rows-1 overflow-hidden"
      >
        {/* Imagen de fondo para desktop */}
        <div className="col-start-1 row-start-1 hidden md:block h-[670px] md:h-[90vh]">
          <Image
            src="/hero_desktop.webp"
            alt="Evento elegante con carpas y decoración profesional"
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-center"
            priority
            sizes="100vw"
            quality={85}
          />
        </div>

        {/* Imagen de fondo para mobile */}
        <div className="col-start-1 row-start-1 block md:hidden h-[670px] md:h-[90vh]">
          <Image
            src={heroMobile}
            alt="Evento elegante con carpas y decoración profesional"
            width={360}
            height={670}
            className="w-full h-full object-cover"
            priority
            sizes="100vw"
            quality={85}
            placeholder="blur"
            blurDataURL="/tiny-hero.webp"
          />
        </div>

        {/* Gradiente overlay */}
        <div className="col-start-1 row-start-1 bg-gradient-to-r from-black/40 via-black/60 to-black/60 h-[670px] md:h-[90vh]" />

        {/* Contenido centrado */}
        <div className="col-start-1 row-start-1 flex items-center justify-center text-center text-white max-w-4xl mx-auto px-4 py-4 h-[670px] md:h-[90vh]">
          <div>
            <h1 className=" text-3xl md:text-6xl font-semibold mb-6 leading-tight">
              Alquiler de Carpas y Escenarios con 35 Años de Experiencia y
              Garantía
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-gray-300">
              Brindamos soluciones seguras y profesionales para tu evento.
              Cotizá gratis con un asesor especializado.
            </p>
            <div className="flex flex-col md:flex-row gap-2 justify-center w-full max-w-lg md:max-w-xl mx-auto">
              {' '}
              <a
                href="https://wa.me/5491160939880?text=Hola%2C%20quiero%20más%20info%20sobre%20los%20servicios%20de%20eventos"
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

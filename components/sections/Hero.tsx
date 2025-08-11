'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CLIENTS } from '@/lib/constants';
import { StarIcon } from 'lucide-react';

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
        className="relative h-[50vh] md:h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/60 to-black/60 z-10" />

        <Image
          src="/hero_desktop.webp"
          alt="Evento elegante con carpas y decoración profesional"
          fill
          className="object-cover object-center hidden md:block"
          priority
        />
        <Image
          src="/hero_mobile.webp"
          alt="Evento elegante con carpas y decoración profesional"
          fill
          className="object-cover  block md:hidden"
          priority
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className=" text-2xl md:text-6xl font-semibold mb-6 leading-tight">
            La infraestructura para tu evento, resuelta.
            <br />
            Calidad y puntualidad en GBA y CABA
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-300">
            Calefacción, vajilla, sillas, carpas y más, entregado a tiempo y
            listo para usar.{' '}
          </p>
          <a href="https://wa.me/5491160939880?text=Hola%2C%20quiero%20más%20info%20sobre%20los%20servicios%20de%20eventos">
            <Button
              size="lg"
              className="bg-[#003056] hover:bg-[#002040] text-lg px-8 py-4"
            >
              Cotizar mi Evento Ahora
            </Button>
          </a>
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
        </div>
      </section>
      {/* Logos de clientes */}
      <section className="bg-gray-100 py-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 px-4">
            <div className="flex flex-row items-center gap-8">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Clientes que confían en nosotros
                </h2>
                <div className="flex flex-row items-center gap-2">
                  <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-sm text-gray-700">
                  35 años de experiencia en el rubro - más de 1.000 eventos
                  realizados
                </p>
              </div>
              <div className="hidden md:block w-[2px] h-2/3 bg-gray-300 rounded-full" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center w-full">
              {CLIENTS.map((client, index) => (
                <motion.div
                  key={`logo-${index}`}
                  className="flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={120}
                    height={60}
                    className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

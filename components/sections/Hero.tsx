'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CLIENTS } from '@/lib/constants';
import { StarIcon } from 'lucide-react';
import heroMobile from '@/public/hero_mobile.webp';
// Removed framer-motion for better performance

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
        <div className="col-start-1 row-start-1 hidden md:block">
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
        <div className="col-start-1 row-start-1 block md:hidden">
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
        <div className="col-start-1 row-start-1 bg-gradient-to-r from-black/40 via-black/60 to-black/60" />

        {/* Contenido centrado */}
        <div className="col-start-1 row-start-1 flex items-center justify-center text-center text-white max-w-4xl mx-auto px-4 py-4">
          <div>
            <h1 className=" text-2xl md:text-6xl font-semibold mb-6 leading-tight">
              Alquiler de Carpas y Equipamiento para Eventos en Zona Norte y
              todo GBA
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-gray-300">
              Montamos tu evento con puntualidad y calidad profesional. Desde
              carpas, escenarios y climatización hasta vajilla, sillas y mesas,
              listo para usar
            </p>
            <a href="https://wa.me/5491160939880?text=Hola%2C%20quiero%20más%20info%20sobre%20los%20servicios%20de%20eventos">
              <Button
                size="lg"
                className="bg-[#003056] hover:bg-[#002040] text-lg px-8 py-4"
              >
                Cotizar mi Evento Ahora
              </Button>
            </a>
            <div className="mt-4 h-6 relative overflow-hidden">
              <div
                className="absolute inset-0 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateY(-${textIndex * 24}px)`,
                }}
              >
                {texts.map((text, index) => (
                  <div
                    key={index}
                    className="text-sm md:text-base text-gray-300 h-6 flex items-center"
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Logos de clientes */}
      <section className="bg-gray-100 py-12">
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
              <div className="hidden md:block w-[2px] h-full bg-gray-300 rounded-full" />
            </div>

            <div className="grid grid-cols-2  lg:grid-cols-4  gap-x-8 gap-y-4 items-center w-full">
              {CLIENTS.map((client, index) => (
                <div
                  key={`logo-${index}`}
                  className="flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={120}
                    height={60}
                    className="opacity-100 md:opacity-70 group-hover:opacity-100 transition-all duration-300 md:grayscale group-hover:grayscale-0"
                  />
                  {/* Client name with fade in */}
                  <div className="mt-2 h-10 overflow-hidden">
                    <p className="text-xs text-gray-600 text-center font-medium transform translate-y-2 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {client.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

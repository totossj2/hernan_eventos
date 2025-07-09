"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "✅ Atención rápida por WhatsApp",
    "⏱️ Respondemos en menos de 1 hora",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((current) => (current === 0 ? 1 : 0));
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-[50vh] md:h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute  inset-0 bg-gradient-to-r from-black/80 to-black/75 z-10" />

      <Image
        src="/hero_desktop.jpeg"
        alt="Evento elegante con carpas y decoración profesional"
        fill
        className="object-cover object-center hidden md:block"
        priority
      />
      <Image
        src="/hero_mobile.jpeg"
        alt="Evento elegante con carpas y decoración profesional"
        fill
        className="object-cover  block md:hidden"
        priority
      />
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Equipamiento de calidad para eventos inolvidables en GBA y CABA
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Calefacción, vajilla, sillas, carpas y más, entregado a tiempo y listo
          para usar.{" "}
        </p>
        <a href="https://wa.me/5491160939880?text=Hola%2C%20quiero%20más%20info%20sobre%20los%20servicios%20de%20eventos">
          <Button
            size="lg"
            className="bg-[#003056] hover:bg-[#002040] text-lg px-8 py-4"
          >
            Solicitar Presupuesto
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
  );
}

'use client';

import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import { CONTACT } from '@/lib/constants';

interface HeroServicesProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  buttonHref?: string;
}

export function HeroServices({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  buttonHref = CONTACT.whatsapp,
}: HeroServicesProps) {
  return (
    <section className="w-full h-[470px] md:h-[70vh] grid grid-cols-1 grid-rows-1 overflow-hidden pt-16 relative z-10">
      {/* Imagen de fondo */}
      <div className="col-start-1 row-start-1 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={85}
        />
      </div>

      {/* Gradiente overlay */}
      <div className="col-start-1 row-start-1 bg-gradient-to-r from-black/40 via-black/60 to-black/60 z-10" />

      {/* Contenido centrado */}
      <div className="col-start-1 row-start-1 flex items-center justify-center text-center text-white max-w-4xl mx-auto px-4 py-4 z-20">
        <div>
          <h1 className="text-3xl md:text-6xl font-semibold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-300">{subtitle}</p>
          <p className="text-base md:text-base font-semibold mb-8 text-gray-300">
            {description}
          </p>

          <div className="flex flex-col md:flex-row gap-2 justify-center w-full max-w-lg md:max-w-xl mx-auto">
            <a
              href="https://wa.me/5491160939880?text=Hola%2C%20quiero%20más%20info%20sobre%20los%20servicios%20de%20eventos"
              className="flex-1"
            >
              <Button
                size="lg"
                className="w-fit mx-auto bg-[#003056] border border-[#003056] hover:bg-green-500 hover:border-green-500 transition-all duration-300 ease-in-out text-lg px-8 py-4 flex items-center justify-center gap-3"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  width={25}
                  height={25}
                  className="object-contain"
                />
                {buttonText}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

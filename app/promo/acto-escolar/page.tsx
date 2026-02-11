import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroServices } from '@/components/sections/HeroServices';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import {
  SERVICE_DATA,
  CONTACT,
  DATOS_PRACTICOS,
  TRABAJOS_ESCENARIOS,
} from '@/lib/constants';
import React from 'react';
import SimpleForm from '@/components/sections/SimpleForm';

export const metadata: Metadata = {
  title:
    'Alquiler de Escenarios para Actos Escolares | Ferrario Structures — Infraestructura completa para eventos',
  description:
    'Escenarios reforzados y sillas plásticas para actos escolares en colegios de GBA y CABA. Infraestructura completa para eventos con montaje rápido, seguro y puntual. Cotizá por WhatsApp.',
  keywords: [
    'alquiler escenario escolar',
    'tarima acto fin de año',
    'escenario colegio gba',
    'alquiler tarimas',
    'alquiler escenarios',
  ],
  openGraph: {
    title:
      'Alquiler de Escenarios para Actos Escolares | Ferrario Structures — Infraestructura completa para eventos',
    description:
      'Escenarios reforzados y sillas plásticas para actos escolares en GBA y CABA. Montaje rápido, seguro y puntual.',
    url: 'https://ferrariostructures.com.ar/promo/acto-escolar',
    images: [
      {
        url: 'https://ferrariostructures.com.ar/trabajos/tarimas/escenario_NT_aerea.webp',
        width: 1200,
        height: 630,
        alt: 'Escenario para acto escolar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alquiler de Escenarios para Actos Escolares | Ferrario Structures — Infraestructura completa para eventos',
    description:
      'Escenarios reforzados y sillas plásticas para actos escolares en GBA y CABA.',
    images: ['https://ferrariostructures.com.ar/trabajos/tarimas/escenario_NT_aerea.webp'],
  },
  alternates: {
    canonical: 'https://ferrariostructures.com.ar/promo/acto-escolar',
  },
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />

      <HeroServices
        title="Alquiler de Escenarios para Actos Escolares"
        subtitle="Escenario, sillas y gradas para actos de fin de año en colegios de GBA y CABA"
        description=""
        imageSrc="/trabajos/tarimas/escenario_NT_aerea.webp"
        imageAlt="Servicios de Eventos"
        buttonText="Cotizar por WhatsApp"
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-xl md:text-4xl font-semibold text-[#003056] mb-4">
              Datos prácticos del escenario
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Todo lo que necesitás saber para planificar el escenario de tu
              acto escolar sin sorpresas.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {DATOS_PRACTICOS.map((dato, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform duration-500 hover:border-l-[#f4c046] hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f4c046]">
                  {dato.badge}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-[#003056]">
                  {dato.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-gray-600">
                  {dato.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <div className="bg-[#f4c046] text-[#003056] rounded-xl px-6 py-4 text-center font-semibold shadow-md max-w-xl">
              Podés sumar gradas o sillas plásticas para el público del acto.
              Entregamos todo junto.
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Trabajos Realizados */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-xl md:text-4xl font-semibold text-[#003056] mb-4">
              Trabajos realizados
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Escenarios montados para actos escolares en colegios de GBA y CABA
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
            {TRABAJOS_ESCENARIOS.map((trabajo) => (
              <Card
                key={trabajo.id}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-gray-200 w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] lg:max-w-sm"
              >
                <CardContent className="p-0 relative">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={trabajo.image}
                      alt={trabajo.alt}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5 bg-white border-t border-gray-100">
                    <h3 className="text-base md:text-lg font-semibold text-[#003056] mb-2">
                      {trabajo.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {trabajo.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SimpleForm />

      {/* CTA Section */}
      <section className="py-20 bg-[#003056] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Querés cotizar un escenario para tu acto escolar?{' '}
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Enviá tu mensaje por WhatsApp y recibí el presupuesto en minutos.{' '}
          </p>
          <a href={CONTACT.whatsapp} target="_blank">
            <Button
              size="lg"
              className="bg-[#f4c046] hover:bg-[#e6b53a] text-[#003056] text-lg px-8 py-4"
            >
              <Phone className="h-5 w-5 mr-2" />
              Hablar con un Experto
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

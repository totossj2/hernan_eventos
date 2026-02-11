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
import { SERVICE_DATA } from '@/lib/constants';
import { CONTACT } from '@/lib/constants';
import React from 'react';
import SimpleForm from '@/components/sections/SimpleForm';

export const metadata: Metadata = {
  title:
    'Servicios de Alquiler para Eventos | Ferrario Structures — Infraestructura completa para eventos',
  description:
    'Servicios de alquiler de Infraestructura completa para eventos para fiestas, casamientos, eventos y proyectos en Buenos Aires: carpas industriales y beduinas, escenarios, tarimas, vajilla, living, mesas y sillas.',
  keywords: [
    'alquiler infraestructura temporal',
    'alquiler carpas industriales',
    'alquiler carpas beduinas',
    'alquiler living para eventos',
    'alquiler tarimas',
    'alquiler para casamientos',
    'servicios eventos gba',
    'alquiler completo eventos',
    'carpas escenarios mobiliario',
    'vajilla climatización eventos',
    'servicios integrales eventos',
    'Ferrario Structures servicios',
    'Infraestructura completa para eventos servicios',
  ],
  openGraph: {
    title:
      'Servicios Completos de Alquiler para Eventos | Ferrario Structures — Infraestructura completa para eventos',
    description:
      'Infraestructura completa para eventos para fiestas, casamientos, eventos y proyectos: carpas industriales y beduinas, escenarios, tarimas, vajilla, living y más.',
    url: 'https://ferrariostructures.com.ar/servicios',
    images: [
      {
        url: 'https://ferrariostructures.com.ar/catalogo/Servicios.webp',
        width: 1200,
        height: 630,
        alt: 'Servicios de Alquiler para Eventos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de Alquiler para Eventos | Ferrario Structures — Infraestructura completa para eventos',
    description:
      'Carpas industriales y beduinas, escenarios, tarimas, vajilla, living y más para eventos en Buenos Aires.',
    images: ['https://ferrariostructures.com.ar/catalogo/Servicios.webp'],
  },
  alternates: {
    canonical: 'https://ferrariostructures.com.ar/servicios',
  },
};

const services = [
  {
    key: 'carpas',
    name: 'Carpas y Gazebos',
    description: 'Disfrutá tu evento sin preocuparte por el clima',
    image: '/catalogo/carpa.webp',
    features: [
      'Múltiples tamaños',
      'Instalación profesional',
      'Resistente al clima',
    ],
  },
  {
    key: 'escenarios',
    name: 'Escenarios y Tarimas',
    description: 'Eleva tu evento al siguiente nivel',
    image: '/catalogo/escenario.jpg',
    features: [
      'Alturas ajustables',
      'Estructura segura',
      'Instalación profesional',
    ],
  },
  {
    key: 'mesas',
    name: 'Mesas y Sillas',
    description: 'Comodidad y elegancia para tus invitados',
    image: '/catalogo/sillasymesas.jpg',
    features: ['Múltiples estilos', 'Materiales premium', 'Entrega incluida'],
  },
  {
    key: 'vajilla',
    name: 'Vajilla y Cristalería',
    description: 'Elegancia en cada detalle',
    image: '/catalogo/vajilla.jpg',
    features: ['Porcelana premium', 'Cristalería fina', 'Limpieza incluida'],
  },
  {
    key: 'climatizacion',
    name: 'Sistemas de Climatización',
    description: 'Temperatura perfecta para tu evento todo el año',
    image: '/climatizacion/piramide.webp',
    features: [
      'Calefacción y aire acondicionado',
      'Múltiples potencias',
      'Seguridad garantizada',
    ],
  },
  {
    key: 'gradas',
    name: 'Gradas y Palcos',
    description:
      'Gradas y palcos seguros y personalizables, ideales para todo tipo de eventos y espectáculos',
    image: '/climatizacion/piramide.webp',
    features: [
      'Altura y tamaño personalizables',
      'Disponibles con y sin techo',
      'Estructura segura y resistente',
    ],
  },
  {
    key: 'vallas',
    name: 'Vallado y Cerramientos',
    description: 'Garantizamos seguridad y control de accesos para tu evento',
    image: '/climatizacion/piramide.webp',
    features: [
      'Eventos masivos seguros',
      'Adaptable a cualquier tipo de evento',
      'Vallas de alta resistencia y calidad profesional',
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Navbar />

      <HeroServices
        title="Nuestros Servicios"
        subtitle="Alquiler integral de carpas, escenarios y mobiliario para eventos en GBA y CABA"
        description="Más de 35 años de experiencia nos respaldan en la organización de eventos exitosos"
        imageSrc="/catalogo/Servicios.webp"
        imageAlt="Servicios de Eventos"
        buttonText="Consultar Servicios"
      />

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-4xl font-semibold text-[#003056] mb-4">
              ¿Qué ofrecemos?
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales que se complementan para que tu
              evento sea perfecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.key}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-[#003056]">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#f4c046] rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
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
            ¿No encontrás lo que buscás?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contáctanos para recibir asesoramiento personalizado y encontrar la
            solución perfecta para tu evento
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

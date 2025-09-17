import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICE_DATA } from '@/lib/constants';
import { CONTACT } from '@/lib/constants';
import React from 'react';

export const metadata: Metadata = {
  title: 'Servicios de Alquiler para Eventos | Hernán Eventos GBA',
  description:
    'Descubre nuestros servicios completos de alquiler para eventos: carpas, escenarios, mobiliario, vajilla y climatización en Gran Buenos Aires. Más de 35 años de experiencia.',
  keywords: [
    'servicios eventos gba',
    'alquiler completo eventos',
    'carpas escenarios mobiliario',
    'vajilla climatización eventos',
    'servicios integrales eventos',
    'Hernán Eventos servicios',
  ],
  openGraph: {
    title: 'Servicios Completos de Alquiler para Eventos | Hernán Eventos',
    description:
      'Soluciones integrales para eventos: carpas, escenarios, mobiliario, vajilla y climatización en GBA. Experiencia y profesionalismo garantizado.',
    url: 'https://hernaneventos.com/servicios',
    images: [
      {
        url: 'https://hernaneventos.com/catalogo/Servicios.webp',
        width: 1200,
        height: 630,
        alt: 'Servicios de Alquiler para Eventos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios Completos de Alquiler para Eventos',
    description:
      'Carpas, escenarios, mobiliario, vajilla y climatización para eventos en GBA.',
    images: ['https://hernaneventos.com/catalogo/Servicios.webp'],
  },
  alternates: {
    canonical: 'https://hernaneventos.com/servicios',
  },
};

const services = [
  {
    key: 'carpas',
    name: 'Carpas y Gazebos',
    description: 'Disfrutá tu evento sin preocuparte por el clima',
    image: '/catalogo/carpa.jpg',
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
      'Instalación profesional',
      'Seguridad garantizada',
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/catalogo/Servicios.webp"
            alt="Servicios de Eventos"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Soluciones completas para hacer de tu evento algo inolvidable
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Más de 35 años de experiencia nos respaldan en la organización de
            eventos exitosos
          </p>

          <a href={CONTACT.whatsapp} target="_blank">
            <Button
              size="lg"
              className="bg-[#003056] hover:bg-[#002040] text-lg px-8 py-4"
            >
              <Phone className="h-5 w-5 mr-2" />
              Consultar Servicios
            </Button>
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003056] mb-4">
              ¿Qué ofrecemos?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales que se complementan para que tu
              evento sea perfecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.key}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
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

                  <Link href={`/servicios/${service.key}`}>
                    <Button className="w-full bg-[#003056] hover:bg-[#002040]">
                      Ver Detalles
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

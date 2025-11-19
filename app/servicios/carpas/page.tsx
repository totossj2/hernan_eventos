import type { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { SERVICE_DATA } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Alquiler de Carpas y Gazebos | Ferrario Tents & Structures GBA',
  description:
    'Alquiler de carpas y gazebos para eventos en Gran Buenos Aires. Múltiples tamaños, instalación profesional y resistencia al clima. Más de 35 años de experiencia.',
  keywords: [
    'alquiler carpas gba',
    'alquiler gazebos zona norte',
    'carpas eventos zona sur',
    'alquiler carpas resistentes',
    'instalación carpas profesional',
    'carpas para eventos sociales',
    'Ferrario Tents & Structures carpas',
  ],
  openGraph: {
    title: 'Alquiler de Carpas y Gazebos | Ferrario Tents & Structures',
    description:
      'Carpas y gazebos profesionales para eventos en GBA. Instalación incluida y resistencia garantizada.',
    url: 'https://hernaneventos.com/servicios/carpas',
    images: [
      {
        url: 'https://hernaneventos.com/catalogo/carpa.jpg',
        width: 1200,
        height: 630,
        alt: 'Alquiler de Carpas y Gazebos para Eventos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alquiler de Carpas y Gazebos para Eventos',
    description: 'Carpas profesionales con instalación incluida en GBA.',
    images: ['https://hernaneventos.com/catalogo/carpa.jpg'],
  },
  alternates: {
    canonical: 'https://hernaneventos.com/servicios/carpas',
  },
};

export default function CarpasPage() {
  const serviceData = SERVICE_DATA.carpas;

  return (
    <ServiceLayout
      hero={serviceData.hero}
      products={serviceData.products}
      benefits={serviceData.benefits}
      testimonials={serviceData.testimonials}
      cta={serviceData.cta}
      serviceName="Carpas y Gazebos"
    />
  );
}

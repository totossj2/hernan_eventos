import type { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { SERVICE_DATA } from '@/lib/constants';

export const metadata: Metadata = {
  title:
    'Alquiler de Carpas y Gazebos | Ferrario Structures — Estructuras para eventos',
  description:
    'Alquiler de carpas para fiestas, casamientos, eventos y proyectos en Buenos Aires. Carpas industriales y estilo beduino con montaje profesional, seguro y puntual.',
  keywords: [
    'alquiler carpas industriales',
    'alquiler carpas beduinas',
    'carpas para casamientos',
    'carpas para fiestas',
    'alquiler carpas gba',
    'alquiler gazebos zona norte',
    'carpas eventos zona sur',
    'alquiler carpas resistentes',
    'instalación carpas profesional',
    'carpas para eventos sociales',
    'Ferrario Structures carpas',
    'Estructuras para eventos carpas',
  ],
  openGraph: {
    title:
      'Alquiler de Carpas y Gazebos | Ferrario Structures — Estructuras para eventos',
    description:
      'Carpas industriales y estilo beduino para fiestas, casamientos, eventos y proyectos en Buenos Aires. Instalación incluida y estructura segura.',
    url: 'https://ferrariostructures.com.ar/servicios/carpas',
    images: [
      {
        url: 'https://ferrariostructures.com.ar/catalogo/carpa.jpg',
        width: 1200,
        height: 630,
        alt: 'Alquiler de Carpas y Gazebos para Eventos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alquiler de Carpas y Gazebos | Ferrario Structures — Estructuras para eventos',
    description: 'Carpas industriales y estilo beduino con instalación incluida en Buenos Aires.',
    images: ['https://ferrariostructures.com.ar/catalogo/carpa.jpg'],
  },
  alternates: {
    canonical: 'https://ferrariostructures.com.ar/servicios/carpas',
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

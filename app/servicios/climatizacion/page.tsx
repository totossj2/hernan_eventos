import type { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { SERVICE_DATA } from '@/lib/constants';

export const metadata: Metadata = {
  title:
    'Sistemas de Climatización para Eventos | Ferrario Structures — Estructuras para eventos',
  description:
    'Alquiler de climatización para fiestas, casamientos y eventos en Buenos Aires. Calefacción y aire acondicionado con instalación profesional y seguridad garantizada.',
  keywords: [
    'alquiler calefacción para eventos',
    'alquiler aire acondicionado para eventos',
    'climatización eventos gba',
    'calefacción eventos zona norte',
    'aire acondicionado eventos',
    'alquiler calefactores eventos',
    'sistemas climatización profesional',
    'climatización eventos sociales',
    'Ferrario Structures climatización',
    'Estructuras para eventos climatización',
  ],
  openGraph: {
    title:
      'Sistemas de Climatización para Eventos | Ferrario Structures — Estructuras para eventos',
    description:
      'Calefacción y aire acondicionado para fiestas, casamientos y eventos en Buenos Aires. Instalación y seguridad garantizada.',
    url: 'https://ferrariostructures.com.ar/servicios/climatizacion',
    images: [
      {
        url: 'https://ferrariostructures.com.ar/climatizacion/piramide.webp',
        width: 1200,
        height: 630,
        alt: 'Sistemas de Climatización para Eventos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sistemas de Climatización para Eventos | Ferrario Structures — Estructuras para eventos',
    description:
      'Calefacción y aire acondicionado para eventos en Buenos Aires.',
    images: ['https://ferrariostructures.com.ar/climatizacion/piramide.webp'],
  },
  alternates: {
    canonical: 'https://ferrariostructures.com.ar/servicios/climatizacion',
  },
};

export default function ClimatizacionPage() {
  const serviceData = SERVICE_DATA.climatizacion;

  return (
    <ServiceLayout
      hero={serviceData.hero}
      products={serviceData.products}
      benefits={serviceData.benefits}
      testimonials={serviceData.testimonials}
      cta={serviceData.cta}
      serviceName="Sistemas de Climatización"
    />
  );
}

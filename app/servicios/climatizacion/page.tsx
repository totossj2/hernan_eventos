import type { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { SERVICE_DATA } from '@/lib/constants';

export const metadata: Metadata = {
  title:
    'Sistemas de Climatización para Eventos | Ferrario Tents & Structures GBA',
  description:
    'Alquiler de sistemas de climatización para eventos en Gran Buenos Aires. Calefacción y aire acondicionado, múltiples potencias, instalación profesional y seguridad garantizada.',
  keywords: [
    'climatización eventos gba',
    'calefacción eventos zona norte',
    'aire acondicionado eventos',
    'alquiler calefactores eventos',
    'sistemas climatización profesional',
    'climatización eventos sociales',
    'Ferrario Tents & Structures climatización',
  ],
  openGraph: {
    title:
      'Sistemas de Climatización para Eventos | Ferrario Tents & Structures',
    description:
      'Calefacción y aire acondicionado profesional para eventos en GBA. Instalación y seguridad garantizada.',
    url: 'https://hernaneventos.com/servicios/climatizacion',
    images: [
      {
        url: 'https://hernaneventos.com/climatizacion/piramide.webp',
        width: 1200,
        height: 630,
        alt: 'Sistemas de Climatización para Eventos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sistemas de Climatización para Eventos',
    description:
      'Calefacción y aire acondicionado profesional para eventos en GBA.',
    images: ['https://hernaneventos.com/climatizacion/piramide.webp'],
  },
  alternates: {
    canonical: 'https://hernaneventos.com/servicios/climatizacion',
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

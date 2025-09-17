import type { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { SERVICE_DATA } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Alquiler de Mesas y Sillas | Hernán Eventos GBA',
  description:
    'Alquiler de mesas y sillas para eventos en Gran Buenos Aires. Múltiples estilos, materiales premium y entrega incluida. Más de 35 años de experiencia.',
  keywords: [
    'alquiler mesas sillas gba',
    'alquiler mobiliario zona norte',
    'mesas sillas eventos zona sur',
    'alquiler mobiliario premium',
    'entrega mobiliario incluida',
    'mobiliario para eventos sociales',
    'Hernán Eventos mobiliario',
  ],
  openGraph: {
    title: 'Alquiler de Mesas y Sillas | Hernán Eventos',
    description:
      'Mobiliario premium para eventos en GBA. Múltiples estilos y entrega incluida.',
    url: 'https://hernaneventos.com/servicios/mesas',
    images: [
      {
        url: 'https://hernaneventos.com/catalogo/sillasymesas.jpg',
        width: 1200,
        height: 630,
        alt: 'Alquiler de Mesas y Sillas para Eventos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alquiler de Mesas y Sillas para Eventos',
    description: 'Mobiliario premium con entrega incluida en GBA.',
    images: ['https://hernaneventos.com/catalogo/sillasymesas.jpg'],
  },
  alternates: {
    canonical: 'https://hernaneventos.com/servicios/mesas',
  },
};

export default function MesasPage() {
  const serviceData = SERVICE_DATA.mesas;

  return (
    <ServiceLayout
      hero={serviceData.hero}
      products={serviceData.products}
      benefits={serviceData.benefits}
      testimonials={serviceData.testimonials}
      cta={serviceData.cta}
      serviceName="Mesas y Sillas"
    />
  );
}

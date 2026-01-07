import type { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { SERVICE_DATA } from '@/lib/constants';

export const metadata: Metadata = {
  title:
    'Alquiler de Mesas y Sillas | Ferrario Structures —Infraestructura técnica temporal',
  description:
    'Alquiler de mesas y sillas para fiestas, casamientos y eventos en Buenos Aires. Múltiples estilos, materiales premium y entrega coordinada.',
  keywords: [
    'alquiler mesas y sillas',
    'alquiler mobiliario para eventos',
    'mesas y sillas para casamientos',
    'alquiler mesas sillas gba',
    'alquiler mobiliario zona norte',
    'mesas sillas eventos zona sur',
    'alquiler mobiliario premium',
    'entrega mobiliario incluida',
    'mobiliario para eventos sociales',
    'Ferrario Structures mobiliario',
    'infraestructura técnica temporal mobiliario',
  ],
  openGraph: {
    title:
      'Alquiler de Mesas y Sillas | Ferrario Structures —Infraestructura técnica temporal',
    description:
      'Mesas y sillas para fiestas, casamientos y eventos en Buenos Aires. Múltiples estilos y entrega coordinada.',
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
    title: 'Alquiler de Mesas y Sillas | Ferrario Structures —Infraestructura técnica temporal',
    description: 'Mesas y sillas para eventos con entrega coordinada en Buenos Aires.',
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

import type { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { SERVICE_DATA } from '@/lib/constants';

export const metadata: Metadata = {
  title:
    'Alquiler de Vajilla y Cristalería | Ferrario Structures —Infraestructura técnica temporal',
  description:
    'Alquiler de vajilla y cristalería para fiestas, casamientos y eventos en Buenos Aires. Porcelana premium, cristalería fina y limpieza incluida.',
  keywords: [
    'alquiler vajilla para casamientos',
    'alquiler cristalería para eventos',
    'alquiler vajilla premium',
    'alquiler vajilla gba',
    'alquiler cristalería zona norte',
    'vajilla eventos zona sur',
    'alquiler porcelana premium',
    'cristalería fina eventos',
    'limpieza vajilla incluida',
    'Ferrario Structures vajilla',
    'infraestructura técnica temporal vajilla',
  ],
  openGraph: {
    title:
      'Alquiler de Vajilla y Cristalería | Ferrario Structures —Infraestructura técnica temporal',
    description:
      'Vajilla y cristalería premium para fiestas, casamientos y eventos en Buenos Aires. Porcelana fina y limpieza incluida.',
    url: 'https://hernaneventos.com/servicios/vajilla',
    images: [
      {
        url: 'https://hernaneventos.com/catalogo/vajilla.jpg',
        width: 1200,
        height: 630,
        alt: 'Alquiler de Vajilla y Cristalería para Eventos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alquiler de Vajilla y Cristalería | Ferrario Structures —Infraestructura técnica temporal',
    description: 'Vajilla y cristalería premium con limpieza incluida en Buenos Aires.',
    images: ['https://hernaneventos.com/catalogo/vajilla.jpg'],
  },
  alternates: {
    canonical: 'https://hernaneventos.com/servicios/vajilla',
  },
};

export default function VajillaPage() {
  const serviceData = SERVICE_DATA.vajilla;

  return (
    <ServiceLayout
      hero={serviceData.hero}
      products={serviceData.products}
      benefits={serviceData.benefits}
      testimonials={serviceData.testimonials}
      cta={serviceData.cta}
      serviceName="Vajilla y Cristalería"
    />
  );
}

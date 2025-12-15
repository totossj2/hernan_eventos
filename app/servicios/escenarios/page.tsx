import type { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { SERVICE_DATA } from '@/lib/constants';

export const metadata: Metadata = {
  title:
    'Alquiler de Escenarios y Tarimas | Ferrario Structures – Infraestructura técnica temporal GBA',
  description:
    'Alquiler de escenarios y tarimas para eventos en Gran Buenos Aires. Infraestructura técnica temporal con alturas ajustables, estructura segura e instalación profesional. Más de 35 años de experiencia.',
  keywords: [
    'alquiler escenarios gba',
    'alquiler tarimas zona norte',
    'escenarios eventos zona sur',
    'alquiler escenarios seguros',
    'instalación escenarios profesional',
    'escenarios para eventos sociales',
    'Ferrario Structures escenarios',
    'infraestructura técnica temporal escenarios',
  ],
  openGraph: {
    title:
      'Alquiler de Escenarios y Tarimas | Ferrario Structures – Infraestructura técnica temporal',
    description:
      'Escenarios y tarimas profesionales para eventos en GBA. Estructura segura e instalación incluida.',
    url: 'https://hernaneventos.com/servicios/escenarios',
    images: [
      {
        url: 'https://hernaneventos.com/catalogo/escenario.jpg',
        width: 1200,
        height: 630,
        alt: 'Alquiler de Escenarios y Tarimas para Eventos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alquiler de Escenarios y Tarimas para Eventos',
    description: 'Escenarios profesionales con estructura segura en GBA.',
    images: ['https://hernaneventos.com/catalogo/escenario.jpg'],
  },
  alternates: {
    canonical: 'https://hernaneventos.com/servicios/escenarios',
  },
};

export default function EscenariosPage() {
  const serviceData = SERVICE_DATA.escenarios;

  return (
    <ServiceLayout
      hero={serviceData.hero}
      products={serviceData.products}
      benefits={serviceData.benefits}
      testimonials={serviceData.testimonials}
      cta={serviceData.cta}
      serviceName="Escenarios y Tarimas"
    />
  );
}

import type { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { SERVICE_DATA } from '@/lib/constants';

export const metadata: Metadata = {
  title:
    'Alquiler de Escenarios y Tarimas | Ferrario Structures —Infraestructura técnica temporal',
  description:
    'Alquiler de escenarios y tarimas para fiestas, casamientos, eventos y proyectos en Buenos Aires. Estructuras seguras, alturas ajustables e instalación profesional.',
  keywords: [
    'alquiler escenarios',
    'alquiler tarimas',
    'escenario para casamiento',
    'tarima para eventos',
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
      'Alquiler de Escenarios y Tarimas | Ferrario Structures —Infraestructura técnica temporal',
    description:
      'Escenarios y tarimas para fiestas, casamientos, eventos y proyectos en Buenos Aires. Estructura segura e instalación incluida.',
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
    title: 'Alquiler de Escenarios y Tarimas | Ferrario Structures —Infraestructura técnica temporal',
    description: 'Escenarios y tarimas con estructura segura e instalación incluida en Buenos Aires.',
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

import type { Metadata } from 'next';
import './globals.css';
import { LenisProvider } from '@/components/providers/LenisProvider';

export const metadata: Metadata = {
  title:
    'Hernán Eventos | Alquiler de Carpas, Vajilla y Calefacción en Zona Norte y Sur GBA',
  description:
    'Ofrecemos alquiler de carpas, sillas, mesas, escenarios, calefacción, tarimas, vajilla y más para eventos en Zona Norte, Zona Sur y Gran Buenos Aires. Soluciones seguras, puntuales y profesionales para todo tipo de evento.',
  keywords: [
    'alquiler de carpas zona norte',
    'alquiler de carpas zona sur',
    'vajilla para eventos gba',
    'alquiler de calefacción para eventos',
    'alquiler de mesas y sillas',
    'eventos Gran Buenos Aires',
    'carpas para fiestas',
    'eventos zona norte gba',
    'eventos zona sur gba',
    'Hernán Eventos',
  ],
  authors: [{ name: 'Hernán Eventos', url: 'https://hernaneventos.com' }],
  creator: 'Hernán Eventos',
  publisher: 'Hernán Eventos',
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Hernán Eventos | Todo para tu Evento en Zona Norte y Zona Sur GBA',
    description:
      'Servicio profesional de alquiler de carpas, calefacción, vajilla, mesas y sillas en Gran Buenos Aires. Especialistas en eventos sociales y corporativos.',
    url: 'https://hernaneventos.com',
    siteName: 'Hernán Eventos',
    images: [
      {
        url: 'https://hernaneventos.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Carpas y calefacción para eventos en zona norte y sur',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hernán Eventos | Equipamiento para Eventos en GBA',
    description:
      'Alquiler de carpas, calefacción, vajilla y más para eventos en Zona Norte y Zona Sur.',
    images: ['https://hernaneventos.com/logo.png'],
  },
  alternates: {
    canonical: 'https://hernaneventos.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}

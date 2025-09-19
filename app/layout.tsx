import type { Metadata } from 'next';
import './globals.css';
import { LenisProvider } from '@/components/providers/LenisProvider';

export const metadata: Metadata = {
  title:
    'Hernán Eventos | Soluciones Confiables de Alquiler para tu Evento en GBA',
  description:
    'Hernán Eventos ofrece soluciones confiables de alquiler para todo tipo de evento. Carpas, escenarios, mobiliario, vajilla, climatización y más en Zona Norte, Zona Sur y Gran Buenos Aires. Puntualidad, seguridad y servicio profesional garantizado.',
  keywords: [
    'alquiler de carpas gba',
    'alquiler de carpas zona norte',
    'alquiler de carpas zona sur',
    'alquiler de escenarios gba',
    'mobiliario para eventos gba',
    'alquiler de vajilla zona norte',
    'alquiler de mesas y sillas gba',
    'climatización para eventos',
    'eventos en Gran Buenos Aires',
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
        url: 'https://hernaneventos.com/toscas.jpg',
        width: 1200,
        height: 630,
        alt: 'Soluciones Confiables de Alquiler para tu Evento',
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
    images: ['https://hernaneventos.com/toscas.jpg'],
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
    <html lang="es_AR">
      <head>
        {/* Google Tag Manager */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-53L66W4N');
            `,
          }}
        />
        {/* End Google Tag Manager */}
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Hernán Eventos',
              url: 'https://hernaneventos.com',
              logo: 'https://hernaneventos.com/logo.png',
              description:
                'Soluciones confiables de alquiler de carpas, escenarios, mobiliario y climatización en Gran Buenos Aires.',
              telephone: '(011) 6093-9880',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Bourquet 560, Luis Guillon',
                addressLocality: 'Gran Buenos Aires',
                addressRegion: 'Buenos Aires',
                addressCountry: 'AR',
              },
              sameAs: [
                'https://www.facebook.com/hernaneventos',
                'https://www.instagram.com/hernaneventos',
                'https://www.linkedin.com/company/hernaneventos',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Servicios de Alquiler para Eventos',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Alquiler de Carpas y Gazebos',
                      description:
                        'Carpas y gazebos para eventos con instalación profesional',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Alquiler de Escenarios y Tarimas',
                      description: 'Escenarios y tarimas con estructura segura',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Alquiler de Mesas y Sillas',
                      description: 'Mobiliario premium para eventos',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Alquiler de Vajilla y Cristalería',
                      description:
                        'Vajilla y cristalería premium con limpieza incluida',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Sistemas de Climatización',
                      description:
                        'Calefacción y aire acondicionado para eventos',
                    },
                  },
                ],
              },
              foundingDate: '1989',
              numberOfEmployees: '10-50',
              priceRange: '$$',
              serviceArea: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: -34.6037,
                  longitude: -58.3816,
                },
                geoRadius: '50000',
              },
            }),
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-53L66W4N"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}

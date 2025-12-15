import type { Metadata } from 'next';
import './globals.css';
import { DeferredScripts } from '@/components/DeferredScripts';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { CriticalCSS } from '@/components/CriticalCSS';
import { OptimizedScripts } from '@/components/OptimizedScripts';
import { SmartScriptLoader } from '@/components/SmartScriptLoader';
import { AsyncCSSLoaderScript } from '@/components/AsyncCSSLoader';
import { HeroPreloads } from '@/components/HeroPreloads';

// Optimize font loading with next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Ferrario Structures | Infraestructura técnica temporal para eventos',
  description:
    'Ferrario Structures ofrece soluciones confiables de infraestructura técnica temporal para todo tipo de evento. Carpas, escenarios, mobiliario, vajilla, climatización y más en Zona Norte, Zona Sur y Gran Buenos Aires. Puntualidad, seguridad y servicio profesional garantizado.',
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
    'Ferrario Structures',
    'infraestructura técnica temporal',
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  authors: [{ name: 'Ferrario Structures', url: 'https://hernaneventos.com' }],
  creator: 'Ferrario Structures',
  publisher: 'Ferrario Structures',
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
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
    title:
      'Ferrario Structures | Infraestructura técnica temporal para eventos en GBA',
    description:
      'Servicio profesional de alquiler de carpas, calefacción, vajilla, mesas y sillas en Gran Buenos Aires. Especialistas en eventos sociales y corporativos.',
    url: 'https://hernaneventos.com',
    siteName: 'Ferrario Structures',
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
    title:
      'Ferrario Structures | Infraestructura técnica temporal para eventos en GBA',
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
    <html lang="es_AR" className={inter.variable}>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        {/* Preload global critical resources */}
        <link rel="preload" href="/logo.webp" as="image" type="image/webp" />

        {/* Preload hero resources only on home page */}
        <HeroPreloads />

        {/* Critical CSS for Hero section */}
        <CriticalCSS />

        {/* Script to load CSS asynchronously - Must be in head before CSS loads */}
        <AsyncCSSLoaderScript />

        {/* Structured Data - Moved to body for better LCP */}
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

        {/* Structured Data - Loaded after initial render */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Ferrario Structures',
              url: 'https://hernaneventos.com',
              logo: 'https://hernaneventos.com/logo.webp',
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
        {children}

        {/* Google Tag Manager - Optimized with lazyOnload */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
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

        <DeferredScripts />
        <OptimizedScripts />
        <SmartScriptLoader />
      </body>
    </html>
  );
}

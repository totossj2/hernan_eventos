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
import { ScrollTracker } from '@/components/ScrollTracker';

// Optimize font loading with next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Ferrario Structures — Infraestructura completa para eventos',
  description:
    'Alquiler de Infraestructura completa para eventos para fiestas, casamientos, eventos y proyectos. Carpas industriales y beduinas, escenarios, tarimas, vajilla, living y más en Gran Buenos Aires. Montaje profesional, seguro y puntual.',
  keywords: [
    'alquiler infraestructura temporal',
    'Infraestructura completa para eventos',
    'alquiler para casamientos',
    'alquiler para fiestas',
    'alquiler para eventos corporativos',
    'alquiler para proyectos',
    'carpas industriales alquiler',
    'carpas beduinas alquiler',
    'alquiler living para eventos',
    'alquiler tarimas',
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
    'Infraestructura completa para eventos',
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  authors: [{ name: 'Ferrario Structures — Infraestructura completa para eventos', url: 'https://ferrariostructures.com.ar' }],
  creator: 'Ferrario Structures — Infraestructura completa para eventos',
  publisher: 'Ferrario Structures — Infraestructura completa para eventos',
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        url: '/favicon/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicon/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    title:
      'Ferrario Structures — Infraestructura completa para eventos',
    description:
      'Alquiler de Infraestructura completa para eventos: carpas industriales y beduinas, escenarios, tarimas, vajilla y living para fiestas, casamientos, eventos y proyectos en Buenos Aires.',
    url: 'https://ferrariostructures.com.ar',
    siteName: 'Ferrario Structures — Infraestructura completa para eventos',
    images: [
      {
        url: 'https://ferrariostructures.com.ar/toscas.webp',
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
      'Ferrario Structures — Infraestructura completa para eventos',
    description:
      'Carpas industriales y beduinas, escenarios, tarimas, vajilla y living para fiestas, casamientos, eventos y proyectos en Buenos Aires.',
    images: ['https://ferrariostructures.com.ar/toscas.webp'],
  },
  alternates: {
    canonical: 'https://ferrariostructures.com.ar',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={inter.variable}>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-32x32.png"
          sizes="32x32"
        />
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
              '@type': ['LocalBusiness', 'ProfessionalService', 'PartyEquipmentRentalService'],
              name: 'Ferrario Structures — Infraestructura completa para eventos',
              url: 'https://ferrariostructures.com.ar',
              logo: 'https://ferrariostructures.com.ar/logo.webp',
              description:
                'Alquiler de Infraestructura completa para eventos para fiestas, casamientos, eventos y proyectos: carpas industriales y beduinas, escenarios, tarimas, vajilla, living y más en Buenos Aires.',
              slogan: 'Infraestructura completa para eventos para eventos y proyectos',
              telephone: '(011) 6093-9880',
              areaServed: [
                { '@type': 'AdministrativeArea', name: 'Gran Buenos Aires' },
                { '@type': 'AdministrativeArea', name: 'Ciudad Autónoma de Buenos Aires' },
                { '@type': 'AdministrativeArea', name: 'Provincia de Buenos Aires' },
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rivadavia 345, Monte Grande',
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
                name: 'Alquiler de Infraestructura completa para eventos',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Carpas industriales y estilo beduino',
                      description:
                        'Carpas industriales y estilo beduino para fiestas, casamientos, eventos y proyectos con instalación profesional',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Escenarios y tarimas',
                      description: 'Escenarios y tarimas con estructura segura e instalación profesional',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Mesas y sillas',
                      description: 'Mesas y sillas para eventos con entrega coordinada',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Vajilla y cristalería',
                      description:
                        'Vajilla y cristalería premium con limpieza incluida',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Climatización',
                      description:
                        'Calefacción y aire acondicionado para eventos',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Living para eventos',
                      description:
                        'Livings y mobiliario lounge para fiestas, casamientos y eventos',
                    },
                  },
                ],
              },
              knowsAbout: [
                'Infraestructura completa para eventos',
                'Carpas industriales',
                'Carpas estilo beduino',
                'Escenarios',
                'Tarimas',
                'Vajilla y cristalería',
                'Living para eventos',
                'Eventos corporativos',
                'Casamientos',
                'Fiestas',
              ],
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

        {/* Initialize dataLayer before GTM */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
            `,
          }}
        />

        {/* Google Tag Manager - Optimized with afterInteractive */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
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

        {/* Scroll Tracking Component */}
        <ScrollTracker />

        <DeferredScripts />
        <OptimizedScripts />
        <SmartScriptLoader />
      </body>
    </html>
  );
}

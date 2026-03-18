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

        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                // Organization Schema
                {
                  '@type': 'Organization',
                  '@id': 'https://ferrariostructures.com.ar/#organization',
                  name: 'Ferrario Structures',
                  url: 'https://ferrariostructures.com.ar',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://ferrariostructures.com.ar/logo.webp',
                    width: 250,
                    height: 100,
                  },
                  sameAs: [
                    'https://www.instagram.com/ferrario.rentals',
                  ],
                },
                // LocalBusiness Schema
                {
                  '@type': 'LocalBusiness',
                  '@id': 'https://ferrariostructures.com.ar/#localbusiness',
                  name: 'Ferrario Structures',
                  description: 'Alquiler de carpas, escenarios y tarimas para eventos en el sur del Gran Buenos Aires',
                  image: 'https://ferrariostructures.com.ar/logo.webp',
                  url: 'https://ferrariostructures.com.ar',
                  telephone: '+5491122535440',
                  priceRange: '$$',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Monte Grande',
                    addressRegion: 'Buenos Aires',
                    addressCountry: 'AR',
                  },
                  areaServed: {
                    '@type': 'City',
                    name: 'Gran Buenos Aires',
                  },
                  openingHoursSpecification: [
                    {
                      '@type': 'OpeningHoursSpecification',
                      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                      opens: '09:00',
                      closes: '18:00',
                    },
                  ],
                },
                // FAQPage Schema

                {
                  '@type': 'FAQPage',
                  '@id': 'https://ferrariostructures.com.ar/#faqpage',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: '¿Alquilan escenarios profesionales para recitales y festivales?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Sí. Instalamos escenarios profesionales para recitales, festivales, eventos corporativos y actos. Adaptamos dimensiones y altura a cada producción. Consultanos al +54 9 11 2253-5440.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: '¿Cuánto cuesta alquilar un escenario o tarima en Buenos Aires?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'El precio varía según dimensiones y complejidad de la estructura. Hacemos presupuestos sin cargo en menos de 24 horas. Escribinos al +54 9 11 2253-5440 o por el formulario en ferrariostructures.com.ar.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: '¿Qué tipos de carpas para eventos tienen?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Carpas industriales y estilo beduino para 20 hasta 500+ personas. Casamientos, cumpleaños, corporativos y ferias en el sur del GBA y CABA. Presupuesto al +54 9 11 2253-5440.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: '¿Cuánto cuesta alquilar una carpa para eventos?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Depende del tamaño y servicios adicionales. Presupuesto personalizado sin cargo. Contactanos por WhatsApp al +54 9 11 2253-5440 y te respondemos el mismo día.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: '¿Puedo alquilar sillas, mesas, climatización y vallas junto con la estructura?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Sí. Además de carpas y escenarios, alquilamos sillas, mesas, equipos de climatización y vallas. Todo en un solo proveedor para simplificar la logística de tu evento. Armamos el paquete completo a medida.',
                      },
                    },
                  ],
                },
              ],
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

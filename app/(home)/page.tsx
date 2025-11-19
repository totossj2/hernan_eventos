'use client';

import { Hero } from '@/components/sections/Hero';
import { Navbar } from '@/components/layout/Navbar';
import dynamic from 'next/dynamic';

const WhoWeAre = dynamic(() => import('@/components/sections/WhoWeAre'), {
  loading: () => <div className="py-12 bg-gray-50 animate-pulse" />,
  ssr: false, // Client-side only for better TBT
});

const ServicesSection = dynamic(
  () =>
    import('@/components/sections/ServicesSection').then((mod) => ({
      default: mod.ServicesSection,
    })),
  {
    loading: () => <div className="py-12 bg-white animate-pulse" />,
    ssr: false, // Client-side only for better TBT
  }
);

const Form = dynamic(() => import('@/components/sections/SimpleForm'), {
  loading: () => <div className="py-12 bg-white animate-pulse" />,
  ssr: false, // Client-side only for better TBT
});

const SimpleFormHorizontal = dynamic(
  () => import('@/components/sections/SimpleFormHorizontal'),
  {
    loading: () => <div className="py-12 bg-blue-50 animate-pulse" />,
    ssr: false, // Client-side only for better TBT
  }
);

const ClientsSection = dynamic(
  () =>
    import('@/components/sections/ClientsSection').then((mod) => ({
      default: mod.ClientsSection,
    })),
  {
    loading: () => <div className="py-12 bg-gray-100 animate-pulse" />,
    ssr: false, // Client-side only for better TBT
  }
);

const TestimonialsSection = dynamic(
  () =>
    import('@/components/sections/TestimonialsSection').then((mod) => ({
      default: mod.TestimonialsSection,
    })),
  {
    loading: () => <div className="py-12 bg-gray-50 animate-pulse" />,
    ssr: false, // Client-side only for better TBT
  }
);

// Also lazy load Footer to reduce initial bundle
const Footer = dynamic(
  () =>
    import('@/components/layout/Footer').then((mod) => ({
      default: mod.Footer,
    })),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col gap-0 pt-16">
        <Hero />
        <SimpleFormHorizontal />
        <WhoWeAre />
        <ClientsSection />
        <TestimonialsSection />
        <ServicesSection />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

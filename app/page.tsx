import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import dynamic from 'next/dynamic';

// Lazy load heavy components
const BenefitsSection = dynamic(
  () =>
    import('@/components/sections/BenefitsSection').then((mod) => ({
      default: mod.BenefitsSection,
    })),
  {
    loading: () => <div className="py-12 bg-gray-50 animate-pulse" />,
  }
);

const ServicesSection = dynamic(
  () =>
    import('@/components/sections/ServicesSection').then((mod) => ({
      default: mod.ServicesSection,
    })),
  {
    loading: () => <div className="py-12 bg-white animate-pulse" />,
  }
);

const ProcessSection = dynamic(
  () =>
    import('@/components/sections/ProcessSection').then((mod) => ({
      default: mod.ProcessSection,
    })),
  {
    loading: () => <div className="py-12 bg-gray-50 animate-pulse" />,
  }
);

const Form = dynamic(() => import('@/components/sections/SimpleForm'), {
  loading: () => <div className="py-12 bg-white animate-pulse" />,
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col gap-0 pt-16 pb-16">
        <Hero />
        {/* <HeatingSection />*/}
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        {/* <TestimonialsSection /> */}
        {/* <FAQSection /> */}
        <Form />
      </main>
      <Footer />
    </div>
  );
}

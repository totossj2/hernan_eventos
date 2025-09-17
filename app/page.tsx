import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { HeatingSection } from '@/components/sections/HeatingSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import Form from '@/components/sections/Form';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col gap-0 pt-16">
        <Hero />
        {/* <HeatingSection />*/}
        <BenefitsSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        {/* <FAQSection /> */}
        <Form />
      </main>
      <Footer />
    </div>
  );
}

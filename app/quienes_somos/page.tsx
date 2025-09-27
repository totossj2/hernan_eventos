import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { QuienesSomos } from './quienes_somos';

import Form from '@/components/sections/Form';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col gap-0 pt-16 pb-16">
        <QuienesSomos />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

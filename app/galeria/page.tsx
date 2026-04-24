"use client";

import dynamic from "next/dynamic";
import Galeria from "@/components/Galeria";
import { Navbar } from "@/components/layout/Navbar";

// Also lazy load Footer to reduce initial bundle
const Form = dynamic(() => import('@/components/sections/SimpleForm'), {
  loading: () => <div className="py-12 bg-white animate-pulse" />,
  ssr: false, // Client-side only for better TBT
});

const Footer = dynamic(
  () =>
    import("@/components/layout/Footer").then((mod) => ({
      default: mod.Footer,
    })),
  {
    ssr: false,
  }
);

export default function GaleriaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col gap-0 pt-16">
        <div className="py-10">
          <h1 className="mx-auto max-w-6xl px-4 text-balance text-2xl font-semibold tracking-tight">
            Galería
          </h1>
          <p className="mx-auto mt-2 max-w-6xl px-4 text-sm text-black/70">
            Trabajos recientes de carpas y escenarios.
          </p>

          <div className="mt-8">
            <Galeria />
          </div>
        </div>
        <Form />
      </main>
      <Footer />
    </div>
  );
}


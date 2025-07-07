import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10" />
      <Image
        src="/placeholder.svg?height=800&width=1200"
        alt="Evento elegante con carpas y decoración profesional"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Hacemos realidad tus eventos más especiales
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Alquiler profesional de equipamiento para eventos en Gran Buenos
          Aires.
        </p>
        <a href="#contact">
          <Button
            size="lg"
            className="bg-[#003056] hover:bg-[#002040] text-lg px-8 py-4"
          >
            Solicitar Presupuesto
          </Button>
        </a>
      </div>
    </section>
  );
}

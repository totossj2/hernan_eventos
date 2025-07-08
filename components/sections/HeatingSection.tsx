import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Phone, Wind } from "lucide-react";
import Image from "next/image";
import { HEATING_OPTIONS } from "@/lib/constants";

export function HeatingSection() {
  return (
    <section
      id="calefaccion"
      className="py-20 bg-gradient-to-br from-[#003056] to-[#004070]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Calefacción segura y potente para eventos de invierno
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Equipos a gas, seguros y adaptables a cualquier espacio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#f4c046] rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-[#003056]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Máxima Seguridad
                </h3>
                <p className="text-blue-100">
                  Equipos a gas con encendido piezoeléctrico y sin partes
                  calientes al alcance de los invitados. Perfectos para eventos
                  sociales donde la seguridad es prioritaria.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#f4c046] rounded-full flex items-center justify-center flex-shrink-0">
                <Wind className="h-6 w-6 text-[#003056]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Adaptables a Cualquier Espacio
                </h3>
                <p className="text-blue-100">
                  Modelos disponibles para exteriores tipo hongo y pirámide.
                  Diferentes potencias para espacios desde 15 hasta 300
                  invitados.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/calefaccion.jpeg"
              alt="Equipos de calefacción para eventos"
              width={500}
              height={300}
              className="rounded-2xl shadow-2xl object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {HEATING_OPTIONS.map((option) => (
            <HeatingCard key={option.capacity} {...option} />
          ))}
        </div>

        <div className="text-center">
          <a href="#contact">
            <Button
              size="lg"
              className="bg-[#f4c046] hover:bg-[#e6b03f] text-[#003056] font-semibold text-lg px-8 py-4"
            >
              <Phone className="h-5 w-5 mr-2" />
              Asesorate para tu evento
            </Button>
          </a>
          <p className="text-blue-100 mt-4 text-sm">
            Consulta sin compromiso • Asesoramiento personalizado gratuito
          </p>
        </div>
      </div>
    </section>
  );
}

interface HeatingCardProps {
  title: string;
  capacity: string;
  guests: string;
  area: string;
  description: string;
}

function HeatingCard({
  title,
  capacity,
  guests,
  area,
  description,
}: HeatingCardProps) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-[#f4c046] rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold text-[#003056]">{capacity}</span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-blue-100 mb-2">Hasta {guests} invitados</p>
        <p className="text-sm text-blue-200">Cobertura: {area}</p>
        <p className="text-sm text-blue-200 mt-2">{description}</p>
      </CardContent>
    </Card>
  );
}

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Shield,
  Phone,
  Wind,
  ShieldCheck,
  Maximize2,
  BadgeCheck,
  Scaling,
} from 'lucide-react';
import Image from 'next/image';
import { HEATING_OPTIONS } from '@/lib/constants';

export function HeatingSection() {
  return (
    <section
      id="calefaccion"
      className="py-10 m-4 rounded-lg  bg-gradient-to-br from-[#003056] to-[#004070]"
    >
      <div className="container mx-auto px-4 gap-10 flex flex-col">
        <div className="bg-white/10 backdrop-blur-sm border-white/20 text-white flex flex-row overflow-hidden flex flex-col p-8 rounded-lg">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Calefacción segura y potente para eventos de invierno
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Equipos a gas, seguros y adaptables a cualquier espacio. Sin frío,
              sin riesgos, sin estrés.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-4 items-center  max-w-4xl mx-auto ">
            <div className="flex items-start gap-4  max-w-2xl mx-auto backdrop-blur-sm w-fit transition-transform mb-10 ">
              <div className="bg-[#f4c046] p-3 rounded-full">
                <ShieldCheck className="h-6 w-6 text-[#003056]" />
              </div>
              <div className="max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-white">
                  Máxima Seguridad
                </h3>
                <p className="text-blue-100 mt-2">
                  Equipos a gas con encendido piezoeléctrico y sin partes
                  calientes al alcance de los invitados. Perfectos para eventos
                  sociales.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 max-w-2xl mx-auto w-fit backdrop-blur-sm  transition-transform  ">
              <div className="bg-[#f4c046] p-3 rounded-full">
                <Scaling className="h-6 w-6 text-[#003056]" />
              </div>
              <div className="max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-white">
                  Adaptables a cualquier espacio
                </h3>
                <p className="text-blue-100 mt-2">
                  Modelos tipo hongo o pirámide para exteriores. Diferentes
                  potencias para espacios chicos o grandes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 ">
          {HEATING_OPTIONS.map((option) => (
            <HeatingCard key={option.capacity} {...option} />
          ))}
        </div>

        <div className="text-center mb-4 mt-6">
          <p className="text-center text-red-500 font-semibold ">
            ¡Alta demanda invernal! Reservá con anticipación para asegurar tu
            equipo.
          </p>
          <p className="text-center text-sm text-gray-300 mt-2">
            Cobertura en GBA y CABA • Equipos revisados antes de cada entrega •
            Atención inmediata
          </p>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5491160939880?text=Hola%2C%20quiero%20más%20info%20sobre%20la%20calefacción"
            target="_blank"
          >
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
  area: string;
  description: string;
  image: string;
}

function HeatingCard({
  title,
  capacity,
  area,
  description,
  image,
}: HeatingCardProps) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white flex flex-row overflow-hidden">
      <div className="flex flex-row w-2/3 items-center">
        <CardHeader className="text-center items-center flex justify-center">
          <div className="w-16 h-16 bg-[#f4c046] rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-[#003056]">
              {capacity}
            </span>
          </div>
        </CardHeader>
        <CardContent className="text-center flex flex-col justify-center items-center">
          <CardTitle className="text-xl">{title}</CardTitle>

          <p className="text-sm text-blue-200">Cobertura: {area}</p>
          <p className="text-sm text-blue-200 mt-2">{description}</p>
        </CardContent>
      </div>
      <div className="w-1/3 flex justify-center items-center rounded-r-lg">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="w-auto h-[200px]"
        />
      </div>
    </Card>
  );
}

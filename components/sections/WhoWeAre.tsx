import Image from 'next/image';

export function WhoWeAre() {
  return (
    <section id="nosotros" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Columna de texto (desktop) */}
          <div className="space-y-6 mb-6 md:mb-16">
            <h2 className="text-xl md:text-4xl font-semibold text-gray-900">
              Confianza y Experiencia para tu Evento
            </h2>
            <div className="w-20 h-1 bg-[#003056]"></div>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl">
              En Hernan Eventos no solo alquilamos equipos; brindamos soluciones
              con la tranquilidad que da más de{' '}
              <strong>35 años en el rubro</strong>. Conocemos cada detalle para
              que tu evento sea un éxito, desde la planificación hasta el
              montaje profesional.
            </p>
          </div>

          {/* Imagen y avatar */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/nosotros/hernan_lorenzo.webp"
                alt="Hernán y Lorenzo - Equipo de Hernan Eventos"
                width={600}
                height={450}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Avatar con información personal */}
            <div className="absolute -bottom-6 -left-2 bg-white rounded-full p-3 shadow-lg border-4 border-[#003056]">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src="/nosotros/hernan.webp"
                    alt="Hernán"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-base">
                    Hernán
                  </p>
                  <p className="text-sm text-[#003056] font-medium">
                    +35 años de experiencia en el rubro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;

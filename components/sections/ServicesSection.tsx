import { Card } from '@/components/ui/card';
import Image from 'next/image';

export function ServicesSection() {
  // Servicios principales (ocuparán 6 columnas cada uno)
  const mainServices = [
    {
      title: 'Carpas y Gazebos',
      description:
        'Desde 5×2.5m hasta 8×36m. Para 20 a 3000+ personas. Protección garantizada contra clima. Estética y confiable.',
      image: '/catalogo/carpa.webp',
      alt: 'Carpas elegantes para eventos',
      href: '/servicios/carpas',
    },
    {
      title: 'Escenarios y Tarimas',
      description:
        'Estructuras modulares que se adaptan a tu espacio. Desde ceremonias de 50 personas hasta conciertos de 5000.',
      image: '/catalogo/escenario.webp',
      alt: 'Escenarios y tarimas',
      href: '/servicios/escenarios',
    },
  ];

  // Servicios secundarios (ocuparán 3 columnas cada uno)
  const secondaryServices = [
    {
      title: 'Mesas y Sillas',
      description:
        'Mesas redondas, rectangulares y cocktail. Sillas para hasta 1000 personas. Opciones estándar y premium.',
      image: '/catalogo/sillasymesas.webp',
      alt: 'Mesas y sillas para eventos',
      href: '/servicios/mesas',
    },
    {
      title: 'Vajilla y Cristalería',
      description: 'Platos, copas, cubiertos y mantelería. Lavado profesional incluido. Opciones estándar y premium según tu presupuesto.',
      image: '/catalogo/vajilla.webp',
      alt: 'Vajilla y cristalería elegante',
      href: '/servicios/vajilla',
    },
    {
      title: 'Climatización',
      description: 'Climatización para carpas de 50 a 3000 personas. Aire acondicionado en verano, calefacción en invierno.',
      image: '/catalogo/climatizacion.webp',
      alt: 'Sistemas de climatización',
      href: '/servicios/climatizacion',
    },
    {
      title: 'Vallas y Cerramientos',
      description: 'Vallas para eventos de 500 a 10.000 personas. Control de acceso, segmentación de espacios y seguridad.',
      image: '/catalogo/vallas.webp',
      alt: 'Vallas y cerramientos',
      href: '/servicios', // Por ahora redirige a la página general de servicios
    },
  ];

  return (
    <section id="servicios" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center  mb-6 md:mb-16">
          <h2 className="text-xl md:text-4xl font-semibold text-gray-900 mb-4">
            Infraestructura Completa para Tu Evento          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            No necesitás buscar 5 proveedores. Lo tenemos todo.          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          {/* Servicios principales - 6 columnas cada uno */}
          {mainServices.map((service) => (
            <div key={service.title} className="lg:col-span-6">
              <Card className="overflow-hidden">
                <div className="relative h-64 md:h-96 overflow-hidden rounded-lg flex flex-col p-3 py-3">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_30%,rgba(0,0,0,0.95)_100%)]" />{' '}
                  {/* Espacio flexible para empujar contenido hacia abajo */}
                  <div className="flex-1"></div>
                  {/* Contenido inferior - solo texto */}
                  <div className="relative z-10 flex gap-1 flex-col justify-end">
                    <div className="relative z-10 flex flex-col-reverse md:flex-row justify-between">
                      {/* Título en la esquina superior izquierda */}
                      <div className="text-left flex items-center">
                        <h3 className="text-lg font-semibold text-white leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-200 text-sm text-left break-words hyphens-auto">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}

          {/* Servicios secundarios - 3 columnas cada uno */}
          {secondaryServices.map((service) => (
            <div key={service.title} className="lg:col-span-3">
              <Card className="overflow-hidden">
                <div className="relative h-44 md:h-auto md:aspect-square overflow-hidden flex flex-col p-3 py-3">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_30%,rgba(0,0,0,0.95)_100%)]" />{' '}
                  {/* Espacio flexible para empujar contenido hacia abajo */}
                  <div className="flex-1"></div>
                  {/* Contenido inferior - solo texto */}
                  <div className="relative z-10 flex h-fit gap-1 flex-col justify-end">
                    {/* Título en la esquina superior izquierda */}
                    <div className="relative z-10 text-left">
                      <h3 className="text-lg font-semibold text-white">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-200 text-sm text-left break-words hyphens-auto">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Botón adicional para ver todos los servicios 
        <div className="text-center mt-8">
          <Link href="/servicios">
            <Button className="bg-[#003056] hover:bg-[#002040] text-white px-8 py-3">
              Ver Todos los Servicios
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>*/}
      </div>
    </section>
  );
}

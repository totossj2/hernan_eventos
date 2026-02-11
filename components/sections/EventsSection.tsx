import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { EVENT_TYPES } from '@/lib/constants';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

export function EventsSection() {
    // Usamos los tipos de eventos definidos en constants,
    // evitando el genérico "Otro" para que las cards sean más específicas.
    const eventTypes = EVENT_TYPES.filter((type) => type !== 'Otro');

    const descriptions: Record<string, string> = {
        'Fiesta privada':
            'Cumpleaños, aniversarios y reuniones de 50-250 personas. Carpas, mesas, sillas y vajilla completa. Desde $750.000',
        'Evento masivo':
            'Festivales, recitales y fiestas de 1.000-6.000 personas. Escenarios, tarimas VIP, barras, vallas y gazebos. Cotización según alcance',
        'Acto Escolar':
            'Actos patrios, graduaciones y muestras escolares. Escenarios certificados para 200-800 personas. Desde $950.000',
        Casamiento:
            'Bodas de 80-400 personas. Carpas premium, livings  y vajilla completa. Ceremonia y recepción. Desde $1.700.000',
        'Feria y Expo':
            'Ferias gastronómicas, comerciales y municipales. Carpas modulares, stands y vallado. 100-3.000 personas. Desde $3.500.000',
        'Eventos Corporativos y Conferencias':
            'Presentaciones, team building y jornadas empresariales. 50-800 personas. Escenarios, sillas y climatización. Desde $1.800.000',
        'Lanzamiento de producto':
            'Lanzamientos de productos y activaciones de marca. Escenarios, carpas premium y espacios de exhibición. Desde $1.500.000',

    };

    // Opcional: imágenes asociadas a cada tipo de evento.
    // Si no definís una imagen para algún tipo, la card se muestra solo con texto.
    const images: Record<
        string,
        {
            src: string;
            alt: string;
        }
    > = {
        'Fiesta privada': {
            src: '/catalogo/beduina.webp',
            alt: 'Carpa montada para fiesta privada',
        },
        'Evento masivo': {
            src: '/catalogo/ORIENS.webp',
            alt: 'Escenario y estructura para evento masivo',
        },
        'Acto Escolar': {
            src: '/trabajos/tarimas/escenario_NT_aerea.webp',
            alt: 'Escenario preparado para acto escolar',
        },
        Casamiento: {
            src: '/catalogo/carpa.webp',
            alt: 'Carpa iluminada para casamiento',
        },
        'Feria y Expo': {
            src: '/catalogo/Servicios.webp',
            alt: 'Montaje de feria con carpas y mobiliario',
        },

        'Eventos Corporativos y Conferencias': {
            src: '/catalogo/tarima_conferencia_utn.webp',
            alt: 'Montaje para evento empresarial',
        },
        'Lanzamiento de producto': {
            src: '/toscas.webp',
            alt: 'Escenario para lanzamiento de producto',
        },

    };

    return (
        <section id="eventos" className="py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6 md:mb-16">
                    <h2 className="text-xl md:text-4xl font-semibold text-gray-900 mb-4">
                        ¿Qué Tipo de Evento Tenés?                    </h2>
                    <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Fiestas privadas, eventos corporativos o festivales masivos.
                        Te armamos la infraestructura completa.                    </p>
                </div>

                {/* Versión mobile: carrusel shadcn (slider) con ~1.3 slides visibles */}
                <div className="md:hidden -mx-4">
                    <Carousel
                        opts={{
                            align: 'start',
                            // Desactivamos el loop para que el slider no sea infinito
                            loop: false,
                        }}
                        className="w-full px-4"
                    >
                        <CarouselContent className="-ml-2">
                            {eventTypes.map((type) => {
                                const image = images[type];

                                return (
                                    <CarouselItem
                                        key={type}
                                        className="pl-2 basis-[78%] xs:basis-[72%]"
                                    >
                                        <Card className="h-full border-0 shadow-md bg-gray-50 hover:bg-gray-100 transition-colors overflow-hidden">
                                            <div className="flex flex-col h-full">
                                                {image && (
                                                    <div className="relative w-full h-40">
                                                        <Image
                                                            src={image.src}
                                                            alt={image.alt}
                                                            fill
                                                            className="object-cover"
                                                            sizes="(max-width: 768px) 80vw"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                )}
                                                <div className="p-4 flex flex-col flex-1">
                                                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                                                        {type}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 flex-1">
                                                        {descriptions[type] ??
                                                            'Montamos carpas, escenarios y soluciones técnicas a medida para este tipo de evento.'}
                                                    </p>
                                                </div>
                                            </div>
                                        </Card>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <div className="flex justify-end items-center gap-2 mt-3 pr-1">
                            <CarouselPrevious className="scale-90" />
                            <CarouselNext className="scale-90" />
                        </div>
                    </Carousel>
                </div>

                {/* Versión tablet/desktop (md+): grilla 3xN con las cards */}
                <div className="hidden md:block">
                    <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                        {eventTypes.map((type) => {
                            const image = images[type];

                            return (
                                <Card
                                    key={type}
                                    className="h-full border-0 shadow-md bg-gray-50 hover:bg-gray-100 transition-colors overflow-hidden"
                                >
                                    <div className="flex flex-col h-full">
                                        {image && (
                                            <div className="relative w-full h-40 md:h-44">
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 1200px) 50vw, 33vw"
                                                    loading="lazy"
                                                />
                                            </div>
                                        )}
                                        <div className="p-5 md:p-6 flex flex-col flex-1">
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                                                {type}
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-600 flex-1">
                                                {descriptions[type] ??
                                                    'Montamos carpas, escenarios y soluciones técnicas a medida para este tipo de evento.'}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

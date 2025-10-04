import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function TestimonialsSection() {
  const testimonials = [
    {
      text: 'Excelente servicio y asesoramiento. Muy atento el personal, resolvieron de manera efectiva a pesar del tiempo acotado. Quedo en contacto para futuros trabajos. 100% recomendable!',
      author: 'Diego Lomonaco',
      event: 'Evento corporativo - Tigre',
      initials: 'DL',
    },
    {
      text: 'Alquilamos una carpa toda equipada para un evento corporativo, nos cumplieron con todo y el asesoramiento fue inmejorable. Todo salió perfecto.',
      author: 'Paula Ferrario',
      event: 'Feria gastronómica - San Isidro',
      initials: 'PF',
    },
    {
      text: 'Excelente servicio!!! Más que recomendable para cualquiera que esté buscando calidad, profesionalismo y buen gusto👏🏼 Cambia tu evento al 100%',
      author: 'Maite Luquet',
      event: 'Casamiento - Palermo',
      initials: 'ML',
    },
    {
      text: 'Contratamos a Hernan para un evento al aire libre y quedamos más que conformes. La carpa era de excelente calidad, el armado fue puntual y prolijo.',
      author: 'ArgentinaStream',
      event: 'Festival musical - Banfield',
      initials: 'AS',
    },
    {
      text: 'Son excelentes. En servicio y . Todos los productos que siempre alquilamos y en la atención. Muchas Gracias !!',
      author: 'SANTIAGO BOAN- EMMANUEL',
      event: 'Evento corporativo - Lomas de Zamora',
      initials: 'SB',
    },
    {
      text: 'Excelente servicio. Son Puntuales y muy bien predispuestos a los cambios de último momento',
      author: 'Mica Lagrotta',
      event: 'Fiesta de cumpleaños - Temperley',
      initials: 'ML',
    },
  ];

  return (
    <section id="testimonios" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-xl md:text-4xl font-semibold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de eventos exitosos nos respaldan
          </p>
        </div>

        {/* Carrusel de testimonios */}
        <div className="max-w-4xl mx-auto mb-16">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="border-0 shadow-lg h-full">
                      <CardContent className="p-6 h-[312px] flex flex-col">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-4 flex-grow">
                          {testimonial.text}
                        </p>
                        <div className="flex items-center mt-auto">
                          <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                            <span className="text-[#003056] font-semibold">
                              {testimonial.initials}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold">
                              {testimonial.author}
                            </p>
                            <p className="text-sm text-gray-500">
                              {testimonial.event}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="text-center mb-6 md:mb-16">
          <a
            className="text-base md:text-xl text-[#111111] w-full flex flex-col md:flex-row justify-center items-center hover:underline hover:text-[#003056]"
            href="https://maps.app.goo.gl/2L2Cr8SPVpz1x8KB6"
            target="_blank"
          >
            Estamos en Google Maps con 5 estrellas
            <div className="flex justify-center items-center gap-1 ml-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

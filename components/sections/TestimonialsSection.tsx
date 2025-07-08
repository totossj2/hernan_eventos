import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "Hernan Eventos hizo que nuestra boda fuera perfecta. El equipamiento llegó impecable y el montaje fue rápido y profesional. ¡Altamente recomendados!",
      author: "María Rodríguez",
      event: "Boda - 150 invitados",
      initials: "MR",
    },
    {
      text: "Para nuestro evento corporativo necesitábamos todo impecable. Hernan Eventos superó nuestras expectativas en calidad y servicio.",
      author: "Carlos González",
      event: "Evento Corporativo - 300 personas",
      initials: "CG",
    },
    {
      text: "La fiesta de 15 años de mi hija fue un sueño hecho realidad. Gracias Hernan Eventos por hacer todo tan fácil y hermoso.",
      author: "Laura Martínez",
      event: "Fiesta de 15 años - 200 invitados",
      initials: "LM",
    },
  ];

  return (
    <section id="testimonios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 ">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de eventos exitosos nos respaldan
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#003056] font-semibold">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.event}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mb-16">
          <a
            className="text-xl text-[#111111] w-full flex justify-center items-center hover:underline hover:text-[#003056]"
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

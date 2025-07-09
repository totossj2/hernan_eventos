import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Clock, Shield, Users } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Puntualidad Garantizada",
      description:
        "Tu tranquilidad es nuestra prioridad. Nuestra logística garantiza una puntualidad británica para que solo te preocupes por disfrutar.",
    },
    {
      icon: Award,
      title: "Materiales Premium",
      description:
        "La calidad se ve en los detalles. Invertimos constantemente en equipamiento de primeras marcas para que tu evento luzca impecable y funcione a la perfección.",
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description:
        "No somos un catálogo, somos tu socio. Desde la primera llamada, un experto te acompaña para dar vida a tu idea, ajustándose a tu visión y presupuesto.",
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir Hernan Eventos?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Con más de 35 años de experiencia y 1.000 eventos exitosos, hemos
            perfeccionado el arte de crear momentos inolvidables.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="text-center border-0 shadow-lg"
            >
              <CardHeader>
                <benefit.icon className="h-12 w-12 text-[#003056] mx-auto mb-4" />
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

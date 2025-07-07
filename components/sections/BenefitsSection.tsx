import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Clock, Shield, Users } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Award,
      title: "35+ Años de Experiencia",
      description:
        "Hemos equipado más de 2,000 eventos exitosos en toda la región",
    },
    {
      icon: Clock,
      title: "Puntualidad Garantizada",
      description:
        "Entrega y montaje siempre a tiempo. Tu evento no puede esperar",
    },
    {
      icon: Shield,
      title: "Materiales Premium",
      description: "Equipamiento de primera calidad, renovado constantemente",
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Asesoramiento experto para que tu evento sea perfecto",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir Hernan Eventos?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Más de 35 años de experiencia haciendo que cada evento sea memorable
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Clock, Shield, Users } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: 'Puntualidad Garantizada',
      description:
        'Tu tranquilidad es nuestra prioridad. Nuestra logística garantiza una puntualidad británica para que solo te preocupes por disfrutar.',
    },
    {
      icon: Award,
      title: 'Materiales Premium',
      description:
        'La calidad se ve en los detalles. Invertimos constantemente en equipamiento de primeras marcas para que tu evento luzca impecable y funcione a la perfección.',
    },
    {
      icon: Users,
      title: 'Atención Personalizada',
      description:
        'No somos un catálogo, somos tu socio. Desde la primera llamada, un experto te acompaña para dar vida a tu idea, ajustándose a tu visión y presupuesto.',
    },
  ];

  return (
    <section id="beneficios" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-xl md:text-4xl font-semibold text-gray-900 mb-4">
            ¿Por qué elegir Ferrario Structures?
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Con más de 35 años de experiencia montando{' '}
            <strong>infraestructura técnica temporal</strong> y más de 1.000
            eventos exitosos, hemos perfeccionado el arte de crear momentos
            inolvidables.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className={`text-center border-0 shadow-lg w-full max-w-sm mx-auto`}
            >
              <CardHeader className="p-4">
                <benefit.icon className="h-12 w-12 text-[#003056] mx-auto mb-4" />
                <CardTitle className="text-lg font-semibold">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-600 max-w-sm mx-auto">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

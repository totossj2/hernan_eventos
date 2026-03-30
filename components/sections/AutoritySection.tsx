import { Boxes, Award, Repeat } from 'lucide-react';

export function AutoritySection() {
  const stats = [
    {
      icon: Boxes,
      value: '+750',
      label: 'Eventos públicos ejecutados',
      description: 'Operaciones reales en entornos críticos, con público, plazos y presión operativa.',
    },
    {
      icon: Award,
      value: '35',
      label: 'Años en el rubro',
      description: 'Una década no alcanza. Nosotros tenemos tres. Desde 1990 equipando eventos en Buenos Aires.',
    },
    {
      icon: Repeat,
      value: '+200',
      label: 'Clientes recurrentes',
      description: 'Nos vuelven a contratar porque cambiar de proveedor es más riesgoso que seguir con nosotros.',
    },
  ];

  return (
    <section id="autority" className="  bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-2 md:p-4  "
              >
                <div className="mb-2 p-4 rounded-full ">
                  <Icon className="h-10 w-10 md:h-12 md:w-12 text-[#003056]" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl md:text-5xl font-bold text-[#003056]">
                    {stat.value}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

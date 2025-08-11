export function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: 'Consulta Inicial',
      description:
        'Nos cuentas los detalles de tu evento: fecha, lugar, cantidad de invitados y necesidades específicas.',
    },
    {
      number: 2,
      title: 'Presupuesto Personalizado',
      description:
        'Te enviamos una cotización detallada en menos de 24 horas con todas las opciones disponibles.',
    },
    {
      number: 3,
      title: 'Reserva y Planificación',
      description:
        'Confirmamos tu reserva y coordinamos todos los detalles de entrega y montaje.',
    },
    {
      number: 4,
      title: 'Entrega y Montaje',
      description:
        'Nuestro equipo llega puntualmente, monta todo profesionalmente y se encarga de la recolección.',
    },
  ];

  return (
    <section id="proceso" className="py-0 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-xl md:text-4xl font-semibold text-gray-900 mb-4">
            Proceso Simple y Eficiente
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            En solo 4 pasos tendrás todo listo para tu evento perfecto
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-[#003056] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

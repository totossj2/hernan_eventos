export function QuienesSomos() {
  return (
    <section id="quienes-somos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quiénes Somos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            [Descripción breve de la empresa - 2-3 líneas]
          </p>
        </div>

        {/* Historia Principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                [Párrafo 1: Orígenes de la empresa, fundación, primeros años]
              </p>
              <p>
                [Párrafo 2: Crecimiento, hitos importantes, evolución del
                negocio]
              </p>
              <p>[Párrafo 3: Situación actual, visión, valores]</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                [Foto histórica o de fundación]
              </div>
            </div>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                M
              </span>
              Misión
            </h3>
            <p className="text-gray-700 leading-relaxed">
              [Descripción de la misión de la empresa - qué hacen y para qué]
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                V
              </span>
              Visión
            </h3>
            <p className="text-gray-700 leading-relaxed">
              [Descripción de la visión - hacia dónde se dirigen como empresa]
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Compromiso', description: '[Descripción del valor 1]' },
              { title: 'Calidad', description: '[Descripción del valor 2]' },
              { title: 'Innovación', description: '[Descripción del valor 3]' },
              { title: 'Servicio', description: '[Descripción del valor 4]' },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {index + 1}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experiencia y Credenciales */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Experiencia y Credenciales
          </h2>

          {/* Números destacados */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">[X]</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                Años de Experiencia
              </h4>
              <p className="text-gray-600 text-sm">
                Trayectoria sólida en el mercado
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">[X]</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                Eventos Realizados
              </h4>
              <p className="text-gray-600 text-sm">
                Proyectos exitosos completados
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">[X]</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                Zonas de Cobertura
              </h4>
              <p className="text-gray-600 text-sm">
                Áreas donde prestamos servicios
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">[X]</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                Certificaciones
              </h4>
              <p className="text-gray-600 text-sm">
                Acreditaciones y reconocimientos
              </p>
            </div>
          </div>
        </div>

        {/* Galería de trabajos/proyectos destacados */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestros Trabajos Destacados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <div
                key={project}
                className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-md"
              >
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  [Foto del proyecto {project}]
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para tu próximo evento?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            [Mensaje motivacional para contactar]
          </p>
        </div>
      </div>
    </section>
  );
}

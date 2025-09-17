export const CONTACT = {
  phone: '(011) 6093-9880',
  email: 'info@hernaneventos.com',
  address: 'Bourquet 560, Luis Guillon',
  whatsapp:
    'https://wa.me/5491160939880?text=Hola%2C%20quiero%20más%20info%20sobre%20los%20servicios%20de%20eventos',
  googleMaps: 'https://maps.app.goo.gl/2WLtVqZfsK3dTLUf9?g_st=ic',
};

export const NAVIGATION = [
  { name: 'Quienes Somos', href: '/quines_somos' },

  { name: 'Servicios', href: '/servicios' },
  { name: 'Trabajos', href: '/trabajos' },
];

export const SERVICES = [
  'Carpas y Gazebos',
  'Mesas y Sillas',
  'Vajilla y Cristalería',
  'Climatización',
  'Escenarios y Tarimas',
  'Vallas y Cerramientos',
];

export const EVENT_TYPES = [
  'Fiesta privada',
  'Casamiento',
  'Exposición',
  'Conferencia',
  'Evento empresarial',
  'Lanzamiento de producto',
  'Taller / curso',
  'Otro',
];

export const CLIMATIZATION_OPTIONS = [
  {
    title: 'Piramide',
    capacity: '8K',
    area: 'Espacios exteriores',
    description: 'Ideal para eventos en el exterior',
    image: '/climatizacion/piramide.webp',
  },
  {
    title: 'Cañón 8.000 Calorías',
    capacity: '8K+',
    area: 'Espacios reducidos',
    description: 'Ideal para eventos íntimos',
    image: '/climatizacion/cañon_800.webp',
  },

  {
    title: '35.000 Calorías',
    capacity: '35K',
    area: '60 m²',
    description: 'Perfecto para reuniones medianas',
    image: '/climatizacion/Calefactor_35K.webp',
  },
  {
    title: '45.000 Calorías',
    capacity: '45K',
    area: '80 m²',
    description: 'Ideal para eventos grandes',
    image: '/climatizacion/45k.webp',
  },
];

export const CLIENTS = [
  {
    name: 'Municipalidad de Esteban Echeverría',
    logo: '/logos_clientes/mee.png',
    alt: 'Logo Municipalidad de Esteban Echeverría',
  },
  {
    name: 'Senior Publicidad',
    logo: '/logos_clientes/senior.png',
    alt: 'Logo Senior Publicidad',
  },
  {
    name: 'Club Atlético River Plate',
    logo: '/logos_clientes/river.png',
    alt: 'Logo River Plate',
  },
  {
    name: 'Embajada de Marruecos',
    logo: '/logos_clientes/marruecos.png',
    alt: 'Logo Embajada de Marruecos',
  },
  {
    name: 'Gobierno de la Ciudad de Buenos Aires',
    logo: '/logos_clientes/CABA.png',
    alt: 'Logo Gobierno de la Ciudad de Buenos Aires',
  },
  {
    name: 'AutoClásica',
    logo: '/logos_clientes/autoclasica.png',
    alt: 'Logo AutoClásica',
  },
  {
    name: 'Expoagro',
    logo: '/logos_clientes/expoagro.png',
    alt: 'Logo Expo Agro',
  },
  {
    name: 'Dhue Producciones',
    logo: '/logos_clientes/dhue.png',
    alt: 'Logo Dhue',
  },
];

export const SERVICE_DATA = {
  carpas: {
    hero: {
      title: 'Carpas y Gazebos',
      subtitle: 'Protección y elegancia para tu evento',
      description:
        'Ofrecemos una amplia variedad de carpas y gazebos para adaptarnos a cualquier tipo de evento, desde fiestas íntimas hasta eventos corporativos masivos.',
      image: '/catalogo/carpa.jpg',
      features: [
        'Instalación profesional',
        'Múltiples tamaños disponibles',
        'Resistente a condiciones climáticas',
        'Entrega y retiro incluido',
      ],
    },
    products: [
      {
        id: 'carpa-3x3',
        title: 'Carpa 3x3 metros',
        description: 'Ideal para eventos íntimos y reuniones pequeñas',
        image: '/catalogo/carpa.jpg',
        features: [
          'Cubierta impermeable',
          'Estructura de aluminio',
          'Fácil montaje',
        ],
        capacity: '15-20 personas',
        area: '9 m²',
        price: '$15.000',
      },
      {
        id: 'carpa-6x6',
        title: 'Carpa 6x6 metros',
        description: 'Perfecta para eventos medianos y fiestas de cumpleaños',
        image: '/catalogo/carpa.jpg',
        features: [
          'Cubierta impermeable',
          'Estructura reforzada',
          'Ventanas laterales',
        ],
        capacity: '50-60 personas',
        area: '36 m²',
        price: '$35.000',
      },
      {
        id: 'carpa-9x9',
        title: 'Carpa 9x9 metros',
        description: 'Excelente para eventos grandes y corporativos',
        image: '/catalogo/carpa.jpg',
        features: [
          'Cubierta impermeable',
          'Estructura industrial',
          'Sistema de ventilación',
        ],
        capacity: '100-120 personas',
        area: '81 m²',
        price: '$65.000',
      },
    ],
    benefits: {
      title: '¿Por qué elegir nuestras carpas?',
      items: [
        'Instalación profesional en menos de 2 horas',
        'Materiales de primera calidad certificados',
        'Cobertura total de responsabilidad civil',
        'Servicio técnico disponible 24/7',
        'Flexibilidad en fechas y horarios',
        'Precios sin sorpresas',
      ],
    },
    testimonials: [
      {
        name: 'María González',
        company: 'Eventos Elegantes',
        text: 'Las carpas de Hernán Eventos son de excelente calidad. La instalación fue impecable y el servicio muy profesional.',
        rating: 5,
      },
      {
        name: 'Carlos Rodríguez',
        company: 'Fiestas del Sur',
        text: 'Hemos usado sus carpas en múltiples eventos. Siempre cumplen con los tiempos y la calidad prometida.',
        rating: 5,
      },
    ],
    cta: {
      title: '¿Necesitas una carpa para tu evento?',
      description:
        'Contáctanos para recibir una cotización personalizada y asesoramiento experto sobre la mejor opción para tu evento.',
      buttonText: 'Solicitar Cotización',
    },
  },

  escenarios: {
    hero: {
      title: 'Escenarios y Tarimas',
      subtitle: 'Eleva tu evento al siguiente nivel',
      description:
        'Escenarios profesionales y tarimas de alta calidad para presentaciones, shows y eventos que requieren un espacio elevado.',
      image: '/catalogo/escenario.jpg',
      features: [
        'Múltiples alturas disponibles',
        'Estructura segura y estable',
        'Instalación profesional',
        'Personalización de medidas',
      ],
    },
    products: [
      {
        id: 'escenario-2x3',
        title: 'Escenario 2x3 metros',
        description: 'Perfecto para presentaciones pequeñas y shows íntimos',
        image: '/catalogo/escenario.jpg',
        features: [
          'Altura ajustable',
          'Escaleras de acceso',
          'Barandas de seguridad',
        ],
        capacity: '2-3 personas',
        area: '6 m²',
        price: '$25.000',
      },
      {
        id: 'escenario-4x6',
        title: 'Escenario 4x6 metros',
        description: 'Ideal para bandas en vivo y presentaciones corporativas',
        image: '/catalogo/escenario.jpg',
        features: [
          'Altura estándar 60cm',
          'Escaleras laterales',
          'Barandas removibles',
        ],
        capacity: '5-8 personas',
        area: '24 m²',
        price: '$45.000',
      },
      {
        id: 'tarima-3x3',
        title: 'Tarima 3x3 metros',
        description: 'Excelente para DJs y presentaciones especiales',
        image: '/catalogo/escenario.jpg',
        features: [
          'Altura 30cm',
          'Superficie antideslizante',
          'Fácil transporte',
        ],
        capacity: '2-4 personas',
        area: '9 m²',
        price: '$20.000',
      },
    ],
    benefits: {
      title: 'Ventajas de nuestros escenarios',
      items: [
        'Estructuras certificadas y seguras',
        'Instalación en menos de 3 horas',
        'Múltiples configuraciones disponibles',
        'Personalización según necesidades',
        'Servicio técnico especializado',
        'Garantía de seguridad total',
      ],
    },
    testimonials: [
      {
        name: 'Ana Martínez',
        company: 'Producciones Musicales',
        text: 'Los escenarios son muy seguros y estables. Perfectos para nuestros shows en vivo.',
        rating: 5,
      },
    ],
    cta: {
      title: '¿Buscas un escenario profesional?',
      description:
        'Te ayudamos a encontrar la solución perfecta para que tu evento tenga el impacto visual que merece.',
      buttonText: 'Consultar Disponibilidad',
    },
  },

  mesas: {
    hero: {
      title: 'Mesas y Sillas',
      subtitle: 'Comodidad y elegancia para tus invitados',
      description:
        'Amplia variedad de mesas y sillas para cualquier tipo de evento, desde reuniones íntimas hasta banquetes masivos.',
      image: '/catalogo/sillasymesas.jpg',
      features: [
        'Múltiples estilos disponibles',
        'Materiales de primera calidad',
        'Entrega y retiro incluido',
        'Limpieza profesional',
      ],
    },
    products: [
      {
        id: 'mesa-redonda-1.2',
        title: 'Mesa Redonda 1.2m',
        description: 'Ideal para 8-10 personas, perfecta para eventos íntimos',
        image: '/catalogo/sillasymesas.jpg',
        features: ['Madera maciza', 'Acabado elegante', 'Fácil transporte'],
        capacity: '8-10 personas',
        area: '1.2m diámetro',
        price: '$8.000',
      },
      {
        id: 'mesa-rectangular-1.8',
        title: 'Mesa Rectangular 1.8m',
        description: 'Perfecta para banquetes y eventos formales',
        image: '/catalogo/sillasymesas.jpg',
        features: ['Madera de pino', 'Patas plegables', 'Superficie lisa'],
        capacity: '6-8 personas',
        area: '1.8x0.75m',
        price: '$12.000',
      },
      {
        id: 'silla-elegante',
        title: 'Silla Elegante',
        description: 'Silla cómoda y elegante para eventos especiales',
        image: '/catalogo/sillasymesas.jpg',
        features: ['Respaldo alto', 'Asiento acolchado', 'Patas de metal'],
        capacity: '1 persona',
        area: 'Individual',
        price: '$3.500',
      },
    ],
    benefits: {
      title: 'Beneficios de nuestro mobiliario',
      items: [
        'Mobiliario en excelente estado',
        'Limpieza profesional incluida',
        'Entrega puntual en el día del evento',
        'Retiro al finalizar sin complicaciones',
        'Múltiples estilos para elegir',
        'Precios competitivos del mercado',
      ],
    },
    testimonials: [
      {
        name: 'Laura Fernández',
        company: 'Eventos Sociales',
        text: 'El mobiliario llegó impecable y en perfecto estado. Los invitados quedaron muy satisfechos.',
        rating: 5,
      },
    ],
    cta: {
      title: '¿Necesitas mobiliario para tu evento?',
      description:
        'Tenemos la solución perfecta para que tus invitados disfruten de la máxima comodidad.',
      buttonText: 'Ver Catálogo Completo',
    },
  },

  vajilla: {
    hero: {
      title: 'Vajilla y Cristalería',
      subtitle: 'Elegancia en cada detalle',
      description:
        'Vajilla de alta calidad y cristalería elegante para hacer de tu evento una experiencia gastronómica memorable.',
      image: '/catalogo/vajilla.jpg',
      features: [
        'Vajilla de porcelana premium',
        'Cristalería de alta calidad',
        'Cubiertos de acero inoxidable',
        'Limpieza profesional incluida',
      ],
    },
    products: [
      {
        id: 'vajilla-basica',
        title: 'Vajilla Básica',
        description: 'Set completo de vajilla para eventos informales',
        image: '/catalogo/vajilla.jpg',
        features: [
          'Plato llano',
          'Plato hondo',
          'Taza de café',
          'Plato de postre',
        ],
        capacity: '1 persona',
        area: 'Set individual',
        price: '$2.500',
      },
      {
        id: 'vajilla-premium',
        title: 'Vajilla Premium',
        description: 'Vajilla elegante para eventos especiales y formales',
        image: '/catalogo/vajilla.jpg',
        features: [
          'Plato llano fino',
          'Plato hondo elegante',
          'Taza de té',
          'Plato de postre',
        ],
        capacity: '1 persona',
        area: 'Set individual',
        price: '$4.000',
      },
      {
        id: 'cristaleria-completa',
        title: 'Cristalería Completa',
        description: 'Set completo de copas para diferentes tipos de bebidas',
        image: '/catalogo/vajilla.jpg',
        features: [
          'Copa de agua',
          'Copa de vino tinto',
          'Copa de vino blanco',
          'Copa de champagne',
        ],
        capacity: '1 persona',
        area: 'Set individual',
        price: '$3.500',
      },
    ],
    benefits: {
      title: '¿Por qué elegir nuestra vajilla?',
      items: [
        'Materiales de primera calidad',
        'Diseños elegantes y modernos',
        'Limpieza profesional incluida',
        'Empaque seguro para transporte',
        'Múltiples estilos disponibles',
        'Garantía de satisfacción',
      ],
    },
    testimonials: [
      {
        name: 'Roberto Silva',
        company: 'Catering Gourmet',
        text: 'La vajilla es de excelente calidad y llega impecable. Nuestros clientes siempre quedan satisfechos.',
        rating: 5,
      },
    ],
    cta: {
      title: '¿Quieres elevar la presentación de tu evento?',
      description:
        'Nuestra vajilla y cristalería harán que cada plato se vea como una obra de arte.',
      buttonText: 'Ver Colección Completa',
    },
  },

  climatizacion: {
    hero: {
      title: 'Sistemas de Climatización',
      subtitle: 'Temperatura perfecta para tu evento todo el año',
      description:
        'Soluciones de climatización profesionales (calefacción y aire acondicionado) para mantener a tus invitados cómodos en cualquier época del año.',
      image: '/climatizacion/piramide.webp',
      features: [
        'Calefacción y aire acondicionado',
        'Múltiples potencias disponibles',
        'Instalación profesional',
        'Mantenimiento incluido',
        'Seguridad garantizada',
      ],
    },
    products: [
      {
        id: 'piramide-8k',
        title: 'Sistema Piramide 8K',
        description: 'Ideal para espacios exteriores y eventos al aire libre',
        image: '/climatizacion/piramide.webp',
        features: ['Diseño piramidal', 'Bajo consumo', 'Fácil transporte'],
        capacity: '8K calorías',
        area: 'Espacios exteriores',
        price: '$18.000',
      },
      {
        id: 'canon-8k',
        title: 'Cañón 8.000 Calorías',
        description: 'Perfecto para espacios reducidos y eventos íntimos',
        image: '/climatizacion/cañon_800.webp',
        features: [
          'Alto rendimiento',
          'Encendido automático',
          'Termostato digital',
        ],
        capacity: '8K+ calorías',
        area: 'Espacios reducidos',
        price: '$22.000',
      },
      {
        id: 'calefactor-35k',
        title: 'Sistema 35.000 Calorías',
        description: 'Excelente para reuniones medianas y eventos corporativos',
        image: '/climatizacion/Calefactor_35K.webp',
        features: [
          'Alta potencia',
          'Control de temperatura',
          'Sistema de seguridad',
        ],
        capacity: '35K calorías',
        area: '60 m²',
        price: '$45.000',
      },
      {
        id: 'calefactor-45k',
        title: 'Sistema 45.000 Calorías',
        description: 'Ideal para eventos grandes y espacios amplios',
        image: '/climatizacion/45k.webp',
        features: ['Máxima potencia', 'Control avanzado', 'Monitoreo remoto'],
        capacity: '45K calorías',
        area: '80 m²',
        price: '$55.000',
      },
    ],
    benefits: {
      title: 'Ventajas de nuestros sistemas de climatización',
      items: [
        'Equipos certificados y seguros',
        'Instalación profesional incluida',
        'Mantenimiento preventivo',
        'Monitoreo durante el evento',
        'Múltiples potencias disponibles',
        'Garantía de funcionamiento',
        'Soluciones para todas las estaciones',
      ],
    },
    testimonials: [
      {
        name: 'Patricia López',
        company: 'Eventos de Invierno',
        text: 'Los sistemas de climatización funcionaron perfectamente. El evento fue un éxito a pesar del frío.',
        rating: 5,
      },
    ],
    cta: {
      title:
        '¿Quieres que tu evento tenga la temperatura perfecta todo el año?',
      description:
        'Nuestros sistemas de climatización garantizan el confort de tus invitados en cualquier condición climática.',
      buttonText: 'Consultar Soluciones Disponibles',
    },
  },
};

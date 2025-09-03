# ServiceLayout - Layout Reutilizable para Páginas de Servicios

## Descripción

El `ServiceLayout` es un componente reutilizable que proporciona una estructura consistente para todas las páginas de servicios individuales. Permite factorizar el estilo y pasar los datos específicos de cada servicio a través de constantes.

## Estructura del Layout

El layout incluye las siguientes secciones:

1. **Breadcrumb** - Navegación de migas de pan para mejor UX
2. **Hero Section** - Imagen de fondo con título, subtítulo, descripción y características principales
3. **Products Section** - Galería de productos del servicio con imágenes, descripciones y características
4. **Benefits Section** - Lista de ventajas y beneficios del servicio
5. **Testimonials Section** - Opiniones de clientes (opcional)
6. **CTA Section** - Llamada a la acción con botón de contacto

## Uso Básico

```tsx
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { SERVICE_DATA } from '@/lib/constants';

export default function MiServicioPage() {
  const serviceData = SERVICE_DATA.miServicio;

  return (
    <ServiceLayout
      hero={serviceData.hero}
      products={serviceData.products}
      benefits={serviceData.benefits}
      testimonials={serviceData.testimonials}
      cta={serviceData.cta}
      serviceName="Nombre del Servicio"
    />
  );
}
```

## Estructura de Datos

### Hero

```tsx
hero: {
  title: string;           // Título principal
  subtitle: string;        // Subtítulo
  description: string;     // Descripción detallada
  image: string;           // Ruta de la imagen de fondo
  features: string[];      // Lista de características principales
}
```

### Products

```tsx
products: Product[];

interface Product {
  id: string;              // Identificador único
  title: string;           // Nombre del producto
  description: string;     // Descripción del producto
  image: string;           // Ruta de la imagen
  features?: string[];     // Características del producto (opcional)
  capacity?: string;       // Capacidad (opcional)
  area?: string;           // Área/medidas (opcional)
  price?: string;          // Precio (opcional)
}
```

### Benefits

```tsx
benefits: {
  title: string;           // Título de la sección
  items: string[];         // Lista de beneficios
}
```

### Testimonials (Opcional)

```tsx
testimonials?: {
  name: string;            // Nombre del cliente
  company: string;         // Empresa del cliente
  text: string;            // Testimonio
  rating: number;          // Calificación (1-5)
}[];
```

### CTA

```tsx
cta: {
  title: string; // Título de la llamada a la acción
  description: string; // Descripción
  buttonText: string; // Texto del botón
}
```

### ServiceName

```tsx
serviceName: string; // Nombre del servicio para el breadcrumb
```

## Integración con el Home

### ServicesSection

El `ServicesSection` en la página principal ahora está conectado con las páginas de servicios individuales:

- **Botones "Ver Trabajos"** - Enlazan a las páginas específicas de cada servicio
- **Botones "Catálogo"** - Enlazan a las páginas específicas de cada servicio
- **Botón "Ver Todos los Servicios"** - Enlaza a la página general de servicios (`/servicios`)

### Navegación

- **Navbar** - Incluye enlace directo a "Servicios" en la navegación principal
- **Breadcrumb** - Navegación de migas de pan en cada página de servicio

## Ejemplo de Implementación

### 1. Agregar Datos del Servicio

En `lib/constants.ts`, agregar los datos del nuevo servicio:

```tsx
export const SERVICE_DATA = {
  // ... otros servicios

  miNuevoServicio: {
    hero: {
      title: 'Mi Nuevo Servicio',
      subtitle: 'Descripción corta',
      description: 'Descripción detallada del servicio...',
      image: '/ruta/a/imagen.jpg',
      features: ['Característica 1', 'Característica 2', 'Característica 3'],
    },
    products: [
      {
        id: 'producto-1',
        title: 'Producto 1',
        description: 'Descripción del producto...',
        image: '/ruta/a/producto.jpg',
        features: ['Feature 1', 'Feature 2'],
        capacity: '10 personas',
        area: '20 m²',
        price: '$15.000',
      },
    ],
    benefits: {
      title: '¿Por qué elegirnos?',
      items: ['Beneficio 1', 'Beneficio 2', 'Beneficio 3'],
    },
    testimonials: [
      {
        name: 'Cliente Ejemplo',
        company: 'Empresa Ejemplo',
        text: 'Testimonio del cliente...',
        rating: 5,
      },
    ],
    cta: {
      title: '¿Listo para empezar?',
      description: 'Descripción de la llamada a la acción...',
      buttonText: 'Contactar',
    },
  },
};
```

### 2. Crear la Página del Servicio

Crear el archivo `app/servicios/mi-nuevo-servicio/page.tsx`:

```tsx
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { SERVICE_DATA } from '@/lib/constants';

export default function MiNuevoServicioPage() {
  const serviceData = SERVICE_DATA.miNuevoServicio;

  return (
    <ServiceLayout
      hero={serviceData.hero}
      products={serviceData.products}
      benefits={serviceData.benefits}
      testimonials={serviceData.testimonials}
      cta={serviceData.cta}
      serviceName="Mi Nuevo Servicio"
    />
  );
}
```

### 3. Actualizar ServicesSection (Opcional)

Si quieres que el nuevo servicio aparezca en el home, actualiza `components/sections/ServicesSection.tsx`:

```tsx
const mainServices = [
  // ... servicios existentes
  {
    title: 'Mi Nuevo Servicio',
    description: 'Descripción del nuevo servicio...',
    icon: MiIcono,
    image: '/ruta/a/imagen.jpg',
    alt: 'Alt del nuevo servicio',
    href: '/servicios/mi-nuevo-servicio',
  },
];
```

## Personalización

### Modificar el Layout

Para personalizar el layout, edita el componente `ServiceLayout` en `components/layout/ServiceLayout.tsx`. Puedes:

- Cambiar colores y estilos
- Agregar nuevas secciones
- Modificar la estructura de las secciones existentes
- Agregar animaciones o efectos

### Agregar Nuevas Secciones

Para agregar una nueva sección, modifica la interfaz `ServiceLayoutProps` y el componente:

```tsx
interface ServiceLayoutProps {
  // ... propiedades existentes
  nuevaSeccion?: {
    titulo: string;
    contenido: string;
  };
}

export function ServiceLayout({
  // ... props existentes
  nuevaSeccion,
}: ServiceLayoutProps) {
  return (
    <>
      {/* ... secciones existentes */}

      {nuevaSeccion && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              {nuevaSeccion.titulo}
            </h2>
            <p className="text-center text-gray-600">
              {nuevaSeccion.contenido}
            </p>
          </div>
        </section>
      )}

      {/* ... resto del layout */}
    </>
  );
}
```

## Ventajas del Sistema

1. **Consistencia**: Todas las páginas de servicios mantienen el mismo diseño y estructura
2. **Mantenibilidad**: Los cambios en el diseño se aplican a todas las páginas automáticamente
3. **Reutilización**: No es necesario duplicar código HTML/JSX
4. **Flexibilidad**: Cada servicio puede tener contenido único manteniendo la estructura
5. **SEO**: Estructura consistente que facilita la optimización para motores de búsqueda
6. **UX**: Navegación intuitiva con breadcrumbs y enlaces coherentes
7. **Integración**: Conexión perfecta entre el home y las páginas de servicios

## Servicios Disponibles

Actualmente están implementados los siguientes servicios:

- **Carpas** (`/servicios/carpas`)
- **Escenarios** (`/servicios/escenarios`)
- **Mesas** (`/servicios/mesas`)
- **Vajilla** (`/servicios/vajilla`)
- **Climatización** (`/servicios/climatizacion`)

## Página Principal de Servicios

La página `/servicios` muestra un resumen de todos los servicios disponibles con enlaces a cada uno individual.

## Flujo de Navegación

1. **Home** → **ServicesSection** → **Página de Servicio Individual**
2. **Navbar** → **Servicios** → **Página General de Servicios**
3. **Breadcrumb** → **Navegación entre páginas de servicios**
4. **Footer** → **Enlaces a servicios específicos**

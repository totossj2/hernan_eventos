# Uso del Componente Form

Este documento muestra cómo integrar y usar el componente Form en tu aplicación Next.js.

## 📦 Importación Básica

```tsx
import ContactForm from '@/components/sections/Form';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <ContactForm />
      </div>
    </div>
  );
}
```

## 🎨 Integración con Layout Existente

### En una página de servicios

```tsx
import ContactForm from '@/components/sections/Form';
import ServiceLayout from '@/components/layout/ServiceLayout';

export default function ServiciosPage() {
  return (
    <ServiceLayout>
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones completas para todo tipo de eventos
            </p>
          </div>

          {/* Contenido de servicios aquí */}

          <div className="mt-20">
            <ContactForm />
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
```

### En la página principal

```tsx
import ContactForm from '@/components/sections/Form';
import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesSection />

      {/* Sección de contacto */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para tu evento?
            </h2>
            <p className="text-lg text-gray-600">
              Solicita tu presupuesto personalizado
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
```

## 🔧 Personalización del Componente

### Cambiar el título y descripción

```tsx
// Modificar en Form.tsx
<div className="text-center mb-8">
  <h2 className="text-3xl font-bold text-gray-900 mb-2">
    {/* Cambiar este texto */}
    Solicita tu presupuesto
  </h2>
  <p className="text-gray-600">
    {/* Cambiar esta descripción */}
    Completa el formulario y te contactaremos para coordinar tu evento
  </p>
</div>
```

### Agregar campos adicionales

1. **Actualizar el schema de validación:**

```tsx
const contactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  phone: z.string().min(8, 'El teléfono debe tener al menos 8 dígitos'),
  company: z.string().optional(),
  eventType: z.string().min(1, 'Selecciona un tipo de evento'),
  eventDate: z.string().min(1, 'Selecciona una fecha'),
  guests: z.string().min(1, 'Indica el número de invitados'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  // Agregar nuevo campo
  budget: z.string().optional(),
});
```

2. **Agregar el campo en el formulario:**

```tsx
<FormField
  control={form.control}
  name="budget"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Presupuesto estimado (opcional)</FormLabel>
      <FormControl>
        <Input placeholder="Ej: $50,000 - $100,000" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
```

3. **Actualizar la API route:**

```tsx
// En app/api/contact/route.ts
const contactFormSchema = z.object({
  // ... campos existentes
  budget: z.string().optional(),
});
```

## 🎯 Casos de Uso Comunes

### Formulario de contacto general

```tsx
// Usar el componente tal como está
<ContactForm />
```

### Formulario específico para servicios

```tsx
// Modificar los tipos de eventos
const eventTypes = [
  'Carpas y estructuras',
  'Climatización',
  'Escenarios',
  'Mesas y sillas',
  'Vajilla',
  'Otro',
];
```

### Formulario para eventos corporativos

```tsx
// Modificar los rangos de invitados
const guestRanges = [
  '10-25 personas',
  '26-50 personas',
  '51-100 personas',
  '101-200 personas',
  'Más de 200 personas',
];
```

## 🔄 Estados del Formulario

El componente maneja automáticamente:

1. **Estado inicial**: Formulario vacío
2. **Estado de carga**: Mientras se envía
3. **Estado de éxito**: Mensaje enviado correctamente
4. **Estado de error**: Si hay problemas

### Personalizar mensajes de éxito

```tsx
// En Form.tsx, modificar el mensaje de éxito
if (response.ok) {
  toast.success('¡Mensaje enviado con éxito! Te contactaremos pronto.');
  // Cambiar por:
  toast.success(
    '¡Gracias! Recibimos tu solicitud y te responderemos en 24 horas.'
  );
  setIsSubmitted(true);
  form.reset();
}
```

## 📱 Responsive Design

El formulario es completamente responsive:

- **Mobile**: Campos apilados verticalmente
- **Tablet**: Grid de 2 columnas para campos relacionados
- **Desktop**: Layout optimizado con espaciado generoso

## 🎨 Temas y Estilos

### Cambiar colores

```tsx
// En tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#your-color',
          foreground: '#your-text-color',
        },
      },
    },
  },
};
```

### Cambiar estilos del botón

```tsx
// En Form.tsx
<Button
  type="submit"
  disabled={isSubmitting}
  className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700"
>
  {/* contenido del botón */}
</Button>
```

## 🚀 Optimizaciones

### Lazy loading

```tsx
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/sections/Form'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
});
```

### Preload en hover

```tsx
import { Suspense } from 'react';

function ContactSection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}
```

## 🔍 Testing

### Probar el formulario

1. Llenar todos los campos requeridos
2. Probar validaciones (email inválido, campos vacíos)
3. Verificar el envío exitoso
4. Probar en diferentes dispositivos

### Debug en desarrollo

```tsx
// Agregar logs para debugging
const onSubmit = async (data: ContactFormData) => {
  console.log('Form data:', data); // Para debugging
  setIsSubmitting(true);
  // ... resto del código
};
```


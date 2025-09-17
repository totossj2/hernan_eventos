# Configuración del Formulario de Contacto

Este documento explica cómo configurar y personalizar el formulario de contacto que utiliza Next.js API Routes.

## 🚀 Características

- ✅ Validación con Zod (cliente y servidor)
- ✅ React Hook Form para manejo de estado
- ✅ UI components con shadcn/ui
- ✅ Notificaciones con Sonner
- ✅ Diseño responsive
- ✅ Estados de carga y éxito
- ✅ API Route de Next.js

## 📋 Campos del Formulario

- **Nombre completo** (requerido)
- **Email** (requerido, validado)
- **Teléfono** (requerido)
- **Empresa** (opcional)
- **Tipo de evento** (requerido, dropdown)
- **Fecha del evento** (requerido)
- **Número de invitados** (requerido, dropdown)
- **Mensaje** (requerido)

## 🔧 Configuración de Email

### Opción 1: Nodemailer (Gmail)

1. Instalar dependencia:

```bash
npm install nodemailer
npm install @types/nodemailer --save-dev
```

2. Configurar variables de entorno en `.env.local`:

```env
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-contraseña-de-aplicación
```

3. Habilitar autenticación de 2 factores en Gmail y generar contraseña de aplicación.

4. Descomentar el código de Nodemailer en `app/api/contact/route.ts`.

### Opción 2: SendGrid

1. Instalar dependencia:

```bash
npm install @sendgrid/mail
```

2. Configurar variables de entorno:

```env
SENDGRID_API_KEY=tu-api-key
SENDGRID_FROM_EMAIL=tu-email@tudominio.com
```

3. Implementar en `app/api/contact/route.ts`:

```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const msg = {
  to: 'destinatario@email.com',
  from: process.env.SENDGRID_FROM_EMAIL!,
  subject: `Nueva solicitud - ${data.eventType}`,
  html: `
    <h2>Nueva solicitud de presupuesto</h2>
    <p><strong>Nombre:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <!-- resto de campos -->
  `,
};

await sgMail.send(msg);
```

### Opción 3: Resend

1. Instalar dependencia:

```bash
npm install resend
```

2. Configurar variables de entorno:

```env
RESEND_API_KEY=tu-api-key
```

3. Implementar:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'destinatario@email.com',
  subject: `Nueva solicitud - ${data.eventType}`,
  html: `
    <h2>Nueva solicitud de presupuesto</h2>
    <!-- contenido del email -->
  `,
});
```

## 🗄️ Base de Datos (Opcional)

### Con Prisma

1. Instalar Prisma:

```bash
npm install prisma @prisma/client
npx prisma init
```

2. Configurar schema en `prisma/schema.prisma`:

```prisma
model Contact {
  id        String   @id @default(cuid())
  name      String
  email     String
  phone     String
  company   String?
  eventType String
  eventDate DateTime
  guests    String
  message   String
  createdAt DateTime @default(now())
}
```

3. Generar y ejecutar migración:

```bash
npx prisma generate
npx prisma db push
```

4. Descomentar el código de Prisma en `app/api/contact/route.ts`.

## 🛡️ Protección Anti-Spam

### reCAPTCHA v3

1. Instalar:

```bash
npm install react-google-recaptcha-v3
```

2. Configurar en `.env.local`:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu-site-key
RECAPTCHA_SECRET_KEY=tu-secret-key
```

3. Implementar en el formulario:

```typescript
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';

// En el componente Form
const { executeRecaptcha } = useGoogleReCaptcha();

const onSubmit = async (data: ContactFormData) => {
  const token = await executeRecaptcha('contact_form');

  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, recaptchaToken: token }),
  });
};
```

4. Validar en la API:

```typescript
// En route.ts
const recaptchaResponse = await fetch(
  `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${data.recaptchaToken}`,
  { method: 'POST' }
);

const recaptchaData = await recaptchaResponse.json();

if (!recaptchaData.success || recaptchaData.score < 0.5) {
  return NextResponse.json(
    { success: false, message: 'Verificación de seguridad fallida' },
    { status: 400 }
  );
}
```

## 🎨 Personalización

### Cambiar estilos

Los estilos están basados en Tailwind CSS. Puedes modificar:

- Colores en `tailwind.config.ts`
- Componentes UI en `components/ui/`
- Estilos específicos del formulario en `components/sections/Form.tsx`

### Agregar campos

1. Actualizar el schema de Zod en `Form.tsx` y `route.ts`
2. Agregar el campo en el formulario
3. Actualizar la función `sendEmail` para incluir el nuevo campo

### Cambiar tipos de eventos

Modificar el array `eventTypes` en `Form.tsx`:

```typescript
const eventTypes = [
  'Cumpleaños',
  'Casamiento',
  'Evento corporativo',
  'Fiesta de fin de año',
  'Aniversario',
  'Otro',
  // Agregar nuevos tipos aquí
];
```

## 🚀 Despliegue

### Vercel

1. Configurar variables de entorno en el dashboard de Vercel
2. Desplegar automáticamente desde GitHub

### Netlify

1. Configurar variables de entorno en el dashboard de Netlify
2. Usar `netlify.toml` para configurar funciones serverless

### Otros

Asegúrate de configurar las variables de entorno en tu plataforma de hosting.

## 🔍 Debugging

### Logs del servidor

Los logs aparecen en:

- **Desarrollo**: Terminal donde ejecutas `npm run dev`
- **Producción**: Dashboard de tu plataforma de hosting

### Errores comunes

1. **Error de CORS**: Asegúrate de que la API route esté en `/api/contact`
2. **Error de validación**: Revisa que los datos coincidan con el schema de Zod
3. **Error de email**: Verifica las credenciales y configuración del servicio de email

## 📞 Soporte

Para problemas específicos:

1. Revisa los logs del servidor
2. Verifica la configuración de variables de entorno
3. Prueba el endpoint con Postman o similar
4. Revisa la documentación del servicio de email elegido


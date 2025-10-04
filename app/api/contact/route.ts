import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

// Schema de validación del lado del servidor para formulario simplificado
const quotationFormSchema = z.object({
  // Datos de contacto
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  phone: z
    .string()
    .min(8, 'El teléfono debe tener al menos 8 dígitos')
    .max(15, 'El teléfono no puede tener más de 15 dígitos')
    .regex(
      /^[\+]?[0-9\s\-\(\)]+$/,
      'Ingresa un número de teléfono válido (solo números, espacios, guiones y paréntesis)'
    )
    .transform((val) => val.replace(/[\s\-\(\)]/g, '')), // Limpiar formato para almacenamiento

  // Datos del evento
  eventType: z.string().min(1, 'Selecciona un tipo de evento'),
  eventDate: z.string().min(1, 'Ingresa el día y mes del evento'),
  message: z.string().min(1, 'El mensaje es obligatorio'),

  // Campos adicionales del sistema
  formType: z.string().optional(),
  timestamp: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Parsear el body de la request
    const body = await request.json();

    // Validar los datos con Zod
    const validatedData = quotationFormSchema.parse(body);

    // Enviar email con Resend
    await sendEmail(validatedData);

    // También podrías guardar en una base de datos aquí
    // await saveToDatabase(validatedData)

    return NextResponse.json(
      {
        success: true,
        message: 'Mensaje enviado correctamente',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Datos inválidos',
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Error interno del servidor',
      },
      { status: 500 }
    );
  }
}

// Envío de email con Resend
async function sendEmail(data: z.infer<typeof quotationFormSchema>) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.RESEND_FROM; // Ej: "Hernan Eventos <no-reply@tu-dominio.com>"
  const toAddress = process.env.RESEND_TO; // Destino interno donde recibirás las solicitudes

  if (!apiKey) {
    throw new Error('Falta RESEND_API_KEY en variables de entorno');
  }
  if (!fromAddress) {
    throw new Error('Falta RESEND_FROM en variables de entorno');
  }
  if (!toAddress) {
    throw new Error('Falta RESEND_TO en variables de entorno');
  }

  const resend = new Resend(apiKey);

  const subject = `CONSULTA WEB - ${data.eventType}`;
  const html = `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji; line-height:1.5; color:#111827">
      <h2 style="margin:0 0 8px; font-size:20px;">📋 CONSULTA WEB</h2>
      <p style="margin:0 0 12px;">Has recibido una nueva consulta desde el formulario web.</p>
      <table style="border-collapse: collapse; width:100%;">
        <tbody>
          <tr><td style="padding:6px 0; width:160px; color:#6B7280; font-weight:500;">Nombre</td><td style="padding:6px 0;">${escapeHtml(
            data.name
          )}</td></tr>
          <tr><td style="padding:6px 0; color:#6B7280; font-weight:500;">Teléfono</td><td style="padding:6px 0;">${escapeHtml(
            data.phone
          )}</td></tr>
          <tr><td style="padding:6px 0; color:#6B7280; font-weight:500;">Tipo de evento</td><td style="padding:6px 0;">${escapeHtml(
            data.eventType
          )}</td></tr>
          <tr><td style="padding:6px 0; color:#6B7280; font-weight:500;">Día y mes del evento</td><td style="padding:6px 0;">${escapeHtml(
            data.eventDate
          )}</td></tr>
        </tbody>
      </table>
      <div style="margin-top:16px;">
        <div style="color:#6B7280; margin-bottom:4px; font-weight:500;">💬 Mensaje</div>
        <div style="white-space:pre-wrap; background:#f9fafb; padding:8px; border-radius:6px;">${escapeHtml(
          data.message
        )}</div>
      </div>
      <div style="margin-top:16px; padding:8px; background:#ecfdf5; border-radius:6px; font-size:12px; color:#059669;">
        <strong>📱 Acción recomendada:</strong> Contactar por WhatsApp al ${
          data.phone
        } para enviar cotización personalizada.
      </div>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: fromAddress,
    to: [toAddress],
    subject,
    html,
  } as any);

  if (error) {
    throw new Error(
      `Error al enviar email con Resend: ${error.message || String(error)}`
    );
  }
}

// Escapar HTML básico para evitar inyección en correos
function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Opcional: Función para guardar en base de datos
// async function saveToDatabase(data: z.infer<typeof contactFormSchema>) {
//   // Aquí podrías guardar en MongoDB, PostgreSQL, etc.
//   console.log('Guardando en base de datos:', data);

//   // Ejemplo con Prisma:
//   /*
//   import { PrismaClient } from '@prisma/client'

//   const prisma = new PrismaClient()

//   await prisma.contact.create({
//     data: {
//       name: data.name,
//       email: data.email,
//       phone: data.phone,
//       company: data.company,
//       eventType: data.eventType,
//       eventDate: new Date(data.eventDate),
//       guests: data.guests,
//       message: data.message,
//       createdAt: new Date()
//     }
//   })
//   */
// }

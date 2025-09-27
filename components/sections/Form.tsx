'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';
import {
  Loader2,
  Send,
  CheckCircle,
  MessageCircle,
  Clock,
  Users,
  Calendar,
} from 'lucide-react';
import { CONTACT, EVENT_TYPES as CONSTANT_EVENT_TYPES } from '@/lib/constants';

// Schema de validación con Zod para el formulario de cotización
const quotationFormSchema = z.object({
  // Datos de contacto
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  phone: z.string().min(8, 'El teléfono debe tener al menos 8 dígitos'),
  email: z
    .string()
    .email('Ingresa un email válido')
    .optional()
    .or(z.literal('')),

  // Datos del evento
  eventDate: z.string().min(1, 'Selecciona una fecha para tu evento'),
  guests: z.string().min(1, 'Indica la cantidad de invitados'),
  eventType: z.string().min(1, 'Selecciona un tipo de evento'),
  location: z.string().min(2, 'Indica la dirección o ciudad del evento'),

  // Servicios
  services: z.array(z.string()).min(1, 'Selecciona al menos un servicio'),

  // Campo opcional
  message: z.string().optional(),

  // Extras
  urgentEvent: z.boolean().optional(),
});

type QuotationFormData = z.infer<typeof quotationFormSchema>;

// Opciones para el formulario de cotización
const eventTypes = CONSTANT_EVENT_TYPES;

const guestRanges = [
  '0-50 personas',
  '50-100 personas',
  '100-200 personas',
  '200-500 personas',
  '+500 personas',
];

const availableServices = [
  { id: 'carpa', label: 'Carpa' },
  { id: 'gazebo', label: 'Gazebo' },

  { id: 'climatizacion', label: 'Climatización' },
  { id: 'escenario', label: 'Escenario' },
  { id: 'tarima', label: 'Tarima' },
  { id: 'vajilla', label: 'Vajilla' },
  { id: 'sillas-mesas', label: 'Sillas / Mesas' },
  { id: 'vallas', label: 'Vallas' },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] =
    useState<QuotationFormData | null>(null);

  const form = useForm<QuotationFormData>({
    resolver: zodResolver(quotationFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      eventDate: '',
      guests: '',
      eventType: '',
      location: '',
      services: [],
      message: '',
      urgentEvent: false,
    },
  });

  const onSubmit = async (data: QuotationFormData) => {
    setIsSubmitting(true);

    try {
      // Limpiar email vacío para evitar errores de validación
      const formData = {
        ...data,
        email: data.email || undefined,
        formType: 'quotation',
        timestamp: new Date().toISOString(),
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(
          '¡Cotización solicitada con éxito! Te contactaremos en menos de 2 horas por WhatsApp.'
        );
        setIsSubmitted(true);
        setLastSubmittedData(data);
        form.reset();
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Error al enviar la solicitud');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(
        'Error de conexión. Intenta nuevamente o contactanos por WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const formData =
      isSubmitted && lastSubmittedData ? lastSubmittedData : form.getValues();

    // Mapear servicios para que se vean mejor
    const servicesMap: { [key: string]: string } = {
      carpa: 'Carpa',
      gazebo: 'Gazebo',
      climatizacion: 'Climatización',
      escenario: 'Escenario',
      tarima: 'Tarima',
      vajilla: 'Vajilla',
      'sillas-mesas': 'Sillas y Mesas',
      vallas: 'Vallas',
    };

    const selectedServices =
      formData.services
        ?.map((service) => servicesMap[service] || service)
        .join(', ') || 'Por definir';

    const message = `Hola Hernan! Mi nombre es ${
      formData.name
    } y quiero solicitar una cotización para mi evento:

*Fecha del evento:* ${formData.eventDate || 'Por definir'}
*Cantidad de invitados:* ${formData.guests || 'Por definir'}
*Tipo de evento:* ${formData.eventType || 'Por definir'}
*Ubicación:* ${formData.location || 'Por definir'}

*Servicios que necesito:*
${selectedServices}

${formData.urgentEvent ? '*¡EVENTO URGENTE!* - Menos de 7 días' : ''}

*Mi teléfono:* ${formData.phone || 'No proporcionado'}
${formData.email ? `*Email:* ${formData.email}` : ''}

${
  formData.message
    ? `*Mensaje adicional:*
${formData.message}`
    : ''
}

Espero tu respuesta!`;

    const encodedMessage = encodeURIComponent(message);
    const baseWhatsappUrl = CONTACT.whatsapp.split('?')[0];
    window.open(`${baseWhatsappUrl}?text=${encodedMessage}`, '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-4xl mx-auto p-8 bg-green-50 border border-green-200 rounded-xl text-center shadow-lg">
        <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
        <h3 className="text-3xl font-bold text-green-800 mb-4">
          ¡Cotización solicitada con éxito!
        </h3>
        <p className="text-green-700 mb-6 text-lg">
          Te contactaremos en menos de 2 horas por WhatsApp con tu presupuesto
          personalizado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-green-300 text-green-700 hover:bg-green-100 px-6 py-3"
          >
            Solicitar otra cotización
          </Button>
          <Button
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 px-6 py-3"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chatear por WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border border-gray-100">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solicita tu cotización
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Completa el formulario y recibe tu presupuesto en menos de 2 horas
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-green-600 bg-green-50 px-6 py-3 rounded-lg">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Respuesta en 2 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Por WhatsApp</span>
            </div>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Datos de contacto */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Datos de contacto
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">
                        Nombre y apellido *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Tu nombre completo"
                          className="h-12 text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">
                        Teléfono (WhatsApp) *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+54 11 1234-5678"
                          className="h-12 text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">
                        Email (opcional pero recomendado)
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          className="h-12 text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Datos del evento */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Datos del evento
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="eventDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">
                        Fecha del evento *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          className="h-12 text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">
                        Cantidad de invitados *
                      </FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Selecciona el rango</option>
                          {guestRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">
                        Tipo de evento *
                      </FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Selecciona un tipo</option>
                          {eventTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">
                        Dirección o ciudad del evento *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Buenos Aires, CABA..."
                          className="h-12 text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Servicios */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Servicios que te interesan *
              </h3>
              <FormField
                control={form.control}
                name="services"
                render={() => (
                  <FormItem>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {availableServices.map((service) => (
                        <FormField
                          key={service.id}
                          control={form.control}
                          name="services"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={service.id}
                                className="flex flex-row items-center space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(service.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            service.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== service.id
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-base font-normal cursor-pointer">
                                  {service.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Campo de texto libre */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    Contanos más sobre tu evento (opcional)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Contanos más sobre tu evento (ej. colores, estilo, particularidades del espacio)"
                      className="min-h-[120px] text-base resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Extras */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <FormField
                control={form.control}
                name="urgentEvent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-base font-medium cursor-pointer">
                        Mi evento es dentro de menos de 7 días
                      </FormLabel>
                      <p className="text-sm text-yellow-700">
                        Marcá esta opción si necesitas una respuesta urgente
                      </p>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            {/* Botones de acción */}
            <div className="space-y-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                    Enviando cotización...
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6 mr-3" />
                    Solicitar cotización ahora
                  </>
                )}
              </Button>

              <Button
                type="button"
                onClick={handleWhatsAppClick}
                variant="outline"
                className="w-full h-12 text-base font-medium border-2 border-green-500 text-green-600 hover:bg-green-50 rounded-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chatear por WhatsApp
              </Button>
            </div>

            {/* Aviso */}
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-700 font-medium">
                📱 Respondemos en menos de 2 horas por WhatsApp
              </p>
            </div>
          </form>
        </Form>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Al enviar este formulario, aceptas que nos contactemos contigo para
            coordinar tu evento y enviarte la cotización.
          </p>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Loader2,
  Send,
  CheckCircle,
  MessageCircle,
  Clock,
  Users,
  Calendar,
} from 'lucide-react';
import { EVENT_TYPES } from '@/lib/constants';
import { trackFormSubmit } from '@/lib/tracking';

interface FormData {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  message: string;
}

export default function SimpleForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    eventType: 'default',
    eventDate: '',
    eventLocation: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string>('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Limpiar error del campo cuando el usuario lo modifica
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  // Función para validar teléfono
  const validatePhone = (phone: string): string | null => {
    if (!phone.trim()) return 'El teléfono es obligatorio';
    if (phone.length < 8) return 'El teléfono debe tener al menos 8 dígitos';
    if (phone.length > 15)
      return 'El teléfono no puede tener más de 15 dígitos';
    if (!/^[\+]?[0-9\s\-\(\)]+$/.test(phone)) {
      return 'Ingresa un número de teléfono válido (solo números, espacios, guiones y paréntesis)';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setFieldErrors({});

    // Validaciones frontend
    const errors: Record<string, string> = {};

    const phoneError = validatePhone(formData.phone);
    if (phoneError) {
      errors.phone = phoneError;
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Preparar datos para envío
      const submitData = {
        ...formData,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        // 📊 Track form submission
        trackFormSubmit({
          formName: 'Simple Contact Form',
          formType: 'contact',
          eventType: formData.eventType !== 'default' ? formData.eventType : undefined,
        });

        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          eventType: 'default',
          eventDate: '',
          eventLocation: '',
          message: '',
        });
      } else {
        const errorData = await response.json();

        // Si hay errores de validación específicos del servidor
        if (errorData.errors && Array.isArray(errorData.errors)) {
          const serverErrors: Record<string, string> = {};
          errorData.errors.forEach((err: any) => {
            if (err.path && err.message) {
              serverErrors[err.path[0]] = err.message;
            }
          });
          setFieldErrors(serverErrors);
        } else {
          setError(errorData.message || 'Error al enviar el formulario');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Error de conexión. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section
        id="cotizar"
        className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¡Gracias por tu consulta!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Hemos recibido tu solicitud y nos pondremos en contacto contigo en
              menos de 1 hora.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-[#003056] hover:bg-[#002040] text-white"
            >
              Hacer otra consulta
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="cotizar"
      className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-4xl font-semibold text-gray-900 mb-4">
              Cotizá tu Evento
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Contanos los detalles de tu evento y recibí una cotización
              personalizada en menos de 1 hora
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefits */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                  ¿Por qué elegirnos?
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#003056]" />
                    <span className="text-sm md:text-base text-gray-600 max-w-2xl">
                      Respuesta en menos de 1 hora
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-[#003056]" />
                    <span className="text-sm md:text-base text-gray-600 max-w-2xl">
                      Atención personalizada por WhatsApp
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#003056]" />
                    <span className="text-sm md:text-base text-gray-600 max-w-2xl">
                      35 años de experiencia
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#003056]" />
                    <span className="text-sm md:text-base text-gray-600 max-w-2xl">
                      Más de 700 eventos realizados
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Contact Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nombre completo *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange('name', e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange('phone', e.target.value)
                      }
                      required
                      className={fieldErrors.phone ? 'border-red-500' : ''}
                      placeholder="Ej: 11 1234-5678"
                    />
                    {fieldErrors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Event Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eventType">Tipo de evento *</Label>
                    <select
                      id="eventType"
                      value={formData.eventType}
                      onChange={(e) =>
                        handleInputChange('eventType', e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003056]"
                      required
                    >
                      <option value="default" disabled>
                        Seleccionar
                      </option>
                      {EVENT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="eventDate">Fecha del evento *</Label>
                    <Input
                      id="eventDate"
                      type="text"
                      value={formData.eventDate}
                      onChange={(e) =>
                        handleInputChange('eventDate', e.target.value)
                      }
                      placeholder="Ej: 15 de Junio  "
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="eventLocation">Lugar del evento *</Label>
                  <Input
                    id="eventLocation"
                    type="text"
                    value={formData.eventLocation}
                    onChange={(e) =>
                      handleInputChange('eventLocation', e.target.value)
                    }
                    placeholder="Zona"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange('message', e.target.value)
                    }
                    placeholder="Contanos más detalles sobre tu evento..."
                    rows={3}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#003056] hover:bg-[#002040] text-white"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Solicitar Cotización
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

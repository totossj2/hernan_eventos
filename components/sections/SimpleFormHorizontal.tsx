'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Send, CheckCircle } from 'lucide-react';
import { trackFormSubmit } from '@/lib/tracking';

interface FormData {
  name: string;
  phone: string;
  localidad: string;
  cantidadPersonas: string;
}

export default function SimpleForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    localidad: '',
    cantidadPersonas: '',
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

  // Validación de teléfono
  const validatePhone = (phone: string): string | null => {
    if (!phone.trim()) return 'El teléfono es obligatorio';
    if (!/^[\+]?[0-9\s\-\(\)]+$/.test(phone)) {
      return 'Teléfono inválido';
    }
    return null;
  };

  // Validación de localidad
  const validateLocalidad = (localidad: string): string | null => {
    if (!localidad.trim()) return 'La localidad es obligatoria';
    return null;
  };

  // Validación de cantidad de personas (numérico)
  const validateCantidadPersonas = (cantidad: string): string | null => {
    if (!cantidad.trim()) return 'Cantidad requerida';
    if (!/^\d+$/.test(cantidad)) {
      return 'Ingresa un número válido';
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
    if (phoneError) errors.phone = phoneError;

    const localidadError = validateLocalidad(formData.localidad);
    if (localidadError) errors.localidad = localidadError;

    const cantidadError = validateCantidadPersonas(formData.cantidadPersonas);
    if (cantidadError) errors.cantidadPersonas = cantidadError;

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
          formName: 'Simple Horizontal Form',
          formType: 'quick_quote',
          guests: formData.cantidadPersonas,
        });

        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          localidad: '',
          cantidadPersonas: '',
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
      <section id="cotizar" className="py-6 md:py-8 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className=" text-center">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              ¡Gracias!
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Nos contactaremos en menos de 1 hora.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cotizar" className="py-4 md:py-6 bg-white border-t">
      <div className="container mx-auto px-4">
        <div className="gap-2">
          <h2 className="text-xl md:text-4xl font-semibold text-gray-900 mb-2">
            Solicitá tu cotización
          </h2>
          {error && (
            <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded text-center">
              <p className="text-red-600 text-xs md:text-sm">{error}</p>
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg border border-gray-300 p-3 md:p-4"
          >
            {/* Mobile: Fila 1 - Nombre y Teléfono */}
            <div className="grid grid-cols-2 gap-2 mb-2 md:hidden">
              {/* 1. Nombre */}
              <div>
                <Label htmlFor="name" className="text-xs mb-1 block">
                  Nombre
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="h-8 text-xs px-2"
                />
              </div>

              {/* 2. Teléfono */}
              <div>
                <Label htmlFor="phone" className="text-xs mb-1 block">
                  Teléfono *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`h-8 text-xs px-2 ${
                    fieldErrors.phone ? 'border-red-500' : ''
                  }`}
                  placeholder="11 1234-5678"
                />
                {fieldErrors.phone && (
                  <p className="text-red-500 text-xs mt-0.5">
                    {fieldErrors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Mobile: Fila 2 - Localidad, Cantidad y Botón */}
            <div className="grid grid-cols-3 gap-2 mb-2 md:hidden">
              {/* 3. Localidad */}
              <div className="col-span-1">
                <Label htmlFor="localidad" className="text-xs mb-1 block">
                  Localidad *
                </Label>
                <Input
                  id="localidad"
                  type="text"
                  value={formData.localidad}
                  onChange={(e) =>
                    handleInputChange('localidad', e.target.value)
                  }
                  className={`h-8 text-xs px-2 ${
                    fieldErrors.localidad ? 'border-red-500' : ''
                  }`}
                  placeholder=""
                />
                {fieldErrors.localidad && (
                  <p className="text-red-500 text-xs mt-0.5">
                    {fieldErrors.localidad}
                  </p>
                )}
              </div>

              {/* 4. Cantidad de personas */}
              <div className="col-span-1">
                <Label
                  htmlFor="cantidadPersonas"
                  className="text-xs mb-1 block"
                >
                  Cantidad *
                </Label>
                <Input
                  id="cantidadPersonas"
                  type="text"
                  inputMode="numeric"
                  value={formData.cantidadPersonas}
                  onChange={(e) =>
                    handleInputChange('cantidadPersonas', e.target.value)
                  }
                  className={`h-8 text-xs px-2 ${
                    fieldErrors.cantidadPersonas ? 'border-red-500' : ''
                  }`}
                  placeholder=""
                />
                {fieldErrors.cantidadPersonas && (
                  <p className="text-red-500 text-xs mt-0.5">
                    {fieldErrors.cantidadPersonas}
                  </p>
                )}
              </div>

              {/* Botón Mobile */}
              <div className="col-span-1 flex items-end">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#003056] hover:bg-[#002040] text-white text-xs px-2 py-1.5 h-8 w-full"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3 h-3 ml-1 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Enviar</span>

                      <span className="hidden md:block">
                        <Send className="w-3 h-3 md:ml-1" />
                      </span>
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Desktop: Todo en una fila horizontal con botón incluido */}
            <div className="hidden md:block">
              <div className="grid grid-cols-5 gap-3">
                {/* 1. Nombre */}
                <div>
                  <Label htmlFor="name-desktop" className="text-sm mb-1 block">
                    Nombre
                  </Label>
                  <Input
                    id="name-desktop"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="h-9 text-sm"
                  />
                </div>

                {/* 2. Teléfono */}
                <div>
                  <Label htmlFor="phone-desktop" className="text-sm mb-1 block">
                    Teléfono *
                  </Label>
                  <Input
                    id="phone-desktop"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`h-9 text-sm ${
                      fieldErrors.phone ? 'border-red-500' : ''
                    }`}
                    placeholder="11 1234-5678"
                  />
                  {fieldErrors.phone && (
                    <p className="text-red-500 text-xs mt-0.5">
                      {fieldErrors.phone}
                    </p>
                  )}
                </div>

                {/* 3. Localidad */}
                <div>
                  <Label
                    htmlFor="localidad-desktop"
                    className="text-sm mb-1 block"
                  >
                    Localidad *
                  </Label>
                  <Input
                    id="localidad-desktop"
                    type="text"
                    value={formData.localidad}
                    onChange={(e) =>
                      handleInputChange('localidad', e.target.value)
                    }
                    className={`h-9 text-sm ${
                      fieldErrors.localidad ? 'border-red-500' : ''
                    }`}
                    placeholder=""
                  />
                  {fieldErrors.localidad && (
                    <p className="text-red-500 text-xs mt-0.5">
                      {fieldErrors.localidad}
                    </p>
                  )}
                </div>

                {/* 4. Cantidad de personas */}
                <div>
                  <Label
                    htmlFor="cantidadPersonas-desktop"
                    className="text-sm mb-1 block"
                  >
                    Cantidad de personas *
                  </Label>
                  <Input
                    id="cantidadPersonas-desktop"
                    type="text"
                    inputMode="numeric"
                    value={formData.cantidadPersonas}
                    onChange={(e) =>
                      handleInputChange('cantidadPersonas', e.target.value)
                    }
                    className={`h-9 text-sm ${
                      fieldErrors.cantidadPersonas ? 'border-red-500' : ''
                    }`}
                    placeholder=""
                  />
                  {fieldErrors.cantidadPersonas && (
                    <p className="text-red-500 text-xs mt-0.5">
                      {fieldErrors.cantidadPersonas}
                    </p>
                  )}
                </div>

                {/* 5. Botón Desktop */}
                <div className="flex items-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#003056] hover:bg-[#002040] text-white text-sm px-4 py-2 h-9 w-full"
                  >
                    {isSubmitting ? (
                      <>
                        Enviando...
                        <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                      </>
                    ) : (
                      <>
                        Enviar
                        <Send className="w-3.5 h-3.5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

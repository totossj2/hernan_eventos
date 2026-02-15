/**
 * Sistema de tracking centralizado para Google Analytics vía GTM
 * 
 * Métricas principales:
 * 1. Intentos de contacto (whatsapp_click, phone_click, form_submit)
 * 2. Tasa de conversión (contactos_totales / visitantes)
 * 3. Scroll profundo (75%, 90%)
 * 4. Conversión por fuente (automático en GA4)
 */

// Tipos de eventos de contacto
export type ContactEventType = 'whatsapp_click' | 'phone_click' | 'form_submit';

// Interfaz para eventos de contacto
interface ContactEventData {
  event_category: 'contact';
  event_label?: string;
  location?: string; // Dónde ocurrió el evento (hero, navbar, footer, form)
  value?: number;
}

// Interfaz para eventos de scroll
interface ScrollEventData {
  event_category: 'engagement';
  scroll_depth: 75 | 90;
  page_path: string;
}

// Interfaz para eventos de formulario
interface FormEventData {
  event_category: 'form';
  form_name: string;
  form_type?: string;
  event_type?: string;
  guests?: string;
}

// Declaración global de dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Función principal para enviar eventos a GTM
 */
function pushToDataLayer(eventName: string, eventData: Record<string, any>) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
      timestamp: new Date().toISOString(),
    });
    
    // Log en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 GTM Event:', eventName, eventData);
    }
  }
}

/**
 * 1️⃣ INTENTOS DE CONTACTO - La métrica central
 */

/**
 * Trackea clicks en WhatsApp
 * @param location Dónde ocurrió el click (hero, navbar, footer, form)
 * @param label Etiqueta adicional opcional
 */
export function trackWhatsAppClick(location: string, label?: string) {
  pushToDataLayer('whatsapp_click', {
    event_category: 'contact',
    event_label: label || `WhatsApp - ${location}`,
    location,
    contact_method: 'whatsapp',
  } as ContactEventData);
}

/**
 * Trackea clicks en el número de teléfono
 * @param location Dónde ocurrió el click (generalmente footer o navbar)
 */
export function trackPhoneClick(location: string) {
  pushToDataLayer('phone_click', {
    event_category: 'contact',
    event_label: `Phone - ${location}`,
    location,
    contact_method: 'phone',
  } as ContactEventData);
}

/**
 * Trackea envío del formulario de contacto
 * @param formData Datos del formulario
 */
export function trackFormSubmit(formData: {
  formName: string;
  formType?: string;
  eventType?: string;
  guests?: string;
  services?: string[];
  urgentEvent?: boolean;
}) {
  pushToDataLayer('form_submit', {
    event_category: 'contact',
    event_label: `Form Submit - ${formData.formName}`,
    form_name: formData.formName,
    form_type: formData.formType || 'quotation',
    event_type: formData.eventType,
    guests: formData.guests,
    services: formData.services?.join(', '),
    urgent_event: formData.urgentEvent || false,
    contact_method: 'form',
  } as FormEventData);
}

/**
 * 2️⃣ TASA DE CONVERSIÓN
 * (Se calcula automáticamente en GA4 con: contactos_totales / visitantes)
 */

/**
 * 3️⃣ SCROLL PROFUNDO
 */

/**
 * Trackea cuando el usuario llega al 75% o 90% de scroll
 * @param scrollDepth Profundidad del scroll (75 o 90)
 * @param pagePath Ruta de la página
 */
export function trackScrollDepth(scrollDepth: 75 | 90, pagePath: string) {
  pushToDataLayer('scroll_depth', {
    event_category: 'engagement',
    event_label: `Scroll ${scrollDepth}%`,
    scroll_depth: scrollDepth,
    page_path: pagePath,
  } as ScrollEventData);
}

/**
 * 4️⃣ EVENTOS ADICIONALES DE ENGAGEMENT
 */

/**
 * Trackea clicks en servicios
 */
export function trackServiceClick(serviceName: string, location: string) {
  pushToDataLayer('service_click', {
    event_category: 'engagement',
    event_label: `Service - ${serviceName}`,
    service_name: serviceName,
    location,
  });
}

/**
 * Trackea clicks en tipos de eventos
 */
export function trackEventTypeClick(eventType: string, location: string) {
  pushToDataLayer('event_type_click', {
    event_category: 'engagement',
    event_label: `Event Type - ${eventType}`,
    event_type: eventType,
    location,
  });
}

/**
 * Trackea navegación
 */
export function trackNavigation(destination: string, source: string) {
  pushToDataLayer('navigation', {
    event_category: 'navigation',
    event_label: `${source} → ${destination}`,
    destination,
    source,
  });
}

/**
 * 5️⃣ MÉTRICAS DE PERFORMANCE
 */

/**
 * Trackea tiempo en la página antes de contactar
 */
export function trackTimeToContact(seconds: number, contactMethod: ContactEventType) {
  pushToDataLayer('time_to_contact', {
    event_category: 'performance',
    event_label: `Time to Contact - ${contactMethod}`,
    time_seconds: seconds,
    contact_method: contactMethod,
  });
}

/**
 * Inicializar tracking de tiempo
 */
let pageLoadTime: number;

if (typeof window !== 'undefined') {
  pageLoadTime = Date.now();
}

export function getTimeOnPage(): number {
  if (typeof window !== 'undefined') {
    return Math.floor((Date.now() - pageLoadTime) / 1000);
  }
  return 0;
}

/**
 * Función auxiliar para trackear contacto con tiempo
 */
export function trackContactWithTime(
  eventType: ContactEventType,
  location: string,
  additionalData?: Record<string, any>
) {
  const timeOnPage = getTimeOnPage();
  
  // Trackear el evento de contacto
  switch (eventType) {
    case 'whatsapp_click':
      trackWhatsAppClick(location);
      break;
    case 'phone_click':
      trackPhoneClick(location);
      break;
    case 'form_submit':
      // Este se manejará separadamente con sus datos específicos
      break;
  }
  
  // Trackear tiempo hasta contacto
  trackTimeToContact(timeOnPage, eventType);
}


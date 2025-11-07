# Implementación de Tracking para Hernán Eventos

## 🎯 Resumen Ejecutivo

Tu sitio ya tiene **Google Tag Manager** configurado (`GTM-53L66W4N`). Ahora necesitas implementar los **eventos** para medir el comportamiento de tus usuarios.

### ✅ Lo que ya tienes

- GTM configurado en `app/layout.tsx`
- Formulario de contacto funcionando
- Botones de WhatsApp

### 🎬 Lo que falta

- Eventos de click en elementos específicos
- Tracking de conversiones
- Scroll depth
- Tiempo en página

---

## 📋 Eventos a Implementar (En orden de prioridad)

### **PRIORIDAD ALTA (Implementar primero)**

#### 1. ✅ Click en WhatsApp (Hero)

**Ubicación**: `components/sections/Hero.tsx` línea 114-131

```typescript
// Agregar función para tracking
const handleWhatsAppClick = () => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'click_whatsapp',
      event_category: 'contacto',
      event_label: 'hero_cotizar_ahora',
      button_location: 'hero'
    });
  }
};

// Modificar botón (línea 114)
<a
  href="https://wa.me/5491160939880?text=Hola%2C%20quiero%20más%20info%20sobre%20los%20servicios%20de%20eventos"
  className="flex-1"
  onClick={handleWhatsAppClick} // Agregar este onClick
>
```

**Para qué**: Saber cuántas personas intentan contactarte desde el hero (tu mejor CTA)

---

#### 2. ✅ Formulario Enviado (Conversión)

**Ubicación**: `components/sections/SimpleForm.tsx` línea 96-98

```typescript
// Modificar handleSubmit (después de response.ok)
if (response.ok) {
  // TRACKING: Formulario enviado exitosamente
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'form_submit',
      event_category: 'conversion',
      event_label: 'presupuesto_exitoso',
      event_value: 10, // Valor de conversión
      form_type: 'presupuesto',
      event_date: formData.eventDate,
      event_type: formData.eventType,
    });
  }

  setIsSubmitted(true);
  // ... resto del código
}
```

**Para qué**: Esta es tu principal métrica de conversión

---

#### 3. ✅ Scroll Depth

**Ubicación**: Crear nuevo archivo `lib/analytics.ts`

```typescript
// lib/analytics.ts
export const trackScroll = () => {
  let scrolled25 = false,
    scrolled50 = false,
    scrolled75 = false,
    scrolled90 = false;

  const checkScroll = () => {
    const scrollPercent =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    if (scrollPercent >= 25 && !scrolled25) {
      window.dataLayer.push({ event: 'scroll_depth', depth: '25%' });
      scrolled25 = true;
    }
    if (scrollPercent >= 50 && !scrolled50) {
      window.dataLayer.push({ event: 'scroll_depth', depth: '50%' });
      scrolled50 = true;
    }
    if (scrollPercent >= 75 && !scrolled75) {
      window.dataLayer.push({ event: 'scroll_depth', depth: '75%' });
      scrolled75 = true;
    }
    if (scrollPercent >= 90 && !scrolled90) {
      window.dataLayer.push({ event: 'scroll_depth', depth: '90%' });
      scrolled90 = true;
    }
  };

  window.addEventListener('scroll', checkScroll);

  return () => window.removeEventListener('scroll', checkScroll);
};
```

**Usar en**: `app/page.tsx` como useEffect

```typescript
import { trackScroll } from '@/lib/analytics';

export default function Home() {
  useEffect(() => {
    const cleanup = trackScroll();
    return cleanup;
  }, []);

  // ... resto del componente
}
```

**Para qué**: Ver si los usuarios llegan al formulario (scroll 75-90%)

---

### **PRIORIDAD MEDIA**

#### 4. ✅ Click en Servicios

**Ubicación**: `components/sections/ServicesSection.tsx` (necesito ver el código)

```typescript
// Agregar función de tracking
const handleServiceClick = (serviceName: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'click_servicio',
      event_category: 'servicios',
      event_label: serviceName,
      click_location: 'homepage'
    });
  }
};

// Agregar onClick a cada card de servicio
<Link
  href={`/servicios/${servicePath}`}
  onClick={() => handleServiceClick('carpas')} // Ejemplo
>
```

**Para qué**: Saber qué servicios generan más interés

---

#### 5. ✅ Inicio de Formulario (Abandono)

**Ubicación**: `components/sections/SimpleForm.tsx`

```typescript
// Agregar al inicio del formulario (cuando se enfoca un campo por primera vez)
const [hasStartedForm, setHasStartedForm] = useState(false);

useEffect(() => {
  if (!hasStartedForm) {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      input.addEventListener(
        'focus',
        () => {
          if (!hasStartedForm) {
            window.dataLayer.push({
              event: 'form_start',
              event_category: 'conversion',
              event_label: 'presupuesto',
            });
            setHasStartedForm(true);
          }
        },
        { once: true }
      );
    });
  }
}, [hasStartedForm]);
```

**Para qué**: Comparar cuántos inician vs cuántos envían (tasa de abandono)

---

#### 6. ✅ Click en Teléfono

**Ubicación**: `components/layout/Footer.tsx` y Navbar

```typescript
const handlePhoneClick = (location: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'click_telefono',
      event_category: 'contacto',
      event_label: location, // 'header' o 'footer'
      phone_number: '(011) 6093-9880',
    });
  }
};

// Agregar en enlaces de teléfono
<a href="tel:+541169039880" onClick={() => handlePhoneClick('footer')}>
  (011) 6093-9880
</a>;
```

**Para qué**: Tracking de llamadas directas

---

### **PRIORIDAD BAJA (Nice to have)**

#### 7. ✅ Click en Redes Sociales

```typescript
const handleSocialClick = (platform: string) => {
  window.dataLayer.push({
    event: 'click_social',
    event_category: 'social',
    event_label: platform,
  });
};
```

#### 8. ✅ Tiempo en Página

Ya viene automático con GTM (configurar en GA4)

#### 9. ✅ Click en Logo

```typescript
const handleLogoClick = () => {
  window.dataLayer.push({
    event: 'click_logo',
    event_category: 'navigation',
    event_label: 'home',
  });
};
```

---

## 🎯 Configuración en Google Tag Manager

### **Paso 1: Crear Variables**

En GTM → Variables → Nueva Variable

```
Variable 1:
Nombre: Event Category
Tipo: Data Layer Variable
Data Layer Variable Name: event_category

Variable 2:
Nombre: Event Label
Tipo: Data Layer Variable
Data Layer Variable Name: event_label

Variable 3:
Nombre: Event Value
Tipo: Data Layer Variable
Data Layer Variable Name: event_value
```

### **Paso 2: Crear Trigger**

Trigger → Nuevo → Personalizado

- Nombre: `custom_events`
- Tipo: Custom Event
- Nombre del evento: `.*` (todos los eventos)

### **Paso 3: Crear Tag**

Tag → Nuevo

- Tipo: Google Analytics: GA4 Event
- Nombre de medición: (tu GA4 ID)
- Nombre del evento: `{{Event}}`
- Parámetros:
  - `event_category`: `{{Event Category}}`
  - `event_label`: `{{Event Label}}`
  - `value`: `{{Event Value}}`
- Trigger: `custom_events`

---

## 📊 Dashboard de Google Analytics

### **Métricas que verás al configurar todo:**

1. **Conversiones por día**

   - Cuántos formularios/día
   - Cuántos WhatsApp/día
   - Tasa de conversión general

2. **Servicio más solicitado**

   - Ranking de clicks por servicio
   - Páginas más visitadas

3. **Análisis de audiencia**

   - Desktop vs Mobile (¿qué convierte más?)
   - Ubicación geográfica
   - Edad/género (si configuraste demografía)

4. **Comportamiento**

   - Scroll depth promedio
   - Tiempo en página
   - Bounce rate

5. **Acquisition (Adquisición)**
   - De dónde vienen (Google, directo, referidos, social)
   - ROI por canal de marketing

---

## 🚀 Plan de Implementación (1 semana)

### **Día 1-2: Eventos críticos**

- [ ] Click WhatsApp (Hero)
- [ ] Form Submit (conversión)
- [ ] Scroll Depth

### **Día 3-4: Eventos importantes**

- [ ] Click en Servicios
- [ ] Form Start (abandono)
- [ ] Click en Teléfono

### **Día 5: Configuración GTM**

- [ ] Crear variables en GTM
- [ ] Configurar triggers
- [ ] Configurar tags para GA4

### **Día 6-7: Testing y Validación**

- [ ] Testing en desarrollo
- [ ] Verificar en GA4 que eventos se registran
- [ ] Crear dashboard personalizado

---

## 💡 Casos de Uso Específicos para tu Negocio

### **Caso 1: Decidir si poner más botones de WhatsApp**

**Dato a verificar**: Click rate en WhatsApp hero vs click rate en footer
**Acción**: Si hero tiene 10x más clicks, agrega WhatsApp flotante sticky

### **Caso 2: Optimizar formulario**

**Dato a verificar**: Tasa de abandono (form_start / form_submit)
**Si tasa > 70%**: Formulario es muy largo o complicado
**Acción**: Reducir campos, simplificar

### **Caso 3: Priorizar servicios en marketing**

**Dato a verificar**: Ranking de clicks por servicio
**Acción**: Si "Climatización" tiene 3x más clicks, crea contenido específico para ese servicio

### **Caso 4: Optimizar para mobile**

**Dato a verificar**: Conversión desktop vs mobile
**Si mobile convierte menos**: Revisar formulario, botones, imágenes mobile
**Acción**: Mobile-first redesign si gap es muy grande (>5%)

### **Caso 5: Ajustar presupuesto de marketing**

**Dato a verificar**: ROI por canal (Google Ads vs Instagram vs SEO)
**Acción**: Priorizar canal con mejor ROI y menor costo por adquisición

---

## 🎯 Métricas de Éxito (Semanales)

### **KPIs principales**

- **Conversión global**: > 3% (enviados/visitantes totales)
- **Click rate WhatsApp**: > 5% (clicks WhatsApp/visitantes)
- **Scroll depth 75%**: > 40% (usuarios que llegan casi al final)
- **Bounce rate**: < 50%
- **Time on site**: 2-4 minutos (promedio saludable)

### **ROI esperado**

Si inviertes $1000 en marketing y obtienes 10 leads → **$100/lead**

Si tu tasa de cierre es 20% (2 clientes de 10 leads):

- **Costo por conversión**: $500
- **Si cliente promedio vale $5000**: ROI = 400%

---

## ⚠️ Problemas Comunes y Soluciones

### **Problema**: "No veo eventos en GA4"

**Solución**:

1. Verificar GTM está activo en producción
2. Revisar que dataLayer.push se ejecuta (usar Console)
3. Usar GTM Preview mode para debugging

### **Problema**: "Datos no aparecen en tiempo real"

**Solución**:

- GA4 tiene delay de 24-48 horas en algunos reportes
- Usa "Informes en tiempo real" para datos inmediatos

### **Problema**: "Muchos eventos duplicados"

**Solución**:

- Evitar doble implementación (GTM + directo)
- Usar solo GTM para consistency

---

## 📞 Próximos Pasos

1. **Revisar este documento**
2. **Decidir si implementar manualmente o si necesitas ayuda**
3. **Si me das luz verde, puedo implementar el tracking directamente en tu código**

### **¿Quieres que implemente esto por ti?**

Puedo agregar todo el tracking necesario a tu código en ~30 minutos.

**Dime si quieres que proceda** y qué eventos son prioridad para ti.

# 📊 Sistema de Tracking - Hernan Eventos

## 🎯 Objetivo

Medir las **métricas que realmente importan** para saber si tu landing genera negocio real.

## 🚀 Quick Start

### 1. Verificar que funciona

Abre tu sitio y la consola del navegador (F12):

```javascript
// Escribe en la consola:
dataLayer

// Deberías ver un array con datos
```

### 2. Probar eventos

Haz estas acciones y verifica que aparezcan en `dataLayer`:

- ✅ Click en WhatsApp → `whatsapp_click`
- ✅ Click en teléfono → `phone_click`
- ✅ Enviar formulario → `form_submit`
- ✅ Scroll al 75% → `scroll_depth` (scroll_depth: 75)
- ✅ Scroll al 90% → `scroll_depth` (scroll_depth: 90)

### 3. Configurar GTM

Sigue la guía paso a paso: [GTM_SETUP_GUIDE.md](./GTM_SETUP_GUIDE.md)

### 4. Ver métricas en GA4

Una vez configurado GTM, ve a Google Analytics 4:
- **Tiempo Real** → Verás eventos entrando en vivo
- **Informes** → **Engagement** → **Eventos**

## 📈 Métricas Implementadas

### 1️⃣ INTENTOS DE CONTACTO (Métrica Central)

```
contactos_totales = whatsapp_click + phone_click + form_submit
```

**Interpretación:**
- < 1% → Propuesta débil
- 1-3% → Normal inicial
- 3-5% → Landing funcionando
- \> 5% → Excelente

### 2️⃣ TASA DE CONVERSIÓN

```
conversion_rate = contactos_totales / visitantes
```

**Pregunta clave:** ¿El problema es marketing o la landing?

### 3️⃣ SCROLL PROFUNDO

```
scroll_75_rate = usuarios_que_llegan_al_75% / visitantes
scroll_90_rate = usuarios_que_llegan_al_90% / visitantes
```

**Interpretación:**
- Bajo scroll → Hero no engancha
- Alto scroll + baja conversión → Propuesta poco convincente

### 4️⃣ CONVERSIÓN POR FUENTE

GA4 lo calcula automáticamente por:
- Google Ads
- Orgánico
- Instagram
- Directo

**Pregunta clave:** ¿Dónde invertir tiempo y dinero?

## 📁 Estructura de Archivos

```
lib/
  tracking.ts              # Sistema de tracking centralizado

hooks/
  use-scroll-tracking.tsx  # Hook para scroll tracking

components/
  ScrollTracker.tsx        # Componente de scroll tracking
  sections/
    Hero.tsx              # ✅ Tracking implementado
    Form.tsx              # ✅ Tracking implementado
    SimpleForm.tsx        # ✅ Tracking implementado
    SimpleFormHorizontal.tsx # ✅ Tracking implementado
  layout/
    Navbar.tsx            # ✅ Tracking implementado
    Footer.tsx            # ✅ Tracking implementado

app/
  layout.tsx              # GTM y ScrollTracker inicializados

docs/
  TRACKING_METRICS.md     # Documentación completa
  GTM_SETUP_GUIDE.md      # Guía de configuración GTM
  METRICAS_CLAVE.md       # Resumen ejecutivo de métricas
```

## 🔥 Eventos Trackeados

### WhatsApp Clicks

| Ubicación | Descripción |
|-----------|-------------|
| `hero` | Botón principal "Cotizar Mi Evento" |
| `navbar` | Botón "Contactános" en navbar desktop |
| `navbar_mobile` | Botón "Contactános" en menú mobile |
| `footer` | Ícono de WhatsApp en footer |
| `form` | Botón "Chatear por WhatsApp" en formulario |
| `form_success` | Botón WhatsApp después de enviar form |

### Phone Clicks

| Ubicación | Descripción |
|-----------|-------------|
| `footer` | Número de teléfono en footer |

### Form Submissions

| Formulario | Tipo | Datos Adicionales |
|------------|------|-------------------|
| Quotation Form | `quotation` | eventType, guests, services, urgentEvent |
| Simple Contact Form | `contact` | eventType |
| Simple Horizontal Form | `quick_quote` | guests |

### Scroll Depth

| Evento | Profundidad |
|--------|-------------|
| `scroll_depth` | 75% |
| `scroll_depth` | 90% |

## 🛠️ Cómo Usar

### Trackear un nuevo botón de WhatsApp

```typescript
import { trackContactWithTime } from '@/lib/tracking';

<a 
  href="https://wa.me/..."
  onClick={() => trackContactWithTime('whatsapp_click', 'mi_ubicacion', { 
    button_text: 'Mi Botón' 
  })}
>
  Contactar
</a>
```

### Trackear un nuevo botón de teléfono

```typescript
import { trackContactWithTime } from '@/lib/tracking';

<a 
  href="tel:+5491160939880"
  onClick={() => trackContactWithTime('phone_click', 'mi_ubicacion')}
>
  Llamar
</a>
```

### Trackear envío de formulario

```typescript
import { trackFormSubmit } from '@/lib/tracking';

const handleSubmit = async (data) => {
  // ... enviar formulario ...
  
  if (response.ok) {
    trackFormSubmit({
      formName: 'Mi Formulario',
      formType: 'contact',
      eventType: data.eventType,
      guests: data.guests,
    });
  }
};
```

### Habilitar scroll tracking en una página

```typescript
import { ScrollTracker } from '@/components/ScrollTracker';

export default function MyPage() {
  return (
    <>
      <ScrollTracker />
      {/* resto del contenido */}
    </>
  );
}
```

## 📊 Dashboard Semanal (5 minutos)

Cada lunes revisa:

1. **Contactos totales** de la semana
2. **Tasa de conversión** por fuente
3. **Scroll depth rate**
4. **Ubicación** que más convierte

Ver guía completa: [METRICAS_CLAVE.md](./METRICAS_CLAVE.md)

## 🔍 Debugging

### Problema: No veo eventos en dataLayer

**Solución:**
```javascript
// En la consola del navegador:
dataLayer

// Si está vacío, verifica:
// 1. Que GTM esté cargado
// 2. Que no haya errores de JavaScript
```

### Problema: Eventos no llegan a GA4

**Solución:**
1. Verifica que el ID de GA4 sea correcto
2. Espera 24-48 horas para datos históricos
3. Verifica en **Tiempo Real** primero
4. Usa el modo **Vista Previa** de GTM

### Problema: Scroll tracking no funciona

**Solución:**
1. Verifica que `<ScrollTracker />` esté en el layout
2. Abre la consola y busca errores
3. Verifica que la página tenga suficiente contenido para scrollear

## 📚 Documentación Completa

- [TRACKING_METRICS.md](./TRACKING_METRICS.md) - Documentación técnica completa
- [GTM_SETUP_GUIDE.md](./GTM_SETUP_GUIDE.md) - Guía paso a paso de GTM
- [METRICAS_CLAVE.md](./METRICAS_CLAVE.md) - Resumen ejecutivo de métricas

## 🎓 Recursos

- [Google Tag Manager](https://tagmanager.google.com/)
- [Google Analytics 4](https://analytics.google.com/)
- [GA4 Event Builder](https://ga-dev-tools.google/ga4/event-builder/)
- [GTM Debug Mode](https://support.google.com/tagmanager/answer/6107056)

## ✅ Checklist de Implementación

- [x] Sistema de tracking centralizado (`lib/tracking.ts`)
- [x] Hook de scroll tracking (`hooks/use-scroll-tracking.tsx`)
- [x] GTM inicializado en layout
- [x] Tracking en Hero (WhatsApp)
- [x] Tracking en Navbar (WhatsApp)
- [x] Tracking en Footer (WhatsApp, Phone)
- [x] Tracking en Form (WhatsApp, Form Submit)
- [x] Tracking en SimpleForm (Form Submit)
- [x] Tracking en SimpleFormHorizontal (Form Submit)
- [x] Scroll tracking en todas las páginas
- [ ] Configurar tags en GTM
- [ ] Marcar eventos como conversiones en GA4
- [ ] Crear dashboard personalizado
- [ ] Configurar alertas

## 🚀 Próximos Pasos

1. **Hoy:** Configurar GTM siguiendo [GTM_SETUP_GUIDE.md](./GTM_SETUP_GUIDE.md)
2. **Esta semana:** Marcar eventos como conversiones en GA4
3. **Próxima semana:** Crear dashboard personalizado
4. **Mensual:** Revisar métricas y optimizar

---

**Desarrollado con ❤️ para medir lo que importa** 📊

**Preguntas?** Revisa la documentación completa o abre un issue.


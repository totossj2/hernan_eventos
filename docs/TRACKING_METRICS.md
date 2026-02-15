# 📊 Sistema de Tracking de Métricas - Google Analytics + GTM

## 🎯 Objetivo

Trackear las **métricas clave** que determinan si tu landing genera negocio real.

## 📈 Métricas Implementadas

### 1️⃣ INTENTOS DE CONTACTO (Métrica Central)

**Qué mide:** Si la landing genera negocio real.

```
contactos_totales = whatsapp_click + phone_click + form_submit
```

**Eventos trackeados:**

- ✅ `whatsapp_click` - Clicks en botones de WhatsApp
- ✅ `phone_click` - Clicks en el número de teléfono
- ✅ `form_submit` - Envíos del formulario de cotización

**Interpretación:**

- < 1% → Propuesta débil o tráfico incorrecto
- 1-3% → Normal inicial
- 3-5% → Landing funcionando
- \> 5% → Excelente

### 2️⃣ TASA DE CONVERSIÓN TOTAL

**Qué mide:** Efectividad general de la landing.

```
conversion_rate = contactos_totales / visitantes
```

**Pregunta clave:** ¿El problema es marketing o la landing?

- **Bajo tráfico + alta conversión** → Invertir en marketing
- **Alto tráfico + baja conversión** → Mejorar la landing

### 3️⃣ SCROLL PROFUNDO

**Qué mide:** Si los visitantes llegan a evaluar la oferta.

```
scroll_75_rate = usuarios_que_llegan_al_75% / visitantes
scroll_90_rate = usuarios_que_llegan_al_90% / visitantes
```

**Eventos trackeados:**

- ✅ `scroll_depth` al 75%
- ✅ `scroll_depth` al 90%

**Interpretación:**

- **Bajo scroll** → Hero no engancha, mejorar propuesta inicial
- **Alto scroll + baja conversión** → Propuesta poco convincente, revisar beneficios

### 4️⃣ CONVERSIÓN POR FUENTE

**Qué mide:** Qué canales traen clientes reales (no solo visitas).

GA4 lo calcula **automáticamente** por:

- Google Ads
- Orgánico
- Instagram
- Directo
- Otros

**Pregunta clave:** ¿Dónde invertir tiempo y dinero?

## 🔥 Ubicaciones de Tracking Implementadas

### WhatsApp Clicks

| Ubicación            | Event Label                         | Descripción                              |
| -------------------- | ----------------------------------- | ---------------------------------------- |
| `hero`               | WhatsApp - hero                     | Botón principal "Cotizar Mi Evento"      |
| `navbar`             | WhatsApp - navbar                   | Botón "Contactános" en navbar desktop    |
| `navbar_mobile`      | WhatsApp - navbar_mobile            | Botón "Contactános" en menú mobile       |
| `footer`             | WhatsApp - footer                   | Ícono de WhatsApp en footer              |
| `form`               | WhatsApp - form                     | Botón "Chatear por WhatsApp" en form     |
| `form_success`       | WhatsApp - form_success             | Botón WhatsApp después de enviar form    |

### Phone Clicks

| Ubicación | Event Label   | Descripción                   |
| --------- | ------------- | ----------------------------- |
| `footer`  | Phone - footer| Número de teléfono en footer  |

### Form Submissions

| Ubicación        | Event Label               | Datos Adicionales                                       |
| ---------------- | ------------------------- | ------------------------------------------------------- |
| `quotation_form` | Form Submit - Quotation   | eventType, guests, services, urgentEvent                |

### Scroll Depth

| Event      | Profundidad | Descripción                      |
| ---------- | ----------- | -------------------------------- |
| `scroll_depth` | 75%     | Usuario scrolleó 75% de la página|
| `scroll_depth` | 90%     | Usuario scrolleó 90% de la página|

## 🛠️ Configuración de Google Tag Manager

### Paso 1: Variables en GTM

Crea estas **Variables Personalizadas** en GTM:

1. **contactos_totales**
   - Tipo: Variable Personalizada de JavaScript
   - Código:
   ```javascript
   function() {
     var whatsapp = {{Event}} === 'whatsapp_click' ? 1 : 0;
     var phone = {{Event}} === 'phone_click' ? 1 : 0;
     var form = {{Event}} === 'form_submit' ? 1 : 0;
     return whatsapp + phone + form;
   }
   ```

2. **scroll_75**
   - Tipo: Variable de Capa de Datos
   - Nombre: `scroll_depth`
   - Condición: `scroll_depth === 75`

3. **scroll_90**
   - Tipo: Variable de Capa de Datos
   - Nombre: `scroll_depth`
   - Condición: `scroll_depth === 90`

### Paso 2: Triggers (Activadores)

Crea estos **Activadores**:

1. **Trigger: WhatsApp Click**
   - Tipo: Evento Personalizado
   - Nombre del evento: `whatsapp_click`

2. **Trigger: Phone Click**
   - Tipo: Evento Personalizado
   - Nombre del evento: `phone_click`

3. **Trigger: Form Submit**
   - Tipo: Evento Personalizado
   - Nombre del evento: `form_submit`

4. **Trigger: Scroll 75%**
   - Tipo: Evento Personalizado
   - Nombre del evento: `scroll_depth`
   - Condición: `scroll_depth === 75`

5. **Trigger: Scroll 90%**
   - Tipo: Evento Personalizado
   - Nombre del evento: `scroll_depth`
   - Condición: `scroll_depth === 90`

### Paso 3: Tags (Etiquetas) para GA4

Crea estas **Etiquetas de GA4**:

#### 1. WhatsApp Click Event

- **Tipo:** Evento de Google Analytics: GA4
- **ID de medición:** Tu ID de GA4
- **Nombre del evento:** `whatsapp_click`
- **Parámetros del evento:**
  - `event_category`: `{{dlv - event_category}}`
  - `event_label`: `{{dlv - event_label}}`
  - `location`: `{{dlv - location}}`
  - `contact_method`: `whatsapp`
- **Activador:** WhatsApp Click

#### 2. Phone Click Event

- **Tipo:** Evento de Google Analytics: GA4
- **ID de medición:** Tu ID de GA4
- **Nombre del evento:** `phone_click`
- **Parámetros del evento:**
  - `event_category`: `{{dlv - event_category}}`
  - `event_label`: `{{dlv - event_label}}`
  - `location`: `{{dlv - location}}`
  - `contact_method`: `phone`
- **Activador:** Phone Click

#### 3. Form Submit Event

- **Tipo:** Evento de Google Analytics: GA4
- **ID de medición:** Tu ID de GA4
- **Nombre del evento:** `form_submit`
- **Parámetros del evento:**
  - `event_category`: `{{dlv - event_category}}`
  - `event_label`: `{{dlv - event_label}}`
  - `form_name`: `{{dlv - form_name}}`
  - `event_type`: `{{dlv - event_type}}`
  - `guests`: `{{dlv - guests}}`
  - `contact_method`: `form`
- **Activador:** Form Submit

#### 4. Scroll Depth Event

- **Tipo:** Evento de Google Analytics: GA4
- **ID de medición:** Tu ID de GA4
- **Nombre del evento:** `scroll_depth`
- **Parámetros del evento:**
  - `event_category`: `{{dlv - event_category}}`
  - `scroll_depth`: `{{dlv - scroll_depth}}`
  - `page_path`: `{{dlv - page_path}}`
- **Activadores:** Scroll 75% y Scroll 90%

### Paso 4: Variables de Capa de Datos (Data Layer Variables)

Para cada parámetro que necesites capturar, crea una **Variable de Capa de Datos** en GTM:

- `dlv - event_category`
- `dlv - event_label`
- `dlv - location`
- `dlv - form_name`
- `dlv - event_type`
- `dlv - guests`
- `dlv - scroll_depth`
- `dlv - page_path`

## 📊 Cómo Ver las Métricas en GA4

### 1. Eventos en Tiempo Real

1. Ve a **Informes** → **Tiempo real**
2. Verás los eventos entrando en vivo:
   - `whatsapp_click`
   - `phone_click`
   - `form_submit`
   - `scroll_depth`

### 2. Crear Conversiones

1. Ve a **Administración** → **Conversiones**
2. Crea conversiones para:
   - `whatsapp_click` ✅
   - `phone_click` ✅
   - `form_submit` ✅

### 3. Crear Informe Personalizado

Ve a **Explorar** y crea un informe con:

**Dimensiones:**
- Fuente/medio del usuario
- Página de destino
- Ubicación del evento (`location`)

**Métricas:**
- Usuarios
- `whatsapp_click` (recuento)
- `phone_click` (recuento)
- `form_submit` (recuento)
- Contactos totales (métrica calculada)
- Tasa de conversión (métrica calculada)

### 4. Métricas Calculadas

Crea estas **métricas calculadas** en GA4:

#### contactos_totales

```
whatsapp_click + phone_click + form_submit
```

#### tasa_conversion

```
contactos_totales / usuarios * 100
```

#### scroll_75_rate

```
scroll_depth_75 / usuarios * 100
```

## 🎯 Dashboard Recomendado en GA4

### Widget 1: Contactos Totales (Métrica Clave)

- **Tipo:** Tarjeta de métrica
- **Métrica:** Contactos totales
- **Comparación:** Semana anterior

### Widget 2: Tasa de Conversión

- **Tipo:** Gráfico de líneas
- **Eje Y:** Tasa de conversión
- **Eje X:** Fecha
- **Dimensión secundaria:** Fuente/medio

### Widget 3: Desglose de Contactos

- **Tipo:** Gráfico de anillo
- **Métrica:** Recuento de eventos
- **Dimensión:** Nombre del evento
- **Filtro:** `whatsapp_click`, `phone_click`, `form_submit`

### Widget 4: Conversión por Fuente

- **Tipo:** Tabla
- **Dimensión:** Fuente/medio
- **Métricas:**
  - Usuarios
  - Contactos totales
  - Tasa de conversión

### Widget 5: Scroll Depth

- **Tipo:** Gráfico de barras
- **Métrica:** Usuarios
- **Dimensión:** Profundidad de scroll
- **Filtro:** scroll_depth === 75 o 90

### Widget 6: Ubicaciones más Efectivas

- **Tipo:** Tabla
- **Dimensión:** Location (ubicación del evento)
- **Métricas:**
  - Recuento de eventos
  - Tasa de conversión

## 🔍 Análisis y Optimización

### Pregunta 1: ¿La landing genera negocio?

**Métrica:** `contactos_totales` y `tasa_conversion`

**Acción:**
- < 1% → Revisar propuesta de valor y tráfico
- 1-3% → Optimizar CTAs y formulario
- \> 3% → Escalar marketing

### Pregunta 2: ¿Dónde se caen los usuarios?

**Métrica:** `scroll_75_rate` y `scroll_90_rate`

**Acción:**
- Bajo scroll → Mejorar hero y propuesta inicial
- Alto scroll + baja conversión → Revisar beneficios y prueba social

### Pregunta 3: ¿Qué fuente trae clientes reales?

**Métrica:** Conversión por fuente

**Acción:**
- Invertir más en las fuentes con mayor conversión
- Pausar fuentes con alta visita pero baja conversión

### Pregunta 4: ¿Qué botón convierte más?

**Métrica:** Eventos por `location`

**Acción:**
- Destacar ubicaciones con alta conversión
- A/B test en ubicaciones con baja conversión

## 🚀 Siguientes Pasos

### 1. Verificar que todo funciona

```bash
# Abrir consola del navegador (F12) en tu sitio
# Escribir:
dataLayer
```

Deberías ver un array con eventos cuando:
- Haces click en WhatsApp
- Haces click en el teléfono
- Envías el formulario
- Scrolleas al 75% y 90%

### 2. Instalar GTM Debug Mode

1. Instala la extensión "Tag Assistant" de Google
2. Activa el modo Debug en tu sitio
3. Verifica que todos los eventos se disparen correctamente

### 3. Configurar alertas en GA4

Crea alertas para:
- Cuando `tasa_conversion` baje más del 20%
- Cuando `contactos_totales` caiga más del 30%

### 4. Revisar semanalmente

Cada lunes revisa:
1. **Contactos totales** de la semana
2. **Tasa de conversión** por fuente
3. **Scroll depth rate**
4. **Ubicación** que más convierte

## 📝 Notas Técnicas

### Arquitectura del Sistema

```
Usuario interactúa → tracking.ts → dataLayer → GTM → GA4
```

### Archivos Clave

- `lib/tracking.ts` - Sistema de tracking centralizado
- `hooks/use-scroll-tracking.tsx` - Hook para scroll tracking
- `components/ScrollTracker.tsx` - Componente de scroll tracking
- `app/layout.tsx` - Inicialización de GTM y dataLayer

### Componentes Trackeados

- ✅ Hero (WhatsApp)
- ✅ Navbar (WhatsApp)
- ✅ Footer (WhatsApp, Phone)
- ✅ Form (WhatsApp, Form Submit)
- ✅ Todas las páginas (Scroll Depth)

### Data Layer Structure

Todos los eventos incluyen:

```javascript
{
  event: 'whatsapp_click' | 'phone_click' | 'form_submit' | 'scroll_depth',
  event_category: string,
  event_label?: string,
  location?: string,
  timestamp: string (ISO),
  // Parámetros adicionales según el evento
}
```

## 🎓 Recursos

- [Google Tag Manager](https://tagmanager.google.com/)
- [Google Analytics 4](https://analytics.google.com/)
- [GA4 Event Builder](https://ga-dev-tools.google/ga4/event-builder/)
- [GTM Debug Mode](https://support.google.com/tagmanager/answer/6107056)

---

**Nota:** Esta implementación está lista para producción. Solo necesitas configurar los tags en GTM siguiendo esta guía.

**Desarrollado con ❤️ para trackear métricas que importan** 📊


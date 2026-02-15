# 🚀 Guía Rápida de Configuración GTM

## ✅ Paso 1: Verificar que GTM está funcionando

1. Abre tu sitio web en el navegador
2. Presiona `F12` para abrir las herramientas de desarrollador
3. Ve a la pestaña **Console**
4. Escribe: `dataLayer`
5. Deberías ver un array con datos

### Prueba los eventos:

```javascript
// En la consola del navegador:
dataLayer
```

Luego haz click en:
- ✅ Botón de WhatsApp → Deberías ver `whatsapp_click` en el dataLayer
- ✅ Número de teléfono → Deberías ver `phone_click`
- ✅ Envía el formulario → Deberías ver `form_submit`
- ✅ Scrollea al 75% → Deberías ver `scroll_depth` con `scroll_depth: 75`

## 📋 Paso 2: Configuración en Google Tag Manager

### 2.1 Variables de Capa de Datos

Ve a **Variables** → **Nueva** → **Variable de Capa de Datos**

Crea estas variables (una por una):

| Nombre de Variable | Nombre de Variable de Capa de Datos |
|-------------------|-------------------------------------|
| `dlv - event_category` | `event_category` |
| `dlv - event_label` | `event_label` |
| `dlv - location` | `location` |
| `dlv - contact_method` | `contact_method` |
| `dlv - form_name` | `form_name` |
| `dlv - form_type` | `form_type` |
| `dlv - event_type` | `event_type` |
| `dlv - guests` | `guests` |
| `dlv - services` | `services` |
| `dlv - urgent_event` | `urgent_event` |
| `dlv - scroll_depth` | `scroll_depth` |
| `dlv - page_path` | `page_path` |
| `dlv - timestamp` | `timestamp` |

### 2.2 Activadores (Triggers)

Ve a **Activadores** → **Nuevo**

#### Activador 1: WhatsApp Click

- **Nombre:** `WhatsApp Click`
- **Tipo:** Evento personalizado
- **Nombre del evento:** `whatsapp_click`
- **Este activador se activa en:** Todos los eventos personalizados

#### Activador 2: Phone Click

- **Nombre:** `Phone Click`
- **Tipo:** Evento personalizado
- **Nombre del evento:** `phone_click`
- **Este activador se activa en:** Todos los eventos personalizados

#### Activador 3: Form Submit

- **Nombre:** `Form Submit`
- **Tipo:** Evento personalizado
- **Nombre del evento:** `form_submit`
- **Este activador se activa en:** Todos los eventos personalizados

#### Activador 4: Scroll Depth

- **Nombre:** `Scroll Depth`
- **Tipo:** Evento personalizado
- **Nombre del evento:** `scroll_depth`
- **Este activador se activa en:** Todos los eventos personalizados

### 2.3 Etiquetas (Tags) - Google Analytics 4

Ve a **Etiquetas** → **Nueva**

#### Etiqueta 1: GA4 - WhatsApp Click

- **Nombre:** `GA4 - WhatsApp Click`
- **Tipo de etiqueta:** Evento de Google Analytics: GA4
- **ID de medición:** `TU_ID_DE_GA4` (ej: G-XXXXXXXXXX)
- **Nombre del evento:** `whatsapp_click`
- **Parámetros del evento:**
  
  | Nombre del parámetro | Valor |
  |---------------------|-------|
  | `event_category` | `{{dlv - event_category}}` |
  | `event_label` | `{{dlv - event_label}}` |
  | `location` | `{{dlv - location}}` |
  | `contact_method` | `{{dlv - contact_method}}` |

- **Activador:** `WhatsApp Click`

#### Etiqueta 2: GA4 - Phone Click

- **Nombre:** `GA4 - Phone Click`
- **Tipo de etiqueta:** Evento de Google Analytics: GA4
- **ID de medición:** `TU_ID_DE_GA4`
- **Nombre del evento:** `phone_click`
- **Parámetros del evento:**
  
  | Nombre del parámetro | Valor |
  |---------------------|-------|
  | `event_category` | `{{dlv - event_category}}` |
  | `event_label` | `{{dlv - event_label}}` |
  | `location` | `{{dlv - location}}` |
  | `contact_method` | `{{dlv - contact_method}}` |

- **Activador:** `Phone Click`

#### Etiqueta 3: GA4 - Form Submit

- **Nombre:** `GA4 - Form Submit`
- **Tipo de etiqueta:** Evento de Google Analytics: GA4
- **ID de medición:** `TU_ID_DE_GA4`
- **Nombre del evento:** `form_submit`
- **Parámetros del evento:**
  
  | Nombre del parámetro | Valor |
  |---------------------|-------|
  | `event_category` | `{{dlv - event_category}}` |
  | `event_label` | `{{dlv - event_label}}` |
  | `form_name` | `{{dlv - form_name}}` |
  | `form_type` | `{{dlv - form_type}}` |
  | `event_type` | `{{dlv - event_type}}` |
  | `guests` | `{{dlv - guests}}` |
  | `services` | `{{dlv - services}}` |
  | `urgent_event` | `{{dlv - urgent_event}}` |
  | `contact_method` | `form` |

- **Activador:** `Form Submit`

#### Etiqueta 4: GA4 - Scroll Depth

- **Nombre:** `GA4 - Scroll Depth`
- **Tipo de etiqueta:** Evento de Google Analytics: GA4
- **ID de medición:** `TU_ID_DE_GA4`
- **Nombre del evento:** `scroll_depth`
- **Parámetros del evento:**
  
  | Nombre del parámetro | Valor |
  |---------------------|-------|
  | `event_category` | `{{dlv - event_category}}` |
  | `scroll_depth` | `{{dlv - scroll_depth}}` |
  | `page_path` | `{{dlv - page_path}}` |

- **Activador:** `Scroll Depth`

## 🧪 Paso 3: Probar en Modo Vista Previa

1. En GTM, haz click en **Vista previa**
2. Ingresa la URL de tu sitio
3. Se abrirá una nueva pestaña con el Tag Assistant
4. Realiza las siguientes acciones:
   - ✅ Click en WhatsApp
   - ✅ Click en teléfono
   - ✅ Envía el formulario
   - ✅ Scrollea hasta el 75% y 90%
5. Verifica que todos los eventos aparezcan en el Tag Assistant

## 📊 Paso 4: Configurar Conversiones en GA4

1. Ve a **Google Analytics 4**
2. Navega a **Administración** → **Eventos**
3. Espera unos minutos hasta que aparezcan los eventos
4. Marca como **conversión** estos eventos:
   - ✅ `whatsapp_click`
   - ✅ `phone_click`
   - ✅ `form_submit`

## 📈 Paso 5: Crear Informe Personalizado

### Opción A: Exploración Libre

1. Ve a **Explorar** → **Exploración libre**
2. **Dimensiones:** Agrega estas dimensiones
   - Fuente/medio del usuario
   - Página de destino
   - Nombre del evento
   - `location` (dimensión personalizada)
3. **Métricas:** Agrega estas métricas
   - Usuarios
   - Recuento de eventos
4. **Filtros:**
   - Nombre del evento = `whatsapp_click` O `phone_click` O `form_submit`

### Opción B: Informe de Embudo

1. Ve a **Explorar** → **Exploración de embudo**
2. Configura el embudo:
   - **Paso 1:** Vista de página (cualquier página)
   - **Paso 2:** Scroll al 75% (`scroll_depth` con `scroll_depth = 75`)
   - **Paso 3:** Contacto (`whatsapp_click` O `phone_click` O `form_submit`)

## 🎯 Paso 6: Métricas Calculadas

Ve a **Administración** → **Definiciones personalizadas** → **Métricas calculadas**

### Métrica 1: Contactos Totales

- **Nombre:** `contactos_totales`
- **Nombre de API:** `contactos_totales`
- **Descripción:** Total de intentos de contacto
- **Fórmula:**
  ```
  Recuento de eventos (whatsapp_click) + 
  Recuento de eventos (phone_click) + 
  Recuento de eventos (form_submit)
  ```
- **Tipo:** Entero

### Métrica 2: Tasa de Conversión

- **Nombre:** `tasa_conversion`
- **Nombre de API:** `tasa_conversion`
- **Descripción:** Porcentaje de usuarios que contactan
- **Fórmula:**
  ```
  (contactos_totales / Usuarios) * 100
  ```
- **Tipo:** Decimal

### Métrica 3: Scroll 75% Rate

- **Nombre:** `scroll_75_rate`
- **Nombre de API:** `scroll_75_rate`
- **Descripción:** Porcentaje de usuarios que llegan al 75%
- **Fórmula:**
  ```
  (Recuento de eventos (scroll_depth con scroll_depth=75) / Usuarios) * 100
  ```
- **Tipo:** Decimal

## 🚨 Paso 7: Configurar Alertas

Ve a **Administración** → **Alertas personalizadas**

### Alerta 1: Caída en Conversiones

- **Nombre:** Caída en Tasa de Conversión
- **Aplica a:** Todas las vistas
- **Período:** Día
- **Condición:** `tasa_conversion` disminuye más del 20%
- **Notificación:** Email

### Alerta 2: Caída en Contactos

- **Nombre:** Caída en Contactos Totales
- **Aplica a:** Todas las vistas
- **Período:** Día
- **Condición:** `contactos_totales` disminuye más del 30%
- **Notificación:** Email

## 📱 Paso 8: Dashboard en Looker Studio (Opcional)

1. Ve a [Looker Studio](https://lookerstudio.google.com/)
2. Crea un nuevo informe
3. Conecta tu fuente de datos de GA4
4. Agrega estos widgets:

### Widget 1: Contactos Totales (Tarjeta)
- **Métrica:** `contactos_totales`
- **Comparación:** Período anterior

### Widget 2: Tasa de Conversión (Gráfico de Líneas)
- **Dimensión:** Fecha
- **Métrica:** `tasa_conversion`
- **Dimensión secundaria:** Fuente/medio

### Widget 3: Desglose de Contactos (Gráfico de Anillo)
- **Dimensión:** Nombre del evento
- **Métrica:** Recuento de eventos
- **Filtro:** `whatsapp_click`, `phone_click`, `form_submit`

### Widget 4: Conversión por Fuente (Tabla)
- **Dimensión:** Fuente/medio
- **Métricas:** Usuarios, `contactos_totales`, `tasa_conversion`
- **Ordenar por:** `tasa_conversion` descendente

### Widget 5: Ubicaciones más Efectivas (Tabla)
- **Dimensión:** `location`
- **Métricas:** Recuento de eventos, `tasa_conversion`

## ✅ Checklist Final

Antes de publicar en GTM, verifica:

- [ ] Todas las variables de capa de datos están creadas
- [ ] Los 4 activadores están configurados
- [ ] Las 4 etiquetas de GA4 están creadas y vinculadas
- [ ] Probaste en modo Vista Previa
- [ ] Los eventos aparecen en GA4 Tiempo Real
- [ ] Marcaste los eventos como conversiones
- [ ] Creaste al menos un informe personalizado
- [ ] Configuraste alertas de caída

## 🎓 Recursos Útiles

- [GTM Debug Mode](https://support.google.com/tagmanager/answer/6107056)
- [GA4 Event Builder](https://ga-dev-tools.google/ga4/event-builder/)
- [Looker Studio](https://lookerstudio.google.com/)

---

**¡Listo!** 🎉 Ahora tienes un sistema completo de tracking que te permite medir las métricas que realmente importan para tu negocio.

## 🔍 Troubleshooting

### Problema: No veo eventos en GA4

**Solución:**
1. Verifica que el ID de GA4 sea correcto
2. Espera 24-48 horas para datos históricos
3. Verifica en **Tiempo Real** primero

### Problema: Los eventos no se disparan

**Solución:**
1. Abre la consola del navegador (F12)
2. Escribe `dataLayer` y verifica que los eventos estén ahí
3. Si no están, revisa la consola por errores de JavaScript

### Problema: GTM no está cargando

**Solución:**
1. Verifica que el ID de GTM sea correcto (`GTM-53L66W4N`)
2. Verifica que no haya bloqueadores de anuncios
3. Revisa la pestaña Network en DevTools

---

**Desarrollado con ❤️ para medir lo que importa** 📊


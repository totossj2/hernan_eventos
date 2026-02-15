# ⚡ GTM Setup Rápido - 15 Minutos

## 🎯 Objetivo

Configurar Google Tag Manager para trackear las 4 métricas que importan:

1. **Intentos de Contacto** (whatsapp + phone + form)
2. **Tasa de Conversión** (contactos / visitantes)
3. **Scroll Profundo** (75% y 90%)
4. **Conversión por Fuente** (automático en GA4)

---

## 📋 Antes de Empezar

✅ **Ya tienes:**
- GTM instalado (`GTM-53L66W4N`)
- Código de tracking implementado en el sitio
- Eventos enviándose al dataLayer

❌ **Solo falta:**
- Configurar GTM para capturar estos eventos
- Enviarlos a Google Analytics 4

---

## 🚀 Parte 1: Encuentra tu ID de GA4

**Necesitas tu ID de medición de Google Analytics 4**

1. Ve a [Google Analytics](https://analytics.google.com)
2. Configuración (⚙️) → Secuencias de datos
3. Selecciona tu sitio web
4. Copia el **ID de medición** → Formato: `G-XXXXXXXXXX`

**💡 Guarda este ID**, lo necesitarás en cada etiqueta.

---

## 🏗️ Parte 2: Crear Variables (5 min)

**GTM → Variables → Nueva**

Crea estas 8 variables (todas son del tipo "Variable de Capa de Datos"):

### Template para Variables de Capa de Datos

Para cada una:
1. Click **"Nueva Variable"**
2. Configuración → **Capa de datos**
3. Nombre de variable de capa de datos: (ver tabla abajo)
4. Versión de capa de datos: **Versión 2**
5. Guardar con el nombre especificado

| # | Nombre de Variable | Valor de Capa de Datos |
|---|-------------------|------------------------|
| 1 | `DLV - Event Category` | `event_category` |
| 2 | `DLV - Event Label` | `event_label` |
| 3 | `DLV - Location` | `location` |
| 4 | `DLV - Contact Method` | `contact_method` |
| 5 | `DLV - Form Name` | `form_name` |
| 6 | `DLV - Event Type` | `event_type` |
| 7 | `DLV - Scroll Depth` | `scroll_depth` |
| 8 | `DLV - Page Path` | `page_path` |

**Resultado:** 8 variables creadas ✅

---

## 🎬 Parte 3: Crear Activadores (3 min)

**GTM → Activadores → Nuevo**

### Template para Activadores de Evento Personalizado

Todos son del tipo "Evento personalizado" (Custom Event).

| # | Nombre Activador | Tipo | Nombre del Evento | Condición Extra |
|---|-----------------|------|-------------------|-----------------|
| 1 | `CE - WhatsApp Click` | Evento personalizado | `whatsapp_click` | - |
| 2 | `CE - Phone Click` | Evento personalizado | `phone_click` | - |
| 3 | `CE - Form Submit` | Evento personalizado | `form_submit` | - |
| 4 | `CE - Scroll 75%` | Evento personalizado | `scroll_depth` | `DLV - Scroll Depth` = `75` |
| 5 | `CE - Scroll 90%` | Evento personalizado | `scroll_depth` | `DLV - Scroll Depth` = `90` |

### Instrucciones Detalladas

#### Activadores 1, 2, 3 (WhatsApp, Phone, Form):
1. Tipo de activador: **Evento personalizado**
2. Nombre del evento: `whatsapp_click` (o el que corresponda)
3. Este activador se activa en: **Todos los eventos personalizados**
4. Guardar

#### Activadores 4, 5 (Scroll 75% y 90%):
1. Tipo de activador: **Evento personalizado**
2. Nombre del evento: `scroll_depth`
3. Este activador se activa en: **Algunos eventos personalizados**
4. **Agregar condición:**
   - `DLV - Scroll Depth` → es igual a → `75` (o `90`)
5. Guardar

**Resultado:** 5 activadores creados ✅

---

## 🏷️ Parte 4: Crear Etiquetas GA4 (7 min)

**GTM → Etiquetas → Nueva**

### Template para Etiquetas GA4

Todas son del tipo **"Evento de Google Analytics: GA4"**

---

### 1️⃣ Etiqueta: WhatsApp Click

**Configuración:**
- Tipo: **Evento de Google Analytics: GA4**
- ID de medición: `G-XXXXXXXXXX` (TU ID de GA4)
- Nombre del evento: `whatsapp_click`

**Parámetros del evento** (click "Agregar fila"):

| Nombre del parámetro | Valor |
|---------------------|-------|
| `event_category` | `{{DLV - Event Category}}` |
| `event_label` | `{{DLV - Event Label}}` |
| `location` | `{{DLV - Location}}` |
| `contact_method` | `whatsapp` |

**Activación:** `CE - WhatsApp Click`

**Nombre de etiqueta:** `GA4 - WhatsApp Click`

---

### 2️⃣ Etiqueta: Phone Click

**Configuración:**
- Tipo: **Evento de Google Analytics: GA4**
- ID de medición: `G-XXXXXXXXXX`
- Nombre del evento: `phone_click`

**Parámetros del evento:**

| Nombre del parámetro | Valor |
|---------------------|-------|
| `event_category` | `{{DLV - Event Category}}` |
| `event_label` | `{{DLV - Event Label}}` |
| `location` | `{{DLV - Location}}` |
| `contact_method` | `phone` |

**Activación:** `CE - Phone Click`

**Nombre de etiqueta:** `GA4 - Phone Click`

---

### 3️⃣ Etiqueta: Form Submit

**Configuración:**
- Tipo: **Evento de Google Analytics: GA4**
- ID de medición: `G-XXXXXXXXXX`
- Nombre del evento: `form_submit`

**Parámetros del evento:**

| Nombre del parámetro | Valor |
|---------------------|-------|
| `event_category` | `contact` |
| `event_label` | `{{DLV - Event Label}}` |
| `form_name` | `{{DLV - Form Name}}` |
| `event_type` | `{{DLV - Event Type}}` |
| `contact_method` | `form` |

**Activación:** `CE - Form Submit`

**Nombre de etiqueta:** `GA4 - Form Submit`

---

### 4️⃣ Etiqueta: Scroll 75%

**Configuración:**
- Tipo: **Evento de Google Analytics: GA4**
- ID de medición: `G-XXXXXXXXXX`
- Nombre del evento: `scroll_75`

**Parámetros del evento:**

| Nombre del parámetro | Valor |
|---------------------|-------|
| `event_category` | `engagement` |
| `scroll_depth` | `75` |
| `page_path` | `{{DLV - Page Path}}` |

**Activación:** `CE - Scroll 75%`

**Nombre de etiqueta:** `GA4 - Scroll 75%`

---

### 5️⃣ Etiqueta: Scroll 90%

**Configuración:**
- Tipo: **Evento de Google Analytics: GA4**
- ID de medición: `G-XXXXXXXXXX`
- Nombre del evento: `scroll_90`

**Parámetros del evento:**

| Nombre del parámetro | Valor |
|---------------------|-------|
| `event_category` | `engagement` |
| `scroll_depth` | `90` |
| `page_path` | `{{DLV - Page Path}}` |

**Activación:** `CE - Scroll 90%`

**Nombre de etiqueta:** `GA4 - Scroll 90%`

---

**Resultado:** 5 etiquetas creadas ✅

---

## ✅ Parte 5: Probar con Vista Previa (5 min)

**Antes de publicar, SIEMPRE prueba.**

1. **GTM → Vista previa** (botón arriba a la derecha)
2. Ingresa la URL de tu sitio
3. Se abrirá tu sitio con el panel de debug de GTM

### Pruebas a realizar:

| Acción | Evento esperado | Verificar |
|--------|----------------|-----------|
| Click en botón WhatsApp | `whatsapp_click` | ✅ Aparece en el panel |
| Click en teléfono (footer) | `phone_click` | ✅ Aparece en el panel |
| Enviar formulario | `form_submit` | ✅ Aparece en el panel |
| Scroll hasta 75% | `scroll_depth` (75) | ✅ Aparece en el panel |
| Scroll hasta 90% | `scroll_depth` (90) | ✅ Aparece en el panel |

**Si ves todos los eventos → Perfecto** ✅  
**Si falta alguno → Revisa la configuración** ❌

---

## 🚀 Parte 6: Publicar

1. Click en **"Enviar"** (arriba a la derecha)
2. Nombre de versión: `Métricas de Contacto v1.0`
3. Descripción: `Tracking de intentos de contacto y scroll depth`
4. **Publicar**

**🎉 ¡GTM configurado!**

---

## 📊 Parte 7: Configurar GA4 (10 min)

### Marcar eventos como conversiones

**GA4 → Configurar → Eventos**

Espera 24 horas a que los eventos aparezcan, luego:

1. Busca `whatsapp_click` → Click en **"Marcar como conversión"** ✅
2. Busca `phone_click` → Click en **"Marcar como conversión"** ✅
3. Busca `form_submit` → Click en **"Marcar como conversión"** ✅

**¿Por qué?** Esto te permite medir la tasa de conversión automáticamente.

---

### Crear evento personalizado unificado

**GA4 → Configurar → Eventos → Crear evento**

**Nombre del evento:** `contacto_total`

**Parámetros de coincidencia:**
- Nombre del parámetro: `event_name`
- Operador: **coincide con la expresión regular**
- Valor: `whatsapp_click|phone_click|form_submit`

**Guardar** → Ahora marca `contacto_total` como conversión también ✅

**¿Para qué sirve?** Tienes el total de intentos de contacto en un solo evento.

---

## 📈 Ver tus métricas

### 1️⃣ Intentos de Contacto

**GA4 → Informes → Engagement → Eventos**

Busca:
- `whatsapp_click`
- `phone_click`
- `form_submit`
- `contacto_total` (suma de los 3)

**Fórmula:**
```
Contactos Totales = whatsapp_click + phone_click + form_submit
```

**Benchmark:**
- < 1% → ❌ Tráfico incorrecto o propuesta débil
- 1-3% → ⚠️ Normal
- 3-5% → ✅ Funcionando bien
- > 5% → 🚀 Excelente

---

### 2️⃣ Tasa de Conversión

**GA4 → Informes → Adquisición → Adquisición de usuarios**

Columnas:
- Usuarios
- Conversiones
- **Tasa de conversión**

**Fórmula:**
```
Tasa de Conversión = (Conversiones / Usuarios) × 100
```

**Pregunta clave:** ¿El problema es marketing o la landing?
- Bajo tráfico + alta conversión → Invertir en marketing
- Alto tráfico + baja conversión → Mejorar la landing

---

### 3️⃣ Scroll Profundo

**GA4 → Informes → Engagement → Eventos**

Busca:
- `scroll_75`
- `scroll_90`

**Fórmula:**
```
Tasa de Scroll 75% = (Usuarios con scroll_75 / Total Usuarios) × 100
```

**Interpretación:**
- **Bajo scroll + baja conversión:** Hero no engancha
- **Alto scroll + baja conversión:** Oferta poco convincente
- **Alto scroll + alta conversión:** 🎯 Todo funciona

---

### 4️⃣ Conversión por Fuente

**GA4 → Informes → Adquisición → Adquisición de tráfico**

**Tabla:**

| Fuente | Usuarios | Conversiones | Tasa Conv. | 
|--------|----------|--------------|------------|
| Google Ads | 500 | 25 | 5% |
| Orgánico | 300 | 3 | 1% |
| Instagram | 200 | 10 | 5% |
| Directo | 100 | 2 | 2% |

**Pregunta clave:** ¿Qué canal trae clientes reales?

**Acción:** Invierte SOLO en canales con alta tasa de conversión.

---

## 🎯 Resumen

### Lo que hiciste:

✅ 8 variables de dataLayer  
✅ 5 activadores de eventos  
✅ 5 etiquetas GA4  
✅ Probado en vista previa  
✅ Publicado en GTM  
✅ Eventos marcados como conversiones en GA4  
✅ Evento unificado `contacto_total` creado  

### Lo que puedes medir ahora:

1. **Intentos de Contacto** → Métrica central del negocio
2. **Tasa de Conversión** → contactos / visitantes
3. **Scroll Profundo** → ¿Ven la oferta completa?
4. **Conversión por Fuente** → ¿Qué canal funciona?

---

## 🔥 Próximos Pasos

### Semana 1: Recolectar datos
- Deja correr al menos 7 días
- No hagas cambios todavía

### Semana 2: Analizar
- Si conversión < 1% → Crisis (tráfico incorrecto o propuesta débil)
- Si conversión 1-3% → Normal, optimizar gradualmente
- Si conversión > 3% → Funciona, escalar inversión

### Optimizar:
- **Bajo scroll:** Mejorar hero
- **Alto scroll + baja conversión:** Mejorar propuesta de valor
- **Canal específico convierte bien:** Invertir más ahí

---

## 📞 Troubleshooting

**Problema:** Los eventos no aparecen en el panel de vista previa de GTM

**Solución:**
1. Asegúrate de que estás en el sitio correcto
2. Verifica que el dataLayer se esté inicializando (ve a Consola → escribe `dataLayer`)
3. Haz click en los botones y verifica que se disparen los eventos

---

**Problema:** Los eventos aparecen en GTM pero no en GA4

**Solución:**
1. Verifica que el ID de medición sea correcto (formato `G-XXXXXXXXXX`)
2. Espera 24-48 horas (GA4 tiene retrasos iniciales)
3. Revisa GA4 → Tiempo real (los eventos deberían aparecer casi instantáneamente)

---

**Problema:** La tasa de conversión es 0%

**Solución:**
1. Verifica que los eventos estén marcados como conversiones en GA4
2. Espera 24 horas después de marcarlos
3. Revisa que los eventos se estén disparando correctamente

---

## ✨ ¡Listo!

Ahora tienes visibilidad completa de tu embudo de conversión.

**Tiempo de configuración:** 15-30 minutos  
**Impacto:** Decisiones basadas en datos reales, no en intuiciones

**No mires clicks aislados. Solo importa: contactos / visitantes.**


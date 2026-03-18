# 📊 Configuración de Métricas Clave en Google Tag Manager

## 🎯 Resumen Ejecutivo

Este documento te guía paso a paso para configurar las **4 métricas principales** que definirán el éxito de tu landing en Google Tag Manager y Google Analytics 4.

### Las 4 Métricas Clave

1. **Intentos de Contacto** → ¿La gente quiere hablar conmigo?
2. **Tasa de Conversión** → contactos / visitantes
3. **Scroll Profundo** → ¿Llegan a ver la oferta completa?
4. **Conversión por Fuente** → ¿Qué canal trae clientes reales?

---

## 📋 Prerequisitos

✅ Ya tienes GTM instalado (ID: `GTM-53L66W4N`)  
✅ Ya tienes el código implementado (eventos ya se envían desde el sitio)  
✅ Ahora solo necesitas configurar GTM y GA4 para capturar estos eventos

---

## 🚀 PARTE 1: Configuración en Google Tag Manager

### Paso 1: Variables de DataLayer

Primero, crea las variables que capturarán datos del dataLayer.

**Ve a GTM → Variables → Nueva**

Crea estas **Variables de Capa de Datos** (Data Layer Variables):

| Nombre de Variable | Nombre de Capa de Datos | Tipo |
|-------------------|------------------------|------|
| `DLV - Event Category` | `event_category` | Data Layer Variable |
| `DLV - Event Label` | `event_label` | Data Layer Variable |
| `DLV - Location` | `location` | Data Layer Variable |
| `DLV - Contact Method` | `contact_method` | Data Layer Variable |
| `DLV - Form Name` | `form_name` | Data Layer Variable |
| `DLV - Event Type` | `event_type` | Data Layer Variable |
| `DLV - Scroll Depth` | `scroll_depth` | Data Layer Variable |
| `DLV - Page Path` | `page_path` | Data Layer Variable |

**Cómo crear cada variable:**
1. Click en "Nueva Variable"
2. Configuración de Variable → Capa de datos
3. Nombre de Variable de Capa de Datos: `event_category` (o el que corresponda)
4. Versión de Capa de Datos: Versión 2
5. Guardar con el nombre especificado

---

### Paso 2: Crear Activadores (Triggers)

Ahora crea los activadores para cada evento.

#### 📱 Activador: WhatsApp Click

**GTM → Activadores → Nuevo**

- **Nombre:** `CE - WhatsApp Click`
- **Tipo:** Evento Personalizado
- **Nombre del Evento:** `whatsapp_click`
- **Este activador se activa en:** Todos los eventos personalizados

#### 📞 Activador: Phone Click

- **Nombre:** `CE - Phone Click`
- **Tipo:** Evento Personalizado
- **Nombre del Evento:** `phone_click`
- **Este activador se activa en:** Todos los eventos personalizados

#### 📝 Activador: Form Submit

- **Nombre:** `CE - Form Submit`
- **Tipo:** Evento Personalizado
- **Nombre del Evento:** `form_submit`
- **Este activador se activa en:** Todos los eventos personalizados

#### 📊 Activador: Scroll 75%

- **Nombre:** `CE - Scroll 75%`
- **Tipo:** Evento Personalizado
- **Nombre del Evento:** `scroll_depth`
- **Este activador se activa en:** Algunos eventos personalizados
- **Condición:** `DLV - Scroll Depth` es igual a `75`

#### 📊 Activador: Scroll 90%

- **Nombre:** `CE - Scroll 90%`
- **Tipo:** Evento Personalizado
- **Nombre del Evento:** `scroll_depth`
- **Este activador se activa en:** Algunos eventos personalizados
- **Condición:** `DLV - Scroll Depth` es igual a `90`

---

### Paso 3: Crear Etiquetas (Tags) de GA4

Ahora conecta cada activador con Google Analytics 4.

#### 🏷️ Etiqueta: WhatsApp Click

**GTM → Etiquetas → Nueva**

- **Nombre:** `GA4 - WhatsApp Click`
- **Tipo de Etiqueta:** Evento de Google Analytics: GA4
- **ID de Medición:** `G-XXXXXXXXXX` (tu ID de GA4)
- **Nombre del Evento:** `whatsapp_click`
- **Parámetros del Evento:**
  
  | Nombre del Parámetro | Valor |
  |---------------------|-------|
  | `event_category` | `{{DLV - Event Category}}` |
  | `event_label` | `{{DLV - Event Label}}` |
  | `location` | `{{DLV - Location}}` |
  | `contact_method` | `whatsapp` |

- **Activación:** `CE - WhatsApp Click`

#### 🏷️ Etiqueta: Phone Click

- **Nombre:** `GA4 - Phone Click`
- **Tipo de Etiqueta:** Evento de Google Analytics: GA4
- **ID de Medición:** `G-XXXXXXXXXX`
- **Nombre del Evento:** `phone_click`
- **Parámetros del Evento:**
  
  | Nombre del Parámetro | Valor |
  |---------------------|-------|
  | `event_category` | `{{DLV - Event Category}}` |
  | `event_label` | `{{DLV - Event Label}}` |
  | `location` | `{{DLV - Location}}` |
  | `contact_method` | `phone` |

- **Activación:** `CE - Phone Click`

#### 🏷️ Etiqueta: Form Submit

- **Nombre:** `GA4 - Form Submit`
- **Tipo de Etiqueta:** Evento de Google Analytics: GA4
- **ID de Medición:** `G-XXXXXXXXXX`
- **Nombre del Evento:** `form_submit`
- **Parámetros del Evento:**
  
  | Nombre del Parámetro | Valor |
  |---------------------|-------|
  | `event_category` | `contact` |
  | `event_label` | `{{DLV - Event Label}}` |
  | `form_name` | `{{DLV - Form Name}}` |
  | `event_type` | `{{DLV - Event Type}}` |
  | `contact_method` | `form` |

- **Activación:** `CE - Form Submit`

#### 🏷️ Etiqueta: Scroll 75%

- **Nombre:** `GA4 - Scroll 75%`
- **Tipo de Etiqueta:** Evento de Google Analytics: GA4
- **ID de Medición:** `G-XXXXXXXXXX`
- **Nombre del Evento:** `scroll_75`
- **Parámetros del Evento:**
  
  | Nombre del Parámetro | Valor |
  |---------------------|-------|
  | `event_category` | `engagement` |
  | `scroll_depth` | `75` |
  | `page_path` | `{{DLV - Page Path}}` |

- **Activación:** `CE - Scroll 75%`

#### 🏷️ Etiqueta: Scroll 90%

- **Nombre:** `GA4 - Scroll 90%`
- **Tipo de Etiqueta:** Evento de Google Analytics: GA4
- **ID de Medición:** `G-XXXXXXXXXX`
- **Nombre del Evento:** `scroll_90`
- **Parámetros del Evento:**
  
  | Nombre del Parámetro | Valor |
  |---------------------|-------|
  | `event_category` | `engagement` |
  | `scroll_depth` | `90` |
  | `page_path` | `{{DLV - Page Path}}` |

- **Activación:** `CE - Scroll 90%`

---

### Paso 4: Publicar Cambios

1. Click en **"Enviar"** (arriba a la derecha)
2. Versión: "Métricas de Contacto - v1.0"
3. Descripción: "Implementación de intentos de contacto y scroll tracking"
4. **Publicar**

---

## 📈 PARTE 2: Configuración en Google Analytics 4

### Paso 1: Marcar Eventos como Conversiones

**GA4 → Configurar → Eventos**

Marca estos eventos como **conversiones**:

1. `whatsapp_click` → ✅ Marcar como conversión
2. `phone_click` → ✅ Marcar como conversión
3. `form_submit` → ✅ Marcar como conversión

**¿Por qué?** Esto te permite medir la tasa de conversión automáticamente.

---

### Paso 2: Crear Evento Personalizado Calculado

**GA4 → Configurar → Eventos → Crear evento**

#### Evento: `contacto_total`

Este evento se dispara cuando ocurre CUALQUIER intento de contacto.

- **Nombre del evento:** `contacto_total`
- **Parámetros de coincidencia:**
  - Nombre del parámetro: `event_name`
  - Operador: coincide con la expresión regular
  - Valor: `whatsapp_click|phone_click|form_submit`

**¿Para qué sirve?** Puedes marcar `contacto_total` como conversión y tendrás el total unificado de intentos de contacto.

---

### Paso 3: Crear Métricas Personalizadas

**GA4 → Configurar → Definiciones personalizadas → Métricas personalizadas**

#### Métrica: Contactos Totales

- **Nombre de métrica:** `contactos_totales`
- **Nombre de API:** `contactos_totales`
- **Descripción:** Suma de whatsapp_click + phone_click + form_submit
- **Nombre del evento:** `contacto_total`
- **Unidad de medida:** Estándar

---

### Paso 4: Crear Audiencias (Opcional pero Recomendado)

**GA4 → Configurar → Audiencias → Nueva audiencia**

#### Audiencia: Usuarios con Alta Intención (Scroll 75%+)

- **Nombre:** `Alta Intención - Scroll 75%`
- **Descripción:** Usuarios que llegaron al 75% de la página
- **Condición:**
  - Evento: `scroll_75`
  - En los últimos 30 días

**¿Para qué?** Puedes remarketing a usuarios que vieron tu oferta completa pero no contactaron.

#### Audiencia: Usuarios que No Convirtieron

- **Nombre:** `Vio Oferta pero No Contactó`
- **Descripción:** Usuarios con scroll 75%+ sin conversión
- **Condición:**
  - Incluir: Evento `scroll_75`
  - Excluir: Evento `contacto_total`

---

## 📊 PARTE 3: Dashboards y Reportes

### Reporte Personalizado: Métricas Principales

**GA4 → Explorar → Crear nuevo**

#### 📌 Métrica 1: Intentos de Contacto

**Dimensiones:**
- `Nombre del evento`

**Métricas:**
- `Recuento de eventos`

**Filtro:**
- `Nombre del evento` coincide con expresión regular: `whatsapp_click|phone_click|form_submit`

**Fórmula para calcular total:**
```
contactos_totales = 
  COUNT(whatsapp_click) + 
  COUNT(phone_click) + 
  COUNT(form_submit)
```

**Interpretación:**
- < 1% de visitantes → ❌ Propuesta débil o tráfico incorrecto
- 1-3% → ⚠️ Normal inicial
- 3-5% → ✅ Landing funcionando bien
- > 5% → 🚀 Excelente conversión

---

#### 📌 Métrica 2: Tasa de Conversión Total

**Fórmula en GA4:**
```
Tasa de Conversión = 
  (Conversiones / Usuarios) × 100
```

**Cómo verlo:**
1. GA4 → Informes → Adquisición → Adquisición de usuarios
2. Comparar métrica: **Tasa de conversión**

**Interpretación:**
- Esta métrica decide si el problema es:
  - **Marketing:** bajo tráfico o tráfico incorrecto
  - **Landing:** la oferta no convence

---

#### 📌 Métrica 3: Scroll Profundo (75% y 90%)

**Dimensiones:**
- `Nombre del evento`: `scroll_75`, `scroll_90`

**Métricas:**
- `Usuarios`

**Fórmula:**
```
Tasa de Scroll 75% = 
  (Usuarios con scroll_75 / Total Usuarios) × 100
```

**Interpretación:**
- **Bajo scroll + baja conversión:** Hero no engancha
- **Alto scroll + baja conversión:** Propuesta poco convincente
- **Alto scroll + alta conversión:** 🎯 Landing optimizada

---

#### 📌 Métrica 4: Conversión por Fuente

**GA4 → Informes → Adquisición → Adquisición de tráfico**

**Dimensiones:**
- Medio de sesión
- Fuente de sesión

**Métricas:**
- Usuarios
- Conversiones (`contacto_total`)
- Tasa de conversión

**Tabla de Análisis:**

| Fuente | Usuarios | Conversiones | Tasa Conv. | Acción |
|--------|----------|--------------|------------|---------|
| Google Ads | 500 | 25 | 5% | ✅ Aumentar presupuesto |
| Orgánico | 300 | 3 | 1% | ⚠️ Mejorar SEO o contenido |
| Instagram | 200 | 10 | 5% | ✅ Escalar campañas |
| Directo | 100 | 2 | 2% | ⚠️ Mejorar branding |

**Pregunta clave:** ¿Qué canal trae clientes reales, no solo visitas?

**Decisión:** Invierte tiempo y dinero SOLO en canales con alta tasa de conversión.

---

## 🧪 PARTE 4: Verificación y Testing

### Modo de Vista Previa de GTM

1. **GTM → Vista previa**
2. Ingresa la URL de tu sitio
3. Interactúa con botones de WhatsApp, teléfono y formulario
4. Verifica en el panel de debug que los eventos se disparen correctamente

**Eventos que debes ver:**
- `whatsapp_click` cuando haces click en WhatsApp
- `phone_click` cuando haces click en teléfono
- `form_submit` cuando envías el formulario
- `scroll_depth` cuando llegas al 75% y 90%

### Vista en Tiempo Real de GA4

**GA4 → Informes → Tiempo real**

Realiza estas acciones y verifica que aparezcan en el reporte:

1. Click en WhatsApp → Debe aparecer `whatsapp_click`
2. Click en teléfono → Debe aparecer `phone_click`
3. Envía formulario → Debe aparecer `form_submit`
4. Scroll al 75% → Debe aparecer `scroll_75`
5. Scroll al 90% → Debe aparecer `scroll_90`

---

## 📋 Checklist Final

### GTM
- [ ] Variables de DataLayer creadas (8 variables)
- [ ] Activadores creados (5 activadores)
- [ ] Etiquetas GA4 creadas (5 etiquetas)
- [ ] Cambios publicados
- [ ] Modo vista previa probado

### GA4
- [ ] Eventos marcados como conversiones (whatsapp_click, phone_click, form_submit)
- [ ] Evento calculado `contacto_total` creado
- [ ] Métrica personalizada `contactos_totales` creada
- [ ] Audiencias de remarketing creadas (opcional)
- [ ] Vista en tiempo real verificada

### Reportes
- [ ] Dashboard de métricas principales creado
- [ ] Reporte de conversión por fuente configurado
- [ ] Reporte de scroll depth configurado

---

## 🎯 Próximos Pasos

### Semana 1: Recolección de Datos
- Deja que GA4 recopile datos durante al menos 7 días
- No hagas cambios en la landing todavía

### Semana 2: Análisis Inicial
- Revisa las 4 métricas principales
- Identifica el canal con mejor tasa de conversión
- Mide tasa de scroll

### Decisiones basadas en datos:

**Si tienes bajo scroll (< 50% llega al 75%):**
→ Problema: Hero no engancha  
→ Acción: Mejorar headline, agregar prueba social, optimizar imágenes

**Si tienes alto scroll pero baja conversión:**
→ Problema: Propuesta poco convincente  
→ Acción: Clarificar beneficios, agregar testimonios, mejorar CTAs

**Si tienes alta conversión en un canal específico:**
→ Acción: Invertir más presupuesto en ese canal

---

## 🔥 Pro Tips

1. **No mires clicks aislados** → Solo importa `contactos_totales / visitantes`
2. **Conversión por fuente decide todo** → Invierte solo en canales que convierten
3. **Scroll + conversión = diagnóstico completo** → Te dice dónde está el problema
4. **Menos del 1% = crisis** → Tráfico incorrecto o propuesta débil
5. **3-5% = landing funciona** → Escala con confianza

---

## 📞 Troubleshooting

### Los eventos no aparecen en GA4

**Solución:**
1. Verifica en GTM modo vista previa que los eventos se disparen
2. Verifica que el ID de medición GA4 sea correcto en las etiquetas
3. Espera 24-48 horas (GA4 puede tener retrasos iniciales)

### Los eventos se disparan múltiples veces

**Solución:**
1. Verifica que no haya activadores duplicados en GTM
2. Asegúrate de que el código de tracking no esté duplicado en el sitio

### La tasa de conversión parece muy baja

**Solución:**
1. Verifica que los eventos estén marcados como conversiones en GA4
2. Compara con la industria (1-3% es normal para cotizaciones)
3. Analiza por fuente de tráfico (puede haber canales con 0% arrastrando el promedio)

---

## 📚 Recursos Adicionales

- [Documentación oficial de GTM](https://support.google.com/tagmanager)
- [Guía de eventos de GA4](https://support.google.com/analytics/answer/9322688)
- [Mejores prácticas de conversión](https://support.google.com/analytics/answer/9267568)

---

**¿Necesitas ayuda?** Todos los eventos ya están implementados en el código. Solo necesitas seguir esta guía en GTM y GA4.

**Tiempo estimado de configuración:** 45-60 minutos

**Impacto:** Visibilidad completa del embudo de conversión y decisiones basadas en datos reales.




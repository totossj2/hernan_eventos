# 📊 Sistema de Métricas de Conversión - Guía Completa

## 🎯 ¿Qué es esto?

Un sistema completo de tracking implementado en tu landing para medir las **4 métricas que realmente importan** para tu negocio de eventos.

---

## 🚀 Estado Actual

### ✅ Implementación Técnica (100% Completa)

**Código ya implementado:**
- ✅ Sistema de tracking centralizado (`lib/tracking.ts`)
- ✅ Eventos de WhatsApp (Hero, Navbar, Footer, Servicios)
- ✅ Eventos de Phone (Footer)
- ✅ Eventos de Form Submit (2 formularios)
- ✅ Scroll tracking automático (75% y 90%)
- ✅ Google Tag Manager configurado
- ✅ dataLayer inicializado

**Componentes con tracking:**
- ✅ Hero.tsx → WhatsApp click
- ✅ HeroServices.tsx → WhatsApp click (páginas de servicios)
- ✅ Navbar.tsx → WhatsApp click
- ✅ Footer.tsx → WhatsApp click + Phone click
- ✅ Form.tsx → Form submit (formulario completo)
- ✅ SimpleForm.tsx → Form submit (formulario simple)
- ✅ ServiceLayout.tsx → WhatsApp click (CTA de servicios)
- ✅ ScrollTracker.tsx → Scroll 75% y 90% automático

### ⚙️ Configuración GTM (Pendiente - 15 min)

**Lo que falta hacer EN GOOGLE TAG MANAGER:**
1. Crear 8 variables de dataLayer
2. Crear 5 activadores (triggers)
3. Crear 5 etiquetas GA4
4. Probar en modo vista previa
5. Publicar
6. Marcar eventos como conversiones en GA4

**Guía paso a paso:** Ver [`GTM_SETUP_RAPIDO.md`](./GTM_SETUP_RAPIDO.md) (15 minutos)

---

## 📋 Las 4 Métricas Clave

### 1️⃣ Intentos de Contacto (La métrica central)

**Qué mide:** Si la landing genera negocio real

```
contactos_totales = whatsapp_click + phone_click + form_submit
```

**Pregunta que responde:** ¿La gente quiere hablar conmigo o no?

**Benchmark:**
- < 1% → ❌ Propuesta débil o tráfico incorrecto
- 1-3% → ⚠️ Normal inicial
- 3-5% → ✅ Landing funcionando
- \> 5% → 🚀 Excelente

---

### 2️⃣ Tasa de Conversión Total

**Qué mide:** Eficiencia de la landing

```
conversion_rate = (contactos_totales / visitantes) × 100
```

**Pregunta que responde:** ¿El problema es marketing o la landing?

**Esto decide:**
- **Tráfico bajo + conversión alta** → Invertir en marketing
- **Tráfico alto + conversión baja** → Mejorar la landing

**No mires clicks aislados. Solo importa contacto / visita.**

---

### 3️⃣ Scroll Profundo (75% y 90%)

**Qué mide:** Si llegan a evaluar la oferta

```
scroll_75_rate = (usuarios_con_scroll_75 / visitantes) × 100
```

**Pregunta que responde:** ¿La gente ve mi propuesta completa?

**Interpretación:**
- **Bajo scroll + baja conversión** → Hero no engancha
- **Alto scroll + baja conversión** → Propuesta poco convincente
- **Alto scroll + alta conversión** → 🎯 Landing optimizada

**Sirve para detectar dónde se rompe el interés.**

---

### 4️⃣ Conversión por Fuente

**Qué mide:** Qué canal trae clientes REALES

```
conversion_rate_por_fuente = (conversiones / visitantes) × 100
```

**Pregunta que responde:** ¿Qué canal trae clientes reales, no visitas?

**Esto define dónde invertir tiempo y dinero.**

**Ejemplo:**

| Fuente | Usuarios | Conversiones | Tasa | Acción |
|--------|----------|--------------|------|--------|
| Google Ads | 500 | 25 | 5% | ✅ Aumentar presupuesto |
| Orgánico | 300 | 3 | 1% | ⚠️ Mejorar SEO |
| Instagram | 200 | 10 | 5% | ✅ Escalar campañas |
| Directo | 100 | 2 | 2% | ⚠️ Mejorar branding |

**Decisión:** Invierte SOLO en canales con alta tasa de conversión.

---

## 📚 Documentación Disponible

### 🚀 Para Empezar (15 min)

**[`GTM_SETUP_RAPIDO.md`](./GTM_SETUP_RAPIDO.md)**
- Setup completo de Google Tag Manager
- Paso a paso con screenshots
- Configuración de GA4
- Testing y publicación

👉 **Empieza por aquí si nunca configuraste GTM**

---

### 📊 Documentación Completa

**[`GTM_METRICAS_COMPLETAS.md`](./GTM_METRICAS_COMPLETAS.md)**
- Guía detallada de todas las métricas
- Variables, activadores y etiquetas
- Configuración avanzada de GA4
- Creación de audiencias
- Dashboards personalizados
- Troubleshooting

👉 **Para configuración avanzada y optimización**

---

### 🧮 Análisis e Interpretación

**[`GA4_CALCULADORA_METRICAS.md`](./GA4_CALCULADORA_METRICAS.md)**
- Fórmulas de cálculo
- Benchmarks por industria
- Interpretación cruzada de métricas
- Calculadora de ROI
- Plan de acción por escenario
- Checklist semanal

👉 **Para entender qué significan tus números y tomar decisiones**

---

## 🎬 Eventos Implementados

### Eventos de Contacto

Estos son los eventos que suman a "Intentos de Contacto":

#### `whatsapp_click`

**Dispara cuando:** Usuario hace click en botón de WhatsApp

**Ubicaciones:**
- Hero principal
- Hero de servicios
- Navbar
- Footer
- CTA de servicios
- Post-formulario

**Parámetros:**
```javascript
{
  event: 'whatsapp_click',
  event_category: 'contact',
  event_label: 'WhatsApp - [ubicación]',
  location: 'hero' | 'navbar' | 'footer' | 'hero_service' | 'service_cta' | 'form',
  contact_method: 'whatsapp',
  timestamp: '2024-01-15T10:30:00.000Z'
}
```

---

#### `phone_click`

**Dispara cuando:** Usuario hace click en número de teléfono

**Ubicaciones:**
- Footer

**Parámetros:**
```javascript
{
  event: 'phone_click',
  event_category: 'contact',
  event_label: 'Phone - footer',
  location: 'footer',
  contact_method: 'phone',
  timestamp: '2024-01-15T10:30:00.000Z'
}
```

---

#### `form_submit`

**Dispara cuando:** Usuario envía formulario de contacto

**Ubicaciones:**
- Formulario completo (Form.tsx)
- Formulario simple (SimpleForm.tsx)

**Parámetros:**
```javascript
{
  event: 'form_submit',
  event_category: 'contact',
  event_label: 'Form Submit - [nombre del form]',
  form_name: 'Contact Form' | 'Simple Contact Form',
  form_type: 'quotation' | 'contact',
  event_type: 'Casamiento' | 'Fiesta privada' | etc,
  guests: '50-100' | '100-200' | etc,
  services: 'Carpas, Escenarios, Mesas',
  urgent_event: true | false,
  contact_method: 'form',
  timestamp: '2024-01-15T10:30:00.000Z'
}
```

---

### Eventos de Engagement

#### `scroll_depth`

**Dispara cuando:** Usuario llega al 75% o 90% de la página

**Ubicaciones:**
- Todas las páginas (automático)

**Parámetros:**
```javascript
{
  event: 'scroll_depth',
  event_category: 'engagement',
  event_label: 'Scroll 75%' | 'Scroll 90%',
  scroll_depth: 75 | 90,
  page_path: '/' | '/servicios/carpas' | etc,
  timestamp: '2024-01-15T10:30:00.000Z'
}
```

**Nota:** Solo se dispara UNA vez por sesión por cada umbral (75% y 90%).

---

## 🛠️ Arquitectura Técnica

### Componentes Principales

```
/lib/tracking.ts
├── trackWhatsAppClick(location, label?)
├── trackPhoneClick(location)
├── trackFormSubmit(formData)
├── trackScrollDepth(scrollDepth, pagePath)
├── trackContactWithTime(eventType, location, additionalData?)
└── getTimeOnPage()

/hooks/use-scroll-tracking.tsx
└── useScrollTracking() → Hook para tracking automático de scroll

/components/ScrollTracker.tsx
└── ScrollTracker → Componente que activa el hook (se incluye en layout)

/app/layout.tsx
├── GTM script initialization
├── dataLayer initialization
└── <ScrollTracker /> component
```

### Flujo de Datos

```
Usuario hace click en WhatsApp
        ↓
trackWhatsAppClick('hero')
        ↓
pushToDataLayer('whatsapp_click', {...})
        ↓
window.dataLayer.push({...})
        ↓
Google Tag Manager captura evento
        ↓
Activador: CE - WhatsApp Click
        ↓
Etiqueta: GA4 - WhatsApp Click
        ↓
Google Analytics 4 recibe evento
        ↓
Aparece en GA4 → Informes → Eventos
```

---

## 🧪 Testing y Verificación

### 1. Verificar que los eventos se envían al dataLayer

**Consola del navegador:**

```javascript
// Ver todos los eventos enviados
console.log(window.dataLayer);

// Escuchar eventos en tiempo real
window.dataLayer.push = function() {
  console.log('📊 Evento:', arguments);
  Array.prototype.push.apply(window.dataLayer, arguments);
};
```

**Resultado esperado:**
```javascript
[
  {
    event: 'whatsapp_click',
    event_category: 'contact',
    event_label: 'WhatsApp - hero',
    location: 'hero',
    contact_method: 'whatsapp',
    timestamp: '2024-01-15T10:30:00.000Z'
  }
]
```

---

### 2. Modo Vista Previa de GTM

**GTM → Vista previa**

1. Ingresa la URL de tu sitio
2. Se abrirá el panel de debug
3. Interactúa con botones y formularios
4. Verifica que los eventos aparezcan en el panel

**Eventos a verificar:**
- ✅ `whatsapp_click` → Click en WhatsApp
- ✅ `phone_click` → Click en teléfono
- ✅ `form_submit` → Envío de formulario
- ✅ `scroll_depth` → Scroll al 75% y 90%

---

### 3. Vista en Tiempo Real de GA4

**GA4 → Informes → Tiempo real**

Realiza estas acciones y verifica que aparezcan:

| Acción | Evento esperado | ¿Aparece? |
|--------|----------------|-----------|
| Click WhatsApp (Hero) | `whatsapp_click` | ✅ |
| Click WhatsApp (Navbar) | `whatsapp_click` | ✅ |
| Click teléfono (Footer) | `phone_click` | ✅ |
| Enviar formulario | `form_submit` | ✅ |
| Scroll al 75% | `scroll_75` | ✅ |
| Scroll al 90% | `scroll_90` | ✅ |

---

## 📊 Cómo Ver Tus Métricas

### Semana 1: Verificación Inicial

**GA4 → Informes → Tiempo real**

Verifica que los eventos se estén enviando correctamente.

---

### Semana 2+: Análisis Regular

#### Ver Intentos de Contacto

**GA4 → Informes → Engagement → Eventos**

Busca:
- `whatsapp_click` → Clicks en WhatsApp
- `phone_click` → Clicks en teléfono
- `form_submit` → Formularios enviados

**Suma manual para contactos totales.**

---

#### Ver Tasa de Conversión

**GA4 → Informes → Adquisición → Adquisición de usuarios**

Columnas:
- Usuarios → Visitantes
- Conversiones → Contactos (si marcaste eventos como conversiones)
- Tasa de conversión → Se calcula automáticamente

---

#### Ver Scroll Profundo

**GA4 → Informes → Engagement → Eventos**

Busca:
- `scroll_75` → Usuarios que llegaron al 75%
- `scroll_90` → Usuarios que llegaron al 90%

**Compara con total de usuarios** para calcular porcentaje.

---

#### Ver Conversión por Fuente

**GA4 → Informes → Adquisición → Adquisición de tráfico**

Tabla automática con:
- Fuente / Medio
- Usuarios
- Conversiones
- Tasa de conversión

**Ordena por "Tasa de conversión" para ver los mejores canales.**

---

## 🎯 Plan de Acción Semanal

### Lunes: Revisión de Métricas

```
□ Intentos de contacto de la semana pasada: ___
□ Tasa de conversión: ___%
□ Scroll 75%: ___%
□ Canal con mejor conversión: ___________
□ Canales con < 1%: ___________
```

### Decisiones basadas en datos:

**Si conversión < 1%:**
- [ ] Urgente: Revisar hero y propuesta de valor
- [ ] Agregar testimonios
- [ ] Simplificar CTAs

**Si conversión 3-5%:**
- [ ] Escalar inversión en mejores canales
- [ ] Documentar qué funciona
- [ ] Probar aumentar presupuesto 20%

**Si un canal convierte bien (> 3%):**
- [ ] Aumentar presupuesto en ese canal
- [ ] Duplicar campañas exitosas
- [ ] Probar audiencias similares

---

## 🔥 Pro Tips

### 1. No mires clicks aislados

❌ **Mal:** "Tuve 100 clicks en WhatsApp esta semana"  
✅ **Bien:** "Tuve 100 contactos de 2,500 visitantes = 4% conversión"

**Solo importa:** contactos / visitantes

---

### 2. Conversión por fuente decide todo

No importa cuántos visitantes traiga un canal si no convierte.

**Ejemplo:**
- Canal A: 1,000 visitantes → 10 contactos = 1% ❌
- Canal B: 200 visitantes → 10 contactos = 5% ✅

**Invierte en Canal B** aunque traiga menos visitantes.

---

### 3. Scroll + conversión = diagnóstico completo

Esta combinación te dice EXACTAMENTE dónde está el problema:

| Scroll | Conversión | Problema | Solución |
|--------|-----------|----------|----------|
| Bajo | Baja | Hero no engancha | Mejorar headline y primera impresión |
| Alto | Baja | Oferta no convence | Clarificar beneficios y agregar prueba social |
| Alto | Alta | ¡Todo funciona! | Escalar inversión |

---

### 4. Benchmarks claros

No adivines si vas bien o mal:

- **< 1%** = ❌ Crisis
- **1-3%** = ⚠️ Normal
- **3-5%** = ✅ Funciona
- **> 5%** = 🚀 Excelente

---

### 5. Decisiones rápidas

No esperes 6 meses para actuar:

- **1 semana:** Verificar que eventos funcionen
- **2 semanas:** Identificar canal ganador
- **1 mes:** Redirigir presupuesto a lo que funciona

**Los datos no mienten.**

---

## 🚨 Troubleshooting

### Problema: No veo eventos en GA4

**Solución:**
1. ✅ Verifica en consola: `console.log(window.dataLayer)`
2. ✅ Verifica GTM en modo vista previa
3. ✅ Espera 24-48 horas (GA4 puede tener retrasos iniciales)
4. ✅ Revisa que el ID de medición sea correcto en GTM

---

### Problema: Eventos duplicados

**Solución:**
1. ✅ Verifica que no haya activadores duplicados en GTM
2. ✅ Asegúrate de que GTM esté instalado solo UNA vez
3. ✅ Revisa que no haya doble `onClick` en componentes

---

### Problema: Conversión = 0%

**Solución:**
1. ✅ Marca los eventos como conversiones en GA4
2. ✅ Espera 24 horas después de marcarlos
3. ✅ Verifica que los eventos se estén enviando (GA4 → Tiempo real)

---

## 📞 Soporte

### Logs en Desarrollo

En modo desarrollo (`NODE_ENV=development`), verás logs en consola:

```
📊 GTM Event: whatsapp_click {
  event_category: 'contact',
  event_label: 'WhatsApp - hero',
  location: 'hero',
  ...
}
```

**Útil para debugging** mientras desarrollas.

---

### Documentación Oficial

- [Google Tag Manager](https://support.google.com/tagmanager)
- [Google Analytics 4](https://support.google.com/analytics)
- [GA4 Events](https://support.google.com/analytics/answer/9322688)

---

## ✅ Checklist Completo

### Implementación Técnica
- [x] Sistema de tracking implementado
- [x] Eventos de WhatsApp implementados
- [x] Eventos de phone implementados
- [x] Eventos de formulario implementados
- [x] Scroll tracking implementado
- [x] GTM y dataLayer inicializados

### Configuración GTM (⚙️ Pendiente - 15 min)
- [ ] Variables de dataLayer creadas
- [ ] Activadores creados
- [ ] Etiquetas GA4 creadas
- [ ] Probado en modo vista previa
- [ ] Publicado en GTM

### Configuración GA4 (⚙️ Pendiente - 10 min)
- [ ] Eventos marcados como conversiones
- [ ] Evento `contacto_total` creado
- [ ] Vista en tiempo real verificada

### Análisis (📊 Después de 7 días)
- [ ] Intentos de contacto medidos
- [ ] Tasa de conversión calculada
- [ ] Scroll depth analizado
- [ ] Conversión por fuente revisada
- [ ] Decisiones tomadas basadas en datos

---

## 🎉 Próximos Pasos

1. **Ahora (15 min):** Configurar GTM siguiendo [`GTM_SETUP_RAPIDO.md`](./GTM_SETUP_RAPIDO.md)
2. **Hoy (5 min):** Verificar eventos en modo vista previa
3. **Mañana (5 min):** Verificar eventos en GA4 → Tiempo real
4. **En 7 días:** Revisar primeras métricas
5. **En 30 días:** Optimizar basado en datos

---

**¿Listo para empezar?** 👉 Abre [`GTM_SETUP_RAPIDO.md`](./GTM_SETUP_RAPIDO.md) y configura GTM en 15 minutos.

**Tiempo total de setup:** 30 minutos  
**Impacto:** Visibilidad completa del embudo de conversión  
**Resultado:** Decisiones basadas en datos reales, no intuiciones


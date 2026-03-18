# 🧮 Calculadora de Métricas - Guía de Interpretación

## 🎯 Las 4 Métricas que Definen el Éxito

Esta guía te ayuda a interpretar tus métricas y tomar decisiones basadas en datos.

---

## 1️⃣ INTENTOS DE CONTACTO (La métrica central)

### Fórmula

```
contactos_totales = whatsapp_click + phone_click + form_submit
```

### ¿Qué mide?

**Si la landing genera negocio real.**

Esta es LA métrica que importa. Todo lo demás es secundario.

### Dónde verlo en GA4

**GA4 → Informes → Engagement → Eventos**

Busca estos eventos:
- `whatsapp_click`
- `phone_click`
- `form_submit`

**O busca directamente:** `contacto_total` (si lo creaste)

### Cálculo Manual

Si tienes:
- WhatsApp clicks: 45
- Phone clicks: 12
- Form submits: 28

```
Contactos Totales = 45 + 12 + 28 = 85 contactos
```

### Benchmarks

| Tasa | Interpretación | Acción |
|------|---------------|--------|
| **< 1%** | ❌ Crisis | Tráfico incorrecto O propuesta débil |
| **1-2%** | ⚠️ Por debajo del promedio | Optimizar hero y propuesta |
| **2-3%** | 😐 Normal inicial | Seguir optimizando |
| **3-5%** | ✅ Landing funcionando | Escalar inversión con confianza |
| **> 5%** | 🚀 Excelente | Aprovechar y documentar qué funciona |

### Pregunta que responde

**¿La gente quiere hablar conmigo o no?**

---

## 2️⃣ TASA DE CONVERSIÓN TOTAL

### Fórmula

```
conversion_rate = (contactos_totales / visitantes) × 100
```

### ¿Qué mide?

**Eficiencia de la landing en convertir visitantes a contactos.**

No mires clicks aislados. Solo importa contacto / visita.

### Dónde verlo en GA4

**GA4 → Informes → Adquisición → Adquisición de usuarios**

Verás:
- **Usuarios:** Total de visitantes
- **Conversiones:** Total de contactos (si marcaste los eventos como conversiones)
- **Tasa de conversión:** Se calcula automáticamente

### Cálculo Manual

Si tienes:
- Visitantes: 2,500
- Contactos totales: 85

```
Tasa de Conversión = (85 / 2,500) × 100 = 3.4%
```

**Interpretación:** De cada 100 visitantes, 3.4 contactan.

### Benchmarks por Industria

| Industria | Tasa Normal | Tasa Buena |
|-----------|------------|-----------|
| **Eventos** (tu caso) | 1-3% | 3-5% |
| E-commerce | 2-3% | 4-6% |
| SaaS B2B | 5-7% | 10-15% |
| Lead gen general | 2-5% | 5-10% |

### Esto decide:

**Si el problema es marketing o la landing**

#### Escenario A: Tráfico bajo + Conversión alta (> 3%)

```
Visitantes: 200
Conversiones: 10
Tasa: 5%
```

**Diagnóstico:** ✅ La landing funciona  
**Problema:** Falta tráfico  
**Acción:** Invertir en marketing (Google Ads, SEO, redes sociales)

---

#### Escenario B: Tráfico alto + Conversión baja (< 1%)

```
Visitantes: 5,000
Conversiones: 30
Tasa: 0.6%
```

**Diagnóstico:** ❌ La landing no convence  
**Problema:** Propuesta de valor débil o tráfico incorrecto  
**Acción:** Optimizar landing (hero, beneficios, testimonios)

---

#### Escenario C: Tráfico alto + Conversión alta (> 3%)

```
Visitantes: 5,000
Conversiones: 200
Tasa: 4%
```

**Diagnóstico:** 🚀 Todo funciona  
**Acción:** Escalar inversión, documentar qué funciona

---

## 3️⃣ SCROLL PROFUNDO (75% o 90%)

### Fórmula

```
scroll_75_rate = (usuarios_con_scroll_75 / total_visitantes) × 100
scroll_90_rate = (usuarios_con_scroll_90 / total_visitantes) × 100
```

### ¿Qué mide?

**Si los visitantes llegan a evaluar tu oferta completa.**

No basta con que entren a tu sitio. Necesitas que vean la propuesta.

### Dónde verlo en GA4

**GA4 → Informes → Engagement → Eventos**

Busca:
- `scroll_75`
- `scroll_90`

**Compara con:**
- Total de usuarios en **GA4 → Informes → Realtime** o **Audience**

### Cálculo Manual

Si tienes:
- Visitantes totales: 1,000
- Usuarios que llegaron al 75%: 450
- Usuarios que llegaron al 90%: 220

```
Tasa Scroll 75% = (450 / 1,000) × 100 = 45%
Tasa Scroll 90% = (220 / 1,000) × 100 = 22%
```

### Benchmarks

| Scroll 75% | Interpretación |
|-----------|---------------|
| **< 30%** | ❌ Hero no engancha - la mayoría abandona antes de ver la oferta |
| **30-50%** | ⚠️ Aceptable - hay interés moderado |
| **50-70%** | ✅ Bueno - el contenido es relevante |
| **> 70%** | 🚀 Excelente - el contenido engancha |

### Interpretación Cruzada con Conversión

Esta métrica sirve para **detectar dónde se rompe el interés**.

#### 🔍 Diagnóstico 1: Bajo scroll + Baja conversión

```
Scroll 75%: 25%
Conversión: 1%
```

**Problema:** Hero no engancha  
**Acción:**
- Mejorar headline
- Agregar prueba social arriba
- Optimizar primera imagen
- Clarificar beneficio principal

---

#### 🔍 Diagnóstico 2: Alto scroll + Baja conversión

```
Scroll 75%: 65%
Conversión: 1.2%
```

**Problema:** Ven la oferta pero no convence  
**Acción:**
- Mejorar propuesta de valor
- Agregar más testimonios
- Clarificar precios o proceso
- Mejorar CTAs

---

#### 🔍 Diagnóstico 3: Alto scroll + Alta conversión

```
Scroll 75%: 60%
Conversión: 4%
```

**Diagnóstico:** 🎯 Landing optimizada  
**Acción:** Escalar inversión, duplicar lo que funciona

---

## 4️⃣ CONVERSIÓN POR FUENTE

### Fórmula (por canal)

```
conversion_rate_por_fuente = (conversiones_canal / visitantes_canal) × 100
```

### ¿Qué mide?

**Qué canal trae clientes REALES, no solo visitas.**

Esta métrica define dónde invertir tiempo y dinero.

### Dónde verlo en GA4

**GA4 → Informes → Adquisición → Adquisición de tráfico**

Verás una tabla con:
- **Fuente / Medio**
- **Usuarios**
- **Conversiones**
- **Tasa de conversión**

### Ejemplo de Análisis

| Fuente | Usuarios | Conversiones | Tasa | Costo por Click | Costo por Conv. |
|--------|----------|--------------|------|----------------|----------------|
| **Google Ads** | 800 | 40 | **5%** | $50 | $1,000 |
| **Instagram Ads** | 600 | 30 | **5%** | $30 | $600 |
| **Orgánico (SEO)** | 1,200 | 12 | **1%** | $0 | $0 |
| **Directo** | 400 | 8 | **2%** | $0 | $0 |
| **Facebook Ads** | 500 | 5 | **1%** | $40 | $4,000 |

### Interpretación y Decisiones

#### ✅ Canales Ganadores (Google Ads, Instagram Ads)

**Tasa:** 5%  
**Acción:**
- ✅ **Aumentar presupuesto** gradualmente
- ✅ **Duplicar campañas** que funcionan
- ✅ **Probar audiencias similares**

**ROI claro:** Cada 100 visitantes traen 5 contactos.

---

#### ⚠️ Canales Tibios (Directo, Orgánico)

**Tasa:** 1-2%  
**Acción:**
- ⚠️ **SEO:** Mejorar contenido, keywords, backlinks
- ⚠️ **Directo:** Mejorar branding y remarketing
- ⚠️ **No aumentar inversión** hasta mejorar conversión

**Problema:** Traen tráfico pero no califican bien.

---

#### ❌ Canales Perdedores (Facebook Ads)

**Tasa:** 1%  
**Costo por conversión:** $4,000 (4x más caro que Instagram)

**Acción:**
- ❌ **Pausar campañas**
- 🔄 **Probar otras audiencias** (última oportunidad)
- 🚫 **Si no mejora en 2 semanas:** Eliminar presupuesto

**Problema:** Tráfico incorrecto o audiencia no calificada.

---

### Pregunta Clave

**¿Qué canal trae clientes reales, no visitas?**

**Decisión:** Invierte solo en canales con alta tasa de conversión.

---

## 📊 Dashboard Completo - Ejemplo Real

### Tu landing después de 30 días:

```
📈 MÉTRICAS GENERALES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Visitantes totales:        3,500
Contactos totales:           140
Tasa de conversión:         4.0% ✅

📞 INTENTOS DE CONTACTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WhatsApp clicks:              85
Phone clicks:                 22
Form submits:                 33
─────────────────────────────────
TOTAL:                       140 ✅

📜 SCROLL DEPTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Scroll 75%:                 60% ✅
Scroll 90%:                 35% ✅

🎯 CONVERSIÓN POR FUENTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Google Ads:         5.0% (40 conv.) 🚀
Instagram Ads:      5.0% (30 conv.) 🚀
Directo:            2.0% (8 conv.)  ⚠️
Orgánico:           1.0% (12 conv.) ⚠️
Facebook Ads:       1.0% (5 conv.)  ❌
```

### Decisiones basadas en estos datos:

1. ✅ **Escalar Google e Instagram Ads** → Conversión 5%
2. ⚠️ **Mejorar SEO** → Tráfico alto pero conversión baja
3. ❌ **Pausar Facebook Ads** → No convierte
4. ✅ **Landing funciona** → 4% conversión total
5. ✅ **Contenido engancha** → 60% llega al 75%

---

## 🧮 Calculadora Rápida de ROI

### Caso: Google Ads

```
Inversión mensual:        $2,000
Costo por click (CPC):       $2.50
Clicks generados:             800
Tasa de conversión:            5%
Conversiones (leads):          40
Ticket promedio:         $100,000
Cierre estimado:              20%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cálculo:
40 leads × 20% cierre = 8 eventos
8 eventos × $100,000 = $800,000 ingreso

ROI = ($800,000 - $2,000) / $2,000 × 100
ROI = 39,900% 🚀

Costo por lead: $2,000 / 40 = $50
Costo por cliente: $2,000 / 8 = $250
```

**Decisión:** Aumentar inversión inmediatamente.

---

## 🎯 Plan de Acción por Escenario

### Escenario 1: Todo funciona (> 3% conversión)

✅ Landing optimizada  
✅ Scroll alto (> 50%)  
✅ Conversión por fuente clara

**Acciones:**
1. Escalar inversión en canales ganadores
2. Documentar qué funciona
3. Probar duplicar presupuesto gradualmente
4. Mantener landing sin cambios grandes

---

### Escenario 2: Baja conversión (< 1.5%)

❌ Landing no convence  
⚠️ Scroll variable  
⚠️ Todas las fuentes convierten mal

**Acciones:**
1. **URGENTE:** Optimizar hero y propuesta de valor
2. Agregar más testimonios y prueba social
3. Clarificar beneficios principales
4. Simplificar proceso de contacto
5. Testear headline diferente

---

### Escenario 3: Conversión desigual por fuente

✅ Algunos canales 5%+  
❌ Otros canales < 1%

**Acciones:**
1. Redirigir presupuesto a canales ganadores
2. Pausar canales con < 1% por 2 semanas
3. Analizar demografía de canales ganadores
4. Replicar audiencia en otros canales

---

## 📋 Checklist Semanal de Análisis

Cada lunes revisa:

- [ ] **Intentos de contacto** → ¿Aumentaron respecto a la semana pasada?
- [ ] **Tasa de conversión** → ¿Estás por encima del 2%?
- [ ] **Scroll 75%** → ¿Más del 40% llega?
- [ ] **Canal con mejor conversión** → ¿Aumentaste inversión ahí?
- [ ] **Canales con < 1%** → ¿Los pausaste o mejoraron?

---

## 🔥 Pro Tips

1. **No mires clicks aislados** → Solo importa contactos / visitantes
2. **Conversión por fuente decide todo** → Invierte solo en lo que convierte
3. **Scroll + conversión = diagnóstico completo** → Te dice dónde está el problema
4. **< 1% = crisis** → Cambios urgentes
5. **3-5% = sweet spot** → Escala con confianza

---

## 📞 Cuando Pedir Ayuda

Si después de 30 días tienes:
- **< 1% conversión** y ya optimizaste → Problema de tráfico o posicionamiento
- **< 30% scroll 75%** → Problema de diseño o copy
- **Alta conversión en UN canal solamente** → Oportunidad de escalar

---

**Recuerda:** Los datos no mienten. Toma decisiones basadas en números, no en intuiciones.




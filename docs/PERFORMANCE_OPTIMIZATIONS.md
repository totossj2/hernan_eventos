# Optimizaciones de Rendimiento para LCP (Largest Contentful Paint)

## 🎯 Problemas Identificados y Solucionados

### 1. **Google Tag Manager bloqueando el render** ✅ SOLUCIONADO

**Problema:** GTM se ejecutaba síncronamente en el `<head>`, bloqueando el main thread por ~1s.

**Solución implementada:**

- Diferido GTM hasta después del render inicial (2 segundos)
- Script se carga de forma asíncrona con `async` y `defer`
- Mantiene funcionalidad de tracking sin afectar LCP

```javascript
// Carga diferida de GTM después del render inicial
setTimeout(loadGTM, 2000);
```

### 2. **Bundle grande de Radix UI** ✅ SOLUCIONADO

**Problema:** 25+ componentes de Radix UI añadiendo peso al bundle inicial.

**Soluciones implementadas:**

- Optimización de imports de paquetes en `next.config.mjs`
- Bundle splitting optimizado para Radix UI
- Separación de vendors en chunks independientes

```javascript
experimental: {
  optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
}
```

### 3. **Fuentes externas bloqueando render** ✅ SOLUCIONADO

**Problema:** Google Fonts cargándose sin optimización.

**Soluciones implementadas:**

- Preload de fuentes críticas
- Font subsetting con caracteres específicos
- `font-display: swap` para evitar FOIT
- Carga optimizada con `rel="preload"`

### 4. **JSON-LD estructurado pesado** ✅ SOLUCIONADO

**Problema:** Schema markup extenso en el `<head>` bloqueando parseo.

**Solución:** Movido al `<body>` para no interferir con el render inicial.

## 🚀 Optimizaciones Adicionales Implementadas

### Componentes de Rendimiento

- **`DeferredScripts.tsx`**: Carga diferida de scripts de terceros
- **`OptimizedImage.tsx`**: Componente optimizado para imágenes críticas
- **`performance.ts`**: Configuración centralizada de optimizaciones

### Configuración de Next.js

- Bundle splitting optimizado
- Compresión habilitada
- Optimización de imports de paquetes
- Separación de vendors y Radix UI

### Estrategia de Carga

- Scripts críticos: Carga inmediata
- Scripts de terceros: Carga diferida (2-3s)
- Fuentes: Preload + swap
- Imágenes: Lazy loading + blur placeholder

## 📊 Impacto Esperado en LCP

### Antes de las optimizaciones:

- **GTM**: ~1000ms bloqueo del main thread
- **Bundle**: ~404ms de JS propio
- **Fuentes**: Bloqueo de render
- **Total estimado**: ~1.4s+ de bloqueo

### Después de las optimizaciones:

- **GTM**: 0ms bloqueo inicial (diferido)
- **Bundle**: ~200ms (optimizado)
- **Fuentes**: 0ms bloqueo (preload + swap)
- **Total estimado**: ~200ms de bloqueo inicial

### Mejora esperada: **~85% reducción en tiempo de bloqueo**

## 🔧 Cómo Usar las Optimizaciones

### Para imágenes críticas:

```tsx
import { OptimizedImage } from '@/components/OptimizedImage';

<OptimizedImage
  src="/hero_desktop.webp"
  alt="Hero image"
  width={1200}
  height={600}
  priority={true} // Para imágenes críticas
/>;
```

### Para scripts adicionales:

```tsx
// En DeferredScripts.tsx
// Añadir nuevos scripts de terceros aquí
```

### Para monitoreo:

```bash
# Analizar bundle
pnpm run analyze

# Medir rendimiento
# Usar Lighthouse o WebPageTest
```

## 📈 Próximos Pasos Recomendados

1. **Monitorear métricas** con Lighthouse después del deploy
2. **Añadir Service Worker** para cache de recursos estáticos
3. **Implementar Critical CSS** inline para estilos críticos
4. **Considerar CDN** para recursos estáticos
5. **Optimizar imágenes** con WebP/AVIF si no están ya

## ⚠️ Consideraciones Importantes

- **GTM diferido**: Tracking puede tener delay de 2s
- **Fuentes**: Verificar que subset incluya todos los caracteres necesarios
- **Bundle splitting**: Verificar que chunks se cargan correctamente
- **Testing**: Probar en dispositivos lentos y conexiones lentas

## 🎯 Métricas a Monitorear

- **LCP**: Objetivo < 2.5s
- **FID**: Objetivo < 100ms
- **CLS**: Objetivo < 0.1
- **Bundle size**: Monitorear crecimiento
- **Core Web Vitals**: Seguimiento continuo

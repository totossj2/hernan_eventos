// Performance optimization utilities
export const PERFORMANCE_CONFIG = {
  // Third-party script loading delays (in milliseconds)
  GTM_DELAY: 2000,
  ADDITIONAL_SCRIPTS_DELAY: 3000,

  // Image optimization settings
  IMAGE_QUALITY: {
    CRITICAL: 90,
    NORMAL: 75,
    LOW_PRIORITY: 60,
  },

  // Bundle optimization
  LAZY_LOAD_THRESHOLD: 100, // pixels from viewport

  // Font loading strategy
  FONT_DISPLAY: 'swap',

  // Resource hints
  PRELOAD_PRIORITY: 'high',
  PREFETCH_PRIORITY: 'low',
} as const;

// Critical resources that should be preloaded
export const CRITICAL_RESOURCES = [
  '/hero_desktop.webp',
  '/hero_mobile.webp',
  '/logo.png',
] as const;

// Non-critical resources that can be prefetched
export const PREFETCH_RESOURCES = [
  '/catalogo/carpa.jpg',
  '/catalogo/escenario.jpg',
  '/catalogo/sillasymesas.jpg',
  '/catalogo/vajilla.jpg',
] as const;

'use client';

import { useScrollTracking } from '@/hooks/use-scroll-tracking';

/**
 * Componente que habilita el tracking de scroll en la página
 * Debe agregarse en el layout o página principal
 */
export function ScrollTracker() {
  useScrollTracking();
  return null;
}


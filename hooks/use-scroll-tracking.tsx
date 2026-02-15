'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackScrollDepth } from '@/lib/tracking';

/**
 * Hook para trackear scroll profundo (75% y 90%)
 * 
 * Este hook monitorea el scroll del usuario y envía eventos cuando alcanza:
 * - 75% de la página
 * - 90% de la página
 * 
 * Solo envía cada evento una vez por sesión de página.
 */
export function useScrollTracking() {
  const pathname = usePathname();
  const scrollTracked = useRef({
    75: false,
    90: false,
  });

  useEffect(() => {
    // Reset tracking cuando cambia la ruta
    scrollTracked.current = {
      75: false,
      90: false,
    };

    const handleScroll = () => {
      // Calcular el porcentaje de scroll
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Scroll total posible (excluyendo la altura de la ventana)
      const scrollableHeight = documentHeight - windowHeight;
      
      // Porcentaje actual de scroll
      const scrollPercentage = (scrollTop / scrollableHeight) * 100;

      // Trackear 75%
      if (scrollPercentage >= 75 && !scrollTracked.current[75]) {
        scrollTracked.current[75] = true;
        trackScrollDepth(75, pathname);
      }

      // Trackear 90%
      if (scrollPercentage >= 90 && !scrollTracked.current[90]) {
        scrollTracked.current[90] = true;
        trackScrollDepth(90, pathname);
      }
    };

    // Throttle para optimizar performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Agregar listener
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [pathname]);
}


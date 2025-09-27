'use client';

import { useEffect } from 'react';

export function OptimizedScripts() {
  useEffect(() => {
    // Load non-critical scripts after interaction
    const loadNonCriticalScripts = () => {
      // Load scripts that don't affect LCP after user interaction
      const scripts = [
        // Add any non-critical scripts here
        // Example: Analytics, tracking, etc.
      ];

      scripts.forEach((scriptSrc) => {
        const script = document.createElement('script');
        script.src = scriptSrc;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      });
    };

    // Load scripts after first user interaction
    const events = [
      'mousedown',
      'mousemove',
      'keypress',
      'scroll',
      'touchstart',
    ];
    const loadScripts = () => {
      loadNonCriticalScripts();
      events.forEach((event) => {
        document.removeEventListener(event, loadScripts);
      });
    };

    events.forEach((event) => {
      document.addEventListener(event, loadScripts, { once: true });
    });

    // Fallback: load after 5 seconds if no interaction
    const fallbackTimer = setTimeout(loadNonCriticalScripts, 5000);

    return () => {
      clearTimeout(fallbackTimer);
      events.forEach((event) => {
        document.removeEventListener(event, loadScripts);
      });
    };
  }, []);

  return null;
}

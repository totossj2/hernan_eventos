'use client';

import { useEffect, useRef } from 'react';

export function SmartScriptLoader() {
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;

    // Load scripts only when user scrolls or interacts
    const loadScriptsOnInteraction = () => {
      if (loadedRef.current) return;
      loadedRef.current = true;

      // Load non-critical scripts here
      console.log('Loading non-critical scripts after user interaction');

      // Example: Load analytics, tracking, etc.
      // const script = document.createElement('script');
      // script.src = 'analytics.js';
      // script.async = true;
      // document.head.appendChild(script);
    };

    // Load on scroll
    const handleScroll = () => {
      loadScriptsOnInteraction();
      window.removeEventListener('scroll', handleScroll);
    };

    // Load on any user interaction
    const events = ['mousedown', 'mousemove', 'keypress', 'touchstart'];
    const handleInteraction = () => {
      loadScriptsOnInteraction();
      events.forEach((event) => {
        document.removeEventListener(event, handleInteraction);
      });
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    events.forEach((event) => {
      document.addEventListener(event, handleInteraction, { passive: true });
    });

    // Fallback: load after 10 seconds
    const fallbackTimer = setTimeout(loadScriptsOnInteraction, 10000);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener('scroll', handleScroll);
      events.forEach((event) => {
        document.removeEventListener(event, handleInteraction);
      });
    };
  }, []);

  return null;
}

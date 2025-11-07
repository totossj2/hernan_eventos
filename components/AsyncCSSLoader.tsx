/**
 * AsyncCSSLoaderScript - Script para optimizar la carga de CSS
 *
 * NOTA: Este script está comentado porque puede causar FOUC (Flash of Unstyled Content).
 * La solución principal es usar CSS crítico inline + CSS Chunking en next.config.mjs
 *
 * Si decides usarlo, descomenta y monitorea el FOUC en producción.
 */
export function AsyncCSSLoaderScript() {
  // Por ahora, no hacer nada. El CSS crítico inline + cssChunking es suficiente
  return null;

  /* DESCOMENTAR SOLO SI ES NECESARIO Y NO HAY FOUC
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Solo modificar CSS después del primer paint para evitar FOUC
            function optimizeCSSLoad() {
              var links = document.querySelectorAll('link[rel="stylesheet"][href*="/_next/static/css/"]');
              // El CSS crítico ya está inline, así que podemos cargar el resto de forma diferida
              links.forEach(function(link, index) {
                // Cargar solo después de un pequeño delay para no bloquear
                if (index > 0) { // Mantener el primer CSS (ya crítico)
                  link.media = 'print';
                  link.onload = function() {
                    this.media = 'all';
                  };
                  setTimeout(function() {
                    link.media = 'all';
                  }, 50 * index); // Escalonar la carga
                }
              });
            }
            
            // Ejecutar después del primer paint
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', function() {
                requestAnimationFrame(function() {
                  requestAnimationFrame(optimizeCSSLoad);
                });
              });
            } else {
              requestAnimationFrame(function() {
                requestAnimationFrame(optimizeCSSLoad);
              });
            }
          })();
        `,
      }}
    />
  );
  */
}

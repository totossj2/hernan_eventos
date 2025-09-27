export function ResourceHints() {
  return (
    <>
      {/* Resource hints para optimizar carga */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//wa.me" />

      {/* Preload crítico para LCP */}
      <link
        rel="preload"
        as="image"
        href="/hero_mobile.webp"
        media="(max-width: 767px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/hero_desktop.webp"
        media="(min-width: 768px)"
        fetchPriority="high"
      />

      {/* Preload de fuentes críticas */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap&subset=latin&text=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%81%C3%89%C3%8D%C3%93%C3%9A%C3%B1%C3%91%C3%BC%C3%9C"
        as="style"
      />
    </>
  );
}

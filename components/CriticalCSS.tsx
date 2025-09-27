'use client';

// Minimal Critical CSS for Hero section to improve LCP
export function CriticalCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* Minimal Critical CSS for Hero - Only essential styles */
          .hero-section {
            min-height: 100vh;
            background: #1e40af;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }
          
          .hero-content {
            text-align: center;
            color: white;
            z-index: 2;
            position: relative;
            max-width: 800px;
            padding: 0 1rem;
          }
          
          .hero-title {
            font-size: 3rem;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            font-family: var(--font-inter), system-ui, sans-serif;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
            line-height: 1.6;
            margin-bottom: 2rem;
            opacity: 0.9;
            font-family: var(--font-inter), system-ui, sans-serif;
          }
          
          .hero-cta {
            background: #f59e0b;
            color: white;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            font-weight: 600;
            text-decoration: none;
            display: inline-block;
            font-family: var(--font-inter), system-ui, sans-serif;
          }
          
          /* Responsive - Mobile first */
          @media (max-width: 768px) {
            .hero-title { font-size: 2rem; }
            .hero-subtitle { font-size: 1.125rem; }
          }
          
          /* Loading skeleton for dynamic components */
          .loading-skeleton {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
          }
          
          @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `,
      }}
    />
  );
}

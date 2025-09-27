'use client';

// Critical CSS for Hero section to improve LCP
export function CriticalCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical CSS for Hero section */
          .hero-section {
            min-height: 100vh;
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
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
            font-family: var(--font-inter), sans-serif;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
            line-height: 1.6;
            margin-bottom: 2rem;
            opacity: 0.9;
            font-family: var(--font-inter), sans-serif;
          }
          
          .hero-cta {
            background: #f59e0b;
            color: white;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            font-weight: 600;
            text-decoration: none;
            display: inline-block;
            transition: background-color 0.2s;
            font-family: var(--font-inter), sans-serif;
          }
          
          .hero-cta:hover {
            background: #d97706;
          }
          
          /* Responsive adjustments */
          @media (max-width: 768px) {
            .hero-title {
              font-size: 2rem;
            }
            
            .hero-subtitle {
              font-size: 1.125rem;
            }
          }
        `,
      }}
    />
  );
}

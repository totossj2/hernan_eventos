'use client';

/**
 * CriticalCSS - CSS crítico inline para above-the-fold
 *
 * Incluye estilos esenciales de Tailwind y componentes críticos
 * para evitar render blocking y mejorar LCP.
 */
export function CriticalCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* Tailwind Base Reset - Essential variables */
          *,::before,::after {
            --tw-border-spacing-x: 0;
            --tw-border-spacing-y: 0;
            --tw-translate-x: 0;
            --tw-translate-y: 0;
            --tw-rotate: 0;
            --tw-skew-x: 0;
            --tw-skew-y: 0;
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            --tw-ring-offset-width: 0px;
            --tw-ring-offset-color: #fff;
            --tw-ring-color: rgb(59 130 246/0.5);
            --tw-ring-offset-shadow: 0 0 #0000;
            --tw-ring-shadow: 0 0 #0000;
            --tw-shadow: 0 0 #0000;
            --tw-shadow-colored: 0 0 #0000;
            box-sizing: border-box;
            border-width: 0;
            border-style: solid;
            border-color: #e5e7eb;
          }
          
          ::before,::after {
            --tw-content: '';
          }
          
          html {
            line-height: 1.5;
            -webkit-text-size-adjust: 100%;
            -moz-tab-size: 4;
            tab-size: 4;
            font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
            font-feature-settings: normal;
            font-variation-settings: normal;
            scroll-behavior: smooth;
          }
          
          body {
            margin: 0;
            line-height: inherit;
            font-family: var(--font-inter), system-ui, sans-serif;
          }
          
          /* Critical Hero Styles */
          #hero {
            width: 100%;
            height: 670px;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            overflow: hidden;
          }
          
          @media (min-width: 768px) {
            #hero {
              height: 90vh;
            }
          }
          
          /* Grid utilities for Hero */
          .grid {
            display: grid;
          }
          .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
          .grid-rows-1 {
            grid-template-rows: repeat(1, minmax(0, 1fr));
          }
          .col-start-1 {
            grid-column-start: 1;
          }
          .row-start-1 {
            grid-row-start: 1;
          }
          
          /* Flex utilities */
          .flex {
            display: flex;
          }
          .flex-col {
            flex-direction: column;
          }
          .items-center {
            align-items: center;
          }
          .justify-center {
            justify-content: center;
          }
          .text-center {
            text-align: center;
          }
          
          /* Sizing */
          .w-full {
            width: 100%;
          }
          .h-full {
            height: 100%;
          }
          .max-w-4xl {
            max-width: 56rem;
          }
          .mx-auto {
            margin-left: auto;
            margin-right: auto;
          }
          .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .py-4 {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          
          /* Typography */
          h1 {
            font-size: 1.875rem;
            line-height: 1.25;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: white;
          }
          
          @media (min-width: 768px) {
            h1 {
              font-size: 3.75rem;
            }
          }
          
          .leading-tight {
            line-height: 1.25;
          }
          
          .text-lg {
            font-size: 1.125rem;
            line-height: 1.75rem;
          }
          
          @media (min-width: 768px) {
            .text-lg {
              font-size: 1.5rem;
              line-height: 2rem;
            }
          }
          
          .mb-6 {
            margin-bottom: 1.5rem;
          }
          .mb-8 {
            margin-bottom: 2rem;
          }
          
          /* Colors */
          .text-white {
            color: rgb(255 255 255);
          }
          .text-gray-300 {
            color: rgb(209 213 219);
          }
          .bg-gradient-to-r {
            background-image: linear-gradient(to right, var(--tw-gradient-stops));
          }
          .from-black\/40 {
            --tw-gradient-from: rgb(0 0 0 / 0.4);
            --tw-gradient-to: rgb(0 0 0 / 0);
            --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
          }
          .via-black\/60 {
            --tw-gradient-to: rgb(0 0 0 / 0);
            --tw-gradient-stops: var(--tw-gradient-from), rgb(0 0 0 / 0.6), var(--tw-gradient-to);
          }
          .to-black\/60 {
            --tw-gradient-to: rgb(0 0 0 / 0.6);
          }
          
          /* Object fit */
          .object-cover {
            object-fit: cover;
          }
          .object-center {
            object-position: center;
          }
          
          /* Visibility */
          .hidden {
            display: none;
          }
          
          @media (min-width: 768px) {
            .md\\:block {
              display: block;
            }
            .md\\:hidden {
              display: none;
            }
            .md\\:flex-row {
              flex-direction: row;
            }
            .md\\:text-6xl {
              font-size: 3.75rem;
              line-height: 1;
            }
            .md\\:text-2xl {
              font-size: 1.5rem;
              line-height: 2rem;
            }
          }
          
          /* Button basics */
          button, a.button {
            cursor: pointer;
            border-radius: 0.5rem;
            font-weight: 600;
            transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
          }
          
          /* Gap utilities */
          .gap-2 {
            gap: 0.5rem;
          }
          .gap-3 {
            gap: 0.75rem;
          }
          
          /* Loading skeleton for dynamic components */
          .loading-skeleton, .animate-pulse {
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

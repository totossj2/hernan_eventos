import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Performance optimizations for better LCP
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  // Enable compression
  compress: true,
  // Optimize bundle splitting
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Ultra-aggressive bundle splitting to minimize TBT
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 10000,
        maxSize: 50000,
        minChunks: 1,
        cacheGroups: {
          // Separate React core
          react: {
            test: /[\\/]node_modules[\\/]react[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 30,
          },
          // Separate React-DOM
          reactDom: {
            test: /[\\/]node_modules[\\/]react-dom[\\/]/,
            name: 'react-dom',
            chunks: 'all',
            priority: 25,
          },
          // Separate Next.js core
          nextjs: {
            test: /[\\/]node_modules[\\/]next[\\/]/,
            name: 'nextjs',
            chunks: 'all',
            priority: 20,
          },
          // Separate Radix UI components individually
          radixCore: {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]react-slot[\\/]/,
            name: 'radix-slot',
            chunks: 'all',
            priority: 15,
          },
          radixPrimitives: {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]react-(accordion|alert-dialog|avatar|button|card|dialog|dropdown-menu|form|input|label|popover|select|separator|sheet|switch|tabs|toast|tooltip)[\\/]/,
            name: 'radix-primitives',
            chunks: 'all',
            priority: 12,
          },
          // Separate UI libraries
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            chunks: 'all',
            priority: 10,
          },
          lucideIcons: {
            test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            name: 'lucide-icons',
            chunks: 'all',
            priority: 8,
          },
          // Separate form libraries
          formLibs: {
            test: /[\\/]node_modules[\\/](react-hook-form|@hookform|zod)[\\/]/,
            name: 'form-libs',
            chunks: 'all',
            priority: 6,
          },
          // Default vendor chunk
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 1,
          },
        },
      };
    }
    return config;
  },
};

export default withBundleAnalyzer(nextConfig);

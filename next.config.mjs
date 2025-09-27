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
      // More aggressive bundle splitting to reduce TBT
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 100000,
        cacheGroups: {
          // Separate React and React-DOM
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
          },
          // Separate Next.js
          nextjs: {
            test: /[\\/]node_modules[\\/]next[\\/]/,
            name: 'nextjs',
            chunks: 'all',
            priority: 15,
          },
          // Separate Radix UI components
          radix: {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            name: 'radix-ui',
            chunks: 'all',
            priority: 10,
          },
          // Separate other UI libraries
          ui: {
            test: /[\\/]node_modules[\\/](framer-motion|lucide-react|cmdk)[\\/]/,
            name: 'ui-libs',
            chunks: 'all',
            priority: 8,
          },
          // Default vendor chunk
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 5,
          },
        },
      };
    }
    return config;
  },
};

export default withBundleAnalyzer(nextConfig);

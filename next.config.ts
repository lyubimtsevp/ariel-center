import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Оптимизация изображений
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'taplink.st' },
      { protocol: 'https', hostname: 'mdi-ariel.ru' },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 дней кеш
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  
  // Сжатие
  compress: true,
  
  // Оптимизация сборки
  poweredByHeader: false,
  
  // Оптимизация для production
  productionBrowserSourceMaps: false,
  
  // Experimental оптимизации
  experimental: {
    optimizeCss: true,
  },
  
  // Headers для кеширования
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;

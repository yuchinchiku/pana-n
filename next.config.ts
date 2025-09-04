import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['pn.konety.jp', 'pana-n.jp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pana-n.jp',
        pathname: '/video/**',
      },
    ], // WordPress と自サイトのドメイン
  },
  turbopack: {}, // Turbopack 有効化
};

export default nextConfig;

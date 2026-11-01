import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Tailwind CSS v4 through the Turbopack loader (see @tailwindcss/turbopack in package.json)
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

export default nextConfig;

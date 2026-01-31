import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  output: 'export',
  basePath: '/fitness',
  assetPrefix: '/fitness/',
  distDir: 'docs',
}

export default nextConfig

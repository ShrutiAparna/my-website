import type { NextConfig } from 'next'

// Static export configuration for GitHub Pages.
// NEXT_PUBLIC_BASE_PATH is set automatically by the GitHub Actions workflow
// (.github/workflows/deploy.yml) via actions/configure-pages.
// For local dev/build it defaults to '' (root).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
}

export default nextConfig

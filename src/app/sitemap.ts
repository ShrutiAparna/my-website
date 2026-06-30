import type { MetadataRoute } from 'next'

// Required for static export ("output: export") — sitemap.xml is generated once at build time.
export const dynamic = 'force-static'

// Update this to your deployed site URL (e.g. https://username.github.io or
// https://username.github.io/repo-name) once you know it.
const baseUrl = 'https://shrutiaparna.github.io/my-website'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/research', '/projects', '/publications', '/achievements', '/contact']

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))
}

import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pharmaregistration.com'

  const routes = [
    '/en',
    '/en/services',
    '/en/contact',
    '/en/blog',
    '/ar',
    '/ar/services',
    '/ar/contact',
    '/ar/blog',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '/en' || route === '/ar' ? 1 : 0.8,
  }))
}

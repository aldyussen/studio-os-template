import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

// Stub — add entries for each static route as the project grows.
// Dynamic routes (blog posts, case studies, etc.) are appended here
// by fetching from the CMS and mapping to MetadataRoute.Sitemap entries.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}

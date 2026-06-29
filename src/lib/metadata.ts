import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export interface PageMetadataProps {
  title?: string
  description?: string
  // Relative path used for the canonical URL, e.g. '/about'
  path?: string
  // Overrides the default OG image; must be a path rooted at /public
  image?: string
  noIndex?: boolean
}

export function generatePageMetadata({
  title,
  description,
  path = '/',
  image,
  noIndex = false,
}: PageMetadataProps = {}): Metadata {
  const resolvedDescription = description ?? siteConfig.description
  const ogTitle = title ?? siteConfig.name
  const ogImage = image ?? siteConfig.ogImage
  const canonicalUrl = `${siteConfig.url}${path}`

  return {
    title,
    description: resolvedDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: ogTitle,
      description: resolvedDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [{ url: ogImage }],
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: resolvedDescription,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}

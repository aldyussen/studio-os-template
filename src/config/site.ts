// Central site identity — single source of truth for all SEO, OG, and social metadata.
// Clients fill in their values here; no other file needs to change for a rebrand.
// url reads from NEXT_PUBLIC_SITE_URL set in the Vercel project environment.

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  author: string
  // BCP 47 locale used for Open Graph and lang attributes, e.g. 'en_US', 'fr_FR'
  locale: string
  // Passed to the <meta name="theme-color"> tag via the Viewport export (future milestone)
  themeColor: string
  keywords: string[]
  socials: {
    x: string
    linkedin: string
    instagram: string
    facebook: string
    youtube: string
    tiktok: string
  }
}

export const siteConfig = {
  name: 'Your Company',
  description: 'A brief description of your company and what you do.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com',
  ogImage: '/og.png',
  author: 'Your Company',
  locale: 'en_US',
  themeColor: '#ffffff',
  keywords: [],
  socials: {
    x: '',
    linkedin: '',
    instagram: '',
    facebook: '',
    youtube: '',
    tiktok: '',
  },
} satisfies SiteConfig

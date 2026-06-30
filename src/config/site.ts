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
  name: 'Вадим Innova — интенсив для бьюти-бизнеса',
  description:
    'Первая в Казахстане конференция для бьюти-бизнеса. Как в бьюти-бизнесе выйти на 5–10+ млн чистыми — авторская программа Вадима Innova.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vadim-infobis.vercel.app',
  ogImage: '/og.png',
  author: 'Вадим Innova',
  locale: 'ru_RU',
  themeColor: '#070707',
  keywords: ['Вадим Innova', 'бьюти бизнес', 'интенсив', 'бьюти конференция', 'Казахстан', 'салон красоты'],
  socials: {
    x: '',
    linkedin: '',
    instagram: 'https://www.instagram.com/vadim.innova/',
    facebook: '',
    youtube: '',
    tiktok: '',
  },
} satisfies SiteConfig

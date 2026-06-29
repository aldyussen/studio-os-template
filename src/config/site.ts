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
  name: 'Екатерина Уколова — закрытый тренинг',
  description:
    'Сделать из бизнесмена долларового миллионера. Система из 8 шагов масштабирования для владельцев бизнеса с оборотом от $10 000.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio-os-template.vercel.app',
  ogImage: '/og.png',
  author: 'Екатерина Уколова',
  locale: 'ru_RU',
  themeColor: '#0d0d10',
  keywords: ['Уколова', 'тренинг для бизнеса', 'масштабирование', 'отдел продаж', 'миллионер'],
  socials: {
    x: '',
    linkedin: '',
    instagram: '',
    facebook: '',
    youtube: '',
    tiktok: '',
  },
} satisfies SiteConfig

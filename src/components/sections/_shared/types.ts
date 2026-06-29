export type ButtonVariant = 'default' | 'outline' | 'secondary' | 'ghost' | 'link'
export type ButtonSize = 'default' | 'xs' | 'sm' | 'lg'

export interface Cta {
  label: string
  href: string
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  external?: boolean
}

export interface SectionIntro {
  eyebrow?: string
  title: string
  description?: string
}

export interface MediaItem {
  src: string
  alt: string
  width: number
  height: number
}

export interface Person {
  name: string
  role?: string
  bio?: string
  image?: MediaItem
  socials?: SocialLink[]
}

export interface StatItem {
  value: string
  label: string
  description?: string
}

export interface IconItem {
  icon: string
  title: string
  description?: string
}

export interface LinkItem {
  label: string
  href: string
  external?: boolean
}

export type SocialPlatform =
  | 'x'
  | 'linkedin'
  | 'instagram'
  | 'facebook'
  | 'youtube'
  | 'tiktok'
  | 'github'
  | 'website'

export interface SocialLink {
  platform: SocialPlatform
  href: string
}

// Replace these with the site's actual pages before shipping.
export const NAV_LINKS = [
  { label: 'Page One', href: '/page-one' },
  { label: 'Page Two', href: '/page-two' },
  { label: 'Page Three', href: '/page-three' },
  { label: 'Page Four', href: '/page-four' },
] as const

export type NavLink = (typeof NAV_LINKS)[number]

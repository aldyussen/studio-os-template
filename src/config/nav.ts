export const NAV_LINKS = [
  { label: 'Программа', href: '#program' },
  { label: 'Спикер', href: '#speaker' },
  { label: 'Результаты', href: '#results' },
  { label: 'Оставить заявку', href: '#form' },
] as const

export type NavLink = (typeof NAV_LINKS)[number]

import { Geist, Geist_Mono, Unbounded } from 'next/font/google'

export const fontSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const fontMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

// Display / heading font — wide, heavy, premium. Cyrillic-ready.
export const fontDisplay = Unbounded({
  variable: '--font-heading',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['700', '800', '900'],
})

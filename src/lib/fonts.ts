import { Manrope } from 'next/font/google'

// Единственная гарнитура макета — Manrope (variable, оригинальные woff2 Google Fonts, кириллица).
export const fontSans = Manrope({
  variable: '--font-sans',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

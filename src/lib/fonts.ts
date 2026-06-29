import { Inter, Comfortaa, Geist_Mono } from 'next/font/google'

// Body + headings — Inter matches the Figma source (font family/Font 1). Cyrillic-ready.
export const fontSans = Inter({
  variable: '--font-sans',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const fontMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

// Logotype font — Comfortaa (font family/Font 2 in the Figma file).
export const fontDisplay = Comfortaa({
  variable: '--font-logo',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

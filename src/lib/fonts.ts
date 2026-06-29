import { Geist, Geist_Mono } from 'next/font/google'

// Primary sans-serif for all body text and UI.
// Sets --font-sans on <html> — referenced by @theme inline in globals.css.
// To override per-client: swap Geist for any next/font/google or localFont,
// keeping variable: '--font-sans' so no other file needs to change.
export const fontSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

// Heading font — defaults to the same as fontSans.
// To give a client a distinct display font, add a second next/font export
// with variable: '--font-heading' and apply it alongside fontSans in layout.tsx.
// No other file needs to change; globals.css picks it up via var(--font-heading).
export const fontMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

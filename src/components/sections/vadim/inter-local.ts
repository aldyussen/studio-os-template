import localFont from 'next/font/local'

// Inter (variable) served from /public/fonts — matches Figma "font family/Font 1".
export const interLocal = localFont({
  src: [
    { path: '../../../../public/fonts/inter-latin.woff2', weight: '100 900', style: 'normal' },
    { path: '../../../../public/fonts/inter-cyrillic.woff2', weight: '100 900', style: 'normal' },
  ],
  variable: '--font-inter-local',
  display: 'swap',
})

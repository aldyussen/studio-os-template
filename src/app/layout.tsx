import type { Metadata } from 'next'
import { fontSans, fontMono } from '@/lib/fonts'
import { generatePageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/config/site'
import './globals.css'

// title.template applies to all child pages: "Page Title | Studio"
// All other fields come from generatePageMetadata() so they stay in sync with siteConfig.
export const metadata: Metadata = {
  ...generatePageMetadata(),
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // suppressHydrationWarning prevents React from warning when next-themes
    // (added in M15) injects the 'dark' class before hydration.
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}

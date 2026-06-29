import { SkipLink } from '@/components/layout/SkipLink'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SkipLink />
      <main id="main-content" className="flex flex-1 flex-col">
        {children}
      </main>
    </>
  )
}

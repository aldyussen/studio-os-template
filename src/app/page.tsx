import { LenisProvider } from '@/components/layout/LenisProvider'
import { Hero } from '@/components/sections/Hero'
import { VideoSection } from '@/components/sections/VideoSection'
import { Offer } from '@/components/sections/Offer'
import { Countdown } from '@/components/sections/Countdown'
import { CaseResults } from '@/components/sections/CaseResults'
import { cases, casesExtra } from '@/content/content'
import { MoreResults } from '@/components/sections/MoreResults'
import { Niches } from '@/components/sections/Niches'
import { Stats } from '@/components/sections/Stats'
import { Methodology } from '@/components/sections/Methodology'
import { Bonuses } from '@/components/sections/Bonuses'
import { FormatSection } from '@/components/sections/FormatSection'
import { FinalCta } from '@/components/sections/FinalCta'
import { Footer } from '@/components/sections/Footer'

export default function Page() {
  return (
    <LenisProvider>
      <main>
        <Hero />
        <VideoSection />
        <Offer />
        <Countdown />
        <CaseResults cards={cases} className="py-[73px] md:pt-[72px] md:pb-[18px]" />
        <CaseResults cards={casesExtra} className="pt-[37px] pb-[73px] md:pt-[36px] md:pb-[18px]" />
        <MoreResults />
        <Niches />
        <Stats />
        <Methodology />
        <Bonuses />
        <FormatSection />
        <FinalCta />
      </main>
      <Footer />
    </LenisProvider>
  )
}

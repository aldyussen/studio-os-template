import { Hero } from '@/components/sections/vadim/Hero'
import { Benefits } from '@/components/sections/vadim/Benefits'
import { Audience } from '@/components/sections/vadim/Audience'
import { Program } from '@/components/sections/vadim/Program'
import { Speaker } from '@/components/sections/vadim/Speaker'
import { Results } from '@/components/sections/vadim/Results'
import { Gallery } from '@/components/sections/vadim/Gallery'
import { Marquee } from '@/components/sections/vadim/Marquee'
import { FooterCta } from '@/components/sections/vadim/FooterCta'

export default function VadimPage() {
  return (
    <div id="top" className="scroll-mt-0 bg-[#070707]">
      <Hero />
      <Benefits />
      <Audience />
      <Program />
      <Speaker />
      <Results />
      <Gallery />
      <Marquee />
      <FooterCta />
    </div>
  )
}

import Image from 'next/image'
import { niches } from '@/content/content'
import { Reveal } from '@/components/layout/Reveal'

export function Niches() {
  return (
    <section className="bg-[#f7f7f7] py-[51px] md:py-[114px]">
      <Reveal className="mx-auto flex max-w-[1440px] flex-col items-center px-[13px] md:px-[128px]">
        <h2 className="max-w-[344px] text-center text-[24px] leading-[28px] font-semibold md:max-w-none md:text-[48px] md:leading-[52px]">
          <span className="text-[#bc9b80]">{niches.top.accent1}</span>
          <span className="text-black">{niches.top.mid}</span>
          <span className="text-[#bc9b80]">{niches.top.accent2}</span>
          <span className="text-black">{niches.top.tail}</span>
          <span className="block text-black">{niches.top.line2}</span>
        </h2>
        <div className="mt-[38px] h-[396px] w-full overflow-hidden rounded-[10px] md:mt-[78px] md:h-auto">
          <Image
            src={niches.image.src}
            alt={niches.image.alt}
            width={1184}
            height={665}
            className="size-full object-cover md:h-auto"
          />
        </div>
        <p className="mt-[23px] max-w-[350px] text-center text-[24px] leading-[28px] font-semibold text-black md:mt-[43px] md:max-w-[1000px] md:text-[48px] md:leading-[52px]">
          <span className="text-[#bc9b80]">{niches.bottom.accent}</span>
          {niches.bottom.tail}
        </p>
      </Reveal>
    </section>
  )
}

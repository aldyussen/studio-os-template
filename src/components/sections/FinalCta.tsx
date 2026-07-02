import Image from 'next/image'
import { finalCta, PAYMENT_URL } from '@/content/content'
import { Reveal } from '@/components/layout/Reveal'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#09233b]">
      <Image
        src={finalCta.bg.src}
        alt={finalCta.bg.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(133.2deg, rgb(9,35,59) 0%, rgba(9,35,59,0.41) 23%, rgba(9,35,59,0) 100%)',
        }}
      />
      <Reveal className="relative mx-auto max-w-[1440px] px-[30px] pt-[74px] pb-[282px] md:px-[114px] md:pt-[97px] md:pb-[119px]">
        <h2 className="max-w-[320px] text-[32px] leading-[35.4px] font-extralight text-white md:max-w-[690px] md:text-[55px] md:leading-[73.2px]">
          {finalCta.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <a
          href={PAYMENT_URL}
          className="mt-[26px] flex h-[68px] w-[255px] items-center justify-center bg-[#c7a379] md:mt-[38px] md:h-[96px] md:w-[336px]"
        >
          <span className="text-[18px] leading-[27.9px] font-medium text-white md:text-[21px] md:leading-[32.55px]">
            {finalCta.cta}
          </span>
        </a>
      </Reveal>
    </section>
  )
}

import Image from 'next/image'
import { methodology, PAYMENT_URL } from '@/content/content'
import { Reveal } from '@/components/layout/Reveal'

export function Methodology() {
  return (
    <section className="relative overflow-hidden bg-[#09233b]">
      <Image
        src={methodology.bg.src}
        alt={methodology.bg.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(133.2deg, rgb(9,35,59) 0%, rgba(9,35,59,0.41) 23%, rgba(9,35,59,0.3) 100%)',
        }}
      />
      <Reveal className="relative mx-auto flex max-w-[1440px] flex-col px-[16px] pt-[50px] pb-[46px] md:flex-row md:justify-between md:px-[118px] md:pt-[166px] md:pb-[118px]">
        <div>
          <h2 className="text-center text-[28px] leading-[28px] font-extrabold text-white md:text-left md:text-[45px] md:leading-[53px]">
            {methodology.titleLines.map((line) => (
              <span key={line} className="md:block">
                {line}{' '}
              </span>
            ))}
          </h2>
          <div className="mt-[27px] flex flex-col gap-[27px] px-[7px] md:hidden">
            {methodology.stats.map((s) => (
              <div key={s.value}>
                <p className="text-[40px] leading-[52px] font-bold text-white">{s.value}</p>
                <p className="max-w-[140px] text-[18px] leading-[22px] font-semibold text-white">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <a
            href={PAYMENT_URL}
            className="mt-[43px] flex h-[85px] w-full max-w-[361px] items-center justify-center rounded-[10px] bg-[#bc9b80] shadow-[0px_5px_0px_0px_rgba(156,118,87,0.9)] md:mt-[62px] md:h-[106px] md:max-w-[509px]"
          >
            <span className="text-[14px] leading-[26.35px] font-semibold text-white md:text-[17px]">
              {methodology.cta}
            </span>
          </a>
          <p className="mt-[78px] text-center text-[13px] leading-[20.7px] font-normal text-white/60 uppercase md:hidden">
            {methodology.captionLines.join(' ')}
            <span className="mt-[15px] block">{methodology.hallLine}</span>
          </p>
        </div>

        <div className="hidden md:block md:w-[430px]">
          <div className="grid grid-cols-[220px_1fr] gap-y-[45px]">
            <div>
              <p className="text-[48px] leading-[52px] font-bold text-white">
                {methodology.stats[0].value}
              </p>
              <p className="mt-[8px] text-[20px] leading-[25px] font-semibold text-white">
                {methodology.stats[0].label}
              </p>
            </div>
            <div>
              <p className="text-[48px] leading-[52px] font-bold text-white">
                {methodology.stats[2].value}
              </p>
              <p className="mt-[8px] text-[20px] leading-[25px] font-semibold text-white">
                {methodology.stats[2].label}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-[48px] leading-[52px] font-bold text-white">
                {methodology.stats[1].value}
              </p>
              <p className="mt-[8px] text-[20px] leading-[25px] font-semibold text-white">
                {methodology.stats[1].label}
              </p>
            </div>
          </div>
          <p className="mt-[93px] text-[20px] leading-[26.4px] font-normal text-white/60 uppercase">
            {methodology.captionLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="mt-[30px] block">{methodology.hallLine}</span>
          </p>
        </div>
      </Reveal>
    </section>
  )
}

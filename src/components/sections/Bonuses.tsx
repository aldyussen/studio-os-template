import Image from 'next/image'
import { bonuses } from '@/content/content'
import { Reveal } from '@/components/layout/Reveal'

export function Bonuses() {
  return (
    <section className="bg-[#f7f7f7] pt-[55px] pb-[48px] md:pt-[114px] md:pb-[52px]">
      <Reveal className="mx-auto flex max-w-[1440px] flex-col items-center px-[20px]">
        <h2 className="max-w-[320px] text-center text-[24px] leading-[28px] font-medium text-black md:max-w-none md:text-[45px] md:leading-[52px]">
          {bonuses.heading.before}
          <span className="font-extrabold text-[#c9ac94]">{bonuses.heading.accent}</span>
          {bonuses.heading.after}
        </h2>
        <p className="mt-[26px] flex max-w-[320px] items-start justify-center gap-[10px] text-center text-[16px] leading-[24px] font-bold text-black md:mt-[47px] md:max-w-none md:gap-[13px] md:leading-[22px]">
          <Image
            src={bonuses.checkIcon}
            alt=""
            width={25}
            height={25}
            className="mt-[2px] size-[12px] shrink-0 md:mt-0 md:size-[25px]"
          />
          {bonuses.note}
        </p>
        <div className="mt-[42px] flex flex-col gap-[62px] md:mt-[89px] md:flex-row md:gap-[74px]">
          {bonuses.groups.map((g) => (
            <div key={g.label} className="w-[334px]">
              <div className="mx-auto flex h-[34px] w-[271px] items-center justify-center rounded-[4px] bg-[#bc9b80] md:h-[50px] md:w-full md:max-w-[332px]">
                <span className="text-[13px] leading-[18px] font-extrabold text-white md:text-[16px] md:leading-[21.7px]">
                  {g.label}
                </span>
              </div>
              <div className="relative mt-[24px] h-[420px] md:h-[400px]">
                <Image
                  src={g.backImage}
                  alt={g.alt}
                  width={240}
                  height={g.tallImages ? 342 : 332}
                  className="absolute top-0 left-0 w-[244px] md:w-[240px]"
                />
                <Image
                  src={g.frontImage}
                  alt=""
                  width={240}
                  height={g.tallImages ? 342 : 332}
                  className="absolute top-[25px] left-[84px] w-[244px] md:w-[240px]"
                />
                <span className="absolute top-[300px] left-[158px] flex size-[94px] -rotate-6 items-center justify-center rounded-full bg-[#5a7684] md:top-[292px] md:left-[166px]">
                  <span className="text-[19px] leading-[29.45px] font-semibold text-white">
                    {g.badge}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

import Image from 'next/image'
import { hero } from '@/content/content'

export function Hero() {
  return (
    <header className="bg-[#d7dade] pb-[16px] md:pb-[41px]">
      <div className="relative mx-auto max-w-[1440px]">
        <div className="flex items-start justify-between px-[45px] pt-[10px] md:px-[142px] md:pt-0">
          <div className="flex items-start gap-[12px]">
            <Image
              src={hero.logoSrc}
              alt={hero.logoAlt}
              width={86}
              height={80}
              className="h-[36px] w-[39px] md:h-[80px] md:w-[86px]"
              priority
            />
            <p className="hidden pt-[15px] text-[14px] leading-[20px] font-normal text-black md:block">
              {hero.brandLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
          <p className="absolute top-[11px] left-1/2 w-[240px] -translate-x-1/2 text-center text-[15px] leading-[18px] font-bold text-[#fd0000] md:static md:w-[608px] md:translate-x-0 md:pt-[32px] md:text-right md:text-[20px] md:leading-[31px] md:font-extrabold">
            {hero.audienceNote.join(' ')}
          </p>
        </div>

        <div className="mt-[57px] flex justify-center md:mt-[25px]">
          <span className="flex h-[39px] w-[236px] items-center justify-center gap-[10px] rounded-[30px] bg-[#fc0301] shadow-[0px_0px_10px_5px_rgba(255,255,255,0.3)] md:h-[49px] md:w-[268px]">
            <Image src={hero.badge.icon} alt="" width={20} height={20} />
            <span className="text-[14px] leading-[21.7px] font-bold text-white">
              {hero.badge.label}
            </span>
          </span>
        </div>

        <h1 className="mx-auto mt-[26px] max-w-[336px] text-center text-[24px] leading-[28px] font-extrabold text-black md:mt-[13px] md:max-w-[1187px] md:text-[63px] md:leading-[72px]">
          {hero.titleLines.map((line, i) => (
            <span key={line}>
              {i > 0 && ' '}
              <span className="md:block md:whitespace-nowrap">{line}</span>
            </span>
          ))}
        </h1>

        <p className="mx-auto mt-[8px] max-w-[280px] text-center text-[16px] leading-[22px] font-medium text-black md:mt-[16px] md:max-w-[840px] md:text-[28px] md:leading-[39px]">
          {hero.subtitle}
        </p>

        <div className="mx-auto mt-[25px] flex h-[51px] w-[307px] flex-col justify-center rounded-[10px] bg-white px-[13px] shadow-[2px_2px_0px_0px_rgba(20,20,20,0.2)] md:mt-[22px] md:h-[76px] md:w-[428px] md:px-[11px]">
          <p className="text-[11px] leading-[15px] font-bold text-black md:text-[16px] md:leading-[22px]">
            {hero.soundNote.bold}
          </p>
          <p className="text-[11px] leading-[15px] font-extralight text-black md:text-[16px] md:leading-[22px]">
            {hero.soundNote.light}
          </p>
        </div>
      </div>
    </header>
  )
}

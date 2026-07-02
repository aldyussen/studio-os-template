import Image from 'next/image'
import { offer, PAYMENT_URL } from '@/content/content'
import { Reveal } from '@/components/layout/Reveal'

const payStyles = {
  visa: 'bg-[#bc9b80] shadow-[0px_5px_0px_0px_rgba(156,118,87,0.9)] font-extrabold',
  rf: 'bg-[#5658c4] shadow-[0px_5px_0px_0px_rgba(52,74,85,0.9)] font-extrabold md:bg-[#5a7684] md:font-semibold',
} as const

export function Offer() {
  return (
    <section className="bg-[#d7dade] pb-[47px] md:pb-[64px]">
      <Reveal className="mx-auto max-w-[1440px] px-[14px] md:px-[168px]">
        <div className="flex flex-col items-center gap-[20px] pt-[65px] md:flex-row md:justify-center md:gap-[25px] md:pt-[52px]">
          <span className="order-1 flex h-[39px] w-[236px] items-center justify-center gap-[10px] rounded-[30px] bg-[#fc0301] shadow-[0px_0px_10px_5px_rgba(255,255,255,0.3)] md:order-2 md:h-[49px] md:w-[268px]">
            <Image src={offer.badge.icon} alt="" width={20} height={20} />
            <span className="text-[14px] leading-[21.7px] font-bold text-white">
              {offer.badge.label}
            </span>
          </span>
          <span className="order-2 flex h-[29px] w-[174px] items-center justify-center rounded-[30px] bg-white shadow-[0px_2px_0px_0px_rgba(31,31,31,0.3)] md:order-1 md:h-[43px] md:w-[253px]">
            <span className="text-[12px] leading-[21.7px] font-bold text-black md:text-[14px]">
              {offer.datePill}
            </span>
          </span>
        </div>

        <h2 className="mx-auto mt-[35px] max-w-[320px] text-center text-[20px] leading-[30px] font-extrabold text-black md:mt-[35px] md:max-w-[1105px] md:text-[63px] md:leading-[72px]">
          {offer.title}
        </h2>

        <div className="mt-[38px] flex flex-col items-center gap-[64px] md:flex-row md:items-start md:justify-between md:gap-0">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-center text-[15px] leading-[18px] font-semibold text-black md:text-left md:text-[20px] md:leading-[26px]">
              {offer.limitNote}
            </p>
            <p className="mt-[10px] flex items-baseline gap-[16px] md:mt-[12px] md:gap-[17px]">
              <span className="text-[19px] leading-[28px] font-bold text-[#303030] line-through md:text-[25px] md:leading-[39px] md:text-[#484848]">
                {offer.prices.older}
              </span>
              <span className="text-[23px] leading-[34px] font-semibold text-[#2c2c2c] line-through md:text-[30px] md:leading-[47px] md:text-[#454545]">
                {offer.prices.old}
              </span>
              <span className="text-[37px] leading-[56px] font-semibold text-[#d22e2e] md:text-[58px] md:leading-[90px]">
                {offer.prices.current}
              </span>
            </p>
            <div className="mt-[14px] flex flex-col gap-[10px] md:mt-[27px] md:gap-[13px]">
              {offer.payButtons.map((btn) => (
                <a
                  key={btn.variant}
                  href={PAYMENT_URL}
                  className={`flex h-[70px] w-[296px] items-center justify-center rounded-[10px] px-[20px] text-center text-[12.5px] leading-[17px] tracking-[2px] text-white md:h-[88px] md:w-[501px] md:text-[17px] md:leading-[26.35px] md:tracking-normal ${payStyles[btn.variant]}`}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <p className="text-[20px] leading-[31px] font-extrabold text-black md:text-[23px] md:leading-[36px]">
              {offer.clientsTitle}
            </p>
            <ul className="mt-[16px] grid w-[360px] grid-cols-6 gap-x-[5px] gap-y-[7px] md:mt-[16px] md:w-[540px] md:gap-x-[7px] md:gap-y-[2px]">
              {offer.clientLogos.map((logo) => (
                <li
                  key={logo.src}
                  className="flex size-[55px] items-center justify-center overflow-hidden rounded-full bg-white md:size-[84px]"
                  style={logo.bg ? { backgroundColor: logo.bg } : undefined}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={84}
                    height={84}
                    className="size-full object-cover"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

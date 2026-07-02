import Image from 'next/image'
import { format, offer, PAYMENT_URL } from '@/content/content'
import { Reveal } from '@/components/layout/Reveal'

const payStyles = {
  visa: 'bg-[#bc9b80] shadow-[0px_5px_0px_0px_rgba(156,118,87,0.9)]',
  rf: 'bg-[#5a7684] shadow-[0px_5px_0px_0px_rgba(52,74,85,0.9)]',
} as const

const bulletOrder = ['order-1', 'order-2', 'order-3', 'order-4'] as const

export function FormatSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f7]">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[247px] -left-[66px] w-[527px] md:top-[91px] md:left-auto md:right-[-197px] md:w-[850px]"
      >
        <Image src={format.photo.glow} alt="" width={850} height={848} className="h-auto w-full" />
      </div>
      <div className="pointer-events-none absolute top-[290px] -left-[28px] w-[489px] md:top-[62px] md:left-auto md:right-[-166px] md:w-[788px]">
        <Image
          src={format.photo.src}
          alt={format.photo.alt}
          width={788}
          height={1056}
          className="h-auto w-full"
        />
        <div
          aria-hidden
          className="absolute bottom-0 left-1/2 h-[373px] w-full -translate-x-1/2 bg-gradient-to-t from-[#f7f7f7] to-[#f7f7f7]/0 md:h-[482px] md:w-[468px]"
        />
      </div>

      <Reveal className="relative mx-auto max-w-[1440px] px-[13px] pt-[90px] pb-[60px] md:px-[89px] md:pt-[115px] md:pb-[52px]">
        <h2 className="mx-auto max-w-[330px] text-center text-[20px] leading-[30.4px] font-extrabold text-black md:mx-0 md:max-w-[570px] md:text-left md:text-[24px] md:leading-[37.2px]">
          {format.headline.before}
          <span className="text-[#c7a379]">{format.headline.accent}</span>
          {format.headline.after}
        </h2>

        <p className="mt-[24px] text-center text-[14px] leading-[21.9px] font-bold text-black md:mt-[36px] md:text-left md:text-[20px] md:leading-[26px]">
          {format.limitNote}
        </p>

        <div className="mt-[14px] flex items-baseline justify-center gap-[18px] md:mt-[16px] md:justify-start md:gap-[43px]">
          <span className="text-[19px] leading-[30px] font-extrabold text-[#484848] line-through md:text-[25px] md:leading-[39px]">
            {offer.prices.older}
          </span>
          <span className="text-[23px] leading-[36px] font-extrabold text-[#484848] line-through md:text-[30px] md:leading-[47px]">
            {offer.prices.old}
          </span>
          <span className="text-[40px] leading-[61px] font-extrabold text-[#d22e2e] md:text-[58px] md:leading-[90px]">
            {offer.prices.current}
          </span>
        </div>

        <div className="mt-[300px] flex flex-col gap-[15px] md:mt-[30px] md:gap-[16px]">
          {offer.payButtons.map((btn) => (
            <a
              key={btn.variant}
              href={PAYMENT_URL}
              className={`flex h-[85px] w-full max-w-[361px] items-center justify-center rounded-[10px] px-[20px] text-center text-[14px] leading-[26.35px] font-semibold text-white md:h-[105px] md:max-w-[601px] md:text-[17px] ${payStyles[btn.variant]}`}
            >
              {btn.label}
            </a>
          ))}
        </div>

        <p className="mt-[48px] max-w-[330px] text-center text-[13px] leading-[20.7px] font-extrabold text-black/80 md:absolute md:top-[320px] md:left-[689px] md:mt-0 md:max-w-[340px] md:text-left md:text-[14px] md:leading-[22px]">
          {format.urgencyNote}
        </p>
        <div className="mt-[18px] flex justify-center md:absolute md:top-[424px] md:left-[689px] md:mt-0 md:justify-start">
          <span className="flex h-[35px] w-[171px] items-center justify-center rounded-[30px] bg-white shadow-[0px_2px_0px_0px_rgba(31,31,31,0.3)] md:w-[224px]">
            <span className="text-[11px] leading-[17.05px] font-semibold text-black">
              {format.datePill}
            </span>
          </span>
        </div>

        <h3 className="mt-[70px] text-center text-[24px] leading-[28px] font-bold md:mt-[120px] md:max-w-[610px] md:text-left md:text-[45px] md:leading-[52px]">
          <span className="text-[#c7a379]">{format.formatHeading.accent}</span>
          <span className="text-black">{format.formatHeading.rest}</span>
        </h3>

        <ul className="mt-[42px] flex max-w-[360px] flex-col gap-[29px] md:mt-[62px] md:max-w-[500px] md:gap-[30px]">
          {format.bullets.map((b) => (
            <li
              key={b.text}
              className={`flex items-start gap-[16px] md:order-none ${bulletOrder[b.mobileOrder - 1]}`}
            >
              <Image
                src={bonusCheckIcon}
                alt=""
                width={25}
                height={25}
                className="mt-[1px] size-[20px] shrink-0 md:size-[25px]"
              />
              <span className="text-[15px] leading-[24.4px] font-bold text-black md:text-[16px] md:leading-[22px]">
                {b.text}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}

const bonusCheckIcon = '/images/icon-check.svg'

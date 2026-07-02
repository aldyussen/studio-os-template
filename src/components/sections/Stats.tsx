import { stats } from '@/content/content'
import { Reveal } from '@/components/layout/Reveal'

const orderClass = ['order-1', 'order-2', 'order-3'] as const

export function Stats() {
  return (
    <section className="bg-[#f7f7f7] pt-[55px] pb-[68px] md:pt-[114px] md:pb-[98px]">
      <Reveal className="mx-auto max-w-[1440px] px-[18px] md:px-[108px]">
        <h2 className="mx-auto max-w-[350px] text-center text-[20px] leading-[24.4px] font-medium text-black md:mx-0 md:max-w-none md:text-left md:text-[56px] md:leading-[52px]">
          <span className="font-bold text-[#c9ac94]">{stats.heading.accent}</span>
          {stats.heading.rest}{' '}
          {stats.heading.lines.map((line) => (
            <span key={line} className="md:block">
              {line}{' '}
            </span>
          ))}
        </h2>
        <div className="mt-[45px] flex flex-col gap-[20px] md:mt-[75px] md:flex-row md:gap-[17px]">
          {stats.cards.map((card) => (
            <div
              key={card.value}
              className={`flex w-full flex-col items-center rounded-[10px] bg-[#eeeeee] px-[20px] pt-[22px] pb-[28px] md:order-none md:w-[398px] md:px-[30px] md:pt-[24px] md:pb-[32px] ${orderClass[card.mobileOrder - 1]}`}
            >
              <div className="flex h-[73px] w-full max-w-[317px] items-center justify-center rounded-[5px] bg-gradient-to-t from-[#c9ac94] to-[#dcbda4] md:h-[120px] md:max-w-[313px]">
                <span className="text-[40px] leading-[52px] font-extrabold text-white md:text-[56px]">
                  {card.value}
                </span>
              </div>
              <p className="mt-[24px] max-w-[310px] text-center text-[18px] leading-[27px] font-extrabold text-black md:mt-[34px] md:max-w-[335px] md:text-[20px] md:leading-[22px]">
                {card.label}
              </p>
              <p className="mt-[16px] max-w-[300px] text-center text-[13px] leading-[18px] font-normal text-black md:mt-[24px] md:max-w-[345px] md:text-[20px] md:leading-[20px]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

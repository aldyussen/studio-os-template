import Image from 'next/image'
import type { CaseCard } from '@/content/content'
import { Reveal } from '@/components/layout/Reveal'

export function CaseResults({
  cards,
  className,
}: {
  cards: CaseCard[]
  className: string
}) {
  return (
    <section aria-label="Результаты клиентов" className={`bg-[#d8dade] ${className}`}>
      <Reveal
        stagger="li"
        className="mx-auto max-w-[1440px] px-[24px] md:px-[24px]"
      >
        <ul className="grid grid-cols-1 gap-y-[42px] md:grid-cols-3 md:gap-x-[48px] md:gap-y-[64px]">
          {cards.map((c) => (
            <li key={c.image} className="flex flex-col items-center">
              <Image
                src={c.image}
                alt={c.alt}
                width={432}
                height={285}
                className="h-auto w-full rounded-[20px]"
              />
              <p className="mt-[32px] max-w-[240px] text-center text-[30px] leading-[37px] font-semibold text-black md:mt-[41px] md:max-w-[264px] md:text-[32px] md:leading-[37.44px]">
                {c.boldPrefix ? (
                  <>
                    <span className="font-bold">{c.boldPrefix}</span>
                    {c.title.slice(c.boldPrefix.length)}
                  </>
                ) : (
                  c.title
                )}
              </p>
              {c.subtitle && (
                <p className="mt-[9px] text-center text-[15px] leading-[21px] font-light text-black md:text-[16px] md:leading-[24.8px]">
                  {c.subtitle}
                </p>
              )}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}

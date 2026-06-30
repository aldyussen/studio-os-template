import Image from 'next/image'
import { interLocal } from './inter-local'

const SHADOW =
  '-56px 21px 131px 0px rgba(0,0,0,0.54), -224px 82px 239px 0px rgba(0,0,0,0.47), -505px 185px 250px 0px rgba(0,0,0,0.28)'
const GRADIENT = 'linear-gradient(244.8deg, #ff5a8e 0%, #7f50ea 100%)'
const PHRASE = 'ИНТЕНСИВ ДЛЯ БЬЮТИ БИЗНЕСА  •  '

function Band({ top, rotate }: { top: number; rotate: number }) {
  return (
    <div
      className="absolute flex items-center overflow-hidden"
      style={{ left: -490, top, width: 2900, height: 85, transform: `rotate(${rotate}deg)`, background: GRADIENT, boxShadow: SHADOW }}
    >
      <span className="whitespace-nowrap text-[42px] font-extrabold uppercase leading-none text-white">
        {PHRASE.repeat(12)}
      </span>
    </div>
  )
}

export function Marquee() {
  return (
    <section
      className={`${interLocal.variable} relative w-full overflow-hidden bg-white`}
      style={{ containerType: 'inline-size', aspectRatio: '1920 / 314' }}
    >
      <div
        className="absolute left-0 top-0 h-[314px] w-[1920px] origin-top-left font-[family-name:var(--font-inter-local)]"
        style={{ transform: 'scale(calc(100cqw / 1920px))' }}
      >
        <Image src="/images/section8/bg.jpg" alt="" fill className="object-cover" sizes="1920px" />
        <Band top={57} rotate={4} />
        <Band top={37} rotate={-2} />
      </div>
    </section>
  )
}

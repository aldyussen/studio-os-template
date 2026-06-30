import Image from 'next/image'
import { interLocal } from './inter-local'

const GRID = [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800]

type Stat = {
  card: [number, number] // left, top
  num: { t: string; left: number; top: number; w: number; fs: number }
  label: { lines: string[]; left: number; top: number; w: number; fs: number }
}

const STATS: Stat[] = [
  {
    card: [380, 279],
    num: { t: '15', left: 519, top: 301, w: 79.95, fs: 73.1 },
    label: { lines: ['15 собственных студий', 'в 8 городах Казахстана'], left: 432, top: 424, w: 255, fs: 19.8 },
  },
  {
    card: [780, 259],
    num: { t: '68к', left: 888, top: 281, w: 142.95, fs: 68.7 },
    label: { lines: ['68.000 принятых', 'клиентов'], left: 832, top: 404, w: 255, fs: 19.2 },
  },
  {
    card: [1180, 279],
    num: { t: '1.1', left: 1312, top: 301, w: 95.11, fs: 75 },
    label: { lines: ['1.1 миллиард – выручка в', 'сети'], left: 1232, top: 424, w: 255, fs: 20 },
  },
]

export function Results() {
  return (
    <section
      className={`${interLocal.variable} relative w-full overflow-hidden bg-[#070707]`}
      style={{ containerType: 'inline-size', aspectRatio: '1920 / 649' }}
    >
      <div
        className="absolute left-0 top-0 h-[649px] w-[1920px] origin-top-left font-[family-name:var(--font-inter-local)] text-white"
        style={{ transform: 'scale(calc(100cqw / 1920px))' }}
      >
        <Image src="/images/section6/bg.jpg" alt="" fill className="object-cover" sizes="1920px" />
        {GRID.map((x) => (
          <div key={x} className="absolute top-0 h-[650px] w-px bg-white opacity-5" style={{ left: x }} />
        ))}

        <div className="absolute text-center" style={{ left: 554, top: 92, width: 813 }}>
          <p className="text-[64.7px] font-black uppercase leading-[101px]">Наши результаты</p>
        </div>

        {STATS.map((s) => (
          <div key={s.num.t}>
            <div className="absolute" style={{ left: s.card[0], top: s.card[1], width: 360, height: 250.39 }}>
              <Image src="/images/section6/card.png" alt="" fill className="object-contain" sizes="360px" />
            </div>
            <div className="absolute text-center" style={{ left: s.num.left, top: s.num.top, width: s.num.w }}>
              <p className="font-black uppercase leading-[116px]" style={{ fontSize: s.num.fs }}>
                {s.num.t}
              </p>
            </div>
            <div className="absolute text-center" style={{ left: s.label.left, top: s.label.top, width: s.label.w }}>
              {s.label.lines.map((l) => (
                <p key={l} className="whitespace-nowrap font-extrabold leading-[25px]" style={{ fontSize: s.label.fs }}>
                  {l}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

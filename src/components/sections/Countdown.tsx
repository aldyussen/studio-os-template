'use client'

import { useEffect, useState } from 'react'
import { countdown } from '@/content/content'

function timeLeft(offsetHours: number) {
  const now = Date.now()
  const shifted = new Date(now + offsetHours * 3_600_000)
  const nextMidnight =
    Date.UTC(
      shifted.getUTCFullYear(),
      shifted.getUTCMonth(),
      shifted.getUTCDate() + 1,
    ) - offsetHours * 3_600_000
  const diff = Math.max(0, nextMidnight - now)
  return {
    hours: Math.floor(diff / 3_600_000),
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  }
}

const pad = (n: number) => String(n).padStart(2, '0')

export function Countdown() {
  const [t, setT] = useState<ReturnType<typeof timeLeft> | null>(null)

  useEffect(() => {
    const tick = () => setT(timeLeft(countdown.utcOffsetHours))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const cells = [
    { value: t ? pad(t.hours) : '00', label: countdown.units.hours },
    { value: t ? pad(t.minutes) : '00', label: countdown.units.minutes },
    { value: t ? pad(t.seconds) : '00', label: countdown.units.seconds },
  ]

  return (
    <section className="bg-gradient-to-b from-[#3d3d3d] to-[#242424] py-[121px] md:py-[121px]">
      <h2 className="mx-auto max-w-[280px] text-center text-[30px] leading-[36.9px] font-semibold text-white md:max-w-[1320px] md:text-[64px] md:leading-[63.96px]">
        {countdown.titleLines.join(' ')} <span className="block">{countdown.deadlineLabel}</span>
      </h2>
      <div className="mt-[54px] flex items-stretch justify-center md:mt-[84px]">
        {cells.map((cell, i) => (
          <div key={cell.label} className="flex items-stretch">
            {i > 0 && <span aria-hidden className="mx-[30px] w-px bg-white/20 md:mx-[76px]" />}
            <div className="flex w-[76px] flex-col items-center md:w-[120px]">
              <span className="text-[40px] leading-[46px] font-extrabold text-[#bc9b7f] tabular-nums md:text-[80px] md:leading-[78.72px] md:font-bold">
                {cell.value}
              </span>
              <span className="mt-[6px] text-[14px] leading-[18.6px] font-light text-[#bc9b7f] md:mt-[9px] md:text-[20px] md:leading-[21.7px] md:font-bold">
                {cell.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { interLocal } from './inter-local'

const GRID = [200, 400, 600, 800, 1000, 1200, 1400, 1601, 1801]

const PHOTOS = [
  { src: '/images/section7/photo1.webp', left: -190 },
  { src: '/images/section7/photo2.webp', left: 390 },
  { src: '/images/section7/photo3.webp', left: 970 },
  { src: '/images/section7/photo4.webp', left: 1550 },
]

// TODO: заменить на реальные YouTube ID роликов Вадима
const VIDEOS: { left: number; img: string; play: number; youtubeId: string }[] = [
  { left: 380, img: '/images/section7/video1.webp', play: 620, youtubeId: 'ScMzIvxBSi4' },
  { left: 980, img: '/images/section7/video2.webp', play: 1220, youtubeId: 'ScMzIvxBSi4' },
]

export function Gallery() {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (!activeId) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActiveId(null)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [activeId])

  return (
    <section
      className={`${interLocal.variable} relative w-full overflow-hidden bg-black`}
      style={{ containerType: 'inline-size', aspectRatio: '1920 / 949' }}
    >
      <div
        className="absolute left-0 top-0 h-[949px] w-[1920px] origin-top-left font-[family-name:var(--font-inter-local)] text-white"
        style={{ transform: 'scale(calc(100cqw / 1920px))' }}
      >
        <Image src="/images/section7/bg.jpg" alt="" fill className="object-cover" sizes="1920px" />
        {GRID.map((x) => (
          <div key={x} className="absolute top-0 h-[950px] w-px bg-white opacity-[0.03]" style={{ left: x }} />
        ))}

        {/* heading: КАК [icon] ПРОХОДИТ / ИНТЕНСИВ? */}
        <div className="absolute text-center" style={{ left: 698, top: 111, width: 143.02 }}>
          <p className="text-[64.2px] font-black uppercase leading-[65px]">как</p>
        </div>
        <div className="absolute" style={{ left: 857, top: 129, width: 40, height: 40 }}>
          <Image src="/images/section7/icon.webp" alt="" fill className="object-contain" sizes="40px" />
        </div>
        <div className="absolute text-center" style={{ left: 912, top: 93, width: 377.27 }}>
          <p className="text-[64.9px] font-black uppercase leading-[101px]">проходит</p>
        </div>
        <div className="absolute text-center" style={{ left: 798, top: 158, width: 389.88 }}>
          <p className="text-[62.8px] font-black uppercase leading-[101px]">Интенсив?</p>
        </div>

        {/* video tiles — clickable */}
        {VIDEOS.map((v) => (
          <button
            key={v.left}
            type="button"
            onClick={() => setActiveId(v.youtubeId)}
            aria-label="Смотреть видео"
            className="group absolute cursor-pointer overflow-hidden rounded-[20px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            style={{ left: v.left, top: 311, width: 560, height: 300 }}
          >
            <Image src={v.img} alt="" fill className="object-contain transition duration-300 group-hover:scale-[1.03]" sizes="560px" />
          </button>
        ))}
        {VIDEOS.map((v) => (
          <div key={`play-${v.left}`} className="pointer-events-none absolute" style={{ left: v.play, top: 421, width: 80, height: 80 }}>
            <Image src="/images/section7/play.webp" alt="" fill className="object-contain" sizes="80px" />
          </div>
        ))}

        {/* photo strip */}
        {PHOTOS.map((p) => (
          <div key={p.src} className="absolute" style={{ left: p.left, top: 650, width: 560, height: 300 }}>
            <Image src={p.src} alt="" fill className="object-contain" sizes="560px" />
          </div>
        ))}
      </div>

      {/* video lightbox */}
      {activeId && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Видео"
        >
          <button aria-label="Закрыть" className="absolute inset-0 cursor-default bg-black/80 backdrop-blur-sm" onClick={() => setActiveId(null)} />
          <button
            aria-label="Закрыть"
            onClick={() => setActiveId(null)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full text-2xl text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            ✕
          </button>
          <div className="relative z-0 aspect-video w-full max-w-[960px] overflow-hidden rounded-2xl bg-black shadow-2xl">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0`}
              title="Видео — Как проходит интенсив"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}

import Image from 'next/image'
import { interLocal } from './inter-local'

const GRID = [200, 400, 600, 800, 1000, 1200, 1400, 1601, 1801]

const PHOTOS = [
  { src: '/images/section7/photo1.webp', left: -190 },
  { src: '/images/section7/photo2.webp', left: 390 },
  { src: '/images/section7/photo3.webp', left: 970 },
  { src: '/images/section7/photo4.webp', left: 1550 },
]

export function Gallery() {
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

        {/* video tiles */}
        <div className="absolute" style={{ left: 380, top: 311, width: 560, height: 300 }}>
          <Image src="/images/section7/video1.webp" alt="" fill className="object-contain" sizes="560px" />
        </div>
        <div className="absolute" style={{ left: 980, top: 311, width: 560, height: 300 }}>
          <Image src="/images/section7/video2.webp" alt="" fill className="object-contain" sizes="560px" />
        </div>
        <div className="absolute" style={{ left: 620, top: 421, width: 80, height: 80 }}>
          <Image src="/images/section7/play.webp" alt="" fill className="object-contain" sizes="80px" />
        </div>
        <div className="absolute" style={{ left: 1220, top: 421, width: 80, height: 80 }}>
          <Image src="/images/section7/play.webp" alt="" fill className="object-contain" sizes="80px" />
        </div>

        {/* photo strip */}
        {PHOTOS.map((p) => (
          <div key={p.src} className="absolute" style={{ left: p.left, top: 650, width: 560, height: 300 }}>
            <Image src={p.src} alt="" fill className="object-contain" sizes="560px" />
          </div>
        ))}
      </div>
    </section>
  )
}

import Image from 'next/image'
import { interLocal } from './inter-local'

const GRID_TALL = [160, 360, 560, 760, 960, 1160, 1360, 1560, 1760]
const GRID_SHORT = [199, 399, 599, 799, 999, 1199, 1399, 1599, 1799]

export function Hero() {
  return (
    <section
      className={`${interLocal.variable} relative w-full overflow-hidden bg-[#070707]`}
      style={{ containerType: 'inline-size', aspectRatio: '1920 / 975' }}
    >
      <div
        className="absolute left-0 top-0 h-[975px] w-[1920px] origin-top-left font-[family-name:var(--font-inter-local)] text-white"
        style={{ transform: 'scale(calc(100cqw / 1920px))' }}
      >
        {/* ── background ── */}
        <Image src="/images/section1/bg.webp" alt="" fill priority className="object-cover" sizes="1920px" />

        {/* grid lines (white 5%) */}
        {GRID_TALL.map((x) => (
          <div key={`t${x}`} className="absolute top-0 h-[900px] w-px bg-white opacity-5" style={{ left: x }} />
        ))}
        {GRID_SHORT.map((x) => (
          <div key={`s${x}`} className="absolute h-[74px] w-px bg-white opacity-5" style={{ left: x, top: 901 }} />
        ))}

        {/* speaker portrait */}
        <div className="absolute" style={{ left: 809, top: 20, width: 976, height: 880 }}>
          <Image src="/images/section1/man.webp" alt="Вадим Innova" fill priority className="object-contain object-top" sizes="976px" />
        </div>

        {/* light glow overlay */}
        <div className="absolute opacity-20" style={{ left: 0, top: 0, width: 1920, height: 910 }}>
          <Image src="/images/section1/light.webp" alt="" fill priority className="object-cover" sizes="1920px" />
        </div>

        {/* ── top label row ── */}
        <div className="absolute text-center" style={{ left: 382, top: 55, width: 255 }}>
          <p className="text-[15.6px] font-extrabold leading-[19px]">
            Авторская программа<span className="font-light"> только</span>
          </p>
          <p className="text-[15.6px] font-light leading-[19px]">для бьюти индустрии</p>
        </div>

        <div className="absolute text-center" style={{ left: 832, top: 51, width: 255 }}>
          <p className="text-[20px] font-black uppercase leading-[24px]">интенсив для</p>
          <p className="text-[20px] font-black uppercase leading-[24px]">бьюти-бизнеса</p>
        </div>

        <div className="absolute text-center" style={{ left: 1299, top: 55, width: 222 }}>
          <p className="text-[15.5px] font-extrabold leading-[19px]">
            200+<span className="font-light"> руководителей</span>
          </p>
          <p className="text-[15.5px] font-light leading-[19px]">и мастеров в одном зале</p>
        </div>

        {/* ── headline ── */}
        <div className="absolute" style={{ left: 380, top: 203, width: 733 }}>
          <p className="text-[73.1px] font-black uppercase leading-[66px]">Как в бюти</p>
          <p className="text-[73.1px] font-black uppercase leading-[66px]">бизнесе выйти</p>
          <p className="text-[73.1px] font-black uppercase leading-[66px]">на</p>
          <p className="text-[73.1px] font-black uppercase leading-[66px]">чистыми</p>
        </div>

        {/* gradient "5-10+ млн" */}
        <div className="absolute" style={{ left: 510, top: 338, width: 388, height: 68.41 }}>
          <Image src="/images/section1/price.webp" alt="5–10+ млн" fill className="object-contain" sizes="388px" />
        </div>

        {/* subtitle */}
        <div className="absolute" style={{ left: 380, top: 515, width: 466 }}>
          <p className="text-[17.4px] font-light leading-[25px]">Для руководителей салонов красоты, косметолгов,</p>
          <p className="text-[17.4px] font-light leading-[25px]">клиник и фитнес центров, кто хочет навести порядок</p>
          <p className="text-[17.4px] font-light leading-[25px]">
            и <span className="font-extrabold">выйти на новый уровень в своем бизнесе</span>
          </p>
        </div>

        {/* CTA button background */}
        <div className="group absolute rounded-[10px] shadow-[25px_25px_55px_0px_rgba(0,0,0,0.4)]" style={{ left: 380, top: 640, width: 300, height: 75 }}>
          <Image src="/images/section1/button.webp" alt="" fill className="rounded-[10px] object-cover transition duration-200 group-hover:brightness-110" sizes="300px" />
        </div>
        <a
          href="#top"
          aria-label="Оставить заявку"
          className="absolute z-20 cursor-pointer rounded-[10px] transition-colors duration-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          style={{ left: 380, top: 640, width: 300, height: 75 }}
        />

        {/* decorative tag — sits in front of the button */}
        <div className="absolute" style={{ left: 429, top: 573, width: 338, height: 154.39 }}>
          <Image src="/images/section1/tag203.webp" alt="" fill className="object-contain" sizes="338px" />
        </div>

        {/* CTA label — on top of both */}
        <div className="absolute text-center" style={{ left: 406, top: 667, width: 246 }}>
          <p className="text-[15.9px] font-extrabold leading-[22px] text-white">ОСТАВИТЬ ЗАЯВКУ</p>
        </div>

        {/* ── right cluster ── */}
        <div className="absolute" style={{ left: 1280, top: 515, width: 260, height: 280 }}>
          <Image src="/images/section1/group201205.webp" alt="" fill className="object-contain" sizes="260px" />
        </div>

        <div className="absolute" style={{ left: 1310, top: 634, width: 186 }}>
          <p className="text-[21.7px] font-black uppercase leading-[22px]">первая</p>
          <p className="text-[21.7px] font-black uppercase leading-[22px]">в казахстане</p>
          <p className="text-[21.7px] font-black uppercase leading-[22px]">конференция</p>
          <p className="text-[21.7px] font-black uppercase leading-[22px]">для бьюти-</p>
          <p className="text-[21.7px] font-black uppercase leading-[22px]">бизнеса</p>
        </div>

        <div className="absolute" style={{ left: 1237, top: 546 }}>
          <div className="h-[10px] w-[10px] rounded-full bg-[#ff598e]" />
        </div>
        <div className="absolute" style={{ left: 1237, top: 567, width: 140 }}>
          <p className="text-[17.2px] font-bold leading-[18px] tracking-[0.2px]">Вадим Innova</p>
        </div>
        <div className="absolute" style={{ left: 1237, top: 589, width: 150 }}>
          <p className="text-[13.7px] font-light leading-[20px]">спикер конференции</p>
        </div>
      </div>
    </section>
  )
}

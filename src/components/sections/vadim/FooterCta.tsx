import { interLocal } from './inter-local'
import { CtaButton } from './Cta'

export function FooterCta() {
  return (
    <section
      className={`${interLocal.variable} relative w-full overflow-hidden bg-black`}
      style={{ containerType: 'inline-size', aspectRatio: '1920 / 150' }}
    >
      <div
        className="absolute left-0 top-0 h-[150px] w-[1920px] origin-top-left font-[family-name:var(--font-inter-local)] text-white"
        style={{ transform: 'scale(calc(100cqw / 1920px))' }}
      >
        <div className="absolute text-center" style={{ left: 382, top: 55, width: 255 }}>
          <p className="text-[15.6px] font-extrabold leading-[19px]">
            Авторская программа<span className="font-light"> только</span>
          </p>
          <p className="text-[15.6px] font-light leading-[19px]">для бьюти индустрии</p>
        </div>

        <div className="absolute text-center" style={{ left: 1299, top: 55, width: 222 }}>
          <p className="text-[15.5px] font-extrabold leading-[19px]">
            200+<span className="font-light"> руководителей</span>
          </p>
          <p className="text-[15.5px] font-light leading-[19px]">и мастеров в одном зале</p>
        </div>

        <CtaButton left={810} top={37} />
      </div>
    </section>
  )
}

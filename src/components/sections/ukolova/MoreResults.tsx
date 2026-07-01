'use client'

import { interLocal } from '../vadim/inter-local'
import { useLeadModal } from '../vadim/LeadModal'

export function MoreResults() {
  const { open } = useLeadModal()

  return (
    <section
      className={`${interLocal.variable} relative w-full overflow-hidden bg-alabaster`}
      style={{ containerType: 'inline-size', aspectRatio: '1920 / 140' }}
    >
      <div
        className="absolute left-0 top-0 h-[140px] w-[1920px] origin-top-left font-[family-name:var(--font-inter-local)]"
        style={{ transform: 'scale(calc(100cqw / 1920px))' }}
      >
        <div className="flex h-full flex-col pb-[60px]">
          <div className="flex justify-center px-[20px]">
            <button
              type="button"
              onClick={open}
              className="group flex items-center justify-center gap-3 overflow-hidden rounded-[14px] bg-gradient-to-b from-[#d0b491] to-[#b8946f] px-[80px] py-[21.8px] shadow-[0px_10px_30px_-6px_rgba(156,118,87,0.6)] transition-all duration-300 hover:from-[#d8bd9b] hover:to-[#bf9b75] hover:shadow-[0px_16px_40px_-6px_rgba(156,118,87,0.8)] active:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <span className="text-[24.4px] font-bold leading-[36.4px] text-white">Показать еще результаты моих клиентов</span>
              <span className="text-[24px] transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

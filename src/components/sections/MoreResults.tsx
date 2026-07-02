import { moreResultsLabel } from '@/content/content'

export function MoreResults() {
  return (
    <section className="bg-[#d8dade] px-[24px] pt-[73px] pb-[73px] md:pt-[72px] md:pb-[72px]">
      <button
        type="button"
        className="relative mx-auto flex min-h-[172px] w-full max-w-[341px] items-center justify-center overflow-hidden bg-[#bc9b80] px-[30px] text-center text-[30px] leading-[37px] font-bold text-white md:min-h-[96px] md:max-w-[855px] md:text-[32px] md:leading-[36.4px]"
      >
        <span
          aria-hidden
          className="absolute top-0 bottom-0 left-0 w-[120px] -skew-x-45 bg-gradient-to-r from-white/10 to-white/40"
        />
        {moreResultsLabel}
      </button>
    </section>
  )
}

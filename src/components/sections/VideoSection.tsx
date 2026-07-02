import { video } from '@/content/content'

export function VideoSection() {
  return (
    <section aria-label={video.posterAlt} className="bg-[#d8dade] px-[12px] pb-[36px] md:px-0">
      <div className="mx-auto h-[731px] w-full overflow-hidden rounded-[20px] bg-black md:h-[720px] md:w-[432px]">
        {video.videoUrl ? (
          <iframe
            src={video.videoUrl}
            title={video.posterAlt}
            className="size-full border-0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <div
            aria-hidden
            className="flex size-full items-center justify-center"
            data-placeholder="video"
          >
            <span className="block size-[56px] rounded-full border border-white" />
          </div>
        )}
      </div>
    </section>
  )
}

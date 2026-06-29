import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { MediaItem } from './types'

export type AspectRatio = '16/9' | '4/3' | '3/2' | '1/1' | '9/16'

const ratioClasses: Record<AspectRatio, string> = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '3/2': 'aspect-[3/2]',
  '1/1': 'aspect-square',
  '9/16': 'aspect-[9/16]',
}

interface MediaFrameProps {
  media: MediaItem
  ratio?: AspectRatio
  rounded?: boolean
  priority?: boolean
  className?: string
}

export function MediaFrame({
  media,
  ratio = '16/9',
  rounded = true,
  priority = false,
  className,
}: MediaFrameProps) {
  return (
    <figure
      className={cn(
        'relative overflow-hidden',
        ratioClasses[ratio],
        rounded && 'rounded-xl',
        className,
      )}
    >
      <Image
        src={media.src}
        alt={media.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        className="object-cover"
      />
    </figure>
  )
}

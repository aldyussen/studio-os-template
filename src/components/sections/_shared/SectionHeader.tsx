import { cn } from '@/lib/utils'
import { SectionEyebrow } from './SectionEyebrow'
import { SectionTitle, type SectionTitleAs, type SectionTitleSize } from './SectionTitle'
import { SectionDescription } from './SectionDescription'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  eyebrowVariant?: 'plain' | 'pill'
  as?: SectionTitleAs
  titleSize?: SectionTitleSize
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  eyebrowVariant = 'plain',
  as,
  titleSize,
  className,
}: SectionHeaderProps) {
  const isCentered = align === 'center'

  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        isCentered ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <SectionEyebrow variant={eyebrowVariant}>{eyebrow}</SectionEyebrow>
      )}
      <SectionTitle as={as} size={titleSize}>
        {title}
      </SectionTitle>
      {description && (
        <SectionDescription>{description}</SectionDescription>
      )}
    </div>
  )
}

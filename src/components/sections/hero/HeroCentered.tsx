import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionEyebrow } from '@/components/sections/_shared/SectionEyebrow'
import { SectionTitle } from '@/components/sections/_shared/SectionTitle'
import { SectionDescription } from '@/components/sections/_shared/SectionDescription'
import { ButtonGroup } from '@/components/sections/_shared/ButtonGroup'
import { MediaFrame } from '@/components/sections/_shared/MediaFrame'
import { cn } from '@/lib/utils'
import type { Cta, MediaItem } from '@/components/sections/_shared/types'

interface HeroCenteredProps {
  eyebrow?: string
  eyebrowVariant?: 'plain' | 'pill'
  title: string
  description?: string
  primary: Cta
  secondary?: Cta
  media?: MediaItem
  mediaRatio?: '1/1' | '3/2' | '4/3' | '16/9'
  align?: 'left' | 'center'
  className?: string
}

export function HeroCentered({
  eyebrow,
  eyebrowVariant = 'plain',
  title,
  description,
  primary,
  secondary,
  media,
  mediaRatio = '3/2',
  align = 'left',
  className,
}: HeroCenteredProps) {
  const isCentered = align === 'center'
  const hasMedia = !!media

  return (
    <Section className={cn('overflow-hidden', className)}>
      <Container size="xl">
        <div
          className={cn(
            'flex flex-col gap-12',
            hasMedia && !isCentered && 'lg:flex-row lg:items-center lg:gap-16',
          )}
        >
          {/* Content */}
          <div
            className={cn(
              'flex flex-col gap-6',
              isCentered ? 'items-center text-center' : 'items-start text-left',
              hasMedia && !isCentered && 'lg:flex-1',
            )}
          >
            {eyebrow && (
              <SectionEyebrow variant={eyebrowVariant}>{eyebrow}</SectionEyebrow>
            )}
            <SectionTitle as="h1" size="xl">
              {title}
            </SectionTitle>
            {description && (
              <SectionDescription>{description}</SectionDescription>
            )}
            <ButtonGroup
              primary={primary}
              secondary={secondary}
              align={isCentered ? 'center' : 'left'}
              className="mt-2"
            />
          </div>

          {/* Media */}
          {hasMedia && (
            <div
              className={cn(
                'w-full',
                !isCentered && 'lg:flex-1',
                isCentered && 'mx-auto max-w-2xl',
              )}
            >
              <MediaFrame
                media={media}
                ratio={mediaRatio}
                priority
              />
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}

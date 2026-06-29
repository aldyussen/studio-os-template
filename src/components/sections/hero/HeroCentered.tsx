import Image from 'next/image'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionEyebrow } from '@/components/sections/_shared/SectionEyebrow'
import { ButtonGroup } from '@/components/sections/_shared/ButtonGroup'
import { cn } from '@/lib/utils'
import type { Cta, MediaItem } from '@/components/sections/_shared/types'

interface HeroCenteredProps {
  eyebrow?: string
  eyebrowVariant?: 'plain' | 'pill'
  title: React.ReactNode
  description?: React.ReactNode
  primary: Cta
  secondary?: Cta
  media?: MediaItem
  align?: 'left' | 'center'
  variant?: 'default' | 'glow'
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
  align = 'left',
  variant = 'default',
  className,
}: HeroCenteredProps) {
  const isCentered = align === 'center'
  const hasMedia = !!media

  return (
    <Section
      className={cn(
        'relative min-h-[80vh] overflow-hidden',
        !isCentered && hasMedia && 'py-0',
        className,
      )}
    >
      {/* Gradient glow overlay */}
      {variant === 'glow' && (
        <>
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(ellipse 65% 60% at 15% 95%, oklch(0.40 0.22 305 / 0.80) 0%, transparent 55%)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(ellipse 50% 50% at 80% 10%, oklch(0.35 0.15 320 / 0.40) 0%, transparent 50%)',
            }}
          />
        </>
      )}

      <Container size="xl" className={cn(!isCentered && hasMedia && 'h-full')}>
        <div
          className={cn(
            'flex flex-col gap-10',
            hasMedia && !isCentered
              ? 'lg:grid lg:min-h-[80vh] lg:grid-cols-[55%_45%] lg:items-center lg:gap-0 lg:py-0'
              : 'py-16 sm:py-24',
            isCentered && 'items-center text-center',
          )}
        >
          {/* Content column */}
          <div
            className={cn(
              'flex flex-col gap-6',
              isCentered ? 'items-center' : 'items-start',
              hasMedia && !isCentered && 'py-16 sm:py-24 lg:pr-12',
            )}
          >
            {eyebrow && (
              <SectionEyebrow variant={eyebrowVariant}>{eyebrow}</SectionEyebrow>
            )}

            <h1
              className={cn(
                'text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl',
                isCentered && 'mx-auto',
              )}
            >
              {title}
            </h1>

            {description && (
              <p className="max-w-lg text-base text-muted-foreground sm:text-lg">
                {description}
              </p>
            )}

            <ButtonGroup
              primary={{ ...primary, size: primary.size ?? 'lg' }}
              secondary={secondary ? { ...secondary, size: secondary.size ?? 'lg' } : undefined}
              align={isCentered ? 'center' : 'left'}
              className="mt-2"
            />
          </div>

          {/* Media column */}
          {hasMedia && (
            <div
              className={cn(
                'relative w-full',
                !isCentered && 'lg:h-full lg:self-stretch',
                isCentered && 'mx-auto max-w-2xl',
              )}
            >
              <div
                className={cn(
                  'relative overflow-hidden rounded-xl',
                  !isCentered
                    ? 'aspect-[3/4] lg:absolute lg:inset-0 lg:rounded-none'
                    : 'aspect-[4/3]',
                )}
              >
                <Image
                  src={media.src}
                  alt={media.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className={cn(
                    'object-cover',
                    !isCentered && 'object-top lg:object-center',
                  )}
                />
                {/* Left fade for text readability on desktop */}
                {!isCentered && (
                  <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-background via-background/10 to-transparent lg:block" />
                )}
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}

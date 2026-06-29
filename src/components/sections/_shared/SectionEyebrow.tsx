import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

interface SectionEyebrowProps {
  children: React.ReactNode
  variant?: 'plain' | 'pill'
  className?: string
}

export function SectionEyebrow({
  children,
  variant = 'plain',
  className,
}: SectionEyebrowProps) {
  if (variant === 'pill') {
    return (
      <Badge
        variant="secondary"
        className={cn('text-xs font-semibold uppercase tracking-widest', className)}
      >
        {children}
      </Badge>
    )
  }

  return (
    <p
      className={cn(
        'text-xs font-semibold uppercase tracking-widest text-muted-foreground',
        className,
      )}
    >
      {children}
    </p>
  )
}

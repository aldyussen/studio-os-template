import { cn } from '@/lib/utils'
import type { StatItem } from './types'

interface StatProps extends StatItem {
  className?: string
}

export function Stat({ value, label, description, className }: StatProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <span className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {value}
      </span>
      <span className="text-sm font-medium text-foreground">{label}</span>
      {description && (
        <span className="text-sm text-muted-foreground">{description}</span>
      )}
    </div>
  )
}

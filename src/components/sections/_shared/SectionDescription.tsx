import { cn } from '@/lib/utils'

interface SectionDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function SectionDescription({ children, className }: SectionDescriptionProps) {
  return (
    <p className={cn('max-w-2xl text-base text-muted-foreground sm:text-lg', className)}>
      {children}
    </p>
  )
}

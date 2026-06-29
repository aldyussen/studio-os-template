import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  as?: React.ElementType
  className?: string
}

export function Section({ children, as: Tag = 'section', className }: SectionProps) {
  return (
    <Tag className={cn('py-16 sm:py-24', className)}>
      {children}
    </Tag>
  )
}

import { cn } from '@/lib/utils'

export type SectionTitleAs = 'h1' | 'h2' | 'h3' | 'h4'
export type SectionTitleSize = 'sm' | 'md' | 'lg' | 'xl'

const sizeClasses: Record<SectionTitleSize, string> = {
  sm: 'text-xl font-semibold tracking-tight sm:text-2xl',
  md: 'text-2xl font-bold tracking-tight sm:text-3xl',
  lg: 'text-3xl font-bold tracking-tight sm:text-4xl',
  xl: 'text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl',
}

interface SectionTitleProps {
  children: React.ReactNode
  as?: SectionTitleAs
  size?: SectionTitleSize
  className?: string
}

export function SectionTitle({
  children,
  as: Tag = 'h2',
  size = 'lg',
  className,
}: SectionTitleProps) {
  return <Tag className={cn(sizeClasses[size], className)}>{children}</Tag>
}

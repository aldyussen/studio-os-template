import { cn } from '@/lib/utils'

const sizeClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
  '2xl': 'max-w-7xl',
  full: 'max-w-none',
} as const

interface ContainerProps {
  children: React.ReactNode
  size?: keyof typeof sizeClasses
  as?: React.ElementType
  className?: string
}

export function Container({
  children,
  size = '2xl',
  as: Tag = 'div',
  className,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </Tag>
  )
}

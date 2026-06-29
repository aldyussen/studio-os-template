import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import type { Cta } from './types'

interface ButtonGroupProps {
  primary: Cta
  secondary?: Cta
  align?: 'left' | 'center'
  className?: string
}

function renderButton(cta: Cta) {
  const { label, href, variant = 'default', size = 'default', className, external } = cta

  if (external) {
    return (
      <Button
        key={href}
        variant={variant}
        size={size}
        className={className}
        render={<a href={href} target="_blank" rel="noopener noreferrer" />}
      >
        {label}
      </Button>
    )
  }

  return (
    <Button
      key={href}
      variant={variant}
      size={size}
      className={className}
      render={<Link href={href} />}
    >
      {label}
    </Button>
  )
}

export function ButtonGroup({ primary, secondary, align = 'left', className }: ButtonGroupProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 sm:flex-row',
        align === 'center' ? 'justify-center' : 'justify-start',
        className,
      )}
    >
      {renderButton(primary)}
      {secondary && renderButton(secondary)}
    </div>
  )
}

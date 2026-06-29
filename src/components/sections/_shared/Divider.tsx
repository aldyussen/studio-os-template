import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

interface DividerProps {
  className?: string
}

export function Divider({ className }: DividerProps) {
  return <Separator className={cn('my-12 sm:my-16', className)} />
}

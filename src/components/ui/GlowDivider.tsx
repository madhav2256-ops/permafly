import { cn } from '@/lib/utils'

interface GlowDividerProps {
  className?: string
}

export function GlowDivider({ className }: GlowDividerProps) {
  return <hr className={cn('glow-divider', className)} />
}

import { useState, useEffect, useRef, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  label: string
}

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const durationMs = duration * 1000

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [end, duration, start])

  return count
}

export function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2.5, label }: AnimatedCounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const count = useCountUp(end, duration, inView)

  return (
    <div ref={ref} className="text-center">
      <div className="text-[clamp(1.75rem,4vw,4rem)] font-bold text-[var(--color-text-primary)] leading-none tracking-tight">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-sm uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
        {label}
      </div>
    </div>
  )
}

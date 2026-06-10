import { motion } from 'framer-motion'
import { Star, Users, Award, Zap } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'

/* ── Animated counter hook ─────────────────────────────── */
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

/* ── Stat card data ────────────────────────────────────── */
const stats = [
  {
    end: 1000,
    suffix: '+',
    label: 'Athletes Trained',
    sublabel: 'All ages & levels',
    icon: Users,
    accentColor: 'from-orange-500 to-red-500',
    glowColor: 'rgba(255, 87, 34, 0.15)',
  },
  {
    end: 4.9,
    suffix: '★',
    label: 'Google Rating',
    sublabel: '921 reviews',
    icon: Star,
    accentColor: 'from-yellow-400 to-orange-500',
    glowColor: 'rgba(250, 204, 21, 0.15)',
    isDecimal: true,
  },
  {
    end: 8,
    suffix: '',
    label: 'Disciplines',
    sublabel: 'Zero machines',
    icon: Award,
    accentColor: 'from-cyan-400 to-blue-500',
    glowColor: 'rgba(34, 211, 238, 0.12)',
  },
  {
    end: 6,
    suffix: '+',
    label: 'Years Strong',
    sublabel: 'Since 2018',
    icon: Zap,
    accentColor: 'from-green-400 to-emerald-500',
    glowColor: 'rgba(52, 211, 153, 0.12)',
  },
]

/* ── Individual stat card ──────────────────────────────── */
function StatCard({ stat, index }: { stat: typeof stats[number]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const count = useCountUp(stat.isDecimal ? 49 : stat.end, 2.2, inView)
  const displayCount = stat.isDecimal
    ? (count / 10).toFixed(1)
    : count.toLocaleString()

  const Icon = stat.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Vertical orange glow strip next to the metric */}
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-[2px] h-10 bg-[var(--color-accent)] blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div
        className="relative overflow-hidden rounded-[var(--radius-lg)] transition-all duration-300 h-full"
        style={{ padding: 'clamp(0.5rem, 2vw, 1.25rem)' }}
      >
        {/* Subtle glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[var(--radius-lg)]"
          style={{ background: `radial-gradient(circle at 10% 50%, ${stat.glowColor}, transparent 70%)` }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-start gap-4">
          {/* Icon */}
          <div
            className="shrink-0 flex items-center justify-center rounded-[var(--radius-md)] text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300"
            style={{
              width: 'clamp(2rem, 4vw, 2.5rem)',
              height: 'clamp(2rem, 4vw, 2.5rem)',
              background: `var(--color-accent-glow)`,
            }}
          >
            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>

          {/* Number + label */}
          <div className="min-w-0">
            <div
              className="font-extrabold text-[var(--color-text-primary)] leading-none tracking-tight group-hover:text-[var(--color-accent)] transition-colors duration-300"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            >
              {displayCount}{stat.suffix}
            </div>
            <div
              className="font-semibold text-[var(--color-text-primary)] mt-1.5 leading-tight"
              style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)' }}
            >
              {stat.label}
            </div>
            <div
              className="text-[var(--color-text-muted)] leading-tight mt-0.5"
              style={{ fontSize: 'clamp(0.65rem, 1vw, 0.8rem)' }}
            >
              {stat.sublabel}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Google review badge (mobile) ──────────────────────── */
function GoogleReviewBadge() {
  return (
    <div className="flex items-center gap-2 justify-center">
      {/* Google "G" logo */}
      <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      <div className="flex gap-0.5">
        {[1,2,3,4,5].map(i => (
          <Star key={i} size={10} className={i <= 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-400/70 text-yellow-400/70'} />
        ))}
      </div>
      <span className="text-[0.65rem] text-[var(--color-text-muted)]">921 reviews</span>
    </div>
  )
}

/* ── Main section ──────────────────────────────────────── */
export function StatsStrip() {
  return (
    <section
      style={{ paddingBlock: 'clamp(0.5rem, 3vw, 2.5rem)' }}
      className="bg-[#0c0c0c] border-t border-[var(--color-accent)]/15 border-b border-white/5 relative overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[var(--color-accent)] opacity-[0.03] blur-[100px] rounded-full" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 'clamp(0.625rem, 2vw, 1.5rem)' }}>
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Google review trust badge — shows on mobile below the grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 lg:hidden"
        >
          <GoogleReviewBadge />
        </motion.div>
      </div>
    </section>
  )
}

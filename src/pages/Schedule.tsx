import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Clock, User, Moon } from 'lucide-react'
import { SEO } from '@/lib/seo'
import { PageTransition } from '@/components/layout/PageTransition'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { schedule } from '@/data/schedule'
import { cn } from '@/lib/utils'

const DISCIPLINE_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  yoga:        { bg: 'bg-purple-500/10',   text: 'text-purple-400',  dot: 'bg-purple-400'  },
  gymnastics:  { bg: 'bg-blue-500/10',     text: 'text-blue-400',    dot: 'bg-blue-400'    },
  parkour:     { bg: 'bg-orange-500/10',   text: 'text-orange-400',  dot: 'bg-orange-400'  },
  calisthenics:{ bg: 'bg-green-500/10',    text: 'text-green-400',   dot: 'bg-green-400'   },
  functional:  { bg: 'bg-yellow-500/10',   text: 'text-yellow-400',  dot: 'bg-yellow-400'  },
  movement:    { bg: 'bg-cyan-500/10',     text: 'text-cyan-400',    dot: 'bg-cyan-400'    },
  'free-weights':{ bg: 'bg-red-500/10',    text: 'text-red-400',     dot: 'bg-red-400'     },
  mma:         { bg: 'bg-rose-500/10',     text: 'text-rose-400',    dot: 'bg-rose-400'    },
}

const DAYS_WITH_SLOTS = schedule.filter(d => d.day !== 'Sunday')
const ALL_DAYS = schedule

export default function Schedule() {
  const todayIndex = (() => {
    const jsDay = new Date().getDay() // 0=Sun, 1=Mon…6=Sat
    if (jsDay === 0) return 0 // Sunday → show Monday
    return jsDay - 1 // Mon=0 … Sat=5
  })()

  const [activeIndex, setActiveIndex] = useState(todayIndex)
  const [direction, setDirection] = useState<1 | -1>(1)

  const activeDayData = DAYS_WITH_SLOTS[activeIndex]

  const goTo = (idx: number) => {
    if (idx === activeIndex) return
    setDirection(idx > activeIndex ? 1 : -1)
    setActiveIndex(idx)
  }

  const prev = () => { if (activeIndex > 0) goTo(activeIndex - 1) }
  const next = () => { if (activeIndex < DAYS_WITH_SLOTS.length - 1) goTo(activeIndex + 1) }

  const variants = {
    enter:  (d: number) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0 },
    exit:   (d: number) => ({ opacity: 0, x: d * -40 }),
  }

  return (
    <PageTransition>
      <SEO
        title="Class Schedule & Timetable | PERMAFLY Delhi"
        description="View PERMAFLY's weekly class schedule. Parkour, gymnastics, calisthenics, yoga classes from 6 AM to 10 PM, Monday to Saturday. Vishwas Nagar, Delhi."
        path="/schedule"
      />

      {/* Page Hero */}
      <section
        className="bg-[var(--color-bg-primary)]"
        style={{ paddingTop: 'clamp(6rem, 10vw, 9rem)', paddingBottom: 'var(--section-py-sm)' }}
      >
        <div className="container-site">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>Schedule</SectionLabel>
            <h1
              className="mt-4"
              style={{ fontSize: 'var(--text-h1)', fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              Weekly <span className="text-[var(--color-accent)]">Timetable</span>
            </h1>
            <p className="mt-3 text-[var(--color-text-secondary)]" style={{ fontSize: 'var(--text-body)' }}>
              Monday – Saturday &nbsp;·&nbsp; 06:00 – 22:00 &nbsp;·&nbsp; Sunday closed
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Schedule */}
      <section
        className="bg-[var(--color-bg-primary)]"
        style={{ paddingBottom: 'var(--section-py)' }}
      >
        <div className="container-site">

          {/* ── Day Navigator ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-[clamp(1.5rem,4vw,3rem)]"
          >
            {/* Desktop: full day pills */}
            <div className="hidden sm:flex items-center gap-2 mb-4">
              {DAYS_WITH_SLOTS.map((d, i) => (
                <button
                  key={d.day}
                  onClick={() => goTo(i)}
                  className={cn(
                    'relative px-4 py-2.5 text-sm font-semibold rounded-[var(--radius-md)] transition-all duration-300 overflow-hidden shrink-0',
                    activeIndex === i
                      ? 'text-white'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] bg-[var(--color-bg-surface)] border border-[var(--color-border)]'
                  )}
                >
                  {activeIndex === i && (
                    <motion.div
                      layoutId="activeDayBg"
                      className="absolute inset-0 bg-[var(--color-accent)] -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{d.day}</span>
                </button>
              ))}
            </div>

            {/* Mobile: arrow nav + day name */}
            <div className="flex sm:hidden items-center justify-between mb-4">
              <button
                onClick={prev}
                disabled={activeIndex === 0}
                className="w-10 h-10 flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)] disabled:opacity-30 hover:border-[var(--color-border-accent)] hover:text-[var(--color-accent)] transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="text-center">
                <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-0.5">
                  Day {activeIndex + 1} of {DAYS_WITH_SLOTS.length}
                </p>
                <p className="text-lg font-bold text-[var(--color-text-primary)]">{activeDayData.day}</p>
              </div>
              <button
                onClick={next}
                disabled={activeIndex === DAYS_WITH_SLOTS.length - 1}
                className="w-10 h-10 flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)] disabled:opacity-30 hover:border-[var(--color-border-accent)] hover:text-[var(--color-accent)] transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Pagination progress bar */}
            <div className="flex gap-1.5 items-center">
              {DAYS_WITH_SLOTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${DAYS_WITH_SLOTS[i].day}`}
                  className="group relative h-1.5 rounded-full transition-all duration-300 focus:outline-none"
                  style={{ flex: activeIndex === i ? 3 : 1 }}
                >
                  <span
                    className={cn(
                      'absolute inset-0 rounded-full transition-all duration-300',
                      activeIndex === i
                        ? 'bg-[var(--color-accent)]'
                        : 'bg-[var(--color-bg-elevated)] group-hover:bg-[var(--color-text-muted)]'
                    )}
                  />
                </button>
              ))}
            </div>

            {/* Day + slot count info strip */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className="text-[var(--color-text-primary)] font-bold hidden sm:inline"
                  style={{ fontSize: 'var(--text-h3)' }}
                >
                  {activeDayData.day}
                </span>
                <span className="px-3 py-1 rounded-full bg-[var(--color-accent-glow)] text-[var(--color-accent)] text-xs font-semibold border border-[var(--color-border-accent)]">
                  {activeDayData.slots.length} {activeDayData.slots.length === 1 ? 'class' : 'classes'}
                </span>
              </div>
              {/* Desktop arrow buttons */}
              <div className="hidden sm:flex gap-2">
                <button
                  onClick={prev}
                  disabled={activeIndex === 0}
                  className="w-9 h-9 flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)] disabled:opacity-30 hover:border-[var(--color-border-accent)] hover:text-[var(--color-accent)] transition-all"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  disabled={activeIndex === DAYS_WITH_SLOTS.length - 1}
                  className="w-9 h-9 flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)] disabled:opacity-30 hover:border-[var(--color-border-accent)] hover:text-[var(--color-accent)] transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* ── Timetable Cards ───────────────────────────────────── */}
          <div className="relative overflow-hidden" style={{ minHeight: '400px' }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeDayData.day}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="space-y-3"
              >
                {activeDayData.slots.map((slot, i) => {
                  const color = DISCIPLINE_COLORS[slot.discipline] ?? DISCIPLINE_COLORS['functional']
                  return (
                    <motion.div
                      key={`${slot.time}-${slot.className}`}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.05 }}
                      className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-accent)] transition-all duration-200 hover:shadow-[0_4px_24px_-8px_rgba(255,87,34,0.15)]"
                      style={{ padding: 'clamp(0.875rem,2.5vw,1.25rem) clamp(1rem,3vw,1.5rem)' }}
                    >
                      {/* Colored left accent bar */}
                      <div className={cn('hidden sm:block w-1 self-stretch rounded-full shrink-0', color.dot)} />

                      {/* Time */}
                      <div className="shrink-0 sm:w-36">
                        <div className="flex items-center gap-1.5 text-[var(--color-accent)]">
                          <Clock size={13} className="shrink-0 opacity-70" />
                          <span className="font-mono text-sm font-semibold tracking-tight">{slot.time}</span>
                        </div>
                      </div>

                      {/* Class info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-[var(--color-text-primary)] leading-tight" style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)' }}>
                          {slot.className}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-1 text-[var(--color-text-muted)]">
                          <User size={12} className="shrink-0" />
                          <span style={{ fontSize: 'clamp(0.7rem,1.1vw,0.8rem)' }}>{slot.instructor}</span>
                        </div>
                      </div>

                      {/* Discipline badge */}
                      <div className={cn('shrink-0 px-3 py-1 rounded-full text-xs font-semibold capitalize self-start sm:self-center', color.bg, color.text)}>
                        {slot.discipline.replace('-', ' ')}
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Sunday closed notice ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-[clamp(2rem,4vw,3rem)] p-[clamp(1.25rem,3vw,2rem)] rounded-[var(--radius-xl)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-accent-glow)] flex items-center justify-center shrink-0">
              <Moon size={18} className="text-[var(--color-accent)]" />
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text-primary)] text-sm">Sunday — Rest &amp; Recovery</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                The academy is closed on Sundays. Rest, recover, and come back stronger on Monday.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </PageTransition>
  )
}

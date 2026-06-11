import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Clock, User, Moon } from 'lucide-react'
import { SEO } from '@/lib/seo'
import { PageTransition } from '@/components/layout/PageTransition'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { schedule } from '@/data/schedule'
import { cn } from '@/lib/utils'
import { useActiveOnScroll } from '@/hooks/useActiveOnScroll'

const DISCIPLINE_COLORS: Record<string, { bg: string; text: string; dot: string; border: string }> = {
  yoga:        { bg: 'bg-purple-500/10',   text: 'text-purple-400',  dot: 'bg-purple-400', border: 'border-purple-500/30' },
  gymnastics:  { bg: 'bg-blue-500/10',     text: 'text-blue-400',    dot: 'bg-blue-400',   border: 'border-blue-500/30' },
  parkour:     { bg: 'bg-orange-500/10',   text: 'text-orange-400',  dot: 'bg-orange-400', border: 'border-orange-500/30' },
  calisthenics:{ bg: 'bg-green-500/10',    text: 'text-green-400',   dot: 'bg-green-400',  border: 'border-green-500/30' },
  functional:  { bg: 'bg-yellow-500/10',   text: 'text-yellow-400',  dot: 'bg-yellow-400', border: 'border-yellow-500/30' },
  movement:    { bg: 'bg-cyan-500/10',     text: 'text-cyan-400',    dot: 'bg-cyan-400',   border: 'border-cyan-500/30' },
  'free-weights':{ bg: 'bg-red-500/10',    text: 'text-red-400',     dot: 'bg-red-400',    border: 'border-red-500/30' },
  mma:         { bg: 'bg-rose-500/10',     text: 'text-rose-400',    dot: 'bg-rose-400',   border: 'border-rose-500/30' },
}

const DAYS_WITH_SLOTS = schedule.filter(d => d.day !== 'Sunday')

export default function Schedule() {
  const activeSlots = useActiveOnScroll('.schedule-card')

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
    enter: (d: number) => ({ opacity: 0, x: d * 30 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -30 }),
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  }

  return (
    <PageTransition>
      <SEO
        title="Class Schedule & Timetable | PERMAFLY Delhi"
        description="View PERMAFLY's weekly class schedule. Parkour, gymnastics, calisthenics, yoga classes from 6 AM to 10 PM, Monday to Saturday. Vishwas Nagar, Delhi."
        path="/schedule"
      />

      {/* Hero Header */}
      <section className="bg-[#090909] text-white relative overflow-hidden" style={{ paddingTop: 'clamp(7.5rem, 11vw, 10.5rem)', paddingBottom: 'var(--section-py-sm)' }}>
        <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none" />
        <div className="container-site relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <SectionLabel>Schedule</SectionLabel>
            <h1 className="font-display font-black text-5xl md:text-7xl uppercase leading-none tracking-tighter text-white">
              WEEKLY <span className="text-[var(--color-accent)] orange-glow">SCHEDULE</span>
            </h1>
            <p className="text-base md:text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed pt-2">
              Optimize your discipline. Track your progress. Facility hours Monday – Saturday · 06:00 – 22:00.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Schedule Container */}
      <section className="bg-[#090909] text-white relative overflow-hidden pb-24">
        <div className="container-site">
          
          {/* Day Navigator */}
          <motion.div 
            {...fadeIn}
            className="mb-10 sticky top-16 bg-[#090909]/90 backdrop-blur-md z-40 py-4 border-b border-white/5"
          >
            {/* Desktop pills selector */}
            <div className="hidden sm:flex items-center gap-3">
              {DAYS_WITH_SLOTS.map((d, i) => (
                <button
                  key={d.day}
                  onClick={() => goTo(i)}
                  className={cn(
                    'relative px-5 py-2.5 text-xs font-mono font-bold tracking-wider rounded-xl transition-all duration-300 overflow-hidden shrink-0 border border-white/5 active:scale-95',
                    activeIndex === i
                      ? 'text-white border-[var(--color-accent)]/40 active-day-glow'
                      : 'text-[var(--color-text-secondary)] hover:text-white bg-white/5'
                  )}
                >
                  {activeIndex === i && (
                    <motion.div
                      layoutId="activeDayBg"
                      className="absolute inset-0 bg-[var(--color-accent)] -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{d.day.toUpperCase()}</span>
                </button>
              ))}
            </div>

            {/* Mobile Selector Header with Chevron Controls */}
            <div className="flex sm:hidden items-center justify-between">
              <button
                onClick={prev}
                disabled={activeIndex === 0}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white disabled:opacity-20 transition-all active:scale-90"
                aria-label="Previous day"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="text-center">
                <span className="font-mono text-[10px] text-[var(--color-accent)] tracking-widest uppercase block mb-1">
                  DAY {activeIndex + 1} OF 6
                </span>
                <span className="font-display font-black text-xl text-white uppercase tracking-tight">
                  {activeDayData.day}
                </span>
              </div>
              <button
                onClick={next}
                disabled={activeIndex === DAYS_WITH_SLOTS.length - 1}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white disabled:opacity-20 transition-all active:scale-90"
                aria-label="Next day"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Progress indicator bar underneath day headers */}
            <div className="flex gap-2 items-center mt-6">
              {DAYS_WITH_SLOTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${DAYS_WITH_SLOTS[i].day}`}
                  className="group relative h-1 rounded-full transition-all duration-300 focus:outline-none flex-grow"
                  style={{ flexGrow: activeIndex === i ? 2.5 : 1 }}
                >
                  <span
                    className={cn(
                      'absolute inset-0 rounded-full transition-all duration-300',
                      activeIndex === i
                        ? 'bg-[var(--color-accent)]'
                        : 'bg-white/10 group-hover:bg-white/30'
                    )}
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Active slots listing */}
          <div className="relative pl-6 sm:pl-8 min-h-[350px]">
            {/* Vertical timeline track line */}
            <div className="absolute left-[3px] sm:left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent opacity-30 pointer-events-none" />
            
            {/* Pulse now indicator dot on the track */}
            <div className="absolute left-[-1px] sm:left-[12px] w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)] z-10 top-10 animate-pulse" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeDayData.day}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="space-y-4"
              >
                {activeDayData.slots.map((slot, i) => {
                  const disciplineColor = DISCIPLINE_COLORS[slot.discipline] || DISCIPLINE_COLORS['functional']
                  const isActive = activeSlots.includes(`${slot.time}-${slot.className}`)
                  
                  return (
                      <motion.div
                        key={`${slot.time}-${slot.className}`}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className={`glass p-5 md:p-6 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 border transition-all duration-300 relative group active:scale-[0.995] schedule-card ${
                          isActive
                            ? 'border-[var(--color-accent)]/20 shadow-[0_8px_30px_rgba(255,87,34,0.1)] bg-white/[0.02]'
                            : 'border-white/5 hover:border-[var(--color-accent)]/20 hover:shadow-[0_8px_30px_rgba(255,87,34,0.1)]'
                        }`}
                        data-id={`${slot.time}-${slot.className}`}
                      >
                        {/* Left accent vertical color code strip */}
                        <div className={cn('absolute left-0 top-0 bottom-0 w-1 rounded-l-xl', disciplineColor.dot)} />
  
                        {/* Info details */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 flex-grow pl-2">
                          {/* Time label */}
                          <div className="flex items-center gap-2 text-[var(--color-accent)] shrink-0 w-32">
                            <Clock size={14} className="opacity-75" />
                            <span className="font-mono text-xs md:text-sm font-bold tracking-tight">
                              {slot.time}
                            </span>
                          </div>
  
                          {/* Name and Coach details */}
                          <div className="space-y-1">
                            <h3 className={`font-display font-bold text-base md:text-lg transition-colors duration-300 ${
                              isActive ? 'text-[var(--color-accent)]' : 'text-white group-hover:text-[var(--color-accent)]'
                            }`}>
                              {slot.className}
                            </h3>
                          <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                            <User size={12} className="opacity-60" />
                            <span className="text-xs uppercase tracking-wider">{slot.instructor}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Tag badge */}
                      <div className={cn(
                        'px-3.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider self-start sm:self-center border',
                        disciplineColor.bg,
                        disciplineColor.text,
                        disciplineColor.border
                      )}>
                        {slot.discipline.replace('-', ' ')}
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sunday Rest & Recovery Notice */}
          <motion.div 
            {...fadeIn}
            className="mt-12"
          >
            <div className="glass border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 max-w-2xl mx-auto">
              <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                <Moon size={24} className="text-[var(--color-accent)]" />
              </div>
              <div className="space-y-2">
                <h4 className="font-display font-black text-lg text-white uppercase tracking-wider">
                  Sunday - Rest &amp; Recovery
                </h4>
                <p className="text-xs md:text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-md">
                  Growth happens in the silence between efforts. The academy is closed on Sundays for recovery, recovery work, and deep building maintenance.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </PageTransition>
  )
}

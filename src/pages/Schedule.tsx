import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SEO } from '@/lib/seo'
import { PageTransition } from '@/components/layout/PageTransition'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { schedule } from '@/data/schedule'
import { cn } from '@/lib/utils'

const allDisciplines = ['all', 'gymnastics', 'parkour', 'calisthenics', 'yoga', 'functional', 'movement', 'free-weights', 'mma']

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('Monday')
  const [activeDiscipline, setActiveDiscipline] = useState('all')
  const dayData = schedule.find((d) => d.day === activeDay)
  const filteredSlots = dayData?.slots.filter(
    (s) => activeDiscipline === 'all' || s.discipline === activeDiscipline
  ) ?? []

  return (
    <PageTransition>
      <SEO
        title="Class Schedule & Timetable | PERMAFLY Delhi"
        description="View PERMAFLY's weekly class schedule. Parkour, gymnastics, calisthenics, yoga classes from 6 AM to 10 PM, Monday to Saturday. Vishwas Nagar, Delhi."
        path="/schedule"
      />

      <section className="pt-32 pb-12 bg-[var(--color-bg-primary)]">
        <div className="container-site">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>Schedule</SectionLabel>
            <h1 className="mt-4" style={{ fontSize: 'var(--text-h1)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Weekly <span className="text-[var(--color-accent)]">Timetable</span>
            </h1>
            <p className="mt-3 text-[var(--color-text-secondary)]">Monday – Saturday, 06:00 – 22:00. Sunday closed.</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 bg-[var(--color-bg-primary)]">
        <div className="container-site">
          {/* Day filter */}
          <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            {schedule.map((d) => (
              <button
                key={d.day}
                onClick={() => setActiveDay(d.day)}
                className={cn(
                  'relative px-4 py-2.5 text-sm font-semibold rounded-[var(--radius-md)] transition-colors duration-300 overflow-hidden shrink-0',
                  activeDay === d.day
                    ? 'text-white border border-transparent'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] bg-[var(--color-bg-surface)] border border-[var(--color-border)]'
                )}
              >
                {activeDay === d.day && (
                  <motion.div
                    layoutId="activeDayBg"
                    className="absolute inset-0 bg-[var(--color-accent)] -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  <span className="hidden sm:inline">{d.day}</span>
                  <span className="sm:hidden">{d.day.substring(0, 3)}</span>
                </span>
              </button>
            ))}
          </div>

          {/* Discipline filter */}
          <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            {allDisciplines.map((d) => (
              <button
                key={d}
                onClick={() => setActiveDiscipline(d)}
                className={cn(
                  'relative px-3.5 py-2 text-xs font-semibold rounded-full transition-colors duration-300 overflow-hidden shrink-0',
                  activeDiscipline === d
                    ? 'text-[var(--color-accent)] border border-transparent'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] bg-[var(--color-bg-surface)] border border-[var(--color-border)]'
                )}
              >
                {activeDiscipline === d && (
                  <motion.div
                    layoutId="activeDisciplineBg"
                    className="absolute inset-0 bg-[var(--color-accent-glow)] border border-[var(--color-border-accent)] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 capitalize">
                  {d === 'all' ? 'All Classes' : d.replace('-', ' ')}
                </span>
              </button>
            ))}
          </div>

          {/* Timetable */}
          {activeDay === 'Sunday' ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-2xl font-semibold text-[var(--color-text-muted)]">Sunday — Closed</p>
              <p className="mt-2 text-[var(--color-text-muted)]">Rest, recover, come back stronger.</p>
            </motion.div>
          ) : (
            <div className="space-y-3">
              <AnimatePresence mode="popLayout">
                {filteredSlots.map((slot, i) => (
                  <motion.div
                    key={`${activeDay}-${slot.time}-${slot.className}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    layout
                    className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-accent)] transition-colors"
                  >
                    <div className="sm:w-40 text-sm font-mono text-[var(--color-accent)] font-medium">{slot.time}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[var(--color-text-primary)]">{slot.className}</h3>
                      <p className="text-sm text-[var(--color-text-muted)]">{slot.instructor}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent-glow)] text-[var(--color-accent)] border border-[var(--color-border-accent)] capitalize self-start sm:self-center">
                      {slot.discipline.replace('-', ' ')}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
              {filteredSlots.length === 0 && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 text-[var(--color-text-muted)]">
                  No classes matching this filter for {activeDay}.
                </motion.p>
              )}
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  )
}

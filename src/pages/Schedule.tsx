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
          <div className="flex flex-wrap gap-2 mb-6">
            {schedule.map((d) => (
              <button
                key={d.day}
                onClick={() => setActiveDay(d.day)}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-[var(--radius-md)] transition-all duration-200',
                  activeDay === d.day
                    ? 'bg-[var(--color-accent)] text-white'
                    : 'bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-border-accent)] hover:text-[var(--color-text-primary)]'
                )}
              >
                {d.day}
              </button>
            ))}
          </div>

          {/* Discipline filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {allDisciplines.map((d) => (
              <button
                key={d}
                onClick={() => setActiveDiscipline(d)}
                className={cn(
                  'px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 capitalize',
                  activeDiscipline === d
                    ? 'bg-[var(--color-accent-glow)] text-[var(--color-accent)] border border-[var(--color-border-accent)]'
                    : 'bg-[var(--color-bg-surface)] text-[var(--color-text-muted)] border border-[var(--color-border)] hover:text-[var(--color-text-secondary)]'
                )}
              >
                {d === 'all' ? 'All Classes' : d.replace('-', ' ')}
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

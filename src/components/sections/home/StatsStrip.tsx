import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

export function StatsStrip() {
  const stats = [
    { end: 500, suffix: '+', label: 'Students Trained' },
    { end: 8, suffix: '', label: 'Disciplines' },
    { end: 6, suffix: '+', label: 'Years Active' },
    { end: 0, suffix: '', label: 'Machines Used', prefix: '' },
  ]

  return (
    <section className="py-16 md:py-20 border-y border-[var(--color-border)] bg-[var(--color-bg-surface)]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container-site"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

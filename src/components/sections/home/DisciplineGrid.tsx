import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { disciplines } from '@/data/disciplines'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { LazyImage } from '@/components/ui/LazyImage'
import { disciplineIcons } from '@/lib/icons'

export function DisciplineGrid() {
  return (
    <section style={{ paddingBlock: 'var(--section-py)' }} className="bg-[var(--color-bg-primary)]">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-[clamp(1.5rem,4vw,4rem)]"
        >
          <SectionLabel>Our Disciplines</SectionLabel>
          <h2 className="mt-4" style={{ fontSize: 'var(--text-h1)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            8 Ways to <span className="text-[var(--color-accent)]">Fly</span>
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)] max-w-xl" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}>
            From parkour to yoga, calisthenics to MMA — train your body the way nature intended.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 'var(--gap-sm)' }}>
          {disciplines.slice(0, 8).map((discipline, i) => {
            // Balance columns across 3 rows on lg: Row 1 (2+1+1), Row 2 (1+1+2), Row 3 (2+2)
            const isWide = i === 0 || i === 5 || i === 6 || i === 7
            
            return (
              <motion.div
                key={discipline.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={isWide ? 'sm:col-span-2' : ''}
              >
                <Link
                  to={`/classes/${discipline.slug}`}
                  className="group relative flex flex-col justify-end w-full overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-accent)] transition-all duration-300 hover:scale-[1.01] aspect-[1.3/1] sm:aspect-auto"
                  style={{ height: 'clamp(160px, 20vw, 280px)' }}
                >
                  {/* Background image */}
                  <LazyImage
                    src={discipline.heroImage}
                    alt={discipline.name}
                    width={600}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/70 to-transparent" />

                  {/* Content */}
                  <div className="relative z-10 p-[clamp(0.625rem,2.5vw,1.25rem)]">
                    <div className="flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-glow)] text-[var(--color-accent)] mb-2 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300"
                      style={{ width: 'clamp(1.5rem,4vw,2.25rem)', height: 'clamp(1.5rem,4vw,2.25rem)' }}>
                      {(() => {
                        const IconComponent = disciplineIcons[discipline.icon]
                        return IconComponent ? <IconComponent style={{ width: 'clamp(0.75rem,2vw,1.25rem)', height: 'clamp(0.75rem,2vw,1.25rem)' }} /> : null
                      })()}
                    </div>
                    <h3 style={{ fontSize: 'clamp(0.75rem,2.5vw,1rem)' }} className="font-semibold text-[var(--color-text-primary)] leading-tight">
                      {discipline.name}
                    </h3>
                    <p className="mt-1 text-[var(--color-text-secondary)] line-clamp-2 leading-snug hidden sm:block"
                      style={{ fontSize: 'clamp(0.7rem,1.2vw,0.875rem)' }}>
                      {discipline.shortDescription}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

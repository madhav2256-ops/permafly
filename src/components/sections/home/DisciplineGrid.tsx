import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Flame, Zap, Dumbbell, Leaf, Target, Wind, Weight, Swords } from 'lucide-react'
import { disciplines } from '@/data/disciplines'
import { SectionLabel } from '@/components/ui/SectionLabel'

const iconMap: Record<string, React.ReactNode> = {
  Flame: <Flame size={24} />,
  Zap: <Zap size={24} />,
  Dumbbell: <Dumbbell size={24} />,
  Leaf: <Leaf size={24} />,
  Target: <Target size={24} />,
  Wind: <Wind size={24} />,
  Weight: <Dumbbell size={24} />,
  Swords: <Swords size={24} />,
}

export function DisciplineGrid() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-primary)]">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionLabel>Our Disciplines</SectionLabel>
          <h2 className="mt-4" style={{ fontSize: 'var(--text-h1)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            8 Ways to <span className="text-[var(--color-accent)]">Fly</span>
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)] max-w-xl text-lg">
            From parkour to yoga, calisthenics to MMA — train your body the way nature intended.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {disciplines.slice(0, 8).map((discipline, i) => (
            <motion.div
              key={discipline.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/classes/${discipline.slug}`}
                className="group relative block overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-accent)] transition-all duration-300 hover:scale-[1.02]"
                style={{ aspectRatio: i < 2 ? '4/5' : '1/1' }}
              >
                {/* Background image */}
                <img
                  src={discipline.heroImage}
                  alt={discipline.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/60 to-transparent" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-glow)] text-[var(--color-accent)] mb-3 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                    {iconMap[discipline.icon]}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                    {discipline.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-secondary)] line-clamp-2 group-hover:line-clamp-none transition-all">
                    {discipline.shortDescription}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

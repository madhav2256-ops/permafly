import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Flame, Zap, Dumbbell, Leaf, Target, Wind, Swords } from 'lucide-react'
import { SEO } from '@/lib/seo'
import { PageTransition } from '@/components/layout/PageTransition'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { disciplines } from '@/data/disciplines'

const iconMap: Record<string, React.ReactNode> = {
  Flame: <Flame size={28} />,
  Zap: <Zap size={28} />,
  Dumbbell: <Dumbbell size={28} />,
  Leaf: <Leaf size={28} />,
  Target: <Target size={28} />,
  Wind: <Wind size={28} />,
  Weight: <Dumbbell size={28} />,
  Swords: <Swords size={28} />,
}

export default function Classes() {
  return (
    <PageTransition>
      <SEO
        title="Classes & Disciplines | PERMAFLY — Parkour, Calisthenics, Gymnastics Delhi"
        description="Explore 8 disciplines at PERMAFLY: Parkour, Calisthenics, Gymnastics, Yoga, Functional Training, MMA, Movement Culture, Free Weights. All ages. Delhi."
        path="/classes"
      />

      <section className="pt-32 pb-12 bg-[var(--color-bg-primary)]">
        <div className="container-site">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>Our Classes</SectionLabel>
            <h1 className="mt-4" style={{ fontSize: 'var(--text-h1)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              8 Disciplines. <span className="text-[var(--color-accent)]">One Academy.</span>
            </h1>
            <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-2xl">
              Train your body the way nature intended. No machines. No shortcuts.
              Just you, gravity, and expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 bg-[var(--color-bg-primary)]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {disciplines.map((d, i) => (
              <motion.div
                key={d.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={`/classes/${d.slug}`}
                  className="group block relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-accent)] transition-all duration-300 hover:scale-[1.01]"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden">
                      <img src={d.heroImage} alt={d.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-bg-surface)] hidden sm:block" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-bg-surface)] sm:hidden" />
                    </div>
                    <div className="p-6 flex flex-col justify-center flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-glow)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                          {iconMap[d.icon]}
                        </div>
                        <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">{d.name}</h2>
                      </div>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">{d.shortDescription}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {d.levels.map((level) => (
                          <span key={level} className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent-glow)] text-[var(--color-accent)] border border-[var(--color-border-accent)]">
                            {level}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] font-medium group-hover:gap-2 transition-all">
                        View Details <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

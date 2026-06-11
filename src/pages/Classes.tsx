import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEO } from '@/lib/seo'
import { PageTransition } from '@/components/layout/PageTransition'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { disciplines } from '@/data/disciplines'
import { LazyImage } from '@/components/ui/LazyImage'
import { disciplineIcons } from '@/lib/icons'
import { useActiveOnScroll } from '@/hooks/useActiveOnScroll'

export default function Classes() {
  const activeSlugs = useActiveOnScroll('.discipline-list-card', 1024)

  // Fade-in animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }

  const staggerContainer = {
    initial: {},
    whileInView: {},
    viewport: { once: true, margin: '-50px' },
    transition: { staggerChildren: 0.08 }
  }

  const cardHover = {
    scale: 1.015,
    borderColor: 'rgba(255, 87, 34, 0.25)',
    boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.7)',
    transition: { duration: 0.3, ease: 'easeOut' as const }
  }

  // Categories helper mapping index
  const categories: Record<string, string> = {
    calisthenics: 'STRENGTH',
    parkour: 'AGILITY',
    gymnastics: 'BALANCE',
    yoga: 'FLEXIBILITY',
    functional: 'POWER',
    movement: 'FLOW',
    'free-weights': 'LOAD',
    mma: 'COMBAT'
  }

  return (
    <PageTransition>
      <SEO
        title="Classes & Disciplines | PERMAFLY — Parkour, Calisthenics, Gymnastics Delhi"
        description="Explore 8 disciplines at PERMAFLY: Parkour, Calisthenics, Gymnastics, Yoga, Functional Training, MMA, Movement Culture, Free Weights. All ages. Delhi."
        path="/classes"
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
            <SectionLabel>Our Classes</SectionLabel>
            <h1 className="font-display font-black text-5xl md:text-7xl uppercase leading-none tracking-tighter text-white">
              MASTER YOUR <br />
              <span className="text-[var(--color-accent)] orange-glow">MOVEMENT</span>
            </h1>
            <p className="text-base md:text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed pt-2">
              8 Elite Disciplines. Zero Machines. Train your body the way nature intended. No shortcuts, just pure physical power.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid List Section */}
      <section className="bg-[#090909] text-white relative overflow-hidden" style={{ paddingBottom: 'var(--section-py)' }}>
        <div className="container-site">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          >
            {disciplines.map((d, i) => {
              const category = categories[d.slug] || 'PERFORMANCE'
              const numPrefix = String(i + 1).padStart(2, '0')
              const isActive = activeSlugs.includes(d.slug)

              return (
                <motion.div
                  key={d.slug}
                  variants={fadeIn}
                  whileHover={cardHover}
                  animate={isActive ? cardHover : undefined}
                  className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-[var(--color-accent)]/20 transition-all duration-300 relative group flex flex-col h-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] discipline-list-card"
                  data-slug={d.slug}
                >
                  <Link
                    to={`/classes/${d.slug}`}
                    className="flex flex-col sm:flex-row h-full"
                  >
                    {/* Left/Top Image Area */}
                    <div className="relative sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden bg-[#111111]">
                      <LazyImage 
                        src={d.heroImage} 
                        alt={d.name} 
                        width={400} 
                        height={400} 
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          isActive
                            ? 'scale-103 grayscale-0 opacity-90'
                            : 'opacity-50 grayscale group-hover:scale-103 group-hover:grayscale-0 group-hover:opacity-90'
                        }`} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#141414] hidden sm:block pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#141414] sm:hidden pointer-events-none" />
                    </div>

                    {/* Right/Bottom Content Area */}
                    <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                      <div>
                        {/* Metadata line */}
                        <div className="font-mono text-xs tracking-[0.2em] text-[var(--color-accent)] uppercase mb-3.5 font-bold flex items-center gap-2 leading-none">
                          <span>{numPrefix}</span>
                          <span>/</span>
                          <span>{category}</span>
                        </div>

                        {/* Title & Icon Header */}
                        <div className="flex items-center gap-3.5 mb-4">
                          <div className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${
                            isActive
                              ? 'bg-[var(--color-accent)] text-white'
                              : 'bg-[var(--color-accent-glow)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white'
                          }`}>
                            {(() => {
                              const IconComponent = disciplineIcons[d.icon]
                              return IconComponent ? <IconComponent size={20} /> : null
                            })()}
                          </div>
                          <h2 className={`font-display font-black text-xl md:text-2xl uppercase tracking-tight transition-colors duration-300 ${
                            isActive
                              ? 'text-[var(--color-accent)]'
                              : 'text-white group-hover:text-[var(--color-accent)]'
                          }`}>
                            {d.name}
                          </h2>
                        </div>

                        {/* Description */}
                        <p className="text-xs md:text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                          {d.shortDescription}
                        </p>
                      </div>

                      {/* Card Footer tags and action */}
                      <div className="mt-auto pt-5 border-t border-white/5 flex flex-col gap-4">
                        <div className="flex flex-wrap gap-2">
                          {d.levels.map((level) => (
                            <span 
                              key={level} 
                              className={`px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded-md bg-white/5 border transition-all ${
                                isActive
                                  ? 'border-[var(--color-accent)]/20 text-white'
                                  : 'text-[var(--color-text-secondary)] border-white/5 group-hover:border-[var(--color-accent)]/20 group-hover:text-white'
                              }`}
                            >
                              {level}
                            </span>
                          ))}
                        </div>
                        
                        <div className={`inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                          isActive
                            ? 'text-white'
                            : 'text-[var(--color-accent)] hover:text-white'
                        }`}>
                          Explore Program 
                          <ArrowRight size={14} className={`transform transition-transform ${
                            isActive ? 'translate-x-1' : 'group-hover:translate-x-1'
                          }`} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

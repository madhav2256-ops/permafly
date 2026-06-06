import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { SEO } from '@/lib/seo'
import { PageTransition } from '@/components/layout/PageTransition'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { disciplines } from '@/data/disciplines'
import { Button } from '@/components/ui/Button'
import { LazyImage } from '@/components/ui/LazyImage'

export default function ClassDetail() {
  const { slug } = useParams<{ slug: string }>()
  const discipline = disciplines.find((d) => d.slug === slug)

  if (!discipline) return <Navigate to="/classes" replace />

  return (
    <PageTransition>
      <SEO
        title={`${discipline.name} Classes Delhi | PERMAFLY Academy`}
        description={`${discipline.shortDescription} Join ${discipline.name} classes at PERMAFLY — Delhi's first parkour & calisthenics academy. All levels welcome.`}
        path={`/classes/${discipline.slug}`}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-20 min-h-[50vh] flex items-end overflow-hidden">
        <LazyImage src={discipline.heroImage} alt={discipline.name} className="absolute inset-0 w-full h-full object-cover" priority={true} fetchPriority="high" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/70 to-transparent" />
        <div className="container-site relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/classes" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors mb-6">
              <ArrowLeft size={16} /> Back to Classes
            </Link>
            <h1 style={{ fontSize: 'var(--text-h1)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              {discipline.name}
            </h1>
            <p className="mt-3 text-lg text-[var(--color-text-secondary)] max-w-2xl">{discipline.shortDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* Description + Features */}
      <section style={{ paddingBlock: 'var(--section-py)' }} className="bg-[var(--color-bg-primary)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 'var(--gap-lg)' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <SectionLabel>About This Discipline</SectionLabel>
              <p className="mt-6 text-[var(--color-text-secondary)] leading-relaxed text-lg">
                {discipline.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {discipline.levels.map((level) => (
                  <span key={level} className="px-4 py-2 text-sm font-medium rounded-full bg-[var(--color-accent-glow)] text-[var(--color-accent)] border border-[var(--color-border-accent)]">
                    {level}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <SectionLabel>What You&apos;ll Learn</SectionLabel>
              <ul className="mt-6 space-y-4">
                {discipline.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-[var(--color-text-secondary)]">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBlock: 'var(--section-py)' }} className="bg-[var(--color-bg-surface)]">
        <div className="container-site text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-[var(--text-h2)] font-semibold">
              Start Your <span className="text-[var(--color-accent)]">{discipline.name}</span> Journey
            </h2>
            <p
              className="mt-4 text-[var(--color-text-secondary)]"
              style={{
                display: 'block',
                margin: '1rem auto 0 auto',
                maxWidth: '512px',
                textAlign: 'center',
                width: '100%'
              }}
            >{"No experience needed. Our coaches meet you where you are and guide you to where you want to be."}</p>
            <Button variant="primary" size="lg" href="/contact" className="group mt-8">
              Join Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/siteConfig'
export function Hero() {
  const words = ['JUST', 'BELIEVE,', 'EARN', 'YOURSELF']

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          src={`${siteConfig.heroVideo}?autoplay=1&mute=1&loop=1&playlist=${siteConfig.heroVideoId}&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&playsinline=1`}
          allow="autoplay; encrypted-media"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-[120%] min-h-[120%] pointer-events-none"
          title="PERMAFLY hero video"
          loading="eager"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)]/70 via-[var(--color-bg-primary)]/50 to-[var(--color-bg-primary)]" />
      </div>

      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* Content */}
      <div className="relative z-10 container-site text-center px-4">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-label justify-center mb-8"
        >
          FLY WITH US
        </motion.p>

        {/* Headline — word-by-word stagger */}
        <h1 className="leading-[1.1] md:leading-[0.95]" style={{ fontSize: 'var(--text-hero)', fontWeight: 800, letterSpacing: '-0.03em' }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto text-center"
        >
          Delhi&apos;s first machine-free parkour, calisthenics & gymnastics academy.<br className="hidden md:block" />
          All ages. All levels. Zero limits.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            variant="primary"
            size="lg"
            href="/contact"
            className="group flex items-center gap-2"
          >
            Join Us Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="/classes"
          >
            Explore Classes
          </Button>
        </motion.div>

      </div>
    </section>
  )
}

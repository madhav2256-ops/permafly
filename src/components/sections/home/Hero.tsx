import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/siteConfig'

export function Hero() {
  const words = ['JUST', 'BELIEVE,', 'EARN', 'YOURSELF']

  // Mouse movement variables for kinetic trails
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mouseX.set(x)
    mouseY.set(y)
  }

  // Transformations for trails
  const trail1X = useTransform(mouseX, [0, 1], [-30, 30])
  const trail1Y = useTransform(mouseY, [0, 1], [-30, 30])
  const trail2X = useTransform(mouseX, [0, 1], [-60, 60])
  const trail2Y = useTransform(mouseY, [0, 1], [-60, 60])

  return (
    <section 
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(9, 9, 9, 0.4) 0%, rgba(9, 9, 9, 0.95) 100%), url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg-primary)]"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          src={`${siteConfig.heroVideo}?autoplay=1&mute=1&loop=1&playlist=${siteConfig.heroVideoId}&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&playsinline=1`}
          allow="autoplay; encrypted-media"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-[120%] min-h-[120%]"
          title="PERMAFLY hero video"
          loading="eager"
        />
        {/* Transparent overlay blocker */}
        <div className="absolute inset-0 z-[1]" />
        {/* Dark overlay that bleeds out completely */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[var(--color-bg-primary)]/80 via-[var(--color-bg-primary)]/40 to-[var(--color-bg-primary)]" />
      </div>

      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* Floating Kinetic Trails */}
      <motion.div 
        style={{ x: trail1X, y: trail1Y }} 
        className="kinetic-trail left-1/4 top-1/4 animate-float" 
      />
      <motion.div 
        style={{ x: trail2X, y: trail2Y, animationDelay: '2.5s' }} 
        className="kinetic-trail right-1/4 bottom-1/4 animate-float" 
      />

      {/* Content */}
      <div className="relative z-10 container-site flex flex-col items-center text-center px-4">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-label justify-center mb-4 md:mb-8"
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
              className={`inline-block mr-[0.3em] ${word === 'YOURSELF' || word === 'EARN' ? 'text-[var(--color-accent)] drop-shadow-[0_0_20px_var(--color-accent-glow)]' : 'text-[var(--color-text-primary)]'}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4 md:mt-6 text-base md:text-xl text-[var(--color-text-secondary)]"
          style={{
            display: 'block',
            margin: '1.5rem auto 0 auto',
            maxWidth: '672px',
            textAlign: 'center',
            width: '100%'
          }}
        >
          {"Delhi's first machine-free parkour, calisthenics & gymnastics academy."}
          <br className="hidden md:block" />
          <span className="md:hidden">{" "}</span>
          {"All ages. All levels. Zero limits."}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full max-w-xs sm:max-w-none"
        >
          <Button
            variant="primary"
            size="lg"
            href="/contact"
            className="w-full sm:w-auto group glowing-cta flex items-center justify-center gap-2"
          >
            Join Us Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="/classes"
            className="w-full sm:w-auto backdrop-blur-sm"
          >
            Explore Classes
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

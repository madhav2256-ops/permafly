import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function AboutTeaser() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-primary)]">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>About Us</SectionLabel>
            <h2 className="mt-4" style={{ fontSize: 'var(--text-h2)', fontWeight: 600 }}>
              Delhi&apos;s Pioneer <span className="text-[var(--color-accent)]">Calisthenics</span> Academy
            </h2>
            <p className="mt-6 text-[var(--color-text-secondary)] leading-relaxed">
              PERMAFLY is a pioneer calisthenic, gymnastics, parkour and yoga academy in India.
              It&apos;s the first calisthenics academy established in Delhi — totally based on a new
              concept of manoeuvre pattern, designed by Team PERMAFLY to make you achieve your
              ultimate fitness level.
            </p>
            <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
              We encourage all athletes and fitness enthusiasts of India to take a step forward,
              and take Indian fitness to a new horizon. We provide all necessary international
              equipment so that our esteemed members can showcase their talent on any platform
              they desire worldwide.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold hover:gap-3 transition-all duration-200"
            >
              Learn more about our story
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative select-none"
          >
            <div className="relative overflow-hidden rounded-[var(--radius-xl)] aspect-[4/5] group shadow-2xl">
              <img
                src="https://login.permafly.in/imgs/202104241541118418851.jpg"
                alt="PERMAFLY academy interior — athletes training in parkour and calisthenics"
                loading="lazy"
                width="600"
                height="750"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-750"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)]/40 to-transparent" />
            </div>
            {/* Accent decoration */}
            <motion.div 
              animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[var(--color-border-accent)] rounded-[var(--radius-xl)] -z-10" 
            />
            <motion.div 
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 w-20 h-20 bg-[var(--color-accent-glow)] rounded-full blur-2xl" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

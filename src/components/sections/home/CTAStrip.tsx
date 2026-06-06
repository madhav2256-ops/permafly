import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function CTAStrip() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/10 via-[var(--color-bg-primary)] to-[var(--color-accent)]/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] opacity-[0.03] blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container-site relative z-10 text-center"
      >
        <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 700, letterSpacing: '-0.02em' }}>
          Ready to <span className="text-[var(--color-accent)]">Fly</span>?
        </h2>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
          Join Delhi&apos;s most dynamic fitness community. Your first session is a conversation —
          not a commitment.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white font-semibold text-lg rounded-[var(--radius-md)] hover:bg-[var(--color-accent-hover)] hover:scale-[1.03] transition-all duration-200"
          >
            <span className="absolute inset-0 rounded-[var(--radius-md)] bg-[var(--color-accent)] blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <span className="relative">Get Started</span>
            <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:+919485993322"
            className="px-8 py-4 border border-[var(--color-border)] text-[var(--color-text-primary)] font-semibold text-lg rounded-[var(--radius-md)] hover:border-[var(--color-border-accent)] hover:text-[var(--color-accent)] transition-all duration-200"
          >
            Call +91 948-599-3322
          </a>
        </div>
      </motion.div>
    </section>
  )
}

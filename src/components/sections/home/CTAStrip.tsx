import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export function CTAStrip() {
  return (
    <section style={{ paddingBlock: 'var(--section-py)' }} className="relative overflow-hidden">
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
        <p
          className="mt-4 text-base md:text-lg text-[var(--color-text-secondary)]"
          style={{
            display: 'block',
            margin: '1rem auto 0 auto',
            maxWidth: '576px',
            textAlign: 'center',
            width: '100%'
          }}
        >
          {"Join Delhi's most dynamic fitness community. Your first session is a conversation — not a commitment."}
        </p>
        <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full max-w-xs sm:max-w-none mx-auto">
          <Button
            variant="primary"
            size="lg"
            href="/contact"
            className="w-full sm:w-auto group flex items-center justify-center gap-2"
          >
            Get Started
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="tel:+919485993322"
            className="w-full sm:w-auto"
          >
            Call +91 948-599-3322
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

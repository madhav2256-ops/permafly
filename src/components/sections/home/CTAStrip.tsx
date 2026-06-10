import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function CTAStrip() {
  return (
    <section 
      style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(9, 9, 9, 0.8) 0%, rgba(9, 9, 9, 0.98) 100%), url("https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingBlock: 'var(--section-py)',
      }}
      className="relative overflow-hidden bg-[#090909] text-white"
    >
      {/* Massive orange glow aura layered under content */}
      <div className="absolute inset-0 opacity-15 pointer-events-none -z-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,var(--color-accent-glow),transparent_70%)]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="container-site relative z-10 text-center max-w-4xl mx-auto py-8"
      >
        {/* Urgency capsule */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs font-bold tracking-wider uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
          Only 12 trial spots left this month
        </div>

        <h2 
          className="font-display font-black text-4xl md:text-7xl uppercase leading-none text-white mb-6 tracking-tighter"
        >
          READY TO <span className="text-[var(--color-accent)]">FLY</span>?
        </h2>
        
        <p
          className="text-base md:text-xl font-medium text-[var(--color-text-secondary)] leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          {"Join Delhi's most dynamic machine-free academy. Stop waiting for the right time. The only machine you need is already within you."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-xs sm:max-w-none mx-auto">
          <Button
            variant="primary"
            size="lg"
            href="/contact"
            className="w-full sm:w-auto group glowing-cta flex items-center justify-center gap-2 px-8 py-4 font-semibold uppercase rounded-xl"
          >
            Book A Free Trial
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            href="tel:+919485993322"
            className="w-full sm:w-auto border border-white/10 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] rounded-xl px-8 py-4 bg-white/5 backdrop-blur-md"
          >
            Call +91 948-599-3322
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

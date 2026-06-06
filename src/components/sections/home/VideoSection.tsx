import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { siteConfig } from '@/data/siteConfig'

export function VideoSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-primary)]">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionLabel className="justify-center">Watch</SectionLabel>
          <h2 className="mt-4" style={{ fontSize: 'var(--text-h2)', fontWeight: 600 }}>
            See Us in <span className="text-[var(--color-accent)]">Action</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative rounded-[var(--radius-xl)] overflow-hidden border border-[var(--color-border)] aspect-video">
            <iframe
              src={`${siteConfig.heroVideo}?rel=0&modestbranding=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="PERMAFLY Academy — Training overview"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>
          {/* Glow behind */}
          <div className="absolute -inset-2 bg-[var(--color-accent)] opacity-5 blur-3xl rounded-[var(--radius-xl)] -z-10" />
        </motion.div>
      </div>
    </section>
  )
}

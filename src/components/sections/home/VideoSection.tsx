import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { siteConfig, getAssetUrl } from '@/data/siteConfig'
import { LazyImage } from '@/components/ui/LazyImage'

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-10 sm:py-16 md:py-32 bg-[var(--color-bg-primary)]">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[clamp(1.5rem,5vw,3rem)]"
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
          <div 
            onClick={() => setIsPlaying(true)}
            className="relative rounded-[var(--radius-xl)] overflow-hidden border border-[var(--color-border)] aspect-video bg-black group/video cursor-pointer hover:border-[var(--color-border-accent)] transition-all duration-300 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]"
          >
            {!isPlaying ? (
              <>
                <LazyImage
                  src={getAssetUrl('video_cover', `https://img.youtube.com/vi/${siteConfig.heroVideoId}/hqdefault.jpg`)}
                  alt="PERMAFLY Academy training video cover"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover group-hover/video:scale-[1.02] transition-transform duration-700"
                />
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70" />
                
                {/* Pulsing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[var(--color-accent)] group-hover/video:bg-[var(--color-accent)] group-hover/video:text-white group-hover/video:scale-110 transition-all duration-300 shadow-2xl">
                    <span className="absolute -inset-4 rounded-full bg-[var(--color-accent)] opacity-10 animate-ping group-hover/video:opacity-20" />
                    <Play size={32} className="fill-current ml-1" />
                  </div>
                </div>
              </>
            ) : (
              <iframe
                src={`${siteConfig.heroVideo}?autoplay=1&rel=0&modestbranding=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="PERMAFLY Academy — Training overview"
                className="absolute inset-0 w-full h-full"
                loading="eager"
              />
            )}
          </div>
          {/* Glow behind */}
          <div className="absolute -inset-4 bg-[var(--color-accent)] opacity-[0.03] blur-3xl rounded-[var(--radius-xl)] -z-10" />
        </motion.div>
      </div>
    </section>
  )
}

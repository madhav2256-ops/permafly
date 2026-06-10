import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { LazyImage } from '@/components/ui/LazyImage'
import { siteConfig } from '@/data/siteConfig'

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const stats = [
    {
      value: '1,000+',
      label: 'ACTIVE ATHLETES',
      desc: 'From absolute beginners to elite competitive athletes training under one roof.',
    },
    {
      value: '500+ Hrs',
      label: 'TRAINING CONTENT',
      desc: 'Curated curriculum covering progressive movements and skills library.',
    },
    {
      value: 'ZERO',
      label: 'WEIGHT MACHINES',
      desc: 'No shortcuts, no isolation machines. Your bodyweight is the ultimate resistance.',
    },
  ]

  return (
    <section 
      style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }} 
      className="relative overflow-hidden bg-[#090909] text-white"
    >
      <div className="container-site relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <SectionLabel>Watch</SectionLabel>
          <h2 className="mt-4 font-display font-black text-3xl md:text-5xl uppercase tracking-tight text-white leading-[1.1]">
            SEE US IN{' '}
            <span className="text-[var(--color-accent)]">ACTION</span>.
          </h2>
        </motion.div>

        {/* 2-Column Layout: Video on Left, Stats on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column (Video Player wrapper with backglow) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            {/* Backdrop Orange Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.15)_0%,transparent_70%)] blur-3xl scale-110 -z-10 pointer-events-none" />

            <div 
              onClick={() => setIsPlaying(true)}
              className="relative rounded-xl overflow-hidden aspect-video bg-black group/video cursor-pointer border border-white/10 transition-all duration-500 hover:border-[var(--color-accent)]/30 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.8)]"
            >
              {!isPlaying ? (
                <>
                  <LazyImage
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1280&auto=format&fit=crop"
                    alt="PERMAFLY Academy action training video cover"
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover group-hover/video:scale-102 transition-transform duration-700 grayscale"
                  />
                  {/* Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />
                  
                  {/* Pulsing Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white group-hover/video:bg-[var(--color-accent)] group-hover/video:border-transparent group-hover/video:scale-110 transition-all duration-300 shadow-2xl">
                      <span className="absolute -inset-4 rounded-full bg-[var(--color-accent)] opacity-10 animate-ping group-hover/video:opacity-20" />
                      <Play size={28} className="fill-current ml-1" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/wTnrJKeHsig?autoplay=1&mute=0&loop=1&playlist=wTnrJKeHsig"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="eager"
                  />
                  {/* Invisible blocker to prevent mouse stealing */}
                  <div className="absolute inset-0 z-10 pointer-events-none" />
                </>
              )}
            </div>
          </motion.div>

          {/* Right Column (Metrics callouts) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-8 md:gap-10"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="border-l-2 border-white/10 pl-6 hover:border-[var(--color-accent)] transition-colors duration-300">
                <div className="font-display font-black text-4xl md:text-5xl text-white tracking-tight leading-none mb-1.5">
                  {stat.value}
                </div>
                <div className="font-display text-[10px] md:text-xs tracking-[0.2em] font-bold text-[var(--color-accent)] uppercase mb-2">
                  {stat.label}
                </div>
                <p className="text-xs md:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Brand Manifesto Section with giant low-opacity background word */}
        <div className="relative border-t border-white/5 pt-16 md:pt-20 mt-16 md:mt-20 overflow-hidden">
          {/* Giant background text */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none -z-10 opacity-[0.02] md:opacity-[0.03]">
            <span className="font-display font-black text-[15vw] tracking-[0.15em] uppercase leading-none text-transparent" style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.4)' }}>
              MANIFESTO
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
                &ldquo;We don&apos;t just build muscle; <br className="hidden lg:block" />we design <span className="text-[var(--color-accent)] font-serif italic">limitlessness</span>.&rdquo;
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center"
            >
              <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                Our academy philosophy bridges the gap between high-fashion editorial and technical precision. Every movement, every routine, and every workout is purposefully crafted for the individual who views the world as their arena.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { LazyImage } from '@/components/ui/LazyImage'

export function AboutTeaser() {
  const pillars = [
    {
      index: '01',
      title: 'MANOEUVRE PATTERNS',
      desc: "Delhi's first academy based on progressive, non-traditional movement frameworks designed for ultimate physical power.",
    },
    {
      index: '02',
      title: 'ELITE EQUIPMENT',
      desc: 'Full access to international-standard gymnastics rigs, custom calisthenics bars, and premium padded training floor setups.',
    },
    {
      index: '03',
      title: 'PROFESSIONAL SPOTTING',
      desc: 'Certified elite coaches who spot and guide you through complex aerial elements, flips, and high-tier strength holds safely.',
    },
  ]

  return (
    <section 
      style={{ paddingBlock: 'clamp(1rem, 4vw, 4rem)' }} 
      className="bg-[#090909] text-white relative overflow-hidden"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
          
          {/* Text and Pillars Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <SectionLabel>About Us</SectionLabel>
            <h2 className="mt-4 font-display font-black text-3xl md:text-5xl text-white uppercase leading-[1.1] tracking-tight">
              WE DON&apos;T TEACH MOVEMENTS.<br />
              <span className="font-serif italic lowercase text-[var(--color-accent)] font-normal">
                we engineer
              </span>{' '}
              FREEDOM.
            </h2>
            
            {/* 3-Column Pillars breakdown below headline */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 md:mt-12">
              {pillars.map((pillar) => (
                <div key={pillar.index} className="flex flex-col">
                  {/* Large Display Index Number */}
                  <span className="font-display font-black text-3xl text-[var(--color-accent)] mb-2">
                    {pillar.index}
                  </span>
                  
                  {/* Pillar Title */}
                  <h4 className="font-display font-bold text-xs tracking-wider uppercase text-white mb-2 leading-tight">
                    {pillar.title}
                  </h4>
                  
                  {/* Pillar Description */}
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-10">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] font-bold tracking-wider uppercase text-xs hover:gap-3 transition-all duration-300"
              >
                Discover Our Full Philosophy
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Planche Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative select-none"
          >
            {/* Spotlight drop-shadow orange aura */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.2)_0%,transparent_70%)] blur-3xl scale-125 -z-10 pointer-events-none" />
            
            {/* Framed Planche Image in wide landscape ratio to avoid box cropping */}
            <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-[0_0_50px_rgba(255,87,34,0.15)] group aspect-[3/2]">
              <LazyImage
                src="https://images.unsplash.com/photo-1544033527-b192daee1f5b?q=80&w=1200&auto=format&fit=crop"
                alt="PERMAFLY athlete performing a horizontal planche hold on parallel bars"
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-750 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Accent decoration rings */}
            <motion.div 
              animate={{ y: [0, 6, 0], x: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 w-24 h-24 border border-white/10 rounded-xl -z-20 hidden sm:block pointer-events-none" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

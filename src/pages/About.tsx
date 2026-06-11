import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { SEO } from '@/lib/seo'
import { PageTransition } from '@/components/layout/PageTransition'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { team } from '@/data/team'
import { Button } from '@/components/ui/Button'
import { LazyImage } from '@/components/ui/LazyImage'
import { useActiveOnScroll } from '@/hooks/useActiveOnScroll'

export default function About() {
  const activePhilosophyIds = useActiveOnScroll('.philosophy-card')
  const activeCoachIds = useActiveOnScroll('.coach-card')
  const activeVisionaryIds = useActiveOnScroll('.visionary-card')

  // Fade-in animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }

  const staggerContainer = {
    initial: {},
    whileInView: {},
    viewport: { once: true, margin: '-50px' },
    transition: { staggerChildren: 0.15 }
  }

  const cardHover = {
    scale: 1.03,
    borderColor: 'rgba(255, 87, 34, 0.25)',
    boxShadow: '0 10px 30px -10px rgba(255, 87, 34, 0.15)',
    transition: { duration: 0.3, ease: 'easeOut' as const }
  }

  return (
    <PageTransition>
      <SEO
        title="Our Story | PERMAFLY — Movement Engineering"
        description="Born in Delhi, PERMAFLY is a technical laboratory dedicated to the liberation of the human body through precision calisthenics, gymnastics, and parkour."
        path="/about"
      />

      {/* Hero Section */}
      <section className="relative h-[95vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-[#090909]">
        <div className="absolute inset-0 z-0">
          <LazyImage
            src="https://lh3.googleusercontent.com/aida/AP1WRLt9yJF5v-rsN4vfUwBz8DygPQaeiICqVrZW1-0NMGiEMjZSwk5ghVtn3XUs_BnJVooAbStGA99khVCnLSNx23nrlUcsiSRvIrvH8SyVFIUKacXJFGWikO_AG25vS9ON-qEF7JnY0ABpip32BZcHTii_yDYs60eNfvQqvELGvpR5NEoJfkL2D8pGpTA5uV9egKMat-2MncQagaKCkzSFkZlnnnqYPXOyFpKF5fxDM243SotXyRnFiAYEsSA"
            alt="Gymnast handstand training"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-35 mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-[#090909]" />
          <div className="absolute inset-0 bg-radial-glow opacity-30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 0.8, letterSpacing: '0.4em' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="font-mono text-xs text-[var(--color-accent)] tracking-[0.4em] block uppercase"
          >
            EST. 2018 — DELHI, INDIA
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-5xl sm:text-7xl md:text-[96px] lg:text-[110px] leading-[0.95] tracking-tighter text-white uppercase"
          >
            ENGINEERING<br />
            <span className="text-[var(--color-accent)] orange-glow">FREEDOM</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-2xl mx-auto text-base md:text-xl text-[var(--color-text-secondary)] leading-relaxed pt-4"
          >
            Born in the heart of Delhi, Permafly is more than a gym. It is a technical laboratory dedicated to the liberation of the human body through precision engineering and pure movement.
          </motion.p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight size={24} className="rotate-90 text-[var(--color-accent)]" />
        </div>
      </section>

      {/* The Evolution (Timeline) */}
      <section className="py-24 bg-[#090909] border-t border-white/5 relative overflow-hidden">
        <div className="container-site relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky Left Column */}
          <div className="lg:col-span-4 flex flex-col justify-start lg:sticky lg:top-32 h-fit">
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-6 font-display font-black text-4xl md:text-5xl uppercase tracking-tight text-white leading-none">
              THE<br />
              <span className="text-[var(--color-accent)]">EVOLUTION</span>
            </h2>
            <p className="mt-6 text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed">
              Our trajectory from a local experiment to a global standard in bodyweight performance engineering.
            </p>
          </div>

          {/* Right Timeline Column */}
          <div className="lg:col-span-8 relative py-8">
            {/* Core Vertical Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent -translate-x-1/2 opacity-30" />

            <div className="space-y-16 md:space-y-24 relative">
              {/* 2018 */}
              <motion.div 
                {...fadeIn}
                className="flex flex-row items-center md:justify-end group"
              >
                <div className="hidden md:block w-5/12 pr-12 text-right">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2">The Spark in Delhi</h3>
                  <p className="text-xs md:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    Inception of the movement engineering protocol.
                  </p>
                </div>
                <div className="relative z-10 w-8 h-8 rounded-full bg-[var(--color-accent)] border-4 border-[#090909] shadow-[0_0_15px_rgba(255,87,34,0.6)] shrink-0 md:-translate-x-1/2" />
                <div className="flex-1 pl-8 md:pl-0 md:hidden">
                  <span className="font-mono text-xs text-[var(--color-accent)] font-semibold">2018</span>
                  <h3 className="font-display font-bold text-lg text-white mt-1">The Spark in Delhi</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                    Inception of the movement engineering protocol.
                  </p>
                </div>
                <div className="hidden md:block w-5/12 pl-12 text-left">
                  <span className="font-display font-black text-5xl text-white/10 group-hover:text-[var(--color-accent)]/20 transition-colors duration-500">2018</span>
                </div>
              </motion.div>

              {/* 2020 */}
              <motion.div 
                {...fadeIn}
                className="flex flex-row items-center group"
              >
                <div className="hidden md:block w-5/12 pr-12 text-right">
                  <span className="font-display font-black text-5xl text-white/10 group-hover:text-[var(--color-accent)]/20 transition-colors duration-500">2020</span>
                </div>
                <div className="relative z-10 w-8 h-8 rounded-full bg-[var(--color-accent)] border-4 border-[#090909] shadow-[0_0_15px_rgba(255,87,34,0.6)] shrink-0 md:translate-x-1/2" />
                <div className="flex-1 pl-8 md:pl-12">
                  <span className="font-mono text-xs text-[var(--color-accent)] font-semibold">2020</span>
                  <h3 className="font-display font-bold text-lg md:text-2xl text-white mt-1">1000+ Athletes</h3>
                  <p className="text-xs md:text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                    Scaling movement patterns across the subcontinent.
                  </p>
                </div>
              </motion.div>

              {/* 2022 */}
              <motion.div 
                {...fadeIn}
                className="flex flex-row items-center md:justify-end group"
              >
                <div className="hidden md:block w-5/12 pr-12 text-right">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2">The Academy</h3>
                  <p className="text-xs md:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    Codifying our technical curriculum for future coaches.
                  </p>
                </div>
                <div className="relative z-10 w-8 h-8 rounded-full bg-[var(--color-accent)] border-4 border-[#090909] shadow-[0_0_15px_rgba(255,87,34,0.6)] shrink-0 md:-translate-x-1/2" />
                <div className="flex-1 pl-8 md:pl-0 md:hidden">
                  <span className="font-mono text-xs text-[var(--color-accent)] font-semibold">2022</span>
                  <h3 className="font-display font-bold text-lg text-white mt-1">The Academy</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                    Codifying our technical curriculum for future coaches.
                  </p>
                </div>
                <div className="hidden md:block w-5/12 pl-12 text-left">
                  <span className="font-display font-black text-5xl text-white/10 group-hover:text-[var(--color-accent)]/20 transition-colors duration-500">2022</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Machine-Free Philosophy Section */}
      <section className="relative py-24 bg-[#0e0e0e] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none" />
        
        <div className="container-site relative z-10">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16 space-y-4"
          >
            <SectionLabel className="justify-center">Philosophy</SectionLabel>
            <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tight">
              MACHINE-FREE
            </h2>
            <p className="text-[var(--color-accent)] font-mono text-xs uppercase tracking-widest">
              Biological Sovereignty
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12"
          >
            {[
              { stat: '0%', label: 'Machines', desc: 'No treadmills. No mechanical cables. Gravity is your resistance, your body is the engine.' },
              { stat: '100%', label: 'Human Power', desc: 'Unlocking raw structural force. We train kinetic integration, not isolated muscles.' },
              { stat: '360°', label: 'Mobility', desc: 'Restoring functional range. Move in every vector without limitations or restrictions.' }
            ].map((item, index) => {
              const isActive = activePhilosophyIds.includes(index.toString())
              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={cardHover}
                  animate={isActive ? cardHover : undefined}
                  className="glass p-8 md:p-12 rounded-2xl text-center flex flex-col items-center border border-white/5 transition-all duration-300 relative group overflow-hidden philosophy-card"
                  data-id={index.toString()}
                >
                  <div className={`absolute inset-0 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,var(--color-accent),transparent_70%)] pointer-events-none ${
                    isActive ? 'opacity-10' : 'opacity-0 group-hover:opacity-10'
                  }`} />
                  <span className={`font-display font-black text-6xl md:text-7xl text-[var(--color-accent)] block transition-transform duration-300 ${
                    isActive ? 'scale-105' : 'group-hover:scale-105'
                  }`}>
                    {item.stat}
                  </span>
                  <h3 className="font-mono text-sm uppercase tracking-widest text-white mt-4 font-bold">
                    {item.label}
                  </h3>
                  <p className="text-xs md:text-sm text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                  <div className={`bg-[var(--color-accent)] mt-6 transition-all duration-500 ${
                    isActive ? 'h-[2px] w-20 opacity-100' : 'h-[2px] w-12 opacity-30 group-hover:opacity-100 group-hover:w-20'
                  }`} />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* The Visionary (Founder) */}
      <section className="py-24 bg-[#090909] border-t border-white/5 relative">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Portrait Column */}
            <motion.div 
              {...fadeIn}
              className="lg:col-span-5 relative group visionary-card"
              data-id="visionary"
            >
              <div className={`absolute -inset-4 bg-[var(--color-accent)]/10 blur-xl transition-opacity duration-700 pointer-events-none ${
                activeVisionaryIds.includes('visionary') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`} />
              <div className="aspect-[4/5] bg-[#111111] overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative">
                <LazyImage
                  src="https://lh3.googleusercontent.com/aida/AP1WRLs3V1wJteuLqsz5HNFpCYTGQMPRA3BoX09PnrUDqjq-Vu_s5mpNoAyuBRbcPvIqfTOdSCuQ6TK5wrU-MGoR7zd6bYbQNuEmvhcL-fy6owTEkT13MiFhwj52g2sTZ4vg84a3g2R925t7T-JT1YFuiYjeU89pW3HbvXUMS4rdUrFUsyOQOY1qFtFuO1JyTWVk4MSmKfR8bSlh6KTXWlp0XHlM24LkyLHp4Jq0P_oknh1WXjQrFoPb8vQqRA"
                  alt="Rohan Malhotra - Founder of PERMAFLY"
                  width={600}
                  height={750}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    activeVisionaryIds.includes('visionary')
                      ? 'scale-103 grayscale-0'
                      : 'grayscale group-hover:scale-103 group-hover:grayscale-0 hover:scale-103 hover:grayscale-0'
                  }`}
                />
              </div>
            </motion.div>

            {/* Quote/Content Column */}
            <motion.div 
              {...fadeIn}
              className="lg:col-span-7 lg:pl-8 space-y-6"
            >
              <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-[0.3em] font-semibold block">
                The Visionary
              </span>
              <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-none tracking-tight">
                ROHAN <span className="text-[var(--color-accent)]">MALHOTRA</span>
              </h2>
              
              <div className="relative">
                <span className="absolute -top-6 -left-4 font-serif text-8xl text-[var(--color-accent)]/10 select-none">“</span>
                <p className="font-serif italic text-lg md:text-2xl text-[var(--color-text-secondary)] leading-relaxed relative z-10 pt-2">
                  "We are not just training bodies; we are debugging movement software. Every joint is an interface, every muscle a motor. When we strip away the machines, we find the engineering excellence already within us."
                </p>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="h-[1px] w-12 bg-[var(--color-accent)]" />
                <span className="font-mono text-xs text-white uppercase tracking-widest font-semibold">
                  Founder & Movement Engineer
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Elite Force (Coaches) */}
      <section className="py-24 bg-[#0e0e0e] border-t border-white/5 relative">
        <div className="container-site">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <motion.div {...fadeIn} className="space-y-4">
              <SectionLabel>The Instructors</SectionLabel>
              <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-tight leading-none">
                THE <span className="text-[var(--color-accent)]">ELITE FORCE</span>
              </h2>
              <p className="text-[var(--color-text-secondary)] text-sm md:text-base">
                Specialists in the mechanics of human flight.
              </p>
            </motion.div>

            <div className="hidden md:flex gap-4">
              <button aria-label="Previous coach" className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-[var(--color-accent)]/30 text-white transition-all active:scale-95">
                <ChevronLeft size={20} />
              </button>
              <button aria-label="Next coach" className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-[var(--color-accent)]/30 text-[var(--color-accent)] transition-all active:scale-95">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {team.map((member, index) => {
              const isActive = activeCoachIds.includes(member.name)
              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={cardHover}
                  animate={isActive ? cardHover : undefined}
                  className={`glass rounded-2xl overflow-hidden border transition-all duration-300 relative group flex flex-col h-full coach-card ${
                    isActive
                      ? 'border-[var(--color-accent)]/20 shadow-[0_10px_30px_-10px_rgba(255,87,34,0.15)] bg-white/[0.02]'
                      : 'border-white/5 hover:border-[var(--color-accent)]/20'
                  }`}
                  data-id={member.name}
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-[#141414]">
                    <LazyImage
                      src={member.image}
                      alt={`${member.name} - ${member.specialty}`}
                      width={400}
                      height={300}
                      className={`w-full h-full object-cover grayscale transition-all duration-500 ${
                        isActive
                          ? 'scale-103 grayscale-0'
                          : 'grayscale group-hover:scale-103 group-hover:grayscale-0'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] to-transparent opacity-60 pointer-events-none" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-[var(--color-accent)] text-white text-[10px] font-mono font-semibold px-3 py-1 rounded-md uppercase tracking-wider">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div className="space-y-2">
                      <h3 className={`font-display font-bold text-xl transition-colors duration-300 ${
                        isActive ? 'text-[var(--color-accent)]' : 'text-white group-hover:text-[var(--color-accent)]'
                      }`}>
                        {member.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                        <span className="font-mono text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
                          {member.specialty}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mt-4">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#090909] border-t border-white/5">
        <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
        
        <motion.div 
          {...fadeIn}
          className="relative z-10 space-y-8 max-w-3xl"
        >
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl leading-none text-white tracking-tighter uppercase">
            START YOUR <span className="text-[var(--color-accent)] italic font-serif lowercase">story</span>
          </h2>
          
          <p className="text-[var(--color-text-secondary)] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Visit our academy in Shahdara, Delhi. Build structural power, debug physical limits, and engineer true somatic freedom.
          </p>

          <div className="pt-4 flex justify-center">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="glowing-cta group flex items-center justify-center gap-3 px-12 py-5 font-display font-bold uppercase rounded-xl tracking-wider text-base"
            >
              Join the Academy
              <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  )
}

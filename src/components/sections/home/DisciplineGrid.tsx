import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { LazyImage } from '@/components/ui/LazyImage'
import { ArrowRight } from 'lucide-react'

const showcases = [
  {
    index: '01',
    category: 'STRENGTH',
    slug: 'calisthenics',
    title: 'CALISTHENICS',
    description: 'Build superhuman strength and absolute control using only your bodyweight.',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLt9yJF5v-rsN4vfUwBz8DygPQaeiICqVrZW1-0NMGiEMjZSwk5ghVtn3XUs_BnJVooAbStGA99khVCnLSNx23nrlUcsiSRvIrvH8SyVFIUKacXJFGWikO_AG25vS9ON-qEF7JnY0ABpip32BZcHTii_yDYs60eNfvQqvELGvpR5NEoJfkL2D8pGpTA5uV9egKMat-2MncQagaKCkzSFkZlnnnqYPXOyFpKF5fxDM243SotXyRnFiAYEsSA',
    featured: true,
  },
  {
    index: '02',
    category: 'AGILITY',
    slug: 'parkour',
    title: 'PARKOUR & MOVEMENT',
    description: 'Learn to navigate any environment with speed, efficiency, and absolute freedom.',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLs3V1wJteuLqsz5HNFpCYTGQMPRA3BoX09PnrUDqjq-Vu_s5mpNoAyuBRbcPvIqfTOdSCuQ6TK5wrU-MGoR7zd6bYbQNuEmvhcL-fy6owTEkT13MiFhwj52g2sTZ4vg84a3g2R925t7T-JT1YFuiYjeU89pW3HbvXUMS4rdUrFUsyOQOY1qFtFuO1JyTWVk4MSmKfR8bSlh6KTXWlp0XHlM24LkyLHp4Jq0P_oknh1WXjQrFoPb8vQqRA',
    featured: false,
  },
  {
    index: '03',
    category: 'BALANCE',
    slug: 'gymnastics',
    title: 'GYMNASTICS',
    description: 'Build extraordinary body awareness, flexibility, and tumbling skills in a safe environment.',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLs13S9gnLiqgF1zfgtVtZscAdfG4wZKAa3fw9mi6F9FTf-RDB1QCyFgOlGaGsWJDHRQBuVxQdvofrXEq39dCpVlFNhDVXGR1DTmww36si35FYRkzCAtPbqTG6J08GDfTYuP_vuPPndZhJEMkf5n0EUbmN0nGmVobHX6PSw7bubcsQ-jtkXn864ffEHZuNn7HgIIqMrDcCOE5KMQAMmR6I84S5p8Vd7GaFJSUirpVXfuvdv1kJwSj9fKTw',
    featured: false,
  },
  {
    index: '04',
    category: 'FLEXIBILITY',
    slug: 'yoga',
    title: 'YOGA & MOBILITY',
    description: 'Improve range of motion, breathing control, and recovery to enhance your training capacity.',
    image: 'https://login.permafly.in/imgs/202104241512213507095.jpg',
    featured: false,
  },
  {
    index: '05',
    category: 'POWER',
    slug: 'functional',
    title: 'FUNCTIONAL TRAINING',
    description: 'Develop high-intensity compound power and conditioning through real-world movement patterns.',
    image: 'https://www.permafly.in/images/resource/post-thumb-3.jpg',
    featured: false,
  },
  {
    index: '06',
    category: 'FLOW',
    slug: 'movement',
    title: 'MOVEMENT CULTURE',
    description: 'Explore organic ground flow, partner acrobatics, locomotion, and fluid improvisation.',
    image: 'https://www.permafly.in/images/resource/post-thumb-4.jpg',
    featured: false,
  },
  {
    index: '07',
    category: 'LOAD',
    slug: 'free-weights',
    title: 'FREE WEIGHTS',
    description: 'Complement your movement skill with barbell compound lifting and progressive strength programming.',
    image: 'https://www.permafly.in/images/resource/info.jpg',
    featured: false,
  },
  {
    index: '08',
    category: 'COMBAT',
    slug: 'mma',
    title: 'MIXED MARTIAL ARTS',
    description: 'Build striking precision, grappling skills, self-defense, and ultimate combat fitness.',
    image: 'https://login.permafly.in/imgs/202104241541029982550.jpg',
    featured: true,
  },
]

export function DisciplineGrid() {
  return (
    <section 
      style={{ paddingBlock: 'clamp(2.5rem, 6vw, 6rem)' }} 
      className="bg-[#090909] text-white relative overflow-hidden border-t border-white/5"
    >
      <div className="container-site">
        
        {/* Editorial Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight text-white leading-[1.1]">
            OUR DISCIPLINE{' '}
            <span className="font-serif italic lowercase text-[var(--color-accent)] font-normal">
              visual
            </span>{' '}
            RECORDS.
          </h2>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {showcases.map((showcase, i) => {
            const isFeatured = showcase.featured

            return (
              <motion.div
                key={showcase.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`${isFeatured ? 'col-span-2' : 'col-span-1'}`}
              >
                <Link 
                  to={`/classes/${showcase.slug}`}
                  className="group block cursor-pointer h-full relative"
                >
                  <div className={`h-full flex flex-col justify-between rounded-xl bg-white/[0.01] border border-white/5 hover:border-[var(--color-accent)]/20 transition-all duration-300 relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)] md:shadow-none ${
                    isFeatured ? 'lg:flex-row lg:items-stretch' : ''
                  }`}>
                    {/* Image Container */}
                    <div className={`relative overflow-hidden bg-[#111111] stark-shadow-down shrink-0 ${
                      isFeatured ? 'aspect-[4/3] lg:aspect-auto lg:w-1/2' : 'aspect-[4/3] w-full'
                    }`}>
                      <LazyImage
                        src={showcase.image}
                        alt={showcase.title}
                        width={isFeatured ? 600 : 500}
                        height={375}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                      {/* Soft Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                      
                      {/* Featured Accent Line */}
                      {isFeatured && (
                        <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-accent)] hidden lg:block" />
                      )}
                    </div>

                    {/* Text Container */}
                    <div className={`p-6 flex flex-col justify-between flex-grow ${
                      isFeatured ? 'lg:w-1/2 lg:p-8' : ''
                    }`}>
                      <div>
                        {/* Metadata index/category */}
                        <div className="font-display text-xs tracking-[0.2em] text-[var(--color-accent)] uppercase mb-2 font-bold flex items-center gap-1.5">
                          <span>{showcase.index}</span>
                          <span>/</span>
                          <span>{showcase.category}</span>
                          {isFeatured && (
                            <span className="ml-auto bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-[9px] font-extrabold px-2 py-0.5 rounded tracking-normal">
                              FLAGSHIP
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="font-display font-extrabold text-xl md:text-2xl uppercase text-white mb-2 tracking-tight group-hover:text-[var(--color-accent)] transition-colors duration-300">
                          {showcase.title}
                        </h3>

                        {/* Paragraph Description */}
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                          {showcase.description}
                        </p>
                      </div>

                      {/* Action trigger text for desktop */}
                      <div className="mt-6 flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/40 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                        <span>EXPLORE PROGRAM</span>
                        <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Rising bottom border hover effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>
                </Link>
              </motion.div>
            )
          })}

          {/* 9th Conversion Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-2"
          >
            <Link 
              to="/contact"
              className="group block cursor-pointer h-full relative"
            >
              <div className="h-full flex flex-col justify-between rounded-xl bg-[var(--color-accent)] p-8 md:p-10 text-white relative overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,87,34,0.3)] min-h-[260px] lg:min-h-0">
                {/* Diagonal lines texture overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0.05)_75%,transparent_75%,transparent)] bg-[length:40px_40px] opacity-20 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="font-display text-[10px] md:text-xs tracking-[0.2em] text-white/80 uppercase mb-4 font-bold">
                    09 / ACTION REQUIRED
                  </div>
                  
                  <h3 className="font-display font-black text-2xl md:text-3xl uppercase leading-[1.1] tracking-tight text-white mb-3 max-w-md">
                    START TRAINING TODAY
                  </h3>
                  
                  <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-md font-medium">
                    Book a free trial. Limitless physical capability awaits. Delhi&apos;s elite movement academy is ready for you.
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex items-center gap-3 font-display font-bold text-xs md:text-sm tracking-widest uppercase text-white">
                  <span>BOOK FREE TRIAL NOW</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[var(--color-accent)] transition-all duration-300">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
        
      </div>
    </section>
  )
}

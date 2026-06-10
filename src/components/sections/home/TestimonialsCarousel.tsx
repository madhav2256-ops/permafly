import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

const reviews = [
  {
    author: 'Sumit Verma',
    specialty: 'Calisthenics Athlete',
    pullQuote: 'The safe place to grow',
    text: 'The best gym in Delhi for Gymnastics. Extremely accommodating, encouraging and professional environment. I feel safe being spotted for new elements. They truly help you push your limits.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop&auto=format',
    rating: 5,
  },
  {
    author: 'Rajeev Saini',
    specialty: 'Parkour Practitioner',
    pullQuote: 'Zero hesitation flow',
    text: 'This gym is amazing, trainers are exceptionally good and professional. They have tons of space, letting you easily execute complex combinations and runs without any hesitation.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop&auto=format',
    rating: 5,
  },
  {
    author: 'Ashu Pandey',
    specialty: 'Gymnastics Member',
    pullQuote: 'Unmatched elite training',
    text: 'Great facility, trainers are highly trained and professional. Value for money. PermaFly is undoubtedly the best in Delhi. Staff attitude is so professional, they truly care about you.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop&auto=format',
    rating: 5,
  },
  {
    author: 'Simran Kaur',
    specialty: 'Movement Practitioner',
    pullQuote: 'Pure physical freedom',
    text: 'Ground flow and animal movements have changed how I look at fitness. The coaches are incredibly skilled and create a community where everyone can learn and grow at their own pace.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&fit=crop&auto=format',
    rating: 5,
  },
  {
    author: 'Rohan Mehta',
    specialty: 'MMA Practitioner',
    pullQuote: 'Elite combat rigor',
    text: 'Building striking precision and grappling technique here has been a game-changer. The sparring sessions are technical, controlled, and extremely intense for conditioning.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&fit=crop&auto=format',
    rating: 5,
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  // Update items per view based on viewport width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = reviews.length - itemsPerView

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  return (
    <section 
      style={{ paddingBlock: 'clamp(1rem, 4vw, 4rem)' }} 
      className="bg-[#090909] text-white relative overflow-hidden"
    >
      <div className="container-site relative z-10">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="mt-4 font-display font-black text-3xl md:text-5xl uppercase tracking-tight text-white leading-[1.1]">
              VOICES OF THE{' '}
              <span className="font-serif italic lowercase text-[var(--color-accent)] font-normal">
                elite
              </span>.
            </h2>
          </motion.div>

          {/* Navigation Arrows */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 self-end"
          >
            <button 
              onClick={prevSlide} 
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={nextSlide} 
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Carousel Window */}
        <div className="overflow-hidden relative w-full -mx-4 px-4 py-8">
          <motion.div 
            animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="flex gap-6 md:gap-8"
            style={{ width: `${(reviews.length / itemsPerView) * 100}%` }}
          >
            {reviews.map((review, i) => (
              <div
                key={review.author}
                style={{ width: `calc(${100 / reviews.length}% - ${(6 * (reviews.length - 1)) / reviews.length}px)` }}
                className="shrink-0"
              >
                <div
                  className="flex flex-col justify-between p-8 rounded-2xl bg-[#141414] border border-white/5 hover:border-[var(--color-accent)]/20 shadow-2xl transition-all duration-300 relative group h-[320px] md:h-[300px] overflow-hidden"
                >
                  {/* Subtle hover glow overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_bottom_right,var(--color-accent-glow),transparent_60%)] pointer-events-none" />

                  <div className="relative z-10">
                    {/* Star Rating & Pull Quote */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1 text-[var(--color-accent)]">
                        {[...Array(review.rating)].map((_, idx) => (
                          <Star key={idx} size={16} className="fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Pull Quote Hook */}
                    <h4 className="font-display font-black text-lg md:text-xl text-white uppercase tracking-tight mb-3">
                      &ldquo;{review.pullQuote}&rdquo;
                    </h4>

                    {/* Main Quote Text */}
                    <p className="text-xs md:text-sm leading-relaxed text-[var(--color-text-secondary)] line-clamp-4">
                      {review.text}
                    </p>
                  </div>
                  
                  {/* Author Profile */}
                  <div className="flex items-center gap-4 mt-6 pt-5 border-t border-white/5 relative z-10">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10"
                    />
                    <div>
                      <div className="font-display uppercase tracking-[0.2em] text-[var(--color-text-primary)] font-bold text-xs">
                        {review.author}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mt-0.5">
                        {review.specialty}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bullet Pagination Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {[...Array(maxIndex + 1)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-[var(--color-accent)]' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { testimonials as localTestimonials } from '@/data/testimonials'
import { fetchGoogleReviews } from '@/lib/googleReviews'
import type { Review } from '@/types'

export function TestimonialsCarousel() {
  const [reviews, setReviews] = useState<Review[]>(localTestimonials)

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY
    const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID

    if (apiKey && placeId) {
      fetchGoogleReviews(apiKey, placeId)
        .then((googleReviews) => {
          if (googleReviews && googleReviews.length > 0) {
            // Deduplicate reviews by author name to avoid duplicates
            const googleAuthors = new Set(googleReviews.map(r => r.author.toLowerCase()))
            const filteredLocal = localTestimonials.filter(
              r => !googleAuthors.has(r.author.toLowerCase())
            )
            setReviews([...googleReviews, ...filteredLocal])
          }
        })
        .catch((err) => {
          console.error('Failed to fetch live Google reviews, using fallback:', err)
        })
    }
  }, [])

  // Duplicate reviews array to create a seamless infinite scroll loop
  const duplicatedReviews = [...reviews, ...reviews]

  return (
    <section 
      style={{ paddingBlock: 'clamp(2rem, 5vw, 5rem)' }} 
      className="bg-[#090909] text-white relative overflow-hidden"
    >
      <div className="container-site relative z-10">
        
        {/* Header (No navigation controls) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="mt-4 font-display font-black text-4xl md:text-5xl uppercase tracking-tight text-white leading-[1.1]">
              VOICES OF THE{' '}
              <span className="font-serif italic lowercase text-[var(--color-accent)] font-normal">
                elite
              </span>.
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Marquee Outer Container with horizontal fade-out masks */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#090909] via-[#090909]/80 to-transparent z-20 pointer-events-none" />
        
        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#090909] via-[#090909]/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Inner Flex container */}
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] py-2 cursor-grab active:cursor-grabbing">
          {duplicatedReviews.map((review, idx) => (
            <div
              key={`${review.author}-${idx}`}
              className="w-[280px] sm:w-[320px] md:w-[360px] shrink-0"
            >
              <div
                className="flex flex-col justify-between p-8 rounded-2xl bg-[#141414] border border-white/5 hover:border-[var(--color-accent)]/20 shadow-2xl transition-all duration-300 relative group h-[320px] md:h-[300px] overflow-hidden"
              >
                {/* Subtle hover glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_bottom_right,var(--color-accent-glow),transparent_60%)] pointer-events-none" />

                <div className="relative z-10">
                  {/* Star Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1 text-[var(--color-accent)]">
                      {[...Array(review.rating)].map((_, starIdx) => (
                        <Star key={starIdx} size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Pull Quote Hook */}
                  {review.pullQuote && (
                    <h4 className="font-display font-black text-lg md:text-xl text-white uppercase tracking-tight mb-3 line-clamp-1">
                      &ldquo;{review.pullQuote}&rdquo;
                    </h4>
                  )}

                  {/* Main Quote Text */}
                  <p className="text-xs md:text-sm leading-relaxed text-[var(--color-text-secondary)] line-clamp-4">
                    {review.text}
                  </p>
                </div>
                
                {/* Author Profile */}
                <div className="flex items-center gap-4 mt-6 pt-5 border-t border-white/5 relative z-10">
                  {review.avatar && (
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10"
                    />
                  )}
                  <div>
                    <div className="font-display uppercase tracking-[0.2em] text-[var(--color-text-primary)] font-bold text-xs">
                      {review.author}
                    </div>
                    {review.specialty && (
                      <div className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mt-0.5">
                        {review.specialty}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

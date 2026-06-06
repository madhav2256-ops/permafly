import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { SectionLabel } from '@/components/ui/SectionLabel'
import 'swiper/css'
import 'swiper/css/pagination'

export function TestimonialsCarousel() {
  return (
    <section style={{ paddingBlock: 'var(--section-py)' }} className="bg-[var(--color-bg-surface)]">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[clamp(2rem,4vw,4rem)]"
        >
          <SectionLabel className="justify-center">Testimonials</SectionLabel>
          <h2 className="mt-4" style={{ fontSize: 'var(--text-h2)', fontWeight: 600 }}>
            What Our <span className="text-[var(--color-accent)]">Members</span> Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="glass rounded-[var(--radius-lg)] p-[clamp(1.25rem,4vw,2rem)] h-full flex flex-col">
                  <Quote size={32} className="text-[var(--color-accent)] opacity-30 mb-4" />
                  <p className="text-[var(--color-text-secondary)] leading-relaxed flex-1 text-sm">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star key={j} size={14} className="fill-[var(--color-accent)] text-[var(--color-accent)]" />
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold text-sm">
                        {review.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--color-text-primary)]">{review.author}</p>
                        <p className="text-xs text-[var(--color-text-muted)]">Verified Member</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

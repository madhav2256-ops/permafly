import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'
import { SEO } from '@/lib/seo'
import { PageTransition } from '@/components/layout/PageTransition'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { blogPosts } from '@/data/blogPosts'

export default function Blog() {
  return (
    <PageTransition>
      <SEO
        title="Blog & Articles | PERMAFLY — Fitness, Parkour & Training Tips"
        description="Read the latest articles from PERMAFLY on parkour, calisthenics, gymnastics, yoga, and fitness training tips. Expert advice from Delhi's top coaches."
        path="/blog"
      />

      <section className="pt-32 pb-12 bg-[var(--color-bg-primary)]">
        <div className="container-site">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>Blog</SectionLabel>
            <h1 className="mt-4" style={{ fontSize: 'var(--text-h1)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Updates & <span className="text-[var(--color-accent)]">Articles</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 bg-[var(--color-bg-primary)]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-[var(--radius-xl)] overflow-hidden bg-[var(--color-bg-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-accent)] transition-all duration-300 hover:scale-[1.01] h-full"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-black">
                    <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-surface)] to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)] mb-3">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm text-[var(--color-text-secondary)] line-clamp-2">{post.excerpt}</p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-[var(--color-border)]/50">
                      <span className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] font-medium group-hover:gap-2 transition-all">
                        Read more <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

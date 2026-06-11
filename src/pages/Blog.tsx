import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Search } from 'lucide-react'
import { SEO } from '@/lib/seo'
import { PageTransition } from '@/components/layout/PageTransition'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { blogPosts } from '@/data/blogPosts'
import { useActiveOnScroll } from '@/hooks/useActiveOnScroll'

export default function Blog() {
  const activeBlogSlugs = useActiveOnScroll('.blog-post-card')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  // Helper to resolve category dynamically from slug
  const getCategory = (slug: string) => {
    if (slug.includes('academy')) return 'Academy'
    if (slug.includes('future') || slug.includes('today') || slug.includes('discipline')) return 'Discipline'
    return 'General'
  }

  // Format date helper (e.g. 2026-06-06 -> JUN 6, 2026)
  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr)
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }).toUpperCase()
    } catch {
      return dateStr.toUpperCase()
    }
  }

  // Filter logic
  const filteredPosts = blogPosts.filter(post => {
    const category = getCategory(post.slug)
    const matchesCategory = activeCategory === 'All' || category.toLowerCase() === activeCategory.toLowerCase()
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
  }

  const gridContainer = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.1 }
    }
  }

  return (
    <PageTransition>
      <SEO
        title="Blog & Articles | PERMAFLY — Fitness, Parkour & Training Tips"
        description="Read the latest articles from PERMAFLY on parkour, calisthenics, gymnastics, yoga, and fitness training tips. Expert advice from Delhi's top coaches."
        path="/blog"
      />

      {/* Atmospheric Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[var(--color-accent-glow)] blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--color-accent-glow)]/50 blur-[120px] rounded-full" />
      </div>

      <section className="relative z-10 bg-[var(--color-bg-primary)]" style={{ paddingTop: 'clamp(6rem, 10vw, 9rem)', paddingBottom: 'var(--section-py-sm)' }}>
        <div className="container-site">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}>
            <SectionLabel>PERMAFLY JOURNAL</SectionLabel>
            <h1 className="mt-4 font-display font-black tracking-tighter text-white uppercase leading-none" style={{ fontSize: 'var(--text-h1)' }}>
              UPDATES &amp; <span className="text-[var(--color-accent)] orange-glow">ARTICLES</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[var(--color-bg-primary)]" style={{ paddingBottom: 'var(--section-py)' }}>
        <div className="container-site">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[var(--color-text-secondary)]">
                <Search size={18} />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[var(--color-bg-surface)] border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none transition-all py-3 pl-12 pr-4 rounded-xl text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] text-sm"
                placeholder="Search articles..."
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2.5">
              {['All', 'Discipline', 'Academy'].map((cat) => {
                const isActive = activeCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 border ${
                      isActive
                        ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-white shadow-[0_0_15px_rgba(255,87,34,0.3)]'
                        : 'bg-[var(--color-bg-surface)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-accent)]'
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Articles Grid */}
          <AnimatePresence mode="wait">
            {filteredPosts.length > 0 ? (
              <motion.div
                key="grid"
                variants={gridContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-2"
                style={{ gap: 'var(--gap-md)' }}
              >
                {filteredPosts.map((post) => {
                  const category = getCategory(post.slug)
                  const isActive = activeBlogSlugs.includes(post.slug)
                  return (
                    <motion.div
                      key={post.slug}
                      variants={fadeIn}
                      className="h-full blog-post-card"
                      data-id={post.slug}
                    >
                      <Link
                        to={`/blog/${post.slug}`}
                        className={`group flex flex-col rounded-[var(--radius-xl)] overflow-hidden bg-[var(--color-bg-surface)] border transition-all duration-300 h-full shadow-lg ${
                          isActive
                            ? 'border-[var(--color-border-accent)] scale-[1.01] shadow-[0_10px_30px_-10px_rgba(255,87,34,0.15)] bg-white/[0.01]'
                            : 'border-[var(--color-border)] hover:border-[var(--color-border-accent)] hover:scale-[1.01] hover:shadow-[0_10px_30px_-10px_rgba(255,87,34,0.15)]'
                        }`}
                      >
                        {/* Thumbnail Wrap */}
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0a0a0a]">
                          <img
                            src={post.image}
                            alt={post.title}
                            loading="lazy"
                            className={`w-full h-full object-cover transition-all duration-700 ${
                              isActive
                                ? 'opacity-90 grayscale-0 scale-[1.03]'
                                : 'grayscale opacity-75 group-hover:opacity-90 group-hover:grayscale-0 group-hover:scale-[1.03]'
                            }`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-surface)] via-transparent to-transparent pointer-events-none" />
                          <div className="absolute top-4 left-4">
                            <span className="bg-[var(--color-accent-glow)] backdrop-blur-md text-[var(--color-accent)] font-display font-bold text-[10px] px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-[var(--color-accent)]/20 shadow-md">
                              {category}
                            </span>
                          </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="inline-flex items-center gap-1 font-display text-[10px] font-semibold tracking-wider text-[var(--color-text-secondary)] uppercase">
                              <Calendar size={11} className="text-[var(--color-accent)] shrink-0" />
                              {formatDate(post.date)}
                            </span>
                            <span className="text-[var(--color-text-muted)]">•</span>
                            <span className="font-display text-[10px] font-semibold tracking-wider text-[var(--color-text-secondary)] uppercase">
                              {post.readTime.toUpperCase()}
                            </span>
                          </div>

                          <h2 className={`font-display font-bold text-xl md:text-2xl transition-colors duration-300 leading-tight ${
                            isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)]'
                          }`}>
                            {post.title}
                          </h2>
                          <p className="mt-3 text-sm text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
                            {post.excerpt}
                          </p>

                          {/* Read More Trigger */}
                          <div className="mt-auto pt-6 border-t border-[var(--color-border)]/50">
                            <span className="inline-flex items-center gap-2 text-xs font-display font-bold text-[var(--color-accent)] uppercase tracking-wider group/link">
                              Read More
                              <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1.5" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-[var(--radius-xl)]"
              >
                <p className="text-[var(--color-text-secondary)] font-medium">No articles match your search criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setActiveCategory('All')
                  }}
                  className="mt-4 px-6 py-2.5 bg-[var(--color-accent)] text-white text-xs font-display font-bold uppercase tracking-wider rounded-full hover:bg-[var(--color-accent-hover)] transition-all glowing-cta"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  )
}

import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { SEO } from '@/lib/seo'
import { PageTransition } from '@/components/layout/PageTransition'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { blogPosts } from '@/data/blogPosts'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)
  const progress = useScrollProgress()

  if (!post) return <Navigate to="/blog" replace />

  return (
    <PageTransition>
      <SEO
        title={`${post.title} | PERMAFLY Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />

      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />

      <article className="pt-32 pb-24 bg-[var(--color-bg-primary)]">
        <div className="container-site max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors mb-8">
              <ArrowLeft size={16} /> Back to Blog
            </Link>

            <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)] mb-4">
              <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
              <span>By {post.author}</span>
            </div>

            <h1 className="text-[var(--text-h1)] font-bold tracking-tight leading-[1.1]">
              {post.title}
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8">
            <div className="rounded-[var(--radius-xl)] overflow-hidden aspect-[16/9] mb-12">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="eager" />
            </div>

            <div className="prose prose-invert max-w-none
              [&_p]:text-[var(--color-text-secondary)] [&_p]:leading-relaxed [&_p]:mb-6
              [&_h2]:text-[var(--color-text-primary)] [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4
              [&_h3]:text-[var(--color-text-primary)] [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3
              [&_strong]:text-[var(--color-text-primary)]
              [&_a]:text-[var(--color-accent)] [&_a:hover]:underline
              [&_ul]:space-y-2 [&_li]:text-[var(--color-text-secondary)]
            ">
              {post.content.split('\n\n').map((block, i) => {
                if (block.startsWith('## ')) {
                  return <h2 key={i}>{block.replace('## ', '')}</h2>
                }
                return <p key={i}>{block}</p>
              })}
            </div>
          </motion.div>
        </div>
      </article>
    </PageTransition>
  )
}

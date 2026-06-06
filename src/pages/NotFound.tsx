import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'
import { SEO } from '@/lib/seo'
import { PageTransition } from '@/components/layout/PageTransition'

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="404 — Page Not Found | PERMAFLY" description="The page you're looking for doesn't exist." />
      <section className="min-h-screen flex items-center justify-center bg-[var(--color-bg-primary)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4"
        >
          <h1 className="text-[8rem] md:text-[12rem] font-extrabold leading-none text-[var(--color-accent)] opacity-20">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] -mt-8">
            Page Not Found
          </h2>
          <p
            className="mt-4 text-[var(--color-text-secondary)]"
            style={{
              display: 'block',
              margin: '1rem auto 0 auto',
              maxWidth: '448px',
              textAlign: 'center',
              width: '100%'
            }}
          >{"Looks like you went off-course. Even the best parkour athletes miss a landing sometimes."}</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-[var(--radius-md)] hover:bg-[var(--color-accent-hover)] hover:scale-[1.03] transition-all duration-200"
          >
            <Home size={18} /> Back to Home
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  )
}

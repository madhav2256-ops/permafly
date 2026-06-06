import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { cn } from '@/lib/utils'
import type { NavLink } from '@/types'

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Classes', href: '/classes' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollDirection, scrollY } = useScrollDirection()
  const location = useLocation()

  const isScrolled = scrollY > 50
  const isHidden = scrollDirection === 'down' && scrollY > 300 && !mobileOpen

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'backdrop-blur-xl border-b border-[var(--color-border)]'
            : 'bg-transparent',
          isHidden ? '-translate-y-full' : 'translate-y-0'
        )}
        style={isScrolled ? { backgroundColor: 'rgba(26, 26, 26, 0.8)' } : undefined}
      >
        <nav className="container-site flex items-center justify-between" style={{ height: 'clamp(3.5rem, 6vw, 4.5rem)' }} aria-label="Main navigation">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0" aria-label="PERMAFLY home">
            <div className="w-8 h-8 rounded-[var(--radius-sm)] overflow-hidden shrink-0">
              <img
                src="https://www.permafly.in/images/logo.png"
                alt="PERMAFLY logo"
                width="32"
                height="32"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg font-bold text-[var(--color-text-primary)] tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
              PERMAFLY
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-[var(--radius-md)] transition-all duration-200',
                  location.pathname === link.href
                    ? 'text-[var(--color-accent)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/5'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 px-5 py-2.5 text-sm font-semibold bg-[var(--color-accent)] text-white rounded-[var(--radius-md)] hover:bg-[var(--color-accent-hover)] hover:scale-[1.03] hover:shadow-[0_0_30px_var(--color-accent-glow)] transition-all duration-200"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg-primary)]/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-6" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'text-2xl font-semibold transition-colors',
                      location.pathname === link.href
                        ? 'text-[var(--color-accent)]'
                        : 'text-[var(--color-text-primary)] hover:text-[var(--color-accent)]'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.3 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 px-8 py-3 text-lg font-semibold bg-[var(--color-accent)] text-white rounded-[var(--radius-md)] hover:bg-[var(--color-accent-hover)] transition-all"
                >
                  Join Us
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

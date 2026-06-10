import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

function SocialIcon({ platform }: { platform: string }) {
  const icons: Record<string, React.ReactNode> = {
    facebook: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
    instagram: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
    youtube: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
    twitter: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  }
  return <>{icons[platform]}</>
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#111111] border-t-2 border-[var(--color-accent)]">
      <div className="container-site" style={{ paddingBlock: 'clamp(2.5rem, 6vw, 5rem)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: 'clamp(1.5rem, 4vw, 3rem)' }}>
          {/* Brand */}
          <div className="flex flex-col gap-1">
            <Link to="/" className="flex flex-col gap-1.5 mb-4 group">
              <div className="flex items-center gap-3">
                <img
                  src="https://www.permafly.in/images/logo.png"
                  alt="PERMAFLY logo"
                  width="36"
                  height="36"
                  className="w-9 h-9 object-contain group-hover:rotate-12 transition-transform duration-300"
                />
                <span className="text-xl font-bold text-[var(--color-text-primary)]">PERMAFLY</span>
              </div>
              <span className="font-display text-[9px] tracking-[0.3em] text-[var(--color-accent)] font-bold ml-12 uppercase leading-none">
                FLY WITH US
              </span>
            </Link>
            
            <p className="text-sm text-[var(--color-text-secondary)] mb-6 leading-relaxed">
              We believe the human body is the ultimate instrument of power. No machines, no shortcuts — just raw physics and relentless commitment.
            </p>
            <div className="flex gap-3">
              {[
                { platform: 'facebook', url: siteConfig.socials.facebook },
                { platform: 'instagram', url: siteConfig.socials.instagram },
                { platform: 'youtube', url: siteConfig.socials.youtube },
                { platform: 'twitter', url: siteConfig.socials.twitter },
              ].map(({ platform, url }) => (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer" aria-label={`PERMAFLY on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-glow)] transition-all">
                  <SocialIcon platform={platform} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-[0.12em] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Classes', href: '/classes' },
                { label: 'Schedule', href: '/schedule' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
                { label: 'Member Login', href: siteConfig.socials.login },
              ].map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('http') ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-[0.12em] mb-4">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                'Gymnastics', 'Parkour & Freerunning', 'Calisthenics', 'Yoga',
                'Functional Training', 'Movement Culture', 'Free Weights', 'Mixed Martial Arts',
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-[var(--color-text-secondary)]">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-[0.12em] mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-[var(--color-text-secondary)]">
                <MapPin size={16} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone[0].replace(/[\s-]/g, '')}`} className="flex gap-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                  <Phone size={16} className="text-[var(--color-accent)] shrink-0" />
                  <span>{siteConfig.phone[0]}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex gap-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                  <Mail size={16} className="text-[var(--color-accent)] shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex gap-3 text-sm text-[var(--color-text-secondary)]">
                <Clock size={16} className="text-[var(--color-accent)] shrink-0" />
                <div>
                  <div>Mon – Sat: {siteConfig.hours.weekdays}</div>
                  <div>Sunday: {siteConfig.hours.sunday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Giant outline brand banner */}
        <div className="w-full overflow-hidden select-none pointer-events-none mt-12 md:mt-16 mb-4 flex justify-center items-center">
          <span className="font-display font-black tracking-widest text-[clamp(36px,8vw,110px)] uppercase leading-none text-transparent" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.03)' }}>
            BUILT FOR GRAVITY
          </span>
        </div>

        {/* Bottom bar */}
        <div className="pt-[clamp(1.5rem,3vw,2rem)] mt-[clamp(2rem,4vw,3rem)] border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {currentYear} PERMAFLY. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            Fly with Us — Delhi&apos;s First Parkour & Calisthenics Academy
          </p>
        </div>
      </div>
    </footer>
  )
}

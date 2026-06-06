import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { MapPin, Phone, Mail, Clock, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react'
import { SEO } from '@/lib/seo'
import { PageTransition } from '@/components/layout/PageTransition'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { siteConfig } from '@/data/siteConfig'

interface FormData {
  name: string
  email: string
  phone: string
  interest: string
  message: string
}

export default function Contact() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, trigger } = useForm<FormData>()

  const onSubmit = (_data: FormData) => {
    setSubmitted(true)
  }

  const nextStep = async () => {
    const valid = await trigger(['name', 'email', 'phone'])
    if (valid) setStep(2)
  }

  return (
    <PageTransition>
      <SEO
        title="Contact Us | PERMAFLY — Vishwas Nagar, Shahdara, Delhi"
        description="Get in touch with PERMAFLY. Visit us at 86, 60FT Main Road, Vishwas Nagar, Shahdara, Delhi-110032. Call +91 948-599-3322 or email info@permafly.in."
        path="/contact"
      />

      <section className="bg-[var(--color-bg-primary)]" style={{ paddingTop: 'clamp(6rem, 10vw, 9rem)', paddingBottom: 'var(--section-py-sm)' }}>
        <div className="container-site">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>Contact Us</SectionLabel>
            <h1 className="mt-4" style={{ fontSize: 'var(--text-h1)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Let&apos;s <span className="text-[var(--color-accent)]">Connect</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-primary)]" style={{ paddingBottom: 'var(--section-py)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 'var(--gap-lg)' }}>
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="rounded-[var(--radius-xl)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] p-8">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <CheckCircle size={64} className="text-[var(--color-accent)] mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">Message Sent!</h3>
                    <p className="mt-2 text-[var(--color-text-secondary)]">We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <>
                    {/* Progress */}
                    <div className="flex gap-2 mb-8">
                      <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-border)]'} transition-colors`} />
                      <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-border)]'} transition-colors`} />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <AnimatePresence mode="wait">
                        {step === 1 && (
                          <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-5">
                            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Your Details</h3>
                            <div>
                              <label htmlFor="name" className="block text-sm text-[var(--color-text-secondary)] mb-1.5">Name *</label>
                              <input id="name" aria-required="true" {...register('name', { required: 'Name is required' })} className="w-full px-4 py-3 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="Your full name" />
                              {errors.name && <p role="alert" className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
                            </div>
                            <div>
                              <label htmlFor="email" className="block text-sm text-[var(--color-text-secondary)] mb-1.5">Email *</label>
                              <input id="email" type="email" aria-required="true" {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })} className="w-full px-4 py-3 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="your@email.com" />
                              {errors.email && <p role="alert" className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
                            </div>
                            <div>
                              <label htmlFor="phone" className="block text-sm text-[var(--color-text-secondary)] mb-1.5">Phone *</label>
                              <input id="phone" type="tel" aria-required="true" {...register('phone', { required: 'Phone is required' })} className="w-full px-4 py-3 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="+91 98765 43210" />
                              {errors.phone && <p role="alert" className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
                            </div>
                            <button type="button" onClick={nextStep} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-[var(--radius-md)] hover:bg-[var(--color-accent-hover)] transition-all">
                              Next <ArrowRight size={16} />
                            </button>
                          </motion.div>
                        )}

                        {step === 2 && (
                          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }} className="space-y-5">
                            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Your Interest</h3>
                            <div>
                              <label htmlFor="interest" className="block text-sm text-[var(--color-text-secondary)] mb-1.5">Interested In</label>
                              <select id="interest" {...register('interest')} className="w-full px-4 py-3 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors">
                                <option value="">Select a discipline</option>
                                <option value="gymnastics">Gymnastics</option>
                                <option value="parkour">Parkour & Freerunning</option>
                                <option value="calisthenics">Calisthenics</option>
                                <option value="yoga">Yoga</option>
                                <option value="functional">Functional Training</option>
                                <option value="mma">Mixed Martial Arts</option>
                                <option value="all">All / Undecided</option>
                              </select>
                            </div>
                            <div>
                              <label htmlFor="message" className="block text-sm text-[var(--color-text-secondary)] mb-1.5">Message</label>
                              <textarea id="message" rows={4} {...register('message')} className="w-full px-4 py-3 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none" placeholder="Tell us about your fitness goals..." />
                            </div>
                            <div className="flex gap-3">
                              <button type="button" onClick={() => setStep(1)} className="flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] text-[var(--color-text-secondary)] rounded-[var(--radius-md)] hover:border-[var(--color-border-accent)] transition-all">
                                <ArrowLeft size={16} /> Back
                              </button>
                              <button type="submit" className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-[var(--radius-md)] hover:bg-[var(--color-accent-hover)] transition-all">
                                Send Message <ArrowRight size={16} />
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  </>
                )}
              </div>
            </motion.div>

            {/* Contact Info + Map */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }} className="space-y-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-accent-glow)] flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text-primary)]">Visit Us</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] mt-1">{siteConfig.address}</p>
                    <a href={siteConfig.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-accent)] hover:underline mt-1 inline-block">
                      Get Directions →
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-accent-glow)] flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text-primary)]">Call Us</h3>
                    {siteConfig.phone.map((p) => (
                      <a key={p} href={`tel:${p.replace(/[\s-]/g, '')}`} className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors mt-1">{p}</a>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-accent-glow)] flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text-primary)]">Email</h3>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors mt-1 inline-block">{siteConfig.email}</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-accent-glow)] flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text-primary)]">Hours</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] mt-1">Mon – Sat: {siteConfig.hours.weekdays}</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">Sunday: {siteConfig.hours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-[var(--radius-xl)] overflow-hidden border border-[var(--color-border)] aspect-video">
                <iframe
                  src={siteConfig.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PERMAFLY location map"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

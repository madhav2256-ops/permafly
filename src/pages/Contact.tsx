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

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  }

  return (
    <PageTransition>
      <SEO
        title="Contact Us | PERMAFLY — Vishwas Nagar, Shahdara, Delhi"
        description="Get in touch with PERMAFLY. Visit us at 86, 60FT Main Road, Vishwas Nagar, Shahdara, Delhi-110032. Call +91 948-599-3322 or email info@permafly.in."
        path="/contact"
      />

      {/* Atmospheric Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[var(--color-accent-glow)] blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--color-accent-glow)]/50 blur-[120px] rounded-full" />
      </div>

      {/* Section Header */}
      <section className="relative z-10 bg-[var(--color-bg-primary)]" style={{ paddingTop: 'clamp(6rem, 10vw, 9rem)', paddingBottom: 'var(--section-py-sm)' }}>
        <div className="container-site">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}>
            <SectionLabel>PERMAFLY CONNECT</SectionLabel>
            <h1 className="mt-4 font-display font-black tracking-tighter text-white uppercase leading-none" style={{ fontSize: 'var(--text-h1)' }}>
              LET'S <span className="text-[var(--color-accent)] orange-glow">CONNECT</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="relative z-10 bg-[var(--color-bg-primary)]" style={{ paddingBottom: 'var(--section-py)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 'var(--gap-lg)' }}>
            
            {/* Left Column: Details & Map */}
            <motion.div {...fadeIn} className="space-y-8">
              {/* Contact Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 'var(--gap-sm)' }}>
                {/* Visit Us */}
                <div className="glass p-6 rounded-[var(--radius-xl)] border border-[var(--color-border)] hover:border-[var(--color-border-accent)] hover:bg-white/[0.02] transition-all duration-300">
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-accent-glow)] flex items-center justify-center mb-4 border border-[var(--color-accent)]/20">
                    <MapPin size={18} className="text-[var(--color-accent)]" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white uppercase tracking-wider mb-2">Visit Us</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {siteConfig.address}
                  </p>
                  <a href={siteConfig.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--color-accent)] font-mono text-[10px] tracking-wider uppercase font-semibold mt-3 hover:underline">
                    Get Directions →
                  </a>
                </div>

                {/* Call Us */}
                <div className="glass p-6 rounded-[var(--radius-xl)] border border-[var(--color-border)] hover:border-[var(--color-border-accent)] hover:bg-white/[0.02] transition-all duration-300">
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-accent-glow)] flex items-center justify-center mb-4 border border-[var(--color-accent)]/20">
                    <Phone size={18} className="text-[var(--color-accent)]" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white uppercase tracking-wider mb-2">Call Us</h3>
                  <div className="space-y-1">
                    {siteConfig.phone.map((p) => (
                      <a key={p} href={`tel:${p.replace(/[\s-]/g, '')}`} className="block text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">{p}</a>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="glass p-6 rounded-[var(--radius-xl)] border border-[var(--color-border)] hover:border-[var(--color-border-accent)] hover:bg-white/[0.02] transition-all duration-300">
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-accent-glow)] flex items-center justify-center mb-4 border border-[var(--color-accent)]/20">
                    <Mail size={18} className="text-[var(--color-accent)]" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white uppercase tracking-wider mb-2">Email</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors break-all block">{siteConfig.email}</a>
                </div>

                {/* Hours */}
                <div className="glass p-6 rounded-[var(--radius-xl)] border border-[var(--color-border)] hover:border-[var(--color-border-accent)] hover:bg-white/[0.02] transition-all duration-300">
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-accent-glow)] flex items-center justify-center mb-4 border border-[var(--color-accent)]/20">
                    <Clock size={18} className="text-[var(--color-accent)]" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white uppercase tracking-wider mb-2">Hours</h3>
                  <p className="text-xs text-[var(--color-text-secondary)]">Mon – Sat: {siteConfig.hours.weekdays}</p>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">Sunday: {siteConfig.hours.sunday}</p>
                </div>
              </div>

              {/* Map Embedded Container */}
              <div className="relative w-full aspect-video rounded-[var(--radius-xl)] overflow-hidden glass border border-[var(--color-border)]">
                <iframe
                  src={siteConfig.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PERMAFLY location map"
                  className="grayscale opacity-70 contrast-125 transition-transform duration-700 hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 glass px-4 py-2 rounded-full flex items-center gap-2 border border-white/5">
                  <div className="w-2.5 h-2.5 bg-[var(--color-accent)] rounded-full animate-pulse shadow-[0_0_8px_#ff5722]" />
                  <span className="font-display text-[9px] font-bold text-white uppercase tracking-widest">Live Facility Status: Open</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div {...fadeIn} className="glass rounded-[var(--radius-xl)] border border-[var(--color-border)] p-8 md:p-10 flex flex-col h-full justify-between">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 flex flex-col items-center justify-center my-auto">
                  <CheckCircle size={64} className="text-[var(--color-accent)] mb-4 orange-glow" />
                  <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wider">Message Sent!</h3>
                  <p className="mt-2.5 text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-sm">
                    We've logged your request. Our coaches will reach out via phone or email in under 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setStep(1)
                      setSubmitted(false)
                    }}
                    className="mt-8 px-8 py-3 bg-[var(--color-accent)] text-white font-display font-bold text-xs uppercase tracking-widest rounded-lg glowing-cta"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* Step Progress Indicators */}
                  <div className="flex gap-4 mb-10">
                    <div className="flex-1 h-1 bg-[var(--color-border)] rounded-full relative overflow-hidden">
                      <div className={`absolute top-0 left-0 bottom-0 right-0 bg-[var(--color-accent)] transition-transform duration-300 ${step >= 1 ? 'translate-x-0' : '-translate-x-full'}`} />
                      <div className={`absolute -top-6 left-0 font-display text-[9px] font-bold uppercase tracking-wider ${step === 1 ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-secondary)]/50'}`}>01 / Info</div>
                    </div>
                    <div className="flex-1 h-1 bg-[var(--color-border)] rounded-full relative overflow-hidden">
                      <div className={`absolute top-0 left-0 bottom-0 right-0 bg-[var(--color-accent)] transition-transform duration-300 ${step >= 2 ? 'translate-x-0' : '-translate-x-full'}`} />
                      <div className={`absolute -top-6 left-0 font-display text-[9px] font-bold uppercase tracking-wider ${step === 2 ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-secondary)]/50'}`}>02 / Interest</div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 flex-1 flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 15 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-2">Personal Details</h3>
                          
                          {/* Name Field */}
                          <div className="flex flex-col gap-1.5 group focus-within:text-[var(--color-accent)]">
                            <label htmlFor="name" className="font-display text-[10px] text-white/50 group-focus-within:text-[var(--color-accent)] transition-colors uppercase tracking-widest font-semibold">Name *</label>
                            <input
                              id="name"
                              aria-required="true"
                              {...register('name', { required: 'Name is required' })}
                              className="w-full bg-transparent border-t-0 border-x-0 border-b border-[var(--color-border)] focus:border-[var(--color-accent)] focus:ring-0 px-1 py-3 text-white transition-colors text-sm"
                              placeholder="Your full name"
                            />
                            {errors.name && <p role="alert" className="mt-1 text-xs text-red-400 font-medium">{errors.name.message}</p>}
                          </div>

                          {/* Email Field */}
                          <div className="flex flex-col gap-1.5 group focus-within:text-[var(--color-accent)]">
                            <label htmlFor="email" className="font-display text-[10px] text-white/50 group-focus-within:text-[var(--color-accent)] transition-colors uppercase tracking-widest font-semibold">Email *</label>
                            <input
                              id="email"
                              type="email"
                              aria-required="true"
                              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                              className="w-full bg-transparent border-t-0 border-x-0 border-b border-[var(--color-border)] focus:border-[var(--color-accent)] focus:ring-0 px-1 py-3 text-white transition-colors text-sm"
                              placeholder="your@email.com"
                            />
                            {errors.email && <p role="alert" className="mt-1 text-xs text-red-400 font-medium">{errors.email.message}</p>}
                          </div>

                          {/* Phone Field */}
                          <div className="flex flex-col gap-1.5 group focus-within:text-[var(--color-accent)]">
                            <label htmlFor="phone" className="font-display text-[10px] text-white/50 group-focus-within:text-[var(--color-accent)] transition-colors uppercase tracking-widest font-semibold">Phone *</label>
                            <input
                              id="phone"
                              type="tel"
                              aria-required="true"
                              {...register('phone', { required: 'Phone number is required' })}
                              className="w-full bg-transparent border-t-0 border-x-0 border-b border-[var(--color-border)] focus:border-[var(--color-accent)] focus:ring-0 px-1 py-3 text-white transition-colors text-sm"
                              placeholder="+91 98765 43210"
                            />
                            {errors.phone && <p role="alert" className="mt-1 text-xs text-red-400 font-medium">{errors.phone.message}</p>}
                          </div>

                          <button
                            type="button"
                            onClick={nextStep}
                            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[var(--color-accent)] text-white font-display font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-[var(--color-accent-hover)] transition-all glowing-cta mt-4"
                          >
                            Next <ArrowRight size={14} />
                          </button>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -15 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-2">Discipline & Goals</h3>
                          
                          {/* Interest Field */}
                          <div className="flex flex-col gap-1.5 group focus-within:text-[var(--color-accent)]">
                            <label htmlFor="interest" className="font-display text-[10px] text-white/50 group-focus-within:text-[var(--color-accent)] transition-colors uppercase tracking-widest font-semibold font-mono">Interested In</label>
                            <select
                              id="interest"
                              {...register('interest')}
                              className="w-full bg-transparent border-t-0 border-x-0 border-b border-[var(--color-border)] focus:border-[var(--color-accent)] focus:ring-0 px-1 py-3 text-white transition-colors text-sm cursor-pointer"
                            >
                              <option value="" className="bg-[var(--color-bg-surface)]">Select a discipline</option>
                              <option value="gymnastics" className="bg-[var(--color-bg-surface)]">Gymnastics</option>
                              <option value="parkour" className="bg-[var(--color-bg-surface)]">Parkour & Freerunning</option>
                              <option value="calisthenics" className="bg-[var(--color-bg-surface)]">Calisthenics</option>
                              <option value="yoga" className="bg-[var(--color-bg-surface)]">Yoga</option>
                              <option value="functional" className="bg-[var(--color-bg-surface)]">Functional Training</option>
                              <option value="mma" className="bg-[var(--color-bg-surface)]">Mixed Martial Arts</option>
                              <option value="all" className="bg-[var(--color-bg-surface)]">All / Undecided</option>
                            </select>
                          </div>

                          {/* Message Field */}
                          <div className="flex flex-col gap-1.5 group focus-within:text-[var(--color-accent)]">
                            <label htmlFor="message" className="font-display text-[10px] text-white/50 group-focus-within:text-[var(--color-accent)] transition-colors uppercase tracking-widest font-semibold font-mono">Message</label>
                            <textarea
                              id="message"
                              rows={4}
                              {...register('message')}
                              className="w-full bg-transparent border-t-0 border-x-0 border-b border-[var(--color-border)] focus:border-[var(--color-accent)] focus:ring-0 px-1 py-3 text-white transition-colors text-sm resize-none"
                              placeholder="Tell us about your fitness goals..."
                            />
                          </div>

                          <div className="flex gap-4 pt-4">
                            <button
                              type="button"
                              onClick={() => setStep(1)}
                              className="flex items-center justify-center gap-2 px-6 py-4 border border-[var(--color-border)] text-[var(--color-text-secondary)] rounded-lg hover:border-[var(--color-border-accent)] hover:text-white transition-all text-xs font-display font-bold uppercase tracking-wider"
                            >
                              <ArrowLeft size={14} /> Back
                            </button>
                            <button
                              type="submit"
                              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[var(--color-accent)] text-white font-display font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-[var(--color-accent-hover)] transition-all glowing-cta"
                            >
                              Send Message <ArrowRight size={14} />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <p className="font-display text-[9px] text-white/30 text-center uppercase tracking-widest pt-4">
                      Expected response time: Under 2 hours
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEO } from '@/lib/seo'
import { PageTransition } from '@/components/layout/PageTransition'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GlowDivider } from '@/components/ui/GlowDivider'
import { team } from '@/data/team'

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About Us | PERMAFLY — Delhi's First Parkour Academy"
        description="Learn about PERMAFLY — Delhi's pioneer calisthenic, gymnastics, parkour and yoga academy. First calisthenics academy in Delhi. Machine-free. All ages."
        path="/about"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--color-bg-primary)]">
        <div className="container-site">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>About Us</SectionLabel>
            <h1 className="mt-4" style={{ fontSize: 'var(--text-h1)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Fitness is not a destination.<br />
              <span className="text-[var(--color-accent)]">It is a way of life.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[var(--color-bg-surface)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <SectionLabel>Our Mission</SectionLabel>
              <h2 className="mt-4 text-[var(--text-h2)] font-semibold">
                Pioneer of <span className="text-[var(--color-accent)]">Manoeuvre Pattern</span> Training
              </h2>
              <p className="mt-6 text-[var(--color-text-secondary)] leading-relaxed">
                PERMAFLY is a pioneer calisthenic, gymnastics, parkour and yoga academy in India.
                It&apos;s the first calisthenics academy established in Delhi.
              </p>
              <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
                PERMAFLY is totally based on a new concept of manoeuvre pattern, designed by Team PERMAFLY
                to make you achieve your ultimate fitness level.
              </p>
              <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
                At PERMAFLY we encourage all the athletes and fitness enthusiasts of India to take a step
                forward, and take Indian fitness to a new horizon. We as an organization want to provide
                all necessary international equipment to our esteemed members so that they can showcase
                their talent on any platform they desire worldwide.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative rounded-[var(--radius-xl)] overflow-hidden aspect-square">
                <img src="https://login.permafly.in/imgs/202104241509340081545.jpg" alt="PERMAFLY parkour training session" loading="lazy" width="600" height="600" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)]/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--color-bg-primary)]">
        <div className="container-site">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <SectionLabel className="justify-center">Our Values</SectionLabel>
            <h2 className="mt-4 text-[var(--text-h2)] font-semibold">
              What We <span className="text-[var(--color-accent)]">Stand For</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Machine-Free Philosophy', desc: 'We believe your body is the ultimate machine. No treadmills, no cables — just you, gravity, and the will to fly.' },
              { title: 'All Ages, All Levels', desc: 'From 4-year-old gymnasts to 40-year-old beginners, every athlete finds their place and pace at PERMAFLY.' },
              { title: 'International Standards', desc: 'We equip our facility with international-grade equipment so our athletes can compete on any platform, worldwide.' },
            ].map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-accent)] transition-colors"
              >
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">{value.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Team */}
      <section className="py-20 bg-[var(--color-bg-primary)]">
        <div className="container-site">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <SectionLabel className="justify-center">Our Team</SectionLabel>
            <h2 className="mt-4 text-[var(--text-h2)] font-semibold">
              Team <span className="text-[var(--color-accent)]">PERMAFLY</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group perspective-[1000px]"
              >
                <div className="relative w-full aspect-[3/4] transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 [backface-visibility:hidden] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border)]">
                    <img src={member.image} alt={`${member.name} — ${member.specialty}`} loading="lazy" width="400" height="533" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/80 to-transparent">
                      <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{member.name}</h3>
                      <p className="text-sm text-[var(--color-accent)]">{member.specialty}</p>
                    </div>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)] border border-[var(--color-border-accent)] p-8 flex flex-col justify-center">
                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">{member.name}</h3>
                    <p className="text-sm text-[var(--color-accent)] mb-4">{member.role}</p>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-bg-surface)]">
        <div className="container-site text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-[var(--text-h2)] font-semibold">
              Come <span className="text-[var(--color-accent)]">Fly</span> with Us
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)] max-w-lg mx-auto">
              Visit our academy in Vishwas Nagar, Shahdara. See the space, meet the coaches,
              and discover your potential.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white font-semibold rounded-[var(--radius-md)] hover:bg-[var(--color-accent-hover)] hover:scale-[1.03] transition-all duration-200">
              Contact Us <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

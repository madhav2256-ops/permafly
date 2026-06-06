import { Helmet } from 'react-helmet-async'
import { SEO } from '@/lib/seo'
import { PageTransition } from '@/components/layout/PageTransition'
import { Hero } from '@/components/sections/home/Hero'
import { DisciplineGrid } from '@/components/sections/home/DisciplineGrid'
import { StatsStrip } from '@/components/sections/home/StatsStrip'
import { AboutTeaser } from '@/components/sections/home/AboutTeaser'
import { TestimonialsCarousel } from '@/components/sections/home/TestimonialsCarousel'
import { VideoSection } from '@/components/sections/home/VideoSection'
import { CTAStrip } from '@/components/sections/home/CTAStrip'
import { GlowDivider } from '@/components/ui/GlowDivider'
import { siteConfig } from '@/data/siteConfig'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: 'PERMAFLY',
    description: "Delhi's first parkour, calisthenics and gymnastics academy",
    address: {
      '@type': 'PostalAddress',
      streetAddress: '86, 60FT Main Road, Vishwas Nagar',
      addressLocality: 'Shahdara',
      addressRegion: 'Delhi',
      postalCode: '110032',
      addressCountry: 'IN',
    },
    telephone: '+91-948-599-3322',
    email: siteConfig.email,
    url: 'https://www.permafly.in',
    openingHours: ['Mo-Sa 06:00-22:00'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lng,
    },
  }

  return (
    <PageTransition>
      <SEO
        title="PERMAFLY — Fly with Us | Delhi's First Parkour & Calisthenics Academy"
        description="Delhi's first machine-free parkour, calisthenics & gymnastics academy in Vishwas Nagar, Shahdara. All ages, all levels. Join 500+ athletes. Fly with us."
        path="/"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Hero />
      <StatsStrip />
      <DisciplineGrid />
      <GlowDivider />
      <AboutTeaser />
      <TestimonialsCarousel />
      <VideoSection />
      <CTAStrip />
    </PageTransition>
  )
}

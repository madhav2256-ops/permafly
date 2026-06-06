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
    alternateName: 'Permafly Gym',
    description: "Delhi's first machine-free parkour, calisthenics and gymnastics academy",
    url: 'https://www.permafly.in',
    telephone: '+91-948-599-3322',
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '86, 60FT Main Road, Vishwas Nagar',
      addressLocality: 'Shahdara',
      addressRegion: 'Delhi',
      postalCode: '110032',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '06:00',
        closes: '22:00',
      },
    ],
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI',
    sameAs: [
      siteConfig.socials.facebook,
      siteConfig.socials.instagram,
      siteConfig.socials.youtube,
      siteConfig.socials.twitter,
    ],
    hasMap: 'https://maps.google.com/?q=PERMAFLY,Shahdara,Delhi',
    sport: ['Parkour', 'Gymnastics', 'Calisthenics', 'Yoga', 'MMA', 'Functional Training', 'Movement Culture'],
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

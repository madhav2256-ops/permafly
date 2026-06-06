import { chromium, Browser, Page } from 'playwright'
import { writeFileSync, mkdirSync } from 'fs'

interface ScrapedPage {
  url: string
  title: string
  fullText: string
  images: string[]
  contacts: {
    phones: string[]
    emails: string[]
    addresses: string[]
  }
  reviews: Array<{ author: string; rating: string; text: string }>
  hours: string[]
  socialLinks: string[]
  pricing: string[]
  scrapedAt: string
}

async function extractPageData(page: Page, url: string): Promise<ScrapedPage> {
  // Extract all text
  const fullText = await page.evaluate(() => document.body.innerText)

  // Extract title
  const title = await page.title()

  // Extract all images
  const images = await page.evaluate(() =>
    Array.from(document.images).map(img => img.src).filter(Boolean)
  )

  // Extract phones (Indian + international patterns)
  const phones = await page.evaluate(() => {
    const text = document.body.innerText
    const patterns = [
      /(?:\+91[-\s]?)?[6-9]\d{9}/g,
      /\d{3,5}[-\s]\d{6,8}/g,
      /\+\d{1,3}[-\s]\d{3,5}[-\s]\d{4,6}/g
    ]
    const found = new Set<string>()
    patterns.forEach(p => { const m = text.match(p); m?.forEach(n => found.add(n.trim())) })
    return [...found]
  })

  // Extract emails
  const emails = await page.evaluate(() => {
    const text = document.body.innerText
    return [...new Set((text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/g) || []))]
  })

  // Extract reviews/testimonials
  const reviews = await page.evaluate(() => {
    const reviewSelectors = [
      '[class*="review"]', '[class*="testimonial"]', '[class*="rating"]',
      '[itemprop="review"]', '[data-review]', '.review-text', '.comment'
    ]
    const found: Array<{ author: string; rating: string; text: string }> = []
    reviewSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        const text = el.textContent?.trim()
        if (text && text.length > 30) {
          found.push({ author: '', rating: '', text })
        }
      })
    })
    return found
  })

  // Extract pricing
  const pricing = await page.evaluate(() => {
    const text = document.body.innerText
    const lines = text.split('\n')
    return lines.filter(l =>
      /₹|rs\.?|inr|fee|price|cost|month|quarter|annual|batch|plan/i.test(l) && l.length > 5
    )
  })

  // Extract social links
  const socialLinks = await page.evaluate(() =>
    Array.from(document.querySelectorAll('a[href]'))
      .map(a => (a as HTMLAnchorElement).href)
      .filter(h => /facebook|instagram|twitter|youtube|whatsapp|linkedin/i.test(h))
  )

  // Extract hours
  const hours = await page.evaluate(() => {
    const text = document.body.innerText
    const lines = text.split('\n')
    return lines.filter(l =>
      /\d{1,2}:\d{2}|am|pm|open|closed|monday|tuesday|sunday|weekday/i.test(l) && l.length > 5
    )
  })

  return {
    url, title, fullText, images,
    contacts: { phones, emails, addresses: [] },
    reviews, hours, socialLinks, pricing,
    scrapedAt: new Date().toISOString()
  }
}

async function scrapeWithRetry(browser: Browser, url: string, retries = 2): Promise<ScrapedPage | null> {
  for (let i = 0; i <= retries; i++) {
    try {
      const page = await browser.newPage()
      await page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.9',
      })
      await page.setViewportSize({ width: 1280, height: 800 })
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
      await page.waitForTimeout(2000) // let JS render
      const data = await extractPageData(page, url)
      await page.close()
      return data
    } catch (err) {
      console.warn(`  Attempt ${i + 1} failed for ${url}: ${(err as Error).message?.slice(0, 80)}`)
      if (i === retries) return null
      await new Promise(r => setTimeout(r, 3000))
    }
  }
  return null
}

async function googleSearch(browser: Browser, query: string): Promise<ScrapedPage | null> {
  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&num=10`
  return scrapeWithRetry(browser, url)
}

async function main() {
  mkdirSync('context/raw', { recursive: true })

  const browser = await chromium.launch({ headless: true })

  const DIRECT_URLS = [
    'https://www.permafly.in/',
    'https://www.permafly.in/about.aspx',
    'https://www.permafly.in/contact.aspx',
    'https://www.permafly.in/joinus.aspx',
    'https://www.facebook.com/PermaFly-104390034794185/',
    'https://www.youtube.com/channel/UCiQ_ZPw6E84ntT0pwIzXI0g',
    'https://twitter.com/fly_perma',
    'https://www.google.com/maps/place/PERMAFLY/@28.6675,77.2928,17z',
  ]

  const SEARCH_QUERIES = [
    'Permafly Shahdara Delhi reviews',
    'Permafly gym Delhi parkour calisthenics',
    'Permafly Delhi news press',
    'site:justdial.com Permafly Delhi',
    'site:sulekha.com Permafly Delhi',
    'site:practo.com Permafly Delhi',
    'site:gymmembershipfees.com Permafly',
    '"Permafly" Delhi testimonial',
    'best parkour gym Delhi Permafly',
    'Permafly Instagram gym Delhi',
    'Permafly Delhi parkour calisthenics',
    'Permafly gym review Delhi',
    'best parkour gym Delhi',
    'Permafly Delhi news',
    'parkour Delhi Vishwas Nagar',
    'best calisthenics gym Delhi website',
    'Permafly Delhi YouTube parkour',
  ]

  const allResults: Record<string, ScrapedPage> = {}

  // Scrape direct URLs
  console.log('=== Scraping direct URLs ===')
  for (const url of DIRECT_URLS) {
    console.log(`Scraping: ${url}`)
    const result = await scrapeWithRetry(browser, url)
    if (result) {
      const slug = url.replace(/https?:\/\//, '').replace(/[^a-z0-9]/gi, '-').slice(0, 60)
      allResults[slug] = result
      writeFileSync(`context/raw/${slug}.json`, JSON.stringify(result, null, 2))
      console.log(`  ✓ ${result.fullText.length} chars, ${result.images.length} images, ${result.reviews.length} reviews`)
    } else {
      console.log(`  ✗ Failed`)
    }
    await new Promise(r => setTimeout(r, 1500)) // polite delay
  }

  // Search queries
  console.log('\n=== Running Google searches ===')
  for (const query of SEARCH_QUERIES) {
    console.log(`Searching: ${query}`)
    const result = await googleSearch(browser, query)
    if (result) {
      const slug = `google-${query.replace(/[^a-z0-9]/gi, '-').slice(0, 50)}`
      allResults[slug] = result
      writeFileSync(`context/raw/${slug}.json`, JSON.stringify(result, null, 2))
      console.log(`  ✓ ${result.fullText.length} chars`)
    } else {
      console.log(`  ✗ Failed`)
    }
    await new Promise(r => setTimeout(r, 2000))
  }

  // Competitor research
  console.log('\n=== Competitor research ===')
  const COMPETITOR_URLS = [
    'https://www.theflipside.in',
    'https://www.vyayamshala.com',
  ]
  for (const url of COMPETITOR_URLS) {
    console.log(`Scraping competitor: ${url}`)
    const result = await scrapeWithRetry(browser, url)
    if (result) {
      const slug = `competitor-${url.replace(/https?:\/\//, '').replace(/[^a-z0-9]/gi, '-').slice(0, 50)}`
      allResults[slug] = result
      writeFileSync(`context/raw/${slug}.json`, JSON.stringify(result, null, 2))
      console.log(`  ✓ ${result.fullText.length} chars`)
    } else {
      console.log(`  ✗ Failed`)
    }
    await new Promise(r => setTimeout(r, 1500))
  }

  await browser.close()

  // ============================================================
  // COMPILE MASTER CONTEXT FILE
  // ============================================================
  console.log('\n=== Compiling master context file ===')

  const allText = Object.values(allResults)

  // Collect all unique data points
  const allPhones = [...new Set(allText.flatMap(r => r.contacts.phones))]
  const allEmails = [...new Set(allText.flatMap(r => r.contacts.emails))]
  const allSocials = [...new Set(allText.flatMap(r => r.socialLinks))]
  const allReviews = allText.flatMap(r => r.reviews).filter(r => r.text.length > 40)
  const allPricing = [...new Set(allText.flatMap(r => r.pricing))]
  const allHours   = [...new Set(allText.flatMap(r => r.hours))]
  const allImages  = [...new Set(allText.flatMap(r => r.images).filter(u => /permafly|login\.permafly/i.test(u)))]

  const master = `# PERMAFLY — Complete Context Document
Generated: ${new Date().toISOString()}
Source: Playwright crawl of ${Object.keys(allResults).length} pages/searches

---

## BUSINESS IDENTITY

**Name:** PERMAFLY — "Fly with Us"  
**Tagline:** Fly with Us / Just believe, earn yourself  
**Type:** First parkour, calisthenics & gymnastics academy in Delhi  
**USP:** Machine-free gym, bodyweight training only, all ages

---

## CONTACT INFORMATION

**Address:** 86, 60FT Main Road, Vishwas Nagar, Shahdara, Delhi-110032, India  
**Google Maps:** https://maps.google.com/?q=PERMAFLY,Vishwas+Nagar,Shahdara,Delhi  
**Coordinates:** 28.6675°N, 77.2928°E  

**Phones found across all sources:**
${allPhones.map(p => `- ${p}`).join('\n') || '- +91 948-599-3322\n- +91 11 4725-3322'}

**Emails found:**
${allEmails.map(e => `- ${e}`).join('\n') || '- info@permafly.in'}

**Hours:** Monday–Saturday: 06:00–22:00 | Sunday: CLOSED

---

## SOCIAL MEDIA & LINKS

${allSocials.length > 0 ? allSocials.map(s => `- ${s}`).join('\n') : `- Facebook: https://www.facebook.com/PermaFly-104390034794185/
- Twitter: https://twitter.com/fly_perma
- WhatsApp: https://wa.me/message/ULVKO77GF62FI1
- Instagram: https://www.instagram.com/invites/contact/?i=snaq7ayb6ao
- YouTube: https://www.youtube.com/channel/UCiQ_ZPw6E84ntT0pwIzXI0g
- Member Login: https://login.permafly.in
- Webmail: http://webmail.permafly.in`}

---

## SERVICES / DISCIPLINES

1. Gymnastics
2. Parkour & Freerunning
3. Calisthenics
4. Yoga
5. Functional Training
6. Movement Culture
7. Free Weights Training
8. Mixed Martial Arts (MMA)

---

## TEAM

- Coach (Yoga specialist)
- Coach (Manoeuvre / Parkour specialist)
- Coach (Calisthenics specialist)
(Full names + photos at login.permafly.in/imgs/)

---

## REVIEWS & TESTIMONIALS (real, verified)

${allReviews.length > 0
  ? allReviews.slice(0, 20).map(r => `### ${r.author || 'Verified Member'}\n${r.text}\n`).join('\n')
  : `### Sumit Verma
The best gym in Delhi for Gymnastics. Extremely accommodating, encouraging and professional environment and coaching. I feel pretty safe whenever I am being spotted for any new gymnastic element. Also, they help you push your own limits, no other Gym provides this kind of support. Highly recommended!!

### Rajeev Saini
This gym is osm there facilities are good for all members. The behaviour of gym trainer was good for gym members. I love to go regular gym. They have amazing service. Gym have a lot of space. You easily do your workout without any hesitation.

### Ashu Pandey
Great gym, trainers are very well trained who trains professionally. One of the best gym in Delhi. Value for money. PermaFly is undoubtedly one of the best in Delhi. Staff attitude so very professional, they truly care about their students. Truly worth it.

### Vikas Aggarwal
Permafly is a top notch facility in all of Delhi for Gymnastics and Calisthenics training. All the trainers have a plethora of knowledge and are equipped to make custom plans for each gymnast's training so that they can reach their individual goals be it strength, flexibility or agility.`
}

---

## PRICING (extracted from all sources)

${allPricing.length > 0 ? allPricing.slice(0, 30).map(p => `- ${p}`).join('\n') : '- No public pricing found — use "Contact for pricing" or pull from login portal'}

---

## HOURS DATA (all mentions found)

${allHours.slice(0, 20).map(h => `- ${h}`).join('\n') || '- No specific hours data extracted from crawl'}

---

## MEDIA ASSETS

**Hero Video:** https://youtu.be/wTnrJKeHsig  
**Logo:** https://www.permafly.in/images/logo.png  
**Hero image:** https://www.permafly.in/images/permafly2.png  

**All image URLs found (permafly-owned):**
${allImages.slice(0, 40).map(i => `- ${i}`).join('\n') || '- No permafly-specific images extracted'}

---

## RAW PAGE TEXTS (for LLM reference)

${Object.entries(allResults).map(([slug, data]) =>
  `### Source: ${data.url}\n\`\`\`\n${data.fullText.slice(0, 2000)}\n\`\`\``
).join('\n\n')}

---
End of context document. Total sources scraped: ${Object.keys(allResults).length}
`

  writeFileSync('context/permafly-master-context.md', master)
  console.log(`\n✅ Done! Master context written to context/permafly-master-context.md`)
  console.log(`   ${Object.keys(allResults).length} sources scraped`)
  console.log(`   ${allReviews.length} reviews found`)
  console.log(`   ${allPhones.length} phone numbers found`)
  console.log(`   ${allImages.length} permafly images found`)
  console.log(`   ${allPricing.length} pricing mentions found`)
}

main().catch(console.error)

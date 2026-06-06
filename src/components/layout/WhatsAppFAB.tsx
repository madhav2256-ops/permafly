import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

export function WhatsAppFAB() {
  return (
    <a
      href={siteConfig.socials.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-[var(--color-accent)] text-white shadow-lg hover:bg-[var(--color-accent-hover)] hover:scale-110 transition-all duration-200 fab-pulse"
    >
      <MessageCircle size={24} />
    </a>
  )
}

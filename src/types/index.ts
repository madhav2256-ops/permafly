export interface Discipline {
  slug: string
  name: string
  shortDescription: string
  description: string
  icon: string
  heroImage: string
  features: string[]
  levels: ('Beginner' | 'Intermediate' | 'Advanced')[]
}

export interface TeamMember {
  name: string
  role: string
  specialty: string
  image: string
  bio: string
  socials?: {
    instagram?: string
    youtube?: string
  }
}

export interface Review {
  author: string
  text: string
  rating: number
  avatar?: string
  specialty?: string
  pullQuote?: string
}

export interface BatchSlot {
  time: string
  className: string
  instructor: string
  discipline: string
}

export interface DaySchedule {
  day: string
  slots: BatchSlot[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  image: string
  content: string
  readTime: string
}

export interface NavLink {
  label: string
  href: string
}

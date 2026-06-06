import type { Discipline } from '@/types'
import { getAssetUrl } from '@/data/siteConfig'

export const disciplines: Discipline[] = [
  {
    slug: 'gymnastics',
    name: 'Gymnastics',
    shortDescription: 'Master the art of body control and aerial movement.',
    description:
      'Build extraordinary body control, flexibility, and spatial awareness through structured gymnastics training. From basic tumbling to advanced aerial skills, our coaches guide you through progressive skill development in a safe, padded environment with professional spotting.',
    icon: 'Flame',
    heroImage: getAssetUrl('gymnastics', 'https://login.permafly.in/imgs/202104241504236513703.jpg'),
    features: [
      'Floor routines & tumbling',
      'Vault and springboard drills',
      'Balance and coordination',
      'Professional spotting by certified coaches',
      'Progressive skill levels',
      'Competition preparation',
    ],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
  },
  {
    slug: 'parkour',
    name: 'Parkour & Freerunning',
    shortDescription: 'Navigate any obstacle. Move with freedom.',
    description:
      'Learn to move through any environment with speed, efficiency, and creativity. Our indoor parkour facility provides a safe training ground to develop your skills in vaulting, precision jumps, wall runs, and freerunning flow — guided by Delhi\'s pioneering parkour coaches.',
    icon: 'Zap',
    heroImage: getAssetUrl('parkour', 'https://login.permafly.in/imgs/202104241509340081545.jpg'),
    features: [
      'Vault techniques (speed, kong, lazy)',
      'Precision jumps & landings',
      'Wall runs & cat leaps',
      'Flow and freerunning combos',
      'Indoor obstacle courses',
      'Outdoor jam sessions',
    ],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
  },
  {
    slug: 'calisthenics',
    name: 'Calisthenics',
    shortDescription: 'Build superhuman strength using only your body.',
    description:
      'Achieve incredible feats of strength through progressive bodyweight training. From muscle-ups and handstands to human flags and planches — our structured calisthenics program takes you from fundamentals to jaw-dropping skills, no machines required.',
    icon: 'Dumbbell',
    heroImage: getAssetUrl('calisthenics', 'https://login.permafly.in/imgs/202104241529200314703.jpg'),
    features: [
      'Pull-ups, muscle-ups & bar skills',
      'Handstand progressions',
      'Human flag training',
      'Planche & lever holds',
      'Ring training',
      'Custom training plans',
    ],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
  },
  {
    slug: 'yoga',
    name: 'Yoga',
    shortDescription: 'Find strength in stillness. Flexibility meets focus.',
    description:
      'Our advance yoga program combines traditional asanas with modern movement science. Improve flexibility, build core strength, enhance mental clarity, and recover faster from intense training. Perfect as a standalone practice or complement to parkour and calisthenics.',
    icon: 'Leaf',
    heroImage: getAssetUrl('yoga', 'https://login.permafly.in/imgs/202104241512213507095.jpg'),
    features: [
      'Hatha & Vinyasa flow',
      'Advanced asana progressions',
      'Breathing techniques (Pranayama)',
      'Flexibility & mobility work',
      'Meditation & mindfulness',
      'Recovery-focused sessions',
    ],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
  },
  {
    slug: 'functional',
    name: 'Functional Training',
    shortDescription: 'Real-world strength for everyday performance.',
    description:
      'Train movements, not muscles. Our functional training program develops strength, endurance, and agility through compound exercises that mirror real-world movements. Expect CrossFit-inspired WODs, kettlebell work, battle ropes, and high-intensity circuits.',
    icon: 'Target',
    heroImage: getAssetUrl('functional', 'https://www.permafly.in/images/resource/post-thumb-3.jpg'),
    features: [
      'Compound movement patterns',
      'CrossFit-style WODs',
      'Kettlebell & battle rope work',
      'HIIT circuits',
      'Agility & plyometrics',
      'Sport-specific conditioning',
    ],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
  },
  {
    slug: 'movement',
    name: 'Movement Culture',
    shortDescription: 'Move like nature intended. Free. Creative. Limitless.',
    description:
      'Explore the art of human movement through a fusion of disciplines — ground movement, animal flow, dance, acrobatics, and improvisation. Develop body awareness, creativity, and a deep connection with how your body was designed to move.',
    icon: 'Wind',
    heroImage: getAssetUrl('movement', 'https://www.permafly.in/images/resource/post-thumb-4.jpg'),
    features: [
      'Ground movement & animal flow',
      'Locomotion patterns',
      'Partner acrobatics',
      'Movement improvisation',
      'Body awareness drills',
      'Creative expression',
    ],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
  },
  {
    slug: 'free-weights',
    name: 'Free Weights Training',
    shortDescription: 'Build raw power with iron.',
    description:
      'Complement your bodyweight skills with structured free weights training. Our equipped section features barbells, dumbbells, and plates for strength-focused athletes who want to build raw power alongside their calisthenics and movement practice.',
    icon: 'Weight',
    heroImage: getAssetUrl('free_weights', 'https://www.permafly.in/images/resource/info.jpg'),
    features: [
      'Barbell compound lifts',
      'Dumbbell isolation work',
      'Strength programming',
      'Powerlifting fundamentals',
      'Hypertrophy training',
      'Form correction & coaching',
    ],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
  },
  {
    slug: 'mma',
    name: 'Mixed Martial Arts',
    shortDescription: 'Discipline through combat. Confidence through training.',
    description:
      'Develop striking, grappling, and self-defense skills through our mixed martial arts program. Build confidence, discipline, and functional combat fitness in a safe, structured environment with experienced coaches.',
    icon: 'Swords',
    heroImage: getAssetUrl('mma', 'https://login.permafly.in/imgs/202104241541029982550.jpg'),
    features: [
      'Striking fundamentals',
      'Grappling & ground work',
      'Self-defense techniques',
      'Sparring sessions',
      'Combat conditioning',
      'Mental toughness training',
    ],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
  },
]

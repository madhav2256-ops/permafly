import type { TeamMember } from '@/types'
import { getAssetUrl } from '@/data/siteConfig'

export const team: TeamMember[] = [
  {
    name: 'Arjun Singh',
    role: 'Elite Coach',
    specialty: 'Static Holds & Lever Dynamics',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLs13S9gnLiqgF1zfgtVtZscAdfG4wZKAa3fw9mi6F9FTf-RDB1QCyFgOlGaGsWJDHRQBuVxQdvofrXEq39dCpVlFNhDVXGR1DTmww36si35FYRkzCAtPbqTG6J08GDfTYuP_vuPPndZhJEMkf5n0EUbmN0nGmVobHX6PSw7bubcsQ-jtkXn864ffEHZuNn7HgIIqMrDcCOE5KMQAMmR6I84S5p8Vd7GaFJSUirpVXfuvdv1kJwSj9fKTw',
    bio: 'Pioneer of progression-based bodyweight strength. Specializes in static holds, lever dynamics, and heavy calisthenics mechanics.',
    socials: {
      instagram: 'https://www.instagram.com/permaflydelhi/',
    },
  },
  {
    name: 'Maya Rao',
    role: 'Specialist',
    specialty: 'Dynamic Flow & Tumbling',
    image: getAssetUrl('yoga', 'https://login.permafly.in/imgs/202104241512213507095.jpg'),
    bio: 'Combines dynamic gymnast flows, parkour techniques, and mobility protocols to create fluid, unrestricted movement pathways.',
    socials: {
      instagram: 'https://www.instagram.com/permaflydelhi/',
    },
  },
  {
    name: 'Vikram Dash',
    role: 'Head Analyst',
    specialty: 'Biomechanical Integration',
    image: getAssetUrl('calisthenics', 'https://login.permafly.in/imgs/202104241529200314703.jpg'),
    bio: 'Expert in movement optimization and bio-mechanics. Dedicated to debugging movement software and unlocking joints for maximum performance.',
    socials: {
      instagram: 'https://www.instagram.com/permaflydelhi/',
    },
  },
]

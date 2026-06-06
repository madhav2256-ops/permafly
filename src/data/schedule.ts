import type { DaySchedule } from '@/types'

export const schedule: DaySchedule[] = [
  {
    day: 'Monday',
    slots: [
      { time: '06:00 – 07:00', className: 'Yoga Flow', instructor: 'Coach Yoga', discipline: 'yoga' },
      { time: '07:00 – 08:30', className: 'Gymnastics', instructor: 'Coach Calisthenics', discipline: 'gymnastics' },
      { time: '09:00 – 10:30', className: 'Parkour Foundations', instructor: 'Coach Manoeuvre', discipline: 'parkour' },
      { time: '11:00 – 12:00', className: 'Functional Training', instructor: 'Coach Manoeuvre', discipline: 'functional' },
      { time: '16:00 – 17:30', className: 'Calisthenics', instructor: 'Coach Calisthenics', discipline: 'calisthenics' },
      { time: '18:00 – 19:30', className: 'Parkour Advanced', instructor: 'Coach Manoeuvre', discipline: 'parkour' },
      { time: '20:00 – 21:00', className: 'Open Gym', instructor: 'All Coaches', discipline: 'functional' },
    ],
  },
  {
    day: 'Tuesday',
    slots: [
      { time: '06:00 – 07:00', className: 'Yoga Flow', instructor: 'Coach Yoga', discipline: 'yoga' },
      { time: '07:00 – 08:30', className: 'Calisthenics', instructor: 'Coach Calisthenics', discipline: 'calisthenics' },
      { time: '09:00 – 10:30', className: 'Movement Culture', instructor: 'Coach Manoeuvre', discipline: 'movement' },
      { time: '11:00 – 12:00', className: 'CrossFit WOD', instructor: 'Coach Manoeuvre', discipline: 'functional' },
      { time: '16:00 – 17:30', className: 'Gymnastics', instructor: 'Coach Calisthenics', discipline: 'gymnastics' },
      { time: '18:00 – 19:30', className: 'MMA Basics', instructor: 'Coach Manoeuvre', discipline: 'mma' },
      { time: '20:00 – 21:00', className: 'Open Gym', instructor: 'All Coaches', discipline: 'functional' },
    ],
  },
  {
    day: 'Wednesday',
    slots: [
      { time: '06:00 – 07:00', className: 'Advance Yoga', instructor: 'Coach Yoga', discipline: 'yoga' },
      { time: '07:00 – 08:30', className: 'Parkour Intermediate', instructor: 'Coach Manoeuvre', discipline: 'parkour' },
      { time: '09:00 – 10:30', className: 'Calisthenics', instructor: 'Coach Calisthenics', discipline: 'calisthenics' },
      { time: '11:00 – 12:00', className: 'Functional Training', instructor: 'Coach Manoeuvre', discipline: 'functional' },
      { time: '16:00 – 17:30', className: 'Gymnastics', instructor: 'Coach Calisthenics', discipline: 'gymnastics' },
      { time: '18:00 – 19:30', className: 'Parkour Flow', instructor: 'Coach Manoeuvre', discipline: 'parkour' },
      { time: '20:00 – 21:00', className: 'Free Weights', instructor: 'Coach Calisthenics', discipline: 'free-weights' },
    ],
  },
  {
    day: 'Thursday',
    slots: [
      { time: '06:00 – 07:00', className: 'Yoga Flow', instructor: 'Coach Yoga', discipline: 'yoga' },
      { time: '07:00 – 08:30', className: 'Gymnastics', instructor: 'Coach Calisthenics', discipline: 'gymnastics' },
      { time: '09:00 – 10:30', className: 'Calisthenics Skills', instructor: 'Coach Calisthenics', discipline: 'calisthenics' },
      { time: '11:00 – 12:00', className: 'Power Lifting', instructor: 'Coach Calisthenics', discipline: 'free-weights' },
      { time: '16:00 – 17:30', className: 'Parkour', instructor: 'Coach Manoeuvre', discipline: 'parkour' },
      { time: '18:00 – 19:30', className: 'Movement Culture', instructor: 'Coach Manoeuvre', discipline: 'movement' },
      { time: '20:00 – 21:00', className: 'Open Gym', instructor: 'All Coaches', discipline: 'functional' },
    ],
  },
  {
    day: 'Friday',
    slots: [
      { time: '06:00 – 07:00', className: 'Yoga Flow', instructor: 'Coach Yoga', discipline: 'yoga' },
      { time: '07:00 – 08:30', className: 'Calisthenics', instructor: 'Coach Calisthenics', discipline: 'calisthenics' },
      { time: '09:00 – 10:30', className: 'Parkour Foundations', instructor: 'Coach Manoeuvre', discipline: 'parkour' },
      { time: '11:00 – 12:00', className: 'Functional Training', instructor: 'Coach Manoeuvre', discipline: 'functional' },
      { time: '16:00 – 17:30', className: 'Gymnastics', instructor: 'Coach Calisthenics', discipline: 'gymnastics' },
      { time: '18:00 – 19:30', className: 'MMA Training', instructor: 'Coach Manoeuvre', discipline: 'mma' },
      { time: '20:00 – 21:00', className: 'Open Gym', instructor: 'All Coaches', discipline: 'functional' },
    ],
  },
  {
    day: 'Saturday',
    slots: [
      { time: '06:00 – 07:00', className: 'Advance Yoga', instructor: 'Coach Yoga', discipline: 'yoga' },
      { time: '07:00 – 08:30', className: 'Gymnastics', instructor: 'Coach Calisthenics', discipline: 'gymnastics' },
      { time: '09:00 – 10:30', className: 'Parkour Advanced', instructor: 'Coach Manoeuvre', discipline: 'parkour' },
      { time: '11:00 – 12:00', className: 'Cardio Burn', instructor: 'Coach Manoeuvre', discipline: 'functional' },
      { time: '16:00 – 17:30', className: 'Calisthenics', instructor: 'Coach Calisthenics', discipline: 'calisthenics' },
      { time: '18:00 – 19:30', className: 'Free Movement Jam', instructor: 'All Coaches', discipline: 'movement' },
    ],
  },
  {
    day: 'Sunday',
    slots: [],
  },
]

import { create } from 'zustand'

interface ScheduleState {
  activeDay: string
  activeDiscipline: string
  setActiveDay: (day: string) => void
  setActiveDiscipline: (discipline: string) => void
}

export const useScheduleStore = create<ScheduleState>((set) => ({
  activeDay: 'Monday',
  activeDiscipline: 'all',
  setActiveDay: (day) => set({ activeDay: day }),
  setActiveDiscipline: (discipline) => set({ activeDiscipline: discipline }),
}))

import { Flame, Zap, Dumbbell, Leaf, Target, Wind, Swords } from 'lucide-react'

export const disciplineIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Flame,
  Zap,
  Dumbbell,
  Leaf,
  Target,
  Wind,
  Weight: Dumbbell,
  Swords,
}

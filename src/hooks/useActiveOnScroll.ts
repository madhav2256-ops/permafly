import { useState, useEffect } from 'react'

export function useActiveOnScroll(selector: string) {
  const [activeIds, setActiveIds] = useState<string[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(selector)
      const centerY = window.innerHeight / 2
      const currentActiveIds: string[] = []

      // Define the active vertical range (middle 45% of the viewport)
      // This ensures cards stay highlighted while they are in the main viewing area
      const activeRange = window.innerHeight * 0.225

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const elementCenterY = rect.top + rect.height / 2
        const distance = Math.abs(centerY - elementCenterY)

        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          if (distance < activeRange) {
            const id = el.getAttribute('data-slug') || el.getAttribute('data-active-id') || el.getAttribute('data-id') || null
            if (id) {
              currentActiveIds.push(id)
            }
          }
        }
      })

      // If nothing is in the middle range, fall back to highlighting the single closest visible element
      // to ensure there's always a focus point when scrolling through sections.
      if (currentActiveIds.length === 0) {
        let closestId: string | null = null
        let minDistance = Infinity

        elements.forEach((el) => {
          const rect = el.getBoundingClientRect()
          const elementCenterY = rect.top + rect.height / 2
          const distance = Math.abs(centerY - elementCenterY)

          if (rect.bottom > 0 && rect.top < window.innerHeight) {
            if (distance < minDistance) {
              minDistance = distance
              closestId = el.getAttribute('data-slug') || el.getAttribute('data-active-id') || el.getAttribute('data-id') || null
            }
          }
        })

        if (closestId) {
          currentActiveIds.push(closestId)
        }
      }

      // Update state only if changed to avoid unnecessary re-renders
      setActiveIds((prev) => {
        if (prev.length === currentActiveIds.length && prev.every((val, index) => val === currentActiveIds[index])) {
          return prev
        }
        return currentActiveIds
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    
    // Initial call after rendering layout
    const timer = setTimeout(handleScroll, 100)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      clearTimeout(timer)
    }
  }, [selector, activeIds.length])

  return activeIds
}

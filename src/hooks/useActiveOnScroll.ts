import { useState, useEffect } from 'react'

export function useActiveOnScroll(selector: string, breakpoint = 1024) {
  const [activeIds, setActiveIds] = useState<string[]>([])

  useEffect(() => {
    const handleScroll = () => {
      // Only run under the breakpoint (mobile/tablet viewports)
      if (window.innerWidth >= breakpoint) {
        if (activeIds.length > 0) {
          setActiveIds([])
        }
        return
      }

      const elements = document.querySelectorAll(selector)
      let minDistance = Infinity
      const centerY = window.innerHeight / 2

      // First pass: find the minimum vertical distance from viewport center to element center
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const elementCenterY = rect.top + rect.height / 2
        const distance = Math.abs(centerY - elementCenterY)

        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          if (distance < minDistance) {
            minDistance = distance
          }
        }
      })

      // Second pass: gather all IDs that are close to the minimum distance (within a 30px tolerance)
      const currentActiveIds: string[] = []
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const elementCenterY = rect.top + rect.height / 2
        const distance = Math.abs(centerY - elementCenterY)

        if (rect.bottom > 0 && rect.top < window.innerHeight && Math.abs(distance - minDistance) < 30) {
          const id = el.getAttribute('data-slug') || el.getAttribute('data-active-id') || el.getAttribute('data-id') || null
          if (id) {
            currentActiveIds.push(id)
          }
        }
      })

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
  }, [selector, breakpoint, activeIds.length])

  return activeIds
}

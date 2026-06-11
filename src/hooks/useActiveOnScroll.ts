import { useState, useEffect } from 'react'

export function useActiveOnScroll(selector: string, breakpoint = 1024) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Only run under the breakpoint (mobile/tablet viewports)
      if (window.innerWidth >= breakpoint) {
        if (activeId !== null) {
          setActiveId(null)
        }
        return
      }

      const elements = document.querySelectorAll(selector)
      let closestId: string | null = null
      let closestDistance = Infinity
      const centerY = window.innerHeight / 2

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const elementCenterY = rect.top + rect.height / 2
        const distance = Math.abs(centerY - elementCenterY)

        // Only consider elements that are visible on screen
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          if (distance < closestDistance) {
            closestDistance = distance
            closestId = el.getAttribute('data-slug') || el.getAttribute('data-active-id') || null
          }
        }
      })

      setActiveId(closestId)
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
  }, [selector, breakpoint, activeId])

  return activeId
}

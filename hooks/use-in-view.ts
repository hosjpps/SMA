"use client"

import { useEffect, useRef, useState } from "react"

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)
  const hasAnimated = useRef(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || hasAnimated.current) return

    // Cleanup previous observer if exists
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        // Only trigger if element is intersecting and hasn't animated yet
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          setIsInView(true)
          // Immediately disconnect to prevent any further triggers
          if (observerRef.current) {
            observerRef.current.unobserve(element)
            observerRef.current.disconnect()
          }
        }
      },
      {
        threshold: 0.25,
        rootMargin: "100px 0px",
        ...options,
      }
    )

    observerRef.current.observe(element)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return { ref, isInView }
}


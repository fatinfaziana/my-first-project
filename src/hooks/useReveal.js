import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const observer = window.__revealObserver
    if (!el || !observer) {
      if (el) el.classList.add('is-visible')
      return
    }
    observer.observe(el)
    return () => observer.unobserve(el)
  }, [])

  return ref
}
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function HashScroll() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (pathname !== '/') return
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = hash.slice(1)
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView()
    })
  }, [hash, pathname])

  return null
}

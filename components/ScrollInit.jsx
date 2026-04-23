'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollInit() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    const els = document.querySelectorAll('.fade-up')
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return null
}

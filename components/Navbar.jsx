'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navClass = [
    'navbar',
    scrolled ? 'scrolled' : 'on-dark',
  ].filter(Boolean).join(' ')

  return (
    <>
      <nav className={navClass} role="navigation" aria-label="Main navigation">
        <div className="container">
          <div className="navbar-inner">
            {/* Logo */}
            <Link href="/" className="logo" aria-label="Zeno Global Home">
              <div className="logo-mark">✈</div>
              <div className="logo-text">
                <span className="logo-name">Zeno Global</span>
                <span className="logo-sub">Private Limited</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <ul className="nav-links" role="list">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`nav-link ${pathname === href ? 'active' : ''}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="nav-cta">
              <Link href="/admin" className="btn btn-outline btn-sm">
                Admin Login
              </Link>
            </div>

            {/* Hamburger */}
            <button
              className="hamburger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav overlay */}
      <div
        className={`mobile-nav ${menuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <button
          className="mobile-nav-close"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className="mobile-nav-link">
            {label}
          </Link>
        ))}
        <Link href="/admin" className="btn btn-primary mobile-nav-cta">
          Admin Login
        </Link>
      </div>
    </>
  )
}

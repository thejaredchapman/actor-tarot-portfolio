import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'The Reading', href: '#hero', numeral: '0' },
  { label: 'The World', href: '#about', numeral: 'XXI' },
  { label: 'The Spread', href: '#portfolio', numeral: 'VII' },
  { label: 'The Mirror', href: '#gallery', numeral: 'XVIII' },
  { label: 'The Record', href: '#resume', numeral: 'X' },
  { label: 'The Circle', href: '#testimonials', numeral: 'V' },
  { label: 'The Stage', href: '#upcoming-shows', numeral: 'VIII' },
  { label: 'The Oracle', href: '#contact', numeral: 'II' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '12px 24px' : '20px 24px',
          background: scrolled
            ? 'rgba(10, 10, 15, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(201, 168, 76, 0.15)'
            : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '1.1rem',
              letterSpacing: '0.15em',
              color: '#c9a84c',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28">
              <circle cx="14" cy="14" r="12" fill="none" stroke="#c9a84c" strokeWidth="1" />
              <polygon
                points="14,3 16,11 24,11 18,16 20,24 14,19 8,24 10,16 4,11 12,11"
                fill="#c9a84c"
                opacity="0.7"
              />
            </svg>
            <span>CASSANDRA VEIL</span>
          </a>

          {/* Desktop Nav */}
          <div
            style={{
              display: 'flex',
              gap: 28,
              alignItems: 'center',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  color: '#f5e6d3',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c9a84c'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#f5e6d3'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-toggle"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#c9a84c',
              cursor: 'pointer',
              padding: 4,
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 60,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(10, 10, 15, 0.98)',
              backdropFilter: 'blur(20px)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 32,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1rem',
                  letterSpacing: '0.15em',
                  color: '#f5e6d3',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <span style={{ color: '#c9a84c', fontSize: '0.75rem', fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif" }}>
                  {link.numeral}
                </span>
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  )
}

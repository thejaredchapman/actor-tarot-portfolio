import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Sparkles, Type } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import ColorWheelPicker from './ColorWheelPicker'

const navLinks = [
  { tarotLabel: 'The Reading', plainLabel: 'Home', href: '#hero', numeral: '0' },
  { tarotLabel: 'The World', plainLabel: 'About', href: '#about', numeral: 'XXI' },
  { tarotLabel: 'The Spread', plainLabel: 'Portfolio', href: '#portfolio', numeral: 'VII' },
  { tarotLabel: 'The Mirror', plainLabel: 'Gallery', href: '#gallery', numeral: 'XVIII' },
  { tarotLabel: 'The Record', plainLabel: 'Resume', href: '#resume', numeral: 'X' },
  { tarotLabel: 'The Circle', plainLabel: 'Testimonials', href: '#testimonials', numeral: 'V' },
  { tarotLabel: 'The Stage', plainLabel: 'Shows', href: '#upcoming-shows', numeral: 'VIII' },
  { tarotLabel: 'The Oracle', plainLabel: 'Contact', href: '#contact', numeral: 'II' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { tarotMode, toggleTarotMode, darkMode, toggleDarkMode } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navBg = darkMode
    ? (scrolled ? 'rgba(10, 10, 15, 0.95)' : 'transparent')
    : (scrolled ? 'rgba(250, 247, 242, 0.95)' : 'transparent')
  const navBorder = scrolled
    ? `1px solid ${darkMode ? 'rgba(201, 168, 76, 0.15)' : 'rgba(139, 105, 20, 0.15)'}`
    : '1px solid transparent'
  const textColor = darkMode ? '#f5e6d3' : '#2a1a3e'
  const goldColor = darkMode ? '#c9a84c' : '#8b6914'
  const mobileBg = darkMode ? 'rgba(10, 10, 15, 0.98)' : 'rgba(250, 247, 242, 0.98)'
  const numeralColor = darkMode ? '#c9a84c' : '#8b6914'

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
          background: navBg,
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: navBorder,
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
              color: goldColor,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28">
              <circle cx="14" cy="14" r="12" fill="none" stroke={goldColor} strokeWidth="1" />
              <polygon
                points="14,3 16,11 24,11 18,16 20,24 14,19 8,24 10,16 4,11 12,11"
                fill={goldColor}
                opacity="0.7"
              />
            </svg>
            <span>PHYLICIA MCLEOD</span>
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
                  color: textColor,
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = goldColor
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = textColor
                }}
              >
                {tarotMode ? link.tarotLabel : link.plainLabel}
              </a>
            ))}

            {/* Toggle buttons */}
            <div style={{ display: 'flex', gap: 8, marginLeft: 8 }}>
              {/* Tarot/Plain toggle */}
              <button
                onClick={toggleTarotMode}
                title={tarotMode ? 'Switch to plain language' : 'Switch to tarot language'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  border: `1px solid ${darkMode ? 'rgba(201, 168, 76, 0.3)' : 'rgba(139, 105, 20, 0.3)'}`,
                  background: tarotMode
                    ? (darkMode ? 'rgba(201, 168, 76, 0.15)' : 'rgba(139, 105, 20, 0.15)')
                    : 'transparent',
                  color: goldColor,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {tarotMode ? <Sparkles size={16} /> : <Type size={16} />}
              </button>

              {/* Dark/Light toggle */}
              <button
                onClick={toggleDarkMode}
                title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  border: `1px solid ${darkMode ? 'rgba(201, 168, 76, 0.3)' : 'rgba(139, 105, 20, 0.3)'}`,
                  background: 'transparent',
                  color: goldColor,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* Color wheel picker */}
              <ColorWheelPicker />
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="mobile-toggle" style={{ display: 'none', alignItems: 'center', gap: 8 }}>
            {/* Mobile tarot toggle */}
            <button
              onClick={toggleTarotMode}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 32,
                height: 32,
                borderRadius: '50%',
                border: `1px solid ${darkMode ? 'rgba(201, 168, 76, 0.3)' : 'rgba(139, 105, 20, 0.3)'}`,
                background: tarotMode
                  ? (darkMode ? 'rgba(201, 168, 76, 0.15)' : 'rgba(139, 105, 20, 0.15)')
                  : 'transparent',
                color: goldColor,
                cursor: 'pointer',
              }}
            >
              {tarotMode ? <Sparkles size={14} /> : <Type size={14} />}
            </button>

            {/* Mobile dark/light toggle */}
            <button
              onClick={toggleDarkMode}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 32,
                height: 32,
                borderRadius: '50%',
                border: `1px solid ${darkMode ? 'rgba(201, 168, 76, 0.3)' : 'rgba(139, 105, 20, 0.3)'}`,
                background: 'transparent',
                color: goldColor,
                cursor: 'pointer',
              }}
            >
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            {/* Mobile color wheel picker */}
            <ColorWheelPicker />

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: goldColor,
                cursor: 'pointer',
                padding: 4,
              }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
              background: mobileBg,
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
                  color: textColor,
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                {tarotMode && (
                  <span style={{ color: numeralColor, fontSize: '0.75rem', fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif" }}>
                    {link.numeral}
                  </span>
                )}
                {tarotMode ? link.tarotLabel : link.plainLabel}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  )
}

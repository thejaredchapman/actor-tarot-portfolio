import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data/tarotData'
import SectionDivider from '../components/SectionDivider'
import { useTheme } from '../context/ThemeContext'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { tarotMode, darkMode } = useTheme()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const goldColor = darkMode ? '#c9a84c' : '#8b6914'
  const goldLight = darkMode ? '#e8d48b' : '#6b5010'
  const lavenderColor = darkMode ? '#9b7bc7' : '#7b5baa'
  const creamColor = darkMode ? '#f5e6d3' : '#2a1a3e'
  const lavenderFaded = darkMode ? 'rgba(155, 123, 199, 0.4)' : 'rgba(123, 91, 170, 0.4)'
  const lavenderMed = darkMode ? 'rgba(155, 123, 199, 0.6)' : 'rgba(123, 91, 170, 0.6)'
  const goldQuoteFaded = darkMode ? 'rgba(201, 168, 76, 0.15)' : 'rgba(139, 105, 20, 0.15)'
  const goldBorderFaint = darkMode ? 'rgba(201, 168, 76, 0.12)' : 'rgba(139, 105, 20, 0.12)'
  const goldLine = darkMode ? 'rgba(201, 168, 76, 0.3)' : 'rgba(139, 105, 20, 0.3)'
  const goldDotActive = goldColor
  const goldDotInactive = darkMode ? 'rgba(201, 168, 76, 0.25)' : 'rgba(139, 105, 20, 0.25)'
  const cardBg = darkMode ? 'rgba(26, 16, 40, 0.4)' : 'rgba(255, 255, 255, 0.6)'
  const orbBg = darkMode
    ? 'radial-gradient(circle, rgba(107, 63, 160, 0.1) 0%, transparent 70%)'
    : 'radial-gradient(circle, rgba(139, 105, 20, 0.05) 0%, transparent 70%)'

  return (
    <section
      id="testimonials"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '120px 24px',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: orbBg,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          {tarotMode && (
            <span style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: goldColor,
            }}>
              V
            </span>
          )}
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: goldLight,
            letterSpacing: '0.08em',
            margin: '8px 0',
          }}>
            {tarotMode ? 'The Hierophant' : 'Testimonials'}
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.15rem',
            fontStyle: 'italic',
            color: lavenderColor,
          }}>
            {tarotMode
              ? 'Words of wisdom from those who have witnessed the magic'
              : 'What directors say'}
          </p>
          <SectionDivider symbol={tarotMode ? "\u2720" : undefined} />
        </motion.div>

        <div style={{
          position: 'relative',
          minHeight: 300,
          display: 'flex',
          alignItems: 'center',
        }}>
          <button
            onClick={prev}
            style={{
              position: 'absolute',
              left: -20,
              zIndex: 10,
              background: 'none',
              border: 'none',
              color: goldColor,
              cursor: 'pointer',
              opacity: 0.5,
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.5' }}
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={next}
            style={{
              position: 'absolute',
              right: -20,
              zIndex: 10,
              background: 'none',
              border: 'none',
              color: goldColor,
              cursor: 'pointer',
              opacity: 0.5,
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.5' }}
          >
            <ChevronRight size={32} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              style={{
                width: '100%',
                padding: '40px 60px',
                textAlign: 'center',
                background: cardBg,
                backdropFilter: 'blur(15px)',
                border: `1px solid ${goldBorderFaint}`,
                borderRadius: 16,
                position: 'relative',
              }}
            >
              <Quote
                size={40}
                style={{
                  position: 'absolute',
                  top: 16,
                  left: 24,
                  color: goldQuoteFaded,
                }}
              />

              {tarotMode && (
                <span style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  color: lavenderFaded,
                }}>
                  {testimonials[current].card}
                </span>
              )}

              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                lineHeight: 1.8,
                color: creamColor,
                fontStyle: 'italic',
                margin: '20px 0 24px',
              }}>
                "{testimonials[current].quote}"
              </p>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
              }}>
                <div style={{
                  width: 40,
                  height: 1,
                  background: goldLine,
                  marginBottom: 12,
                }} />
                <span style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.85rem',
                  color: goldColor,
                  letterSpacing: '0.1em',
                }}>
                  {testimonials[current].author}
                </span>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '0.85rem',
                  color: lavenderMed,
                  fontStyle: 'italic',
                }}>
                  {testimonials[current].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 12,
          marginTop: 28,
        }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                borderRadius: 4,
                border: 'none',
                background: i === current ? goldDotActive : goldDotInactive,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

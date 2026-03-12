import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data/tarotData'
import SectionDivider from '../components/SectionDivider'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section
      id="testimonials"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '120px 24px',
      }}
    >
      {/* Background */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(107, 63, 160, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <span style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            color: '#c9a84c',
          }}>
            V
          </span>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: '#e8d48b',
            letterSpacing: '0.08em',
            margin: '8px 0',
          }}>
            The Hierophant
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.15rem',
            fontStyle: 'italic',
            color: '#9b7bc7',
          }}>
            Words of wisdom from those who have witnessed the magic
          </p>
          <SectionDivider symbol="\u2720" />
        </motion.div>

        {/* Testimonial Carousel */}
        <div style={{
          position: 'relative',
          minHeight: 300,
          display: 'flex',
          alignItems: 'center',
        }}>
          {/* Navigation */}
          <button
            onClick={prev}
            style={{
              position: 'absolute',
              left: -20,
              zIndex: 10,
              background: 'none',
              border: 'none',
              color: '#c9a84c',
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
              color: '#c9a84c',
              cursor: 'pointer',
              opacity: 0.5,
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.5' }}
          >
            <ChevronRight size={32} />
          </button>

          {/* Content */}
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
                background: 'rgba(26, 16, 40, 0.4)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(201, 168, 76, 0.12)',
                borderRadius: 16,
                position: 'relative',
              }}
            >
              {/* Quote icon */}
              <Quote
                size={40}
                style={{
                  position: 'absolute',
                  top: 16,
                  left: 24,
                  color: 'rgba(201, 168, 76, 0.15)',
                }}
              />

              {/* Card reference */}
              <span style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: 'rgba(155, 123, 199, 0.4)',
              }}>
                {testimonials[current].card}
              </span>

              {/* Quote */}
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                lineHeight: 1.8,
                color: '#f5e6d3',
                fontStyle: 'italic',
                margin: '20px 0 24px',
              }}>
                "{testimonials[current].quote}"
              </p>

              {/* Attribution */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
              }}>
                <div style={{
                  width: 40,
                  height: 1,
                  background: 'rgba(201, 168, 76, 0.3)',
                  marginBottom: 12,
                }} />
                <span style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.85rem',
                  color: '#c9a84c',
                  letterSpacing: '0.1em',
                }}>
                  {testimonials[current].author}
                </span>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '0.85rem',
                  color: 'rgba(155, 123, 199, 0.6)',
                  fontStyle: 'italic',
                }}>
                  {testimonials[current].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
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
                background: i === current ? '#c9a84c' : 'rgba(201, 168, 76, 0.25)',
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

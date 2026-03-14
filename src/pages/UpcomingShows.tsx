import { motion } from 'framer-motion'
import { Calendar, MapPin, Ticket } from 'lucide-react'
import { upcomingShows } from '../data/tarotData'
import SectionDivider from '../components/SectionDivider'
import { useTheme } from '../context/ThemeContext'

const statusColors = {
  available: { color: '#4ade80', label: 'Tickets Available' },
  limited: { color: '#fbbf24', label: 'Limited Availability' },
  'sold-out': { color: '#ef4444', label: 'Sold Out' },
}

export default function UpcomingShows() {
  const { tarotMode, darkMode } = useTheme()

  const goldColor = darkMode ? '#c9a84c' : '#8b6914'
  const goldLight = darkMode ? '#e8d48b' : '#6b5010'
  const lavenderColor = darkMode ? '#9b7bc7' : '#7b5baa'
  const creamFaded = darkMode ? 'rgba(245, 230, 211, 0.7)' : 'rgba(42, 26, 62, 0.7)'
  const lavenderFaded = darkMode ? 'rgba(155, 123, 199, 0.4)' : 'rgba(123, 91, 170, 0.4)'
  const lavenderMed = darkMode ? 'rgba(155, 123, 199, 0.6)' : 'rgba(123, 91, 170, 0.6)'
  const goldNumeral = darkMode ? 'rgba(201, 168, 76, 0.3)' : 'rgba(139, 105, 20, 0.3)'
  const goldLine = darkMode ? 'rgba(201, 168, 76, 0.15)' : 'rgba(139, 105, 20, 0.15)'
  const goldBorderFaint = darkMode ? 'rgba(201, 168, 76, 0.12)' : 'rgba(139, 105, 20, 0.12)'
  const cardBg = darkMode ? 'rgba(26, 16, 40, 0.4)' : 'rgba(255, 255, 255, 0.6)'
  const bgGradient = darkMode
    ? 'linear-gradient(180deg, transparent 0%, rgba(26, 16, 40, 0.15) 30%, rgba(26, 16, 40, 0.15) 70%, transparent 100%)'
    : 'linear-gradient(180deg, transparent 0%, rgba(139, 105, 20, 0.03) 30%, rgba(139, 105, 20, 0.03) 70%, transparent 100%)'

  return (
    <section
      id="upcoming-shows"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '120px 24px',
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: bgGradient,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative' }}>
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
              VIII
            </span>
          )}
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: goldLight,
            letterSpacing: '0.08em',
            margin: '8px 0',
          }}>
            {tarotMode ? 'The Chariot' : 'Upcoming Shows'}
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.15rem',
            fontStyle: 'italic',
            color: lavenderColor,
          }}>
            {tarotMode
              ? 'Upcoming performances \u2014 witness the next chapter unfold'
              : "See what's next on stage"}
          </p>
          <SectionDivider symbol={tarotMode ? "\u2606" : undefined} />
        </motion.div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
        }}>
          {upcomingShows.map((show, i) => {
            const status = statusColors[show.ticketStatus]
            return (
              <motion.div
                key={show.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: tarotMode ? '100px 1fr' : '1fr',
                  gap: 28,
                  padding: 32,
                  background: cardBg,
                  backdropFilter: 'blur(15px)',
                  border: `1px solid ${goldBorderFaint}`,
                  borderRadius: 16,
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="show-card"
              >
                {tarotMode && (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                  }}>
                    <span style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: '1.8rem',
                      color: goldNumeral,
                      letterSpacing: '0.1em',
                    }}>
                      {show.cardNumber}
                    </span>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '0.7rem',
                      fontStyle: 'italic',
                      color: lavenderFaded,
                      textAlign: 'center',
                      lineHeight: 1.3,
                    }}>
                      {show.cardName}
                    </span>
                    <div style={{
                      width: 30,
                      height: 1,
                      background: goldLine,
                      marginTop: 4,
                    }} />
                  </div>
                )}

                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 12,
                    marginBottom: 8,
                  }}>
                    <h3 style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                      color: goldLight,
                      letterSpacing: '0.06em',
                    }}>
                      {show.production}
                    </h3>

                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '4px 12px',
                      borderRadius: 20,
                      border: `1px solid ${status.color}33`,
                      background: `${status.color}11`,
                      fontFamily: "'Cinzel', serif",
                      fontSize: '0.6rem',
                      letterSpacing: '0.1em',
                      color: status.color,
                      textTransform: 'uppercase',
                    }}>
                      <Ticket size={12} />
                      {status.label}
                    </span>
                  </div>

                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '0.95rem',
                    color: goldColor,
                    marginBottom: 12,
                  }}>
                    as <em>{show.role}</em> — directed by {show.director}
                  </p>

                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: creamFaded,
                    marginBottom: 16,
                  }}>
                    {show.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    gap: 24,
                    flexWrap: 'wrap',
                  }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '0.9rem',
                      color: lavenderMed,
                    }}>
                      <Calendar size={14} />
                      {show.dates}
                    </span>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '0.9rem',
                      color: lavenderMed,
                    }}>
                      <MapPin size={14} />
                      {show.venue}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .show-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

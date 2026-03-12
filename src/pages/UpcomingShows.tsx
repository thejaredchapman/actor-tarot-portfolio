import { motion } from 'framer-motion'
import { Calendar, MapPin, Ticket } from 'lucide-react'
import { upcomingShows } from '../data/tarotData'
import SectionDivider from '../components/SectionDivider'

const statusColors = {
  available: { color: '#4ade80', label: 'Tickets Available' },
  limited: { color: '#fbbf24', label: 'Limited Availability' },
  'sold-out': { color: '#ef4444', label: 'Sold Out' },
}

export default function UpcomingShows() {
  return (
    <section
      id="upcoming-shows"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '120px 24px',
      }}
    >
      {/* Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, transparent 0%, rgba(26, 16, 40, 0.15) 30%, rgba(26, 16, 40, 0.15) 70%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative' }}>
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
            VIII
          </span>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: '#e8d48b',
            letterSpacing: '0.08em',
            margin: '8px 0',
          }}>
            The Chariot
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.15rem',
            fontStyle: 'italic',
            color: '#9b7bc7',
          }}>
            Upcoming performances — witness the next chapter unfold
          </p>
          <SectionDivider symbol="&#x2606;" />
        </motion.div>

        {/* Shows */}
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
                  gridTemplateColumns: '100px 1fr',
                  gap: 28,
                  padding: 32,
                  background: 'rgba(26, 16, 40, 0.4)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(201, 168, 76, 0.12)',
                  borderRadius: 16,
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="show-card"
              >
                {/* Tarot number accent */}
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
                    color: 'rgba(201, 168, 76, 0.3)',
                    letterSpacing: '0.1em',
                  }}>
                    {show.cardNumber}
                  </span>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '0.7rem',
                    fontStyle: 'italic',
                    color: 'rgba(155, 123, 199, 0.4)',
                    textAlign: 'center',
                    lineHeight: 1.3,
                  }}>
                    {show.cardName}
                  </span>
                  <div style={{
                    width: 30,
                    height: 1,
                    background: 'rgba(201, 168, 76, 0.15)',
                    marginTop: 4,
                  }} />
                </div>

                {/* Show details */}
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
                      color: '#e8d48b',
                      letterSpacing: '0.06em',
                    }}>
                      {show.production}
                    </h3>

                    {/* Ticket status badge */}
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
                    color: '#c9a84c',
                    marginBottom: 12,
                  }}>
                    as <em>{show.role}</em> — directed by {show.director}
                  </p>

                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: 'rgba(245, 230, 211, 0.7)',
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
                      color: 'rgba(155, 123, 199, 0.6)',
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
                      color: 'rgba(155, 123, 199, 0.6)',
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

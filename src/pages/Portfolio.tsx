import { motion } from 'framer-motion'
import { featuredRoles } from '../data/tarotData'
import TarotCard from '../components/TarotCard'
import SectionDivider from '../components/SectionDivider'
import { useTheme } from '../context/ThemeContext'

export default function Portfolio() {
  const { tarotMode, darkMode } = useTheme()

  const goldColor = darkMode ? '#c9a84c' : '#8b6914'
  const goldLight = darkMode ? '#e8d48b' : '#6b5010'
  const lavenderColor = darkMode ? '#9b7bc7' : '#7b5baa'
  const lavenderFaded = darkMode ? 'rgba(155, 123, 199, 0.5)' : 'rgba(123, 91, 170, 0.5)'

  return (
    <section
      id="portfolio"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '120px 24px',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
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
              THE SPREAD
            </span>
          )}
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: goldLight,
            letterSpacing: '0.08em',
            margin: '8px 0',
          }}>
            Featured Roles
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.15rem',
            fontStyle: 'italic',
            color: lavenderColor,
          }}>
            {tarotMode
              ? 'Each role is a card drawn from the deck of fate. Tap to reveal the reading.'
              : 'Click any role card to see details about the performance.'}
          </p>
          <SectionDivider symbol={tarotMode ? "\u2721" : undefined} />
        </motion.div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 32,
        }}>
          {featuredRoles.map((role, index) => (
            <TarotCard key={role.id} role={role} index={index} />
          ))}
        </div>

        {tarotMode && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              textAlign: 'center',
              marginTop: 48,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '0.9rem',
              fontStyle: 'italic',
              color: lavenderFaded,
            }}
          >
            "The cards you are drawn to reveal the story you are meant to tell."
          </motion.p>
        )}
      </div>
    </section>
  )
}

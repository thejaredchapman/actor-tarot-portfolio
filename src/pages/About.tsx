import { motion } from 'framer-motion'
import { actorInfo } from '../data/tarotData'
import SectionDivider from '../components/SectionDivider'
import { useTheme } from '../context/ThemeContext'

export default function About() {
  const { tarotMode, darkMode } = useTheme()

  const goldColor = darkMode ? '#c9a84c' : '#8b6914'
  const goldLight = darkMode ? '#e8d48b' : '#6b5010'
  const lavenderColor = darkMode ? '#9b7bc7' : '#7b5baa'
  const creamColor = darkMode ? '#f5e6d3' : '#2a1a3e'
  const cardBg = darkMode ? 'rgba(26, 16, 40, 0.5)' : 'rgba(255, 255, 255, 0.7)'
  const cardBorder = darkMode ? 'rgba(201, 168, 76, 0.15)' : 'rgba(139, 105, 20, 0.15)'
  const bgGradient = darkMode
    ? 'linear-gradient(180deg, transparent 0%, rgba(26, 16, 40, 0.3) 20%, rgba(26, 16, 40, 0.3) 80%, transparent 100%)'
    : 'linear-gradient(180deg, transparent 0%, rgba(139, 105, 20, 0.04) 20%, rgba(139, 105, 20, 0.04) 80%, transparent 100%)'
  const skillBg = darkMode ? 'rgba(201, 168, 76, 0.05)' : 'rgba(139, 105, 20, 0.05)'
  const skillBgHover = darkMode ? 'rgba(201, 168, 76, 0.15)' : 'rgba(139, 105, 20, 0.15)'
  const skillBorder = darkMode ? 'rgba(201, 168, 76, 0.25)' : 'rgba(139, 105, 20, 0.25)'
  const skillBorderHover = darkMode ? 'rgba(201, 168, 76, 0.5)' : 'rgba(139, 105, 20, 0.5)'
  const cornerStroke = darkMode ? '#c9a84c' : '#8b6914'
  const silhouetteFill = darkMode ? '#c9a84c' : '#8b6914'
  const headShotLbl = darkMode ? 'rgba(201, 168, 76, 0.4)' : 'rgba(139, 105, 20, 0.4)'
  const placeholderBg = darkMode
    ? 'linear-gradient(135deg, rgba(74, 45, 107, 0.4), rgba(26, 16, 40, 0.8))'
    : 'linear-gradient(135deg, rgba(139, 105, 20, 0.1), rgba(232, 224, 240, 0.5))'

  return (
    <section
      id="about"
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

      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
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
              XXI
            </span>
          )}
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: goldLight,
            letterSpacing: '0.08em',
            margin: '8px 0',
          }}>
            {tarotMode ? 'The World' : 'About'}
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.15rem',
            fontStyle: 'italic',
            color: lavenderColor,
          }}>
            {tarotMode ? 'Completion, Integration, Accomplishment' : 'Biography & Skills'}
          </p>
          <SectionDivider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: cardBg,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${cardBorder}`,
            borderRadius: 16,
            padding: 'clamp(24px, 5vw, 48px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {[
            { top: 12, left: 12, d: 'M0,40 L0,10 Q0,0 10,0 L40,0' },
            { top: 12, right: 12, d: 'M40,40 L40,10 Q40,0 30,0 L0,0' },
            { bottom: 12, left: 12, d: 'M0,0 L0,30 Q0,40 10,40 L40,40' },
            { bottom: 12, right: 12, d: 'M40,0 L40,30 Q40,40 30,40 L0,40' },
          ].map((c, i) => (
            <svg key={i} style={{ position: 'absolute', ...c, opacity: 0.3 } as React.CSSProperties} width="40" height="40" viewBox="0 0 40 40">
              <path d={c.d} fill="none" stroke={cornerStroke} strokeWidth="1" />
            </svg>
          ))}

          <div style={{
            width: 180,
            height: 240,
            margin: '0 auto 32px',
            borderRadius: 12,
            border: `2px solid ${darkMode ? 'rgba(201, 168, 76, 0.3)' : 'rgba(139, 105, 20, 0.3)'}`,
            background: placeholderBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <svg width="100" height="140" viewBox="0 0 100 140" style={{ opacity: 0.4 }}>
              <circle cx="50" cy="40" r="25" fill={silhouetteFill} opacity="0.3" />
              <ellipse cx="50" cy="110" rx="35" ry="30" fill={silhouetteFill} opacity="0.2" />
            </svg>
            <div style={{
              position: 'absolute',
              bottom: 10,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '0.65rem',
              color: headShotLbl,
              fontStyle: 'italic',
            }}>
              Headshot
            </div>
          </div>

          {actorInfo.bio.split('\n\n').map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.15rem',
                lineHeight: 1.9,
                color: creamColor,
                marginBottom: i < 2 ? 20 : 0,
                textAlign: 'center',
              }}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ marginTop: 48, textAlign: 'center' }}
        >
          <h3 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '1rem',
            letterSpacing: '0.15em',
            color: goldColor,
            marginBottom: 24,
          }}>
            DISCIPLINES & TRAINING
          </h3>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 12,
          }}>
            {actorInfo.skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                style={{
                  padding: '8px 18px',
                  border: `1px solid ${skillBorder}`,
                  borderRadius: 25,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '0.9rem',
                  color: goldLight,
                  background: skillBg,
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = skillBgHover
                  e.currentTarget.style.borderColor = skillBorderHover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = skillBg
                  e.currentTarget.style.borderColor = skillBorder
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

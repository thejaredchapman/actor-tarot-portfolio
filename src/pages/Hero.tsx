import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { actorInfo } from '../data/tarotData'
import { useTheme } from '../context/ThemeContext'

export default function Hero() {
  const { tarotMode, darkMode } = useTheme()

  const goldColor = darkMode ? '#c9a84c' : '#8b6914'
  const lavenderColor = darkMode ? '#9b7bc7' : '#7b5baa'
  const creamFaded = darkMode ? 'rgba(245, 230, 211, 0.5)' : 'rgba(42, 26, 62, 0.5)'
  const goldFaded = darkMode ? 'rgba(201, 168, 76, 0.4)' : 'rgba(139, 105, 20, 0.4)'
  const orbBg = darkMode
    ? 'radial-gradient(circle, rgba(107, 63, 160, 0.15) 0%, transparent 70%)'
    : 'radial-gradient(circle, rgba(139, 105, 20, 0.08) 0%, transparent 70%)'

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 24px 40px',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient orb */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 800,
        borderRadius: '50%',
        background: orbBg,
        pointerEvents: 'none',
      }} />

      {/* Central Tarot Card Illustration */}
      {tarotMode && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{ marginBottom: 40 }}
        >
          <svg width="200" height="320" viewBox="0 0 200 320" style={{ filter: `drop-shadow(0 0 40px ${darkMode ? 'rgba(201, 168, 76, 0.2)' : 'rgba(139, 105, 20, 0.15)'})` }}>
            <rect x="10" y="10" width="180" height="300" rx="12" fill="none" stroke={goldColor} strokeWidth="1.5" />
            <rect x="18" y="18" width="164" height="284" rx="8" fill="none" stroke={`${goldColor}4d`} strokeWidth="0.5" />
            {[[25, 25], [175, 25], [25, 295], [175, 295]].map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="6" fill="none" stroke={goldColor} strokeWidth="0.5" />
                <circle cx={x} cy={y} r="2" fill={goldColor} opacity="0.5" />
              </g>
            ))}
            <text x="100" y="50" textAnchor="middle" fontFamily="Cinzel" fontSize="12" fill={goldColor} letterSpacing="3">XVII</text>
            <g transform="translate(100, 150)">
              <circle r="60" fill="none" stroke={goldColor} strokeWidth="0.5" />
              <circle r="50" fill="none" stroke={`${lavenderColor}66`} strokeWidth="0.3" strokeDasharray="3,3" />
              <circle r="40" fill="none" stroke={goldColor} strokeWidth="0.3" />
              <polygon
                points="0,-45 12,-15 45,-15 18,5 27,40 0,20 -27,40 -18,5 -45,-15 -12,-15"
                fill={`${goldColor}26`}
                stroke={goldColor}
                strokeWidth="1"
              />
              <polygon
                points="0,-20 6,-7 20,-7 9,2 12,18 0,10 -12,18 -9,2 -20,-7 -6,-7"
                fill={goldColor}
                opacity="0.4"
              />
              <circle r="4" fill={goldColor} opacity="0.8" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                const rad = (angle * Math.PI) / 180
                const x = Math.cos(rad) * 55
                const y = Math.sin(rad) * 55
                return (
                  <circle key={angle} cx={x} cy={y} r="1.5" fill={goldColor} opacity="0.5" />
                )
              })}
            </g>
            <path d="M40,220 Q70,210 100,220 Q130,230 160,220" fill="none" stroke={`${lavenderColor}4d`} strokeWidth="0.8" />
            <path d="M40,230 Q70,220 100,230 Q130,240 160,230" fill="none" stroke={`${lavenderColor}33`} strokeWidth="0.5" />
            <text x="100" y="270" textAnchor="middle" fontFamily="Cinzel" fontSize="13" fill={goldColor} letterSpacing="4">THE STAR</text>
            <text x="100" y="290" textAnchor="middle" fontFamily="Cormorant Garamond" fontSize="9" fill={`${lavenderColor}99`} fontStyle="italic" letterSpacing="2">Major Arcana</text>
          </svg>
        </motion.div>
      )}

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="shimmer-text"
        style={{
          fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
          fontFamily: "'Cinzel', serif",
          fontWeight: 700,
          letterSpacing: '0.12em',
          marginBottom: 16,
        }}
      >
        {actorInfo.name}
      </motion.h1>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          width: 200,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${goldColor}, transparent)`,
          margin: '0 auto 20px',
        }}
      />

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          fontStyle: 'italic',
          color: lavenderColor,
          letterSpacing: '0.05em',
          maxWidth: 600,
        }}
      >
        {tarotMode
          ? actorInfo.tagline
          : 'Award-winning actor. Powerful, transformative performances.'}
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        style={{
          display: 'flex',
          gap: 40,
          marginTop: 50,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {Object.entries(actorInfo.stats).map(([key, value]) => (
          <div key={key} style={{ textAlign: 'center' }}>
            <p style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '1.8rem',
              color: goldColor,
              fontWeight: 700,
            }}>
              {value}
            </p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '0.8rem',
              color: creamFaded,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              {key === 'yearsActive' ? 'Years Active' : key}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.5 },
          y: { delay: 2, duration: 2, repeat: Infinity },
        }}
        style={{
          position: 'absolute',
          bottom: 30,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '0.7rem',
          color: goldFaded,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          {tarotMode ? 'Draw a Card' : 'Scroll Down'}
        </span>
        <ChevronDown size={20} color={goldFaded} />
      </motion.div>
    </section>
  )
}

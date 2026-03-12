import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { actorInfo } from '../data/tarotData'

export default function Hero() {
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
        background: 'radial-gradient(circle, rgba(107, 63, 160, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Central Tarot Card Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        style={{ marginBottom: 40 }}
      >
        <svg width="200" height="320" viewBox="0 0 200 320" style={{ filter: 'drop-shadow(0 0 40px rgba(201, 168, 76, 0.2))' }}>
          {/* Card outline */}
          <rect x="10" y="10" width="180" height="300" rx="12" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
          <rect x="18" y="18" width="164" height="284" rx="8" fill="none" stroke="rgba(201, 168, 76, 0.3)" strokeWidth="0.5" />

          {/* Corner ornaments */}
          {[[25, 25], [175, 25], [25, 295], [175, 295]].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="6" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
              <circle cx={x} cy={y} r="2" fill="#c9a84c" opacity="0.5" />
            </g>
          ))}

          {/* Card number */}
          <text x="100" y="50" textAnchor="middle" fontFamily="Cinzel" fontSize="12" fill="#c9a84c" letterSpacing="3">XVII</text>

          {/* Central star design */}
          <g transform="translate(100, 150)">
            <circle r="60" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
            <circle r="50" fill="none" stroke="rgba(155, 123, 199, 0.4)" strokeWidth="0.3" strokeDasharray="3,3" />
            <circle r="40" fill="none" stroke="#c9a84c" strokeWidth="0.3" />

            {/* Main star */}
            <polygon
              points="0,-45 12,-15 45,-15 18,5 27,40 0,20 -27,40 -18,5 -45,-15 -12,-15"
              fill="rgba(201, 168, 76, 0.15)"
              stroke="#c9a84c"
              strokeWidth="1"
            />

            {/* Inner star */}
            <polygon
              points="0,-20 6,-7 20,-7 9,2 12,18 0,10 -12,18 -9,2 -20,-7 -6,-7"
              fill="#c9a84c"
              opacity="0.4"
            />

            {/* Center point */}
            <circle r="4" fill="#c9a84c" opacity="0.8" />

            {/* Surrounding small stars */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
              const rad = (angle * Math.PI) / 180
              const x = Math.cos(rad) * 55
              const y = Math.sin(rad) * 55
              return (
                <circle key={angle} cx={x} cy={y} r="1.5" fill="#c9a84c" opacity="0.5" />
              )
            })}
          </g>

          {/* Flowing lines (water/energy) */}
          <path d="M40,220 Q70,210 100,220 Q130,230 160,220" fill="none" stroke="rgba(155, 123, 199, 0.3)" strokeWidth="0.8" />
          <path d="M40,230 Q70,220 100,230 Q130,240 160,230" fill="none" stroke="rgba(155, 123, 199, 0.2)" strokeWidth="0.5" />

          {/* Card name */}
          <text x="100" y="270" textAnchor="middle" fontFamily="Cinzel" fontSize="13" fill="#c9a84c" letterSpacing="4">THE STAR</text>
          <text x="100" y="290" textAnchor="middle" fontFamily="Cormorant Garamond" fontSize="9" fill="rgba(155, 123, 199, 0.6)" fontStyle="italic" letterSpacing="2">Major Arcana</text>
        </svg>
      </motion.div>

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
          background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
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
          color: '#9b7bc7',
          letterSpacing: '0.05em',
          maxWidth: 600,
        }}
      >
        {actorInfo.tagline}
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
              color: '#c9a84c',
              fontWeight: 700,
            }}>
              {value}
            </p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '0.8rem',
              color: 'rgba(245, 230, 211, 0.5)',
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
          color: 'rgba(201, 168, 76, 0.4)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          Draw a Card
        </span>
        <ChevronDown size={20} color="rgba(201, 168, 76, 0.4)" />
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at center, #1a1028 0%, #0a0a0f 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      {/* Rotating tarot card back */}
      <motion.div
        animate={{ rotateY: [0, 180, 360] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: 120,
          height: 200,
          borderRadius: 10,
          border: '2px solid #c9a84c',
          background: `
            linear-gradient(135deg, #1a1028 0%, #2a1a3e 50%, #1a1028 100%)
          `,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 40,
          boxShadow: '0 0 40px rgba(201, 168, 76, 0.3), 0 0 80px rgba(107, 63, 160, 0.15)',
          transformStyle: 'preserve-3d',
        }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" style={{ opacity: 0.8 }}>
          <circle cx="30" cy="30" r="25" fill="none" stroke="#c9a84c" strokeWidth="1" />
          <polygon
            points="30,5 35,25 55,25 39,35 44,55 30,43 16,55 21,35 5,25 25,25"
            fill="none"
            stroke="#c9a84c"
            strokeWidth="0.8"
            opacity="0.7"
          />
          <circle cx="30" cy="30" r="8" fill="none" stroke="#c9a84c" strokeWidth="0.8" />
          <circle cx="30" cy="30" r="2" fill="#c9a84c" />
        </svg>
      </motion.div>

      {/* Loading text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '1rem',
          letterSpacing: '0.3em',
          color: '#c9a84c',
          textTransform: 'uppercase',
        }}
      >
        Shuffling the Deck
      </motion.p>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.5 }}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: '0.9rem',
          color: '#9b7bc7',
          marginTop: 8,
          letterSpacing: '0.05em',
        }}
      >
        The cards are aligning...
      </motion.p>
    </motion.div>
  )
}

import { motion } from 'framer-motion'
import { actorInfo } from '../data/tarotData'
import SectionDivider from '../components/SectionDivider'

export default function About() {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '120px 24px',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, transparent 0%, rgba(26, 16, 40, 0.3) 20%, rgba(26, 16, 40, 0.3) 80%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
        {/* Section Header */}
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
            XXI
          </span>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: '#e8d48b',
            letterSpacing: '0.08em',
            margin: '8px 0',
          }}>
            The World
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.15rem',
            fontStyle: 'italic',
            color: '#9b7bc7',
          }}>
            Completion, Integration, Accomplishment
          </p>
          <SectionDivider />
        </motion.div>

        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'rgba(26, 16, 40, 0.5)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(201, 168, 76, 0.15)',
            borderRadius: 16,
            padding: 'clamp(24px, 5vw, 48px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative corner SVGs */}
          <svg style={{ position: 'absolute', top: 12, left: 12, opacity: 0.3 }} width="40" height="40" viewBox="0 0 40 40">
            <path d="M0,40 L0,10 Q0,0 10,0 L40,0" fill="none" stroke="#c9a84c" strokeWidth="1" />
          </svg>
          <svg style={{ position: 'absolute', top: 12, right: 12, opacity: 0.3 }} width="40" height="40" viewBox="0 0 40 40">
            <path d="M40,40 L40,10 Q40,0 30,0 L0,0" fill="none" stroke="#c9a84c" strokeWidth="1" />
          </svg>
          <svg style={{ position: 'absolute', bottom: 12, left: 12, opacity: 0.3 }} width="40" height="40" viewBox="0 0 40 40">
            <path d="M0,0 L0,30 Q0,40 10,40 L40,40" fill="none" stroke="#c9a84c" strokeWidth="1" />
          </svg>
          <svg style={{ position: 'absolute', bottom: 12, right: 12, opacity: 0.3 }} width="40" height="40" viewBox="0 0 40 40">
            <path d="M40,0 L40,30 Q40,40 30,40 L0,40" fill="none" stroke="#c9a84c" strokeWidth="1" />
          </svg>

          {/* Placeholder headshot area */}
          <div style={{
            width: 180,
            height: 240,
            margin: '0 auto 32px',
            borderRadius: 12,
            border: '2px solid rgba(201, 168, 76, 0.3)',
            background: 'linear-gradient(135deg, rgba(74, 45, 107, 0.4), rgba(26, 16, 40, 0.8))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Silhouette placeholder */}
            <svg width="100" height="140" viewBox="0 0 100 140" style={{ opacity: 0.4 }}>
              <circle cx="50" cy="40" r="25" fill="#c9a84c" opacity="0.3" />
              <ellipse cx="50" cy="110" rx="35" ry="30" fill="#c9a84c" opacity="0.2" />
            </svg>
            <div style={{
              position: 'absolute',
              bottom: 10,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '0.65rem',
              color: 'rgba(201, 168, 76, 0.4)',
              fontStyle: 'italic',
            }}>
              Headshot
            </div>
          </div>

          {/* Bio text */}
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
                color: '#f5e6d3',
                marginBottom: i < 2 ? 20 : 0,
                textAlign: 'center',
              }}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* Skills Grid */}
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
            color: '#c9a84c',
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
                  border: '1px solid rgba(201, 168, 76, 0.25)',
                  borderRadius: 25,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '0.9rem',
                  color: '#e8d48b',
                  background: 'rgba(201, 168, 76, 0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(201, 168, 76, 0.15)'
                  e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(201, 168, 76, 0.05)'
                  e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.25)'
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

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { resumeCredits, awards } from '../data/tarotData'
import SectionDivider from '../components/SectionDivider'

export default function Resume() {
  return (
    <section
      id="resume"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '120px 24px',
      }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
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
            X
          </span>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: '#e8d48b',
            letterSpacing: '0.08em',
            margin: '8px 0',
          }}>
            The Wheel of Fortune
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.15rem',
            fontStyle: 'italic',
            color: '#9b7bc7',
          }}>
            The complete record of roles written in the stars
          </p>
          <SectionDivider symbol="\u2638" />

          {/* Download button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              marginTop: 16,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '12px 28px',
              border: '1px solid #c9a84c',
              borderRadius: 30,
              background: 'rgba(201, 168, 76, 0.1)',
              color: '#c9a84c',
              fontFamily: "'Cinzel', serif",
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(201, 168, 76, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(201, 168, 76, 0.1)'
            }}
          >
            <Download size={16} />
            DOWNLOAD RESUME
          </motion.button>
        </motion.div>

        {/* Credits Sections */}
        {resumeCredits.map((section, sectionIndex) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: sectionIndex * 0.15 }}
            style={{ marginBottom: 48 }}
          >
            {/* Category Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 20,
            }}>
              <h3 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '1rem',
                letterSpacing: '0.15em',
                color: '#c9a84c',
              }}>
                {section.category.toUpperCase()}
              </h3>
              <div style={{
                flex: 1,
                height: 1,
                background: 'linear-gradient(90deg, rgba(201, 168, 76, 0.3), transparent)',
              }} />
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '0.8rem',
                fontStyle: 'italic',
                color: 'rgba(155, 123, 199, 0.5)',
              }}>
                {section.cardName}
              </span>
            </div>

            {/* Credits Table */}
            <div style={{
              background: 'rgba(26, 16, 40, 0.3)',
              border: '1px solid rgba(201, 168, 76, 0.1)',
              borderRadius: 12,
              overflow: 'hidden',
            }}>
              {section.credits.map((credit, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: 16,
                    padding: '14px 24px',
                    borderBottom: i < section.credits.length - 1
                      ? '1px solid rgba(201, 168, 76, 0.06)'
                      : 'none',
                    transition: 'background 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(201, 168, 76, 0.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#f5e6d3',
                  }}>
                    {credit.role}
                  </span>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '0.95rem',
                    fontStyle: 'italic',
                    color: '#9b7bc7',
                  }}>
                    {credit.production}
                    {credit.venue && (
                      <span style={{ color: 'rgba(155, 123, 199, 0.5)', display: 'block', fontSize: '0.8rem' }}>
                        {credit.venue}
                      </span>
                    )}
                  </span>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '0.9rem',
                    color: 'rgba(245, 230, 211, 0.5)',
                    textAlign: 'right',
                  }}>
                    {credit.director && `Dir. ${credit.director}`}
                    <span style={{ display: 'block', fontSize: '0.8rem', color: '#c9a84c' }}>
                      {credit.year}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 20,
          }}>
            <h3 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '1rem',
              letterSpacing: '0.15em',
              color: '#c9a84c',
            }}>
              AWARDS & HONOURS
            </h3>
            <div style={{
              flex: 1,
              height: 1,
              background: 'linear-gradient(90deg, rgba(201, 168, 76, 0.3), transparent)',
            }} />
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '0.8rem',
              fontStyle: 'italic',
              color: 'rgba(155, 123, 199, 0.5)',
            }}>
              The Sun
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 16,
          }}>
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  padding: '16px 20px',
                  border: '1px solid rgba(201, 168, 76, 0.15)',
                  borderRadius: 10,
                  background: 'rgba(201, 168, 76, 0.03)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.35)'
                  e.currentTarget.style.background = 'rgba(201, 168, 76, 0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.15)'
                  e.currentTarget.style.background = 'rgba(201, 168, 76, 0.03)'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 6,
                }}>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '0.65rem',
                    color: 'rgba(155, 123, 199, 0.5)',
                    fontStyle: 'italic',
                  }}>
                    {award.card}
                  </span>
                  <span style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.65rem',
                    color: '#c9a84c',
                    letterSpacing: '0.1em',
                  }}>
                    {award.year}
                  </span>
                </div>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#e8d48b',
                  lineHeight: 1.4,
                }}>
                  {award.name}
                </p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  color: 'rgba(245, 230, 211, 0.5)',
                  marginTop: 4,
                }}>
                  {award.production}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #resume [style*="grid-template-columns: 1fr 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

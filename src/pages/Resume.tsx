import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { resumeCredits, awards } from '../data/tarotData'
import SectionDivider from '../components/SectionDivider'
import { useTheme } from '../context/ThemeContext'

export default function Resume() {
  const { tarotMode, darkMode } = useTheme()

  const goldColor = darkMode ? '#c9a84c' : '#8b6914'
  const goldLight = darkMode ? '#e8d48b' : '#6b5010'
  const lavenderColor = darkMode ? '#9b7bc7' : '#7b5baa'
  const creamColor = darkMode ? '#f5e6d3' : '#2a1a3e'
  const creamFaded = darkMode ? 'rgba(245, 230, 211, 0.5)' : 'rgba(42, 26, 62, 0.5)'
  const lavenderFaded = darkMode ? 'rgba(155, 123, 199, 0.5)' : 'rgba(123, 91, 170, 0.5)'
  const goldBorderLight = darkMode ? 'rgba(201, 168, 76, 0.3)' : 'rgba(139, 105, 20, 0.3)'
  const goldBorderFaint = darkMode ? 'rgba(201, 168, 76, 0.1)' : 'rgba(139, 105, 20, 0.1)'
  const goldBorderMed = darkMode ? 'rgba(201, 168, 76, 0.15)' : 'rgba(139, 105, 20, 0.15)'
  const goldBorderStrong = darkMode ? 'rgba(201, 168, 76, 0.35)' : 'rgba(139, 105, 20, 0.35)'
  const rowHoverBg = darkMode ? 'rgba(201, 168, 76, 0.05)' : 'rgba(139, 105, 20, 0.05)'
  const tableBg = darkMode ? 'rgba(26, 16, 40, 0.3)' : 'rgba(255, 255, 255, 0.5)'
  const awardBg = darkMode ? 'rgba(201, 168, 76, 0.03)' : 'rgba(139, 105, 20, 0.03)'
  const awardBgHover = darkMode ? 'rgba(201, 168, 76, 0.08)' : 'rgba(139, 105, 20, 0.08)'
  const buttonBg = darkMode ? 'rgba(201, 168, 76, 0.1)' : 'rgba(139, 105, 20, 0.1)'
  const buttonBgHover = darkMode ? 'rgba(201, 168, 76, 0.2)' : 'rgba(139, 105, 20, 0.2)'

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
              X
            </span>
          )}
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: goldLight,
            letterSpacing: '0.08em',
            margin: '8px 0',
          }}>
            {tarotMode ? 'The Wheel of Fortune' : 'Resume'}
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.15rem',
            fontStyle: 'italic',
            color: lavenderColor,
          }}>
            {tarotMode ? 'The complete record of roles written in the stars' : 'Complete performance history'}
          </p>
          <SectionDivider symbol={tarotMode ? "\u2638" : undefined} />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              marginTop: 16,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '12px 28px',
              border: `1px solid ${goldColor}`,
              borderRadius: 30,
              background: buttonBg,
              color: goldColor,
              fontFamily: "'Cinzel', serif",
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = buttonBgHover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = buttonBg
            }}
          >
            <Download size={16} />
            DOWNLOAD RESUME
          </motion.button>
        </motion.div>

        {resumeCredits.map((section, sectionIndex) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: sectionIndex * 0.15 }}
            style={{ marginBottom: 48 }}
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
                color: goldColor,
              }}>
                {section.category.toUpperCase()}
              </h3>
              <div style={{
                flex: 1,
                height: 1,
                background: `linear-gradient(90deg, ${goldBorderLight}, transparent)`,
              }} />
              {tarotMode && (
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  color: lavenderFaded,
                }}>
                  {section.cardName}
                </span>
              )}
            </div>

            <div style={{
              background: tableBg,
              border: `1px solid ${goldBorderFaint}`,
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
                      ? `1px solid ${darkMode ? 'rgba(201, 168, 76, 0.06)' : 'rgba(139, 105, 20, 0.06)'}`
                      : 'none',
                    transition: 'background 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = rowHoverBg
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: creamColor,
                  }}>
                    {credit.role}
                  </span>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '0.95rem',
                    fontStyle: 'italic',
                    color: lavenderColor,
                  }}>
                    {credit.production}
                    {credit.venue && (
                      <span style={{ color: lavenderFaded, display: 'block', fontSize: '0.8rem' }}>
                        {credit.venue}
                      </span>
                    )}
                  </span>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '0.9rem',
                    color: creamFaded,
                    textAlign: 'right',
                  }}>
                    {credit.director && `Dir. ${credit.director}`}
                    <span style={{ display: 'block', fontSize: '0.8rem', color: goldColor }}>
                      {credit.year}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

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
              color: goldColor,
            }}>
              AWARDS & HONOURS
            </h3>
            <div style={{
              flex: 1,
              height: 1,
              background: `linear-gradient(90deg, ${goldBorderLight}, transparent)`,
            }} />
            {tarotMode && (
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '0.8rem',
                fontStyle: 'italic',
                color: lavenderFaded,
              }}>
                The Sun
              </span>
            )}
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
                  border: `1px solid ${goldBorderMed}`,
                  borderRadius: 10,
                  background: awardBg,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = goldBorderStrong
                  e.currentTarget.style.background = awardBgHover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = goldBorderMed
                  e.currentTarget.style.background = awardBg
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 6,
                }}>
                  {tarotMode && (
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '0.65rem',
                      color: lavenderFaded,
                      fontStyle: 'italic',
                    }}>
                      {award.card}
                    </span>
                  )}
                  <span style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.65rem',
                    color: goldColor,
                    letterSpacing: '0.1em',
                    marginLeft: tarotMode ? 0 : 'auto',
                  }}>
                    {award.year}
                  </span>
                </div>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: goldLight,
                  lineHeight: 1.4,
                }}>
                  {award.name}
                </p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  color: creamFaded,
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

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'
import { actorInfo } from '../data/tarotData'
import SectionDivider from '../components/SectionDivider'
import { useTheme } from '../context/ThemeContext'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const { tarotMode, darkMode } = useTheme()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const goldColor = darkMode ? '#c9a84c' : '#8b6914'
  const goldLight = darkMode ? '#e8d48b' : '#6b5010'
  const lavenderColor = darkMode ? '#9b7bc7' : '#7b5baa'
  const creamColor = darkMode ? '#f5e6d3' : '#2a1a3e'
  const lavenderFaded = darkMode ? 'rgba(155, 123, 199, 0.5)' : 'rgba(123, 91, 170, 0.5)'
  const lavenderLightFaded = darkMode ? 'rgba(155, 123, 199, 0.4)' : 'rgba(123, 91, 170, 0.4)'
  const creamFaded = darkMode ? 'rgba(245, 230, 211, 0.4)' : 'rgba(42, 26, 62, 0.4)'
  const goldBorderFaint = darkMode ? 'rgba(201, 168, 76, 0.15)' : 'rgba(139, 105, 20, 0.15)'
  const goldBorderHover = darkMode ? 'rgba(201, 168, 76, 0.4)' : 'rgba(139, 105, 20, 0.4)'
  const goldBorderThin = darkMode ? 'rgba(201, 168, 76, 0.1)' : 'rgba(139, 105, 20, 0.1)'
  const goldBorderMed = darkMode ? 'rgba(201, 168, 76, 0.2)' : 'rgba(139, 105, 20, 0.2)'
  const inputBg = darkMode ? 'rgba(26, 16, 40, 0.4)' : 'rgba(255, 255, 255, 0.6)'
  const successBg = darkMode ? 'rgba(201, 168, 76, 0.05)' : 'rgba(139, 105, 20, 0.05)'
  const btnBg = darkMode
    ? 'linear-gradient(135deg, rgba(201, 168, 76, 0.2), rgba(201, 168, 76, 0.1))'
    : 'linear-gradient(135deg, rgba(139, 105, 20, 0.15), rgba(139, 105, 20, 0.08))'
  const btnBgHover = darkMode
    ? 'linear-gradient(135deg, rgba(201, 168, 76, 0.3), rgba(201, 168, 76, 0.15))'
    : 'linear-gradient(135deg, rgba(139, 105, 20, 0.25), rgba(139, 105, 20, 0.12))'
  const bgGradient = darkMode
    ? 'linear-gradient(180deg, transparent 0%, rgba(26, 16, 40, 0.2) 30%, rgba(26, 16, 40, 0.2) 70%, transparent 100%)'
    : 'linear-gradient(180deg, transparent 0%, rgba(139, 105, 20, 0.03) 30%, rgba(139, 105, 20, 0.03) 70%, transparent 100%)'
  const decorBg = darkMode ? 'rgba(201, 168, 76, 0.02)' : 'rgba(139, 105, 20, 0.02)'
  const selectBg = darkMode ? '#1a1028' : '#faf7f2'

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    background: inputBg,
    border: `1px solid ${goldBorderFaint}`,
    borderRadius: 8,
    color: creamColor,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
  }

  return (
    <section
      id="contact"
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
              II
            </span>
          )}
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: goldLight,
            letterSpacing: '0.08em',
            margin: '8px 0',
          }}>
            {tarotMode ? 'The High Priestess' : 'Contact'}
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.15rem',
            fontStyle: 'italic',
            color: lavenderColor,
          }}>
            {tarotMode ? 'Seek the oracle \u2014 begin the conversation' : 'Get in touch'}
          </p>
          <SectionDivider symbol={tarotMode ? "\u2600" : undefined} />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
        }}
        className="contact-grid"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '1rem',
              letterSpacing: '0.12em',
              color: goldColor,
              marginBottom: 28,
            }}>
              REPRESENTATION
            </h3>

            <div style={{ marginBottom: 32 }}>
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                color: lavenderFaded,
                marginBottom: 8,
                textTransform: 'uppercase',
              }}>
                Agent
              </p>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.1rem',
                color: goldLight,
                marginBottom: 4,
              }}>
                {actorInfo.representation.agentName}
              </p>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '0.95rem',
                color: lavenderColor,
                fontStyle: 'italic',
                marginBottom: 8,
              }}>
                {actorInfo.representation.agent}
              </p>
              <a
                href={`mailto:${actorInfo.representation.agentEmail}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '0.9rem',
                  color: goldColor,
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
              >
                <Mail size={14} />
                {actorInfo.representation.agentEmail}
              </a>
            </div>

            <div style={{ marginBottom: 32 }}>
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                color: lavenderFaded,
                marginBottom: 8,
                textTransform: 'uppercase',
              }}>
                Manager
              </p>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.1rem',
                color: goldLight,
                marginBottom: 4,
              }}>
                {actorInfo.representation.managerName}
              </p>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '0.95rem',
                color: lavenderColor,
                fontStyle: 'italic',
                marginBottom: 8,
              }}>
                {actorInfo.representation.manager}
              </p>
              <a
                href={`mailto:${actorInfo.representation.managerEmail}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '0.9rem',
                  color: goldColor,
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
              >
                <Mail size={14} />
                {actorInfo.representation.managerEmail}
              </a>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              color: creamFaded,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '0.9rem',
            }}>
              <MapPin size={14} />
              London & New York
            </div>

            {tarotMode && (
              <div style={{
                marginTop: 40,
                padding: 20,
                border: `1px solid ${goldBorderThin}`,
                borderRadius: 10,
                background: decorBg,
                textAlign: 'center',
              }}>
                <svg width="60" height="60" viewBox="0 0 60 60" style={{ opacity: 0.3, marginBottom: 12 }}>
                  <circle cx="30" cy="30" r="25" fill="none" stroke={goldColor} strokeWidth="0.5" />
                  <circle cx="30" cy="30" r="18" fill="none" stroke={lavenderColor} strokeWidth="0.3" strokeDasharray="2,2" />
                  <circle cx="30" cy="25" r="8" fill="none" stroke={goldColor} strokeWidth="0.5" />
                  <line x1="30" y1="33" x2="30" y2="50" stroke={goldColor} strokeWidth="0.5" />
                </svg>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  color: lavenderLightFaded,
                  lineHeight: 1.5,
                }}>
                  "The High Priestess sits at the threshold between worlds, ready to receive those who seek with sincerity."
                </p>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '1rem',
              letterSpacing: '0.12em',
              color: goldColor,
              marginBottom: 28,
            }}>
              SEND A MESSAGE
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: 40,
                  textAlign: 'center',
                  border: `1px solid ${goldBorderMed}`,
                  borderRadius: 12,
                  background: successBg,
                }}
              >
                <svg width="60" height="60" viewBox="0 0 60 60" style={{ opacity: 0.6, marginBottom: 16 }}>
                  <circle cx="30" cy="30" r="25" fill="none" stroke={goldColor} strokeWidth="1" />
                  <polyline points="18,30 26,38 42,22" fill="none" stroke={goldColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1rem',
                  color: goldColor,
                  marginBottom: 8,
                  letterSpacing: '0.1em',
                }}>
                  MESSAGE RECEIVED
                </p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  color: lavenderColor,
                }}>
                  {tarotMode
                    ? 'The cards have accepted your inquiry. A response awaits.'
                    : 'Thank you! We\'ll respond soon.'}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = goldBorderHover }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = goldBorderFaint }}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = goldBorderHover }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = goldBorderFaint }}
                  />
                </div>

                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  style={{
                    ...inputStyle,
                    appearance: 'none',
                    cursor: 'pointer',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = goldBorderHover }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = goldBorderFaint }}
                >
                  <option value="" disabled style={{ background: selectBg }}>Select Inquiry Type</option>
                  <option value="casting" style={{ background: selectBg }}>Casting Inquiry</option>
                  <option value="press" style={{ background: selectBg }}>Press / Interview</option>
                  <option value="collaboration" style={{ background: selectBg }}>Collaboration</option>
                  <option value="speaking" style={{ background: selectBg }}>Speaking Engagement</option>
                  <option value="other" style={{ background: selectBg }}>Other</option>
                </select>

                <textarea
                  placeholder="Your Message..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                    minHeight: 120,
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = goldBorderHover }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = goldBorderFaint }}
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    padding: '16px 32px',
                    background: btnBg,
                    border: `1px solid ${goldColor}`,
                    borderRadius: 8,
                    color: goldColor,
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.8rem',
                    letterSpacing: '0.15em',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = btnBgHover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = btnBg
                  }}
                >
                  <Send size={16} />
                  {tarotMode ? 'CONSULT THE ORACLE' : 'SEND MESSAGE'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'
import { actorInfo } from '../data/tarotData'
import SectionDivider from '../components/SectionDivider'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    background: 'rgba(26, 16, 40, 0.4)',
    border: '1px solid rgba(201, 168, 76, 0.15)',
    borderRadius: 8,
    color: '#f5e6d3',
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
      {/* Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, transparent 0%, rgba(26, 16, 40, 0.2) 30%, rgba(26, 16, 40, 0.2) 70%, transparent 100%)',
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
            II
          </span>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: '#e8d48b',
            letterSpacing: '0.08em',
            margin: '8px 0',
          }}>
            The High Priestess
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.15rem',
            fontStyle: 'italic',
            color: '#9b7bc7',
          }}>
            Seek the oracle — begin the conversation
          </p>
          <SectionDivider symbol="\u2600" />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
        }}
        className="contact-grid"
        >
          {/* Representation Info */}
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
              color: '#c9a84c',
              marginBottom: 28,
            }}>
              REPRESENTATION
            </h3>

            {/* Agent */}
            <div style={{ marginBottom: 32 }}>
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                color: 'rgba(155, 123, 199, 0.5)',
                marginBottom: 8,
                textTransform: 'uppercase',
              }}>
                Agent
              </p>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.1rem',
                color: '#e8d48b',
                marginBottom: 4,
              }}>
                {actorInfo.representation.agentName}
              </p>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '0.95rem',
                color: '#9b7bc7',
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
                  color: '#c9a84c',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
              >
                <Mail size={14} />
                {actorInfo.representation.agentEmail}
              </a>
            </div>

            {/* Manager */}
            <div style={{ marginBottom: 32 }}>
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                color: 'rgba(155, 123, 199, 0.5)',
                marginBottom: 8,
                textTransform: 'uppercase',
              }}>
                Manager
              </p>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.1rem',
                color: '#e8d48b',
                marginBottom: 4,
              }}>
                {actorInfo.representation.managerName}
              </p>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '0.95rem',
                color: '#9b7bc7',
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
                  color: '#c9a84c',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
              >
                <Mail size={14} />
                {actorInfo.representation.managerEmail}
              </a>
            </div>

            {/* Location */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              color: 'rgba(245, 230, 211, 0.4)',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '0.9rem',
            }}>
              <MapPin size={14} />
              London & New York
            </div>

            {/* Decorative tarot card */}
            <div style={{
              marginTop: 40,
              padding: 20,
              border: '1px solid rgba(201, 168, 76, 0.1)',
              borderRadius: 10,
              background: 'rgba(201, 168, 76, 0.02)',
              textAlign: 'center',
            }}>
              <svg width="60" height="60" viewBox="0 0 60 60" style={{ opacity: 0.3, marginBottom: 12 }}>
                <circle cx="30" cy="30" r="25" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
                <circle cx="30" cy="30" r="18" fill="none" stroke="#9b7bc7" strokeWidth="0.3" strokeDasharray="2,2" />
                <circle cx="30" cy="25" r="8" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
                <line x1="30" y1="33" x2="30" y2="50" stroke="#c9a84c" strokeWidth="0.5" />
              </svg>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '0.8rem',
                fontStyle: 'italic',
                color: 'rgba(155, 123, 199, 0.4)',
                lineHeight: 1.5,
              }}>
                "The High Priestess sits at the threshold between worlds, ready to receive those who seek with sincerity."
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
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
              color: '#c9a84c',
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
                  border: '1px solid rgba(201, 168, 76, 0.2)',
                  borderRadius: 12,
                  background: 'rgba(201, 168, 76, 0.05)',
                }}
              >
                <svg width="60" height="60" viewBox="0 0 60 60" style={{ opacity: 0.6, marginBottom: 16 }}>
                  <circle cx="30" cy="30" r="25" fill="none" stroke="#c9a84c" strokeWidth="1" />
                  <polyline points="18,30 26,38 42,22" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1rem',
                  color: '#c9a84c',
                  marginBottom: 8,
                  letterSpacing: '0.1em',
                }}>
                  MESSAGE RECEIVED
                </p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  color: '#9b7bc7',
                }}>
                  The cards have accepted your inquiry. A response awaits.
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
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.4)' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.15)' }}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.4)' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.15)' }}
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
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.4)' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.15)' }}
                >
                  <option value="" disabled style={{ background: '#1a1028' }}>Select Inquiry Type</option>
                  <option value="casting" style={{ background: '#1a1028' }}>Casting Inquiry</option>
                  <option value="press" style={{ background: '#1a1028' }}>Press / Interview</option>
                  <option value="collaboration" style={{ background: '#1a1028' }}>Collaboration</option>
                  <option value="speaking" style={{ background: '#1a1028' }}>Speaking Engagement</option>
                  <option value="other" style={{ background: '#1a1028' }}>Other</option>
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
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.4)' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.15)' }}
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
                    background: 'linear-gradient(135deg, rgba(201, 168, 76, 0.2), rgba(201, 168, 76, 0.1))',
                    border: '1px solid #c9a84c',
                    borderRadius: 8,
                    color: '#c9a84c',
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.8rem',
                    letterSpacing: '0.15em',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(201, 168, 76, 0.3), rgba(201, 168, 76, 0.15))'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(201, 168, 76, 0.2), rgba(201, 168, 76, 0.1))'
                  }}
                >
                  <Send size={16} />
                  CONSULT THE ORACLE
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

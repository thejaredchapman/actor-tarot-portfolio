import { useState } from 'react'
import { motion } from 'framer-motion'
import type { TarotRole } from '../data/tarotData'
import { useTheme } from '../context/ThemeContext'

interface TarotCardProps {
  role: TarotRole
  index: number
}

export default function TarotCard({ role, index }: TarotCardProps) {
  const [flipped, setFlipped] = useState(false)
  const { tarotMode, darkMode } = useTheme()

  const cardColorsDark: Record<string, string> = {
    'The Star': '#4a2d6b',
    'The Empress': '#2a5c3e',
    'The High Priestess': '#1a3a6b',
    'The Moon': '#3a2a5c',
    'The Magician': '#6b2a2a',
    'The Lovers': '#5c2a4a',
  }

  const cardColorsLight: Record<string, string> = {
    'The Star': '#e8ddf5',
    'The Empress': '#ddf5e8',
    'The High Priestess': '#dde8f5',
    'The Moon': '#e5ddf5',
    'The Magician': '#f5dddd',
    'The Lovers': '#f0dde8',
  }

  const bgColor = darkMode
    ? (cardColorsDark[role.cardName] || '#2a1a3e')
    : (cardColorsLight[role.cardName] || '#e8e0f0')

  const goldColor = darkMode ? '#c9a84c' : '#8b6914'
  const goldLight = darkMode ? '#e8d48b' : '#6b5010'
  const lavenderColor = darkMode ? '#9b7bc7' : '#7b5baa'
  const creamColor = darkMode ? '#f5e6d3' : '#2a1a3e'
  const borderColor = darkMode ? 'rgba(201, 168, 76, 0.5)' : 'rgba(139, 105, 20, 0.4)'
  const borderFaint = darkMode ? 'rgba(201, 168, 76, 0.15)' : 'rgba(139, 105, 20, 0.15)'
  const borderMed = darkMode ? 'rgba(201, 168, 76, 0.2)' : 'rgba(139, 105, 20, 0.2)'
  const borderQuote = darkMode ? 'rgba(201, 168, 76, 0.4)' : 'rgba(139, 105, 20, 0.4)'
  const quoteBg = darkMode ? 'rgba(201, 168, 76, 0.05)' : 'rgba(139, 105, 20, 0.05)'
  const hintColor = darkMode ? 'rgba(201, 168, 76, 0.3)' : 'rgba(139, 105, 20, 0.3)'
  const gradientEnd = darkMode ? '#0d0d1a' : '#faf7f2'
  const boxShadow = darkMode
    ? '0 10px 40px rgba(0,0,0,0.5), 0 0 30px rgba(201, 168, 76, 0.1)'
    : '0 10px 40px rgba(0,0,0,0.1), 0 0 30px rgba(139, 105, 20, 0.05)'
  const badgeBorder = darkMode ? 'rgba(201, 168, 76, 0.3)' : 'rgba(139, 105, 20, 0.3)'
  const symbolMeaningColor = darkMode ? 'rgba(155, 123, 199, 0.7)' : 'rgba(123, 91, 170, 0.7)'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onClick={() => setFlipped(!flipped)}
      style={{
        perspective: 1000,
        cursor: 'pointer',
        width: 'var(--card-width)',
        height: 'var(--card-height)',
        flexShrink: 0,
      }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          position: 'relative',
        }}
      >
        {/* Card Front */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            borderRadius: 'var(--card-border-radius)',
            border: `2px solid ${borderColor}`,
            background: `linear-gradient(160deg, ${bgColor} 0%, ${gradientEnd} 100%)`,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow,
          }}
        >
          {/* Card Number */}
          <div style={{
            padding: '16px 20px 8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <span style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              color: goldColor,
            }}>
              {tarotMode ? role.cardNumber : role.productionType}
            </span>
            {tarotMode && (
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '0.65rem',
                color: lavenderColor,
                fontStyle: 'italic',
              }}>
                {role.arcana}
              </span>
            )}
          </div>

          {/* Central Illustration Area */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 20px',
            position: 'relative',
          }}>
            <svg width="140" height="140" viewBox="0 0 140 140" style={{ opacity: 0.6 }}>
              <circle cx="70" cy="70" r="65" fill="none" stroke={goldColor} strokeWidth="0.5" />
              <circle cx="70" cy="70" r="55" fill="none" stroke={goldColor} strokeWidth="0.3" strokeDasharray="4,4" />
              <circle cx="70" cy="70" r="45" fill="none" stroke={lavenderColor} strokeWidth="0.3" />
              <polygon
                points="70,15 80,50 115,50 87,70 95,105 70,83 45,105 53,70 25,50 60,50"
                fill="none"
                stroke={goldColor}
                strokeWidth="0.5"
              />
              {role.cardName === 'The Star' && (
                <>
                  <polygon points="70,30 74,42 86,42 76,50 80,62 70,54 60,62 64,50 54,42 66,42" fill={goldColor} opacity="0.6" />
                  {[0, 60, 120, 180, 240, 300].map((angle) => (
                    <circle
                      key={angle}
                      cx={70 + 40 * Math.cos((angle * Math.PI) / 180)}
                      cy={70 + 40 * Math.sin((angle * Math.PI) / 180)}
                      r="3"
                      fill={goldColor}
                      opacity="0.4"
                    />
                  ))}
                </>
              )}
              {role.cardName === 'The Empress' && (
                <>
                  <circle cx="70" cy="55" r="15" fill="none" stroke={goldColor} strokeWidth="0.8" />
                  <path d="M55,75 Q70,95 85,75" fill="none" stroke={goldColor} strokeWidth="0.8" />
                  <line x1="70" y1="40" x2="70" y2="70" stroke={goldColor} strokeWidth="0.5" />
                </>
              )}
              {role.cardName === 'The High Priestess' && (
                <>
                  <rect x="60" y="35" width="20" height="35" rx="10" fill="none" stroke={goldColor} strokeWidth="0.8" />
                  <line x1="70" y1="70" x2="70" y2="95" stroke={goldColor} strokeWidth="0.5" />
                  <circle cx="60" cy="85" r="8" fill="none" stroke={goldColor} strokeWidth="0.5" />
                  <circle cx="80" cy="85" r="8" fill="none" stroke={goldColor} strokeWidth="0.5" />
                </>
              )}
              {role.cardName === 'The Moon' && (
                <>
                  <path d="M55,50 A20,20 0 1,1 55,80 A15,15 0 1,0 55,50" fill={goldColor} opacity="0.4" />
                  <circle cx="80" cy="80" r="4" fill={goldColor} opacity="0.3" />
                  <circle cx="85" cy="60" r="3" fill={goldColor} opacity="0.3" />
                </>
              )}
              {role.cardName === 'The Magician' && (
                <>
                  <path d="M70,30 L70,95" stroke={goldColor} strokeWidth="1" />
                  <path d="M55,45 Q70,35 85,45" fill="none" stroke={goldColor} strokeWidth="0.8" />
                  <circle cx="70" cy="30" r="4" fill={goldColor} opacity="0.6" />
                  <text x="70" y="105" textAnchor="middle" fill={goldColor} fontSize="10" opacity="0.5">&#8734;</text>
                </>
              )}
              {role.cardName === 'The Lovers' && (
                <>
                  <circle cx="58" cy="55" r="12" fill="none" stroke={goldColor} strokeWidth="0.8" />
                  <circle cx="82" cy="55" r="12" fill="none" stroke={goldColor} strokeWidth="0.8" />
                  <path d="M70,65 L60,85 L70,80 L80,85 Z" fill={goldColor} opacity="0.4" />
                </>
              )}
            </svg>

            <div style={{
              position: 'absolute',
              bottom: 10,
              right: 20,
              padding: '3px 10px',
              border: `1px solid ${badgeBorder}`,
              borderRadius: 20,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '0.65rem',
              color: goldColor,
              letterSpacing: '0.1em',
            }}>
              {role.productionType}
            </div>
          </div>

          {/* Card Name & Info */}
          <div style={{
            padding: '12px 20px 20px',
            borderTop: `1px solid ${borderFaint}`,
            textAlign: 'center',
          }}>
            {tarotMode && (
              <h3 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                color: goldLight,
                marginBottom: 4,
              }}>
                {role.cardName}
              </h3>
            )}
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '0.95rem',
              color: creamColor,
              fontWeight: 600,
            }}>
              {role.character}
            </p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '0.8rem',
              color: lavenderColor,
              fontStyle: 'italic',
            }}>
              {role.production} ({role.year})
            </p>
          </div>

          <div style={{
            position: 'absolute',
            bottom: 6,
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '0.55rem',
            color: hintColor,
            letterSpacing: '0.1em',
          }}>
            {tarotMode ? 'TAP TO REVEAL' : 'TAP FOR DETAILS'}
          </div>
        </div>

        {/* Card Back (Revealed Details) */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: 'var(--card-border-radius)',
            border: `2px solid ${borderColor}`,
            background: `linear-gradient(160deg, ${gradientEnd} 0%, ${bgColor} 100%)`,
            display: 'flex',
            flexDirection: 'column',
            padding: 24,
            overflow: 'hidden',
            boxShadow,
          }}
        >
          <div style={{
            textAlign: 'center',
            marginBottom: 12,
            paddingBottom: 12,
            borderBottom: `1px solid ${borderMed}`,
          }}>
            {tarotMode && (
              <span style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: goldColor,
              }}>
                {role.cardNumber} — {role.cardName}
              </span>
            )}
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1rem',
              color: goldLight,
              marginTop: 4,
            }}>
              {role.character}
            </h3>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '0.75rem',
              color: lavenderColor,
              fontStyle: 'italic',
            }}>
              Dir. {role.director}
            </p>
          </div>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '0.82rem',
            lineHeight: 1.6,
            color: creamColor,
            flex: 1,
            overflow: 'auto',
          }}>
            {role.description}
          </p>

          <div style={{
            marginTop: 12,
            padding: '10px 12px',
            borderLeft: `2px solid ${borderQuote}`,
            background: quoteBg,
            borderRadius: '0 6px 6px 0',
          }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '0.72rem',
              fontStyle: 'italic',
              lineHeight: 1.5,
              color: goldLight,
            }}>
              {role.quote}
            </p>
          </div>

          {tarotMode && (
            <p style={{
              marginTop: 10,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '0.65rem',
              color: symbolMeaningColor,
              fontStyle: 'italic',
              textAlign: 'center',
            }}>
              {role.symbolMeaning}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

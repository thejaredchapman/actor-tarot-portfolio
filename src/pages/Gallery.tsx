import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { galleryImages } from '../data/tarotData'
import SectionDivider from '../components/SectionDivider'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<'all' | 'headshot' | 'production'>('all')

  const filtered = filter === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.type === filter)

  const cardColors = [
    'linear-gradient(135deg, #2a1a3e 0%, #1a1028 100%)',
    'linear-gradient(135deg, #1a3a4e 0%, #0d1a2a 100%)',
    'linear-gradient(135deg, #3a1a2e 0%, #1a0d1a 100%)',
    'linear-gradient(135deg, #1a2a3e 0%, #0d1a28 100%)',
    'linear-gradient(135deg, #2a2a1e 0%, #1a1a0d 100%)',
    'linear-gradient(135deg, #1a1a3e 0%, #0d0d28 100%)',
    'linear-gradient(135deg, #2a1a2e 0%, #1a0d1e 100%)',
    'linear-gradient(135deg, #1a2a2e 0%, #0d1a1e 100%)',
  ]

  return (
    <section
      id="gallery"
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
        background: 'linear-gradient(180deg, transparent 0%, rgba(13, 13, 26, 0.4) 30%, rgba(13, 13, 26, 0.4) 70%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <span style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            color: '#c9a84c',
          }}>
            XVIII
          </span>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: '#e8d48b',
            letterSpacing: '0.08em',
            margin: '8px 0',
          }}>
            The Mirror
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.15rem',
            fontStyle: 'italic',
            color: '#9b7bc7',
          }}>
            Reflections captured in light and shadow
          </p>
          <SectionDivider symbol="\u263D" />
        </motion.div>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 16,
          marginBottom: 40,
        }}>
          {(['all', 'headshot', 'production'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                background: filter === f ? 'rgba(201, 168, 76, 0.15)' : 'transparent',
                border: `1px solid ${filter === f ? '#c9a84c' : 'rgba(201, 168, 76, 0.2)'}`,
                color: filter === f ? '#c9a84c' : 'rgba(245, 230, 211, 0.5)',
                padding: '8px 20px',
                borderRadius: 25,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {f === 'all' ? 'Full Deck' : f === 'headshot' ? 'Portraits' : 'Productions'}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260, 1fr))',
            gap: 20,
          }}
        >
          <style>{`
            @media (min-width: 600px) {
              .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (min-width: 900px) {
              .gallery-grid { grid-template-columns: repeat(3, 1fr) !important; }
            }
            @media (min-width: 1200px) {
              .gallery-grid { grid-template-columns: repeat(4, 1fr) !important; }
            }
          `}</style>
          <div className="gallery-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 20,
          }}>
            {filtered.map((image, i) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                onClick={() => setSelectedImage(image.id)}
                style={{
                  cursor: 'pointer',
                  borderRadius: 12,
                  border: '1px solid rgba(201, 168, 76, 0.2)',
                  overflow: 'hidden',
                  background: cardColors[i % cardColors.length],
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                {/* Image placeholder */}
                <div style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  padding: 20,
                }}>
                  {/* Decorative card-like frame */}
                  <svg width="80" height="80" viewBox="0 0 80 80" style={{ opacity: 0.4, marginBottom: 16 }}>
                    <circle cx="40" cy="40" r="35" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
                    <circle cx="40" cy="40" r="25" fill="none" stroke="#9b7bc7" strokeWidth="0.3" strokeDasharray="3,3" />
                    <polygon
                      points="40,10 46,30 65,30 50,42 55,62 40,50 25,62 30,42 15,30 34,30"
                      fill="none"
                      stroke="#c9a84c"
                      strokeWidth="0.5"
                    />
                  </svg>

                  <span style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    color: '#c9a84c',
                    marginBottom: 4,
                  }}>
                    {image.cardName}
                  </span>

                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1rem',
                    color: '#e8d48b',
                    textAlign: 'center',
                  }}>
                    {image.title}
                  </span>

                  {/* Type badge */}
                  <div style={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    padding: '3px 10px',
                    borderRadius: 20,
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(201, 168, 76, 0.2)',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '0.6rem',
                    color: '#c9a84c',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}>
                    {image.type}
                  </div>
                </div>

                {/* Caption */}
                <div style={{
                  padding: '12px 16px',
                  borderTop: '1px solid rgba(201, 168, 76, 0.1)',
                }}>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '0.85rem',
                    color: 'rgba(245, 230, 211, 0.7)',
                    fontStyle: 'italic',
                  }}>
                    {image.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(10, 10, 15, 0.95)',
              backdropFilter: 'blur(20px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: 40,
            }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                background: 'none',
                border: 'none',
                color: '#c9a84c',
                cursor: 'pointer',
              }}
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: 500,
                width: '100%',
                borderRadius: 16,
                border: '2px solid rgba(201, 168, 76, 0.3)',
                background: 'linear-gradient(135deg, #1a1028, #0d0d1a)',
                overflow: 'hidden',
              }}
            >
              {(() => {
                const image = galleryImages.find((img) => img.id === selectedImage)
                if (!image) return null
                return (
                  <>
                    <div style={{
                      width: '100%',
                      aspectRatio: '3/4',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, rgba(74, 45, 107, 0.3), rgba(26, 16, 40, 0.6))',
                    }}>
                      <svg width="120" height="120" viewBox="0 0 120 120" style={{ opacity: 0.5 }}>
                        <circle cx="60" cy="60" r="55" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
                        <polygon
                          points="60,10 70,45 105,45 76,65 85,100 60,78 35,100 44,65 15,45 50,45"
                          fill="none"
                          stroke="#c9a84c"
                          strokeWidth="0.7"
                        />
                      </svg>
                      <p style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: '0.75rem',
                        color: '#c9a84c',
                        marginTop: 16,
                        letterSpacing: '0.15em',
                      }}>
                        {image.cardName}
                      </p>
                    </div>
                    <div style={{ padding: 24, textAlign: 'center' }}>
                      <h3 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '1.5rem',
                        color: '#e8d48b',
                        marginBottom: 8,
                      }}>
                        {image.title}
                      </h3>
                      <p style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '1rem',
                        fontStyle: 'italic',
                        color: '#9b7bc7',
                      }}>
                        {image.description}
                      </p>
                    </div>
                  </>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

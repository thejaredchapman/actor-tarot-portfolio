import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { tarotMode, darkMode } = useTheme()

  const goldColor = darkMode ? '#c9a84c' : '#8b6914'
  const lavenderColor = darkMode ? '#9b7bc7' : '#7b5baa'
  const lavenderFaded = darkMode ? 'rgba(155, 123, 199, 0.5)' : 'rgba(123, 91, 170, 0.5)'
  const creamVFaded = darkMode ? 'rgba(245, 230, 211, 0.3)' : 'rgba(42, 26, 62, 0.3)'
  const borderColor = darkMode ? 'rgba(201, 168, 76, 0.15)' : 'rgba(139, 105, 20, 0.15)'
  const footerBg = darkMode ? 'rgba(10, 10, 15, 0.9)' : 'rgba(250, 247, 242, 0.9)'

  return (
    <footer style={{
      position: 'relative',
      zIndex: 1,
      borderTop: `1px solid ${borderColor}`,
      background: footerBg,
      padding: '40px 24px',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
      }}>
        <svg width="40" height="40" viewBox="0 0 40 40" style={{ opacity: 0.5 }}>
          <circle cx="20" cy="20" r="18" fill="none" stroke={goldColor} strokeWidth="0.5" />
          <polygon
            points="20,5 23,15 33,15 25,21 28,31 20,25 12,31 15,21 7,15 17,15"
            fill="none"
            stroke={goldColor}
            strokeWidth="0.5"
          />
        </svg>

        <p style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          color: goldColor,
          textAlign: 'center',
        }}>
          PHYLICIA MCLEOD
        </p>

        <div style={{
          display: 'flex',
          gap: 24,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {['Instagram', 'IMDb', 'Spotlight', 'Vimeo'].map((platform) => (
            <a
              key={platform}
              href="#"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '0.85rem',
                color: lavenderColor,
                textDecoration: 'none',
                letterSpacing: '0.05em',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = goldColor }}
              onMouseLeave={(e) => { e.currentTarget.style.color = lavenderColor }}
            >
              {platform}
            </a>
          ))}
        </div>

        {tarotMode && (
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '0.75rem',
            color: lavenderFaded,
            fontStyle: 'italic',
          }}>
            "The cards never lie — they simply wait for the right question."
          </p>
        )}

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '0.7rem',
          color: creamVFaded,
        }}>
          &copy; {new Date().getFullYear()} Phylicia Mcleod. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

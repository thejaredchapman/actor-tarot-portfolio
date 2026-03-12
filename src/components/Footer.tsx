export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid rgba(201, 168, 76, 0.15)',
      background: 'rgba(10, 10, 15, 0.9)',
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
        {/* Tarot symbol */}
        <svg width="40" height="40" viewBox="0 0 40 40" style={{ opacity: 0.5 }}>
          <circle cx="20" cy="20" r="18" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
          <polygon
            points="20,5 23,15 33,15 25,21 28,31 20,25 12,31 15,21 7,15 17,15"
            fill="none"
            stroke="#c9a84c"
            strokeWidth="0.5"
          />
        </svg>

        <p style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          color: '#c9a84c',
          textAlign: 'center',
        }}>
          CASSANDRA VEIL
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
                color: '#9b7bc7',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#c9a84c' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#9b7bc7' }}
            >
              {platform}
            </a>
          ))}
        </div>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '0.75rem',
          color: 'rgba(155, 123, 199, 0.5)',
          fontStyle: 'italic',
        }}>
          "The cards never lie — they simply wait for the right question."
        </p>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '0.7rem',
          color: 'rgba(245, 230, 211, 0.3)',
        }}>
          &copy; {new Date().getFullYear()} Cassandra Veil. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

interface SectionDividerProps {
  symbol?: string
}

export default function SectionDivider({ symbol = '\u2726' }: SectionDividerProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      margin: '24px 0',
    }}>
      <div style={{
        height: 1,
        flex: 1,
        maxWidth: 200,
        background: 'linear-gradient(90deg, transparent, #c9a84c 50%, transparent)',
      }} />
      <span style={{
        color: '#c9a84c',
        fontSize: '1.2rem',
        lineHeight: 1,
      }}>
        {symbol}
      </span>
      <div style={{
        height: 1,
        flex: 1,
        maxWidth: 200,
        background: 'linear-gradient(90deg, transparent, #c9a84c 50%, transparent)',
      }} />
    </div>
  )
}

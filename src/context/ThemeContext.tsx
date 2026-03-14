import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import type { ReactNode } from 'react'

interface ThemeContextType {
  tarotMode: boolean
  toggleTarotMode: () => void
  darkMode: boolean
  toggleDarkMode: () => void
  accentColor: string | null
  setAccentColor: (color: string | null) => void
  bgColor: string | null
  setBgColor: (color: string | null) => void
}

const ThemeContext = createContext<ThemeContextType>({
  tarotMode: true,
  toggleTarotMode: () => {},
  darkMode: true,
  toggleDarkMode: () => {},
  accentColor: null,
  setAccentColor: () => {},
  bgColor: null,
  setBgColor: () => {},
})

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return { r, g, b }
}

function lighten(hex: string, amount: number): string {
  const { r, g, b } = hexToRgb(hex)
  const lr = Math.min(255, Math.round(r + (255 - r) * amount))
  const lg = Math.min(255, Math.round(g + (255 - g) * amount))
  const lb = Math.min(255, Math.round(b + (255 - b) * amount))
  return `#${lr.toString(16).padStart(2, '0')}${lg.toString(16).padStart(2, '0')}${lb.toString(16).padStart(2, '0')}`
}

function darken(hex: string, amount: number): string {
  const { r, g, b } = hexToRgb(hex)
  const dr = Math.max(0, Math.round(r * (1 - amount)))
  const dg = Math.max(0, Math.round(g * (1 - amount)))
  const db = Math.max(0, Math.round(b * (1 - amount)))
  return `#${dr.toString(16).padStart(2, '0')}${dg.toString(16).padStart(2, '0')}${db.toString(16).padStart(2, '0')}`
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [tarotMode, setTarotMode] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [accentColor, setAccentColor] = useState<string | null>(null)
  const [bgColor, setBgColor] = useState<string | null>(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  // Apply custom accent color as CSS variables
  useEffect(() => {
    const root = document.documentElement
    if (accentColor) {
      root.style.setProperty('--color-gold', accentColor)
      root.style.setProperty('--color-gold-light', lighten(accentColor, 0.35))
      root.style.setProperty('--color-gold-dark', darken(accentColor, 0.35))
      root.style.setProperty('--color-gold-glow', lighten(accentColor, 0.2))
    } else {
      root.style.removeProperty('--color-gold')
      root.style.removeProperty('--color-gold-light')
      root.style.removeProperty('--color-gold-dark')
      root.style.removeProperty('--color-gold-glow')
    }
  }, [accentColor])

  // Apply custom background color as CSS variables
  useEffect(() => {
    const root = document.documentElement
    if (bgColor) {
      root.style.setProperty('--color-void', bgColor)
      root.style.setProperty('--color-abyss', lighten(bgColor, 0.05))
      root.style.setProperty('--color-deep-purple', lighten(bgColor, 0.1))
      root.style.setProperty('--color-midnight', lighten(bgColor, 0.08))
      root.style.setProperty('--color-velvet', lighten(bgColor, 0.18))
      document.body.style.backgroundColor = bgColor
    } else {
      root.style.removeProperty('--color-void')
      root.style.removeProperty('--color-abyss')
      root.style.removeProperty('--color-deep-purple')
      root.style.removeProperty('--color-midnight')
      root.style.removeProperty('--color-velvet')
      document.body.style.backgroundColor = ''
    }
  }, [bgColor])

  const toggleTarotMode = () => setTarotMode((prev) => !prev)
  const toggleDarkMode = useCallback(() => {
    // Reset custom colors when toggling theme to avoid conflicts
    setAccentColor(null)
    setBgColor(null)
    setDarkMode((prev) => !prev)
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        tarotMode,
        toggleTarotMode,
        darkMode,
        toggleDarkMode,
        accentColor,
        setAccentColor,
        bgColor,
        setBgColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

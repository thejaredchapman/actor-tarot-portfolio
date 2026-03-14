import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, X, RotateCcw } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

type ColorTarget = 'accent' | 'background'

function hslToHex(h: number, s: number, l: number): string {
  s /= 100
  l /= 100
  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2
  let r = 0, g = 0, b = 0
  if (h < 60) { r = c; g = x; b = 0 }
  else if (h < 120) { r = x; g = c; b = 0 }
  else if (h < 180) { r = 0; g = c; b = x }
  else if (h < 240) { r = 0; g = x; b = c }
  else if (h < 300) { r = x; g = 0; b = c }
  else { r = c; g = 0; b = x }
  const toHex = (v: number) => Math.round((v + m) * 255).toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

export default function ColorWheelPicker() {
  const { darkMode, accentColor, setAccentColor, bgColor, setBgColor } = useTheme()
  const [open, setOpen] = useState(false)
  const [target, setTarget] = useState<ColorTarget>('accent')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const wheelSize = 200
  const centerX = wheelSize / 2
  const centerY = wheelSize / 2
  const outerRadius = wheelSize / 2 - 4
  const innerRadius = outerRadius * 0.3

  // Draw the color wheel
  useEffect(() => {
    if (!open) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = wheelSize
    canvas.height = wheelSize
    ctx.clearRect(0, 0, wheelSize, wheelSize)

    // Draw hue/saturation wheel
    for (let angle = 0; angle < 360; angle += 1) {
      const startRad = (angle - 1) * (Math.PI / 180)
      const endRad = (angle + 1) * (Math.PI / 180)

      // Gradient from center (white) to edge (full saturation)
      const gradient = ctx.createRadialGradient(
        centerX, centerY, innerRadius,
        centerX, centerY, outerRadius
      )
      const lightness = target === 'background' ? 15 : 50
      gradient.addColorStop(0, hslToHex(angle, 0, lightness))
      gradient.addColorStop(1, hslToHex(angle, 100, lightness))

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, outerRadius, startRad, endRad)
      ctx.closePath()
      ctx.fillStyle = gradient
      ctx.fill()
    }

    // Draw center circle with current color or default
    const currentColor = target === 'accent' ? accentColor : bgColor
    ctx.beginPath()
    ctx.arc(centerX, centerY, innerRadius - 2, 0, Math.PI * 2)
    ctx.fillStyle = currentColor || (target === 'accent'
      ? (darkMode ? '#c9a84c' : '#8b6914')
      : (darkMode ? '#0a0a0f' : '#faf7f2'))
    ctx.fill()
    ctx.strokeStyle = darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'
    ctx.lineWidth = 1
    ctx.stroke()
  }, [open, target, accentColor, bgColor, darkMode])

  const pickColor = useCallback((e: React.MouseEvent<HTMLCanvasElement> | MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = (e as MouseEvent).clientX - rect.left
    const y = (e as MouseEvent).clientY - rect.top

    const dx = x - centerX
    const dy = y - centerY
    const dist = Math.sqrt(dx * dx + dy * dy)

    if (dist < innerRadius || dist > outerRadius) return

    let angle = Math.atan2(dy, dx) * (180 / Math.PI)
    if (angle < 0) angle += 360

    const saturation = ((dist - innerRadius) / (outerRadius - innerRadius)) * 100
    const lightness = target === 'background' ? 10 + (saturation / 100) * 15 : 35 + (saturation / 100) * 20

    const hex = hslToHex(angle, saturation, lightness)
    if (target === 'accent') {
      setAccentColor(hex)
    } else {
      setBgColor(hex)
    }
  }, [target, setAccentColor, setBgColor, centerX, centerY, innerRadius, outerRadius])

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true)
    pickColor(e)
  }, [pickColor])

  useEffect(() => {
    if (!isDragging) return
    const handleMouseMove = (e: MouseEvent) => pickColor(e)
    const handleMouseUp = () => setIsDragging(false)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, pickColor])

  const handleReset = () => {
    if (target === 'accent') {
      setAccentColor(null)
    } else {
      setBgColor(null)
    }
  }

  const goldColor = darkMode ? (accentColor || '#c9a84c') : (accentColor || '#8b6914')
  const panelBg = darkMode ? 'rgba(15, 12, 25, 0.95)' : 'rgba(250, 247, 242, 0.95)'
  const textColor = darkMode ? '#f5e6d3' : '#2a1a3e'
  const borderColor = darkMode ? 'rgba(201, 168, 76, 0.25)' : 'rgba(139, 105, 20, 0.25)'

  const displayColor = target === 'accent' ? accentColor : bgColor

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        title="Color picker"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 34,
          height: 34,
          borderRadius: '50%',
          border: `1px solid ${borderColor}`,
          background: open
            ? (darkMode ? 'rgba(201, 168, 76, 0.15)' : 'rgba(139, 105, 20, 0.15)')
            : 'transparent',
          color: goldColor,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
      >
        <Palette size={16} />
      </button>

      {/* Picker Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 64,
              right: 24,
              zIndex: 1100,
              background: panelBg,
              backdropFilter: 'blur(20px)',
              border: `1px solid ${borderColor}`,
              borderRadius: 16,
              padding: 20,
              width: 260,
              boxShadow: `0 20px 60px rgba(0,0,0,0.4)`,
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                color: goldColor,
                textTransform: 'uppercase',
              }}>
                Color Wheel
              </span>
              <button
                onClick={() => setOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: textColor,
                  cursor: 'pointer',
                  padding: 2,
                  display: 'flex',
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Target Toggle */}
            <div style={{
              display: 'flex',
              borderRadius: 8,
              overflow: 'hidden',
              border: `1px solid ${borderColor}`,
              marginBottom: 16,
            }}>
              {(['accent', 'background'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTarget(t)}
                  style={{
                    flex: 1,
                    padding: '8px 0',
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.65rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    background: target === t
                      ? (darkMode ? 'rgba(201, 168, 76, 0.2)' : 'rgba(139, 105, 20, 0.15)')
                      : 'transparent',
                    color: target === t ? goldColor : textColor,
                    fontWeight: target === t ? 700 : 400,
                  }}
                >
                  {t === 'accent' ? 'Accents' : 'Background'}
                </button>
              ))}
            </div>

            {/* Color Wheel Canvas */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
              <canvas
                ref={canvasRef}
                width={wheelSize}
                height={wheelSize}
                onMouseDown={handleMouseDown}
                style={{
                  cursor: 'crosshair',
                  borderRadius: '50%',
                  border: `2px solid ${borderColor}`,
                  width: wheelSize,
                  height: wheelSize,
                }}
              />
            </div>

            {/* Selected Color Display */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 10,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  border: `1px solid ${borderColor}`,
                  background: displayColor || (target === 'accent'
                    ? (darkMode ? '#c9a84c' : '#8b6914')
                    : (darkMode ? '#0a0a0f' : '#faf7f2')),
                }} />
                <span style={{
                  fontFamily: 'monospace',
                  fontSize: '0.8rem',
                  color: textColor,
                  letterSpacing: '0.05em',
                }}>
                  {(displayColor || (target === 'accent'
                    ? (darkMode ? '#c9a84c' : '#8b6914')
                    : (darkMode ? '#0a0a0f' : '#faf7f2'))).toUpperCase()}
                </span>
              </div>

              {/* Reset button */}
              <button
                onClick={handleReset}
                title="Reset to default"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  border: `1px solid ${borderColor}`,
                  background: 'transparent',
                  color: textColor,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: displayColor ? 1 : 0.3,
                }}
              >
                <RotateCcw size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

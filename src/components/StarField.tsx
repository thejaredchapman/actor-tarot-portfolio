import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { darkMode } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 5
    }

    resize()
    window.addEventListener('resize', resize)

    interface Star {
      x: number
      y: number
      size: number
      opacity: number
      speed: number
      twinkleSpeed: number
      phase: number
    }

    const stars: Star[] = Array.from({ length: 300 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random(),
      speed: Math.random() * 0.5 + 0.1,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (!darkMode) {
        animationId = requestAnimationFrame(animate)
        return
      }

      stars.forEach((star) => {
        star.phase += star.twinkleSpeed
        const flicker = Math.sin(star.phase) * 0.5 + 0.5
        const alpha = star.opacity * flicker

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232, 212, 139, ${alpha})`
        ctx.fill()

        if (star.size > 1.2) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(155, 123, 199, ${alpha * 0.15})`
          ctx.fill()
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [darkMode])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}

'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'

const REVEAL_THRESHOLD = 0.6

export function ScratchReveal({
  children,
  overlayText,
  revealLabel,
  onRevealed,
}: {
  children: React.ReactNode
  overlayText: string
  revealLabel: string
  onRevealed?: () => void
}) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drawing = useRef(false)
  const revealed = useRef(false)
  const [isRevealed, setIsRevealed] = useState(false)

  const paintCover = useCallback((canvas: HTMLCanvasElement) => {
    const wrap = wrapRef.current
    if (!wrap) return
    const rect = wrap.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    canvas.width = Math.round(rect.width * dpr)
    canvas.height = Math.round(rect.height * dpr)
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    const g = ctx.createLinearGradient(0, 0, rect.width, rect.height)
    g.addColorStop(0, '#3a2050')
    g.addColorStop(1, '#5a2a4a')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, rect.width, rect.height)
    ctx.fillStyle = 'rgba(255,255,255,0.75)'
    ctx.font = '600 15px system-ui, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(overlayText, rect.width / 2, rect.height / 2)
  }, [overlayText])

  const finishReveal = useCallback(() => {
    if (revealed.current) return
    revealed.current = true
    setIsRevealed(true)
    const canvas = canvasRef.current
    if (canvas) gsap.to(canvas, { opacity: 0, duration: 0.4, ease: 'power2.out' })
    onRevealed?.()
  }, [onRevealed])

  const erasedFraction = useCallback((canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d')
    if (!ctx) return 0
    const { width, height } = canvas
    const data = ctx.getImageData(0, 0, width, height).data
    let clear = 0
    const step = 16 // sample every 4th pixel (RGBA) row-agnostic
    let total = 0
    for (let i = 3; i < data.length; i += step) {
      total++
      if (data[i] === 0) clear++
    }
    return total ? clear / total : 0
  }, [])

  const scratch = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current
    if (!canvas || revealed.current) return
    const rect = canvas.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, 26, 0, Math.PI * 2)
    ctx.fill()
    if (erasedFraction(canvas) >= REVEAL_THRESHOLD) finishReveal()
  }, [erasedFraction, finishReveal])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    paintCover(canvas)
    const onResize = () => {
      if (!revealed.current) paintCover(canvas)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [paintCover])

  return (
    <div ref={wrapRef} className="relative overflow-hidden rounded-2xl">
      {children}
      {!isRevealed && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 cursor-grab touch-none"
          style={{ touchAction: 'none' }}
          onPointerDown={(e) => {
            drawing.current = true
            canvasRef.current?.setPointerCapture(e.pointerId)
            scratch(e.clientX, e.clientY)
          }}
          onPointerMove={(e) => {
            if (!drawing.current) return
            e.preventDefault()
            scratch(e.clientX, e.clientY)
          }}
          onPointerUp={() => {
            drawing.current = false
          }}
          onPointerCancel={() => {
            drawing.current = false
          }}
        />
      )}
      {!isRevealed && (
        <button
          type="button"
          onClick={finishReveal}
          className="absolute bottom-3 right-3 z-10 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold text-[#1a0f22] shadow-lg transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {revealLabel}
        </button>
      )}
    </div>
  )
}

'use client'

import { useRef, type ReactNode } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

interface RevealProps {
  children: ReactNode
  className?: string
  // Селектор дочерних элементов для stagger; без него анимируется контейнер целиком
  stagger?: string
  delay?: number
}

export function Reveal({ children, className, stagger, delay = 0 }: RevealProps) {
  const scope = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const targets = stagger ? scope.current!.querySelectorAll(stagger) : scope.current
        gsap.from(targets, {
          autoAlpha: 0,
          y: 24,
          duration: 0.8,
          delay,
          ease: 'power3.out',
          stagger: stagger ? 0.12 : 0,
          scrollTrigger: { trigger: scope.current, start: 'top 80%', once: true },
        })
      })
    },
    { scope },
  )

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  )
}

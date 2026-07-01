'use client'

import { createContext, useCallback, useContext, useState } from 'react'
import dynamic from 'next/dynamic'

// Heavy UI (canvas scratch + GSAP) is code-split and only requested when the
// modal actually opens — the hero stays light.
const DiagnosticModalContent = dynamic(
  () => import('./DiagnosticModalContent').then((m) => m.DiagnosticModalContent),
  { ssr: false }
)

const DiagnosticModalContext = createContext<{ open: () => void } | null>(null)

export function useDiagnosticModal() {
  const ctx = useContext(DiagnosticModalContext)
  if (!ctx) throw new Error('useDiagnosticModal must be used inside <DiagnosticModalProvider>')
  return ctx
}

export function DiagnosticModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <DiagnosticModalContext.Provider value={{ open }}>
      {children}
      {isOpen && <DiagnosticModalContent onClose={close} />}
    </DiagnosticModalContext.Provider>
  )
}

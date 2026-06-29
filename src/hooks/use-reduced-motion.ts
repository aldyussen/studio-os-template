'use client'

import { useReducedMotion as useMotionReducedMotion } from 'motion/react'

// Wraps Motion's built-in hook for a consistent import path across the project.
// Returns false (allow animations) during SSR when the preference is unknown,
// which is correct: the server should not assume reduced motion for all users.
export function useReducedMotion(): boolean {
  return useMotionReducedMotion() ?? false
}

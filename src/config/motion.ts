import type { Transition, Variants } from 'motion/react'

// ─── Timing ───────────────────────────────────────────────────────────────────
// JS counterparts to the CSS --duration-* tokens in globals.css.
// Motion uses seconds; CSS uses milliseconds — keep the two in sync manually.

export const durations = {
  instant: 0,
  fast: 0.15,
  moderate: 0.3,
  slow: 0.5,
  glacial: 0.8,
} as const

// ─── Easing ───────────────────────────────────────────────────────────────────
// JS counterparts to the CSS --ease-* tokens in globals.css.
// Typed as explicit tuples so Motion accepts them without casting at call sites.

export const easings = {
  smooth: [0.16, 1, 0.3, 1] as [number, number, number, number], // expo-out — studio default
  spring: [0.34, 1.56, 0.64, 1] as [number, number, number, number], // subtle overshoot
  in: [0.4, 0, 1, 1] as [number, number, number, number],
  out: [0, 0, 0.2, 1] as [number, number, number, number],
  inOut: [0.45, 0, 0.55, 1] as [number, number, number, number],
}

// ─── Transition presets ───────────────────────────────────────────────────────
// Pair a duration with an easing. Pass as the `transition` prop on motion elements.
//
// Future enhancement: wrap the app with <MotionConfig transition={transitions.default}>
// in layout.tsx to set this as the global default, removing the need to pass
// transition={transitions.default} on every animated element.

export const transitions = {
  // Standard UI movements — used for ~80% of all animations
  default: { duration: durations.moderate, ease: easings.smooth },
  // Hover states, focus rings, micro-interactions
  fast: { duration: durations.fast, ease: easings.smooth },
  // Scroll reveals, hero content, large spatial movements
  slow: { duration: durations.slow, ease: easings.smooth },
  // Badges, chips, elements that benefit from a subtle overshoot
  spring: { duration: durations.moderate, ease: easings.spring },
} satisfies Record<string, Transition>

// ─── Entrance variants ────────────────────────────────────────────────────────
// Use `hidden` / `visible` keys so these compose correctly with stagger
// orchestration. Pass `transition` separately — do not embed it in variants.
//
// Future enhancement: wrap the app with <LazyMotion features={domAnimation}> and
// replace motion.* with m.* to tree-shake the full Motion bundle (~18KB → ~5KB).

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

// Studio default — used for most content blocks and section entrances
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
}

// Modal dialogs, popovers, card entrances
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
}

// More dramatic scale — badge reveals, icon entrances, featured elements
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
}

// Premium effect for hero headlines and cinematic reveals.
// Avoid on elements the user sees repeatedly — it's expensive and loses impact.
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(8px)' },
  visible: { opacity: 1, filter: 'blur(0px)' },
}

// ─── Hover and tap targets ────────────────────────────────────────────────────
// Pass to whileHover / whileTap props. Prevents magic numbers across components.

export const hover = {
  lift: { scale: 1.02, y: -2 }, // Cards, feature blocks — subtle float
  scale: { scale: 1.05 }, // Icons, avatars — clean scale
} as const

export const tap = {
  press: { scale: 0.97 }, // Buttons, interactive elements — tactile feedback
} as const

// ─── Reduced motion resolver ──────────────────────────────────────────────────
// Strips all properties except opacity from every variant state, producing a
// safe fade-only version when prefers-reduced-motion is active.
//
// Used internally by AnimatedSection (added in M15) — section components do not
// call this directly. Do NOT apply to stagger containers: those contain no
// spatial values and are safe to use unchanged under reduced motion.

export function getVariant(
  variant: Variants,
  prefersReducedMotion: boolean
): Variants {
  if (!prefersReducedMotion) return variant

  const reduced: Variants = {}
  for (const [state, props] of Object.entries(variant)) {
    // TargetResolver functions are passed through unchanged
    if (typeof props !== 'object' || props === null || Array.isArray(props)) {
      reduced[state] = props
      continue
    }
    const target = props as Record<string, unknown>
    reduced[state] =
      typeof target.opacity !== 'undefined'
        ? { opacity: target.opacity as number }
        : {}
  }
  return reduced
}

// ─── Stagger containers ───────────────────────────────────────────────────────
// Use as `variants` on the parent. Children must also use `variants` (any
// entrance variant above) for stagger orchestration to take effect.

const staggerVariant = (
  staggerChildren: number,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
})

export const stagger = {
  fast: staggerVariant(0.05), // Tight grids, icon lists, small repeated elements
  base: staggerVariant(0.08), // Standard card grids, feature lists — studio default
  slow: staggerVariant(0.12), // High-emphasis sequences, hero content, numbered steps
  custom: staggerVariant, // Escape hatch for one-off timing needs
}

// ─── Page transitions ─────────────────────────────────────────────────────────
// Used by PageTransition (added in M5) in (marketing)/layout.tsx.
// Keys use initial/animate/exit — not hidden/visible — to avoid interfering
// with stagger orchestration on child elements.

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

export const pageTransition: Transition = {
  duration: durations.fast,
  ease: easings.smooth,
}

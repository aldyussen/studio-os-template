'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { gsap, useGSAP } from '@/lib/gsap'
import { maskKzPhone } from '@/lib/phone'
import { getUtmParams } from '@/lib/utm'
import { submitLead } from '@/lib/submit-lead'
import { computeScoreHint, vadimDiagnostic as cfg, type Option } from '@/config/vadim-diagnostic'
import type {
  Barrier,
  DiagnosticAnswers,
  LeadPayload,
  Niche,
  Role,
  Turnover,
} from '@/types/lead'
import { ScratchReveal } from './ScratchReveal'

type Stage = 'intro' | 'steps' | 'result' | 'success'

const STEP_ORDER = ['niche', 'barrier', 'turnover', 'pains'] as const
const TOTAL = STEP_ORDER.length

export function DiagnosticModalContent({ onClose }: { onClose: () => void }) {
  const [stage, setStage] = useState<Stage>('intro')
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState<DiagnosticAnswers>({
    niche: null,
    barrier: null,
    turnover: null,
    pains: [],
  })
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState<Role | null>(null)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const dialogRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)

  // ── open / close lifecycle ──
  useEffect(() => {
    lastFocused.current = document.activeElement as HTMLElement
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
      lastFocused.current?.focus?.()
    }
  }, [])

  // ── esc + focus trap ──
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const root = dialogRef.current
      if (!root) return
      const focusable = root.querySelectorAll<HTMLElement>(
        'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement
      if (e.shiftKey && active === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // ── per-stage enter animation + focus move ──
  useGSAP(
    () => {
      if (panelRef.current) {
        gsap.fromTo(
          panelRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
        )
      }
      headingRef.current?.focus()
    },
    { dependencies: [stage, stepIndex], scope: dialogRef }
  )

  const progressValue = stage === 'intro' ? 0 : stage === 'steps' ? stepIndex + 1 : TOTAL
  const progressPct = (progressValue / TOTAL) * 100

  const currentStepId = STEP_ORDER[stepIndex]
  const canAdvance = useMemo(() => {
    if (stage !== 'steps') return true
    if (currentStepId === 'pains') return answers.pains.length > 0
    return answers[currentStepId] !== null
  }, [stage, currentStepId, answers])

  const goNext = useCallback(() => {
    setError('')
    if (stepIndex < TOTAL - 1) {
      setStepIndex((i) => i + 1)
    } else {
      setStage('result')
    }
  }, [stepIndex])

  const goBack = useCallback(() => {
    setError('')
    if (stepIndex === 0) {
      setStage('intro')
    } else {
      setStepIndex((i) => i - 1)
    }
  }, [stepIndex])

  const togglePain = (value: string) =>
    setAnswers((a) => ({
      ...a,
      pains: a.pains.includes(value) ? a.pains.filter((p) => p !== value) : [...a.pains, value],
    }))

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (name.trim().length < 2) return setError('Введите имя')
    if (phone.replace(/\D/g, '').length < 11) return setError('Введите номер WhatsApp')
    if (!role) return setError('Выберите роль')
    if (!answers.niche || !answers.barrier || !answers.turnover) return setError('Пройдите все шаги')
    setError('')
    setSubmitting(true)
    const payload: LeadPayload = {
      niche: answers.niche,
      barrier: answers.barrier,
      turnover: answers.turnover,
      pains: answers.pains,
      role,
      name: name.trim(),
      whatsapp: phone,
      utm: getUtmParams(),
      scoreHint: computeScoreHint(answers.turnover, role),
    }
    await submitLead(payload)
    setSubmitting(false)
    setStage('success')
  }

  const resultLine = cfg.result.buildLine(answers)

  const overlay = (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={cfg.intro.title}
    >
      <button
        aria-label="Закрыть"
        className="absolute inset-0 cursor-default bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        className="relative z-10 max-h-[92vh] w-full max-w-[460px] overflow-y-auto rounded-2xl bg-[#141018] p-6 text-white shadow-2xl sm:p-8"
      >
        <button
          aria-label="Закрыть"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          ✕
        </button>

        {/* progress */}
        {stage !== 'success' && (
          <div className="mb-6 mt-1 pr-8">
            <div
              className="h-1.5 w-full overflow-hidden rounded-full bg-white/10"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={TOTAL}
              aria-valuenow={progressValue}
              aria-label="Прогресс диагностики"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#ff598e] to-[#7f50ea] transition-[width] duration-500 ease-out"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <p className="mt-2 text-[11px] text-white/40" aria-live="polite">
              {stage === 'steps' ? cfg.progressLabel(stepIndex + 1, TOTAL) : ` `}
            </p>
          </div>
        )}

        <div ref={panelRef}>
          {stage === 'intro' && (
            <div>
              <h2 ref={headingRef} tabIndex={-1} className="text-[26px] font-extrabold leading-tight outline-none">
                {cfg.intro.title}
              </h2>
              <p className="mt-3 text-sm text-white/60">{cfg.intro.body}</p>
              <button
                type="button"
                onClick={() => {
                  setStage('steps')
                  setStepIndex(0)
                }}
                className="mt-6 h-[54px] w-full rounded-xl bg-gradient-to-r from-[#ff598e] to-[#7f50ea] text-[15px] font-bold uppercase tracking-wide transition hover:brightness-110 active:scale-[0.99]"
              >
                {cfg.intro.start}
              </button>
            </div>
          )}

          {stage === 'steps' && renderStep()}

          {stage === 'result' && (
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wide text-[#ff598e]">
                {cfg.result.eyebrow}
              </p>
              <h2 ref={headingRef} tabIndex={-1} className="mt-2 text-[20px] font-extrabold leading-snug outline-none">
                {resultLine}
              </h2>

              <div className="mt-5">
                <ScratchReveal
                  overlayText={cfg.result.scratch.overlayText}
                  revealLabel={cfg.result.scratch.reveal}
                >
                  <div className="flex min-h-[132px] flex-col justify-center gap-1 bg-gradient-to-br from-[#241428] to-[#3a1836] p-5">
                    <span className="w-fit rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white/70">
                      {cfg.result.prize.badge}
                    </span>
                    <p className="mt-1 text-[18px] font-extrabold leading-tight">{cfg.result.prize.title}</p>
                    <p className="text-xs text-white/55">{cfg.result.prize.subtitle}</p>
                  </div>
                </ScratchReveal>
              </div>

              <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
                <p className="text-sm font-semibold">{cfg.result.form.title}</p>
                <div>
                  <label htmlFor="diag-name" className="mb-1.5 block text-[13px] text-white/50">
                    {cfg.result.form.nameLabel}
                  </label>
                  <input
                    id="diag-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={cfg.result.form.namePlaceholder}
                    className="h-[52px] w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-[15px] outline-none transition focus:border-[#ff598e] focus:ring-2 focus:ring-[#ff598e]/30"
                  />
                </div>
                <div>
                  <label htmlFor="diag-phone" className="mb-1.5 block text-[13px] text-white/50">
                    {cfg.result.form.phoneLabel}
                  </label>
                  <input
                    id="diag-phone"
                    type="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(maskKzPhone(e.target.value))}
                    onFocus={() => !phone && setPhone('+7 (7')}
                    placeholder={cfg.result.form.phonePlaceholder}
                    className="h-[52px] w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-[15px] outline-none transition focus:border-[#ff598e] focus:ring-2 focus:ring-[#ff598e]/30"
                  />
                </div>
                <div>
                  <span className="mb-1.5 block text-[13px] text-white/50">{cfg.result.form.roleLabel}</span>
                  <div className="grid grid-cols-2 gap-2">
                    {cfg.result.form.roleOptions.map((opt) => {
                      const active = role === opt.value
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          aria-pressed={active}
                          onClick={() => setRole(opt.value)}
                          className={`h-[46px] rounded-xl border px-3 text-sm font-medium transition ${
                            active
                              ? 'border-[#ff598e] bg-[#ff598e]/15 text-white'
                              : 'border-white/10 bg-white/[0.03] text-white/70 hover:border-white/25'
                          }`}
                        >
                          {opt.label}
                        </button>
                      )
                    })}
                  </div>
                </div>
                {error && <p className="text-xs text-[#ff598e]">{error}</p>}
                <button
                  type="submit"
                  disabled={submitting}
                  className="h-[54px] w-full rounded-xl bg-gradient-to-r from-[#ff598e] to-[#7f50ea] text-[15px] font-bold uppercase tracking-wide transition hover:brightness-110 active:scale-[0.99] disabled:opacity-70"
                >
                  {submitting ? cfg.result.form.submitting : cfg.result.form.submit}
                </button>
                <p className="text-center text-[11px] text-white/35">{cfg.result.form.consent}</p>
              </form>
            </div>
          )}

          {stage === 'success' && (
            <div className="py-4 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff598e]/15 text-3xl">
                ✓
              </div>
              <h2 ref={headingRef} tabIndex={-1} className="mb-2 text-2xl font-extrabold outline-none">
                {cfg.success.title}
              </h2>
              <p className="mb-6 text-sm text-white/60">{cfg.success.body}</p>
              <a
                href={cfg.result.prize.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#ff598e] to-[#7f50ea] font-semibold transition hover:brightness-110"
              >
                {cfg.success.fileCtaLabel}
              </a>
              <button
                onClick={onClose}
                className="mt-3 h-12 w-full rounded-xl bg-white/10 font-semibold transition hover:bg-white/15"
              >
                {cfg.success.close}
              </button>
            </div>
          )}
        </div>

        {/* nav */}
        {stage === 'steps' && (
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={goBack}
              className="h-[52px] flex-1 rounded-xl border border-white/15 bg-white/[0.03] text-sm font-semibold text-white/80 transition hover:border-white/30"
            >
              {cfg.nav.back}
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={!canAdvance}
              className="h-[52px] flex-[1.4] rounded-xl bg-gradient-to-r from-[#ff598e] to-[#7f50ea] text-sm font-bold uppercase tracking-wide transition hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {stepIndex < TOTAL - 1 ? cfg.nav.next : cfg.nav.finish}
            </button>
          </div>
        )}
      </div>
    </div>
  )

  // ── step renderer ──
  // NOTE: declared as hoisted functions — renderStep() runs while `overlay`
  // (defined earlier) is built, so const arrows here would hit the TDZ.
  function selectNiche(v: Niche) {
    setAnswers((a) => ({ ...a, niche: v }))
  }
  function selectBarrier(v: Barrier) {
    setAnswers((a) => ({ ...a, barrier: v }))
  }
  function selectTurnover(v: Turnover) {
    setAnswers((a) => ({ ...a, turnover: v }))
  }

  function renderSingle<T extends string>(
    options: Option<T>[],
    selected: T | null,
    onSelect: (v: T) => void
  ) {
    return options.map((opt) => {
      const isSel = selected === opt.value
      return (
        <button
          key={opt.value}
          type="button"
          aria-pressed={isSel}
          onClick={() => onSelect(opt.value)}
          className={`flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left text-[15px] font-medium transition active:scale-[0.99] ${
            isSel
              ? 'border-[#ff598e] bg-[#ff598e]/15 text-white'
              : 'border-white/10 bg-white/[0.03] text-white/80 hover:border-white/25'
          }`}
        >
          {opt.label}
          <span
            className={`ml-3 h-4 w-4 shrink-0 rounded-full border transition ${
              isSel ? 'border-[#ff598e] bg-[#ff598e]' : 'border-white/25'
            }`}
          />
        </button>
      )
    })
  }

  function renderStep() {
    const id = STEP_ORDER[stepIndex]
    const step =
      id === 'niche'
        ? cfg.steps.niche
        : id === 'barrier'
          ? cfg.steps.barrier
          : id === 'turnover'
            ? cfg.steps.turnover
            : cfg.steps.pains

    return (
      <div>
        <h2 ref={headingRef} tabIndex={-1} className="text-[22px] font-extrabold leading-tight outline-none">
          {step.title}
        </h2>
        {step.hint && <p className="mt-1.5 text-[13px] text-white/45">{step.hint}</p>}
        <div className="mt-5 space-y-2.5">
          {id === 'niche' && renderSingle(cfg.steps.niche.options, answers.niche, selectNiche)}
          {id === 'barrier' && renderSingle(cfg.steps.barrier.options, answers.barrier, selectBarrier)}
          {id === 'turnover' && renderSingle(cfg.steps.turnover.options, answers.turnover, selectTurnover)}
          {id === 'pains' &&
            cfg.steps.pains.options.map((opt) => {
              const selected = answers.pains.includes(opt.value)
              return (
                <button
                  key={opt.value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => togglePain(opt.value)}
                  className={`flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left text-[15px] font-medium transition active:scale-[0.99] ${
                    selected
                      ? 'border-[#ff598e] bg-[#ff598e]/15 text-white'
                      : 'border-white/10 bg-white/[0.03] text-white/80 hover:border-white/25'
                  }`}
                >
                  {opt.label}
                  <span
                    className={`ml-3 flex h-4 w-4 shrink-0 items-center justify-center rounded border text-[10px] transition ${
                      selected ? 'border-[#ff598e] bg-[#ff598e] text-white' : 'border-white/25'
                    }`}
                  >
                    {selected ? '✓' : ''}
                  </span>
                </button>
              )
            })}
        </div>
      </div>
    )
  }

  return createPortal(overlay, document.body)
}

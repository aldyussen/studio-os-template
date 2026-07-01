export type Niche = 'lashes-brows' | 'hair' | 'nails' | 'beauty-complex' | 'barbershop'
export type Barrier = 'team-chaos' | 'income-ceiling' | 'no-sales-system' | 'few-leads'
export type Turnover = 'lt-10k' | '10-50k' | '50-200k' | 'gt-200k'
export type Pain = string
export type Role = 'owner' | 'manager' | 'master' | 'admin'

export type ScoreHint = 'hot' | 'warm' | 'cold'

export interface DiagnosticAnswers {
  niche: Niche | null
  barrier: Barrier | null
  turnover: Turnover | null
  pains: Pain[]
}

export interface Utm {
  source: string | null
  medium: string | null
  campaign: string | null
  content: string | null
  term: string | null
}

// Shape intentionally kept flat and CRM-ready (amoCRM / ManyChat mapping).
export interface LeadPayload {
  niche: Niche
  barrier: Barrier
  turnover: Turnover
  pains: Pain[]
  role: Role
  name: string
  whatsapp: string
  utm: Utm
  scoreHint: ScoreHint
}

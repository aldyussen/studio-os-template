import type { Utm } from '@/types/lead'

export function getUtmParams(): Utm {
  if (typeof window === 'undefined') {
    return { source: null, medium: null, campaign: null, content: null, term: null }
  }
  const p = new URLSearchParams(window.location.search)
  const read = (k: string) => p.get(k) ?? null
  return {
    source: read('utm_source'),
    medium: read('utm_medium'),
    campaign: read('utm_campaign'),
    content: read('utm_content'),
    term: read('utm_term'),
  }
}

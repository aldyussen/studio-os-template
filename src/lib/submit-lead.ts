import type { LeadPayload } from '@/types/lead'

// TODO: wire real amoCRM / ManyChat endpoint. Keep the LeadPayload contract stable
// so the integration is a drop-in replacement for this stub.
export async function submitLead(payload: LeadPayload): Promise<void> {
  console.log('[submitLead] payload', payload)
  await new Promise((r) => setTimeout(r, 700))
}

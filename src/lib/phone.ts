// +7 (7XX) XXX-XX-XX — shared KZ phone mask used by lead forms.
export function maskKzPhone(raw: string): string {
  let d = raw.replace(/\D/g, '')
  if (d.startsWith('8')) d = '7' + d.slice(1)
  if (!d.startsWith('7')) d = '7' + d
  d = d.slice(0, 11)
  const a = d.slice(1, 4)
  const b = d.slice(4, 7)
  const c = d.slice(7, 9)
  const e = d.slice(9, 11)
  let out = '+7'
  if (a) out += ` (${a}`
  if (a.length === 3) out += ')'
  if (b) out += ` ${b}`
  if (c) out += `-${c}`
  if (e) out += `-${e}`
  return out
}

export const OVERVIEW_KIND = 'deepseek-overview'
export const OVERVIEW_TAB = '@local/dsh-deepseek-ui/overview'

export function openOverview(sidebarRight, sessionId, options) {
  const kind = sidebarRight.tabsIn(sessionId).some(tab => tab.kind === 'guide') ? 'guide' : OVERVIEW_KIND
  sidebarRight.openTabIn(sessionId, kind, options)
}

export function contextUsage(pressure) {
  const used = pressure?.projectedTokens ?? pressure?.pressureTokens
  const limit = pressure?.contextWindow
  if (!Number.isFinite(used) || used < 0 || !Number.isFinite(limit) || limit <= 0) return null
  const ratio = Math.min(1, used / limit)
  return { used, limit, ratio, percent: Math.round(100 * ratio) }
}

const fields = [
  ['system', 'systemTokens'],
  ['tools', 'toolsTokens'],
  ['messages', 'messageTokens'],
]

export function contextComposition(breakdown) {
  const parts = fields.map(([kind, field]) => ({ kind, tokens: breakdown?.[field] }))
  if (parts.some(({ tokens }) => !Number.isFinite(tokens) || tokens < 0)) return []
  const total = parts.reduce((sum, { tokens }) => sum + tokens, 0)
  if (total === 0) return []
  // The projection estimates composition independently of the provider-anchored total.
  return parts.map(part => ({ ...part, share: part.tokens / total }))
}

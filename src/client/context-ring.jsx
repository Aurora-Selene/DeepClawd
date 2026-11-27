import { useLanguage, useStore } from './ui.jsx'
import { contextUsage, openOverview } from './context.js'

export function ContextRing({ binding, locale, sidebarRight }) {
  const english = useLanguage(locale) === 'en'
  const mounted = useStore(sidebarRight.mounted)
  const usage = contextUsage(useStore(binding?.session.projections.faceOf('contextPressure')))
  if (!binding) return null
  const title = english ? 'Context window' : '上下文窗口'
  const label = usage ? `${title} · ${usage.percent}%` : title
  const ring = <span className="dsh-ui-context-ring" aria-hidden="true" style={{ '--dsh-ui-ring-progress': `${usage?.percent ?? 0}%` }} />
  if (mounted !== binding.sessionId) {
    return <span className="dsh-ui-context-status" role="img" title={label} aria-label={label}>{ring}</span>
  }
  return <button type="button" className="dsh-ui-control dsh-ui-context-trigger" title={label} aria-label={label}
    onClick={() => openOverview(sidebarRight, binding.sessionId)}>{ring}</button>
}

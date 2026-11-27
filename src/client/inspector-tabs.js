import { OVERVIEW_KIND } from './context.js'

export function fileTabRole(tab) {
  if (tab?.kind === 'files') return 'tree'
  if (tab?.kind === 'compaction-summary' || tab?.contentId?.startsWith('dsh-resource://file/')) return 'preview'
}

export function inspectorView(tab) {
  if (tab?.kind === 'guide' || tab?.kind === OVERVIEW_KIND) return 'overview'
  if (tab?.kind === 'forge-changes' || tab?.kind === 'changes-review') return 'diff'
  if (fileTabRole(tab)) return 'files'
  return tab?.kind
}

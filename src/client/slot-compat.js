export const MODEL_EXTENSIONS = [
  'conversation.input.model.label',
  'conversation.input.model.options',
  'conversation.input.model.pane',
]
export const PANEL_SECTION = 'conversation.session.panel.section'
export const PANEL_ACTIONS = 'conversation.session.panel.section.actions'
export const PANEL_EXTENSIONS = [
  PANEL_SECTION, PANEL_ACTIONS,
  'conversation.session.panel.environment.row', 'conversation.session.panel.indicator',
]
export const VIEW_EXTENSIONS = ['conversation.view', 'conversation.session.header.views.actions']
export const RELOCATED_SECTIONS = ['subagents', 'shared-tasks', 'background-jobs']

export function hasModelExtensions(slots) {
  return MODEL_EXTENSIONS.some(key => slots.entriesOfSlot(key).some(entry =>
    // The stock Team toggle is intentionally replaced by Ultra in this UI.
    entry.locale !== 'agent-team' || (entry.options.id ?? entry.options.key) !== 'agent-team'))
}

export function needsNativeSessionPanel(slots) {
  const sections = slots.entriesOfSlot(PANEL_SECTION)
  const actions = slots.entriesOfSlot(PANEL_ACTIONS)
  if (sections.some(({ options, children, locale }) => {
    if (options.id === 'environment') return !children?.[PANEL_EXTENSIONS[2]] || Object.keys(children).length !== 1
    if (options.id === 'change-requests' && locale === 'forgePanel') {
      return !children?.['forge.change-request.card.actions'] || Object.keys(children).length !== 1
    }
    return !RELOCATED_SECTIONS.includes(options.id) || Boolean(children)
  })) return true
  if (actions.some(({ options, children, locale }) => (options.key !== 'change-requests' || locale !== 'forgePanel')
      && (!RELOCATED_SECTIONS.includes(options.key) || children))) return true
  return slots.entriesOfSlot(PANEL_EXTENSIONS[2]).some(({ options }) =>
    !['project', 'forge.checkout', 'forge.local', 'forge.connection'].includes(options.id))
    || slots.entriesOfSlot(PANEL_EXTENSIONS[3]).some(({ options }) =>
      !['subagents.running', 'background-jobs.running', 'forge.attention'].includes(options.id))
}

export function registerWhen(slots, name, dependencies, enabled, register) {
  return slots.inject(name, () => {
    let dispose
    function sync() {
      if (enabled()) dispose ??= register()
      else if (dispose) {
        const remove = dispose
        dispose = undefined
        remove()
      }
    }
    const stop = dependencies.map(key => slots.subscribe(key, sync))
    try { sync() } catch (error) {
      for (const unsubscribe of stop) unsubscribe()
      throw error
    }
    return () => {
      for (const unsubscribe of stop) unsubscribe()
      dispose?.()
    }
  })
}

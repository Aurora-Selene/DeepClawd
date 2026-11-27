export const LIST_MOTION = { duration: 320, easing: 'cubic-bezier(.22, .75, .24, 1)' }

const REGION = '[data-conversation-content]'
const CARD = '[data-composer-card]'

export function composerShift(previous, next) {
  if (previous?.phase !== 'hero' || next.phase !== 'active' ||
    (previous.sessionId && previous.sessionId !== next.sessionId)) return null
  const x = previous.rect.left - next.rect.left
  const y = previous.rect.top - next.rect.top
  return Math.abs(x) > 1 || Math.abs(y) > 1 ? { x, y } : null
}

export function installComposerMotion() {
  const states = new Map()
  const reduced = matchMedia('(prefers-reduced-motion: reduce)')

  function track() {
    const live = new Set(document.querySelectorAll(REGION))
    for (const [region, state] of states) {
      if (live.has(region)) continue
      resize.unobserve(region)
      if (state.card) resize.unobserve(state.card)
      state.motion?.cancel()
      states.delete(region)
    }
    for (const region of live) {
      const previous = states.get(region)
      const card = [...region.querySelectorAll(CARD)].find(node => node.closest(REGION) === region)
      if (!previous) resize.observe(region)
      if (card !== previous?.card) {
        if (previous?.card) resize.unobserve(previous.card)
        if (card) resize.observe(card)
      }
      if (!card) {
        previous?.motion?.cancel()
        states.set(region, { phase: region.dataset.contentPhase })
        continue
      }
      const next = { card, phase: region.dataset.contentPhase, sessionId: region.dataset.conversationSession,
        rect: card.getBoundingClientRect(), motion: previous?.motion }
      const shift = previous?.rect && composerShift(previous, next)
      if (shift && !reduced.matches) {
        previous.motion?.cancel()
        next.motion = card.animate([{ translate: `${shift.x}px ${shift.y}px` }, { translate: '0 0' }], LIST_MOTION)
        next.motion.id = 'dsh-ui-composer-dock-shift'
      }
      states.set(region, next)
    }
  }

  const resize = new ResizeObserver(track)
  const observer = new MutationObserver(records => {
    if (records.some(record => record.type === 'attributes' || [...record.addedNodes, ...record.removedNodes]
      .some(node => node instanceof Element && (node.matches(`${REGION}, ${CARD}`) || node.querySelector(`${REGION}, ${CARD}`))))) track()
  })
  observer.observe(document.body, { childList: true, subtree: true, attributes: true,
    attributeFilter: ['data-content-phase', 'data-conversation-session'] })
  function stopMotion() { if (reduced.matches) for (const { motion } of states.values()) motion?.cancel() }
  reduced.addEventListener('change', stopMotion)
  track()
  return () => {
    observer.disconnect()
    resize.disconnect()
    reduced.removeEventListener('change', stopMotion)
    for (const { motion } of states.values()) motion?.cancel()
  }
}

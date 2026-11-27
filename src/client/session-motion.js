import { LIST_MOTION } from './motion.js'

const MAIN = '[data-conversation-content]:not([class*="_embeddedBody"])'
const HEADER = 'header[data-window-drag]:has(> [data-conversation-header-leading])'
const TITLE = `${HEADER} :is(span[class*="_crumbCurrent"],
  [data-subagent-action] button:not([class*="_ancestorSwitcherTrigger"]) [class*="_switcherTitle"])`
const SECTION = '[data-overview-section]'
const REVEAL = '.dsh-ui-overview-reveal'
const EXIT_TIME = 105

function visibleOverview(sessionId) {
  const panel = document.querySelector(`[data-sidebar-right-panel][data-sidebar-right-open][data-sidebar-right-session="${CSS.escape(sessionId)}"]`)
  const overview = panel?.querySelector('[data-dsh-ui-overview]')
  return overview?.checkVisibility({ visibilityProperty: true }) ? overview : null
}

function disclosureElements(overview) {
  const result = new Map()
  for (const section of overview?.querySelectorAll(SECTION) ?? []) {
    const reveal = section.querySelector(REVEAL)
    if (reveal) result.set(section.dataset.overviewSection, reveal)
  }
  return result
}

function snapshotDisclosures(overview) {
  if (!overview) return null
  return new Map(Array.from(disclosureElements(overview), ([section, reveal]) => [section, {
    open: reveal.hasAttribute('data-expanded'),
    height: reveal.getBoundingClientRect().height,
  }]))
}

function snapshotTitle(...nodes) {
  let snapshot
  for (const node of nodes) {
    if (!node?.isConnected) continue
    const style = getComputedStyle(node)
    const opacity = Number(style.opacity)
    if (opacity <= (snapshot?.opacity ?? 0)) continue
    const { left, top, width, height } = node.getBoundingClientRect()
    snapshot = {
      text: node.textContent, opacity,
      style: { left: `${left}px`, top: `${top}px`, width: `${width}px`, height: `${height}px`,
        font: style.font, color: style.color, padding: style.padding, direction: style.direction },
    }
  }
  return snapshot
}

export function installSessionSwitchMotion(mounted) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)')
  const animations = new Set()
  let sessionId = mounted.getSnapshot()
  let pending
  let timeout
  let ghost

  function play(element, frames, options, id, finish) {
    const animation = element.animate(frames, options)
    animation.id = id
    animations.add(animation)
    animation.onfinish = () => {
      animations.delete(animation)
      finish?.()
    }
  }

  function showTitle(snapshot, incoming) {
    const outgoing = document.createElement('span')
    outgoing.className = 'dsh-ui-session-title-outgoing'
    outgoing.setAttribute('aria-hidden', 'true')
    outgoing.textContent = snapshot.text
    Object.assign(outgoing.style, {
      ...snapshot.style, position: 'fixed', boxSizing: 'border-box', pointerEvents: 'none',
      overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
    })
    incoming.closest(HEADER).append(outgoing)
    ghost = outgoing
    play(outgoing, [{ opacity: snapshot.opacity, translate: '0 0' }, { opacity: 0, translate: '0 -3px' }],
      { duration: EXIT_TIME, easing: 'ease-out', fill: 'forwards' }, 'dsh-ui-session-title-out', () => {
        outgoing.remove()
        if (ghost === outgoing) ghost = null
      })
    play(incoming, [{ opacity: 0, translate: '0 3px' }, { opacity: 1, translate: '0 0' }],
      { ...LIST_MOTION, duration: 175, delay: EXIT_TIME, fill: 'backwards' }, 'dsh-ui-session-title-in')
  }

  function showDisclosures(before, overview) {
    for (const [section, reveal] of disclosureElements(overview)) {
      const old = before.get(section)
      const open = reveal.hasAttribute('data-expanded')
      if (open && !old?.open) {
        play(reveal, [{ gridTemplateRows: '0fr', opacity: 0 }, { gridTemplateRows: '1fr', opacity: 1 }],
          LIST_MOTION, 'dsh-ui-section-expand')
      } else if (!open && old?.open && old.height > 0) {
        play(reveal, [{ blockSize: `${old.height}px` }, { blockSize: '0px' }], LIST_MOTION, 'dsh-ui-section-collapse')
      }
    }
  }

  function sync() {
    if (!pending) return
    const main = document.querySelector(MAIN)
    if (main?.dataset.conversationSession !== sessionId) return
    if (pending.title) {
      const incoming = document.querySelector(TITLE)
      if (incoming && incoming.textContent !== sessionId) {
        showTitle(pending.title, incoming)
        pending.title = null
      } else if (main.dataset.contentPhase === 'hero') pending.title = null
    }
    if (pending.disclosures) {
      const overview = visibleOverview(sessionId)
      if (overview) {
        showDisclosures(pending.disclosures, overview)
        pending.disclosures = null
      }
    }
    if (!pending.title && !pending.disclosures) stopWatching()
  }

  const observer = new MutationObserver(sync)
  function stopWatching() {
    observer.disconnect()
    clearTimeout(timeout)
    pending = null
  }

  function stopAnimations() {
    for (const animation of animations) animation.cancel()
    animations.clear()
    ghost?.remove()
    ghost = null
  }

  function switchSession() {
    const next = mounted.getSnapshot()
    if (next === sessionId) return
    // The mounted session is published before the view changes. Sample the
    // outgoing elements while they still have a layout.
    const title = snapshotTitle(ghost, document.querySelector(TITLE)) ?? pending?.title
    const disclosures = sessionId && snapshotDisclosures(visibleOverview(sessionId))
    const animate = sessionId && next && !reduced.matches
    stopWatching()
    stopAnimations()
    sessionId = next
    if (!animate || (!title && !disclosures)) return
    pending = { title, disclosures }
    observer.observe(document.body, { childList: true, characterData: true, subtree: true, attributes: true,
      attributeFilter: ['data-conversation-session', 'data-content-phase', 'data-sidebar-right-open', 'hidden'] })
    timeout = setTimeout(stopWatching, 500)
    sync()
  }

  function motionPreferenceChanged() {
    if (!reduced.matches) return
    stopWatching()
    stopAnimations()
  }
  const unsubscribe = mounted.subscribe(switchSession)
  reduced.addEventListener('change', motionPreferenceChanged)
  return () => {
    unsubscribe()
    reduced.removeEventListener('change', motionPreferenceChanged)
    stopWatching()
    stopAnimations()
  }
}

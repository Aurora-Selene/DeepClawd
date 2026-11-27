import { Children, cloneElement, Fragment, isValidElement, useEffect, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Icon, useLanguage } from './ui.jsx'
import { usePopover } from './popover.jsx'
import { PROJECT_ICONS, PROJECT_ICON_STORAGE, sidebarStatus, workspaceIcon } from './sidebar.js'
import { SidebarSessions } from './sidebar-sessions.jsx'
import { LIST_MOTION } from './motion.js'

const LIST = '[data-sidebar-list-area]'
const WIDE = '[data-sidebar-scrollport]'
const SEARCH = '[data-sidebar-workspace-header] button[class*="_searchButton"]'
const PROJECT = '[data-row-key^="workspace:"]:not([data-row-key="workspace:"])'
const SESSION = '[data-row-key^="session:"], [class*="_searchResultHeading"], [data-dsh-ui-pinned-session]'
const SLOT = ':scope > span[class*="_slot"], .dsh-ui-pinned-leading'
const SETTLE_ID = 'dsh-ui-session-settle'

function styleNewSession(node, label) {
  if (Array.isArray(node)) return node.map(child => styleNewSession(child, label))
  if (!isValidElement(node)) return node
  const { className, children } = node.props
  if (node.type === 'button' && className?.endsWith('_newSession')) {
    const remaining = Children.toArray(children).filter(child => !child.props?.className?.endsWith('_newSessionLabelMask'))
    return cloneElement(node, {
      className: `${className} dsh-ui-sidebar-new`,
      'aria-label': label,
    }, <Icon name="plus" />, <span className="dsh-ui-sidebar-new-label">{label}</span>, ...remaining)
  }
  // The slot hands through the native button inside the HOC boundary and Tooltip.
  if (children === undefined) return node
  const styled = styleNewSession(children, label)
  return styled === children ? node : cloneElement(node, undefined, styled)
}

export function SidebarNewSession({ wide, children, locale }) {
  const english = useLanguage(locale) === 'en'
  return wide ? styleNewSession(children, english ? 'New chat' : '新建') : children
}

function readIcon(key) {
  try { return workspaceIcon(localStorage.getItem(key)) } catch { return 'folder' }
}

function ProjectIcon({ workspaceId, expanded, title, english }) {
  const key = PROJECT_ICON_STORAGE + workspaceId
  const [selected, setSelected] = useState(() => readIcon(key))
  const popover = usePopover({ align: 'left' })
  const label = english ? 'Change project icon' : '更换项目图标'

  useEffect(() => {
    const sync = event => { if (event.key === key || event.key === null) setSelected(readIcon(key)) }
    window.addEventListener('storage', sync)
    return () => window.removeEventListener('storage', sync)
  }, [key])
  useEffect(() => { if (!expanded) popover.close() }, [expanded])

  return <>
    <button {...popover.trigger} type="button" tabIndex={expanded ? 0 : -1} className="dsh-ui-control dsh-ui-project-icon"
      data-dsh-ui-project-icon={selected} title={label} aria-label={`${label} · ${title}`}
      onClick={event => { event.stopPropagation(); popover.trigger.onClick(event) }}>
      <Icon name={selected} />
    </button>
    <span {...popover.content} className="dsh-ui-popover dsh-ui-project-menu" aria-label={label}
      onClick={event => event.stopPropagation()}>
      {PROJECT_ICONS.map(([icon, zh, en]) => <button key={icon} type="button"
        className="dsh-ui-model-row dsh-ui-project-option" aria-pressed={selected === icon}
        onClick={() => {
          setSelected(icon)
          try { localStorage.setItem(key, icon) } catch { /* Keep the current window usable without storage. */ }
          popover.close({ focus: true })
        }}>
        <Icon name={icon} /><span>{english ? en : zh}</span>{selected === icon && <Icon name="check" />}
      </button>)}
    </span>
  </>
}

function settleStatus(mark) {
  const parts = [...mark.querySelectorAll('.dsh-ui-run-rays, .dsh-ui-run-ripple, .dsh-ui-run-orbit')].map(element => {
    const { transform, opacity } = getComputedStyle(element)
    return { element, transform, opacity }
  })
  const dot = mark.querySelector('.dsh-ui-session-dot')
  const { scale } = getComputedStyle(dot)
  mark.dataset.status = 'unread'

  for (const { element, transform, opacity } of parts) {
    const rays = element.classList.contains('dsh-ui-run-rays')
    const diagonal = element.classList.contains('dsh-ui-run-diagonals')
    if (!rays && Number(opacity) <= 0.01) continue
    const keyframes = [{ transform, opacity }]
    const tilt = diagonal ? 'rotate(45deg) ' : ''
    if (rays) keyframes.push({ transform: `${tilt}scale(.86)`, opacity: diagonal ? .68 : .9, offset: .26 })
    const finalTransform = rays ? `${tilt}scale(.12)` : `${transform === 'none' ? '' : `${transform} `}scale(.22)`
    keyframes.push({ transform: finalTransform, opacity: 0 })
    element.animate(keyframes, { ...LIST_MOTION, duration: rays ? 430 : 280 }).id = SETTLE_ID
  }
  dot.animate([{ scale }, { scale: '1' }], LIST_MOTION).id = SETTLE_ID
}

function decorateStatus(row, decorated, reduce) {
  const slot = row.querySelector(SLOT)
  if (!slot) return
  const stateDot = slot.querySelector(':scope > [data-state]')
  const status = sidebarStatus(stateDot?.dataset.state)
  const previous = decorated.get(slot)
  if (!status) {
    previous?.remove()
    decorated.delete(slot)
    return
  }

  // The workspace UI paints its own StateDot before consulting the leading slot.
  // Enhance it at that point so native state ordering and accessible labels still apply.
  const mark = previous ?? document.createElement('span')
  if (!previous) {
    mark.className = 'dsh-ui-session-status-mark'
    mark.setAttribute('aria-hidden', 'true')
    for (const part of ['session-dot', 'run-rays run-cross', 'run-rays run-diagonals', 'run-ripple', 'run-orbit', 'wait-bars']) {
      const child = document.createElement('span')
      child.className = part.split(' ').map(name => `dsh-ui-${name}`).join(' ')
      mark.append(child)
    }
    slot.append(mark)
    decorated.set(slot, mark)
  }
  if (mark.dataset.status === status) return
  for (const motion of mark.getAnimations({ subtree: true })) if (motion.id === SETTLE_ID) motion.cancel()
  if (mark.dataset.status === 'running' && status === 'unread' && !reduce) settleStatus(mark)
  else mark.dataset.status = status
}

function tuneRowMotion(row) {
  for (const motion of row.getAnimations()) {
    const timing = motion.effect?.getTiming()
    // Workspace's native AnimatedRows owns reordering and sends a 200 ms easing.
    if (timing?.duration === 200 && timing.easing === 'ease-out' && !('transitionProperty' in motion) && !('animationName' in motion)) {
      motion.effect.updateTiming(LIST_MOTION)
    }
  }
}

export function SidebarDecorations({ locale, slots, sessions, workspaces, uiWorkspace, layout, sessionStatus, remoteAccess, renderFactorySlot }) {
  const english = useLanguage(locale) === 'en'
  const [projects, setProjects] = useState([])
  const [seats, setSeats] = useState({})

  useLayoutEffect(() => {
    const decorated = new Map()
    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    const searchSeat = document.createElement('div')
    const recentSeat = document.createElement('div')
    const pinnedSeat = document.createElement('div')
    const draftStyles = document.createElement('style')
    document.head.append(draftStyles)
    searchSeat.className = 'dsh-ui-sidebar-search-seat'
    pinnedSeat.className = 'dsh-ui-sidebar-pinned-seat'
    const anchoredSearch = CSS.supports('top: anchor(top)') && CSS.supports('width: anchor-size(width)')
    let openSearch
    let focusFrame = 0
    let frame = 0

    function hideDraftRows() {
      // Keep draft rows hidden through the native tree's before-update layout measurement.
      const byId = sessions.list.getSnapshot()?.byId ?? {}
      const rows = Object.values(byId).filter(session => session.blank === true)
        .map(({ id }) => `${LIST} [data-row-key="${CSS.escape(`session:${id}`)}"]`)
      const css = rows.length > 0 ? `${rows.join(', ')} { display: none; }` : ''
      if (draftStyles.textContent !== css) draftStyles.textContent = css
    }

    function placeSections() {
      const wide = document.querySelector(WIDE)
      const list = wide?.querySelector(LIST)
      const nav = wide?.querySelector(':scope > nav[class*="_panelList"]')
      const searchButton = nav ? wide.querySelector(SEARCH) : null
      const searchLabel = searchButton?.getAttribute('aria-label')
      const searchShortcut = searchButton?.getAttribute('aria-keyshortcuts')
      const searchExpanded = searchButton?.ariaExpanded === 'true'
      const label = slots.entriesOfSlot('sidebar.panellist').find(entry => entry.options.id === 'schedules')?.options.label
      const scheduleLabel = typeof label === 'function' ? label() : label
      const schedule = Array.from(nav?.querySelectorAll('button[class*="_panelRow"]') ?? [])
        .find(button => button.getAttribute('aria-label') === scheduleLabel)
      const scheduleEntry = schedule?.closest('[class*="_panelEntry"]')
      const before = scheduleEntry && scheduleEntry.parentElement === nav
        ? scheduleEntry : nav?.querySelector(':scope > [class*="_moreAnchor"]') ?? null

      if (!searchButton) searchSeat.remove()
      else if (nav.firstElementChild !== searchSeat) nav.prepend(searchSeat)
      if (anchoredSearch && searchExpanded && openSearch !== searchButton) {
        searchSeat.scrollIntoView({ block: 'nearest', inline: 'nearest' })
      }
      openSearch = searchExpanded ? searchButton : undefined

      if (!nav) recentSeat.remove()
      else if (recentSeat.parentElement !== nav || recentSeat.nextSibling !== before) nav.insertBefore(recentSeat, before)
      if (!list) pinnedSeat.remove()
      else if (list.firstElementChild !== pinnedSeat) list.prepend(pinnedSeat)

      const recent = nav ? recentSeat : undefined
      const pinned = list ? pinnedSeat : undefined
      const glyph = schedule?.querySelector('[class*="_panelGlyph"]')
      setSeats(previous => previous.recent === recent && previous.pinned === pinned && previous.glyph === glyph
        && previous.searchButton === searchButton && previous.searchLabel === searchLabel
        && previous.searchShortcut === searchShortcut && previous.searchExpanded === searchExpanded
        ? previous : { recent, pinned, glyph, searchSeat, searchButton, searchLabel, searchShortcut, searchExpanded })
    }

    function synchronize() {
      frame = 0
      placeSections()
      const rows = []
      for (const list of document.querySelectorAll(LIST)) {
        for (const row of list.querySelectorAll(SESSION)) {
          decorateStatus(row, decorated, reduced.matches)
          if (!reduced.matches) tuneRowMotion(row)
        }
        for (const row of list.querySelectorAll(PROJECT)) {
          if (!reduced.matches) tuneRowMotion(row)
          const iconSlot = row.querySelector(':scope > span[class*="_folder"]')
          const titleSlot = row.querySelector(':scope > span[class*="_projectText"]')
          if (!iconSlot || !titleSlot) continue
          rows.push({ iconSlot, titleSlot, id: row.dataset.rowKey.slice('workspace:'.length),
            expanded: row.getAttribute('aria-expanded') === 'true',
            title: titleSlot.textContent ?? '' })
        }
      }
      for (const [slot] of decorated) if (!slot.isConnected) decorated.delete(slot)
      setProjects(previous => previous.length === rows.length && previous.every((row, index) =>
        row.iconSlot === rows[index].iconSlot && row.titleSlot === rows[index].titleSlot
        && row.expanded === rows[index].expanded && row.title === rows[index].title) ? previous : rows)
    }

    function touchesSidebar({ target, addedNodes, removedNodes }) {
      if (target instanceof Element && target.closest(`[class*="_sidebarCol"], ${LIST}`)) return true
      return [...addedNodes, ...removedNodes].some(node => node instanceof Element && (node.matches(WIDE) || node.querySelector(WIDE)))
    }
    function scheduleSync() {
      if (!frame) frame = requestAnimationFrame(synchronize)
    }
    const observer = new MutationObserver(records => {
      if (!frame && records.some(touchesSidebar)) scheduleSync()
    })
    observer.observe(document.body, { childList: true, subtree: true, attributes: true,
      attributeFilter: ['aria-expanded', 'aria-label', 'aria-keyshortcuts', 'data-sidebar-scrollport', 'data-state'] })
    const unsubscribe = slots.subscribe('sidebar.panellist', scheduleSync)
    const unsubscribeDrafts = sessions.list.subscribe(hideDraftRows)
    function restoreSearchFocus(event) {
      const button = openSearch
      if (event.key !== 'Escape' || !(event.target instanceof HTMLInputElement)
        || !button?.closest('[class*="_searchSlot"]')?.contains(event.target)) return
      cancelAnimationFrame(focusFrame)
      focusFrame = requestAnimationFrame(() => {
        if (button.ariaExpanded === 'false') searchSeat.firstElementChild?.focus({ preventScroll: true })
      })
    }
    function stopMotion() {
      if (!reduced.matches) return
      for (const mark of decorated.values()) {
        for (const motion of mark.getAnimations({ subtree: true })) if (motion.id === SETTLE_ID) motion.cancel()
      }
    }
    reduced.addEventListener('change', stopMotion)
    document.addEventListener('keydown', restoreSearchFocus, true)
    hideDraftRows()
    synchronize()
    return () => {
      observer.disconnect()
      unsubscribe()
      unsubscribeDrafts()
      reduced.removeEventListener('change', stopMotion)
      document.removeEventListener('keydown', restoreSearchFocus, true)
      cancelAnimationFrame(focusFrame)
      cancelAnimationFrame(frame)
      searchSeat.remove()
      recentSeat.remove()
      pinnedSeat.remove()
      draftStyles.remove()
      for (const mark of decorated.values()) mark.remove()
    }
  }, [slots, sessions])

  return <>
    {seats.searchButton && createPortal(<button type="button" className="dsh-ui-sidebar-search"
      aria-expanded={seats.searchExpanded} aria-keyshortcuts={seats.searchShortcut ?? undefined}
      onClick={event => {
        event.stopPropagation()
        seats.searchButton.click()
      }}>
      <Icon name="search" /><span>{seats.searchLabel || (english ? 'Search chats' : '搜索会话')}</span>
    </button>, seats.searchSeat)}
    {projects.map(({ iconSlot, titleSlot, id, expanded, title }) => <Fragment key={id}>
      {createPortal(<ProjectIcon workspaceId={id} expanded={expanded} title={title} english={english} />, iconSlot)}
      {createPortal(<Icon name="next" className="dsh-ui-project-chevron" />, titleSlot)}
    </Fragment>)}
    {seats.glyph && createPortal(<Icon name="calendar" className="dsh-ui-schedule-icon" />, seats.glyph)}
    <SidebarSessions seats={seats} english={english} sessions={sessions} workspaces={workspaces} uiWorkspace={uiWorkspace}
      layout={layout} sessionStatus={sessionStatus} remoteAccess={remoteAccess} renderFactorySlot={renderFactorySlot} />
  </>
}

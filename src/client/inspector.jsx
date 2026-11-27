import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { OVERVIEW_KIND } from './context.js'
import { fileTabRole, inspectorView } from './inspector-tabs.js'
import { localChangesAddress } from './overview-data.js'
import { usePopover } from './popover.jsx'
import { Icon, useLanguage, useStore } from './ui.jsx'

const COLUMN = '[data-rightbar-col]'
const DOCKED_PANE = '[data-dockkit-host="dock"] [data-dockkit-pane]'
const PANE_TABS = '[data-dockkit-strip-tabs] > [data-dockkit-tab]'
const LOCAL_CHANGES = '[data-forge-changes="local"]'
const CHECKOUT_STATUS = 'data-dsh-ui-checkout-status'
const PRIMARY = [
  { view: 'overview', kind: 'guide', icon: 'overview', zh: '会话详情', en: 'Chat details' },
  { view: 'files', kind: 'files', icon: 'folder', zh: '文件', en: 'Files' },
  { view: 'diff', kind: 'forge-changes', icon: 'diff', zh: '改动', en: 'Changes' },
  { view: 'browser', kind: 'browser', icon: 'globe', zh: '浏览器', en: 'Browser' },
  { view: 'forge-panel', kind: 'forge-panel', icon: 'branch', zh: '代码审查和变更', en: 'Code review and changes' },
]

function openedPanels({ seat, sessionId }, sidebarRight, inventory) {
  const panelIds = new Set(inventory
    .filter(item => item.sessionId === sessionId && !fileTabRole(item))
    .map(item => item.tabId))
  const chips = seat.nextElementSibling?.querySelectorAll(`${DOCKED_PANE} ${PANE_TABS}`) ?? []
  return Array.from(chips).flatMap(chip => {
    const id = chip.dataset.dockkitTab
    if (!panelIds.has(id)) return []
    const title = chip.querySelector('[data-dockkit-tab-title]')?.textContent.trim()
      || sidebarRight.tabsIn(sessionId).find(tab => tab.id === id)?.title
    if (!title) return []
    const paneId = chip.closest('[data-dockkit-pane]').dataset.dockkitPane
    return [{ id, title, canClose: sidebarRight.menuTabs(sessionId, paneId, id).close }]
  })
}

function revealFileTab(tab) {
  tab.scrollIntoView({ block: 'nearest', inline: 'nearest', container: 'nearest', behavior: 'instant' })
}

function LocalChangesCheckout({ target, form, getForge, locale }) {
  const marker = useRef(null)
  const [emptyPanel, setEmptyPanel] = useState(null)
  const english = useLanguage(locale) === 'en'
  const sessionId = form === 'bar' && target.source.kind === 'local' ? target.sessionId : null

  useLayoutEffect(() => {
    const panel = marker.current?.closest(LOCAL_CHANGES)
    if (!sessionId || !panel) return
    const forge = getForge()
    if (!forge) return

    const controller = new AbortController()
    const { signal } = controller
    let stream
    let branchCheck
    function showStatus(status) {
      if (panel.getAttribute(CHECKOUT_STATUS) === status) return
      if (status) panel.setAttribute(CHECKOUT_STATUS, status)
      else panel.removeAttribute(CHECKOUT_STATUS)
      // A portalled menu needs to close when its trigger becomes hidden.
      for (const trigger of panel.querySelectorAll('button[aria-haspopup="menu"][aria-expanded="true"]')) {
        if (!trigger.checkVisibility()) trigger.click()
      }
      setEmptyPanel(status === 'none' ? panel : null)
    }
    showStatus('pending')

    async function followCheckout() {
      stream = forge.follow(sessionId, signal)
      for await (const state of stream) {
        signal.throwIfAborted()
        const { checkout } = state
        let status = checkout.state
        if (checkout.state === 'ready' && checkout.checkout.commit === null) status = 'unborn'
        if (status === 'ready' && state.local === null) {
          const { root, branch, commit } = checkout.checkout
          const key = JSON.stringify([state.directory, root, branch, commit, state.worktree?.created?.baseCommit])
          if (branchCheck?.key !== key) {
            const bases = await forge.diffBases(sessionId, '', signal)
            signal.throwIfAborted()
            branchCheck = { key, missing: bases.ok && bases.value.automatic === null }
          }
          if (branchCheck.missing) status = 'no-base'
        } else branchCheck = undefined
        showStatus(status)
      }
    }

    // Let the native panel show real connection or Git failures.
    void followCheckout().catch(() => {
      if (!signal.aborted) showStatus(null)
    })
    return () => {
      controller.abort()
      stream?.dispose?.()
      panel.removeAttribute(CHECKOUT_STATUS)
    }
  }, [sessionId, getForge])

  return sessionId === null ? null : <>
    <span hidden ref={marker} />
    {emptyPanel && createPortal(<div className="dsh-ui-changes-empty" role="status">
      {english ? 'This directory is not a Git repository.' : '当前目录不是 Git 仓库'}
    </div>, emptyPanel)}
  </>
}

export function registerLocalChangesCheckout(ctx) {
  const getForge = () => ctx.get('remote.forgePanel')
  ctx.slots.inject('forge.changes.toolbar', () => ctx.slots.register({
    name: 'forge.changes.toolbar', id: 'deepseek-ui.checkout-status',
    inject: () => ({ getForge, locale: ctx.locale }),
  }, LocalChangesCheckout))
}

function useInspectorDock(sidebarRight, sessionId) {
  const [dock, setDock] = useState(null)
  useLayoutEffect(() => {
    if (!sessionId) return
    const seat = document.createElement('div')
    seat.className = 'dsh-ui-inspector-seat'
    let column = null
    let frame = 0
    const selectedFiles = new WeakMap()

    function sync() {
      frame = 0
      column = document.querySelector(COLUMN)
      const panel = Array.from(column?.querySelectorAll('[data-sidebar-right-panel]') ?? [])
        .find(node => node.dataset.sidebarRightSession === sessionId)
      const surface = panel?.querySelector('[data-dockkit-surface]')
      if (!surface) {
        seat.remove()
        setDock(null)
        return
      }
      if (seat.nextElementSibling !== surface) surface.before(seat)
      const panes = Array.from(surface.querySelectorAll(DOCKED_PANE))
      const pane = panes.find(node => node.hasAttribute('data-dockkit-pane-active')) ?? panes[0]
      const tabs = new Map(sidebarRight.tabsIn(sessionId).map(tab => [tab.id, tab]))
      const tab = tabs.get(pane?.dataset.dockkitContent)
      const fullscreen = panel.dataset.sidebarRightPanel === 'fullscreen'
      const expanded = panel.hasAttribute('data-sidebar-right-open')
      for (const node of panes) {
        let selected
        for (const chip of node.querySelectorAll(PANE_TABS)) {
          const role = fileTabRole(tabs.get(chip.dataset.dockkitTab))
          if (role) {
            chip.dataset.inspectorFileTab = role
            if (expanded && chip.ariaSelected === 'true') selected = chip
          } else chip.removeAttribute('data-inspector-file-tab')
        }
        if (selected && selectedFiles.get(node) !== selected) revealFileTab(selected)
        selectedFiles.set(node, selected)
      }
      seat.inert = !expanded
      setDock(previous => previous?.seat === seat && previous.pane === pane && previous.tab === tab
        && previous.fullscreen === fullscreen && previous.expanded === expanded
        ? previous : { sessionId, seat, pane, tab, fullscreen, expanded })
    }

    function navigateFileTabs(event) {
      const tab = event.target
      if (!tab.matches?.('[data-inspector-file-tab]') || !column?.contains(tab)) return
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
      // The native pane also contains hidden utility tabs.
      const files = Array.from(tab.parentElement.querySelectorAll(':scope > [data-inspector-file-tab]'))
      const delta = event.key === 'ArrowLeft' ? -1 : 1
      const index = event.key === 'Home' ? 0 : event.key === 'End' ? files.length - 1
        : (files.indexOf(tab) + delta + files.length) % files.length
      event.preventDefault()
      event.stopPropagation()
      files[index].focus({ preventScroll: true })
      revealFileTab(files[index])
    }

    const observer = new MutationObserver(records => {
      if (frame) return
      const columnRemoved = column && !column.isConnected
      const columnChanged = records.some(({ target, addedNodes }) => column?.contains(target) || target.matches?.(COLUMN)
        || Array.from(addedNodes).some(node => node.matches?.(COLUMN) || node.querySelector?.(COLUMN)))
      if (columnRemoved || columnChanged) frame = requestAnimationFrame(sync)
    })
    observer.observe(document.body, { childList: true, subtree: true, attributes: true,
      attributeFilter: ['data-rightbar-col', 'data-dockkit-pane-active', 'data-dockkit-content',
        'data-sidebar-right-session', 'data-sidebar-right-open', 'data-sidebar-right-panel'] })
    document.addEventListener('keydown', navigateFileTabs, true)
    sync()
    return () => {
      observer.disconnect()
      document.removeEventListener('keydown', navigateFileTabs, true)
      cancelAnimationFrame(frame)
      seat.remove()
    }
  }, [sidebarRight, sessionId])
  return dock?.sessionId === sessionId ? dock : null
}

function InspectorTools({ dock, english, sidebarRight, sidebarRightTabs, webTerminals }) {
  const { sessionId, pane, tab, fullscreen, expanded } = dock
  const popover = usePopover()
  const inventory = useStore(popover.open ? sidebarRight.openTabs : undefined)
  const [shellList, setShellList] = useState(null)
  const [chooseShell, setChooseShell] = useState(false)
  const [registry, setRegistry] = useState(() => sidebarRightTabs.entries())
  const active = inspectorView(tab)
  const t = (zh, en) => english ? en : zh
  const paneId = pane?.dataset.dockkitPane
  const paneTabIds = new Set(Array.from(pane?.querySelectorAll(PANE_TABS) ?? [], node => node.dataset.dockkitTab))
  const paneTabs = sidebarRight.tabsIn(sessionId).filter(row => paneTabIds.has(row.id))

  useEffect(() => sidebarRightTabs.subscribe(() => setRegistry(sidebarRightTabs.entries())), [sidebarRightTabs])
  useEffect(() => {
    if (!expanded && popover.open) popover.close()
  }, [expanded, popover.open])
  useEffect(() => {
    if (!popover.open) setChooseShell(false)
  }, [popover.open])
  useEffect(() => {
    if (!popover.open || !chooseShell || !webTerminals) return
    const controller = new AbortController()
    setShellList(null)
    void webTerminals.launchShells(sessionId, controller.signal).then(choices => {
      if (!controller.signal.aborted) setShellList(choices)
    }).catch(() => {
      if (!controller.signal.aborted) setShellList({ failed: true, shells: [] })
    })
    return () => controller.abort()
  }, [popover.open, chooseShell, sessionId, webTerminals])

  function openView({ kind, view }) {
    if (sidebarRight.mounted.getSnapshot() !== sessionId) return
    const matches = row => view === 'overview' || view === 'diff' ? inspectorView(row) === view : row?.kind === kind
    if (matches(tab)) return
    const existing = paneTabs.findLast(matches)
    if (existing) {
      sidebarRight.focus(existing.id)
      return
    }
    if (!sidebarRightTabs.get(kind)) return
    if (view === 'diff') sidebarRight.openResourceIn(sessionId, localChangesAddress(sessionId), { kind, destination: 'sidebar' })
    else sidebarRight.openTabIn(sessionId, kind, { paneId })
  }

  function run(action) {
    popover.close({ focus: true })
    if (sidebarRight.mounted.getSnapshot() === sessionId && sidebarRight.isExpanded()) action()
  }

  const extras = sidebarRightTabs.guide().filter(entry => entry.kind !== OVERVIEW_KIND && !PRIMARY.some(view => view.kind === entry.kind))
  const panels = inventory ? openedPanels(dock, sidebarRight, inventory) : []
  const moreLabel = t('更多面板', 'More panels')
  const openedLabel = t('已打开的面板', 'Open panels')
  const closeLabel = t('收起右侧面板', 'Close right panel')
  const modeLabel = fullscreen ? t('退出全屏', 'Exit full screen') : t('全屏', 'Full screen')

  return <nav className="dsh-ui-inspector-tools" aria-label={t('右侧面板视图', 'Right panel views')} data-window-drag>
    {PRIMARY.map(item => {
      const label = english ? item.en : item.zh
      const available = registry.some(type => type.kind === item.kind)
        || (item.view === 'diff' && paneTabs.some(row => inspectorView(row) === item.view))
      return <button type="button" key={item.view} className="dsh-ui-control dsh-ui-inspector-tool" data-inspector-view={item.view}
        aria-label={label} title={label} aria-pressed={active === item.view}
        disabled={!available} onClick={() => openView(item)}><Icon name={item.icon} /></button>
    })}
    <button {...popover.trigger} className="dsh-ui-control dsh-ui-inspector-tool" aria-label={moreLabel} title={moreLabel}
      data-inspector-view="more" data-active={active === 'terminal' ? '' : undefined}><Icon name="terminal" /></button>
    <div {...popover.content} className="dsh-ui-popover dsh-ui-inspector-menu" aria-label={moreLabel}>
      {extras.map(entry => <button key={`${entry.kind}:${entry.id}`} type="button" className="dsh-ui-control dsh-ui-inspector-menu-row"
        data-inspector-launcher={entry.kind} onClick={() => run(() => sidebarRight.openTabIn(sessionId, entry.kind, { paneId }))}>
        {entry.kind === 'terminal' && <Icon name="terminal" />}
        <span>{entry.title()}</span>
      </button>)}
      {webTerminals && registry.some(type => type.kind === 'terminal') && <>
        <button type="button" className="dsh-ui-control dsh-ui-inspector-menu-row" aria-expanded={chooseShell}
          data-inspector-command="choose-shell" onClick={() => setChooseShell(value => !value)}>
          <span>{t('选择 Shell', 'Choose shell')}</span><Icon name="next" />
        </button>
        {chooseShell && <div className="dsh-ui-inspector-shells">
          {shellList?.shells.map(shell => <button type="button" key={shell.path} className="dsh-ui-control dsh-ui-inspector-menu-row"
            onClick={() => run(() => {
              webTerminals.selectShell(shell.path)
              sidebarRight.openTabIn(sessionId, 'terminal', { paneId, params: { shellPath: shell.path } })
            })}><span>{shell.name}</span>{shell.path === shellList.selectedShell && <Icon name="check" />}</button>)}
          {!shellList && <p role="status">{t('正在读取 Shell…', 'Loading shells…')}</p>}
          {shellList?.shells.length === 0 && <p role="status">{shellList.failed
            ? t('无法读取 Shell。', 'Could not load shells.') : t('没有可用的 Shell。', 'No shells available.')}</p>}
        </div>}
      </>}
      {panels.length > 0 && <section className="dsh-ui-inspector-open-panels" aria-label={openedLabel}>
        <div className="dsh-ui-inspector-open-heading">{openedLabel}</div>
        {panels.map(({ id, title, canClose }) => <div key={id} className="dsh-ui-inspector-open-panel">
          <button type="button" className="dsh-ui-control dsh-ui-inspector-menu-row" data-inspector-open-tab={id}
            title={title} aria-current={id === tab?.id ? 'page' : undefined} onClick={() => run(() => sidebarRight.focus(id))}>
            <span>{title}</span>{id === tab?.id && <Icon name="check" />}
          </button>
          {canClose && <button type="button" className="dsh-ui-control dsh-ui-inspector-tool" data-inspector-close-tab={id}
            aria-label={t(`关闭 ${title}`, `Close ${title}`)} onClick={() => run(() => sidebarRight.close(id))}>
            <Icon name="close" />
          </button>}
        </div>)}
      </section>}
    </div>
    <button type="button" className="dsh-ui-control dsh-ui-inspector-tool dsh-ui-inspector-fullscreen"
      data-inspector-command="fullscreen" data-active={fullscreen ? '' : undefined} aria-label={modeLabel} title={modeLabel}
      disabled={!pane} onClick={() => {
        const selected = sidebarRight.commandTarget(pane)
        if (selected?.sessionId === sessionId) sidebarRight.toggleFullscreen(selected)
      }}><Icon name="maximize" /></button>
    <button type="button" className="dsh-ui-control dsh-ui-inspector-tool dsh-ui-inspector-close" aria-label={closeLabel} title={closeLabel}
      onClick={() => { if (sidebarRight.isExpanded()) sidebarRight.toggleExpanded() }}><Icon name="close" /></button>
  </nav>
}

export function InspectorToolbar({ locale, sidebarRight, sidebarRightTabs, getWebTerminals }) {
  const english = useLanguage(locale) === 'en'
  const sessionId = useStore(sidebarRight.mounted)
  const dock = useInspectorDock(sidebarRight, sessionId)
  return dock ? createPortal(<InspectorTools dock={dock} english={english} sidebarRight={sidebarRight}
    sidebarRightTabs={sidebarRightTabs} webTerminals={getWebTerminals()} />, dock.seat) : null
}

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { IconChecklistOutlineRegular } from '@deepseek-ai/dsh-client-ui-primitives'
import { contextComposition, contextUsage, openOverview, OVERVIEW_KIND, OVERVIEW_TAB } from './context.js'
import { diffPreview, localChangesAddress, mergeContextPages, readInspector, readWorkspaceGit, relativeFileAddress, subagentProject } from './overview-data.js'
import { LIST_MOTION } from './motion.js'
import { isListedChat } from './sidebar.js'
import { RELOCATED_SECTIONS } from './slot-compat.js'
import { Icon, useLanguage, useReducedMotion, useStore } from './ui.jsx'

const FILES_KIND = 'files'
const CHANGES_KIND = 'forge-changes'
const GUIDE_TAB = '@deepseek-ai/dsh-client-ui-sidebar-right/guide'
const ROOT_PAGE = { offset: 0, items: [], next: 0, loading: false, error: null }
const PREVIEW_ITEMS = 12
const DOCKED_PANEL = { presentation: 'docked', dismissOverlay() {} }

const panelFactory = (id, part) => `deepseek-ui.overview.${id}.${part}`

function registerSessionPanelSections(ctx, slot, key, part) {
  const { slots, sidebarRight } = ctx
  ctx.effect(() => {
    const factories = new Map()
    function sync() {
      const entries = slots.entriesOfSlot(slot)
      for (const id of RELOCATED_SECTIONS) {
        const entry = entries.find(candidate => candidate.options[key] === id)
        const previous = factories.get(id)
        if (entry === previous?.entry) continue
        previous?.dispose()
        factories.delete(id)
        if (!entry || entry.children) continue
        // Reuse the native panel component in the sidebar's session scope.
        const inject = id === 'subagents' && part === 'body'
          ? (sessionId, actions) => ({
              ...entry.inject?.(sessionId, actions),
              openChildAside({ parentSessionId, childSessionId, mode }) {
                const query = new URLSearchParams({ parent: parentSessionId, mode })
                const address = `dsh-resource://subagentchat/session/${encodeURIComponent(childSessionId)}?${query}`
                sidebarRight.openResourceIn(sessionId, address, { kind: 'subagentchat', destination: 'sidebar' })
              },
            })
          : entry.inject
        const dispose = slots.registerFactory({
          name: panelFactory(id, part), scope: 'session', store: entry.store, locale: entry.locale, inject,
        }, entry.component)
        factories.set(id, { entry, dispose })
      }
    }
    sync()
    const unsubscribe = slots.subscribe(slot, sync)
    return () => {
      unsubscribe()
      for (const { dispose } of factories.values()) dispose()
    }
  }, `deepseek-ui: sidebar session panel ${part}`)
}

function useRead(load, enabled) {
  const [state, setState] = useState({ loading: false })
  const [revision, refresh] = useState(0)
  useEffect(() => {
    if (!enabled) return
    const controller = new AbortController()
    const { signal } = controller
    setState(old => ({ value: old.value, loading: true }))
    void load(signal).then(value => {
      if (!signal.aborted) setState({ value, loading: false })
    }).catch(error => {
      if (!signal.aborted) setState({ error, loading: false })
    })
    return () => controller.abort()
  }, [load, enabled, revision])
  return { ...state, retry: () => refresh(count => count + 1) }
}

function createSectionState() {
  let snapshot = {}
  const listeners = new Set()
  return {
    getSnapshot: () => snapshot,
    subscribe(listener) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    set(section, value) {
      if (snapshot[section] === value) return
      snapshot = { ...snapshot, [section]: value }
      for (const listener of listeners) listener()
    },
  }
}

function message(english, zh, en) { return english ? en : zh }

function Row({ icon, label, tail, code, onClick }) {
  const content = <><Icon name={icon} />
    <span className="dsh-ui-overview-label" data-code={code ? '' : undefined}>{label}</span>{tail && <small>{tail}</small>}</>
  return onClick ? <button type="button" className="dsh-ui-overview-row" title={label} onClick={onClick}>{content}</button>
    : <div className="dsh-ui-overview-row" title={label}>{content}</div>
}

function WorkingDirectory({ sessionId, path, english, openFiles, useContextMenu, renderFactorySlot }) {
  const { getTriggerProps } = useContextMenu()
  const target = { kind: 'directory', value: { sessionId, path } }
  return <div className="dsh-ui-overview-directory" {...getTriggerProps(target)}>
    <Row icon="folder" label={path} code onClick={openFiles} />
    {renderFactorySlot('contextMenu.button', {
      target, label: message(english, '工作目录操作', 'Working folder actions'),
      className: 'dsh-ui-control dsh-ui-overview-directory-actions',
    })}
  </div>
}

function Collaboration({ binding, list, english, renderFactorySlot, sections }) {
  const team = useStore(binding.session.projections.faceOf('agentTeam'))
  const catalog = list?.projectionsBySession?.[binding.sessionId]
  const hasSubagents = catalog?.state === 'error' || Boolean(catalog?.values?.subagentCatalog?.length)
  const hasTasks = team?.enabled === true && (team.failure !== undefined || team.tasks?.some(task => task.status !== 'deleted'))
  const { collaboration: expanded = false, collaborationView: selected = 'subagents' } = useStore(sections)
  const multiple = hasSubagents && hasTasks
  const current = hasTasks && (!hasSubagents || selected === 'shared-tasks') ? 'shared-tasks' : 'subagents'
  const agentsLabel = message(english, '子智能体', 'Subagents')
  const tasksLabel = message(english, '协作任务', 'Shared tasks')
  const title = multiple ? message(english, '协作', 'Collaboration') : hasSubagents ? agentsLabel : tasksLabel

  if (!hasSubagents && !hasTasks) return null
  return <section className="dsh-ui-overview-section dsh-ui-overview-native dsh-ui-overview-foldable" data-overview-section="collaboration">
    <OverviewDisclosure title={title} summary={renderFactorySlot(panelFactory(current, 'actions'), {})} expanded={expanded}
      onToggle={() => {
        if (!expanded) sections.set('collaborationView', current)
        sections.set('collaboration', !expanded)
      }}>
      {multiple && <div className="dsh-ui-collaboration-views" role="group"
        aria-label={message(english, '协作视图', 'Collaboration views')}>
        <button type="button" className="dsh-ui-control" aria-pressed={current === 'subagents'}
          onClick={() => sections.set('collaborationView', 'subagents')}>{agentsLabel}</button>
        <button type="button" className="dsh-ui-control" aria-pressed={current === 'shared-tasks'}
          onClick={() => sections.set('collaborationView', 'shared-tasks')}>{tasksLabel}</button>
      </div>}
      <div className="dsh-ui-overview-native-body">
        {renderFactorySlot(panelFactory(current, 'body'), DOCKED_PANEL)}
      </div>
    </OverviewDisclosure>
  </section>
}

function BackgroundJobs({ english, renderFactorySlot, reduced }) {
  const frameRef = useRef(null)
  const sectionRef = useRef(null)
  useLayoutEffect(() => {
    if (reduced) return
    const frame = frameRef.current
    const section = sectionRef.current
    let height = section.getBoundingClientRect().height
    let motion
    // The native section stays subscribed while empty. Size changes come from
    // the roster or its own disclosures, so animate around it without moving its rows.
    const observer = new ResizeObserver(() => {
      const nextHeight = section.getBoundingClientRect().height
      if (Math.abs(height - nextHeight) < 0.5) return
      const from = motion ? frame.getBoundingClientRect().height : height
      height = nextHeight
      motion?.cancel()
      frame.dataset.resizing = ''
      const animation = frame.animate([
        { height: `${from}px` },
        { height: `${height}px` },
      ], LIST_MOTION)
      motion = animation
      animation.id = 'dsh-ui-background-jobs-resize'
      animation.onfinish = () => {
        if (motion !== animation) return
        motion = undefined
        delete frame.dataset.resizing
      }
    })
    observer.observe(section, { box: 'border-box' })
    return () => {
      observer.disconnect()
      motion?.cancel()
      delete frame.dataset.resizing
    }
  }, [reduced])

  return <div ref={frameRef} className="dsh-ui-background-jobs" data-overview-section="background-jobs">
    <section ref={sectionRef} className="dsh-ui-overview-section dsh-ui-overview-native">
      <div className="dsh-ui-overview-heading">
        <h3>{message(english, '后台任务', 'Background jobs')}</h3>
        {renderFactorySlot(panelFactory('background-jobs', 'actions'), {})}
      </div>
      <div className="dsh-ui-overview-native-body">
        {renderFactorySlot(panelFactory('background-jobs', 'body'), DOCKED_PANEL)}
      </div>
    </section>
  </div>
}

function Notice({ children, retry, english }) {
  return <p className="dsh-ui-overview-note" role="status">{children}{retry && <> · <button type="button" onClick={retry}>
    {message(english, '重试', 'Retry')}</button></>}</p>
}

function More({ action, english }) {
  return <button type="button" className="dsh-ui-overview-more" onClick={action}>{message(english, '显示更多', 'Show more')}</button>
}

function OverviewReveal({ id, expanded, children }) {
  const setInert = useCallback(element => {
    if (element) element.inert = !expanded
  }, [expanded])
  return <div ref={setInert} id={id} className="dsh-ui-overview-reveal" data-expanded={expanded ? '' : undefined}
    aria-hidden={!expanded}>
    <div className="dsh-ui-overview-reveal-content">{children}</div>
  </div>
}

function OverviewDisclosure({ title, summary, preview, expanded, onToggle, children }) {
  const id = useId()
  return <>
    <h3 className="dsh-ui-overview-disclosure-heading">
      <button type="button" className="dsh-ui-control dsh-ui-overview-toggle" aria-controls={id}
        aria-expanded={expanded} onClick={onToggle}>
        {title}{summary && <span className="dsh-ui-overview-toggle-summary">{summary}</span>}<Icon name="next" />
      </button>
    </h3>
    {preview}
    <OverviewReveal id={id} expanded={expanded}>{children}</OverviewReveal>
  </>
}

const taskStatusKeys = { completed: 'completed', in_progress: 'inProgress', pending: 'pending' }
const handledTaskRequests = new WeakSet()

function TaskCard({ tasks, running, activeSession, t, taskRequest, sections }) {
  const id = useId()
  const done = tasks.filter(item => item.status === 'completed').length
  const active = tasks.filter(item => item.status === 'in_progress').length
  const pending = tasks.length - done - active
  const complete = done === tasks.length
  const [defaultExpanded, setDefaultExpanded] = useState(!complete)
  const { tasks: expanded = defaultExpanded } = useStore(sections)
  const counts = { done, active, pending }
  const summary = Object.entries(counts).filter(([, count]) => count > 0)
    .map(([status, count]) => t(`todo.progress.${status}`, { [status]: count })).join(' · ')
  const title = t('todo.title')

  useLayoutEffect(() => {
    if (!activeSession) setDefaultExpanded(!complete)
    else if (taskRequest && !handledTaskRequests.has(taskRequest)) {
      handledTaskRequests.add(taskRequest)
      sections.set('tasks', true)
    }
  }, [activeSession, complete, taskRequest, sections])

  return <section className="dsh-ui-session-tasks" aria-label={title} data-overview-section="tasks"
    data-running={running ? '' : undefined}>
    <div className="dsh-ui-task-card">
      <h3>
        <button type="button" className="dsh-ui-control dsh-ui-task-toggle" aria-controls={id}
          aria-expanded={expanded} onClick={() => sections.set('tasks', !expanded)}>
          <IconChecklistOutlineRegular size={16} aria-hidden="true" />
          <span>{title}</span><small>{summary}</small><Icon name="next" />
        </button>
      </h3>
      <div className="dsh-ui-task-progress" role="progressbar" aria-label={title}
        aria-valuemin={0} aria-valuemax={tasks.length} aria-valuenow={done} aria-valuetext={summary}>
        <span className="dsh-ui-task-progress-fill" style={{ '--dsh-ui-task-completion': `${done / tasks.length * 100}%` }} />
      </div>
      <OverviewReveal id={id} expanded={expanded}>
        <ul className="dsh-ui-task-list" role="list">
          {tasks.map(item => <li key={item.content} className="dsh-ui-task-row" data-task-status={item.status}>
            <span className="dsh-ui-task-state" role="img" aria-label={t(`todo.status.${taskStatusKeys[item.status]}`)}>
              <span className="dsh-ui-task-dots" aria-hidden="true"><span /><span /><span /></span>
              <Icon name="check" />
            </span>
            <span>{item.content}</span>
          </li>)}
        </ul>
      </OverviewReveal>
    </div>
  </section>
}

function SessionTasks({ binding, sessionStatus, sidebarRight, t, taskRequest, sections }) {
  const tasks = useStore(binding.session.projections.faceOf('todos'))
  const running = useStore(sessionStatus)?.get(binding.sessionId)?.running
  const activeSession = useStore(sidebarRight.mounted) === binding.sessionId
  return tasks?.length
    ? <TaskCard tasks={tasks} running={running} activeSession={activeSession} t={t} taskRequest={taskRequest}
      sections={sections} /> : null
}

function TaskShortcut({ useProjection, sessionId, locale, sidebarRight }) {
  const tasks = useProjection('todos')
  const mounted = useStore(sidebarRight.mounted)
  const english = useLanguage(locale) === 'en'
  if (!tasks?.length || mounted !== sessionId) return null
  const label = message(english, '查看任务', 'Show to-dos')
  return <button type="button" className="dsh-ui-control dsh-ui-task-shortcut" aria-label={label} title={label}
    onClick={() => openOverview(sidebarRight, sessionId, { params: { section: 'tasks' } })}>
    <IconChecklistOutlineRegular size={16} aria-hidden="true" />
  </button>
}

const contextLabels = {
  system: ['系统', 'System'],
  tools: ['工具', 'Tools'],
  messages: ['消息', 'Messages'],
}

function ContextEntry({ title, usage, composition, english, current, compact, cached, onClick }) {
  const language = english ? 'en' : 'zh-CN'
  const tokens = usage && `${usage.used.toLocaleString(language)} / ${usage.limit.toLocaleString(language)} tokens`
  const percent = usage && `${usage.percent}%`
  const shares = composition.map(({ kind, share }) => `${message(english, ...contextLabels[kind])} ${share.toLocaleString(language,
    { style: 'percent', maximumFractionDigits: 1 })}`)
  const estimate = shares.length ? [message(english, '占用组成（估算）', 'Estimated composition'), ...shares].join(' · ') : null
  const reading = tokens ? `${tokens} · ${percent}` : message(english, '暂无用量', 'Usage unavailable')
  const label = [title, reading, estimate].filter(Boolean).join(' · ')
  const Tag = onClick ? 'button' : 'div'
  return <Tag type={onClick ? 'button' : undefined} className="dsh-ui-context-entry" aria-label={label}
    aria-current={current ? 'true' : undefined} data-compact={compact ? '' : undefined}
    data-empty={usage ? undefined : ''} onClick={onClick}>
    <span className="dsh-ui-context-label">
      <span className="dsh-ui-context-name" title={title}>{title}</span>
      {cached && !compact && <small title={message(english, '迁移前缓存', 'Cached before migration')}>{message(english, '缓存', 'Cached')}</small>}
      <small>{percent ?? message(english, '暂无用量', 'Usage unavailable')}</small>
    </span>
    {usage && <>
      <span data-dsh-ui-reading="meter" role="meter" aria-label={title} title={estimate ?? reading}
        aria-valuemin={0} aria-valuemax={usage.limit} aria-valuenow={Math.min(usage.used, usage.limit)}
        aria-valuetext={[reading, estimate].filter(Boolean).join(' · ')}>
        <span className="dsh-ui-context-used" style={{ width: `${usage.ratio * 100}%` }} aria-hidden="true">
          {composition.filter(({ tokens }) => tokens > 0).map(({ kind, share }) => (
            <span key={kind} data-context-part={kind} style={{ width: `${share * 100}%` }} />
          ))}
        </span>
      </span>
      <span data-dsh-ui-reading="tokens" title={tokens}>{tokens}</span>
    </>}
  </Tag>
}

function ContextBreakdown({ composition, english }) {
  if (composition.length === 0) return null
  return <dl className="dsh-ui-context-breakdown" title={message(english, '按上下文分类估算', 'Estimated by context category')}>
    {composition.map(({ kind, tokens }) => <div key={kind} data-context-part={kind}>
      <dt>{message(english, ...contextLabels[kind])}</dt><dd>{tokens.toLocaleString(english ? 'en' : 'zh-CN')}</dd>
    </div>)}
  </dl>
}

function ProjectContext({ binding, currentTitle, currentStarted, workspaceId, memberIds, list, uiWorkspace, english, sections }) {
  const pressure = useStore(binding?.session.projections.faceOf('contextPressure'))
  const breakdown = useStore(binding?.session.projections.faceOf('contextBreakdown'))
  const reduced = useReducedMotion()
  const current = useRef(null)
  const readingBefore = useRef(null)
  const motions = useRef([])
  const { context: expanded = !workspaceId } = useStore(sections)
  const [shown, setShown] = useState(3)
  const [requested, setRequested] = useState(0)
  const [retry, setRetry] = useState(0)
  const [page, setPage] = useState(ROOT_PAGE)
  const completed = useRef(new Set())
  const sessionId = binding?.sessionId
  const currentProjection = list?.projectionsBySession?.[sessionId]?.values
  const usage = contextUsage(pressure ?? currentProjection?.contextPressure)
  const composition = usage ? contextComposition(breakdown ?? currentProjection?.contextBreakdown) : []

  useEffect(() => {
    if (!expanded || !workspaceId || completed.current.has(requested)) return
    const controller = new AbortController()
    const { signal } = controller
    setPage(old => ({ ...old, loading: true, error: null }))
    const query = { workspaceId, ...(typeof requested === 'string' ? { cursor: requested } : { offset: requested }) }
    void readInspector('context', query, signal).then(result => {
      if (signal.aborted) return
      completed.current.add(requested)
      setPage(old => ({ offset: requested, next: result.nextCursor ?? result.nextOffset,
        items: requested === 0 ? result.items : mergeContextPages(old.items, result.items),
        loading: false, error: null }))
    }).catch(error => {
      if (signal.aborted) return
      if (error.code === 'workspace-cursor-changed') {
        completed.current.clear()
        setRequested(0)
      } else setPage(old => ({ ...old, loading: false, error }))
    })
    return () => controller.abort()
  }, [expanded, workspaceId, requested, retry])

  function toggle() {
    readingBefore.current = reduced ? null : new Map([...current.current.querySelectorAll('[data-dsh-ui-reading]')]
      .map(element => [element, element.getBoundingClientRect()]))
    sections.set('context', !expanded)
  }

  useLayoutEffect(() => {
    const measured = readingBefore.current
    readingBefore.current = null
    for (const motion of motions.current) motion.cancel()
    motions.current = []
    if (!measured || reduced) return
    for (const [element, old] of measured) {
      if (!element.isConnected) continue
      const next = element.getBoundingClientRect()
      const scaleX = next.width ? old.width / next.width : 1
      const transform = `translate(${old.left - next.left}px, ${old.top - next.top}px) scaleX(${scaleX})`
      const motion = element.animate([{ transform }, { transform: 'none' }], LIST_MOTION)
      motion.id = 'context-reading-shift'
      motions.current.push(motion)
    }
    return () => { for (const motion of motions.current) motion.cancel() }
  }, [expanded, reduced])

  const members = new Set(memberIds)
  members.delete(sessionId)
  const others = page.items.filter(item => members.has(item.sessionId))
  const morePages = page.next !== null && page.next !== page.offset && others.length < members.size
  function showMore() {
    setShown(count => count + PREVIEW_ITEMS)
    if (morePages && shown + PREVIEW_ITEMS > others.length) setRequested(page.next)
  }
  const showProject = Boolean(workspaceId && expanded)
  const title = message(english, '上下文窗口', 'Context window')
  const preview = <div ref={current}>
    {currentStarted && <ContextEntry title={currentTitle} usage={usage} composition={composition}
      english={english} current compact={!showProject} />}
  </div>

  return <section className="dsh-ui-overview-section dsh-ui-overview-foldable dsh-ui-project-context"
    aria-label={title} data-overview-section="context">
    <OverviewDisclosure title={title} preview={preview} expanded={expanded} onToggle={toggle}>
      {currentStarted && <ContextBreakdown composition={composition} english={english} />}
      {workspaceId ? <>
        {others.slice(0, shown).map(item => {
          const id = item.sessionId
          const name = list?.byId[id]?.title?.trim() || message(english, '未命名会话', 'Untitled session')
          const live = list?.projectionsBySession?.[id]?.values
          const usage = contextUsage(live?.contextPressure ?? item.contextPressure)
          return <ContextEntry key={id} title={name} usage={usage} english={english}
            composition={usage ? contextComposition(live?.contextBreakdown ?? item.contextBreakdown) : []}
            cached={!live?.contextPressure && item.status === 'migration-required'} onClick={() => uiWorkspace.openSession(id)} />
        })}
        {page.loading && <Notice>{message(english, '正在读取项目会话…', 'Reading project sessions…')}</Notice>}
        {page.error && <Notice english={english} retry={() => setRetry(value => value + 1)}>
          {message(english, '项目会话用量读取失败', 'Could not read project usage')}</Notice>}
        {!page.loading && !page.error && others.length === 0 && (page.next === null || members.size === 0) && <Notice>
          {message(english, '此项目暂无其他会话。', 'No other sessions in this project.')}</Notice>}
        {!page.loading && !page.error && (others.length > shown || morePages) &&
          <More english={english} action={showMore} />}
      </> : composition.length === 0 && <Notice>
        {message(english, '暂无上下文用量明细。', 'No context usage breakdown yet.')}</Notice>}
    </OverviewDisclosure>
  </section>
}

function FileFolder({ label, path, ...props }) {
  const [expanded, setExpanded] = useState(false)
  const [visited, setVisited] = useState(false)
  return <details className="dsh-ui-overview-disclosure" onToggle={event => {
    const open = event.currentTarget.open
    setExpanded(open)
    if (open) setVisited(true)
  }}>
    <summary className="dsh-ui-overview-row" title={path}><Icon name="folder" />
      <span className="dsh-ui-overview-label" data-code="">{label}</span><Icon name="next" /></summary>
    {visited && <DirectoryEntries path={path} {...props} visible={expanded && props.visible} />}
  </details>
}

function DirectoryEntries({ sessionId, path, remote, english, visible, openFile }) {
  const load = useCallback(async signal => {
    const result = await remote.workspaceFiles.list(sessionId, path, signal)
    if (!result.ok) throw new Error(result.error.message)
    return result.value
  }, [remote, sessionId, path])
  const state = useRead(load, visible)
  const [shown, setShown] = useState(PREVIEW_ITEMS)

  if (state.error) return <Notice english={english} retry={state.retry}>{message(english, '文件列表读取失败', 'Could not list files')}</Notice>
  if (!state.value) return <Notice>{message(english, '正在读取文件…', 'Reading files…')}</Notice>
  const { path: directory, truncated } = state.value
  const entries = directory ? state.value.entries : state.value.entries.filter(entry => entry.name !== '.git')
  return <div className={directory ? 'dsh-ui-overview-nested' : undefined}>
    {entries.length === 0 && <Notice>{message(english, '此目录没有文件。', 'This directory is empty.')}</Notice>}
    {entries.slice(0, shown).map(entry => {
      const relative = directory ? `${directory}/${entry.name}` : entry.name
      return entry.type === 'directory'
        ? <FileFolder key={entry.name} label={entry.name} path={relative} sessionId={sessionId} remote={remote}
          english={english} visible={visible} openFile={openFile} />
        : <Row key={entry.name} icon="file" label={entry.name} code onClick={() => openFile(relative, entry.type)} />
    })}
    {entries.length > shown && <More english={english} action={() => setShown(count => count + PREVIEW_ITEMS)} />}
    {truncated && <Notice>{message(english, '已达到 Host 的目录读取上限。', 'The Host directory limit was reached.')}</Notice>}
  </div>
}

function DiffFile({ file, english, openChanges }) {
  const [visited, setVisited] = useState(false)
  const preview = visited ? diffPreview(file.hunks) : null
  return <details className="dsh-ui-overview-disclosure" onToggle={event => { if (event.currentTarget.open) setVisited(true) }}>
    <summary className="dsh-ui-overview-row" title={file.previousPath ? `${file.previousPath} → ${file.path}` : file.path}>
      <Icon name="file" /><span className="dsh-ui-overview-label" data-code="">{file.path}</span>
      <small className="dsh-ui-diff-tally"><span data-kind="add">+{file.additions}</span> <span data-kind="remove">−{file.deletions}</span></small>
      <Icon name="next" />
    </summary>
    {preview && <div className="dsh-ui-overview-nested">
      {file.previousPath && <Notice>{file.previousPath} → {file.path}</Notice>}
      {preview.rows.length > 0 ? <pre className="dsh-ui-overview-patch">
        {preview.rows.map(({ text, kind }, index) => <span key={index} data-kind={kind}>{text}{'\n'}</span>)}
      </pre> : <Notice>{file.binary ? message(english, '二进制文件', 'Binary file')
        : file.oversized ? message(english, '文件超过 Diff 读取上限', 'File diff exceeds the size limit')
          : message(english, '此改动没有文本差异。', 'This change has no text diff.')}</Notice>}
      {preview.omitted > 0 && <Notice>{message(english, `还有 ${preview.omitted} 行`, `${preview.omitted} more rows`)}
        {openChanges && <> · <button type="button" onClick={openChanges}>{message(english, '在改动中查看', 'Open Changes')}</button></>}
      </Notice>}
    </div>}
  </details>
}

function Changes({ state, english, openChanges }) {
  const [shown, setShown] = useState(PREVIEW_ITEMS)
  if (state.error?.code === 'diff-too-large') return <Notice>{message(english, '未提交改动超过 Forge 的读取上限。', 'Uncommitted changes exceed the Forge limit.')}</Notice>
  if (state.error) return <Notice english={english} retry={state.retry}>{message(english, '未提交改动读取失败', 'Could not read uncommitted changes')}</Notice>
  if (!state.value?.diff) return <Notice>{message(english, '正在读取未提交改动…', 'Reading uncommitted changes…')}</Notice>
  const { files, omitted } = state.value.diff
  return <>
    {files.length === 0 && <Notice>{message(english, '工作树干净。', 'Working tree is clean.')}</Notice>}
    {files.slice(0, shown).map(file => <DiffFile key={file.path} file={file} english={english} openChanges={openChanges} />)}
    {files.length > shown && <More english={english} action={() => setShown(count => count + PREVIEW_ITEMS)} />}
    {omitted > 0 && <Notice>{message(english, `另有 ${omitted} 个未跟踪文件超出 Forge 显示上限。`, `${omitted} untracked files exceed the Forge limit.`)}</Notice>}
  </>
}

function OverviewBody({ binding, workspace, cwd, list, workspaceState, uiWorkspace, sidebarRight, sidebarRightTabs, remote,
  english, visible, sessionStatus, t, taskRequest, useContextMenu, renderFactorySlot, getForge, sections }) {
  const sessionId = binding.sessionId
  const workspaceId = workspace?.workspaceId
  const archived = new Set(workspaceState?.archivedSessionIds)
  const memberIds = workspace?.sessionIds.filter(id => !archived.has(id)) ?? []
  const chatIds = memberIds.filter(id => isListedChat(list?.byId[id]))
  const session = useStore(binding.session)
  const summary = list?.byId[sessionId]
  const child = session?.subagent != null || summary?.origin === 'subagent'
  const parentId = session?.subagent?.address?.parentSessionId ?? summary?.parentId
  const parentProject = child && !workspace ? subagentProject(workspaceState?.items, list?.byId, sessionId, parentId) : undefined
  const workingDirectory = useStore(binding.session.projections.faceOf('workingDirectory')) ?? cwd
  const currentStarted = session?.blank === false || isListedChat(summary)
  const scroll = useRef(null)
  const changes = useRef(null)
  const { environment: environmentOpen = true, files: filesOpen = false, changes: diffOpen = false } = useStore(sections)
  const reduced = useReducedMotion()
  const readBranch = useCallback(signal => readWorkspaceGit(getForge(), { workspaceId, sessionId }, signal),
    [getForge, workspaceId, sessionId])
  const readDiff = useCallback(signal => readWorkspaceGit(getForge(), { workspaceId, sessionId, diff: 1 }, signal),
    [getForge, workspaceId, sessionId])
  const branch = useRead(readBranch, visible && Boolean(workspaceId))
  const hasCheckout = branch.value?.status === 'ready'
  const diff = useRead(readDiff, visible && diffOpen && hasCheckout)
  const hasChanges = hasCheckout && diff.value?.status !== 'no-checkout'
  const currentTitle = summary?.title?.trim() || message(english, '当前会话', 'Current session')
  const projectTitle = workspace?.title || (parentProject?.title
    ? message(english, `主会话项目 · ${parentProject.title}`, `Parent session project · ${parentProject.title}`)
    : message(english, '未关联项目', 'No project'))
  const openFiles = () => sidebarRight.openTabIn(sessionId, FILES_KIND)
  const openChanges = sidebarRightTabs.get(CHANGES_KIND)
    ? () => sidebarRight.openResourceIn(sessionId, localChangesAddress(sessionId)) : undefined

  useLayoutEffect(() => {
    if (visible && taskRequest !== undefined) scroll.current?.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }, [visible, taskRequest, reduced])

  function openFile(path, type) {
    const address = relativeFileAddress(sessionId, path)
    if (type === 'file' && sidebarRightTabs.candidates(address).length > 0) sidebarRight.openResourceIn(sessionId, address)
    else openFiles()
  }

  function showChanges() {
    if (diffOpen) diff.retry()
    sections.set('changes', true)
    requestAnimationFrame(() => {
      const pane = scroll.current
      const target = changes.current
      if (!pane || !target) return
      const top = pane.scrollTop + target.getBoundingClientRect().top - pane.getBoundingClientRect().top - 5
      pane.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' })
      target.querySelector('button')?.focus({ preventScroll: true })
    })
  }

  const desktop = document.documentElement.dataset.platform
  const platform = { darwin: 'macOS', win32: 'Windows', linux: 'Linux' }[desktop]
  const local = location.protocol === 'dsh-app:' || ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname)
  const hostLabel = local ? message(english, '本机', 'Local machine') : message(english, '远程 Host', 'Remote host')

  return <div ref={scroll} className="dsh-ui-overview" data-dsh-ui-overview="">
    <header className="dsh-ui-inspector-heading"><h2>{child
      ? message(english, '子智能体详情', 'Subagent details')
      : message(english, '会话详情', 'Chat details')}</h2></header>
    <SessionTasks binding={binding} sessionStatus={sessionStatus} sidebarRight={sidebarRight} t={t} taskRequest={taskRequest}
      sections={sections} />
    <section className="dsh-ui-overview-section dsh-ui-overview-foldable" data-overview-section="environment">
      <OverviewDisclosure title={message(english, '环境', 'Environment')}
        expanded={environmentOpen} onToggle={() => sections.set('environment', !environmentOpen)}>
        <Row icon="computer" label={platform && local ? `${hostLabel} · ${platform}` : hostLabel} />
        <Row icon="layers" label={projectTitle} />
        {workingDirectory && <WorkingDirectory sessionId={sessionId} path={workingDirectory} english={english}
          openFiles={openFiles} useContextMenu={useContextMenu} renderFactorySlot={renderFactorySlot} />}
        {hasChanges && branch.value.current !== undefined && <Row icon="branch" code
          label={branch.value.current ?? message(english, '分离的 HEAD', 'Detached HEAD')}
          tail={message(english, '未提交改动', 'Uncommitted')} onClick={showChanges} />}
      </OverviewDisclosure>
    </section>
    {visible && <Collaboration binding={binding} list={list} english={english}
      renderFactorySlot={renderFactorySlot} sections={sections} />}
    {!archived.has(sessionId) && (currentStarted || workspaceId) &&
      <ProjectContext key={JSON.stringify([workspaceId, memberIds, chatIds])} binding={binding}
      currentTitle={currentTitle} currentStarted={currentStarted} workspaceId={workspaceId} memberIds={chatIds} list={list}
      uiWorkspace={uiWorkspace} english={english} sections={sections} />}
    {visible && <BackgroundJobs english={english} renderFactorySlot={renderFactorySlot} reduced={reduced} />}
    <section className="dsh-ui-overview-section dsh-ui-overview-foldable" data-overview-section="files">
      <OverviewDisclosure title={message(english, '工作区文件', 'Workspace files')}
        expanded={filesOpen} onToggle={() => sections.set('files', !filesOpen)}>
        {workingDirectory ? <DirectoryEntries sessionId={sessionId} path="." remote={remote} english={english}
          visible={visible && filesOpen} openFile={openFile} />
          : <Notice>{message(english, '此会话暂无可以读取的工作区。', 'No workspace directory is available.')}</Notice>}
      </OverviewDisclosure>
    </section>
    {hasChanges && <section ref={changes}
      className="dsh-ui-overview-section dsh-ui-overview-foldable" data-overview-section="changes">
      <OverviewDisclosure title={message(english, '未提交改动', 'Uncommitted changes')}
        expanded={diffOpen} onToggle={() => sections.set('changes', !diffOpen)}>
        <Changes state={diff} english={english} openChanges={openChanges} />
      </OverviewDisclosure>
    </section>}
  </div>
}

function OverviewTab({ sessionId, locale, workspaces, sessions, uiWorkspace, sidebarRight, sidebarRightTabs, remote,
  sessionStatus, useTabInfo, useContextMenu, renderFactorySlot, getForge, sections }) {
  const english = useLanguage(locale) === 'en'
  const workspaceState = useStore(workspaces.list)
  const list = useStore(sessions.list)
  const { tab } = useTabInfo()
  const workspace = workspaceState?.items.find(item => item.sessionIds.includes(sessionId))
  const binding = sessions.binding(sessionId)
  const cwd = list?.byId[sessionId]?.cwd || workspace?.path
  const taskRequest = tab.navigation?.params?.section === 'tasks' ? tab.navigation : undefined
  if (!binding) return <Notice>{message(english, '会话信息正在加载…', 'Loading the session…')}</Notice>
  return <OverviewBody key={JSON.stringify([sessionId, workspace?.workspaceId, cwd])} binding={binding}
    workspace={workspace} workspaceState={workspaceState} list={list} cwd={cwd} visible={tab.visible}
    uiWorkspace={uiWorkspace} sidebarRight={sidebarRight} sidebarRightTabs={sidebarRightTabs} remote={remote}
    english={english} sessionStatus={sessionStatus} t={locale.bind('conversation')} taskRequest={taskRequest}
    useContextMenu={useContextMenu} renderFactorySlot={renderFactorySlot} getForge={getForge} sections={sections} />
}

export function registerOverview(ctx) {
  const { locale, slots, workspaces, sessions, uiWorkspace, sidebarRight, sidebarRightTabs, remote } = ctx
  const title = () => message(!locale.getSnapshot().active.startsWith('zh'), '会话详情', 'Chat details')
  const getForge = () => ctx.get('remote.forgePanel')
  const sectionStates = new Map()
  const injectOverview = sessionId => {
    if (!sectionStates.has(sessionId)) sectionStates.set(sessionId, createSectionState())
    return { sessionId, locale, workspaces, sessions, uiWorkspace, sidebarRight,
      sidebarRightTabs, remote, getForge, sessionStatus: ctx.uiSession.sessionStatus, sections: sectionStates.get(sessionId) }
  }
  registerSessionPanelSections(ctx, 'conversation.session.panel.section', 'id', 'body')
  registerSessionPanelSections(ctx, 'conversation.session.panel.section.actions', 'key', 'actions')
  ctx.effect(() => sidebarRightTabs.register({
    id: OVERVIEW_TAB, kind: OVERVIEW_KIND, title,
    guide: [{ id: 'deepseek-overview', order: 15, title,
      description: () => message(!locale.getSnapshot().active.startsWith('zh'), '环境、上下文窗口和工作区改动', 'Environment, context window and workspace changes'),
      icon: () => <Icon name="layers" /> }],
  }), 'deepseek-ui: overview tab')
  slots.inject('sidebar.right.pane.tab', () => slots.register({
    name: 'sidebar.right.pane.tab', key: OVERVIEW_TAB,
    inject: injectOverview,
  }, OverviewTab))
  slots.inject('sidebar.right.tab.guide', () => slots.register({
    name: 'sidebar.right.tab.guide', id: 'deepseek-ui.inspector', priority: -10,
    select: () => ({}), inject: injectOverview,
  }, OverviewTab))
  slots.inject('sidebar.right.pane.tab.title', () => slots.register({
    name: 'sidebar.right.pane.tab.title', key: GUIDE_TAB, priority: -10,
  }, () => <><Icon name="overview" /><span>{title()}</span></>))
  slots.inject('conversation.session.header.utilities', () => slots.register({
    name: 'conversation.session.header.utilities', id: 'deepseek-ui.task-shortcut',
    inject: sessionId => ({ sessionId, locale, sidebarRight }),
  }, TaskShortcut))
}

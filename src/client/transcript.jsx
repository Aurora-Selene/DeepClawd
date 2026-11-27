import { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { canGroupTool, describeTools, isToolActive, liveAnswerStep, summarizeToolOutput,
  THINKING_PERIOD, THINKING_SHAPES, thinkingWord, toolDescription, toolLabel, turnActivity, workBatches } from './transcript.js'
import { Icon, useLanguage, useReducedMotion, useSlotVersion, useStore } from './ui.jsx'

const FLOW = '[data-slot="conversation.chat.flow"]'
const RUNNING = '[data-chat-running]:not([data-holding])'
const TOOL = '[data-chat-flow-kind="tool-call"]'
const REASONING = '[data-chat-group-part="reasoning"], [data-chat-flow-kind="reasoning"]'
const NATIVE_PROCESS = 'data-dsh-ui-replaced-process'
const REPLACED_GROUP = 'data-dsh-ui-replaced-group'
const DETAIL_LABEL = 'data-dsh-ui-detail-label'
const NOTE = 'data-dsh-ui-note'
const AUTO_CONTEXT = 'data-dsh-ui-automatic-context'
const TOOL_SLOTS = ['tool.call.toolview', 'conversation.chat.node']
const EMPTY = []
const AUTOMATIC_CONTEXT = new Set(['runtime-context', 'skill-catalog', 'time-context'])
const EXPOSED_END_REASONS = new Set(['aborted', 'interrupted', 'error'])

const labels = {
  pending: ['思考中…', 'Thinking…'],
  thinking: ['正在推理…', 'Reasoning…'],
  tools: ['调用工具中…', 'Running tools…'],
  retry: ['等待重试…', 'Waiting to retry…'],
  waiting: ['等待输入…', 'Waiting for input…'],
}

function ThinkingCue({ phase, language }) {
  const reduced = useReducedMotion()
  const label = labels[phase][language === 'en' ? 1 : 0]
  const [cue, setCue] = useState(() => ({ tick: 0, word: thinkingWord(language) }))

  useEffect(() => {
    if (reduced) return
    const timer = setInterval(() => setCue(previous => ({ tick: previous.tick + 1,
      word: thinkingWord(language, previous.word), previous: previous.word })), THINKING_PERIOD)
    return () => clearInterval(timer)
  }, [language, reduced])

  const holdLabel = reduced || phase === 'waiting'
  const dots = THINKING_SHAPES[reduced ? 1 : cue.tick % THINKING_SHAPES.length]
  return <div className="dsh-ui-thinking" data-phase={phase}>
    <span className="dsh-ui-sr-only" role="status">{label}</span>
    <span className="dsh-ui-thinking-dots" aria-hidden="true">
      {dots.map(([x, y, sx = 1, sy = sx, rotate = 0, opacity = 1], index) => <span
        key={index} style={{ transform: `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${sx}, ${sy})`, opacity }} />)}
    </span>
    <span className="dsh-ui-thinking-words" aria-hidden="true">
      {!holdLabel && cue.previous && <span key={`out-${cue.tick}`} data-word-exit="">{cue.previous}</span>}
      <span key={holdLabel ? 'status' : cue.tick} data-word-enter={!holdLabel && cue.tick > 0 ? '' : undefined}>
        {holdLabel ? label : cue.word}
      </span>
    </span>
  </div>
}

function TurnCue({ turn, binding, sessionStatus, language, activeTools, activeRetry }) {
  const status = useStore(sessionStatus)?.get(binding.sessionId)
  const { eventSource } = binding
  const subscribe = useCallback(listener => eventSource.subscribe(listener), [eventSource])
  const snapshot = useCallback(() => turnActivity(eventSource.getSnapshot().entries), [eventSource])
  const [activeTurn, phase] = useSyncExternalStore(subscribe, snapshot).split(':')
  if (String(turn) !== activeTurn || (!status?.running && !status?.pendingInteraction)) return null
  const shownPhase = status.pendingInteraction ? 'waiting' : phase
  if ((shownPhase === 'tools' && activeTools) || (shownPhase === 'retry' && activeRetry)) return null
  if (!labels[shownPhase]) return null
  return <ThinkingCue key={language} phase={shownPhase} language={language} />
}

function ToolSignal({ category, active = true }) {
  return <span className="dsh-ui-tool-signal" data-category={category} data-active={active ? '' : undefined} aria-hidden="true">
    <span /><span /><span />
  </span>
}

const toolIcons = {
  search: 'M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm4.7 11.2L21 21',
  command: 'm4 6 6 6-6 6m9 0h7',
  diff: 'M12 3v18M4 8h5M6.5 5.5v5M15 16h5',
  review: 'M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm3 5h8m-8 4h8m-8 4h5',
  tool: 'M5 7h14v13H5Zm4 0V4h6v3m-10 6h14',
}

function ToolIcon({ category }) {
  if (category === 'read' || category === 'write') return <Icon name={category === 'read' ? 'file' : 'pencil'} />
  return <svg className="dsh-ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={toolIcons[category]} />
  </svg>
}

const toolStates = {
  running: ['运行中', 'Running'],
  preparing: ['运行中', 'Running'],
  done: ['完成', 'Done'],
  stopped: ['已停止处理', 'Stopped'],
  error: ['失败', 'Failed'],
}

function ToolItem({ row, language, openFile, inspectCall }) {
  const { root, name, category, state, files, target, output, depth } = row
  const english = language === 'en'
  const [open, setOpen] = useState(false)
  const id = useId()
  const active = isToolActive(row)
  const title = toolDescription(root) || (category === 'tool' && name) || toolLabel(category, language)
  const detailLabel = english ? 'Tool details' : '工具详情'
  const stateLabel = toolStates[state][english ? 1 : 0]
  const summary = summarizeToolOutput(row, language)
  const args = open ? root.call?.argsRaw ?? root.argsRaw : undefined
  const offset = name === 'read' || name === 'read_file' ? root.args?.value('offset') : undefined
  const line = Number.isSafeInteger(offset) && offset > 0 ? offset : undefined

  return <div className="dsh-ui-tool-item" data-category={category} data-state={state} data-nested={depth ? '' : undefined}>
    <div className="dsh-ui-tool-heading">
      <ToolIcon category={category} />
      <div className="dsh-ui-tool-title">
        <span className="dsh-ui-tool-name" title={title}>{title}</span>
        <div className="dsh-ui-tool-targets">
          {files.map(path => <button key={path} type="button" className="dsh-ui-tool-target" title={path}
            onClick={() => openFile(path, line === undefined ? undefined : { line })}><code>{path}</code><Icon name="next" /></button>)}
          <button type="button" className="dsh-ui-tool-target" title={target || detailLabel}
            aria-expanded={open} aria-controls={open ? id : undefined}
            onClick={() => setOpen(value => !value)}>
            <code>{files.length ? detailLabel : target || name || detailLabel}</code><Icon name="next" />
          </button>
        </div>
      </div>
      <span className="dsh-ui-tool-mark" aria-hidden="true">
        {active ? <ToolSignal category={category} /> : state === 'done' && <Icon name="check" />}
      </span>
      <span className="dsh-ui-tool-state">{stateLabel}</span>
    </div>
    {summary && !open && <div className="dsh-ui-tool-output">{summary}</div>}
    {open && <div id={id} className="dsh-ui-tool-detail">
      {args && <pre>{args}</pre>}
      {output && <pre>{output}</pre>}
      {inspectCall && <button type="button" className="dsh-ui-tool-target" onClick={() => inspectCall(root.callId)}>
        {english ? 'Open call in trajectory' : '在轨迹中查看调用'}<Icon name="next" />
      </button>}
    </div>}
  </div>
}

function ToolGroup({ rows, language, label, openFile, inspectCall, showToolDetail, expanded }) {
  const [visited, setVisited] = useState(false)
  const active = rows.findLast(isToolActive)
  const title = describeTools(rows, language)
  const currentTool = showToolDetail && active && (toolDescription(active.root) || active.target || active.name)
  const status = active && toolStates[active.state][language === 'en' ? 1 : 0]
  const hint = [title, status, currentTool].filter(Boolean).join(' · ')
  return <details className="dsh-ui-tool-group" open={expanded || undefined}
    onToggle={event => { if (event.currentTarget.open) setVisited(true) }}>
    <summary className="dsh-ui-tool-summary" title={hint}>
      <ToolSignal category={active?.category ?? rows.at(-1)?.category} active={Boolean(active)} />
      <span className="dsh-ui-tool-summary-text">{label}</span>
      {status && <span className="dsh-ui-sr-only">{status}</span>}
      {currentTool && <span key={active.root.callId} className="dsh-ui-tool-live-detail">
        <span aria-hidden="true">· </span>{currentTool}
      </span>}
      <Icon name="next" />
    </summary>
    <div className="dsh-ui-tools">
      {(visited || expanded) && rows.map(row => <ToolItem key={row.root.callId} row={row} language={language}
        openFile={openFile} inspectCall={inspectCall} />)}
    </div>
  </details>
}

function Reasoning({ texts, english, expanded }) {
  const [visited, setVisited] = useState(false)
  return <details className="dsh-ui-reasoning" open={expanded || undefined}
    onToggle={event => { if (event.currentTarget.open) setVisited(true) }}>
    <summary className="dsh-ui-reasoning-summary">
      <span>{english ? 'Reasoning' : '思考过程'}</span><Icon name="next" />
    </summary>
    <div className="dsh-ui-reasoning-log">
      {(visited || expanded) && texts.map((text, index) => <div key={index}>{text}</div>)}
    </div>
  </details>
}

function NativeProcessDetails({ header, content, label, open }) {
  const toggle = useRef(null)
  useLayoutEffect(() => {
    if (open) return
    if (content.contains(document.activeElement)) toggle.current?.focus({ preventScroll: true })
    const reveal = () => header.click()
    // The native group body is flat in Detailed mode. Hide its inner content
    // so find-in-page can still reveal it, without moving the original cards.
    content.setAttribute('hidden', 'until-found')
    content.addEventListener('beforematch', reveal)
    return () => {
      content.removeEventListener('beforematch', reveal)
      content.removeAttribute('hidden')
    }
  }, [header, content, open])
  return <button ref={toggle} type="button" className="dsh-ui-process-toggle" aria-expanded={open}
    aria-controls={header.getAttribute('aria-controls')} onClick={() => header.click()}>
    {label}<Icon name="next" />
  </button>
}

function processHost(turn) {
  const element = document.createElement('div')
  element.className = 'dsh-ui-turn-process'
  element.dataset.chatTurn = String(turn)
  element.dataset.dshUiProcessHost = ''
  return element
}

// Stay within the native group so its fold timing, focus protection and scroll motion also own our batches.
function useTurnPlacement(anchor, turn, answerKey, current, nodes, groupable, english, keepNativeOpen) {
  const [hosts] = useState(() => new Map())
  const [cueHost] = useState(() => processHost(turn))
  const [sections, setSections] = useState(EMPTY)
  const [running, setRunning] = useState(null)
  const [otherProcess, setOtherProcess] = useState(false)
  useLayoutEffect(() => () => {
    for (const section of hosts.values()) section.target.remove()
    hosts.clear()
    cueHost.remove()
  }, [hosts, cueHost])
  useLayoutEffect(() => {
    const flow = anchor?.closest(FLOW) ?? anchor?.closest('[data-chat-flow]')
    if (!flow) return
    const turnId = String(turn)
    const marked = new Set()
    const replacedGroups = new Set()
    const automatic = new Set()
    const adapted = new Map()
    const notes = new Set()
    const reasoningLabel = english ? 'Reasoning' : '思考过程'
    const otherLabel = english ? 'Other details' : '其他详情'
    const sameTurn = row => row?.getAttribute('data-chat-turn') === turnId
    const isHost = row => row.hasAttribute('data-dsh-ui-process-host')

    function place() {
      const rows = [...flow.children].filter(row => sameTurn(row) && !isHost(row))
      const live = current ? flow.querySelector(`:scope > ${RUNNING}`) : null
      const placements = []
      const activeKeys = new Set()
      const hide = new Set()
      const replaced = new Set()
      const autoContext = new Set()
      const details = new Map()
      const transitional = new Set()
      let other = false
      for (const row of rows) {
        if (row.matches('[data-chat-flow-kind="assistant-step"]:not([data-chat-group-part="reasoning"])')
          && row.dataset.chatNodeKey !== answerKey) transitional.add(row)
        const group = row.hasAttribute('data-step-process')
        const content = group && row.querySelector(':scope > [data-step-process-body] > [data-step-process-content]')
        const members = content ? [...content.children].filter(member => member.hasAttribute('data-chat-flow-kind')) : [row]
        const key = row.dataset.chatFlowKey ?? row.dataset.chatNodeKey
        const work = []
        for (const member of members) {
          const nodeKey = member.dataset.chatNodeKey
          const data = nodes?.get(nodeKey)?.data
          if (key && ((member.matches(TOOL) && groupable.has(data?.root?.callId)) || (member.matches(REASONING) && data?.blocks))) {
            work.push(nodeKey)
            hide.add(member)
          } else if (member.dataset.chatFlowKind === 'context' && AUTOMATIC_CONTEXT.has(data?.producer?.label)) {
            hide.add(member)
            autoContext.add(member)
          }
        }
        const nativeMembers = members.filter(member => !hide.has(member))
        let header, nativeContent, label, nativeOpen
        if (content && members.length && !nativeMembers.length) {
          if (work.length) replaced.add(row)
          else autoContext.add(row)
        } else if (content && nativeMembers.length) {
          other = true
          header = row.querySelector(':scope > div > button[data-process-activity]')
          if (header) {
            label = nativeMembers.every(member => member.matches(REASONING)) ? reasoningLabel : otherLabel
            details.set(header, label)
            if (!keepNativeOpen && row.hasAttribute('data-group-expanded-mode')) {
              nativeContent = content
              nativeOpen = header.getAttribute('aria-expanded') === 'true'
            }
          }
        } else {
          other ||= nativeMembers.some(member => member.hasAttribute('data-turn-process-member'))
        }
        if (!key || (!work.length && !nativeContent)) continue
        let section = hosts.get(key)
        if (!section || work.length !== section.members.length || work.some((id, index) => id !== section.members[index])
            || nativeContent !== section.nativeContent || header !== section.header
            || label !== section.label || nativeOpen !== section.nativeOpen) {
          section = { key, members: work, target: section?.target ?? processHost(turn),
            header, nativeContent, label, nativeOpen }
          hosts.set(key, section)
        }
        if (section.target.parentElement !== row) row.prepend(section.target)
        activeKeys.add(key)
        placements.push(section)
      }
      for (const [key, section] of hosts) {
        if (activeKeys.has(key)) continue
        section.target.remove()
        hosts.delete(key)
      }
      if (current && !live) {
        const answer = rows.find(row => row.dataset.chatNodeKey === answerKey && answerKey !== undefined)
        const tail = rows.find(row => row.dataset.chatFlowKind === 'turn-tail')
        const next = answer ?? tail ?? rows.at(-1)?.nextElementSibling ?? null
        if (next !== cueHost && (cueHost.parentElement !== flow || cueHost.nextElementSibling !== next)) {
          flow.insertBefore(cueHost, next)
        }
      } else {
        cueHost.remove()
      }
      for (const [previous, next, attribute, value = ''] of [
        [marked, hide, NATIVE_PROCESS], [replacedGroups, replaced, REPLACED_GROUP],
        [automatic, autoContext, AUTO_CONTEXT], [notes, transitional, NOTE],
      ]) {
        for (const row of previous) if (!next.has(row)) {
          row.removeAttribute(attribute)
          previous.delete(row)
        }
        for (const row of next) if (!previous.has(row)) {
          row.setAttribute(attribute, value)
          previous.add(row)
        }
      }
      for (const [header, original] of adapted) if (!details.has(header)) {
        restoreTitle(header, original)
        adapted.delete(header)
      }
      for (const [header, label] of details) {
        if (!adapted.has(header)) adapted.set(header, header.getAttribute('aria-label'))
        if (header.getAttribute(DETAIL_LABEL) !== label) {
          header.setAttribute(DETAIL_LABEL, label)
          header.setAttribute('aria-label', label)
        }
      }
      setSections(previous => previous.length === placements.length && previous.every((part, index) => part === placements[index])
        ? previous : placements)
      setRunning(live)
      setOtherProcess(other)
    }

    function restoreTitle(header, original) {
      if (header.getAttribute('aria-label') === header.getAttribute(DETAIL_LABEL)) {
        if (original === null) header.removeAttribute('aria-label')
        else header.setAttribute('aria-label', original)
      }
      header.removeAttribute(DETAIL_LABEL)
    }

    const observer = new MutationObserver(records => {
      if (records.some(({ target, attributeName, addedNodes, removedNodes }) => {
        if (attributeName === 'data-holding') return current && target.parentElement === flow
        if (attributeName === 'aria-expanded' && !target.matches('button[data-process-activity]')) return false
        const group = target.closest('[data-step-process]')
        if (attributeName) return sameTurn(target) || sameTurn(group)
        const changed = [...addedNodes, ...removedNodes].filter(node => node instanceof HTMLElement && !isHost(node))
        if (target === flow) return changed.some(node => sameTurn(node) || (current && node.hasAttribute('data-chat-running')))
        return changed.length > 0 && sameTurn(group)
          && (target === group || target.parentElement === group || target.matches('[data-step-process-content]'))
      })) place()
    })
    observer.observe(flow, { childList: true, subtree: true, attributes: true,
      attributeFilter: ['data-holding', 'data-turn-process-member', 'data-chat-group-part', 'data-group-expanded-mode', 'aria-expanded'] })
    place()
    return () => {
      observer.disconnect()
      for (const row of marked) row.removeAttribute(NATIVE_PROCESS)
      for (const row of replacedGroups) row.removeAttribute(REPLACED_GROUP)
      for (const row of automatic) row.removeAttribute(AUTO_CONTEXT)
      for (const [header, original] of adapted) restoreTitle(header, original)
      for (const row of notes) row.removeAttribute(NOTE)
    }
  }, [anchor, hosts, cueHost, turn, answerKey, current, nodes, groupable, english, keepNativeOpen])
  return { sections, running, cueHost, otherProcess }
}

export function TurnProcess({ node, turnProcess, binding, chat, openTurn, sessionStatus, chatSettings,
  slots, locale, openFile, inspectCall }) {
  const language = useLanguage(locale)
  const english = language === 'en'
  const turn = node.data.turn
  const current = useStore(openTurn) === turn
  const pendingInteraction = useStore(current ? sessionStatus : undefined)?.get(binding.sessionId)?.pendingInteraction
  const getNodes = useCallback(() => chat.getSnapshot()?.nodes, [chat])
  const nodes = useSyncExternalStore(chat.subscribe, getNodes)
  const assistants = useStore(nodes?.turnDataSource(turn, 'assistant-step')) ?? EMPTY
  const calls = useStore(nodes?.turnDataSource(turn, 'tool-call')) ?? EMPTY
  const toolVersion = useSlotVersion(slots, TOOL_SLOTS)
  const groupable = useMemo(() => {
    const toolSeat = slots.entriesOfSlot(TOOL_SLOTS[1]).find(entry => entry.options.key === 'tool-call')
    if (!toolSeat?.children?.[TOOL_SLOTS[0]]) return new Set()
    const renderers = new Map(slots.entriesOfSlot(TOOL_SLOTS[0]).map(entry =>
      [entry.options.key, entry.registrant ?? null]))
    return new Set(calls.filter(call => canGroupTool(call.root, renderers)).map(call => call.root.callId))
  }, [calls, slots, toolVersion])
  const retries = useStore(nodes?.turnDataSource(turn, 'model-retry')) ?? EMPTY
  const compactions = useStore(current ? nodes?.turnDataSource(turn, 'compaction') : undefined) ?? EMPTY
  const mode = useStore(chatSettings)?.value?.transcriptView
  const expanded = mode === 'verbose'
  const showToolDetail = mode !== 'compact' && !expanded
  const location = chat.getSnapshot()?.timeline.turns.get(turn)
  const closed = location?.status === 'closed'
  const answerStep = closed ? node.data.answerStep : liveAnswerStep(assistants, location?.steps.at(-1)?.step)
  const answerKey = answerStep == null ? undefined : chat.getSnapshot()?.locations.getStep(turn, answerStep)
    .find(key => nodes?.get(key)?.kind === 'assistant-step')
  const [anchor, setAnchor] = useState(null)
  const otherLabel = english ? 'Other details' : '其他详情'
  const { sections, running, cueHost, otherProcess } = useTurnPlacement(anchor, turn, answerKey, current, nodes, groupable,
    english, expanded || Boolean(pendingInteraction))
  // The native kind sources update even when a group's member keys stay the same while streaming.
  const work = useMemo(() => sections.map(section => ({
    ...section,
    batches: workBatches(section.members.map(key => nodes?.get(key)).filter(Boolean), closed),
  })), [sections, nodes, calls, assistants, closed])
  const hasBatches = work.some(section => section.batches.length > 0)
  const activeTools = work.some(section => section.batches.some(batch => batch.rows.some(isToolActive)))
  const activeRetry = retries.some(({ current }) => current.retryState === 'scheduled')
  const compacting = compactions.some(row => row.kind === 'compaction-progress' && row.status === 'running')
  const canFold = closed && turnProcess?.foldable && turnProcess.hasContent && (hasBatches || otherProcess)
    && !EXPOSED_END_REASONS.has(location.end?.data.reason?.kind)
  const toggleRef = useRef(null)
  const open = turnProcess?.open
  useLayoutEffect(() => {
    if (!canFold || open) return
    const member = document.activeElement?.closest('[data-step-process], [data-turn-process-member]')
    if (member?.dataset.chatTurn === String(turn)) toggleRef.current?.focus({ preventScroll: true })
  }, [canFold, open, turn])
  return <>
    <span hidden ref={setAnchor} data-dsh-ui-process-anchor="" />
    {canFold && <button ref={toggleRef} type="button" className="dsh-ui-process-toggle" aria-expanded={open}
      onClick={event => {
        event.currentTarget.focus({ preventScroll: true })
        turnProcess.setOpen(!open)
      }}>
      {english ? 'Work details' : '处理过程'}<Icon name="next" />
    </button>}
    {work.map(({ key, target, batches, header, nativeContent, label, nativeOpen }) => createPortal(<>
      {batches.map(batch => <div key={batch.key} className="dsh-ui-work-batch">
        {batch.rows.length > 0 && <ToolGroup rows={batch.rows} language={language} label={otherLabel} openFile={openFile}
          inspectCall={inspectCall} showToolDetail={showToolDetail} expanded={expanded} />}
        {batch.texts.length > 0 && <Reasoning texts={batch.texts} english={english} expanded={expanded} />}
      </div>)}
      {nativeContent && <NativeProcessDetails header={header} content={nativeContent} label={label} open={nativeOpen} />}
    </>, target, key))}
    {current && createPortal(<>
      {running && <span hidden data-dsh-ui-running-ready="" />}
      {compacting
      ? <div className="dsh-ui-thinking dsh-ui-compaction-cue" role="status">
        <span className="dsh-ui-compaction-signal" aria-hidden="true" />
        {english ? 'Compacting context…' : '正在压缩上下文…'}
      </div>
      : <TurnCue turn={turn} binding={binding} sessionStatus={sessionStatus} language={language}
        activeTools={activeTools} activeRetry={activeRetry} />}</>, running ?? cueHost)}
  </>
}

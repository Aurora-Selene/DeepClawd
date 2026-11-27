import { cloneElement, Fragment, isValidElement, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Menu, Modal } from '@deepseek-ai/dsh-client-ui-primitives'
import whale from './assets/deepseek.svg'
import { greetingCatalogs, greetingLetterPoses, greetingTransitions } from './greetings.js'
import { PROJECT_ICON_STORAGE, workspaceIcon } from './sidebar.js'
import { Icon, useLanguage, useReducedMotion, useStore } from './ui.jsx'

const suggestions = [
  ['pencil', '撰写', 'Write', '帮我把这段草稿整理成一篇清晰的文章。', 'Help me turn this draft into a clear article.'],
  ['book', '学习', 'Learn', '用一个具体例子，为我讲解一个新概念。', 'Teach me a new concept with a concrete example.'],
  ['code', '编程', 'Code', '帮我梳理这个编程任务的实现步骤。', 'Help me plan the steps for this coding task.'],
  ['coffee', '日常生活', 'Everyday life', '帮我安排一个从容的周末。', 'Help me plan a relaxing weekend.'],
  ['light', 'DeepSeek 推荐', 'DeepSeek picks', '帮我整理今天值得继续推进的三件事。', 'Help me identify three things worth moving forward today.'],
]

export function pickGreeting(language, previous, random = Math.random) {
  const { deepseek, shared } = greetingCatalogs[language]
  const choices = (random() < 0.58 ? deepseek : shared).filter(phrase => phrase !== previous)
  return choices[Math.floor(random() * choices.length)]
}

export function BrandMark({ size = 24, className }) {
  return <img className={className} src={whale} width={size} height={size * 21 / 27} alt="" aria-hidden="true" />
}

export function BrandName() {
  return <span className="dsh-ui-brand-name">DeepSeek</span>
}

const STANDALONE_KEY = 'dsh-deepseek-ui.standalone-session.'
const ADD_WORKSPACE = '::dsh-ui-add-workspace'

function isStandalone(sessionId) {
  if (!sessionId) return false
  try { return localStorage.getItem(STANDALONE_KEY + sessionId) === '1' } catch { return false }
}

function findElement(tree, matches) {
  if (Array.isArray(tree)) {
    for (const branch of tree) {
      const match = findElement(branch, matches)
      if (match) return match
    }
  }
  if (!isValidElement(tree)) return undefined
  return matches(tree) ? tree : findElement(tree.props.children, matches)
}

function replaceElements(tree, replacements) {
  if (Array.isArray(tree)) {
    const children = tree.map(element => replaceElements(element, replacements))
    return children.every((child, index) => child === tree[index]) ? tree : children
  }
  if (!isValidElement(tree)) return tree
  if (replacements.has(tree)) return replacements.get(tree)
  const children = replaceElements(tree.props.children, replacements)
  return children === tree.props.children ? tree : cloneElement(tree, undefined, children)
}

export function HeroWorkspaceFrame({ hero, children, locale, conversation, useWorkspaces }) {
  const english = useLanguage(locale) === 'en'
  const chain = hero ? findElement(children, element => element.props.slotKey === 'conversation.composer') : undefined
  const sessionId = chain?.props.ownerProps.sessionId
  const workspaces = useWorkspaces(snapshot => snapshot)
  const standalone = isStandalone(sessionId) && workspaces.phase === 'ready'
    && !workspaces.items.some(workspace => workspace.sessionIds.includes(sessionId))
  const block = useStore(standalone ? conversation.blocks.storeFor(sessionId) : undefined)
  if (!standalone) return children
  const stack = chain?.props.opts?.fallback
  const picker = findElement(stack, element => element.props.slotKey === 'conversation.hero.workspace')
  const bar = findElement(stack, element => element.props.slotKey === 'conversation.composer.bar')
  const anchorRef = picker?.props.ownerProps.anchorRef
  const chip = anchorRef && findElement(stack, element => element.props.buttonRef === anchorRef)
  if (!bar || !picker || !chip) return children

  // Keep the resident InputBar and its model, draft and file slots mounted.
  // The workspace-only lock does not apply to this explicitly created Session.
  const owner = bar.props.ownerProps
  const replacements = new Map([[picker, cloneElement(picker, {
    ownerProps: { ...picker.props.ownerProps, standalone: true },
  })]])
  if (!picker.props.ownerProps.selectedId) {
    replacements.set(chip, cloneElement(chip, { label: english ? 'No project' : '无项目' }))
  }
  if (owner.disabled && owner.onRequestWorkspace) {
    replacements.set(bar, cloneElement(bar, { ownerProps: {
      variant: owner.variant, occurrence: owner.occurrence,
      placeholder: block?.reason ?? chip.props.t('placeholder.hero'), blocked: block,
    } }))
  }
  const fallback = replaceElements(stack, replacements)
  const composer = cloneElement(chain, { opts: { ...chain.props.opts, fallback } })
  return replaceElements(children, new Map([[chain, composer]]))
}

function projectIcons() {
  const icons = new Map()
  for (const icon of document.querySelectorAll('[data-dsh-ui-project-icon]')) {
    const key = icon.closest('[data-row-key^="workspace:"]')?.dataset.rowKey
    if (key) icons.set(key.slice('workspace:'.length), icon.dataset.dshUiProjectIcon)
  }
  return id => {
    let stored
    try { stored = localStorage.getItem(PROJECT_ICON_STORAGE + id) } catch { /* Read the live sidebar icon below. */ }
    return workspaceIcon(stored ?? icons.get(id))
  }
}

function observeProjectIconChanges(listener) {
  const observer = new MutationObserver(listener)
  observer.observe(document.body, { attributes: true, attributeFilter: ['data-dsh-ui-project-icon'], subtree: true })
  const storage = event => { if (event.key === null || event.key.startsWith(PROJECT_ICON_STORAGE)) listener() }
  window.addEventListener('storage', storage)
  return () => {
    observer.disconnect()
    window.removeEventListener('storage', storage)
  }
}

function WorkspaceGlyph({ icon, workspaceId }) {
  return <span aria-hidden="true" className="dsh-ui-workspace-glyph" data-workspace-icon={icon}
    data-workspace-id={workspaceId}><Icon name={icon} /></span>
}

export function HeroWorkspacePicker({ open, anchorRef, selectedId, onPick, onClose,
  standalone, locale, workspaces, uiWorkspace, layout, renderFactorySlot, useWorkspaces }) {
  const english = useLanguage(locale) === 'en'
  const entries = useWorkspaces(snapshot => snapshot.items)
  const [anchor, setAnchor] = useState(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)
  const [, refreshIcons] = useState(0)
  const operation = useRef(null)
  const canPick = 'dshDesktop' in globalThis && typeof uiWorkspace.pickDirectory === 'function'
  const newProject = english ? 'New project' : '新建项目'
  const tWorkspace = locale.bind('workspace')
  const readIcon = projectIcons()

  useLayoutEffect(() => { setAnchor(anchorRef?.current ?? null) })
  useEffect(() => observeProjectIconChanges(() => refreshIcons(value => value + 1)), [])
  useEffect(() => () => operation.current?.abort(), [])

  async function chooseDirectory() {
    if (operation.current) return
    const lifetime = new AbortController()
    operation.current = lifetime
    const signal = AbortSignal.any([lifetime.signal, layout.beginNavigation()])
    onClose()
    setBusy(true)
    setError(null)
    try {
      const path = await uiWorkspace.pickDirectory()
      if (!path || signal.aborted) return
      const workspace = await workspaces.create({ path })
      if (!signal.aborted) onPick(workspace.workspaceId)
    } catch (failure) {
      if (!signal.aborted) setError(failure?.message ?? String(failure))
    } finally {
      operation.current = null
      if (!lifetime.signal.aborted) setBusy(false)
    }
  }

  const localizedDefault = tWorkspace('workspace.defaultName')
  const labels = entries.map(({ title }) => title === 'default-workspace' ? localizedDefault : title)
  const counts = new Map()
  for (const label of labels) counts.set(label, (counts.get(label) ?? 0) + 1)
  const items = entries.map(({ workspaceId, path }, index) => ({
    id: workspaceId,
    icon: <WorkspaceGlyph icon={readIcon(workspaceId)} workspaceId={workspaceId} />,
    label: counts.get(labels[index]) === 1 ? labels[index]
      : <span className="dsh-ui-workspace-name" title={path}>{labels[index]} <small>{path}</small></span>,
  }))

  return <>
    {anchor && createPortal(<WorkspaceGlyph icon={selectedId ? readIcon(selectedId) : standalone ? 'computer' : 'folder'}
      workspaceId={selectedId} />, anchor)}
    {canPick
      ? <Menu open={open && !busy} anchor={null} anchorRef={anchorRef} items={items}
          footer={[{ id: ADD_WORKSPACE, label: newProject, icon: <Icon name="plus" /> }]}
          selectedId={selectedId}
          onSelect={id => {
            if (id === ADD_WORKSPACE) void chooseDirectory()
            else onPick(id)
          }}
          onClose={onClose} side="bottom" portal />
      : renderFactorySlot('workspace.picker', { open, anchorRef, selectedId, onPick, onClose })}
    <Modal open={error !== null} onClose={() => setError(null)} closeLabel={tWorkspace('close')}
      title={tWorkspace('folderError.title')}>{error}</Modal>
  </>
}

function animateGreeting(text, emblem, transition, frames, timing, strength) {
  const letters = [...text.children]
  const framesFor = isEmblem => frames.map(({ pose, ...frame }) => {
    if (!pose) return { ...frame, transform: 'none' }
    const [x, y, angle, scale = 1] = pose
    const magnification = isEmblem ? (frame.opacity === 0 ? 0.83 : 1.02) : 1 + (scale - 1) * strength
    return {
      ...frame,
      transform: `translate(${x * strength}em, ${y * strength}em) rotate(${angle * strength * (isEmblem ? 2 : 1)}deg) scale(${magnification})`,
    }
  })
  const options = index => ({
    duration: timing.duration, easing: timing.easing, fill: 'both',
    delay: strength ? timing.stagger * transition.order(index, letters.length) : 0,
  })
  const letterFrames = framesFor(false)
  return [...letters.map((letter, index) => letter.animate(letterFrames, options(index))),
    emblem.animate(framesFor(true), options(0))]
}

function Greeting({ language, anchor, emblem, reduceMotion }) {
  const [phrase, setPhrase] = useState(() => pickGreeting(language))
  const text = useRef(null)
  const motions = useRef(null)
  const arrival = useRef(null)
  const previousTransition = useRef(null)
  const english = language === 'en'
  const parts = english ? phrase.split(' ') : Array.from(phrase)
  const partsWithText = parts.filter(part => /[\p{L}\p{N}]/u.test(part)).length
  const strength = Math.min(0.6, Math.max(0, partsWithText - 2) * 0.15)

  useLayoutEffect(() => {
    const next = arrival.current
    if (!next) return
    arrival.current = null
    const { transition, oldLeft } = next
    const easing = 'cubic-bezier(.22,.72,.26,1)'
    const current = animateGreeting(text.current, emblem.current, transition, [
      { opacity: 0, pose: transition.enter },
      { opacity: 1, pose: transition.settle, offset: 0.8 },
      { opacity: 1 },
    ], { duration: 305, easing, stagger: transition.spacing }, strength)
    const box = anchor.current.getBoundingClientRect()
    const container = (anchor.current.closest('[data-conversation-content]') ?? anchor.current.parentElement).getBoundingClientRect()
    const shift = Math.max(container.left - box.left, Math.min(oldLeft - box.left, container.right - box.right))
    if (Math.abs(shift) > 0.5) {
      current.push(anchor.current.animate([{ translate: `${shift}px` }, { translate: '0px' }], { duration: 305, easing }))
    }
    motions.current = current
    void Promise.allSettled(current.map(motion => motion.finished)).then(() => {
      current.forEach(motion => motion.cancel())
      if (motions.current === current) motions.current = null
    })
  }, [phrase])

  useEffect(() => () => {
    motions.current?.forEach(motion => motion.cancel())
    motions.current = null
    arrival.current = null
  }, [])

  async function change() {
    if (motions.current) return
    const next = pickGreeting(language, phrase)
    if (reduceMotion || !text.current?.animate) {
      setPhrase(next)
      return
    }
    const choices = greetingTransitions.filter(transition => transition !== previousTransition.current)
    const transition = choices[Math.floor(Math.random() * choices.length)]
    previousTransition.current = transition
    const leaving = animateGreeting(text.current, emblem.current, transition, [
      { opacity: 1 },
      { opacity: 0, pose: transition.leave },
    ], { duration: 145, easing: 'ease-in', stagger: transition.spacing * 0.6 }, strength)
    motions.current = leaving
    await Promise.allSettled(leaving.map(motion => motion.finished))
    if (motions.current !== leaving) return
    arrival.current = { transition, oldLeft: anchor.current.getBoundingClientRect().left }
    leaving.forEach(motion => motion.cancel())
    setPhrase(next)
  }

  return (
    <>
      <button ref={anchor} type="button" className="dsh-ui-greeting" lang={language} onClick={change}
        title={english ? 'Change greeting' : '切换问候语'} style={{ '--greeting-length': parts.length }}>
        <span className="dsh-ui-greeting-mark" ref={emblem} aria-hidden="true"><BrandMark size={36} /></span>
        <span ref={text} className="dsh-ui-greeting-text" aria-hidden="true"
          data-letter-motion={strength > 0 ? '' : undefined} style={{ '--greeting-strength': strength }}>
          {parts.map((part, index) => {
            const [offset, tilt] = greetingLetterPoses[index % greetingLetterPoses.length]
            return (
              <Fragment key={index}>
                {english && index > 0 ? ' ' : null}
                <span className="dsh-ui-greeting-letter" style={{
                  '--letter-offset': `${offset}em`, '--letter-tilt': `${tilt}deg`, '--letter-breath-delay': `${-index * .57}s`,
                }}>{part}</span>
              </Fragment>
            )
          })}
        </span>
        <span className="dsh-ui-sr-only">{phrase}</span>
      </button>
      <span className="dsh-ui-sr-only" aria-live="polite" aria-atomic="true">{phrase}</span>
    </>
  )
}

function Suggestions({ language, fill }) {
  const english = language === 'en'
  return (
    <div className="dsh-ui-suggestions" role="group" aria-label={english ? 'Prompt suggestions' : '快捷提示'}>
      {suggestions.map(([icon, zh, en, zhPrompt, enPrompt]) => {
        const prompt = english ? enPrompt : zhPrompt
        return <button key={icon} className="dsh-ui-suggestion" type="button" onClick={() => fill(prompt)}>
          <Icon name={icon} />{english ? en : zh}
        </button>
      })}
    </div>
  )
}

export function HeroMark({ locale, sessions, modelDirectories, conversation, renderPreselection }) {
  const language = useLanguage(locale)
  const reduceMotion = useReducedMotion()
  const anchor = useRef(null)
  const emblem = useRef(null)
  const content = useRef(null)
  const pendingPrompt = useRef(null)
  const [mount, setMount] = useState(null)
  const [controls, setControls] = useState(null)
  const [sessionId, setSessionId] = useState(undefined)

  useLayoutEffect(() => {
    const element = anchor.current
    const region = element.closest('[data-conversation-content]')
    const seat = element.closest('[data-composer-seat]')
    if (!region || !seat) return
    const portal = document.createElement('div')
    portal.className = 'dsh-ui-hero-extras'
    seat.append(portal)
    content.current = region
    setMount(portal)
    const update = () => {
      setSessionId(region.dataset.conversationSession)
      setControls(seat.querySelector('[data-composer-card] [class*="_standardControls"]'))
    }
    const observer = new MutationObserver(records => {
      if (records.some(record => [...record.addedNodes, ...record.removedNodes].some(node =>
        node instanceof Element && (node.matches('[data-composer-card]') || node.querySelector('[data-composer-card]'))))) update()
    })
    const sessionObserver = new MutationObserver(update)
    observer.observe(seat, { childList: true, subtree: true })
    sessionObserver.observe(region, { attributes: true, attributeFilter: ['data-conversation-session'] })
    update()
    return () => {
      observer.disconnect()
      sessionObserver.disconnect()
      portal.remove()
      content.current = null
    }
  }, [])

  function fill(prompt, target = sessionId) {
    const binding = target ? sessions.binding(target) : undefined
    if (!binding) {
      pendingPrompt.current = prompt
      content.current?.querySelector('[data-composer-card]')?.click()
      return false
    }
    const input = conversation.input.for(binding.ctx)
    input.setDraft(prompt)
    input.focus()
    return true
  }

  useLayoutEffect(() => {
    if (sessionId && pendingPrompt.current !== null && fill(pendingPrompt.current, sessionId)) pendingPrompt.current = null
  }, [sessionId])

  useEffect(() => {
    if (!sessionId || !sessions.binding(sessionId) || reduceMotion) return
    const { store } = modelDirectories.directoryFor(sessionId)
    let previous = store.getSnapshot().current
    let breath
    const tone = store.subscribe(() => {
      const current = store.getSnapshot().current
      if (!current) return
      const changed = previous && (previous.provider !== current.provider || previous.model !== current.model)
      previous = current
      const logo = emblem.current?.querySelector('img')
      if (!changed || !logo?.animate) return
      breath?.cancel()
      breath = logo.animate([
        { scale: 1, opacity: 1 },
        { scale: 0.93, opacity: 0.88, offset: 0.38 },
        { scale: 1, opacity: 1 },
      ], { duration: 470, easing: 'ease-in-out' })
    })
    return () => { tone(); breath?.cancel() }
  }, [sessionId, reduceMotion, sessions, modelDirectories])

  return (
    <span className="dsh-ui-hero-mark">
      <Greeting key={language} language={language} anchor={anchor} emblem={emblem} reduceMotion={reduceMotion} />
      {controls && createPortal(renderPreselection?.(sessionId), controls)}
      {mount && createPortal(<Suggestions language={language} fill={fill} />, mount)}
    </span>
  )
}

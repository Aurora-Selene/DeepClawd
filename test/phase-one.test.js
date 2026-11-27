import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import vm from 'node:vm'
import { workspaceContext, workspaceGit } from '../src/host/inspector.js'
import { bootStyles, themeOverrides, themePalettes, themeStorageKey } from '../src/theme/palette.js'
import { availablePresets, canChangePreset, changeSelection, createUltraMemory, presetName, ultraActive, ultraAvailable } from '../src/client/selection.js'
import { decodeRate, OutputSpeed, speedIntensity } from '../src/client/speed.js'

const root = key => new URL(`../${key}`, import.meta.url)
const ok = { ok: true }
const flash = { id: 'flash', reasoning: { efforts: [{ id: 'high' }, { id: 'max' }] } }
const selection = { provider: 'deepseek', model: 'flash', reasoningEffort: 'max' }

test('build outputs expose the Host and register a DSH Client factory', async () => {
  const packageJson = JSON.parse(await readFile(root('package.json'), 'utf8'))
  const host = await import(root('lib/index.js'))
  const captured = []
  host.apply({
    on: (name, handler) => {
      assert.equal(name, 'webserver/index-inject')
      handler(captured)
    },
    inject: (names) => assert(names.includes('sessionController')),
  })
  assert(captured.some(row => row.kind === 'style' && row.text.includes('#272621') && row.text.includes('[data-composer-card]')))
  const themeScript = captured.find(row => row.kind === 'script' && row.placement === 'head')
  assert(themeScript)
  let entry
  const script = await readFile(root('lib/client.js'), 'utf8')
  const document = {
    documentElement: { dataset: {} },
    head: { append() {} },
    createElement: () => ({ dataset: {}, remove() {} }),
  }
  const preferences = new Map([[themeStorageKey, 'blue']])
  const localStorage = { getItem: key => preferences.get(key) ?? null, setItem: (key, value) => preferences.set(key, value) }
  vm.runInNewContext(themeScript.text, { document, localStorage })
  assert.equal(document.documentElement.dataset.dshUiTheme, 'blue')
  const windowEvents = new Map()
  const window = {
    __ModuleLoader__: { load: registered => { entry = registered } },
    addEventListener: (event, callback) => windowEvents.set(event, callback),
  }
  vm.runInNewContext(script, { document, localStorage, URLSearchParams, window })
  assert.equal(entry.id, packageJson.name)
  assert(packageJson.dsh.client.inject.every(name => name.startsWith('@deepseek-ai/')))
  const allowed = new Set(['react', 'react-dom', 'react/jsx-runtime', '@deepseek-ai/dsh-client-ui-primitives'])
  const client = entry.factory(name => { assert(allowed.has(name)); return {} })
  assert.equal(typeof client.apply, 'function')
  assert(client.inject.includes('modelDirectories'))
  for (const key of ['remote.session', 'remote.agentTeams', 'remote.agentPresets', 'uiSession.sessionStatus']) {
    assert(client.inject.includes(key), `DSH requires an explicit inject for ${key}`)
  }
  const entries = new Map()
  const tabs = new Map()
  const factories = new Map()
  const continuations = []
  const subagentSection = () => null
  const nativeSections = new Map([['conversation.session.panel.section', [
    { options: { id: 'subagents' }, component: subagentSection, locale: 'subagent' },
  ]]])
  const navigation = []
  const childSlots = new Set(['conversation.input.model.label', 'conversation.input.model.options'])
  let appliedTokens
  client.apply({
    effect: callback => callback(),
    theme: { overrideTokens: (_source, tokens) => { appliedTokens = tokens; return () => {} } },
    uiSession: { sessionStatus: {} },
    sidebarRight: { openResourceIn: (...args) => navigation.push(args) },
    sidebarRightTabs: { register: tab => { tabs.set(tab.kind, tab); return () => {} } },
    slots: {
      entriesOfSlot: name => nativeSections.get(name) ?? [],
      subscribe: () => () => {},
      registerFactory: (options, component) => { factories.set(options.name, { options, component }); return () => {} },
      inject: (_key, callback) => { continuations.push(callback) },
      register: (options, component) => {
        for (const name of Object.keys(options.children ?? {})) assert(!childSlots.has(name))
        entries.set(options.id ?? options.name, { options, component })
        return () => {}
      },
    },
  })
  for (const register of continuations) {
    const registrations = register()
    if (registrations?.next) Array.from(registrations)
  }
  for (const name of ['sidebar.brand.name', 'sidebar.brand.mark', 'conversation.hero.brand.mark', 'conversation.input.model']) {
    assert(entries.has(name), `Missing existing Phase 1 slot ${name}`)
  }
  assert.equal(entries.get('conversation.input.model').options.priority, -10)
  assert.equal(entries.get('conversation.input.permission').options.priority, -10)
  assert.equal(entries.get('deepseek-ui.sidebar').options.name, 'shell.overlay')
  assert.equal(entries.get('deepseek-ui.inspector-toolbar').options.name, 'shell.overlay')
  const theme = entries.get('deepseek-ui.theme').options
  assert.equal(theme.name, 'settings.general.item')
  const picker = theme.inject()
  assert.equal(picker.store.getSnapshot(), 'blue')
  assert.equal(appliedTokens['--dsh-ui-accent'].light, themePalettes.blue['--dsh-ui-accent'].light)
  picker.choose('clay')
  assert.equal(localStorage.getItem(themeStorageKey), 'clay')
  assert.equal(document.documentElement.dataset.dshUiTheme, 'clay')
  assert.equal(appliedTokens['--dsh-ui-accent'].light, themeOverrides['--dsh-ui-accent'].light)
  localStorage.setItem(themeStorageKey, 'blue')
  windowEvents.get('storage')({ key: themeStorageKey })
  assert.equal(picker.store.getSnapshot(), 'blue')
  assert.equal(document.documentElement.dataset.dshUiTheme, 'blue')
  assert.equal(entries.get('conversation.chat.node').options.key, 'turn-process')
  assert.equal(entries.get('conversation.hero.agentPreset').component(), null)
  assert.equal(entries.get('conversation.hero.workspace').options.priority, -10)
  assert.equal(entries.get('deepseek-ui.workspace-frame').options.name, 'conversation.hero.frame')
  for (const key of ['agent-preset', 'session-panel', 'conversation.chat.aside']) {
    assert.equal(entries.get(key).options.priority, -10)
    assert.equal(entries.get(key).component(), null)
  }
  const subagents = factories.get('deepseek-ui.overview.subagents.body')
  assert.equal(subagents.component, subagentSection)
  assert.equal(subagents.options.scope, 'session')
  assert.equal(subagents.options.locale, 'subagent')
  subagents.options.inject('parent').openChildAside({ parentSessionId: 'parent', childSessionId: 'has spaces', mode: 'one-shot' })
  assert.deepEqual(JSON.parse(JSON.stringify(navigation)), [
    ['parent', 'dsh-resource://subagentchat/session/has%20spaces?parent=parent&mode=one-shot',
      { kind: 'subagentchat', destination: 'sidebar' }],
  ])
  assert.equal(entries.get('deepseek-ui.context').options.name, 'conversation.composer.dock')
  assert.equal(entries.get('deepseek-ui.task-shortcut').options.name, 'conversation.session.header.utilities')
  assert.equal(entries.get('sidebar.right.pane.tab').options.key, tabs.get('deepseek-overview').id)
  const guide = entries.get('deepseek-ui.inspector').options
  const overview = entries.get('sidebar.right.pane.tab').options
  assert.deepEqual(Object.keys(guide.select()), [])
  const first = guide.inject('first-session').sections
  first.set('context', true)
  first.set('files', false)
  assert.equal(overview.inject('first-session').sections, first)
  assert.deepEqual({ ...guide.inject('first-session').sections.getSnapshot() }, { context: true, files: false })
  assert.deepEqual(Object.keys(guide.inject('second-session').sections.getSnapshot()), [])
})

test('warm-clay palettes expose matching boot and runtime native tokens', () => {
  assert.deepEqual(themeOverrides['--dsw-specific-sidebar-fill'], { light: '#f2efe8', dark: '#22211d' })
  assert.deepEqual(themeOverrides['--dsw-specific-bubble'], { light: '#f0ece3', dark: '#353129' })
  assert(bootStyles.includes('--dsw-alias-state-business-primary:#ad5037'))
  assert(bootStyles.includes('--dsw-alias-state-business-primary:#dfa084'))
})

test('DeepSeek blue shares the neutral surfaces and maps accent roles to the native UI', () => {
  const { blue, clay } = themePalettes
  for (const token of ['--dsh-ui-canvas', '--dsh-ui-surface', '--dsh-ui-surface-overlay', '--dsw-specific-sidebar-fill']) {
    assert.deepEqual(blue[token], clay[token], token)
  }
  assert.deepEqual(blue['--dsw-alias-button-primary-fill'], blue['--dsh-ui-accent'])
  assert.deepEqual(blue['--dsw-alias-border-selected'], blue['--dsh-ui-focus'])
  assert.deepEqual(blue['--dsw-specific-sidebar-nav-item-active'], blue['--dsh-ui-sidebar-row-selected'])
  assert.notDeepEqual(blue['--dsh-ui-accent'], clay['--dsh-ui-accent'])
  for (const color of Object.values(blue['--dsh-ui-accent'])) {
    assert(bootStyles.includes(`--dsw-alias-state-business-primary:${color};`))
  }
})

test('Ultra derives from native model, team and session phase', () => {
  const capabilities = { agentTeams: { setEnabled() {} }, agentPresets: { select() {} } }
  const before = { selection, model: flash, teamEnabled: true, root: true, canChangePreset: true }
  assert.equal(ultraAvailable(flash, true, { enabled: false }, true, capabilities, [{ id: 'ptc' }]), true)
  assert.equal(ultraAvailable(flash, true, { enabled: false }, true, capabilities, [{ id: 'ptc', broken: 'Unavailable' }]), false)
  assert.equal(ultraAvailable(flash, true, { enabled: false }, true, capabilities, [{ id: 'standard' }]), false)
  assert.equal(ultraAvailable(flash, true, { enabled: false }, false, capabilities, []), true)
  assert.equal(ultraAvailable(flash, false, { enabled: false }, true, capabilities), false)
  assert.equal(ultraAvailable({ reasoning: { efforts: [{ id: 'high' }] } }, true, {}, false, capabilities), false)
  assert.equal(ultraActive({ ...before, preset: 'standard' }), false)
  assert.equal(ultraActive({ ...before, preset: 'ptc' }), true)
  assert.equal(ultraActive({ ...before, canChangePreset: false, preset: 'standard' }), true)
  assert.equal(ultraActive({ ...before, canChangePreset: false, teamEnabled: false }), false)
  assert.equal(canChangePreset({ blank: true, awaitingFirstTurn: true }), false)
})

function changes(overrides = {}, responders = {}) {
  const calls = []
  const request = (verb, value) => {
    calls.push([verb, value])
    return Promise.resolve(responders[verb]?.(value) ?? ok)
  }
  const promise = changeSelection({
    directory: { select: next => request('model', next.reasoningEffort) },
    sessionId: 'session-1',
    remote: {
      agentPresets: { select: (_id, value) => request('preset', value) },
      agentTeams: { setEnabled: (_id, value) => request('team', value) },
    },
    before: { selection: { ...selection, reasoningEffort: 'high' }, presetMutable: true,
      preset: 'standard', teamEnabled: false, ultra: false, lastUsed: null },
    next: selection,
    wantUltra: true,
    confirmDisable: () => true,
    presetIsMutable: () => true,
    ...overrides,
  })
  return { calls, promise }
}

test('blank and used sessions apply the exact Ultra Think combination', async () => {
  const blank = changes()
  assert.deepEqual((await blank.promise).ultraState, { ordinaryPreset: 'standard', enabledTeam: true })
  assert.deepEqual(blank.calls, [['preset', 'ptc'], ['team', true], ['model', 'max']])
  const used = changes({ before: { presetMutable: false, preset: 'standard', teamEnabled: false } })
  await used.promise
  assert.deepEqual(used.calls, [['team', true], ['model', 'max']])
})

test('leaving Ultra restores the blank preset and honors the used-session confirmation', async () => {
  const before = { selection, presetMutable: true, preset: 'ptc', teamEnabled: true, ultra: true, lastUsed: null }
  const next = { ...selection, reasoningEffort: 'high' }
  const savedUltra = { ordinaryPreset: 'custom', enabledTeam: true }
  const blank = changes({ before, next, wantUltra: false, savedUltra })
  await blank.promise
  assert.deepEqual(blank.calls, [['preset', 'custom'], ['team', false], ['model', 'high']])
  const used = changes({ before: { ...before, presetMutable: false, lastUsed: selection },
    next, wantUltra: false, savedUltra, confirmDisable: () => false })
  assert.equal((await used.promise).status, 'cancelled')
  assert.deepEqual(used.calls, [])
})

test('Max and Ultra stay distinct when a started session already has Team enabled', async () => {
  const before = { selection, presetMutable: false, preset: 'ptc', teamEnabled: true, lastUsed: selection }
  const context = { ...before, model: flash, canChangePreset: false, root: true }
  assert.equal(ultraActive(context), true)

  const max = changes({ before, wantUltra: false, savedUltra: { enabledTeam: false } })
  const { ultraState } = await max.promise
  assert.deepEqual(max.calls, [])
  assert.deepEqual(ultraState, { ordinaryMax: true })
  assert.equal(ultraActive({ ...context, ...ultraState }), false)

  const ultra = changes({ before, savedUltra: ultraState })
  const restored = await ultra.promise
  assert.deepEqual(ultra.calls, [])
  assert.equal(ultraActive({ ...context, ...restored.ultraState }), true)
})

test('Ultra records survive a fresh Client and leave preexisting or unowned settings alone', async t => {
  const data = new Map()
  const storage = { getItem: key => data.get(key) ?? null, setItem: (key, value) => data.set(key, value),
    removeItem: key => data.delete(key) }
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, 'localStorage')
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: storage })
  t.after(() => {
    if (descriptor) Object.defineProperty(globalThis, 'localStorage', descriptor)
    else delete globalThis.localStorage
  })
  const external = changes({ before: { presetMutable: true, preset: 'custom', teamEnabled: true } })
  const record = (await external.promise).ultraState
  assert.deepEqual(external.calls, [['preset', 'ptc'], ['model', 'max']])
  createUltraMemory().set('session-1', record)
  const reloaded = createUltraMemory()
  const before = { selection, presetMutable: true, preset: 'ptc', teamEnabled: true, lastUsed: selection }
  const next = { ...selection, reasoningEffort: 'high' }
  const restored = changes({ before, next, wantUltra: false, savedUltra: reloaded.get('session-1'),
    confirmDisable: () => { throw new Error('Preexisting Team must not need confirmation') } })
  await restored.promise
  assert.deepEqual(restored.calls, [['preset', 'custom'], ['model', 'high']])
  reloaded.set('session-1', undefined)
  const legacy = changes({ before, next, wantUltra: false, savedUltra: createUltraMemory().get('session-1') })
  await legacy.promise
  assert.deepEqual(legacy.calls, [['model', 'high']])
  const snapshots = []
  const unsubscribe = reloaded.subscribe(() => snapshots.push(reloaded.get('session-1')))
  reloaded.set('session-1', { ordinaryMax: true })
  assert.deepEqual(createUltraMemory().get('session-1'), { ordinaryMax: true })
  reloaded.set('session-1', undefined)
  unsubscribe()
  assert.deepEqual(snapshots, [{ ordinaryMax: true }, undefined])
})

test('rollback after failed model selection and preset lock race', async () => {
  const rejected = changes({}, { model: () => ({ ok: false, error: { message: 'Model rejected' } }) })
  await assert.rejects(rejected.promise, /Model rejected/)
  assert.deepEqual(rejected.calls, [['preset', 'ptc'], ['team', true], ['model', 'max'], ['team', false], ['preset', 'standard']])
  const locked = changes({}, { preset: () => ({ ok: false, error: { code: 'agent-preset/locked' } }) })
  await locked.promise
  assert.deepEqual(locked.calls, [['preset', 'ptc'], ['team', true], ['model', 'max']])
})

test('mode options use the healthy roster and localize built-in names', () => {
  const standard = { id: 'standard', isDefault: true }
  const custom = { id: 'custom', name: 'Local preset' }
  const roster = availablePresets({ presets: [standard, { id: 'broken', broken: 'Unavailable' }, custom] })
  assert.deepEqual(roster, { presets: [standard, custom], defaultPresetId: 'standard' })
  assert.equal(availablePresets({ presets: [custom] }).defaultPresetId, undefined)
  assert.equal(presetName('ptc', roster.presets, false), 'PTC 模式')
  assert.equal(presetName('standard', roster.presets, true), 'Standard mode')
  assert.equal(presetName('custom', roster.presets, true), 'Local preset')
  assert.equal(presetName('removed', roster.presets, true), 'removed')
})

test('switching modes from Ultra keeps Max, disables teamwork, and clears the previous mode', async () => {
  const before = { selection, presetMutable: true, preset: 'ptc', teamEnabled: true, ultra: true, lastUsed: null }
  const savedUltra = { ordinaryPreset: 'standard', enabledTeam: true }
  const manual = changes({ before, presetId: 'minimal', next: undefined, wantUltra: false, savedUltra })
  assert.deepEqual(await manual.promise, { status: 'saved', ultraState: { ordinaryMax: true } })
  assert.deepEqual(manual.calls, [['preset', 'minimal'], ['team', false]])

  const rejected = changes({ before, presetId: 'minimal', next: undefined, wantUltra: false, savedUltra },
    { team: () => ({ ok: false, error: { message: 'Team change refused' } }) })
  await assert.rejects(rejected.promise, /Team change refused/)
  assert.deepEqual(rejected.calls, [['preset', 'minimal'], ['team', false], ['preset', 'ptc']])
})

test('staged Ultra remembers the chosen ordinary mode and manual changes respect session lock', async () => {
  const draft = changes({ presetId: 'cordis' })
  assert.equal((await draft.promise).ultraState.ordinaryPreset, 'cordis')
  assert.deepEqual(draft.calls, [['preset', 'ptc'], ['team', true], ['model', 'max']])
  const locked = changes({ presetId: 'minimal', wantUltra: false, presetIsMutable: () => false, lockedMessage: 'Locked' })
  await assert.rejects(locked.promise, /Locked/)
  assert.deepEqual(locked.calls, [])
})

test('observed chunks drive live estimates and settled provider usage drives recent speed', () => {
  const estimator = new OutputSpeed()
  const append = (type, time, data) => estimator.observe({ change: { kind: 'append', entries: [{ event: { type, time, data } }] } })
  append('step/start', 700, { turn: 1, step: 1 })
  append('assistant/live-chunk', 1000, { attemptId: 'a', turn: 1, step: 1, chunk: { type: 'text-delta', text: 'start' } })
  append('assistant/live-chunk', 1300, { attemptId: 'a', turn: 1, step: 1, chunk: { type: 'text-delta', text: '界'.repeat(24) } })
  assert.deepEqual(estimator.sample(1300), { kind: 'live', rate: 80 })
  append('assistant/message', 1800, { turn: 1, step: 1, usage: { outputTokens: 52 } })
  assert.deepEqual(estimator.sample(1850), { kind: 'recent', rate: 65 })
  estimator.observe({ change: { kind: 'replace', entries: [] } })
  assert.deepEqual(estimator.sample(1850, { decodeTokens: 150, decodeMs: 1000 }), { kind: 'session', rate: 150 })
  assert.equal(decodeRate(30, 0), null)
  assert.equal(speedIntensity(15), 0)
  assert.equal(speedIntensity(59), 0.5)
  assert.equal(speedIntensity(140), 1)
})

test('Inspector pages over unarchived Workspace members and delegates Git to Forge', async () => {
  const calls = []
  const contextPressure = { projectedTokens: 900, contextWindow: 9000 }
  const contextBreakdown = { systemTokens: 40, toolsTokens: 20, messageTokens: 60 }
  const ctx = {
    workspaceRegistry: { get: id => id === 'w' ? { sessionIds: ['archived', 'a', 'b'] } : undefined,
      archivedSessionIds: ['archived'] },
    sessionController: { projections: async ({ sessionId }) => {
      calls.push(sessionId)
      return { kind: 'sequenced', asOfSeq: 17, values: { contextPressure, contextBreakdown, hidden: 'not returned' } }
    } },
    sessions: { get: id => ({ id }) },
    get: () => ({
      follow: async function* (session, signal) {
        assert.equal(session.id, 'a')
        assert.equal(signal.aborted, false)
        yield { checkout: { state: 'pending' } }
        yield { checkout: { state: 'ready', checkout: { branch: 'main' } } }
      },
      localDiff: async (_session, scope) => { assert.equal(scope.kind, 'uncommitted'); return { files: [], omitted: 0 } },
    }),
  }
  const request = path => new Request(`http://localhost/api/deepseek-ui/${path}`)
  const context = await workspaceContext(ctx, request('context?workspaceId=w&limit=1'))
  assert.deepEqual(await context.json(), { workspaceId: 'w', nextCursor: 'b', nextOffset: 1, items: [{ sessionId: 'a',
    status: 'sequenced', asOfSeq: 17, contextPressure, contextBreakdown }] })
  ctx.workspaceRegistry.archivedSessionIds.push('a')
  const nextPage = await workspaceContext(ctx, request('context?workspaceId=w&limit=1&cursor=b'))
  assert.deepEqual(await nextPage.json(), { workspaceId: 'w', nextCursor: null, nextOffset: null, items: [{ sessionId: 'b',
    status: 'sequenced', asOfSeq: 17, contextPressure, contextBreakdown }] })
  assert.deepEqual([...new Set(calls)], ['a', 'b'])
  assert.equal((await workspaceContext(ctx, request('context?workspaceId=w&limit=33'))).status, 400)
  assert.equal((await workspaceGit(ctx, request('git?workspaceId=w&sessionId=other'))).status, 404)
  const branch = await workspaceGit(ctx, request('git?workspaceId=w&sessionId=a'))
  assert.deepEqual(await branch.json(), { status: 'ready', workspaceId: 'w', sessionId: 'a', current: 'main' })
  const git = await workspaceGit(ctx, request('git?workspaceId=w&sessionId=a&diff=1'))
  assert.deepEqual(await git.json(), { status: 'ready', workspaceId: 'w', sessionId: 'a', current: 'main',
    diff: { files: [], omitted: 0 } })
  const outside = await workspaceGit({ ...ctx, get: () => ({
    follow: async function* () { yield { checkout: { state: 'none' } } },
  }) }, request('git?workspaceId=w&sessionId=b'))
  assert.equal(outside.status, 200)
  assert.deepEqual(await outside.json(), { status: 'no-checkout' })
})

test('project context skips unsent and missing sessions while paging over real chats', async () => {
  const ctx = {
    workspaceRegistry: { get: () => ({ sessionIds: ['draft', 'missing', 'sent', 'older', 'another-draft'] }),
      archivedSessionIds: [] },
    sessionController: { projections: async ({ sessionId }) => {
      if (sessionId === 'missing') return null
      if (sessionId === 'older') return { kind: 'migration-required', values: {} }
      return { kind: 'sequenced', asOfSeq: 1, values: {
        sessionListMetadata: { blank: true, lastPromptAt: sessionId === 'sent' ? 12 : null },
      } }
    } },
  }
  const page = async offset => (await workspaceContext(ctx,
    new Request(`http://localhost/api/deepseek-ui/context?workspaceId=w&limit=1&offset=${offset}`))).json()
  const first = await page(0)
  assert.deepEqual(first.items.map(item => item.sessionId), ['sent'])
  assert.equal(first.nextOffset, 3)
  const last = await page(first.nextOffset)
  assert.deepEqual(last.items.map(item => item.sessionId), ['older'])
  assert.equal(last.nextOffset, null)
})

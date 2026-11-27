import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react'
import { Icon, useLanguage, useStore } from './ui.jsx'
import { usePopover } from './popover.jsx'
import { SpeedButton, emptySpeed, useOutputSpeed, useSpeedMotion } from './speed-ui.jsx'
import { availablePresets, canChangePreset, changeSelection, highestEffort, isSelectedModel, modelIn, presetName,
  reasoningEffortFor, selectionFor,
  ultraActive, ultraAvailable, ULTRA_THINK } from './selection.js'

const ULTRA = { id: ULTRA_THINK, name: 'Ultra Think' }
const SPECTRUM_TINT = new Map([['high', '13%'], ['xhigh', '28%'], ['max', '44%'], [ULTRA_THINK, '100%']])
const selectionWrites = new Map()

function disableTeam(english) {
  return window.confirm(english
    ? 'Disable agent teamwork?\n\nShared task tools and coordination instructions will stop. This may affect cache reuse and subsequent token usage.'
    : '确认停用智能体团队协作？\n\n停用后将停止共享任务工具和团队协调指令，可能影响缓存复用与后续 token 用量。')
}

function EffortPanel({ popover, efforts, index, modelName, english, busy, report, selectIndex, reset, openModels,
  modeTitle, modeEntry, modeOptions, showingModes, closeModes }) {
  const pageFocus = useRef(null)
  const label = english ? 'Reasoning effort' : '推理档位'
  const backTitle = english ? 'Back to reasoning effort' : '返回推理档位'
  useEffect(() => {
    if (popover.open) pageFocus.current?.focus({ preventScroll: true })
  }, [popover.open, showingModes])
  return (
    <div {...popover.content} className="dsh-ui-popover dsh-ui-effort-menu" aria-label={showingModes ? modeTitle : label}>
      {showingModes ? <div className="dsh-ui-mode-control">
        <div className="dsh-ui-mode-head">
          {efforts.length > 0 && <button type="button" className="dsh-ui-control dsh-ui-mode-back"
            title={backTitle} aria-label={backTitle} onClick={closeModes}>
            <Icon name="back" />
          </button>}
          <h3 ref={pageFocus} tabIndex={-1}>{modeTitle}</h3>
        </div>
        {modeOptions}
      </div> : <div className="dsh-ui-effort-control">
        <div className="dsh-ui-effort-head">
          {modeEntry}
          <div className="dsh-ui-effort-value">
            {efforts.map((effort, position) => <span key={effort.id} data-current={position === index ? '' : undefined}>
              {effort.name}
            </span>)}
          </div>
          <button className="dsh-ui-control dsh-ui-effort-reset" type="button" disabled={busy}
            onClick={reset} title={english ? 'Restore default effort' : '恢复默认推理档位'}
            aria-label={english ? 'Restore default effort' : '恢复默认推理档位'}>
            <Icon name="restore" />
          </button>
          <button className="dsh-ui-control dsh-ui-effort-model" type="button" disabled={busy}
            onClick={openModels} aria-label={english ? 'Choose model' : '选择模型'}>
            <span>{modelName}</span><Icon name="next" />
          </button>
        </div>
        <div className="dsh-ui-effort-track">
          <div className="dsh-ui-effort-rail" aria-hidden="true">
            <div className="dsh-ui-effort-fill">
              <div className="dsh-ui-effort-spectrum" />
              <div className="dsh-ui-effort-stars"><div className="dsh-ui-effort-star-strip" data-dsh-ui-motion="" /></div>
            </div>
          </div>
          <div className="dsh-ui-effort-stops" aria-hidden="true">
            {efforts.map((effort, position) => <span key={effort.id} data-filled={position <= index ? '' : undefined} />)}
          </div>
          <div className="dsh-ui-effort-thumb" aria-hidden="true" />
          <input ref={pageFocus} type="range" className="dsh-ui-effort-range" min="0" max={Math.max(0, efforts.length - 1)}
            step="1" value={index < 0 ? 0 : index} aria-label={label} aria-valuetext={efforts[index]?.name}
            disabled={busy || efforts.length < 2}
            onChange={event => selectIndex(event.currentTarget.valueAsNumber, false)}
            onPointerDown={event => {
              event.currentTarget.setPointerCapture(event.pointerId)
              selectIndex(undefined, 'start')
            }}
            onPointerUp={event => selectIndex(event.currentTarget.valueAsNumber, true)}
            onPointerCancel={() => selectIndex(undefined, 'cancel')}
          />
        </div>
      </div>}
      {report && <p className="dsh-ui-model-message" role="alert">{report}</p>}
    </div>
  )
}

function usePresetRoster(remote) {
  const [roster, setRoster] = useState({ presets: [], loading: true })
  const [revision, setRevision] = useState(0)
  useEffect(() => {
    let active = true
    async function load() {
      try {
        const result = await remote.agentPresets.list()
        if (!active) return
        if (result.ok) setRoster(availablePresets(result.value))
        else if (result.error.code === 'gateway/invocation-unavailable') setRoster({ presets: [] })
        else setRoster(previous => ({ ...previous, loading: false, error: result.error.message }))
      } catch (error) {
        if (active) setRoster(previous => ({ ...previous, loading: false, error: error.message }))
      }
    }
    void load()
    return () => { active = false }
  }, [remote, revision])

  useEffect(() => remote.$on?.('settings/document-updated', namespace => {
    if (namespace === 'agent-preset-registry') setRevision(value => value + 1)
  }), [remote])
  return { ...roster, retry: () => {
    setRoster(previous => ({ ...previous, loading: true, error: undefined }))
    setRevision(value => value + 1)
  } }
}

function PresetOptions({ roster, selected, editable, busy, english, choose }) {
  const { presets, loading, error, retry } = roster
  return <div className="dsh-ui-mode-options">
    {editable && presets.map(preset => (
      <button key={preset.id} type="button" className="dsh-ui-model-row" data-preset-id={preset.id}
        aria-pressed={selected === preset.id} disabled={busy} onClick={() => { if (selected !== preset.id) choose(preset.id) }}>
        <span>{presetName(preset.id, presets, english)}</span>
        {selected === preset.id && <Icon name="check" />}
      </button>
    ))}
    {selected && (!editable || !presets.some(preset => preset.id === selected)) &&
      <div className="dsh-ui-model-row dsh-ui-current-preset" data-preset-id={selected} aria-disabled="true">
        <span>{presetName(selected, presets, english)}</span><Icon name="check" />
      </div>}
    {loading && presets.length === 0 && <p className="dsh-ui-model-message" role="status">
      {english ? 'Loading modes…' : '正在加载模式…'}
    </p>}
    {error && <>
      <p className="dsh-ui-model-message" role="alert">{error}</p>
      <button type="button" className="dsh-ui-retry" onClick={retry}>{english ? 'Reload modes' : '重新加载模式'}</button>
    </>}
  </div>
}

function ComposerControls({
  state, locale, english, roster, allowsUltra, mode, locked, select, reload, reading = emptySpeed, stats,
  presetId, presetLocked, presetMutable, selectPreset,
}) {
  const models = usePopover()
  const effort = usePopover()
  const root = useRef(null)
  const dragging = useRef(false)
  const returnToEffort = useRef(false)
  const saving = useRef(false)
  const [pending, setPending] = useState(false)
  const [notice, setNotice] = useState(null)
  const [preview, setPreview] = useState(null)
  const [speedOpen, setSpeedOpen] = useState(false)
  const [choosingMode, setChoosingMode] = useState(false)
  const groups = state?.groups ?? []
  const selection = state?.current
  const provider = groups.find(group => group.id === selection?.provider)
  const model = modelIn(groups, selection)
  const nativeEfforts = model?.reasoning?.efforts ?? []
  const efforts = allowsUltra ? [...nativeEfforts, ULTRA] : nativeEfforts
  const saved = mode && allowsUltra ? ULTRA_THINK : reasoningEffortFor(model, selection?.reasoningEffort)
  const chosen = efforts.some(row => row.id === preview) ? preview : saved
  const position = efforts.findIndex(row => row.id === chosen)
  const span = Math.max(1, efforts.length - 1)
  const progress = Math.max(0, position / span)
  const spectrumTint = SPECTRUM_TINT.get(chosen) ?? '0%'
  const busy = locked || pending || state?.status === 'selecting'
  const modelTitle = english ? 'Choose model' : '选择模型'
  const effortTitle = english ? 'Reasoning effort' : '推理档位'
  const modeTitle = english ? 'Choose mode' : '模式选择'
  const modelName = model?.name ?? selection?.model ?? modelTitle
  const effortName = chosen === ULTRA_THINK ? 'Ultra' : (efforts[position]?.name ?? state?.retainedEffort ?? effortTitle)
  const hasEfforts = efforts.length > 0
  const showingModes = !hasEfforts || (choosingMode && !presetLocked)
  const selectedPreset = presetId ?? roster.defaultPresetId
  const hasModes = selectedPreset || roster.presets.length > 0 || roster.loading || roster.error
  const lockedModeName = presetLocked && selectedPreset ? presetName(selectedPreset, roster.presets, english) : null
  useSpeedMotion(root, reading, effort.open && !showingModes, presetLocked && speedOpen)

  useEffect(() => {
    if (!effort.open) {
      dragging.current = false
      setChoosingMode(false)
      if (!saving.current) setPreview(null)
    }
  }, [effort.open])
  useEffect(() => {
    if (presetLocked && !hasEfforts && effort.open) effort.close()
  }, [presetLocked, hasEfforts, effort.open])

  async function commit(write, after) {
    if (saving.current || busy) return
    saving.current = true
    setPending(true)
    setNotice(null)
    try {
      const result = await write()
      if (result !== 'cancelled') after?.()
    } catch (error) {
      setNotice(error.message || String(error))
    } finally {
      saving.current = false
      setPending(false)
      setPreview(null)
    }
  }

  function selectIndex(index, action) {
    if (action === 'start') {
      dragging.current = true
      return
    }
    if (action === 'cancel') {
      dragging.current = false
      setPreview(null)
      return
    }
    if (action === true) dragging.current = false
    const chosen = efforts[index]
    if (!selection || !model || !chosen || busy) return
    if (dragging.current) {
      setPreview(chosen.id)
      return
    }
    if (chosen.id === saved && (chosen.id === ULTRA_THINK
        || (selection.reasoningEffort ?? model.reasoning?.defaultEffort) === chosen.id)) {
      setPreview(null)
      return
    }
    setPreview(chosen.id)
    const wantUltra = chosen.id === ULTRA_THINK
    const target = selectionFor(selection.provider, model, wantUltra ? 'max' : chosen.id)
    void commit(() => select(target, wantUltra, roster.defaultPresetId))
  }

  function selectModel(group, nextModel) {
    function finish() {
      const back = returnToEffort.current && nextModel.reasoning?.efforts?.length
      returnToEffort.current = false
      if (back) effort.show()
      else models.close({ focus: true })
    }
    if (isSelectedModel(selection, group.id, nextModel.id)) {
      finish()
      return
    }
    const keepUltra = saved === ULTRA_THINK && highestEffort(nextModel) === 'max'
    const target = selectionFor(group.id, nextModel, keepUltra ? 'max' : undefined)
    void commit(() => select(target, keepUltra, roster.defaultPresetId), finish)
  }

  function modelLabel(group, row, placement, selected) {
    if (!group || !row) return modelName
    const badge = row.badge ? locale.resolveText(row.badge.text) : null
    return <span data-provider-id={group.id} data-model-id={row.id} data-selected={selected ? '' : undefined}>
      {placement === 'trigger' && badge && <small>{badge} </small>}{row.name}
      {placement !== 'trigger' && badge && <small> {badge}</small>}
    </span>
  }

  const report = notice ?? (state?.status === 'error' ? state.error : null)
  const modeEntry = !presetLocked && hasModes && <button type="button" className="dsh-ui-control dsh-ui-mode-trigger"
    title={modeTitle} aria-label={modeTitle} onClick={() => setChoosingMode(true)}><Icon name="mode" /></button>
  return (
    <div ref={root} className="dsh-ui-selectors" data-effort={chosen === ULTRA_THINK ? 'ultra' : chosen}
      data-starlight={SPECTRUM_TINT.has(chosen) ? '' : undefined}
      style={{ '--effort-progress': progress, '--effort-spectrum-tint': spectrumTint }}>
      {presetLocked && <SpeedButton reading={reading} stats={stats} modeName={lockedModeName}
        english={english} onOpenChange={setSpeedOpen} />}
      <button {...models.trigger} className="dsh-ui-control dsh-ui-model-trigger" disabled={busy}
        title={modelName} aria-label={`${modelTitle} · ${modelName}`}
        onClick={event => { returnToEffort.current = false; models.trigger.onClick(event) }}>
        <span>{modelLabel(provider, model, 'trigger', true)}</span>
      </button>
      {(hasEfforts || (!presetLocked && hasModes)) && <button {...effort.trigger} disabled={busy}
        className={hasEfforts ? 'dsh-ui-control dsh-ui-effort-trigger' : 'dsh-ui-control dsh-ui-mode-trigger'}
        title={hasEfforts ? effortTitle : modeTitle} aria-label={hasEfforts ? `${effortTitle} · ${effortName}` : modeTitle}>
        {hasEfforts ? effortName : <Icon name="mode" />}
      </button>}
      <div {...models.content} className="dsh-ui-popover dsh-ui-model-menu" aria-label={modelTitle}>
        <h3>{modelTitle}</h3>
        {groups.map((group) => (
          <div className="dsh-ui-provider" key={group.id} role="group" aria-label={group.name}>
            <h4>{group.name}</h4>
            {group.models.map(row => {
              const selected = isSelectedModel(selection, group.id, row.id)
              return (
                <button key={row.id} className="dsh-ui-model-row" type="button" aria-pressed={selected}
                  disabled={busy} title={row.description} onClick={() => selectModel(group, row)}>
                  <span>{modelLabel(group, row, 'option', selected)}</span>
                  {selected && <Icon name="check" />}
                </button>
              )
            })}
          </div>
        ))}
        {(state?.failures ?? []).map(failure => <p className="dsh-ui-model-message" key={failure.id}>
          {failure.name} · {failure.message}
        </p>)}
        {groups.length === 0 && <p className="dsh-ui-model-message" role="status">
          {state?.status === 'loading' ? (english ? 'Loading models…' : '正在加载模型…')
            : (english ? 'No models available' : '暂无可用模型')}
        </p>}
        {reload && (state?.status === 'error' || (groups.length === 0 && state?.status !== 'loading'))
          && <button className="dsh-ui-retry" type="button" onClick={reload}>{english ? 'Reload' : '重新加载'}</button>}
        {report && <p className="dsh-ui-model-message" role="alert">{report}</p>}
      </div>
      <EffortPanel popover={effort} efforts={efforts} index={position} modelName={modelName} english={english}
        busy={busy} report={report} selectIndex={selectIndex}
        modeTitle={modeTitle} modeEntry={modeEntry} showingModes={showingModes} closeModes={() => setChoosingMode(false)}
        modeOptions={!presetLocked && hasModes && <PresetOptions roster={roster} selected={selectedPreset} editable={presetMutable}
          busy={busy} english={english} choose={id => { void commit(() => selectPreset(id, roster.defaultPresetId)) }} />}
        openModels={() => { returnToEffort.current = true; models.show() }}
        reset={() => {
          if (!model || !selection) return
          void commit(() => select(selectionFor(selection.provider, model), false, roster.defaultPresetId))
        }}
      />
      {report && !models.open && !effort.open && <span className="dsh-ui-control-notice" role="alert">{report}</span>}
    </div>
  )
}

function getSelectionState(binding, directory, values, fallbackPreset) {
  const { session } = binding
  const state = directory.store.getSnapshot()
  const snapshot = session.getSnapshot()
  const projection = key => values?.[key] ?? session.projections.faceOf(key).getSnapshot()
  const selection = state.current ?? projection('modelSelection')?.next
  const team = projection('agentTeam')
  const presetMutable = canChangePreset(snapshot)
  const preset = projection('agentPreset') ?? fallbackPreset
  return { selection, presetMutable, preset, teamEnabled: team?.enabled,
    lastUsed: projection('modelSelection')?.lastUsed ?? null }
}

async function saveSelection({ binding, directory, remote, ultraMemory, english, target, wantUltra = false,
  presetId, fallbackPreset, staged = false }) {
  const presetIsMutable = () => canChangePreset(binding.session.getSnapshot())
  const save = async () => {
    let values
    if (staged) {
      if (!presetIsMutable()) return 'cancelled'
      if (target) await directory.load()
      const result = await remote.session.projections({ sessionId: binding.sessionId })
      if (!result.ok) throw new Error(result.error.message)
      values = result.value?.values
    }
    const before = getSelectionState(binding, directory, values, fallbackPreset)
    const result = await changeSelection({
      directory, sessionId: binding.sessionId, remote, before, next: target, wantUltra, presetId,
      savedUltra: ultraMemory.get(binding.sessionId), presetIsMutable,
      confirmDisable: () => disableTeam(english),
      lockedMessage: english ? 'The mode is locked once the first message is sent.' : '首条消息发出后，模式已锁定。',
    })
    if (result.status === 'saved') ultraMemory.set(binding.sessionId, result.ultraState)
    return result.status
  }
  const earlier = selectionWrites.get(binding.sessionId)
  const pending = earlier ? earlier.then(save, save) : save()
  selectionWrites.set(binding.sessionId, pending)
  try {
    return await pending
  } finally {
    if (selectionWrites.get(binding.sessionId) === pending) selectionWrites.delete(binding.sessionId)
  }
}

export function ComposerModel({ binding, directory, locale, remote, sessions, ultraMemory, locked }) {
  const english = useLanguage(locale) === 'en'
  const state = useStore(directory.store)
  const snapshot = useStore(binding.session)
  const sessionsSnapshot = useStore(sessions.list)
  const projections = binding.session.projections
  const team = useStore(projections.faceOf('agentTeam'))
  const projectedPreset = useStore(projections.faceOf('agentPreset'))
  const stats = useStore(projections.faceOf('sessionStats'))
  const ordinaryMax = useSyncExternalStore(ultraMemory.subscribe, () => ultraMemory.get(binding.sessionId)?.ordinaryMax === true)
  const reading = useOutputSpeed(binding)
  const summary = sessionsSnapshot?.byId[binding.sessionId]
  const root = snapshot.subagent === null && summary?.origin !== 'subagent'
  const mutable = canChangePreset(snapshot)
  const presetLocked = snapshot.blank === false || summary?.blank === false
  const preset = projectedPreset === undefined ? summary?.projectionValues?.agentPreset : projectedPreset
  const model = modelIn(state.groups, state.current)
  const roster = usePresetRoster(remote)
  const allowsUltra = ultraAvailable(model, root, team, mutable, remote, roster.presets)
  const mode = ultraActive({ selection: state.current, model, teamEnabled: team?.enabled,
    canChangePreset: mutable, preset, root, ordinaryMax })
  useEffect(() => { if (root) void directory.load().catch(() => {}) }, [directory, root])
  if (!root) return null
  const save = selection => saveSelection({ binding, directory, remote, ultraMemory, english, ...selection })
  return <ComposerControls state={state} locale={locale} english={english} roster={roster} allowsUltra={allowsUltra}
    mode={mode} locked={locked} reading={reading} stats={stats}
    presetId={preset} presetLocked={presetLocked}
    presetMutable={mutable && !presetLocked && typeof remote.agentPresets.select === 'function'}
    reload={() => { void directory.load().catch(() => {}) }}
    select={(target, wantUltra, fallbackPreset) => save({ target, wantUltra, fallbackPreset })}
    selectPreset={(presetId, fallbackPreset) => save({ presetId, fallbackPreset })}
  />
}

export function ModelPreselection({ sessionId, locale, remote, sessions, modelDirectories, conversation, ultraMemory }) {
  const english = useLanguage(locale) === 'en'
  const [catalog, setCatalog] = useState({ status: 'loading', groups: [] })
  const [staged, setStaged] = useState(null)
  const selectedDraft = useRef(null)
  const roster = usePresetRoster(remote)

  async function load(signal) {
    setCatalog(previous => ({ ...previous, status: 'loading' }))
    try {
      const result = await remote.session.modelCatalog()
      if (signal?.aborted) return
      if (result.ok) setCatalog({ ...result.value, current: result.value.default, status: 'ready' })
      else setCatalog(previous => ({ ...previous, status: 'error', error: result.error.message }))
    } catch (error) {
      if (!signal?.aborted) setCatalog(previous => ({ ...previous, status: 'error', error: error.message }))
    }
  }

  useEffect(() => {
    if (sessionId) return
    const lifetime = new AbortController()
    void load(lifetime.signal)
    return () => lifetime.abort()
  }, [remote, sessionId])

  useLayoutEffect(() => {
    if (!sessionId || !staged || selectedDraft.current === staged) return
    const binding = sessions.binding(sessionId)
    if (!binding) return
    const directory = modelDirectories.directoryFor(sessionId)
    selectedDraft.current = staged
    setStaged(null)
    void saveSelection({ binding, directory, remote, ultraMemory, english, ...staged, staged: true }).catch(error => {
      if (sessions.binding(sessionId) === binding) conversation.input.for(binding.ctx).notify('error', error.message)
    })
  }, [sessionId, staged])

  if (sessionId) return null
  const state = { ...catalog, current: staged?.target ?? catalog.current }
  const model = modelIn(state.groups, state.current)
  const allowsUltra = ultraAvailable(model, true, {}, true, remote, roster.presets)
  return <div className="dsh-ui-preselection" onClick={event => event.stopPropagation()}>
    <ComposerControls state={state} locale={locale} english={english} roster={roster} allowsUltra={allowsUltra}
      mode={staged?.wantUltra === true} locked={false} reload={() => { void load() }}
      presetId={staged?.wantUltra ? 'ptc' : staged?.presetId}
      presetMutable={typeof remote.agentPresets.select === 'function'}
      select={async (target, wantUltra, fallbackPreset) => {
        setStaged(previous => ({ ...previous, target, wantUltra, fallbackPreset }))
        return 'saved'
      }}
      selectPreset={async (presetId, fallbackPreset) => {
        setStaged(previous => ({ ...previous, presetId, fallbackPreset, wantUltra: false }))
        return 'saved'
      }}
    />
  </div>
}

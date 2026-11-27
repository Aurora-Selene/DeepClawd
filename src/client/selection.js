export const ULTRA_THINK = 'ultra-think'

const presetNames = new Map([
  ['standard', ['标准模式', 'Standard mode']],
  ['ptc', ['PTC 模式', 'PTC mode']],
  ['minimal', ['极简模式', 'Minimal mode']],
  ['cordis', ['创作者模式', 'Creator mode']],
])

export function presetName(id, presets, english) {
  return presets.find(preset => preset.id === id)?.name ?? presetNames.get(id)?.[english ? 1 : 0] ?? id
}

export function availablePresets(roster) {
  const presets = roster.presets.filter(preset => preset.broken === undefined)
  const defaultPresetId = presets.find(preset => preset.id === roster.defaultPresetId)?.id
    ?? presets.find(preset => preset.isDefault)?.id
  return { presets, defaultPresetId }
}

export function modelIn(groups, selection) {
  return groups.find(group => group.id === selection?.provider)?.models.find(model => model.id === selection.model)
}

export function highestEffort(model) {
  return model?.reasoning?.efforts?.at(-1)?.id
}

export function reasoningEffortFor(model, preferred) {
  const reasoning = model?.reasoning
  const efforts = reasoning?.efforts ?? []
  return efforts.find(level => level.id === preferred)?.id
    ?? efforts.find(level => level.id === reasoning.defaultEffort)?.id
    ?? efforts[0]?.id
}

export function isSelectedModel(selection, provider, modelId) {
  return selection?.provider === provider && selection?.model === modelId
}

export function ultraAvailable(model, root, team, canChangePreset, remote, presets = []) {
  return root && highestEffort(model) === 'max' && team !== undefined
    && typeof remote?.agentTeams?.setEnabled === 'function'
    && (!canChangePreset || (typeof remote?.agentPresets?.select === 'function'
      && presets.some(preset => preset.id === 'ptc' && preset.broken === undefined)))
}

export function ultraActive({ selection, model, teamEnabled, canChangePreset, preset, root, ordinaryMax }) {
  return !ordinaryMax && root && highestEffort(model) === 'max'
    && reasoningEffortFor(model, selection?.reasoningEffort) === 'max'
    && teamEnabled === true && (!canChangePreset || preset === 'ptc')
}

export function canChangePreset(snapshot) {
  return snapshot.blank === true && snapshot.awaitingFirstTurn !== true
    && (snapshot.pendingSubmissions?.length ?? 0) === 0
}

export function selectionFor(provider, model, preferred) {
  const effort = reasoningEffortFor(model, preferred)
  return { provider, model: model.id, ...(effort === undefined ? {} : { reasoningEffort: effort }) }
}

function requireSuccess(result) {
  if (!result.ok) {
    const error = new Error(result.error?.message ?? 'Selection was rejected')
    error.code = result.error?.code
    throw error
  }
  return result.value
}

export function createUltraMemory() {
  const fallback = new Map()
  const listeners = new Set()
  const prefix = 'dsh-ui.ultra.'
  const key = sessionId => prefix + sessionId
  return {
    subscribe(listener) {
      listeners.add(listener)
      const onStorage = event => {
        if (event.key === null || event.key.startsWith(prefix)) listener()
      }
      globalThis.addEventListener?.('storage', onStorage)
      return () => {
        listeners.delete(listener)
        globalThis.removeEventListener?.('storage', onStorage)
      }
    },
    get(sessionId) {
      if (fallback.has(sessionId)) return fallback.get(sessionId)
      try {
        const saved = JSON.parse(localStorage.getItem(key(sessionId)))
        if (saved === null || typeof saved !== 'object') return undefined
        if (saved.ordinaryMax === true) return { ordinaryMax: true }
        const ordinaryPreset = typeof saved.ordinaryPreset === 'string' ? saved.ordinaryPreset : undefined
        if (ordinaryPreset !== undefined || saved.enabledTeam === true) return { ordinaryPreset, enabledTeam: saved.enabledTeam === true }
      } catch { /* A missing or invalid record confers no ownership. */ }
    },
    set(sessionId, value) {
      try {
        if (value === undefined) localStorage.removeItem(key(sessionId))
        else localStorage.setItem(key(sessionId), JSON.stringify(value))
        fallback.delete(sessionId)
      } catch {
        fallback.set(sessionId, value)
      }
      for (const listener of listeners) listener()
    },
  }
}

/**
 * Persist a composite selection through the native model, preset and team verbs.
 * Completed writes are compensated in reverse order if a later verb fails.
 */
export async function changeSelection({
  directory, sessionId, remote, before, next, wantUltra, savedUltra, confirmDisable,
  presetIsMutable, presetId, lockedMessage,
}) {
  const rollbacks = []
  let ordinaryPreset = savedUltra?.ordinaryPreset
  let enabledTeam = savedUltra?.enabledTeam === true
  const disableOwnedTeam = !wantUltra && enabledTeam && before.teamEnabled === true
  if (disableOwnedTeam && before.lastUsed !== null && !confirmDisable()) {
    return { status: 'cancelled', ultraState: savedUltra }
  }

  async function commit(write, undo) {
    const result = await write()
    requireSuccess(result)
    if (undo) rollbacks.push(undo)
  }

  const selectPreset = id => remote.agentPresets.select(sessionId, id)
  const selectTeam = enabled => remote.agentTeams.setEnabled(sessionId, enabled)
  async function changePreset(id, previousId, allowLock = true) {
    try {
      await commit(() => selectPreset(id), async () => {
        if (previousId !== undefined && presetIsMutable()) requireSuccess(await selectPreset(previousId))
      })
      return true
    } catch (error) {
      // A first message can lock the preset between the Client check and the Host call.
      if (allowLock && error.code === 'agent-preset/locked') return false
      throw error
    }
  }

  try {
    const previousPreset = before.preset
    if (presetId !== undefined) {
      if (!before.presetMutable || !presetIsMutable()) throw new Error(lockedMessage ?? 'The session mode is locked')
      const targetPreset = wantUltra ? 'ptc' : presetId
      if (targetPreset !== before.preset) await changePreset(targetPreset, previousPreset, false)
      ordinaryPreset = wantUltra ? presetId : undefined
    } else if (wantUltra && before.presetMutable && presetIsMutable() && before.preset !== 'ptc') {
      if (await changePreset('ptc', previousPreset)) ordinaryPreset = previousPreset
    } else if (!wantUltra && before.presetMutable && presetIsMutable() && before.preset === 'ptc'
        && ordinaryPreset !== undefined && ordinaryPreset !== 'ptc') {
      await changePreset(ordinaryPreset, 'ptc')
    }

    if (wantUltra && before.teamEnabled === false) {
      await commit(() => selectTeam(true), async () => requireSuccess(await selectTeam(false)))
      enabledTeam = true
    } else if (disableOwnedTeam) {
      await commit(() => selectTeam(false), async () => requireSuccess(await selectTeam(true)))
    }

    const previous = before.selection
    if (next && (previous?.provider !== next.provider || previous?.model !== next.model
        || previous?.reasoningEffort !== next.reasoningEffort)) {
      requireSuccess(await directory.select(next))
    }
    let ultraState
    if (wantUltra && (ordinaryPreset !== undefined || enabledTeam)) ultraState = { ordinaryPreset, enabledTeam }
    // Both levels use native max. Remember an explicit Max choice even when Team stays enabled.
    if (!wantUltra && (next ?? previous)?.reasoningEffort === 'max') ultraState = { ordinaryMax: true }
    return { status: 'saved', ultraState }
  } catch (error) {
    const rollbackErrors = []
    for (const rollback of rollbacks.reverse()) {
      try { await rollback() } catch (failure) { rollbackErrors.push(failure.message) }
    }
    if (rollbackErrors.length > 0) {
      throw new Error(`${error.message} (${rollbackErrors.join(' · ')})`, { cause: error })
    }
    throw error
  }
}

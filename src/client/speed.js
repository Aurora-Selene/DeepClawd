const WINDOW_MS = 2200
const LIVE_HOLD_MS = 1400
const MIN_SAMPLE_MS = 200

function deltaText(chunk) {
  if (chunk.type === 'text-delta' || chunk.type === 'reasoning-delta') return chunk.text
  if (chunk.type === 'tool-call-delta') return (chunk.name ?? '') + (chunk.argumentsDelta ?? '')
  return ''
}

function estimateTokens(text) {
  const nonAscii = text.match(/[^\x00-\x7f]/gu)?.length ?? 0
  return (text.length - nonAscii) / 4 + nonAscii
}

/** Read the first output timestamp from a native compact AssistantStreamRecord. */
function firstDeltaTime(stream = []) {
  for (const record of stream) {
    if (record.type === 'chunk') {
      if (deltaText(record.chunk)) return record.time
      continue
    }
    const deltas = record.type === 'tool-call-chunks' ? record.args : record.texts
    let time = record.time0
    for (let index = 0; index < (deltas?.length ?? 0); index += 1) {
      if (index > 0) time += record.dt[index - 1]
      if (deltas[index] || (index === 0 && record.type === 'tool-call-chunks' && record.name !== undefined)) return time
    }
  }
  return undefined
}

export function decodeRate(tokens, elapsedMs) {
  return Number.isFinite(tokens) && tokens >= 0 && Number.isFinite(elapsedMs) && elapsedMs > 0
    ? tokens * 1000 / elapsedMs : null
}

export function speedIntensity(rate) {
  return Number.isFinite(rate) ? Math.max(0, Math.min(1, (rate - 18) / (100 - 18))) : 0
}

/** Folds the same SessionBinding event source that supplies native Chat. */
export class OutputSpeed {
  #active
  #recent = null
  #step

  observe({ change }) {
    if (change.kind === 'prepend') return
    if (change.kind === 'replace') {
      this.#active = undefined
      this.#recent = null
      this.#step = undefined
    }
    if (change.kind === 'settle-assistant') {
      if (change.entry) this.#accept(change.entry.event)
      if (this.#active?.id === change.attemptId) this.#active = undefined
      return
    }
    for (const { event } of change.entries) this.#accept(event)
  }

  #accept(event) {
    const data = event.data
    if (event.type === 'assistant/live-chunk') {
      const text = deltaText(data.chunk)
      if (!text) return
      if (this.#active?.id !== data.attemptId) this.#active = { id: data.attemptId, samples: [] }
      const samples = this.#active.samples
      samples.push({ time: event.time, tokens: estimateTokens(text) })
      while (samples.length > 1 && samples[0].time < event.time - WINDOW_MS) samples.shift()
      if (this.#step?.first === undefined && this.#step?.turn === data.turn && this.#step?.step === data.step) {
        this.#step.first = event.time
      }
    } else if (event.type === 'step/start') {
      this.#step = { turn: data.turn, step: data.step, first: undefined }
      this.#active = undefined
    } else if (event.type === 'assistant/attempt' || event.type === 'assistant/message') {
      const step = this.#step?.turn === data.turn && this.#step?.step === data.step ? this.#step : undefined
      const first = step?.first ?? firstDeltaTime(data.stream)
      if (event.type === 'assistant/message') {
        const rate = decodeRate(data.usage?.outputTokens, event.time - first)
        if (rate !== null) this.#recent = rate
      } else if (step && first !== undefined) {
        step.first = first
      }
      this.#active = undefined
    } else if (event.type === 'step/end' || event.type === 'turn/end') {
      this.#active = undefined
      this.#step = undefined
    }
  }

  sample(now, stats) {
    const samples = this.#active?.samples ?? []
    const latest = samples.at(-1)
    const streaming = latest !== undefined && now - latest.time <= LIVE_HOLD_MS
    if (streaming) {
      const active = samples.filter(sample => sample.time >= now - WINDOW_MS)
      const first = active[0]
      const span = first ? latest.time - first.time : 0
      if (active.length > 1 && span >= MIN_SAMPLE_MS) {
        const tokens = active.slice(1).reduce((total, sample) => total + sample.tokens, 0)
        return { kind: 'live', rate: decodeRate(tokens, Math.max(span, now - first.time)) }
      }
    }
    if (this.#recent !== null) return { kind: 'recent', rate: this.#recent }
    const aggregate = decodeRate(stats?.decodeTokens, stats?.decodeMs)
    return aggregate === null ? { kind: 'waiting', rate: null } : { kind: 'session', rate: aggregate }
  }
}

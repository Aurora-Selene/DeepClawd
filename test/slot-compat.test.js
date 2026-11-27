import assert from 'node:assert/strict'
import test from 'node:test'
import { hasModelExtensions, MODEL_EXTENSIONS, needsNativeSessionPanel, PANEL_SECTION,
  registerWhen } from '../src/client/slot-compat.js'

test('the native model owner is restored when an extension appears and releases it on removal', () => {
  const entries = new Map([[MODEL_EXTENSIONS[1], [{ options: { id: 'agent-team' }, locale: 'agent-team' }]]])
  const subscriptions = new Map()
  let enhanced = false
  const slots = {
    entriesOfSlot: key => entries.get(key) ?? [],
    inject: (_key, setup) => setup(),
    subscribe(key, update) {
      subscriptions.set(key, update)
      return () => subscriptions.delete(key)
    },
  }
  const stop = registerWhen(slots, 'conversation.input.model', MODEL_EXTENSIONS, () => !hasModelExtensions(slots), () => {
    enhanced = true
    return () => { enhanced = false }
  })
  assert(enhanced)
  entries.set(MODEL_EXTENSIONS[0], [{ options: {} }])
  subscriptions.get(MODEL_EXTENSIONS[0])()
  assert.equal(enhanced, false)
  entries.delete(MODEL_EXTENSIONS[0])
  subscriptions.get(MODEL_EXTENSIONS[0])()
  assert(enhanced)
  stop()
  assert.equal(enhanced, false)
  assert.equal(subscriptions.size, 0)
})

test('an unknown section or a section with child slots needs the original panel owner', () => {
  const native = { options: { id: 'subagents' } }
  let sections = [native]
  const slots = { entriesOfSlot: key => key === PANEL_SECTION ? sections : [] }
  assert.equal(needsNativeSessionPanel(slots), false)
  sections = [native, { options: { id: 'another-plugin' } }]
  assert.equal(needsNativeSessionPanel(slots), true)
  sections = [native, { options: { id: 'shared-tasks' }, children: { 'fixture.row': {} } }]
  assert.equal(needsNativeSessionPanel(slots), true)
})

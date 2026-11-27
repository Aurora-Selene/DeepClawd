import assert from 'node:assert/strict'
import test from 'node:test'
import { canGroupTool } from '../src/client/transcript.js'

test('tool groups leave rich output and custom renderers with the native tool owner', () => {
  const plain = { name: 'bash', content: [{ type: 'text', text: 'completed' }] }
  const stock = new Map([['bash', 'bash-toolview-sample']])
  assert.equal(canGroupTool(plain, stock), true)
  assert.equal(canGroupTool(plain, new Map([['bash', 'tool-extension']])), false)
  assert.equal(canGroupTool({ ...plain, name: 'unknown__bash' }, stock), false)
  assert.equal(canGroupTool({ ...plain, content: [{ type: 'image', mimeType: 'image/png', data: 'fixture' }] }, stock), false)
  assert.equal(canGroupTool({ ...plain, content: { unexpected: true } }, stock), false)
  assert.equal(canGroupTool({ ...plain, subCalls: [{ name: 'audit_extension' }] }, stock), false)
  assert.equal(canGroupTool({ ...plain, subCalls: [{ name: 'read' }] }, stock), true)
})

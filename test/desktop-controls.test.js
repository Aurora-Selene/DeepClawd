import assert from 'node:assert/strict'
import test from 'node:test'
import { contextComposition, contextUsage } from '../src/client/context.js'
import { fileTabRole, inspectorView } from '../src/client/inspector-tabs.js'
import { composerShift } from '../src/client/motion.js'
import { orderPermissionOptions, permissionOption, selectPermission } from '../src/client/permission.js'
import { isSelectedModel, reasoningEffortFor, selectionFor } from '../src/client/selection.js'
import { PROJECT_ICONS, sidebarSessionLists, sidebarStatus, workspaceIcon } from '../src/client/sidebar.js'

test('approval options use the native permission command for every catalog mode', async () => {
  assert.equal(permissionOption({ value: 'workspace-write' }, false).title, '自动接受编辑')
  assert.equal(permissionOption({ value: 'read-only' }, false).title, '监督')
  assert.equal(permissionOption({ value: 'auto' }, true).title, 'Auto')
  assert.equal(permissionOption({ value: 'danger-full-access' }, false).title, '完全访问')
  const catalog = ['read-only', 'workspace-write', 'danger-full-access', 'auto', 'custom']
  assert.deepEqual(orderPermissionOptions(catalog.map(value => ({ value }))).map(row => row.value),
    ['read-only', 'workspace-write', 'auto', 'danger-full-access', 'custom'])
  assert.deepEqual(permissionOption({ value: 'custom', name: 'Lab', description: 'Custom policy' }, true),
    { value: 'custom', icon: 'reviewAsk', title: 'Lab', description: 'Custom policy' })
  for (const mode of catalog) {
    await selectPermission({ command: cmd => {
      assert.equal(cmd, `/permission ${mode}`)
      return { ok: true, value: { matched: true } }
    } }, mode)
  }
  await assert.rejects(selectPermission({ command: () => ({ ok: false, error: { message: 'Denied' } }) }, 'workspace-write'), /Denied/)
  await assert.rejects(selectPermission({ command: () => ({ ok: true, value: { matched: false } }) }, 'workspace-write'), /did not accept/)
})

test('the sidebar recognizes six project icons and only enhances genuine native status states', () => {
  assert.equal(PROJECT_ICONS.length, 6)
  for (const [value] of PROJECT_ICONS) assert.equal(workspaceIcon(value), value)
  assert.equal(workspaceIcon('invalid'), 'folder')
  assert.equal(sidebarStatus('ongoing'), 'running')
  assert.equal(sidebarStatus('warning'), 'waiting')
  assert.equal(sidebarStatus('done'), 'unread')
  assert.equal(sidebarStatus('idle'), undefined)
})

test('sidebar history keeps native pin order, separates archives and hides blank drafts', () => {
  const byId = {
    first: { id: 'first', updatedAt: 10 },
    newer: { id: 'newer', updatedAt: 20 },
    archived: { id: 'archived', updatedAt: 30 },
    draft: { id: 'draft', updatedAt: 40, blank: true },
    child: { id: 'child', updatedAt: 45, origin: 'subagent' },
  }
  const workspace = { title: 'Fixture', sessionIds: ['first', 'archived'] }
  const lists = sidebarSessionLists({ ids: Object.keys(byId), byId }, {
    items: [workspace], pinnedSessionIds: ['first', 'archived', 'newer', 'draft', 'missing'], archivedSessionIds: ['archived'],
  })
  assert.deepEqual(lists.recent.map(row => row.session.id), ['newer', 'first'])
  assert.deepEqual(lists.pinned.map(row => row.session.id), ['first', 'newer'])
  assert.deepEqual(lists.archived, [{ session: byId.archived, workspace }])
  assert.equal(lists.recent[1].workspace, workspace)
})

test('context pressure prefers projected tokens and handles old and saturated projections', () => {
  assert.deepEqual(contextUsage({ projectedTokens: 200, pressureTokens: 5, contextWindow: 1_000 }),
    { used: 200, limit: 1_000, percent: 20, ratio: 0.2 })
  assert.deepEqual(contextUsage({ pressureTokens: 1_245, contextWindow: 1_000 }),
    { used: 1_245, limit: 1_000, percent: 100, ratio: 1 })
  assert.equal(contextUsage({ projectedTokens: 9, contextWindow: 0 }), null)
  assert.equal(contextUsage({ contextWindow: 100 }), null)
})

test('context composition proportions use the breakdown estimate and handle missing or empty data', () => {
  assert.deepEqual(contextComposition({ systemTokens: 30, toolsTokens: 10, messageTokens: 60 }), [
    { kind: 'system', tokens: 30, share: 0.3 },
    { kind: 'tools', tokens: 10, share: 0.1 },
    { kind: 'messages', tokens: 60, share: 0.6 },
  ])
  assert.deepEqual(contextComposition(null), [])
  assert.deepEqual(contextComposition({ systemTokens: 0, toolsTokens: 0, messageTokens: 0 }), [])
  assert.deepEqual(contextComposition({ systemTokens: 30, toolsTokens: 10 }), [])
})

test('Composer animates the same session from hero to dock and skips normal navigation', () => {
  const before = { phase: 'hero', sessionId: 'same', rect: { left: 300, top: 190 } }
  const after = { phase: 'active', sessionId: 'same', rect: { left: 320, top: 650 } }
  assert.deepEqual(composerShift(before, after), { x: -20, y: -460 })
  assert.equal(composerShift(before, { ...after, phase: 'hero' }), null)
  assert.equal(composerShift(before, { ...after, sessionId: 'different' }), null)
})

test('reasoning menus keep valid choices and recover missing or unsupported catalog values', () => {
  const model = { id: 'flash', reasoning: {
    defaultEffort: 'high', efforts: [{ id: 'off' }, { id: 'high' }, { id: 'max' }],
  } }
  const selection = selectionFor('deepseek', model, 'max')
  assert.equal(reasoningEffortFor(model, selection.reasoningEffort), 'max')
  assert.equal(reasoningEffortFor(model, 'off'), 'off')
  assert.equal(reasoningEffortFor(model), 'high')
  assert.deepEqual(selectionFor('deepseek', model, 'legacy-tier'),
    { provider: 'deepseek', model: 'flash', reasoningEffort: 'high' })
  const configured = { ...model, reasoning: { efforts: model.reasoning.efforts.slice(1), defaultEffort: 'legacy-tier' } }
  assert.equal(reasoningEffortFor(configured), 'high')
  assert.deepEqual(selectionFor('other', { id: 'text-only' }), { provider: 'other', model: 'text-only' })
  assert.equal(isSelectedModel(selection, 'deepseek', model.id), true)
  assert.equal(isSelectedModel(selection, 'other', model.id), false)
})

test('the inspector separates native file changes, document previews and terminal panes', () => {
  const review = { kind: 'changes-review', contentId: 'dsh-resource://changes-review/session/example/5/1' }
  const word = { kind: 'document-preview', contentId: 'dsh-resource://file/session/example/report.docx' }
  assert.equal(inspectorView(review), 'diff')
  assert.equal(inspectorView({ kind: 'forge-changes' }), 'diff')
  assert.equal(fileTabRole(review), undefined)
  assert.equal(inspectorView(word), 'files')
  assert.equal(fileTabRole(word), 'preview')
  assert.equal(inspectorView({ kind: 'terminal' }), 'terminal')
  assert.equal(inspectorView({ kind: 'third-party' }), 'third-party')
})

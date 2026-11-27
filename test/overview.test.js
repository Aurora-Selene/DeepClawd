import assert from 'node:assert/strict'
import test from 'node:test'
import { diffPreview, localChangesAddress, mergeContextPages, readWorkspaceGit, relativeFileAddress, subagentProject } from '../src/client/overview-data.js'

test('project context pages update repeated rows without duplicating them', () => {
  assert.deepEqual(mergeContextPages([{ sessionId: 'x', status: 'missing' }, { sessionId: 'y' }],
    [{ sessionId: 'x', status: 'sequenced' }, { sessionId: 'z' }]),
    [{ sessionId: 'x', status: 'sequenced' }, { sessionId: 'y' }, { sessionId: 'z' }])
})

test('subagent project references follow delegated ancestry to a registered project', () => {
  const project = { title: 'Project', sessionIds: ['root'] }
  const summaries = {
    nested: { origin: 'subagent', parentId: 'root' },
    orphan: { origin: 'subagent', parentId: 'child' },
    fork: { origin: 'fork', parentId: 'root' },
  }
  assert.equal(subagentProject([project], summaries, 'child', 'nested'), project)
  assert.equal(subagentProject([project], summaries, 'child', 'orphan'), undefined)
  assert.equal(subagentProject([project], summaries, 'child', 'fork'), undefined)
})

test('workspace files use native session resource addresses and escape path components', () => {
  assert.equal(relativeFileAddress('session #1', './dir/a #b?.md'),
    'dsh-resource://file/session/session%20%231/dir/a%20%23b%3F.md')
  assert.equal(relativeFileAddress('x', 'dir\\file.ts'), 'dsh-resource://file/session/x/dir/file.ts')
})

test('the right panel uses the native Forge address for the current checkout', () => {
  assert.equal(localChangesAddress('session/#1'), 'dsh-resource://forge-changes/session%2F%231/local')
})

test('workspace Git recovers from a stale host through the native Forge readers', async t => {
  t.mock.method(globalThis, 'fetch', async () => Response.json({ status: 'git-unavailable' }, { status: 503 }))
  const signal = new AbortController().signal
  const query = { workspaceId: 'workspace', sessionId: 'session' }
  const diff = { files: [], omitted: 0 }
  const forge = {
    worktreeBases: async (...args) => {
      assert.deepEqual(args, ['session', '', signal])
      return { ok: true, value: { current: { name: 'main' } } }
    },
    localDiff: async (...args) => {
      assert.deepEqual(args, ['session', { kind: 'uncommitted' }, signal])
      return { ok: true, value: diff }
    },
  }
  assert.deepEqual(await readWorkspaceGit(forge, query, signal), { status: 'ready', current: 'main' })
  assert.deepEqual(await readWorkspaceGit(forge, { ...query, diff: 1 }, signal), { status: 'ready', diff })
  forge.worktreeBases = async () => ({ ok: true, value: { current: null } })
  assert.deepEqual(await readWorkspaceGit(forge, query, signal), { status: 'ready', current: undefined })
  forge.worktreeBases = async () => ({ ok: false, error: { code: 'forgePanel/not-a-checkout' } })
  assert.deepEqual(await readWorkspaceGit(forge, query, signal), { status: 'no-checkout' })
})

test('workspace Git preserves workspace checks and native diff limits', async t => {
  let status = 404
  t.mock.method(globalThis, 'fetch', async () => status === 404
    ? Response.json({ error: 'session-not-in-workspace' }, { status })
    : Response.json({ status: 'git-unavailable' }, { status }))
  const signal = new AbortController().signal
  const query = { workspaceId: 'workspace', sessionId: 'session', diff: 1 }
  const localDiff = t.mock.fn(async () => ({ ok: false, error: { code: 'forgePanel/diff-too-large' } }))
  await assert.rejects(readWorkspaceGit({ localDiff }, query, signal), { code: 'session-not-in-workspace' })
  assert.equal(localDiff.mock.callCount(), 0)
  status = 503
  await assert.rejects(readWorkspaceGit({ localDiff }, query, signal), { code: 'diff-too-large' })
  assert.equal(localDiff.mock.callCount(), 1)
})

test('workspace Git falls back for an old text 404 and respects an authorization denial', async t => {
  let status = 404
  t.mock.method(globalThis, 'fetch', async () => new Response('Unavailable', { status }))
  const signal = new AbortController().signal
  const query = { workspaceId: 'workspace', sessionId: 'session' }
  const worktreeBases = t.mock.fn(async () => ({ ok: true, value: { current: { name: 'main' } } }))
  assert.deepEqual(await readWorkspaceGit({ worktreeBases }, query, signal), { status: 'ready', current: 'main' })
  for (status of [401, 403]) await assert.rejects(readWorkspaceGit({ worktreeBases }, query, signal), { status })
  assert.equal(worktreeBases.mock.callCount(), 1)
})

test('Git preview renders real hunk headers, additions and removals and counts clipped lines', () => {
  const hunks = [{ oldStart: 2, oldLines: 2, newStart: 2, newLines: 2, lines: [' context', '-old', '+new'] }]
  assert.deepEqual(diffPreview(hunks), { rows: [{ kind: 'header', text: '@@ -2,2 +2,2 @@' },
    { kind: 'context', text: ' context' }, { kind: 'remove', text: '-old' }, { kind: 'add', text: '+new' }], omitted: 0 })
  assert.equal(diffPreview(hunks, 2).omitted, 2)
  assert.deepEqual(diffPreview([]), { rows: [], omitted: 0 })
})

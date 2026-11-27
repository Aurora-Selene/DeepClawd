import assert from 'node:assert/strict'
import test from 'node:test'
import { describeTools, isToolActive, liveAnswerStep, reasoningBlocks, summarizeToolOutput, THINKING_PERIOD, THINKING_SHAPES,
  thinkingWord, toolCategory, toolDescription, toolRows, turnActivity, workBatches } from '../src/client/transcript.js'

test('the reference thinking cycle has four points in eight different shapes', () => {
  assert.equal(THINKING_PERIOD, 2050)
  assert.equal(THINKING_SHAPES.length, 8)
  assert.equal(new Set(THINKING_SHAPES.map(shape => JSON.stringify(shape))).size, 8)
  assert(THINKING_SHAPES.every(shape => shape.length === 4))
  assert.equal(thinkingWord('zh-CN', undefined, () => 0), '深潜中…')
  assert.equal(thinkingWord('zh-CN', '深潜中…', () => 0), '求索中…')
  assert.equal(thinkingWord('en', undefined, () => 0), 'Diving…')
  assert.equal(thinkingWord('en', 'Diving…', () => 0), 'Seeking…')
})

test('native event activity shows thought and tools and clears the cue for the streamed answer', () => {
  const events = []
  const add = (type, data = {}) => events.push({ event: { type, data: { turn: 8, ...data } } })
  add('turn/start')
  assert.equal(turnActivity(events), '8:pending')
  add('assistant/live-chunk', { chunk: { type: 'reasoning-delta', text: 'Think' } })
  add('assistant/live-chunk', { chunk: { type: 'usage' } })
  assert.equal(turnActivity(events), '8:thinking')
  add('tool/call')
  assert.equal(turnActivity(events), '8:tools')
  add('tool/result')
  add('assistant/message', { message: { content: [{ type: 'tool-call' }] } })
  assert.equal(turnActivity(events), '8:tools')
  add('step/start')
  assert.equal(turnActivity(events), '8:pending')
  add('assistant/live-chunk', { chunk: { type: 'text-delta', text: 'Answer' } })
  assert.equal(turnActivity(events), '8:streaming')
  add('llm/retry')
  assert.equal(turnActivity(events), '8:retry')
  add('llm/retry-started')
  assert.equal(turnActivity(events), '8:pending')
  add('turn/end')
  assert.equal(turnActivity(events), '')
})

test('tool signals recognize all six classes in native and namespaced tool rows', () => {
  for (const [name, category] of Object.entries({ fs_search: 'search', read_file: 'read', bash: 'command',
    str_replace_editor: 'write', apply_patch: 'diff', mcp__browser__preview_render: 'review' })) {
    assert.equal(toolCategory(name), category)
  }
  assert.equal(toolCategory('custom', 'read'), 'read')
  assert.equal(toolCategory('exit_plan_mode'), 'review')
  assert.equal(toolCategory('unknown'), undefined)
})

test('the live tool label prefers the task description and fits it onto one line', () => {
  const args = { textPrefix: key => ({ title: '  ', description: ' Check\nrepo availability ', command: 'git status' })[key] }
  assert.equal(toolDescription({ args }), 'Check repo availability')
  assert.equal(toolDescription({}), undefined)
})

test('tool groups count file targets, include nested calls, and distinguish failure and stop', () => {
  const read = { callId: 'r', name: 'read_file', kind: 'tool-result', meta: { path: 'a', lines: [{ text: 'fixture' }] }, args: {
    value: key => key === 'paths' ? ['src/app.js', 'test/app.test.js', 'src/app.js'] : undefined,
    text: () => undefined,
    textPrefix: () => undefined,
  } }
  const bash = { callId: 'b', name: 'bash', kind: 'tool-result',
    content: [{ type: 'text', text: 'No output\n[exit code: 9]' }] }
  const preview = { callId: 'p', name: 'preview_render', phase: 'preparing' }
  const patch = { callId: 'd', name: 'apply_patch', kind: 'tool-result', isError: true, error: { code: 'interrupted' },
    subCalls: [preview] }
  const project = closed => toolRows([read, bash, patch].map(root => ({ root })), closed)
  assert.equal(describeTools(project(false), 'zh-CN'), '读取 2 个文件 · 运行命令 · 查看改动 · 预览结果')
  assert.equal(describeTools(project(false), 'en'), 'Read 2 files · Run command · View changes · Preview result')
  assert.equal(project(false).findLast(isToolActive).root.callId, 'p')
  assert.equal(summarizeToolOutput(project(false)[0], 'zh-CN'), '已读取 1 行')
  assert.deepEqual(project(true).map(row => row.state), ['done', 'error', 'stopped', 'stopped'])
  assert.equal(project(false).at(-1).depth, 1)
})

test('reasoning keeps the original text and tool preambles stay above the final answer', () => {
  const note = { step: 1, blocks: [
    { kind: 'reasoning', text: '<signature>wire metadata</signature>\nLook up the path.' },
    { kind: 'text', text: 'I will inspect the file.' },
    { kind: 'tool-call' },
  ] }
  const answer = { step: 2, blocks: [{ kind: 'reasoning', text: '  Keep this format.\n' }, { kind: 'text', text: 'Answer' }] }
  assert.deepEqual(reasoningBlocks([note, answer]), ['Look up the path.', '  Keep this format.\n'])
  assert.equal(liveAnswerStep([note], 1), undefined)
  assert.equal(liveAnswerStep([note, answer], 2), 2)
  assert.equal(liveAnswerStep([note, answer], 3), undefined)
})

test('continuous work starts a new batch after six root calls and keeps each call with its children', () => {
  const thought = (key, text) => ({ key, kind: 'assistant-step', data: { blocks: [{ kind: 'reasoning', text }] } })
  const calls = Array.from({ length: 7 }, (_, index) => ({
    key: `tool-${index}`, kind: 'tool-call', data: { root: { callId: String(index), name: 'bash' } },
  }))
  calls[5].data.root.subCalls = [{ callId: 'child', name: 'read_file' }]
  const start = thought('start', 'Inspect the workspace.')
  const next = thought('next', 'Check the changed files.')
  const running = workBatches([start, ...calls.slice(0, 6), next], false)
  const settled = workBatches([start, ...calls.slice(0, 6), next, calls[6]], true)

  assert.deepEqual(running.map(batch => batch.key), ['start', 'next'])
  assert.deepEqual(settled.map(batch => batch.key), ['start', 'next'])
  assert.deepEqual(settled.map(batch => batch.texts), [['Inspect the workspace.'], ['Check the changed files.']])
  assert.deepEqual(settled.map(batch => batch.rows.map(({ root }) => root.callId)),
    [['0', '1', '2', '3', '4', '5', 'child'], ['6']])
  assert.equal(describeTools(settled[0].rows, 'zh-CN'), '运行 6 条命令 · 读取文件')
  assert.equal(running[1].rows.length, 0)
})

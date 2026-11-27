const thinkingCatalogs = {
  'zh-CN': [
    '深潜中…',
    '求索中…',
    '鲸游中…',
    '喷水中…',
    '探海中…',
    '打捞答案…',
    '潜水中…',
    '追浪花中…',
    '数浪花中…',
    '听海浪中…',
    '深呼吸中…',
    '鲸歌吟唱…',
    '下潜千米…',
    '触底反弹…',
    '寻宝中…',
    '破浪前行…',
    '探索深渊…',
    '捞灵感中…',
    '深思熟虑…',
    '鲸心设计…',
    '鲸心打磨…',
    '吐泡泡中…',
    '翻海底中…',
    '追洋流中…',
    '捉迷藏中…',
    '摇尾巴中…',
    '晒鲸背中…',
    '蹭珊瑚中…',
    '逛海底城…',
    '搜寻珍珠…',
    '深度思考中…',
    '深度求索中…',
    '精益求鲸中…',
    '鲸喜酝酿中…',
    '一鲸惊人中…',
    '鲸诚思考中…',
    '钓大鱼中…',
    '织渔网中…',
    '数鱼群中…',
    '躲暗礁中…',
    '避漩涡中…',
    '查海图中…',
    '升锚中…',
    '扬帆中…',
    '起航中…',
    '灯塔亮起…',
    '潮汐计算…',
    '海底捞针…',
    '挖珍珠中…',
    '浮出水面…',
  ],
  en: [
    'Diving…',
    'Seeking…',
    'Surfacing…',
    'Swimming…',
    'Splashing…',
    'Submerging…',
    'Exploring…',
    'Fathoming…',
    'Plunging…',
    'Treading…',
    'Sounding…',
    'Trawling…',
    'Netting…',
    'Fishing…',
    'Drifting…',
    'Floating…',
    'Bubbling…',
    'Spouting…',
    'Breaching…',
    'Wading…',
    'Snorkeling…',
    'Delving…',
    'Probing…',
    'Plumbing…',
    'Sailing…',
    'Anchoring…',
    'Charting…',
    'Navigating…',
    'Foraging…',
    'Dredging…',
    'Pearling…',
    'Reefing…',
    'Clamming…',
    'Musseling…',
    'Surfing…',
    'Deepening…',
    'Whaling…',
    'Orcastrating…',
    'Finishing…',
    'Whalecoming…',
    'Seaing…',
    'Krilling…',
    'Tidying…',
    'Gliding…',
    'Rippling…',
    'Echoing…',
    'Pinging…',
    'Marinating…',
    'Pondering…',
    'Lighthousing…',
  ],
}
export const THINKING_PERIOD = 2050
export const THINKING_SHAPES = [
  // Pulse, diamond, cross, and rising trail.
  [[-8.5, 0, .76], [0, 0, 1.16], [8.5, 0, .76], [0, 0, .4, .4, 0, 0]],
  [[-8, 0], [0, -7], [8, 0], [0, 7]],
  [[-5.5, 0, 2.1, .62], [0, -5.5, .62, 2.1], [5.5, 0, 2.1, .62], [0, 5.5, .62, 2.1]],
  [[-9, 5.5, .6, .6, 0, .64], [-4, 2.5, .86], [1.5, -1, 1.42, .68, -35], [8, -5.5, 1.5, .82, -35]],
  // Orbit, sound bars, triangle, and pinwheel.
  [[-8, -3, 1.25, .72, -35], [2.5, -6, .8], [8, 3, 1.25, .72, -35], [-2.5, 6, .8]],
  [[-8.4, 1, .66, 1.2], [-2.8, 0, .68, 3.1], [2.8, -.8, .68, 2.15], [8.4, .6, .66, 1.45]],
  [[-8, 5.5], [0, -7, 1.22], [8, 5.5], [0, 2, .65, .65, 0, .62]],
  [[-5.7, -4.3, 1.9, .67, 39], [5.7, -4.3, 1.9, .67, -39], [5.7, 4.3, 1.9, .67, 39], [-5.7, 4.3, 1.9, .67, -39]]
]

export function thinkingWord(language, previous, random = Math.random) {
  const pool = thinkingCatalogs[language] ?? thinkingCatalogs.en
  const choices = pool.filter(word => word !== previous)
  return choices[Math.floor(random() * choices.length)]
}

// The event tail distinguishes thought and tool activity from the streamed answer.
export function turnActivity(entries) {
  for (let index = entries.length - 1; index >= 0; index -= 1) {
    const { type, data } = entries[index].event
    if (!Number.isSafeInteger(data?.turn)) continue
    const prefix = `${data.turn}:`
    switch (type) {
      case 'turn/end': return ''
      case 'turn/start':
      case 'step/start':
      case 'llm/retry-started': return `${prefix}pending`
      case 'llm/retry': return `${prefix}retry`
      case 'tool/call':
      case 'tool/result': return `${prefix}tools`
      case 'assistant/message': {
        const content = data.message?.content
        if (Array.isArray(content) && content.some(row => row.type === 'tool-call')) return `${prefix}tools`
        return `${prefix}streaming`
      }
      case 'assistant/live-chunk': {
        const chunk = data.chunk
        if (chunk?.type === 'reasoning-delta' && chunk.text) return `${prefix}thinking`
        if (chunk?.type === 'tool-call-delta') return `${prefix}tools`
        if (chunk?.type === 'text-delta' && chunk.text?.trim()) return `${prefix}streaming`
        break
      }
    }
  }
  return ''
}

const tools = {
  search: ['fs_search', 'grep', 'glob', 'search', 'web_search', 'session_search', 'session_event_search'],
  read: ['read', 'read_file', 'read_files', 'read_image', 'read_document', 'fs_read', 'web_fetch', 'session_event_read'],
  command: ['bash', 'exec', 'exec_command', 'shell', 'terminal', 'terminal_exec', 'terminal_open', 'terminal_input'],
  write: ['write', 'write_file', 'fs_write', 'edit', 'str_replace_editor', 'todo_write', 'str_replace', 'edit_file'],
  diff: ['diff', 'apply_patch', 'git_diff', 'workspace_diff'],
  review: ['preview', 'review', 'plan_review', 'exit_plan_mode', 'preview_open', 'preview_render', 'preview_snapshot', 'html_render', 'office_render', 'ask_user_question'],
}

const toolNames = new Map(Object.entries(tools).flatMap(([category, names]) => names.map(name => [name, category])))

const textToolViews = new Map([
  ['bash', 'bash-toolview-sample'],
  ['read', 'read-toolview'],
  ['write', 'file-mutation-toolview'],
  ['edit', 'file-mutation-toolview'],
  ['todo_write', 'todo-toolview'],
  ['web_search', 'web-toolview'],
  ['web_fetch', 'web-toolview'],
  ['grep', 'search-toolview'],
  ['glob', 'search-toolview'],
  ['fs_search', 'search-toolview'],
  ['apply_patch', 'file-mutation-toolview'],
])

export function canGroupTool(root, renderers) {
  const expected = textToolViews.get(root?.name)
  if (expected === undefined) return false
  const renderer = renderers.get(root.name)
  return (renderer === undefined || renderer === expected)
    && (root.content === undefined || (Array.isArray(root.content) && root.content.every(block => block?.type === 'text')))
    && (root.subCalls === undefined || (Array.isArray(root.subCalls) && root.subCalls.every(child => canGroupTool(child, renderers))))
}

export function toolCategory(name, variant) {
  return toolNames.get(name?.split('__').at(-1)) ?? toolNames.get(variant)
}

const toolLabels = {
  search: ['搜索资料', count => `搜索 ${count} 次`, 'Search materials', count => `Run ${count} searches`],
  read: ['读取文件', count => `读取 ${count} 个文件`, 'Read files', count => `Read ${count} files`],
  command: ['运行命令', count => `运行 ${count} 条命令`, 'Run command', count => `Run ${count} commands`],
  write: ['写入文件', count => `写入 ${count} 个文件`, 'Write file', count => `Write ${count} files`],
  diff: ['查看改动', count => `查看 ${count} 处改动`, 'View changes', count => `Review ${count} changes`],
  review: ['预览结果', count => `预览 ${count} 次`, 'Preview result', count => `Preview ${count} times`],
  tool: ['调用工具', count => `调用 ${count} 次工具`, 'Call tool', count => `Make ${count} tool calls`],
}

export function toolLabel(category, language, count = 1) {
  const [single, plural] = toolLabels[category].slice(language === 'en' ? 2 : 0)
  return count === 1 ? single : plural(count)
}

export function describeTools(rows, language) {
  const counts = new Map()
  for (const { category, files } of rows) {
    counts.set(category, (counts.get(category) ?? 0) + (files.length || 1))
  }
  return Array.from(counts, ([category, count]) => toolLabel(category, language, count)).join(' · ')
}

export function isToolActive({ state }) {
  return state === 'preparing' || state === 'running'
}

export function toolDescription({ args }) {
  for (const field of ['title', 'description', 'objective', 'task', 'task_name', 'message']) {
    const text = args?.textPrefix(field, 144)?.replace(/\s+/g, ' ').trim()
    if (text) return text
  }
}

function toolFiles(args, category, name) {
  if (!['read', 'write', 'diff', 'review'].includes(category) || name === 'web_fetch') return []
  const files = ['paths', 'files'].flatMap(key => {
    const list = args?.value(key)
    return Array.isArray(list) ? list.map(file => typeof file === 'string' ? file : file?.path) : []
  })
  const path = ['path', 'file_path', 'file', 'filename'].map(key => args?.text(key)).find(Boolean)
  if (path) files.push(path)
  if (name === 'apply_patch') {
    const patch = args?.text('patch') ?? args?.text('input') ?? ''
    for (const [, file] of patch.matchAll(/^\*\*\* (?:Add File|Update File|Move to): (.+)$/gm)) files.push(file)
  }
  return Array.from(new Set(files.filter(file => typeof file === 'string' && file.trim())))
}

function toolResultText(root, category) {
  const text = root.content?.filter(block => block.type === 'text').map(block => block.text).join('\n') ?? ''
  const exitCode = root.meta?.exitCode ?? (category === 'command' ? text.match(/\[exit code: (-?\d+)\]\s*$/i)?.[1] : undefined)
  const signal = root.meta?.signal ?? (category === 'command' ? text.match(/\[killed by signal: ([^\]\n]+)\]\s*$/i)?.[1] : undefined)
  const failed = root.isError || (exitCode != null && Number(exitCode) !== 0) || signal != null
  const output = root.error?.reason
    ? [root.error.reason, text].filter(Boolean).join('\n')
    : text
  return { output, failed }
}

export function toolRows(calls, closed) {
  const rows = []
  function add(root, depth) {
    const name = root.name?.split('__').at(-1)
    const category = toolCategory(name) ?? 'tool'
    const files = toolFiles(root.args, category, name)
    const target = ['command', 'cmd', 'query', 'pattern', 'url', 'path', 'description']
      .map(field => root.args?.textPrefix(field, 360)).find(Boolean)
    const { output, failed } = toolResultText(root, category)
    const stopped = ['interrupted', 'ASK_ABORTED', 'TOOL_ABORTED'].includes(root.error?.code)
    const state = root.kind === 'tool-result'
      ? stopped ? 'stopped' : failed ? 'error' : 'done'
      : closed ? 'stopped' : root.phase === 'preparing' ? 'preparing' : 'running'
    rows.push({ root, name, category, files, target, state, output, depth })
    for (const child of root.subCalls ?? []) add(child, depth + 1)
  }
  for (const { root } of calls) add(root, 0)
  return rows
}

export function summarizeToolOutput({ root, output }, language) {
  const lineCount = root.meta?.lines?.length
  if (Number.isSafeInteger(lineCount) && root.meta?.path && !root.isError) {
    return language === 'en'
      ? `Read ${lineCount} ${lineCount === 1 ? 'line' : 'lines'}`
      : `已读取 ${lineCount} 行`
  }
  const body = output.match(/^<path>[^\n]*<\/path>\n<type>[^\n]*<\/type>\n<content>\n([\s\S]*)\n<\/content>$/)?.[1] ?? output
  return body.trim().split('\n', 1)[0].slice(0, 180)
}

export function reasoningBlocks(steps) {
  return steps.flatMap(({ blocks }) => blocks.flatMap(block => {
    if (block.kind !== 'reasoning') return []
    // Provider signatures are protocol metadata and are hidden by DSH's native row too.
    const signature = '<signature>'
    const raw = block.text
    if (signature.startsWith(raw)) return []
    if (!raw.startsWith(signature)) return raw.trim() ? [raw] : []
    const end = raw.indexOf('</signature>', signature.length)
    const text = end < 0 ? '' : raw.slice(end + '</signature>'.length).replace(/^(?:\r?\n)+/, '')
    return text.trim() ? [text] : []
  }))
}

const TOOL_BATCH_SIZE = 6

// A native process group already ends at a reply or interleaved input.
// Bound the number of root calls in a long group while keeping each call's children with it.
export function workBatches(members, closed) {
  const batches = []
  let batch
  for (const { key, kind, data } of members) {
    const call = kind === 'tool-call' ? data : null
    const texts = call ? [] : reasoningBlocks([data])
    if (!call && !texts.length) continue
    if (!batch || batch.calls.length === TOOL_BATCH_SIZE) {
      batch = { key, calls: [], texts: [] }
      batches.push(batch)
    }
    if (call) batch.calls.push(call)
    else batch.texts.push(...texts)
  }
  return batches.map(({ key, calls, texts }) => ({ key, rows: toolRows(calls, closed), texts }))
}

export function liveAnswerStep(steps, lastStep) {
  const step = steps.at(-1)
  if (!step || (lastStep !== undefined && step.step !== lastStep)) return undefined
  const answer = step.blocks.some(block => block.kind === 'text' ? block.text.trim() : block.kind === 'image' || block.kind === 'other')
  return answer && !step.blocks.some(block => block.kind === 'tool-call') ? step.step : undefined
}

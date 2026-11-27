export async function readInspector(route, query, signal) {
  const response = await fetch(`/api/deepseek-ui/${route}?${new URLSearchParams(query)}`, { signal })
  const body = await response.json().catch(error => {
    signal?.throwIfAborted()
    if (response.ok) throw error
    return null
  })
  if (!response.ok) {
    const code = body?.status ?? body?.error ?? (response.status === 404 ? 'inspector-route-unavailable' : undefined)
    throw Object.assign(new Error(`Inspector request failed (${response.status})`), { code, status: response.status })
  }
  return body
}

export async function readWorkspaceGit(forge, query, signal) {
  try {
    return await readInspector('git', query, signal)
  } catch (error) {
    // The desktop client can reload while the host is still serving an older Inspector route.
    const withDiff = query.diff === 1
    const read = withDiff ? forge?.localDiff : forge?.worktreeBases
    if (error.status === 401 || error.status === 403
        || !['git-unavailable', 'forge-unavailable', 'inspector-route-unavailable'].includes(error.code)
        || typeof read !== 'function') throw error

    signal.throwIfAborted()
    const result = await read.call(forge, query.sessionId, withDiff ? { kind: 'uncommitted' } : '', signal)
    signal.throwIfAborted()
    if (result.ok) return withDiff ? { status: 'ready', diff: result.value }
      : { status: 'ready', current: result.value.current?.name }
    if (result.error.code === 'forgePanel/not-a-checkout') return { status: 'no-checkout' }
    const code = result.error.code === 'forgePanel/diff-too-large' ? 'diff-too-large' : result.error.code
    throw Object.assign(new Error(result.error.message), { code })
  }
}

export function mergeContextPages(previous, items) {
  return [...new Map([...previous, ...items].map(item => [item.sessionId, item])).values()]
}

export function subagentProject(workspaces, summaries, sessionId, parentId) {
  const visited = new Set([sessionId])
  while (parentId && !visited.has(parentId)) {
    visited.add(parentId)
    const workspace = workspaces?.find(item => item.sessionIds.includes(parentId))
    if (workspace) return workspace
    const parent = summaries?.[parentId]
    parentId = parent?.origin === 'subagent' ? parent.parentId : undefined
  }
}

export function relativeFileAddress(sessionId, path) {
  const parts = path.replaceAll('\\', '/').replace(/^(?:\.\/)+/, '').split('/')
  const encoded = parts.map(part => encodeURIComponent(part).replace(/%3A/giu, ':')).join('/')
  return `dsh-resource://file/session/${encodeURIComponent(sessionId)}/${encoded}`
}

export function localChangesAddress(sessionId) {
  return `dsh-resource://forge-changes/${encodeURIComponent(sessionId)}/local`
}

export function diffPreview(hunks, limit = 240) {
  const rows = []
  let total = 0
  for (const hunk of hunks) {
    total += hunk.lines.length + 1
    if (rows.length >= limit) continue
    rows.push({ kind: 'header', text: `@@ -${hunk.oldStart},${hunk.oldLines} +${hunk.newStart},${hunk.newLines} @@` })
    for (const line of hunk.lines.slice(0, limit - rows.length)) {
      const kind = line.startsWith('+') ? 'add' : line.startsWith('-') ? 'remove' : 'context'
      rows.push({ kind, text: line })
    }
  }
  return { rows, omitted: Math.max(0, total - rows.length) }
}

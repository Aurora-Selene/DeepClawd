const ROUTE_ROOT = '/api/deepseek-ui'
const PAGE_SIZE = 16
const MAX_PAGE_SIZE = 32
const PROJECTION_CONCURRENCY = 4

function json(value, status = 200) {
  return Response.json(value, { status, headers: { 'cache-control': 'no-store' } })
}

function integer(query, key, fallback, minimum, maximum) {
  const raw = query.get(key)
  if (raw === null) return fallback
  const value = Number(raw)
  return /^\d+$/u.test(raw) && Number.isSafeInteger(value) && value >= minimum && value <= maximum ? value : null
}

async function readContext(controller, sessionId, signal) {
  try {
    const projection = await controller.projections({ sessionId }, signal)
    signal.throwIfAborted()
    if (projection === null) return null
    const metadata = projection.values.sessionListMetadata
    if (metadata?.blank === true && metadata.lastPromptAt == null) return null
    return {
      sessionId,
      status: projection.kind,
      ...(projection.kind === 'sequenced' ? { asOfSeq: projection.asOfSeq } : {}),
      contextPressure: projection.values.contextPressure ?? null,
      contextBreakdown: projection.values.contextBreakdown ?? null,
    }
  } catch {
    signal.throwIfAborted()
    return { sessionId, status: 'unavailable', contextPressure: null, contextBreakdown: null }
  }
}

export async function workspaceContext(ctx, request) {
  const query = new URL(request.url).searchParams
  const workspaceId = query.get('workspaceId')
  const offset = integer(query, 'offset', 0, 0, Number.MAX_SAFE_INTEGER)
  const cursor = query.get('cursor')
  const limit = integer(query, 'limit', PAGE_SIZE, 1, MAX_PAGE_SIZE)
  if (!workspaceId || offset === null || limit === null || cursor === '') return json({ error: 'invalid-query' }, 400)

  const workspace = ctx.workspaceRegistry.get(workspaceId)
  if (workspace === undefined) return json({ error: 'workspace-not-found' }, 404)
  const archived = new Set(ctx.workspaceRegistry.archivedSessionIds)
  const members = workspace.sessionIds.filter(id => !archived.has(id))
  let start = offset
  if (cursor !== null) {
    const index = workspace.sessionIds.indexOf(cursor)
    if (index < 0) return json({ error: 'workspace-cursor-changed' }, 409)
    // Resolve against the full workspace list even if the anchor itself was archived.
    start = workspace.sessionIds.slice(0, index).filter(id => !archived.has(id)).length
  }
  const items = []
  for (let index = start; index < members.length;) {
    request.signal.throwIfAborted()
    const count = Math.min(PROJECTION_CONCURRENCY, limit - items.length + 1)
    const group = members.slice(index, index + count)
    const page = await Promise.all(group.map(id => readContext(ctx.sessionController, id, request.signal)))
    for (const [position, item] of page.entries()) {
      if (item === null) continue
      // Find the next displayable session before advertising another page.
      if (items.length === limit) return json({ workspaceId, items, nextCursor: members[index + position], nextOffset: index + position })
      items.push(item)
    }
    index += group.length
  }
  return json({ workspaceId, items, nextCursor: null, nextOffset: null })
}

export async function workspaceGit(ctx, request) {
  const query = new URL(request.url).searchParams
  const workspaceId = query.get('workspaceId')
  const sessionId = query.get('sessionId')
  const withDiff = query.get('diff')
  if (!workspaceId || !sessionId || ![null, '0', '1'].includes(withDiff)) {
    return json({ error: 'invalid-query' }, 400)
  }

  const workspace = ctx.workspaceRegistry.get(workspaceId)
  if (workspace === undefined || !workspace.sessionIds.includes(sessionId)) {
    return json({ error: 'session-not-in-workspace' }, 404)
  }
  const forge = ctx.get('forgePanel')
  if (forge === undefined) return json({ status: 'forge-unavailable' }, 503)
  const session = ctx.sessions.get(sessionId)
  if (session === undefined) return json({ status: 'session-inactive' }, 404)

  try {
    for await (const { checkout } of forge.follow(session, request.signal)) {
      request.signal.throwIfAborted()
      if (checkout.state === 'pending') continue
      if (checkout.state === 'none') return json({ status: 'no-checkout' })
      if (checkout.state !== 'ready') break
      const diff = withDiff === '1'
        ? await forge.localDiff(session, { kind: 'uncommitted' }, request.signal)
        : undefined
      return json({ status: 'ready', workspaceId, sessionId, current: checkout.checkout.branch, ...(diff ? { diff } : {}) })
    }
    return json({ status: 'git-unavailable' }, 503)
  } catch (error) {
    request.signal.throwIfAborted()
    const code = error?.code
    if (code === 'forgePanel/not-a-checkout') return json({ status: 'no-checkout' })
    if (code === 'forgePanel/diff-too-large') return json({ status: 'diff-too-large' }, 413)
    return json({ status: 'git-unavailable' }, 503)
  }
}

export function registerInspectorRoutes(ctx) {
  // Connection's exact Fetch routes are authenticated and owner-only.
  const lifetime = new AbortController()
  ctx.effect(() => () => lifetime.abort(), 'deepseek-ui: inspector lifetime')
  for (const [path, handler] of [['context', workspaceContext], ['git', workspaceGit]]) {
    ctx.connection.fetch.register({
      path: `${ROUTE_ROOT}/${path}`,
      methods: ['GET'],
      requestBody: 'buffered',
      fetch: request => handler(ctx, new Request(request, {
        signal: AbortSignal.any([request.signal, lifetime.signal]),
      })),
    })
  }
}

export const PROJECT_ICONS = [
  ['folder', '文件夹', 'Folder'],
  ['server', '服务器', 'Server'],
  ['globe', '地球', 'Globe'],
  ['book', '书籍', 'Book'],
  ['code', '代码', 'Code'],
  ['layers', '叠层', 'Layers'],
]

export const PROJECT_ICON_STORAGE = 'dsh-deepseek-ui.workspace-icon.'

export function workspaceIcon(value) {
  return PROJECT_ICONS.some(([icon]) => icon === value) ? value : 'folder'
}

const nativeStates = new Map([['ongoing', 'running'], ['warning', 'waiting'], ['done', 'unread']])

export function sidebarStatus(state) {
  return nativeStates.get(state)
}

export function isListedChat(session) {
  return Boolean(session && !session.blank && session.origin !== 'subagent')
}

export function sidebarSessionLists(list, workspaceState) {
  const workspaceBySession = new Map()
  for (const workspace of workspaceState?.items ?? []) {
    for (const id of workspace.sessionIds) workspaceBySession.set(id, workspace)
  }

  const archivedIds = new Set(workspaceState?.archivedSessionIds)
  const catalog = new Map()
  for (const id of list?.ids ?? []) {
    const session = list.byId[id]
    if (isListedChat(session)) {
      catalog.set(id, { session, workspace: workspaceBySession.get(id) })
    }
  }

  const recent = []
  const archived = []
  for (const row of [...catalog.values()].sort((a, b) => b.session.updatedAt - a.session.updatedAt)) {
    (archivedIds.has(row.session.id) ? archived : recent).push(row)
  }
  const pinned = []
  for (const id of new Set(workspaceState?.pinnedSessionIds)) {
    const row = catalog.get(id)
    if (row && !archivedIds.has(id)) pinned.push(row)
  }
  return { recent, archived, pinned }
}

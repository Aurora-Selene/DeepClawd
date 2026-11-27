import { useId, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Icon, useStore } from './ui.jsx'
import { sidebarSessionLists } from './sidebar.js'

function historyTitle(session, english) {
  return session.title?.trim() || (english ? 'Untitled chat' : '未命名会话')
}

function PinnedSession({ session, selected, activity, english, uiWorkspace, remoteAccess, renderFactorySlot, onUnpin, onError }) {
  const { id } = session
  const canUnpin = useStore(useMemo(() => remoteAccess.source('session', id, 'workspace/unpinSession'), [remoteAccess, id]))
  const [busy, setBusy] = useState(false)
  const title = historyTitle(session, english)
  const unpin = english ? `Unpin · ${title}` : `取消置顶 · ${title}`
  const target = { kind: 'session', value: { sessionId: id, displayTitle: title } }
  const state = activity?.pendingInteraction ? 'warning'
    : (activity?.running ?? session.running) ? 'ongoing' : activity?.completionUnread ? 'done' : undefined

  async function removePin(event) {
    const hadFocus = document.activeElement === event.currentTarget
    onError('')
    setBusy(true)
    try {
      await uiWorkspace.unpinSession(id)
      if (hadFocus) onUnpin()
    } catch {
      onError(english ? 'Could not unpin this chat.' : '无法取消置顶。')
    } finally {
      setBusy(false)
    }
  }

  return <div className="dsh-ui-pinned-row" data-dsh-ui-pinned-session={id}>
    {!state && canUnpin && <button type="button" className="dsh-ui-control dsh-ui-pinned-unpin" aria-label={unpin} title={unpin}
      disabled={busy} onClick={removePin}><Icon name="pin" /></button>}
    <button type="button" className="dsh-ui-pinned-chat" aria-current={selected || undefined} title={title}
      onClick={() => uiWorkspace.openSession(id)}>
      <span className="dsh-ui-pinned-leading" aria-hidden="true">
        {state ? <span data-state={state} /> : !canUnpin && <Icon name="pin" />}
      </span>
      <span className="dsh-ui-pinned-title">{title}</span>
    </button>
    {renderFactorySlot('contextMenu.button', {
      target,
      label: english ? `Chat actions · ${title}` : `会话操作 · ${title}`,
      className: 'dsh-ui-control dsh-ui-pinned-actions',
    })}
  </div>
}

function ArchivedSession({ row, english, uiWorkspace, remoteAccess, onError }) {
  const { session, workspace } = row
  const { id } = session
  const canRestore = useStore(useMemo(() => remoteAccess.source('session', id, 'workspace/unarchiveSession'), [remoteAccess, id]))
  const [busy, setBusy] = useState(false)
  const title = historyTitle(session, english)
  const restoreLabel = english ? 'Restore chat' : '恢复会话'

  async function restore() {
    onError('')
    setBusy(true)
    try {
      await uiWorkspace.unarchiveSession(id)
    } catch {
      onError(english ? 'Could not restore this chat.' : '无法恢复会话。')
    } finally {
      setBusy(false)
    }
  }

  return <div className="dsh-ui-history-row" data-dsh-ui-history-session={id}>
    <span className="dsh-ui-history-title" title={title}>{title}</span>
    {workspace?.title && <small title={workspace.title}>{workspace.title}</small>}
    {canRestore && <button type="button" className="dsh-ui-control" aria-label={`${restoreLabel} · ${title}`} title={restoreLabel}
      disabled={busy} onClick={restore}><Icon name="restore" /></button>}
  </div>
}

export function SidebarSessions({ seats, english, sessions, workspaces, uiWorkspace, layout, sessionStatus, remoteAccess, renderFactorySlot }) {
  const list = useStore(sessions.list)
  const workspaceState = useStore(workspaces.list)
  const panel = useStore(layout.panelInfo)
  const activity = useStore(sessionStatus)
  const history = useMemo(() => sidebarSessionLists(list, workspaceState), [list, workspaceState])
  const [pinnedOpen, setPinnedOpen] = useState(true)
  const [pinnedError, setPinnedError] = useState('')
  const [shown, setShown] = useState(false)
  const [archived, setArchived] = useState(false)
  const [historyError, setHistoryError] = useState('')
  const pinnedSummary = useRef(null)
  const dialog = useRef(null)
  const dialogId = useId()
  const recentLabel = english ? 'Recent chats' : '最近会话'
  const pinnedLabel = english ? 'Pinned chats' : '置顶会话'
  const archiveLabel = english ? 'Archived chats' : '已归档会话'
  const closeLabel = english ? 'Close' : '关闭'
  const unassigned = english ? 'No project' : '未关联项目'
  const loading = list?.phase !== 'ready' || workspaceState?.phase !== 'ready'
  const loadingLabel = english ? 'Loading chats…' : '正在加载会话…'
  const emptyHistory = english ? 'No chats found.' : '暂无会话。'
  const visible = archived ? history.archived : history.recent

  function showRecent() {
    setArchived(false)
    setHistoryError('')
    dialog.current.showModal()
    setShown(true)
  }

  return <>
    {seats.recent && createPortal(<button type="button" className="dsh-ui-sidebar-recents" aria-haspopup="dialog"
      aria-controls={dialogId} aria-expanded={shown} onClick={showRecent}>
      <Icon name="recents" /><span>{recentLabel}</span>
    </button>, seats.recent)}
    {seats.pinned && createPortal(<details className="dsh-ui-pinned-group" open={pinnedOpen}
      onToggle={event => setPinnedOpen(event.currentTarget.open)}>
      <summary ref={pinnedSummary} className="dsh-ui-pinned-heading"><span>{pinnedLabel}</span><Icon name="next" /></summary>
      <div className="dsh-ui-pinned-list">
        {history.pinned.map(({ session }) => <PinnedSession key={session.id} session={session} english={english}
          selected={panel?.activePanelId == null && (session.retainedBy?.mainView ?? 0) > 0} activity={activity?.get(session.id)}
          uiWorkspace={uiWorkspace} remoteAccess={remoteAccess} renderFactorySlot={renderFactorySlot}
          onUnpin={() => pinnedSummary.current?.focus({ preventScroll: true })} onError={setPinnedError} />)}
        {history.pinned.length === 0 && <p className="dsh-ui-sidebar-empty">{loading ? loadingLabel : english ? 'No pinned chats.' : '暂无置顶会话。'}</p>}
        {pinnedError && <p className="dsh-ui-sidebar-error" role="status">{pinnedError}</p>}
      </div>
    </details>, seats.pinned)}
    {createPortal(<dialog ref={dialog} id={dialogId} className="dsh-ui-history-dialog" data-shortcut-modal="sidebar-history"
      aria-labelledby={`${dialogId}-title`} onClose={() => setShown(false)}
      onClick={event => {
        if (event.target !== event.currentTarget) return
        const { left, top, right, bottom } = event.currentTarget.getBoundingClientRect()
        if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) dialog.current.close()
      }}>
      <div className="dsh-ui-history-head">
        <h2 id={`${dialogId}-title`}>{archived ? archiveLabel : recentLabel}</h2>
        <button type="button" className="dsh-ui-control" aria-label={closeLabel} onClick={() => dialog.current.close()}><Icon name="close" /></button>
      </div>
      {shown && <div key={archived ? 'archived' : 'recent'} className="dsh-ui-history-results">
        {!visible.length && <p className="dsh-ui-sidebar-empty">{loading ? loadingLabel : emptyHistory}</p>}
        {visible.map(row => {
          const { session, workspace } = row
          if (archived) return <ArchivedSession key={session.id} row={row} english={english} uiWorkspace={uiWorkspace}
            remoteAccess={remoteAccess} onError={setHistoryError} />
          const title = historyTitle(session, english)
          return <button key={session.id} type="button" className="dsh-ui-history-row" data-dsh-ui-history-session={session.id}
            onClick={() => { dialog.current.close(); uiWorkspace.openSession(session.id) }}>
            <span className="dsh-ui-history-title" title={title}>{title}</span>
            <small title={workspace?.title || unassigned}>{workspace?.title || unassigned}</small>
          </button>
        })}
      </div>}
      {historyError && <p className="dsh-ui-sidebar-error" role="status">{historyError}</p>}
      <div className="dsh-ui-history-footer">
        <button type="button" className="dsh-ui-control" onClick={() => { setHistoryError(''); setArchived(!archived) }}>
          {archived ? (english ? 'Back to recent chats' : '返回最近会话') : (english ? 'View archived chats' : '查看已归档')}
        </button>
      </div>
    </dialog>, document.body)}
  </>
}

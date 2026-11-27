import { useEffect, useRef, useState } from 'react'
import { orderPermissionOptions, permissionOption, selectPermission } from './permission.js'
import { usePopover } from './popover.jsx'
import { Icon, useLanguage, useStore } from './ui.jsx'

export function PermissionPicker({ binding, sessions, locale, remote, locked }) {
  const english = useLanguage(locale) === 'en'
  const session = useStore(binding?.session)
  const summary = useStore(sessions.list)?.byId[binding?.sessionId]
  const current = useStore(binding?.session.projections.faceOf('permissions'))?.currentValue
  if (current === undefined) return null
  if (session?.subagent != null || summary?.origin === 'subagent') {
    const label = english ? 'Permissions managed by the subagent task' : '权限由子智能体任务管理'
    const detail = current === 'custom' ? label : `${label} · ${permissionOption({ value: current }, english).title}`
    return <span className="dsh-ui-subagent-permission" role="img" aria-label={detail} title={detail}>
      <Icon name="reviewLocked" />
    </span>
  }
  return <PermissionMenu key={binding.sessionId} binding={binding} current={current}
    english={english} remote={remote} locked={locked} />
}

function PermissionMenu({ binding, current, english, remote, locked }) {
  const popover = usePopover({ align: 'left' })
  const saving = useRef(false)
  const [catalog, setCatalog] = useState(null)
  const [catalogError, setCatalogError] = useState(false)
  const [revision, refresh] = useState(0)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    if (!popover.open) setError(null)
  }, [popover.open])

  useEffect(() => {
    const lifetime = new AbortController()
    setCatalogError(false)
    setCatalog(null)
    void remote.permissionPresets.catalog().then(result => {
      if (lifetime.signal.aborted) return
      if (result.ok) setCatalog(orderPermissionOptions(result.value.options))
      else setCatalogError(true)
    }).catch(() => { if (!lifetime.signal.aborted) setCatalogError(true) })
    return () => lifetime.abort()
  }, [remote, revision])

  useEffect(() => remote.$on('permission-presets/catalog-changed', () => {
    refresh(revision => revision + 1)
  }), [remote])

  useEffect(() => {
    if (locked) popover.close()
  }, [locked])

  const label = english ? 'Approval mode' : '审核模式'
  const currentOption = permissionOption(catalog?.find(option => option.value === current) ?? { value: current }, english)

  async function choose(value) {
    if (locked || saving.current || !catalog?.some(row => row.value === value)) return
    if (value === current) {
      popover.close({ focus: true })
      return
    }
    saving.current = true
    setBusy(true)
    setError(null)
    try {
      await selectPermission(binding.session, value)
      popover.close({ focus: true })
    } catch (cause) {
      setError(cause.message || String(cause))
    } finally {
      saving.current = false
      setBusy(false)
    }
  }

  return <>
    <button {...popover.trigger} className="dsh-ui-control dsh-ui-permission-trigger" data-mode={current}
      title={`${label} · ${currentOption.title}`} aria-label={`${label} · ${currentOption.title}`} disabled={locked || busy}>
      <Icon name={currentOption.icon} />
    </button>
    <div {...popover.content} className="dsh-ui-popover dsh-ui-permission-menu" aria-label={label}>
      {catalog?.map(row => {
        const option = permissionOption(row, english)
        return <button type="button" key={option.value} className="dsh-ui-model-row dsh-ui-permission-option"
          data-mode={option.value} aria-pressed={option.value === current} disabled={busy} onClick={() => { void choose(option.value) }}>
          <Icon name={option.icon} />
          <span>{option.title}{option.description && <small>{option.description}</small>}</span>
          {option.value === current && <Icon name="check" />}
        </button>
      })}
      {!catalog && !catalogError && <p className="dsh-ui-model-message" role="status">
        {english ? 'Loading approval modes…' : '正在加载审核模式…'}
      </p>}
      {catalogError && <button type="button" className="dsh-ui-retry" onClick={() => refresh(revision => revision + 1)}>
        {english ? 'Could not load modes · Retry' : '审核模式加载失败 · 重试'}
      </button>}
      {error && <p className="dsh-ui-model-message" role="alert">{error}</p>}
    </div>
  </>
}

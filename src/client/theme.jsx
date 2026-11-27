import { useId } from 'react'
import { themePalettes, themeStorageKey, themeSwatches } from '../theme/palette.js'
import { useLanguage, useStore } from './ui.jsx'

function readTheme() {
  try {
    return localStorage.getItem(themeStorageKey) === 'blue' ? 'blue' : 'clay'
  } catch {
    return 'clay'
  }
}

function ThemePicker({ locale, store, choose }) {
  const english = useLanguage(locale) === 'en'
  const selected = useStore(store)
  const labelId = useId()
  const labels = english ? { clay: 'Claude orange', blue: 'Whale blue' } : { clay: '克劳德橙', blue: '鲸鱼蓝' }
  return <div className="dsh-ui-theme-setting" role="group" aria-labelledby={labelId}>
    <span id={labelId}>{english ? 'Theme colors' : '主题配色'}</span>
    <div className="dsh-ui-theme-options">
      {Object.entries(labels).map(([id, label]) => (
        <button key={id} type="button" className="dsh-ui-theme-option" data-theme-option={id}
          aria-pressed={selected === id} onClick={() => choose(id)}>
          <span aria-hidden="true" style={{ backgroundColor: themeSwatches[id] }} />
          {label}
        </button>
      ))}
    </div>
  </div>
}

export function registerTheme(ctx, source) {
  let selected = readTheme()
  let disposeTokens
  const listeners = new Set()
  const store = {
    getSnapshot: () => selected,
    subscribe(listener) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
  }

  function apply() {
    document.documentElement.dataset.dshUiTheme = selected
    disposeTokens = ctx.theme.overrideTokens(source, themePalettes[selected])
  }

  function update(next) {
    if (next === selected) return
    selected = next
    apply()
    for (const listener of listeners) listener()
  }

  function choose(next) {
    if (next === selected) return
    update(next)
    try { localStorage.setItem(themeStorageKey, next) } catch { /* Keep the live selection when storage is unavailable. */ }
  }

  ctx.effect(() => {
    apply()
    const sync = event => {
      if (event.key === themeStorageKey || event.key === null) update(readTheme())
    }
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener('storage', sync)
      disposeTokens()
      delete document.documentElement.dataset.dshUiTheme
    }
  }, 'deepseek-ui: theme colors')

  ctx.slots.inject('settings.general.item', () => ctx.slots.register({
    name: 'settings.general.item', id: 'deepseek-ui.theme', order: 10.5,
    inject: () => ({ locale: ctx.locale, store, choose }),
  }, ThemePicker))
}

import { useCallback, useEffect, useState, useSyncExternalStore } from 'react'

const noValue = () => undefined
const noSubscription = () => () => {}

export function useStore(store) {
  const subscribe = useCallback(listener => store?.subscribe(listener) ?? noSubscription(), [store])
  const snapshot = useCallback(() => store?.getSnapshot(), [store])
  return useSyncExternalStore(subscribe, store ? snapshot : noValue, store ? snapshot : noValue)
}

export function useLanguage(locale) {
  return useStore(locale)?.active?.startsWith('zh') ? 'zh-CN' : 'en'
}

export function useSlotVersion(slots, keys) {
  const subscribe = useCallback(listener => {
    const subscriptions = keys.map(key => slots.subscribe(key, listener))
    return () => { for (const unsubscribe of subscriptions) unsubscribe() }
  }, [slots, keys])
  const snapshot = useCallback(() => keys.reduce((version, key) => version + slots.getVersion(key), 0), [slots, keys])
  return useSyncExternalStore(subscribe, snapshot)
}

export function useReducedMotion() {
  const [reduce, setReduce] = useState(() => globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false)
  useEffect(() => {
    const query = matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduce(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])
  return reduce
}

const glyphs = {
  plus: ['M12 5v14M5 12h14'],
  close: ['m6 6 12 12M18 6 6 18'],
  overview: ['M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM8.5 8h7m-7 4h7m-7 4H13'],
  diff: ['M6 4h9l3 3v13H6V4Zm8 0v4h4m-9 4h6m-3-3v6m-3 2h6'],
  more: ['M5 12h.01M12 12h.01M19 12h.01'],
  terminal: ['M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm1 4 3 3-3 3m6 0h4'],
  split: ['M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm6 0v14'],
  maximize: ['M9 4H4v5m11-5h5v5M4 15v5h5m11-5v5h-5'],
  search: ['M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-1.9 4.6 4.9 4.9'],
  recents: ['M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-4.5V12l3 1.8'],
  calendar: ['M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm2-1.4v3.7m8-3.7v3.7M4 10h16'],
  pin: ['m16 3 5 5-4 2-2 6-3 1-5-5 1-3 6-2 2-4ZM9.5 14.5 4 20'],
  back: ['m10 6-6 6 6 6M4 12h16'],
  next: ['m9 6 6 6-6 6'],
  mode: ['M3.5 12h4c3.8 0 3.6-5 7.4-5h5.6m-2.8-2.8L20.5 7l-2.8 2.8M7.5 12c3.8 0 3.6 5 7.4 5h5.6m-2.8-2.8 2.8 2.8-2.8 2.8'],
  zap: ['M13 3 5 14h6l-1 7 9-12h-6l1-6Z'],
  restore: ['M5 10a7 7 0 1 1 .8 7M5 5v5h5'],
  check: ['m5 12 4 4 10-10'],
  pencil: ['m5 15-1 5 5-1L20 8l-4-4L5 15Zm8-8 4 4'],
  book: ['M12 6a8 8 0 0 0-8-2v14a8 8 0 0 1 8 2m0-14a8 8 0 0 1 8-2v14a8 8 0 0 0-8 2m0-14v14'],
  code: ['m8 7-5 5 5 5m8-10 5 5-5 5m-2-12-4 14'],
  coffee: ['M4 8h12v5a6 6 0 0 1-12 0V8Zm12 1h2a2.5 2.5 0 0 1 0 5h-2M3 21h15M8 3v2m4-2v2'],
  light: ['M8 16a6.5 6.5 0 1 1 8 0v2H8Zm1 5h6'],
  folder: ['M3.5 7a2 2 0 0 1 2-2H9l2 2h7.5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z'],
  server: ['M5 4h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 9h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2ZM7 7.5h.1M7 16.5h.1'],
  globe: ['M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.5 0a3.5 8 0 1 1-7 0 3.5 8 0 1 1 7 0ZM4 12h16'],
  layers: ['m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5'],
  computer: ['M5.5 5h13A1.5 1.5 0 0 1 20 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 14.5v-8A1.5 1.5 0 0 1 5.5 5ZM2.5 19h19'],
  file: ['M6 3h8l4 4v14H6zM14 3v5h4m-9 4h6m-6 4h6'],
  branch: ['M9 5.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM19 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 7.5v9m0-4a10 10 0 0 0 10-4.5'],
  reviewAsk: ['M8 13.2V6.5a1.25 1.25 0 0 1 2.5 0v4.1M10.5 9.8V4.6a1.25 1.25 0 0 1 2.5 0v6m0-1.1V5.8a1.25 1.25 0 0 1 2.5 0v5m0-.9V8.2a1.25 1.25 0 0 1 2.5 0V14a6.3 6.3 0 0 1-10.8 4.4l-2.6-3.6a1.3 1.3 0 0 1 1.9-1.7l1.5 1.4'],
  reviewEdit: ['M12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6M9 15l.6-3.5L17 4l3 3-7.5 7.4L9 15Z'],
  reviewAuto: ['M12 3 5 6v5.4c0 4.2 2.6 7.2 7 9.6 4.4-2.4 7-5.4 7-9.6V6l-7-3Zm-3 8.8 2.2 2.2 4-4.2'],
  reviewFull: ['M7 10h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Zm1 0V7a4 4 0 0 1 7.6-1.7M12 14v3'],
  reviewLocked: ['M7 10h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Zm1 0V7a4 4 0 0 1 8 0v3m-4 4v3'],
}

export function Icon({ name, className }) {
  const [path] = glyphs[name]
  return (
    <svg className={className ? `dsh-ui-icon ${className}` : 'dsh-ui-icon'} viewBox="0 0 24 24" aria-hidden="true" fill="none"
      stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  )
}

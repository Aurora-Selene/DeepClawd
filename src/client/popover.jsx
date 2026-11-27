import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { popoverPlacement } from './popover-placement.js'

const MARGIN = 8
const GAP = 6

export function usePopover({ align = 'right' } = {}) {
  const id = useId()
  const anchor = useRef(null)
  const panel = useRef(null)
  const [open, setOpen] = useState(false)

  const place = useCallback(() => {
    const element = panel.current
    if (!anchor.current || !element?.matches(':popover-open')) return
    const button = anchor.current.getBoundingClientRect()
    const availableAbove = button.top - GAP - MARGIN
    const availableBelow = window.innerHeight - button.bottom - GAP - MARGIN
    const intrinsicHeight = element.scrollHeight + element.offsetHeight - element.clientHeight
    const { placement, maxHeight } = popoverPlacement(availableAbove, availableBelow, intrinsicHeight)
    const above = placement === 'above'
    const width = element.offsetWidth
    const left = align === 'left' ? button.left : button.right - width
    element.dataset.placement = placement
    element.style.maxHeight = `${maxHeight}px`
    element.style.left = `${Math.max(MARGIN, Math.min(left, window.innerWidth - width - MARGIN))}px`
    element.style.top = above ? 'auto' : `${button.bottom + GAP}px`
    element.style.bottom = above ? `${window.innerHeight - button.top + GAP}px` : 'auto'
  }, [align])

  const toggle = useCallback(event => setOpen(event.newState === 'open'), [])
  const setPanel = useCallback(element => {
    panel.current?.removeEventListener('toggle', toggle)
    panel.current = element
    if (element) {
      element.addEventListener('toggle', toggle)
      setOpen(element.matches(':popover-open'))
    }
  }, [toggle])

  useLayoutEffect(() => { if (open) place() })

  useEffect(() => {
    if (!open) return
    const observer = new ResizeObserver(place)
    if (anchor.current) observer.observe(anchor.current)
    const composer = anchor.current?.closest('[data-composer-card]')
    if (composer) observer.observe(composer)
    const region = anchor.current?.closest('[data-conversation-content], [data-sidebar-right-panel]')
    if (region) observer.observe(region)
    if (panel.current) observer.observe(panel.current)
    window.addEventListener('resize', place)
    window.addEventListener('scroll', place, true)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', place)
      window.removeEventListener('scroll', place, true)
    }
  }, [open, place])

  function show() {
    if (!anchor.current || !panel.current || panel.current.matches(':popover-open')) return
    // Measure in the top layer so the composer's scroll area never contains the menu box.
    panel.current.showPopover({ source: anchor.current })
    place()
  }

  function close({ focus = false } = {}) {
    if (panel.current?.matches(':popover-open')) panel.current.hidePopover()
    if (focus) requestAnimationFrame(() => anchor.current?.focus({ preventScroll: true }))
  }

  return {
    id, open, show, close,
    trigger: {
      ref: anchor, type: 'button', popoverTarget: id, 'aria-expanded': open, 'aria-controls': id, 'aria-haspopup': 'dialog',
      onClick: event => {
        event.preventDefault()
        if (panel.current?.matches(':popover-open')) close()
        else show()
      },
    },
    content: { ref: setPanel, id, popover: 'auto', role: 'dialog', 'data-align': align },
  }
}

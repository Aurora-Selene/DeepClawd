import { useEffect, useRef, useState } from 'react'
import { Icon, useReducedMotion } from './ui.jsx'
import { usePopover } from './popover.jsx'
import { decodeRate, OutputSpeed, speedIntensity } from './speed.js'

export const emptySpeed = { kind: 'waiting', rate: null }

export function useOutputSpeed(binding) {
  const [reading, setReading] = useState(emptySpeed)
  useEffect(() => {
    if (!binding) return
    const { eventSource, session } = binding
    const stats = session.projections.faceOf('sessionStats')
    const speed = new OutputSpeed()
    const initial = eventSource.getSnapshot()
    speed.observe({ change: { kind: 'replace', entries: initial.entries } })
    const refresh = () => {
      const next = speed.sample(Date.now(), stats.getSnapshot())
      if (next.rate !== null) next.rate = Math.round(next.rate * 10) / 10
      setReading(previous => previous.kind === next.kind && previous.rate === next.rate ? previous : next)
    }
    const offEvents = eventSource.subscribe(() => {
      speed.observe(eventSource.getSnapshot())
      refresh()
    })
    const offStats = stats.subscribe(refresh)
    refresh()
    const timer = setInterval(refresh, 200)
    return () => {
      clearInterval(timer)
      offEvents()
      offStats()
    }
  }, [binding])
  return reading
}

export function useSpeedMotion(container, reading, effortOpen, speedOpen) {
  const reduceMotion = useReducedMotion()
  const current = useRef(0)
  const target = reading.kind === 'live' ? speedIntensity(reading.rate) : 0

  useEffect(() => {
    const root = container.current
    if (!root) return
    let frame
    let last = performance.now()
    const apply = intensity => {
      root.style.setProperty('--dsh-ui-speed-intensity', intensity.toFixed(4))
      root.toggleAttribute('data-glowing', intensity > 0)
      const sharedRate = 1 + 4 * intensity
      const pulseRate = 2.4 / (2.4 - 1.85 * intensity)
      const animated = [root, ...root.querySelectorAll('[data-dsh-ui-motion]')]
      for (const element of animated) {
        for (const animation of element.getAnimations()) {
          const name = animation.animationName
          if (!['effort-spectrum-cycle', 'dsh-ui-star-drift', 'dsh-ui-zap-breathe'].includes(name)) continue
          const rate = name === 'dsh-ui-zap-breathe' ? pulseRate : sharedRate
          if (Math.abs(animation.playbackRate - rate) > 0.01) animation.updatePlaybackRate(rate)
        }
      }
    }

    const animate = time => {
      const fraction = 1 - Math.exp(-(time - last) / (target > current.current ? 145 : 350))
      last = time
      current.current += (target - current.current) * fraction
      if (Math.abs(current.current - target) < 0.003) {
        current.current = target
        apply(target)
        return
      }
      apply(current.current)
      frame = requestAnimationFrame(animate)
    }
    if (reduceMotion) {
      current.current = target
      apply(target)
    } else {
      frame = requestAnimationFrame(animate)
    }
    return () => cancelAnimationFrame(frame)
  }, [container, target, reduceMotion, effortOpen, speedOpen])
}

export function SpeedButton({ reading, stats, modeName, english, onOpenChange }) {
  const popover = usePopover()
  const heading = english ? 'Session stats' : '会话统计'
  const number = reading.rate === null ? null : `${reading.rate.toFixed(1)} tok/s`
  const label = {
    live: english ? 'Live estimate' : '实时估算',
    recent: english ? 'Latest completed step' : '最近一步',
    session: english ? 'Session average' : '会话平均',
    waiting: english ? 'Waiting for output' : '等待输出',
  }[reading.kind]
  const seconds = value => Number.isFinite(value) ? `${(value / 1000).toFixed(1)}${english ? 's' : ' 秒'}` : '—'
  const averageTtft = stats?.ttftSteps > 0 ? stats.ttftMs / stats.ttftSteps : null
  const averageTps = decodeRate(stats?.decodeTokens, stats?.decodeMs)
  const rows = [
    [english ? 'Model time' : '模型用时', seconds(stats?.llmMs)],
    ...(stats?.toolMs > 0 ? [[english ? 'Tool time' : '工具用时', seconds(stats.toolMs)]] : []),
    [english ? 'Average first token (TTFT)' : '首 token 平均 (TTFT)', seconds(averageTtft)],
    [english ? 'Output speed (TPS)' : '输出速度 (TPS)', averageTps === null
      ? number ?? '—'
      : `${Math.round(averageTps)} tok/s`],
    ...(number && (reading.kind === 'live' || (reading.kind === 'recent' && averageTps !== null))
      ? [[label, number]] : []),
  ]
  const turns = stats?.turns ?? 0
  const steps = stats?.steps ?? 0
  useEffect(() => { onOpenChange?.(popover.open) }, [popover.open])
  return (
    <>
      <button {...popover.trigger} className="dsh-ui-control dsh-ui-speed-trigger"
        title={number ? `${label} · ${number}` : heading} aria-label={number ? `${heading}, ${label} ${number}` : heading}>
        <span className="dsh-ui-speed-glyph" data-dsh-ui-motion=""><Icon name="zap" /></span>
      </button>
      <div {...popover.content} className="dsh-ui-popover dsh-ui-speed-popover" aria-label={heading}>
        <header>
          <b><Icon name="zap" />{heading}</b>
          <span>{english ? `${turns} turns · ${steps} steps` : `${turns} 轮 ${steps} 步`}</span>
        </header>
        <dl>
          {modeName && <div className="dsh-ui-speed-mode">
            <dt>{english ? 'Session mode' : '会话模式'}</dt><dd>{modeName}</dd>
          </div>}
          {rows.map(([name, value]) => (
            <div key={name}><dt>{name}</dt><dd>{value}</dd></div>
          ))}
        </dl>
      </div>
    </>
  )
}

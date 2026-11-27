import { bootStyles, bootThemeScript } from '../theme/palette.js'
import { registerInspectorRoutes } from './inspector.js'
import globalStyles from '../client/global.css'

export const name = 'deepseek-integrated-ui'

export function apply(ctx) {
  ctx.on('webserver/index-inject', (injections) => {
    injections.push(
      { kind: 'script', placement: 'head', text: bootThemeScript },
      { kind: 'style', text: bootStyles + globalStyles },
    )
  })
  ctx.inject(['connection', 'workspaceRegistry', 'sessionController', 'sessions'], registerInspectorRoutes)
}

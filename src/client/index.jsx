import { BrandMark, BrandName, HeroMark, HeroWorkspaceFrame, HeroWorkspacePicker } from './hero.jsx'
import { ComposerModel, ModelPreselection } from './composer.jsx'
import { PermissionPicker } from './permission.jsx'
import { SidebarDecorations, SidebarNewSession } from './sidebar.jsx'
import { TurnProcess } from './transcript.jsx'
import { ContextRing } from './context-ring.jsx'
import { registerOverview } from './overview.jsx'
import { InspectorToolbar, registerLocalChangesCheckout } from './inspector.jsx'
import { installComposerMotion } from './motion.js'
import { installSessionSwitchMotion } from './session-motion.js'
import { registerTheme } from './theme.jsx'
import { createUltraMemory } from './selection.js'
import { hasModelExtensions, MODEL_EXTENSIONS, needsNativeSessionPanel, PANEL_EXTENSIONS,
  registerWhen, VIEW_EXTENSIONS } from './slot-compat.js'
import { useSlotVersion } from './ui.jsx'
import themeStyles from './theme.css'
import heroStyles from './hero.css'
import composerStyles from './composer.css'
import sidebarStyles from './sidebar.css'
import transcriptStyles from './transcript.css'
import overviewStyles from './overview.css'
import inspectorStyles from './inspector.css'

export const name = 'deepseek-integrated-ui'
export const inject = [
  'slots', 'theme', 'locale', 'sessions', 'modelDirectories', 'conversation',
  'remote', 'remote.session', 'remote.agentTeams', 'remote.agentPresets',
  'remote.permissionPresets', 'remote.workspaceFiles', 'uiSession', 'uiSession.sessionStatus', 'uiWorkspace', 'workspaces',
  'sidebarRight', 'sidebarRightTabs', 'uiConversation', 'layout', 'remoteAccess',
]

function HeaderViews({ slots }) {
  useSlotVersion(slots, VIEW_EXTENSIONS)
  const extensions = slots.entriesOfSlot(VIEW_EXTENSIONS[0]).some(({ options }) => !['chat', 'trajectory'].includes(options.id))
    || slots.entriesOfSlot(VIEW_EXTENSIONS[1]).some(({ options }) => options.id !== 'entry-customization')
  return extensions ? null : <span hidden data-dsh-ui-compact-view-tabs="" />
}

export function apply(ctx) {
  registerTheme(ctx, name)
  ctx.effect(() => {
    // Let the native layout clamp the startup preference to its minimum.
    ctx.layout?.panels?.setRightbar?.(0)
  }, 'deepseek-ui: right panel startup width')
  ctx.effect(() => {
    const style = document.createElement('style')
    style.dataset.dshUi = name
    style.textContent = [themeStyles, heroStyles, composerStyles, sidebarStyles, transcriptStyles, overviewStyles, inspectorStyles].join('\n')
    document.head.append(style)
    return () => style.remove()
  }, 'deepseek-ui: scoped styles')
  ctx.effect(() => typeof MutationObserver === 'undefined' ? undefined : installComposerMotion(), 'deepseek-ui: composer docking')
  ctx.effect(() => typeof MutationObserver === 'undefined' ? undefined : installSessionSwitchMotion(ctx.sidebarRight.mounted),
    'deepseek-ui: session switching')

  const { slots, locale, sessions, modelDirectories, conversation, remote } = ctx
  const ultraMemory = createUltraMemory()
  const preselection = sessionId => <ModelPreselection sessionId={sessionId} locale={locale} remote={remote}
    sessions={sessions} modelDirectories={modelDirectories} conversation={conversation} ultraMemory={ultraMemory} />

  slots.inject('sidebar.brand.mark', () => slots.register({
    name: 'sidebar.brand.mark', priority: -10,
  }, BrandMark))
  slots.inject('sidebar.brand.name', () => slots.register({
    name: 'sidebar.brand.name', priority: -10,
  }, BrandName))
  slots.inject('sidebar.session.action', () => slots.register({
    name: 'sidebar.session.action', id: 'deepseek-ui.new-session', inject: () => ({ locale }),
  }, SidebarNewSession))
  slots.inject('conversation.hero.brand.mark', () => slots.register({
    name: 'conversation.hero.brand.mark', priority: -10,
    inject: () => ({ locale, sessions, modelDirectories, conversation, renderPreselection: preselection }),
  }, HeroMark))
  slots.inject('conversation.hero.frame', () => slots.register({
    name: 'conversation.hero.frame', id: 'deepseek-ui.workspace-frame',
    inject: () => ({ locale, conversation }),
  }, HeroWorkspaceFrame))
  slots.inject('conversation.hero.workspace', () => slots.register({
    name: 'conversation.hero.workspace', priority: -10,
    inject: () => ({ locale, workspaces: ctx.workspaces, uiWorkspace: ctx.uiWorkspace, layout: ctx.layout }),
  }, HeroWorkspacePicker))
  slots.inject('conversation.hero.agentPreset', () => slots.register({
    name: 'conversation.hero.agentPreset', priority: -10,
  }, () => null))
  slots.inject('conversation.session.header.actions', () => slots.register({
    name: 'conversation.session.header.actions', id: 'agent-preset', priority: -10,
  }, () => null))
  registerWhen(slots, 'conversation.session.header.utilities', PANEL_EXTENSIONS, () => !needsNativeSessionPanel(slots),
    () => slots.register({
    name: 'conversation.session.header.utilities', id: 'session-panel', priority: -10,
  }, () => null))
  registerWhen(slots, 'conversation.chat.aside', PANEL_EXTENSIONS, () => !needsNativeSessionPanel(slots),
    () => slots.register({
    name: 'conversation.chat.aside', priority: -10,
  }, () => null))
  slots.inject('conversation.session.header.utilities', () => slots.register({
    name: 'conversation.session.header.utilities', id: 'deepseek-ui.view-overflow', inject: () => ({ slots }),
  }, HeaderViews))
  registerWhen(slots, 'conversation.input.model', MODEL_EXTENSIONS, () => !hasModelExtensions(slots), () => slots.register({
    name: 'conversation.input.model', priority: -10,
    // Fall back to the native owner when a plugin uses any of its child slots.
    inject: sessionId => ({
      binding: sessions.binding(sessionId),
      directory: modelDirectories.directoryFor(sessionId),
      locale,
      remote,
      sessions,
      ultraMemory,
    }),
  }, ComposerModel))
  slots.inject('conversation.input.permission', () => slots.register({
    name: 'conversation.input.permission', priority: -10,
    inject: sessionId => ({ binding: sessions.binding(sessionId), sessions, locale, remote }),
  }, PermissionPicker))
  slots.inject('conversation.chat.node', () => slots.register({
    name: 'conversation.chat.node', key: 'turn-process', priority: -10,
    inject: sessionId => {
      const binding = sessions.binding(sessionId)
      const conversationView = ctx.uiConversation.binding(binding)
      return { slots, locale, binding, chat: conversationView.target('chat'), openTurn: conversationView.openTurn,
        chatSettings: ctx.get('configForms')?.get('ui-chat'),
        sessionStatus: ctx.uiSession.sessionStatus }
    },
  }, TurnProcess))
  registerOverview(ctx)
  registerLocalChangesCheckout(ctx)
  slots.inject('shell.overlay', function* () {
    yield slots.register({
      name: 'shell.overlay', id: 'deepseek-ui.sidebar',
      inject: () => ({ locale, slots, sessions, workspaces: ctx.workspaces, uiWorkspace: ctx.uiWorkspace,
        layout: ctx.layout, sessionStatus: ctx.uiSession.sessionStatus, remoteAccess: ctx.remoteAccess }),
    }, SidebarDecorations)
    yield slots.register({
      name: 'shell.overlay', id: 'deepseek-ui.inspector-toolbar',
      inject: () => ({ locale, sidebarRight: ctx.sidebarRight, sidebarRightTabs: ctx.sidebarRightTabs,
        getWebTerminals: () => ctx.get('webTerminals') }),
    }, InspectorToolbar)
  })
  slots.inject('conversation.composer.dock', () => slots.register({
    name: 'conversation.composer.dock', id: 'deepseek-ui.context', order: 3,
    inject: sessionId => ({ binding: sessions.binding(sessionId), locale, sidebarRight: ctx.sidebarRight }),
  }, ContextRing))
}

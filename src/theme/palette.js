export const themeStorageKey = 'dsh-ui.theme'
const logoBlue = '#4176e6'

// The matching light and dark roles come from DeepSeek 展示页.html.
const roles = {
  canvas: ['#faf9f5', '#272621'],
  'toolbar-border': ['#e6e1d7', '#413d34'],
  surface: ['#fffdf9', '#302e27'],
  'surface-overlay': ['#fffdf8', '#38352e'],
  text: ['#27231e', '#eee9df'],
  'text-muted': ['#645e53', '#bdb4a5'],
  border: ['#e5dfd3', '#494438'],
  input: ['#d3cabb', '#645a4a'],
  focus: ['#a95438', '#e19b7f'],
  accent: ['#ad5037', '#dfa084'],
  'accent-foreground': ['#ffffff', '#2c1b14'],
  muted: ['#f4f1e9', '#2e2c26'],
  placeholder: ['#6d665a', '#b3a999'],
  'icon-muted': ['#756c5e', '#b1a796'],
  'accent-surface': ['#f2e4da', '#46382e'],
  'accent-surface-foreground': ['#673a29', '#f2c3aa'],
  danger: ['#ad5037', '#dfa084'],
  'message-surface': ['#f0ece3', '#353129'],
  'message-action-hover': ['#983e28', '#ecb097'],
  sidebar: ['#f2efe8', '#22211d'],
  'sidebar-foreground': ['#322d25', '#eae4d8'],
  'sidebar-muted-foreground': ['#665e51', '#b8ae9f'],
  'sidebar-row-hover': ['#ece8de', '#312e27'],
  'sidebar-row-selected': ['#eee0d4', '#43382d'],
  'sidebar-border': ['#e5dfd2', '#3e3a31'],
  'running-foreground': ['#355943', '#bbe2bf'],
  'context-system': ['#59392d', '#a67e71'],
  'context-tool': ['#be913d', '#f0cd78'],
  'context-message': ['#577992', '#a8cadf'],
  'session-unread': ['#c96431', '#f0a36f'],
  'session-waiting': ['#3e70b3', '#91b9f5'],
  'diff-add': ['#326043', '#a1cfac'],
  'diff-remove': ['#983e28', '#f0a295'],
  'effort-start': ['#f7bf8c', '#dfab82'],
  'effort-end': ['#ba4c28', '#b7482b'],
}

const blueAccents = {
  focus: [logoBlue, '#9dbdff'],
  accent: ['#3266ca', '#9dbdff'],
  'accent-foreground': ['#ffffff', '#142545'],
  'accent-surface': ['#e6efff', '#293b57'],
  'accent-surface-foreground': ['#224887', '#cae0ff'],
  'message-surface': ['#edf2fb', '#303949'],
  'message-action-hover': ['#244f9f', '#bed4ff'],
  'sidebar-row-hover': ['#eaf0fb', '#2d3542'],
  'sidebar-row-selected': ['#e2ecfc', '#303e58'],
  'context-message': ['#537ab6', '#a8c8ff'],
  'session-unread': [logoBlue, '#a8c8ff'],
  'effort-start': ['#b5d1fb', '#658fd6'],
  'effort-end': ['#4478dc', '#3f6fc6'],
}

const aliasRoles = {
  'bg-base': 'canvas',
  'bg-layer-1': 'canvas',
  'bg-layer-2': 'surface',
  'bg-layer-3': 'surface-overlay',
  'bg-module-platform': 'muted',
  'bg-multi-select': 'accent-surface',
  'border-l1': 'toolbar-border',
  'border-l2-darkmode-thin': 'border',
  'border-l2': 'border',
  'border-l3': 'border',
  'border-l4': 'input',
  'border-selected': 'focus',
  'brand-primary': 'text',
  'brand-text': 'text',
  'button-elevated-fill': 'surface',
  'button-floating-fill': 'surface',
  'button-floating-hover': 'muted',
  'button-ghost-active-border': 'border',
  'button-ghost-active-fill': 'accent-surface',
  'button-ghost-active-hover': 'sidebar-row-selected',
  'button-info-fill': 'accent',
  'button-info-hover': 'message-action-hover',
  'button-primary-dimmed': 'muted',
  'button-primary-fill': 'accent',
  'button-primary-hover': 'message-action-hover',
  'card-fill': 'surface',
  'card-fill-hover': 'muted',
  'interactive-bg-active': 'accent-surface',
  'interactive-bg-hover-accent': 'accent-surface',
  'interactive-bg-hover-solid': 'muted',
  'interactive-bg-hover': 'sidebar-row-hover',
  'label-caption': 'placeholder',
  'label-dimmed': 'icon-muted',
  'label-on-color': 'accent-foreground',
  'label-primary': 'text',
  'label-primary-dimmed': 'text',
  'label-primary-foreground': 'accent-foreground',
  'label-secondary': 'text-muted',
  'label-tertiary': 'icon-muted',
  'link': 'accent',
  'menu-group-header-fill': 'surface-overlay',
  'menu-icon': 'icon-muted',
  'state-business-primary': 'accent',
  'state-business-tertiary': 'accent-surface',
  'markdown-code-block': 'muted',
  'markdown-code-block-banner': 'muted',
  'markdown-inline-code': 'muted',
  'scrollbar-bg-l1': 'input',
  'scrollbar-bg-l2': 'input',
  'scrollbar-hover-l1': 'icon-muted',
  'scrollbar-hover-l2': 'icon-muted',
}

const specificRoles = {
  bubble: 'message-surface',
  'bubble-highlight': 'accent-surface',
  'input-major': 'surface',
  'login-input': 'muted',
  'sidebar-fill': 'sidebar',
  'sidebar-tint': 'sidebar',
  'sidebar-glass-fill': 'sidebar',
  'sidebar-glass-hover': 'sidebar-row-hover',
  'sidebar-nav-item-active': 'sidebar-row-selected',
  'sidebar-nav-item-active-accent': 'accent-surface',
  'sidebar-right-flash': 'accent',
  selector: 'surface',
  menu: 'surface-overlay',
}

const tokenRoles = [
  ...Object.keys(roles).map(role => [`--dsh-ui-${role}`, role]),
  ...Object.entries(aliasRoles).map(([name, role]) => [`--dsw-alias-${name}`, role]),
  ...Object.entries(specificRoles).map(([name, role]) => [`--dsw-specific-${name}`, role]),
]

function overrides(palette) {
  return Object.fromEntries(tokenRoles.filter(([, role]) => Object.hasOwn(palette, role)).map(([token, role]) => {
    const [light, dark] = palette[role]
    return [token, { light, dark }]
  }))
}

const blueOverrides = overrides(blueAccents)
export const themeOverrides = overrides(roles)
export const themePalettes = {
  clay: themeOverrides,
  blue: { ...themeOverrides, ...blueOverrides },
}

export const themeSwatches = { clay: roles.accent[0], blue: logoBlue }

function declarations(tokens, mode) {
  return Object.entries(tokens).map(([token, colors]) => `${token}:${colors[mode]};`).join('\n')
}

export const bootThemeScript = `
try {
  if (localStorage.getItem(${JSON.stringify(themeStorageKey)}) === 'blue') {
    document.documentElement.dataset.dshUiTheme = 'blue'
  }
} catch {}
`

export const bootStyles = `
html body {
${declarations(themeOverrides, 'light')}
  --dsh-ui-font: "Anthropic Serif Display", "Source Han Serif CN", "Source Han Serif SC", "Songti SC", Georgia, serif;
  --dsh-ui-font-input: "Anthropic Serif Display", "Source Han Serif CN", "Songti SC", Georgia, serif;
  --dsh-ui-duration: 210ms;
  --dsh-ui-ease: cubic-bezier(.23, .72, .26, 1);
  --dsh-ui-motion: var(--dsh-ui-duration) var(--dsh-ui-ease);
  --dsh-ui-list-motion: 320ms cubic-bezier(.22, .75, .24, 1);
  --dsh-boot-bg: var(--dsh-ui-canvas);
  --dsw-focus-ring-color: var(--dsh-ui-focus);
  --dsw-menu-surface-fill: var(--dsh-ui-surface-overlay);
  background-color: var(--dsh-ui-canvas);
  color: var(--dsh-ui-text);
}
html body[data-ds-dark-theme] {
${declarations(themeOverrides, 'dark')}
}
html[data-dsh-ui-theme="blue"] body {
${declarations(blueOverrides, 'light')}
}
html[data-dsh-ui-theme="blue"] body[data-ds-dark-theme] {
${declarations(blueOverrides, 'dark')}
}
@media (prefers-color-scheme: dark) {
  html:not([data-ds-theme-source]) body {
${declarations(themeOverrides, 'dark')}
  }
  html[data-dsh-ui-theme="blue"]:not([data-ds-theme-source]) body {
${declarations(blueOverrides, 'dark')}
  }
}
`

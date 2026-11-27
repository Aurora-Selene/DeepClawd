// src/theme/palette.js
var themeStorageKey = "dsh-ui.theme";
var logoBlue = "#4176e6";
var roles = {
  canvas: ["#faf9f5", "#272621"],
  "toolbar-border": ["#e6e1d7", "#413d34"],
  surface: ["#fffdf9", "#302e27"],
  "surface-overlay": ["#fffdf8", "#38352e"],
  text: ["#27231e", "#eee9df"],
  "text-muted": ["#645e53", "#bdb4a5"],
  border: ["#e5dfd3", "#494438"],
  input: ["#d3cabb", "#645a4a"],
  focus: ["#a95438", "#e19b7f"],
  accent: ["#ad5037", "#dfa084"],
  "accent-foreground": ["#ffffff", "#2c1b14"],
  muted: ["#f4f1e9", "#2e2c26"],
  placeholder: ["#6d665a", "#b3a999"],
  "icon-muted": ["#756c5e", "#b1a796"],
  "accent-surface": ["#f2e4da", "#46382e"],
  "accent-surface-foreground": ["#673a29", "#f2c3aa"],
  danger: ["#ad5037", "#dfa084"],
  "message-surface": ["#f0ece3", "#353129"],
  "message-action-hover": ["#983e28", "#ecb097"],
  sidebar: ["#f2efe8", "#22211d"],
  "sidebar-foreground": ["#322d25", "#eae4d8"],
  "sidebar-muted-foreground": ["#665e51", "#b8ae9f"],
  "sidebar-row-hover": ["#ece8de", "#312e27"],
  "sidebar-row-selected": ["#eee0d4", "#43382d"],
  "sidebar-border": ["#e5dfd2", "#3e3a31"],
  "running-foreground": ["#355943", "#bbe2bf"],
  "context-system": ["#59392d", "#a67e71"],
  "context-tool": ["#be913d", "#f0cd78"],
  "context-message": ["#577992", "#a8cadf"],
  "session-unread": ["#c96431", "#f0a36f"],
  "session-waiting": ["#3e70b3", "#91b9f5"],
  "diff-add": ["#326043", "#a1cfac"],
  "diff-remove": ["#983e28", "#f0a295"],
  "effort-start": ["#f7bf8c", "#dfab82"],
  "effort-end": ["#ba4c28", "#b7482b"]
};
var blueAccents = {
  focus: [logoBlue, "#9dbdff"],
  accent: ["#3266ca", "#9dbdff"],
  "accent-foreground": ["#ffffff", "#142545"],
  "accent-surface": ["#e6efff", "#293b57"],
  "accent-surface-foreground": ["#224887", "#cae0ff"],
  "message-surface": ["#edf2fb", "#303949"],
  "message-action-hover": ["#244f9f", "#bed4ff"],
  "sidebar-row-hover": ["#eaf0fb", "#2d3542"],
  "sidebar-row-selected": ["#e2ecfc", "#303e58"],
  "context-message": ["#537ab6", "#a8c8ff"],
  "session-unread": [logoBlue, "#a8c8ff"],
  "effort-start": ["#b5d1fb", "#658fd6"],
  "effort-end": ["#4478dc", "#3f6fc6"]
};
var aliasRoles = {
  "bg-base": "canvas",
  "bg-layer-1": "canvas",
  "bg-layer-2": "surface",
  "bg-layer-3": "surface-overlay",
  "bg-module-platform": "muted",
  "bg-multi-select": "accent-surface",
  "border-l1": "toolbar-border",
  "border-l2-darkmode-thin": "border",
  "border-l2": "border",
  "border-l3": "border",
  "border-l4": "input",
  "border-selected": "focus",
  "brand-primary": "text",
  "brand-text": "text",
  "button-elevated-fill": "surface",
  "button-floating-fill": "surface",
  "button-floating-hover": "muted",
  "button-ghost-active-border": "border",
  "button-ghost-active-fill": "accent-surface",
  "button-ghost-active-hover": "sidebar-row-selected",
  "button-info-fill": "accent",
  "button-info-hover": "message-action-hover",
  "button-primary-dimmed": "muted",
  "button-primary-fill": "accent",
  "button-primary-hover": "message-action-hover",
  "card-fill": "surface",
  "card-fill-hover": "muted",
  "interactive-bg-active": "accent-surface",
  "interactive-bg-hover-accent": "accent-surface",
  "interactive-bg-hover-solid": "muted",
  "interactive-bg-hover": "sidebar-row-hover",
  "label-caption": "placeholder",
  "label-dimmed": "icon-muted",
  "label-on-color": "accent-foreground",
  "label-primary": "text",
  "label-primary-dimmed": "text",
  "label-primary-foreground": "accent-foreground",
  "label-secondary": "text-muted",
  "label-tertiary": "icon-muted",
  "link": "accent",
  "menu-group-header-fill": "surface-overlay",
  "menu-icon": "icon-muted",
  "state-business-primary": "accent",
  "state-business-tertiary": "accent-surface",
  "markdown-code-block": "muted",
  "markdown-code-block-banner": "muted",
  "markdown-inline-code": "muted",
  "scrollbar-bg-l1": "input",
  "scrollbar-bg-l2": "input",
  "scrollbar-hover-l1": "icon-muted",
  "scrollbar-hover-l2": "icon-muted"
};
var specificRoles = {
  bubble: "message-surface",
  "bubble-highlight": "accent-surface",
  "input-major": "surface",
  "login-input": "muted",
  "sidebar-fill": "sidebar",
  "sidebar-tint": "sidebar",
  "sidebar-glass-fill": "sidebar",
  "sidebar-glass-hover": "sidebar-row-hover",
  "sidebar-nav-item-active": "sidebar-row-selected",
  "sidebar-nav-item-active-accent": "accent-surface",
  "sidebar-right-flash": "accent",
  selector: "surface",
  menu: "surface-overlay"
};
var tokenRoles = [
  ...Object.keys(roles).map((role) => [`--dsh-ui-${role}`, role]),
  ...Object.entries(aliasRoles).map(([name2, role]) => [`--dsw-alias-${name2}`, role]),
  ...Object.entries(specificRoles).map(([name2, role]) => [`--dsw-specific-${name2}`, role])
];
function overrides(palette) {
  return Object.fromEntries(tokenRoles.filter(([, role]) => Object.hasOwn(palette, role)).map(([token, role]) => {
    const [light, dark] = palette[role];
    return [token, { light, dark }];
  }));
}
var blueOverrides = overrides(blueAccents);
var themeOverrides = overrides(roles);
var themePalettes = {
  clay: themeOverrides,
  blue: { ...themeOverrides, ...blueOverrides }
};
var themeSwatches = { clay: roles.accent[0], blue: logoBlue };
function declarations(tokens, mode) {
  return Object.entries(tokens).map(([token, colors]) => `${token}:${colors[mode]};`).join("\n");
}
var bootThemeScript = `
try {
  if (localStorage.getItem(${JSON.stringify(themeStorageKey)}) === 'blue') {
    document.documentElement.dataset.dshUiTheme = 'blue'
  }
} catch {}
`;
var bootStyles = `
html body {
${declarations(themeOverrides, "light")}
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
${declarations(themeOverrides, "dark")}
}
html[data-dsh-ui-theme="blue"] body {
${declarations(blueOverrides, "light")}
}
html[data-dsh-ui-theme="blue"] body[data-ds-dark-theme] {
${declarations(blueOverrides, "dark")}
}
@media (prefers-color-scheme: dark) {
  html:not([data-ds-theme-source]) body {
${declarations(themeOverrides, "dark")}
  }
  html[data-dsh-ui-theme="blue"]:not([data-ds-theme-source]) body {
${declarations(blueOverrides, "dark")}
  }
}
`;

// src/host/inspector.js
var ROUTE_ROOT = "/api/deepseek-ui";
var PAGE_SIZE = 16;
var MAX_PAGE_SIZE = 32;
var PROJECTION_CONCURRENCY = 4;
function json(value, status = 200) {
  return Response.json(value, { status, headers: { "cache-control": "no-store" } });
}
function integer(query, key, fallback, minimum, maximum) {
  const raw = query.get(key);
  if (raw === null) return fallback;
  const value = Number(raw);
  return /^\d+$/u.test(raw) && Number.isSafeInteger(value) && value >= minimum && value <= maximum ? value : null;
}
async function readContext(controller, sessionId, signal) {
  try {
    const projection = await controller.projections({ sessionId }, signal);
    signal.throwIfAborted();
    if (projection === null) return null;
    const metadata = projection.values.sessionListMetadata;
    if (metadata?.blank === true && metadata.lastPromptAt == null) return null;
    return {
      sessionId,
      status: projection.kind,
      ...projection.kind === "sequenced" ? { asOfSeq: projection.asOfSeq } : {},
      contextPressure: projection.values.contextPressure ?? null,
      contextBreakdown: projection.values.contextBreakdown ?? null
    };
  } catch {
    signal.throwIfAborted();
    return { sessionId, status: "unavailable", contextPressure: null, contextBreakdown: null };
  }
}
async function workspaceContext(ctx, request) {
  const query = new URL(request.url).searchParams;
  const workspaceId = query.get("workspaceId");
  const offset = integer(query, "offset", 0, 0, Number.MAX_SAFE_INTEGER);
  const cursor = query.get("cursor");
  const limit = integer(query, "limit", PAGE_SIZE, 1, MAX_PAGE_SIZE);
  if (!workspaceId || offset === null || limit === null || cursor === "") return json({ error: "invalid-query" }, 400);
  const workspace = ctx.workspaceRegistry.get(workspaceId);
  if (workspace === void 0) return json({ error: "workspace-not-found" }, 404);
  const archived = new Set(ctx.workspaceRegistry.archivedSessionIds);
  const members = workspace.sessionIds.filter((id) => !archived.has(id));
  let start = offset;
  if (cursor !== null) {
    const index = workspace.sessionIds.indexOf(cursor);
    if (index < 0) return json({ error: "workspace-cursor-changed" }, 409);
    start = workspace.sessionIds.slice(0, index).filter((id) => !archived.has(id)).length;
  }
  const items = [];
  for (let index = start; index < members.length; ) {
    request.signal.throwIfAborted();
    const count = Math.min(PROJECTION_CONCURRENCY, limit - items.length + 1);
    const group = members.slice(index, index + count);
    const page = await Promise.all(group.map((id) => readContext(ctx.sessionController, id, request.signal)));
    for (const [position, item] of page.entries()) {
      if (item === null) continue;
      if (items.length === limit) return json({ workspaceId, items, nextCursor: members[index + position], nextOffset: index + position });
      items.push(item);
    }
    index += group.length;
  }
  return json({ workspaceId, items, nextCursor: null, nextOffset: null });
}
async function workspaceGit(ctx, request) {
  const query = new URL(request.url).searchParams;
  const workspaceId = query.get("workspaceId");
  const sessionId = query.get("sessionId");
  const withDiff = query.get("diff");
  if (!workspaceId || !sessionId || ![null, "0", "1"].includes(withDiff)) {
    return json({ error: "invalid-query" }, 400);
  }
  const workspace = ctx.workspaceRegistry.get(workspaceId);
  if (workspace === void 0 || !workspace.sessionIds.includes(sessionId)) {
    return json({ error: "session-not-in-workspace" }, 404);
  }
  const forge = ctx.get("forgePanel");
  if (forge === void 0) return json({ status: "forge-unavailable" }, 503);
  const session = ctx.sessions.get(sessionId);
  if (session === void 0) return json({ status: "session-inactive" }, 404);
  try {
    for await (const { checkout } of forge.follow(session, request.signal)) {
      request.signal.throwIfAborted();
      if (checkout.state === "pending") continue;
      if (checkout.state === "none") return json({ status: "no-checkout" });
      if (checkout.state !== "ready") break;
      const diff = withDiff === "1" ? await forge.localDiff(session, { kind: "uncommitted" }, request.signal) : void 0;
      return json({ status: "ready", workspaceId, sessionId, current: checkout.checkout.branch, ...diff ? { diff } : {} });
    }
    return json({ status: "git-unavailable" }, 503);
  } catch (error) {
    request.signal.throwIfAborted();
    const code = error?.code;
    if (code === "forgePanel/not-a-checkout") return json({ status: "no-checkout" });
    if (code === "forgePanel/diff-too-large") return json({ status: "diff-too-large" }, 413);
    return json({ status: "git-unavailable" }, 503);
  }
}
function registerInspectorRoutes(ctx) {
  const lifetime = new AbortController();
  ctx.effect(() => () => lifetime.abort(), "deepseek-ui: inspector lifetime");
  for (const [path, handler] of [["context", workspaceContext], ["git", workspaceGit]]) {
    ctx.connection.fetch.register({
      path: `${ROUTE_ROOT}/${path}`,
      methods: ["GET"],
      requestBody: "buffered",
      fetch: (request) => handler(ctx, new Request(request, {
        signal: AbortSignal.any([request.signal, lifetime.signal])
      }))
    });
  }
}

// src/client/global.css
var global_default = 'html body {\n  --dsw-specific-sidebar-wash-top: transparent;\n  --dsw-specific-sidebar-wash-bottom: transparent;\n  --dsh-font-family: var(--dsh-ui-font);\n  --dsh-font-family-text: var(--dsh-ui-font);\n  font-family: var(--dsh-ui-font);\n  transition: background-color var(--dsh-ui-motion), color var(--dsh-ui-motion);\n}\n\n:has(> [data-rightbar-col]):is([data-sidebar-collapsed], [data-sidebar-drawer], [data-animating]) {\n  --ds-transition-duration-slow: 320ms;\n  --ds-ease-in-out: cubic-bezier(.22, .75, .24, 1);\n}\n\n:is([class*="_sidebarCol"], [data-rightbar-col], [data-message-bubble], [data-conversation-content] > [data-conversation-scroll]) {\n  transition: background-color var(--dsh-ui-motion), color var(--dsh-ui-motion), border-color var(--dsh-ui-motion);\n}\n\nheader[data-window-drag]:has(> [data-conversation-header-leading])\n:is([class*="_crumbCurrent"], [data-subagent-action] button[class*="_switcherTrigger"]:not([class*="_ancestorSwitcherTrigger"])) {\n  max-width: 360px;\n}\n\n/* The native tab estimate reserves 48px plus 120px per tab. Let it keep the\n   two built-in tabs while confining any extra measured width to trailing padding. */\nheader[data-window-drag] div:has(> [data-conversation-tabs]) {\n  --dsh-ui-tab-row-min: 288px;\n  width: max(100%, var(--dsh-ui-tab-row-min));\n  padding-inline-end: max(0px, calc(var(--dsh-ui-tab-row-min) - 100%));\n}\n\nheader:has([data-dsh-ui-compact-view-tabs]) [data-conversation-tabs]:has(> [role="tab"]:nth-child(2))\n  + [class*="_viewsMoreAnchor"] {\n  display: none;\n}\n\n[data-composer-card] {\n  background: var(--dsh-ui-surface);\n  border: 1px solid var(--dsh-ui-input);\n  border-radius: 16px;\n  box-shadow: 0 2px 4px color-mix(in srgb, var(--dsh-ui-text) 7%, transparent);\n  transition: background-color var(--dsh-ui-motion), border-color var(--dsh-ui-motion), box-shadow var(--dsh-ui-motion);\n}\n\n[data-composer-card]:focus-within {\n  border-color: var(--dsh-ui-focus);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsh-ui-focus) 14%, transparent);\n}\n\n[data-composer-card] [contenteditable="true"],\n[data-composer-card] textarea {\n  font-family: var(--dsh-ui-font-input);\n  color: var(--dsh-ui-text);\n  caret-color: var(--dsh-ui-accent);\n}\n\n[data-message-bubble] {\n  color: var(--dsh-ui-text);\n  background: var(--dsh-ui-message-surface);\n  border-radius: 13px;\n  font-family: var(--dsh-ui-font);\n}\n\n[data-sidebar-scrollport] :is(button, [role="button"], [role="treeitem"]) {\n  font-family: var(--dsh-ui-font);\n}\n\n[data-sidebar-scrollport] :is([role="treeitem"], [data-slot="sidebar.session.action"], [data-slot="sidebar.workspace.row"]) {\n  min-height: 29px;\n  border-radius: 7px;\n}\n\n[data-sidebar-scrollport] :is([aria-current="page"], [aria-selected="true"]) {\n  background: var(--dsh-ui-sidebar-row-selected);\n}\n\n[data-rightbar-col] {\n  border-color: var(--dsh-ui-toolbar-border);\n}\n\n[data-home-whale] {\n  visibility: hidden;\n}\n\n.dsh-ui-icon {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n  color: inherit;\n}\n\n:is(.dsh-ui-greeting, .dsh-ui-suggestion, .dsh-ui-control, .dsh-ui-model-row, .dsh-ui-retry):focus-visible {\n  outline: 2px solid var(--dsh-ui-focus);\n  outline-offset: 2px;\n}\n\n.dsh-ui-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip-path: inset(50%);\n  white-space: nowrap;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html body, [data-composer-card],\n  :is([class*="_sidebarCol"], [data-rightbar-col], [data-message-bubble], [data-conversation-content] > [data-conversation-scroll]) { transition: none; }\n}\n';

// src/host/index.js
var name = "deepseek-integrated-ui";
function apply(ctx) {
  ctx.on("webserver/index-inject", (injections) => {
    injections.push(
      { kind: "script", placement: "head", text: bootThemeScript },
      { kind: "style", text: bootStyles + global_default }
    );
  });
  ctx.inject(["connection", "workspaceRegistry", "sessionController", "sessions"], registerInspectorRoutes);
}
export {
  apply,
  name
};

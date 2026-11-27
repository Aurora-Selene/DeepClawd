window.__ModuleLoader__.load({ id: "@local/dsh-deepseek-ui", factory(require) {
  const module = { exports: {} };
  const exports = module.exports;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.jsx
var index_exports = {};
__export(index_exports, {
  apply: () => apply,
  inject: () => inject,
  name: () => name
});
module.exports = __toCommonJS(index_exports);

// src/client/hero.jsx
var import_react2 = require("react");
var import_react_dom = require("react-dom");
var import_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");

// src/client/assets/deepseek.svg
var deepseek_default = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 27 21"><g clip-path="url(%23clip0_logo)"><path d="M26.5174 3.39471C26.235 3.2567 26.1137 3.52006 25.9487 3.65346C25.8923 3.69659 25.8446 3.75294 25.7969 3.80469C25.3846 4.24516 24.9027 4.53439 24.2737 4.49989C23.3536 4.44814 22.5682 4.73737 21.8735 5.44119C21.7258 4.57349 21.2353 4.0554 20.4889 3.72304C20.0985 3.55054 19.7034 3.37746 19.4297 3.00197C19.2388 2.73459 19.1865 2.43673 19.091 2.14289C19.0301 1.96579 18.9697 1.78466 18.7656 1.75418C18.5442 1.71968 18.4574 1.90541 18.3705 2.06067C18.0232 2.69549 17.8887 3.39471 17.9019 4.10313C17.9324 5.6965 18.6051 6.96556 19.9421 7.86834C20.0939 7.97184 20.133 8.07535 20.0852 8.22658C19.9938 8.53766 19.8857 8.83955 19.7903 9.15063C19.7293 9.34901 19.6384 9.39271 19.4257 9.30588C18.692 8.9994 18.0583 8.54571 17.4982 7.99772C16.5477 7.07827 15.6881 6.06336 14.6162 5.26869C14.3644 5.08296 14.1125 4.91045 13.8521 4.746C12.7584 3.68394 13.9952 2.81164 14.2816 2.70814C14.5812 2.60003 14.3857 2.22857 13.4179 2.23317C12.4502 2.2372 11.5646 2.56151 10.4359 2.99335C10.2708 3.05832 10.0972 3.10547 9.91951 3.14457C8.8954 2.95022 7.83162 2.90709 6.72069 3.03245C4.62877 3.26533 2.95777 4.25436 1.72954 5.94261C0.254043 7.97184 -0.0932678 10.2777 0.33167 12.6824C0.778458 15.2171 2.07225 17.3153 4.06008 18.9558C6.12152 20.6567 8.49577 21.4905 11.2047 21.3306C12.8498 21.2358 14.6812 21.0155 16.7473 19.2669C17.2682 19.5262 17.8151 19.6297 18.7219 19.7074C19.4205 19.7723 20.0933 19.6729 20.6143 19.5648C21.4302 19.3923 21.3739 18.6367 21.0789 18.4981C18.6874 17.3843 19.2124 17.8374 18.7351 17.4706C19.9501 16.033 21.8063 13.4776 22.379 9.99821C22.4353 9.61409 22.5072 9.073 22.4986 8.76192C22.494 8.57216 22.5377 8.49856 22.7545 8.47671C23.3536 8.40771 23.935 8.24383 24.4692 7.94999C26.0188 7.10357 26.6439 5.71318 26.7911 4.04678C26.8129 3.79204 26.7865 3.52869 26.5174 3.39471ZM13.0143 18.3946C10.6964 16.5724 9.5722 15.9726 9.10816 15.9985C8.67402 16.0244 8.75222 16.5212 8.84768 16.8449C8.94773 17.1646 9.07768 17.3849 9.25996 17.6655C9.38589 17.8512 9.47272 18.1272 9.13404 18.3348C8.38766 18.7965 7.08985 18.1796 7.0289 18.1491C5.51833 17.2595 4.25559 16.0853 3.36546 14.4793C2.50581 12.9337 2.0067 11.2753 1.92447 9.50542C1.90262 9.07818 2.02855 8.92695 2.45406 8.84932C3.01413 8.74582 3.59144 8.72397 4.15093 8.80619C6.51656 9.15178 8.53027 10.2092 10.2185 11.8848C11.1822 12.8388 11.9114 13.979 12.6623 15.0929C13.461 16.2757 14.3201 17.4027 15.4144 18.3268C15.8008 18.6505 16.109 18.8966 16.404 19.0783C15.5144 19.1778 14.0297 19.1991 13.0143 18.3958V18.3946ZM14.1252 11.2489C14.1252 11.0591 14.277 10.9079 14.4679 10.9079C14.511 10.9079 14.5501 10.9165 14.5852 10.9292C14.6329 10.9464 14.6766 10.9723 14.7111 11.0114C14.7721 11.0718 14.8066 11.158 14.8066 11.2489C14.8066 11.4386 14.6548 11.5899 14.4639 11.5899C14.273 11.5899 14.1252 11.4386 14.1252 11.2489ZM17.5759 13.0188C17.3545 13.1096 17.1331 13.1873 16.9203 13.1959C16.5903 13.2131 16.2303 13.0791 16.0348 12.9153C15.7312 12.6605 15.5139 12.5179 15.423 12.0734C15.3839 11.8837 15.4057 11.5899 15.4402 11.4214C15.5185 11.0585 15.4316 10.8257 15.1757 10.614C14.9676 10.4415 14.7025 10.3938 14.4115 10.3938C14.3029 10.3938 14.2034 10.3461 14.1292 10.3076C14.0079 10.2472 13.9078 10.096 14.0033 9.91023C14.0338 9.84985 14.1815 9.70322 14.216 9.67734C14.6111 9.45251 15.0665 9.52612 15.488 9.6946C15.8784 9.85445 16.174 10.1477 16.5989 10.5623C17.033 11.0631 17.1112 11.2011 17.3585 11.5772C17.554 11.871 17.7317 12.1729 17.8536 12.5185C17.9272 12.7341 17.8317 12.9107 17.5759 13.0188Z" fill="%234176e6" /></g><defs><clipPath id="clip0_logo"><rect width="26.634" height="19.6" fill="white" transform="translate(0.163086 1.75)" /></clipPath></defs></svg>%0A';

// src/client/greetings.js
var sharedGreetings = [
  "\u6708\u5149\u4E0B\u7684\u5BF9\u8BDD\uFF1F",
  "\u6CE1\u597D\u8336\u4E86\uFF0C\u4F60\u5148\u8BF4",
  "\u60F3\u804A\u54EA\u7247\u4E91\uFF1F",
  "\u6E05\u6668\u597D\uFF0C\u6765\u804A\u804A",
  "\u591C\u6DF1\u4E86\uFF0C\u804A\u70B9\u5565\uFF1F",
  "\u6162\u6162\u8BF4\uFF0C\u6211\u5728\u542C",
  "\u628A\u661F\u661F\u5012\u51FA\u6765\u5427",
  "\u4ECA\u5929\u6709\u4EC0\u4E48\u6545\u4E8B\uFF1F",
  "\u53C8\u89C1\u9762\u4E86\uFF01",
  "\u4ECA\u65E5\u8425\u4E1A\uFF0C\u8BF7\u8BB2",
  "\u4FEEbug\u8FD8\u662F\u4FEE\u5FC3\u60C5\uFF1F",
  "\u5496\u5561\u81EA\u5907\uFF0C\u6211\u5C31\u4F4D",
  "\u8BF7\u8BB2\uFF0C\u6211\u8033\u6735\u7AD6\u8D77\u6765\u4E86",
  "\u6B22\u8FCE\u5149\u4E34\uFF0C\u4E3B\u8425\u7B54\u7591",
  "\u4F60\u63D0\u95EE\uFF0C\u6211\u88C5\u6DE1\u5B9A",
  "\u7A7A\u767D\u8F93\u5165\u6846\uFF0C\u5FEB\u7834\u6848",
  "\u5148\u559D\u53E3\u6C34\u518D\u804A\u5427",
  "\u8981\u601D\u8DEF\u8FD8\u662F\u5410\u69FD\uFF1F",
  "\u62A5\u544A\uFF01\u53D1\u73B0\u4E00\u53EA\u4EBA\u7C7B",
  "\u6EF4\u2014\u2014\u8111\u6D1E\u5DF2\u5F00\u673A",
  "\u6211\u8981\u662F\u732B\u5C31\u8E72\u952E\u76D8",
  "\u4ECA\u5929\u5FC3\u60C5\uFF1A\u4E03\u5206\u597D\u5947",
  "\u6697\u53F7\u5BF9\u4E0A\u4E86\u5417\uFF1F",
  "\u7CFB\u597D\u5B89\u5168\u5E26\uFF0C\u51FA\u53D1\uFF01",
  "\u5618\uFF0C\u6211\u4EEC\u6084\u6084\u5F00\u5DE5",
  "\u4F60\u5DF2\u7ECF\u8FC8\u51FA\u7B2C\u4E00\u6B65",
  "\u96BE\u9898\u62C6\u5F00\u5C31\u662F\u5C0F\u9898",
  "\u5361\u4F4F\u8BF4\u660E\u5728\u524D\u8FDB",
  "\u4F60\u7684\u60F3\u6CD5\u503C\u5F97\u8BA4\u771F\u804A",
  "\u6162\u70B9\u6CA1\u5173\u7CFB\uFF0C\u65B9\u5411\u5BF9",
  "\u50BB\u95EE\u9898\u4E5F\u6B22\u8FCE\uFF01",
  "\u4F60\u79BB\u7B54\u6848\u5F88\u8FD1\u4E86",
  "\u8F9B\u82E6\u5566\uFF0C\u5148\u804A\u804A\u5427",
  "\u4ECE\u201C\u6211\u60F3\u8BD5\u8BD5\u201D\u5F00\u59CB",
  "\u5403\u996D\u4E86\u5417\uFF1F",
  "\u5468\u51E0\u90FD\u8425\u4E1A",
  "\u4ECA\u5929\u8FC7\u5F97\u600E\u4E48\u6837\uFF1F",
  "\u55E8\uFF0C\u597D\u4E45\u4E0D\u89C1\uFF01",
  "\u4F60\u6765\u5566\uFF01",
  "\u70E6\u5FC3\u4E8B\u4EA4\u7ED9\u6211",
  "\u4ECA\u5929\u8BA4\u771F\u8FD8\u662F\u8F7B\u677E\uFF1F",
  "\u6B22\u8FCE\u56DE\u6765\uFF01\u5EA7\u4F4D\u7559\u7740",
  "\u6765\u90FD\u6765\u4E86\uFF0C\u804A\u804A\u5427",
  "\u4ECA\u5929\u4E5F\u4E00\u8D77\u52A0\u6CB9\uFF01",
  "\u6668\u95F4\u9050\u60F3\uFF1F",
  "\u591C\u6E38\uFF1F"
];
var greetingCatalogs = {
  "zh-CN": {
    shared: sharedGreetings,
    deepseek: [
      "\u53BB\u66F4\u6DF1\u5904\u770B\u770B\uFF1F",
      "\u597D\u5947\u5FC3\u5DF2\u4E0B\u6F5C",
      "\u4ECA\u5929\u60F3\u6F5C\u591A\u6DF1\uFF1F",
      "\u5C0F\u9CB8\u5728\u542C\uFF0C\u6162\u6162\u8BF4",
      "\u5148\u95EE\u5C0F\u9CB8\uFF0C\u518D\u95EE\u5927\u6D77",
      "\u7B54\u6848\u85CF\u5728\u54EA\u7247\u6D77\uFF1F",
      "\u6CBF\u7740\u9CB8\u8FF9\u8D70\u8D70\uFF1F",
      "\u6DF1\u6F5C\u524D\u5148\u559D\u53E3\u8336",
      "\u628A\u96BE\u9898\u6F5C\u6210\u5C0F\u9898",
      "\u4ECA\u5929\u4E5F\u5E26\u7740\u597D\u5947\u51FA\u6D77",
      "\u6DF1\u5EA6\u6C42\u7D22\uFF0C\u9CB8\u559C\u76F8\u9047",
      "\u4E00\u9CB8\u60CA\u4EBA\uFF0C\u5F00\u804A\u5427\uFF01",
      "\u9CB8\u8BDA\u6240\u81F3\uFF0C\u91D1\u77F3\u4E3A\u5F00",
      "\u9CB8\u76CA\u6C42\u7CBE\uFF0C\u4ECE\u63D0\u95EE\u5F00\u59CB",
      "\u6211\u5728\u9CB8\u542C\uFF0C\u8BF7\u8BB2",
      "\u6DF1\u5F97\u6211\u5FC3\uFF0C\u8BF7\u5F00\u53E3",
      "\u6DF1\u5165\u6D45\u51FA\uFF0C\u4ECE\u4F60\u5F00\u59CB",
      "Deep\u4E00\u4E0B\uFF0C\u804A\u804A\u5427",
      "\u6765\u70B9Deep\u601D\u8003\uFF1F",
      "\u9CB8\u559C\u4E0D\u9CB8\u559C\uFF1F",
      "\u6D77\u9614\u51ED\u9C7C\u8DC3\uFF0C\u804A\u5427",
      "\u9CB8\u5F69\u5BF9\u8BDD\uFF0C\u5373\u523B\u5F00\u59CB",
      "Seek\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053",
      "\u6C42\u7D22\u4E0D\u6B62\uFF0C\u804A\u4E2A\u591F",
      "\u9CB8\u5929\u52A8\u5730\u7684\u95EE\u9898\u5462\uFF1F",
      "\u6F5C\u6C34\u5F88\u4E45\uFF0C\u7B49\u4F60\u5192\u6CE1",
      "\u6DF1\u85CF\u4E0D\u9732\uFF0C\u7B49\u4F60\u6765\u95EE",
      "\u6C34\u6DF1\u4E0D\u6015\uFF0C\u6709\u6211\u5728",
      "\u9CB8\u9C7C\u5DF2\u5C31\u4F4D\uFF0C\u8BF7\u63D0\u95EE",
      "\u522B\u6015\u6DF1\uFF0C\u6211\u4F1A\u6E38\u6CF3",
      "\u6DF1\u547C\u5438\uFF0C\u518D\u6162\u6162\u95EE",
      "\u6C42\u7D22\u8DEF\u4E0A\uFF0C\u6211\u966A\u4F60",
      "\u4ECA\u5929Seek\u4EC0\u4E48\u5462\uFF1F",
      "Hi\uFF0C\u9CB8\u9C7C\u5728\u7EBF\uFF01",
      "\u8111\u6D1E\u6DF1\u4F3C\u6D77\uFF0C\u6765\u5427\uFF01",
      "\u5C0F\u9CB8\u9C7C\u55B7\u6C34\u6B22\u8FCE\u4F60",
      "\u96BE\u9898\u518D\u6DF1\uFF0C\u4E5F\u80FD\u635E\u8D77",
      "\u635E\u5230\u7B54\u6848\uFF0C\u7B97\u6211\u9CB8\u559C",
      "\u627E\u7B54\u6848\uFF1F\u627E\u6211Seek",
      "\u6C42\u7D22\u65E0\u6DAF\uFF0C\u804A\u5219\u6709\u6DAF"
    ]
  },
  en: {
    shared: [
      "Conversations under moonlight?",
      "Pull up a chair!",
      "What's on your mind?",
      "Let's turn a spark into fire",
      "Blank page. Lovely. Let's fill it",
      "Tell me what you're mulling over",
      "A curious mind? Begin whenever",
      "Let's catch some fireflies",
      "Morning, noon, or midnight? Hi!",
      "What shall we wonder today?",
      "Hello! Caffeine optional",
      "Fresh tab, fresh ideas",
      "Ask away. I'm moderately sure",
      "Welcome back! Touched nothing",
      "Today's special: answers",
      "State your question or snack",
      "I'm all ears. Metaphorically",
      "Let's make today less chaotic",
      "Your wish is my prompt",
      "Beep boop. Kidding. Hi, human!",
      "If I had a tail, it'd wag",
      "Warning: contains dad jokes",
      "Plot twist: I'm excited!",
      "Warming up the brain hamsters",
      "Forecast: scattered brilliance",
      "Knock knock! Ask who's there",
      "Rabbit hole? I packed snacks",
      "You've got this!",
      "Big problems wear trench coats",
      "Stuck is step one of unstuck",
      "No silly questions here",
      "Show up. That's the hard part",
      "Progress, not perfection!",
      "Bring me your messy draft",
      "Hey you! How's your day?",
      "Take a breath. What's up?",
      "Glad you're here. Seriously",
      "Let's make something good!",
      "Come as you are",
      "Coffee's brewing. What's up?",
      "Hello again!",
      "Whatever the hour, welcome",
      "Ready when you are!",
      "Brainstorm or friendly ear?"
    ],
    deepseek: [
      "Shall we dive a little deeper?",
      "The whale is all ears",
      "Follow the trail of bubbles",
      "A deep dive, after tea?",
      "Seek what the tide left behind",
      "Curiosity goes underwater",
      "Some ideas hide below the waves",
      "One small dive at a time",
      "What shall we sound out?",
      "Whale hello, curious human",
      "Welcome to the deep end!",
      "Whale hello there!",
      "Whale, whale, whale. Hello!",
      "Seek and ye shall find",
      "Hide and Seek? You found me!",
      "Shell we dive in?",
      "Let's get deep, shall we?",
      "Sea what I can do?",
      "Whale done for showing up!",
      "Dive in, the thoughts are fine",
      "Deep thoughts, shallow worries",
      "Seeking answers? Seek no more",
      "Finders keepers, Seekers helpers",
      "Take a deep breath, then seek",
      "No question is too deep",
      "Fin-ally, someone to talk to!",
      "I'm all fins and ears",
      "Let's make some waves!",
      "Ask away, don't be shellfish",
      "Orca-y, let's begin!",
      "Dolphin-itely here to help!",
      "Let's dive deep into it",
      "Seek you soon!",
      "Seeking greatness? Same!",
      "Today we seek, tomorrow we find",
      "Tide's in, ideas are flowing",
      "It's whale-y good to see you",
      "Sea-ing is believing. Ask me!",
      "Surf's up, questions welcome",
      "Bring me your deepest question"
    ]
  }
};
var greetingLetterPoses = [
  [0.018, -1.2],
  [-0.052, 0.9],
  [0.027, -0.8],
  [-0.029, 1.35],
  [0.044, -1.05],
  [-0.033, 0.85],
  [0.015, 1.2]
];
var greetingTransitions = [
  {
    order: (index) => index,
    spacing: 18,
    leave: [0, -0.11, -2.4],
    enter: [0, 0.15, 2.8],
    settle: [0, -0.016, -0.38]
  },
  {
    order: (index, count) => count - index - 1,
    spacing: 21,
    leave: [0.16, -0.035, 2.5],
    enter: [-0.19, 0.035, -3],
    settle: [0.018, 0, 0.46]
  },
  {
    order: (index, count) => Math.abs(index - (count - 1) / 2),
    spacing: 29,
    leave: [0, 0.09, 1.5, 0.96],
    enter: [0, -0.16, -2, 0.95],
    settle: [0, 0.02, 0.32]
  }
];

// src/client/sidebar.js
var PROJECT_ICONS = [
  ["folder", "\u6587\u4EF6\u5939", "Folder"],
  ["server", "\u670D\u52A1\u5668", "Server"],
  ["globe", "\u5730\u7403", "Globe"],
  ["book", "\u4E66\u7C4D", "Book"],
  ["code", "\u4EE3\u7801", "Code"],
  ["layers", "\u53E0\u5C42", "Layers"]
];
var PROJECT_ICON_STORAGE = "dsh-deepseek-ui.workspace-icon.";
function workspaceIcon(value) {
  return PROJECT_ICONS.some(([icon]) => icon === value) ? value : "folder";
}
var nativeStates = /* @__PURE__ */ new Map([["ongoing", "running"], ["warning", "waiting"], ["done", "unread"]]);
function sidebarStatus(state) {
  return nativeStates.get(state);
}
function isListedChat(session) {
  return Boolean(session && !session.blank && session.origin !== "subagent");
}
function sidebarSessionLists(list, workspaceState) {
  const workspaceBySession = /* @__PURE__ */ new Map();
  for (const workspace of workspaceState?.items ?? []) {
    for (const id of workspace.sessionIds) workspaceBySession.set(id, workspace);
  }
  const archivedIds = new Set(workspaceState?.archivedSessionIds);
  const catalog = /* @__PURE__ */ new Map();
  for (const id of list?.ids ?? []) {
    const session = list.byId[id];
    if (isListedChat(session)) {
      catalog.set(id, { session, workspace: workspaceBySession.get(id) });
    }
  }
  const recent = [];
  const archived = [];
  for (const row of [...catalog.values()].sort((a, b) => b.session.updatedAt - a.session.updatedAt)) {
    (archivedIds.has(row.session.id) ? archived : recent).push(row);
  }
  const pinned = [];
  for (const id of new Set(workspaceState?.pinnedSessionIds)) {
    const row = catalog.get(id);
    if (row && !archivedIds.has(id)) pinned.push(row);
  }
  return { recent, archived, pinned };
}

// src/client/ui.jsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var noValue = () => void 0;
var noSubscription = () => () => {
};
function useStore(store) {
  const subscribe = (0, import_react.useCallback)((listener) => store?.subscribe(listener) ?? noSubscription(), [store]);
  const snapshot = (0, import_react.useCallback)(() => store?.getSnapshot(), [store]);
  return (0, import_react.useSyncExternalStore)(subscribe, store ? snapshot : noValue, store ? snapshot : noValue);
}
function useLanguage(locale) {
  return useStore(locale)?.active?.startsWith("zh") ? "zh-CN" : "en";
}
function useSlotVersion(slots, keys) {
  const subscribe = (0, import_react.useCallback)((listener) => {
    const subscriptions = keys.map((key) => slots.subscribe(key, listener));
    return () => {
      for (const unsubscribe of subscriptions) unsubscribe();
    };
  }, [slots, keys]);
  const snapshot = (0, import_react.useCallback)(() => keys.reduce((version, key) => version + slots.getVersion(key), 0), [slots, keys]);
  return (0, import_react.useSyncExternalStore)(subscribe, snapshot);
}
function useReducedMotion() {
  const [reduce, setReduce] = (0, import_react.useState)(() => globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);
  (0, import_react.useEffect)(() => {
    const query = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return reduce;
}
var glyphs = {
  plus: ["M12 5v14M5 12h14"],
  close: ["m6 6 12 12M18 6 6 18"],
  overview: ["M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM8.5 8h7m-7 4h7m-7 4H13"],
  diff: ["M6 4h9l3 3v13H6V4Zm8 0v4h4m-9 4h6m-3-3v6m-3 2h6"],
  more: ["M5 12h.01M12 12h.01M19 12h.01"],
  terminal: ["M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm1 4 3 3-3 3m6 0h4"],
  split: ["M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm6 0v14"],
  maximize: ["M9 4H4v5m11-5h5v5M4 15v5h5m11-5v5h-5"],
  search: ["M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-1.9 4.6 4.9 4.9"],
  recents: ["M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-4.5V12l3 1.8"],
  calendar: ["M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm2-1.4v3.7m8-3.7v3.7M4 10h16"],
  pin: ["m16 3 5 5-4 2-2 6-3 1-5-5 1-3 6-2 2-4ZM9.5 14.5 4 20"],
  back: ["m10 6-6 6 6 6M4 12h16"],
  next: ["m9 6 6 6-6 6"],
  mode: ["M3.5 12h4c3.8 0 3.6-5 7.4-5h5.6m-2.8-2.8L20.5 7l-2.8 2.8M7.5 12c3.8 0 3.6 5 7.4 5h5.6m-2.8-2.8 2.8 2.8-2.8 2.8"],
  zap: ["M13 3 5 14h6l-1 7 9-12h-6l1-6Z"],
  restore: ["M5 10a7 7 0 1 1 .8 7M5 5v5h5"],
  check: ["m5 12 4 4 10-10"],
  pencil: ["m5 15-1 5 5-1L20 8l-4-4L5 15Zm8-8 4 4"],
  book: ["M12 6a8 8 0 0 0-8-2v14a8 8 0 0 1 8 2m0-14a8 8 0 0 1 8-2v14a8 8 0 0 0-8 2m0-14v14"],
  code: ["m8 7-5 5 5 5m8-10 5 5-5 5m-2-12-4 14"],
  coffee: ["M4 8h12v5a6 6 0 0 1-12 0V8Zm12 1h2a2.5 2.5 0 0 1 0 5h-2M3 21h15M8 3v2m4-2v2"],
  light: ["M8 16a6.5 6.5 0 1 1 8 0v2H8Zm1 5h6"],
  folder: ["M3.5 7a2 2 0 0 1 2-2H9l2 2h7.5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"],
  server: ["M5 4h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 9h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2ZM7 7.5h.1M7 16.5h.1"],
  globe: ["M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.5 0a3.5 8 0 1 1-7 0 3.5 8 0 1 1 7 0ZM4 12h16"],
  layers: ["m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5"],
  computer: ["M5.5 5h13A1.5 1.5 0 0 1 20 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 14.5v-8A1.5 1.5 0 0 1 5.5 5ZM2.5 19h19"],
  file: ["M6 3h8l4 4v14H6zM14 3v5h4m-9 4h6m-6 4h6"],
  branch: ["M9 5.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM19 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 7.5v9m0-4a10 10 0 0 0 10-4.5"],
  reviewAsk: ["M8 13.2V6.5a1.25 1.25 0 0 1 2.5 0v4.1M10.5 9.8V4.6a1.25 1.25 0 0 1 2.5 0v6m0-1.1V5.8a1.25 1.25 0 0 1 2.5 0v5m0-.9V8.2a1.25 1.25 0 0 1 2.5 0V14a6.3 6.3 0 0 1-10.8 4.4l-2.6-3.6a1.3 1.3 0 0 1 1.9-1.7l1.5 1.4"],
  reviewEdit: ["M12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6M9 15l.6-3.5L17 4l3 3-7.5 7.4L9 15Z"],
  reviewAuto: ["M12 3 5 6v5.4c0 4.2 2.6 7.2 7 9.6 4.4-2.4 7-5.4 7-9.6V6l-7-3Zm-3 8.8 2.2 2.2 4-4.2"],
  reviewFull: ["M7 10h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Zm1 0V7a4 4 0 0 1 7.6-1.7M12 14v3"],
  reviewLocked: ["M7 10h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Zm1 0V7a4 4 0 0 1 8 0v3m-4 4v3"]
};
function Icon({ name: name2, className }) {
  const [path] = glyphs[name2];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      className: className ? `dsh-ui-icon ${className}` : "dsh-ui-icon",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.55",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: path })
    }
  );
}

// src/client/hero.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var suggestions = [
  ["pencil", "\u64B0\u5199", "Write", "\u5E2E\u6211\u628A\u8FD9\u6BB5\u8349\u7A3F\u6574\u7406\u6210\u4E00\u7BC7\u6E05\u6670\u7684\u6587\u7AE0\u3002", "Help me turn this draft into a clear article."],
  ["book", "\u5B66\u4E60", "Learn", "\u7528\u4E00\u4E2A\u5177\u4F53\u4F8B\u5B50\uFF0C\u4E3A\u6211\u8BB2\u89E3\u4E00\u4E2A\u65B0\u6982\u5FF5\u3002", "Teach me a new concept with a concrete example."],
  ["code", "\u7F16\u7A0B", "Code", "\u5E2E\u6211\u68B3\u7406\u8FD9\u4E2A\u7F16\u7A0B\u4EFB\u52A1\u7684\u5B9E\u73B0\u6B65\u9AA4\u3002", "Help me plan the steps for this coding task."],
  ["coffee", "\u65E5\u5E38\u751F\u6D3B", "Everyday life", "\u5E2E\u6211\u5B89\u6392\u4E00\u4E2A\u4ECE\u5BB9\u7684\u5468\u672B\u3002", "Help me plan a relaxing weekend."],
  ["light", "DeepSeek \u63A8\u8350", "DeepSeek picks", "\u5E2E\u6211\u6574\u7406\u4ECA\u5929\u503C\u5F97\u7EE7\u7EED\u63A8\u8FDB\u7684\u4E09\u4EF6\u4E8B\u3002", "Help me identify three things worth moving forward today."]
];
function pickGreeting(language, previous, random = Math.random) {
  const { deepseek, shared } = greetingCatalogs[language];
  const choices = (random() < 0.58 ? deepseek : shared).filter((phrase) => phrase !== previous);
  return choices[Math.floor(random() * choices.length)];
}
function BrandMark({ size = 24, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { className, src: deepseek_default, width: size, height: size * 21 / 27, alt: "", "aria-hidden": "true" });
}
function BrandName() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "dsh-ui-brand-name", children: "DeepSeek" });
}
var STANDALONE_KEY = "dsh-deepseek-ui.standalone-session.";
var ADD_WORKSPACE = "::dsh-ui-add-workspace";
function isStandalone(sessionId) {
  if (!sessionId) return false;
  try {
    return localStorage.getItem(STANDALONE_KEY + sessionId) === "1";
  } catch {
    return false;
  }
}
function findElement(tree, matches) {
  if (Array.isArray(tree)) {
    for (const branch of tree) {
      const match = findElement(branch, matches);
      if (match) return match;
    }
  }
  if (!(0, import_react2.isValidElement)(tree)) return void 0;
  return matches(tree) ? tree : findElement(tree.props.children, matches);
}
function replaceElements(tree, replacements) {
  if (Array.isArray(tree)) {
    const children2 = tree.map((element) => replaceElements(element, replacements));
    return children2.every((child, index) => child === tree[index]) ? tree : children2;
  }
  if (!(0, import_react2.isValidElement)(tree)) return tree;
  if (replacements.has(tree)) return replacements.get(tree);
  const children = replaceElements(tree.props.children, replacements);
  return children === tree.props.children ? tree : (0, import_react2.cloneElement)(tree, void 0, children);
}
function HeroWorkspaceFrame({ hero, children, locale, conversation, useWorkspaces }) {
  const english = useLanguage(locale) === "en";
  const chain = hero ? findElement(children, (element) => element.props.slotKey === "conversation.composer") : void 0;
  const sessionId = chain?.props.ownerProps.sessionId;
  const workspaces = useWorkspaces((snapshot) => snapshot);
  const standalone = isStandalone(sessionId) && workspaces.phase === "ready" && !workspaces.items.some((workspace) => workspace.sessionIds.includes(sessionId));
  const block = useStore(standalone ? conversation.blocks.storeFor(sessionId) : void 0);
  if (!standalone) return children;
  const stack = chain?.props.opts?.fallback;
  const picker = findElement(stack, (element) => element.props.slotKey === "conversation.hero.workspace");
  const bar = findElement(stack, (element) => element.props.slotKey === "conversation.composer.bar");
  const anchorRef = picker?.props.ownerProps.anchorRef;
  const chip = anchorRef && findElement(stack, (element) => element.props.buttonRef === anchorRef);
  if (!bar || !picker || !chip) return children;
  const owner = bar.props.ownerProps;
  const replacements = /* @__PURE__ */ new Map([[picker, (0, import_react2.cloneElement)(picker, {
    ownerProps: { ...picker.props.ownerProps, standalone: true }
  })]]);
  if (!picker.props.ownerProps.selectedId) {
    replacements.set(chip, (0, import_react2.cloneElement)(chip, { label: english ? "No project" : "\u65E0\u9879\u76EE" }));
  }
  if (owner.disabled && owner.onRequestWorkspace) {
    replacements.set(bar, (0, import_react2.cloneElement)(bar, { ownerProps: {
      variant: owner.variant,
      occurrence: owner.occurrence,
      placeholder: block?.reason ?? chip.props.t("placeholder.hero"),
      blocked: block
    } }));
  }
  const fallback = replaceElements(stack, replacements);
  const composer = (0, import_react2.cloneElement)(chain, { opts: { ...chain.props.opts, fallback } });
  return replaceElements(children, /* @__PURE__ */ new Map([[chain, composer]]));
}
function projectIcons() {
  const icons = /* @__PURE__ */ new Map();
  for (const icon of document.querySelectorAll("[data-dsh-ui-project-icon]")) {
    const key = icon.closest('[data-row-key^="workspace:"]')?.dataset.rowKey;
    if (key) icons.set(key.slice("workspace:".length), icon.dataset.dshUiProjectIcon);
  }
  return (id) => {
    let stored;
    try {
      stored = localStorage.getItem(PROJECT_ICON_STORAGE + id);
    } catch {
    }
    return workspaceIcon(stored ?? icons.get(id));
  };
}
function observeProjectIconChanges(listener) {
  const observer = new MutationObserver(listener);
  observer.observe(document.body, { attributes: true, attributeFilter: ["data-dsh-ui-project-icon"], subtree: true });
  const storage = (event) => {
    if (event.key === null || event.key.startsWith(PROJECT_ICON_STORAGE)) listener();
  };
  window.addEventListener("storage", storage);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", storage);
  };
}
function WorkspaceGlyph({ icon, workspaceId }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "span",
    {
      "aria-hidden": "true",
      className: "dsh-ui-workspace-glyph",
      "data-workspace-icon": icon,
      "data-workspace-id": workspaceId,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { name: icon })
    }
  );
}
function HeroWorkspacePicker({
  open,
  anchorRef,
  selectedId,
  onPick,
  onClose,
  standalone,
  locale,
  workspaces,
  uiWorkspace,
  layout,
  renderFactorySlot,
  useWorkspaces
}) {
  const english = useLanguage(locale) === "en";
  const entries = useWorkspaces((snapshot) => snapshot.items);
  const [anchor, setAnchor] = (0, import_react2.useState)(null);
  const [busy, setBusy] = (0, import_react2.useState)(false);
  const [error, setError] = (0, import_react2.useState)(null);
  const [, refreshIcons] = (0, import_react2.useState)(0);
  const operation = (0, import_react2.useRef)(null);
  const canPick = "dshDesktop" in globalThis && typeof uiWorkspace.pickDirectory === "function";
  const newProject = english ? "New project" : "\u65B0\u5EFA\u9879\u76EE";
  const tWorkspace = locale.bind("workspace");
  const readIcon2 = projectIcons();
  (0, import_react2.useLayoutEffect)(() => {
    setAnchor(anchorRef?.current ?? null);
  });
  (0, import_react2.useEffect)(() => observeProjectIconChanges(() => refreshIcons((value) => value + 1)), []);
  (0, import_react2.useEffect)(() => () => operation.current?.abort(), []);
  async function chooseDirectory() {
    if (operation.current) return;
    const lifetime = new AbortController();
    operation.current = lifetime;
    const signal = AbortSignal.any([lifetime.signal, layout.beginNavigation()]);
    onClose();
    setBusy(true);
    setError(null);
    try {
      const path = await uiWorkspace.pickDirectory();
      if (!path || signal.aborted) return;
      const workspace = await workspaces.create({ path });
      if (!signal.aborted) onPick(workspace.workspaceId);
    } catch (failure) {
      if (!signal.aborted) setError(failure?.message ?? String(failure));
    } finally {
      operation.current = null;
      if (!lifetime.signal.aborted) setBusy(false);
    }
  }
  const localizedDefault = tWorkspace("workspace.defaultName");
  const labels2 = entries.map(({ title }) => title === "default-workspace" ? localizedDefault : title);
  const counts = /* @__PURE__ */ new Map();
  for (const label of labels2) counts.set(label, (counts.get(label) ?? 0) + 1);
  const items = entries.map(({ workspaceId, path }, index) => ({
    id: workspaceId,
    icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(WorkspaceGlyph, { icon: readIcon2(workspaceId), workspaceId }),
    label: counts.get(labels2[index]) === 1 ? labels2[index] : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "dsh-ui-workspace-name", title: path, children: [
      labels2[index],
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("small", { children: path })
    ] })
  }));
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    anchor && (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      WorkspaceGlyph,
      {
        icon: selectedId ? readIcon2(selectedId) : standalone ? "computer" : "folder",
        workspaceId: selectedId
      }
    ), anchor),
    canPick ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_dsh_client_ui_primitives.Menu,
      {
        open: open && !busy,
        anchor: null,
        anchorRef,
        items,
        footer: [{ id: ADD_WORKSPACE, label: newProject, icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { name: "plus" }) }],
        selectedId,
        onSelect: (id) => {
          if (id === ADD_WORKSPACE) void chooseDirectory();
          else onPick(id);
        },
        onClose,
        side: "bottom",
        portal: true
      }
    ) : renderFactorySlot("workspace.picker", { open, anchorRef, selectedId, onPick, onClose }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_dsh_client_ui_primitives.Modal,
      {
        open: error !== null,
        onClose: () => setError(null),
        closeLabel: tWorkspace("close"),
        title: tWorkspace("folderError.title"),
        children: error
      }
    )
  ] });
}
function animateGreeting(text, emblem, transition, frames, timing, strength) {
  const letters = [...text.children];
  const framesFor = (isEmblem) => frames.map(({ pose, ...frame }) => {
    if (!pose) return { ...frame, transform: "none" };
    const [x, y, angle, scale = 1] = pose;
    const magnification = isEmblem ? frame.opacity === 0 ? 0.83 : 1.02 : 1 + (scale - 1) * strength;
    return {
      ...frame,
      transform: `translate(${x * strength}em, ${y * strength}em) rotate(${angle * strength * (isEmblem ? 2 : 1)}deg) scale(${magnification})`
    };
  });
  const options = (index) => ({
    duration: timing.duration,
    easing: timing.easing,
    fill: "both",
    delay: strength ? timing.stagger * transition.order(index, letters.length) : 0
  });
  const letterFrames = framesFor(false);
  return [
    ...letters.map((letter, index) => letter.animate(letterFrames, options(index))),
    emblem.animate(framesFor(true), options(0))
  ];
}
function Greeting({ language, anchor, emblem, reduceMotion }) {
  const [phrase, setPhrase] = (0, import_react2.useState)(() => pickGreeting(language));
  const text = (0, import_react2.useRef)(null);
  const motions = (0, import_react2.useRef)(null);
  const arrival = (0, import_react2.useRef)(null);
  const previousTransition = (0, import_react2.useRef)(null);
  const english = language === "en";
  const parts = english ? phrase.split(" ") : Array.from(phrase);
  const partsWithText = parts.filter((part) => /[\p{L}\p{N}]/u.test(part)).length;
  const strength = Math.min(0.6, Math.max(0, partsWithText - 2) * 0.15);
  (0, import_react2.useLayoutEffect)(() => {
    const next = arrival.current;
    if (!next) return;
    arrival.current = null;
    const { transition, oldLeft } = next;
    const easing = "cubic-bezier(.22,.72,.26,1)";
    const current = animateGreeting(text.current, emblem.current, transition, [
      { opacity: 0, pose: transition.enter },
      { opacity: 1, pose: transition.settle, offset: 0.8 },
      { opacity: 1 }
    ], { duration: 305, easing, stagger: transition.spacing }, strength);
    const box = anchor.current.getBoundingClientRect();
    const container = (anchor.current.closest("[data-conversation-content]") ?? anchor.current.parentElement).getBoundingClientRect();
    const shift = Math.max(container.left - box.left, Math.min(oldLeft - box.left, container.right - box.right));
    if (Math.abs(shift) > 0.5) {
      current.push(anchor.current.animate([{ translate: `${shift}px` }, { translate: "0px" }], { duration: 305, easing }));
    }
    motions.current = current;
    void Promise.allSettled(current.map((motion) => motion.finished)).then(() => {
      current.forEach((motion) => motion.cancel());
      if (motions.current === current) motions.current = null;
    });
  }, [phrase]);
  (0, import_react2.useEffect)(() => () => {
    motions.current?.forEach((motion) => motion.cancel());
    motions.current = null;
    arrival.current = null;
  }, []);
  async function change() {
    if (motions.current) return;
    const next = pickGreeting(language, phrase);
    if (reduceMotion || !text.current?.animate) {
      setPhrase(next);
      return;
    }
    const choices = greetingTransitions.filter((transition2) => transition2 !== previousTransition.current);
    const transition = choices[Math.floor(Math.random() * choices.length)];
    previousTransition.current = transition;
    const leaving = animateGreeting(text.current, emblem.current, transition, [
      { opacity: 1 },
      { opacity: 0, pose: transition.leave }
    ], { duration: 145, easing: "ease-in", stagger: transition.spacing * 0.6 }, strength);
    motions.current = leaving;
    await Promise.allSettled(leaving.map((motion) => motion.finished));
    if (motions.current !== leaving) return;
    arrival.current = { transition, oldLeft: anchor.current.getBoundingClientRect().left };
    leaving.forEach((motion) => motion.cancel());
    setPhrase(next);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "button",
      {
        ref: anchor,
        type: "button",
        className: "dsh-ui-greeting",
        lang: language,
        onClick: change,
        title: english ? "Change greeting" : "\u5207\u6362\u95EE\u5019\u8BED",
        style: { "--greeting-length": parts.length },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "dsh-ui-greeting-mark", ref: emblem, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BrandMark, { size: 36 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "span",
            {
              ref: text,
              className: "dsh-ui-greeting-text",
              "aria-hidden": "true",
              "data-letter-motion": strength > 0 ? "" : void 0,
              style: { "--greeting-strength": strength },
              children: parts.map((part, index) => {
                const [offset, tilt] = greetingLetterPoses[index % greetingLetterPoses.length];
                return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react2.Fragment, { children: [
                  english && index > 0 ? " " : null,
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "dsh-ui-greeting-letter", style: {
                    "--letter-offset": `${offset}em`,
                    "--letter-tilt": `${tilt}deg`,
                    "--letter-breath-delay": `${-index * 0.57}s`
                  }, children: part })
                ] }, index);
              })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "dsh-ui-sr-only", children: phrase })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "dsh-ui-sr-only", "aria-live": "polite", "aria-atomic": "true", children: phrase })
  ] });
}
function Suggestions({ language, fill }) {
  const english = language === "en";
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "dsh-ui-suggestions", role: "group", "aria-label": english ? "Prompt suggestions" : "\u5FEB\u6377\u63D0\u793A", children: suggestions.map(([icon, zh, en, zhPrompt, enPrompt]) => {
    const prompt = english ? enPrompt : zhPrompt;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { className: "dsh-ui-suggestion", type: "button", onClick: () => fill(prompt), children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { name: icon }),
      english ? en : zh
    ] }, icon);
  }) });
}
function HeroMark({ locale, sessions, modelDirectories, conversation, renderPreselection }) {
  const language = useLanguage(locale);
  const reduceMotion = useReducedMotion();
  const anchor = (0, import_react2.useRef)(null);
  const emblem = (0, import_react2.useRef)(null);
  const content = (0, import_react2.useRef)(null);
  const pendingPrompt = (0, import_react2.useRef)(null);
  const [mount, setMount] = (0, import_react2.useState)(null);
  const [controls, setControls] = (0, import_react2.useState)(null);
  const [sessionId, setSessionId] = (0, import_react2.useState)(void 0);
  (0, import_react2.useLayoutEffect)(() => {
    const element = anchor.current;
    const region = element.closest("[data-conversation-content]");
    const seat = element.closest("[data-composer-seat]");
    if (!region || !seat) return;
    const portal = document.createElement("div");
    portal.className = "dsh-ui-hero-extras";
    seat.append(portal);
    content.current = region;
    setMount(portal);
    const update = () => {
      setSessionId(region.dataset.conversationSession);
      setControls(seat.querySelector('[data-composer-card] [class*="_standardControls"]'));
    };
    const observer = new MutationObserver((records) => {
      if (records.some((record) => [...record.addedNodes, ...record.removedNodes].some((node) => node instanceof Element && (node.matches("[data-composer-card]") || node.querySelector("[data-composer-card]"))))) update();
    });
    const sessionObserver = new MutationObserver(update);
    observer.observe(seat, { childList: true, subtree: true });
    sessionObserver.observe(region, { attributes: true, attributeFilter: ["data-conversation-session"] });
    update();
    return () => {
      observer.disconnect();
      sessionObserver.disconnect();
      portal.remove();
      content.current = null;
    };
  }, []);
  function fill(prompt, target = sessionId) {
    const binding = target ? sessions.binding(target) : void 0;
    if (!binding) {
      pendingPrompt.current = prompt;
      content.current?.querySelector("[data-composer-card]")?.click();
      return false;
    }
    const input = conversation.input.for(binding.ctx);
    input.setDraft(prompt);
    input.focus();
    return true;
  }
  (0, import_react2.useLayoutEffect)(() => {
    if (sessionId && pendingPrompt.current !== null && fill(pendingPrompt.current, sessionId)) pendingPrompt.current = null;
  }, [sessionId]);
  (0, import_react2.useEffect)(() => {
    if (!sessionId || !sessions.binding(sessionId) || reduceMotion) return;
    const { store } = modelDirectories.directoryFor(sessionId);
    let previous = store.getSnapshot().current;
    let breath;
    const tone = store.subscribe(() => {
      const current = store.getSnapshot().current;
      if (!current) return;
      const changed = previous && (previous.provider !== current.provider || previous.model !== current.model);
      previous = current;
      const logo = emblem.current?.querySelector("img");
      if (!changed || !logo?.animate) return;
      breath?.cancel();
      breath = logo.animate([
        { scale: 1, opacity: 1 },
        { scale: 0.93, opacity: 0.88, offset: 0.38 },
        { scale: 1, opacity: 1 }
      ], { duration: 470, easing: "ease-in-out" });
    });
    return () => {
      tone();
      breath?.cancel();
    };
  }, [sessionId, reduceMotion, sessions, modelDirectories]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "dsh-ui-hero-mark", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Greeting, { language, anchor, emblem, reduceMotion }, language),
    controls && (0, import_react_dom.createPortal)(renderPreselection?.(sessionId), controls),
    mount && (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Suggestions, { language, fill }), mount)
  ] });
}

// src/client/composer.jsx
var import_react5 = require("react");

// src/client/popover.jsx
var import_react3 = require("react");

// src/client/popover-placement.js
function popoverPlacement(above, below, menuHeight) {
  const opensBelow = below >= menuHeight || below >= above;
  return { placement: opensBelow ? "below" : "above", maxHeight: Math.max(0, opensBelow ? below : above) };
}

// src/client/popover.jsx
var MARGIN = 8;
var GAP = 6;
function usePopover({ align = "right" } = {}) {
  const id = (0, import_react3.useId)();
  const anchor = (0, import_react3.useRef)(null);
  const panel = (0, import_react3.useRef)(null);
  const [open, setOpen] = (0, import_react3.useState)(false);
  const place = (0, import_react3.useCallback)(() => {
    const element = panel.current;
    if (!anchor.current || !element?.matches(":popover-open")) return;
    const button = anchor.current.getBoundingClientRect();
    const availableAbove = button.top - GAP - MARGIN;
    const availableBelow = window.innerHeight - button.bottom - GAP - MARGIN;
    const intrinsicHeight = element.scrollHeight + element.offsetHeight - element.clientHeight;
    const { placement, maxHeight } = popoverPlacement(availableAbove, availableBelow, intrinsicHeight);
    const above = placement === "above";
    const width = element.offsetWidth;
    const left = align === "left" ? button.left : button.right - width;
    element.dataset.placement = placement;
    element.style.maxHeight = `${maxHeight}px`;
    element.style.left = `${Math.max(MARGIN, Math.min(left, window.innerWidth - width - MARGIN))}px`;
    element.style.top = above ? "auto" : `${button.bottom + GAP}px`;
    element.style.bottom = above ? `${window.innerHeight - button.top + GAP}px` : "auto";
  }, [align]);
  const toggle = (0, import_react3.useCallback)((event) => setOpen(event.newState === "open"), []);
  const setPanel = (0, import_react3.useCallback)((element) => {
    panel.current?.removeEventListener("toggle", toggle);
    panel.current = element;
    if (element) {
      element.addEventListener("toggle", toggle);
      setOpen(element.matches(":popover-open"));
    }
  }, [toggle]);
  (0, import_react3.useLayoutEffect)(() => {
    if (open) place();
  });
  (0, import_react3.useEffect)(() => {
    if (!open) return;
    const observer = new ResizeObserver(place);
    if (anchor.current) observer.observe(anchor.current);
    const composer = anchor.current?.closest("[data-composer-card]");
    if (composer) observer.observe(composer);
    const region = anchor.current?.closest("[data-conversation-content], [data-sidebar-right-panel]");
    if (region) observer.observe(region);
    if (panel.current) observer.observe(panel.current);
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
    };
  }, [open, place]);
  function show() {
    if (!anchor.current || !panel.current || panel.current.matches(":popover-open")) return;
    panel.current.showPopover({ source: anchor.current });
    place();
  }
  function close({ focus = false } = {}) {
    if (panel.current?.matches(":popover-open")) panel.current.hidePopover();
    if (focus) requestAnimationFrame(() => anchor.current?.focus({ preventScroll: true }));
  }
  return {
    id,
    open,
    show,
    close,
    trigger: {
      ref: anchor,
      type: "button",
      popoverTarget: id,
      "aria-expanded": open,
      "aria-controls": id,
      "aria-haspopup": "dialog",
      onClick: (event) => {
        event.preventDefault();
        if (panel.current?.matches(":popover-open")) close();
        else show();
      }
    },
    content: { ref: setPanel, id, popover: "auto", role: "dialog", "data-align": align }
  };
}

// src/client/speed-ui.jsx
var import_react4 = require("react");

// src/client/speed.js
var WINDOW_MS = 2200;
var LIVE_HOLD_MS = 1400;
var MIN_SAMPLE_MS = 200;
function deltaText(chunk) {
  if (chunk.type === "text-delta" || chunk.type === "reasoning-delta") return chunk.text;
  if (chunk.type === "tool-call-delta") return (chunk.name ?? "") + (chunk.argumentsDelta ?? "");
  return "";
}
function estimateTokens(text) {
  const nonAscii = text.match(/[^\x00-\x7f]/gu)?.length ?? 0;
  return (text.length - nonAscii) / 4 + nonAscii;
}
function firstDeltaTime(stream = []) {
  for (const record of stream) {
    if (record.type === "chunk") {
      if (deltaText(record.chunk)) return record.time;
      continue;
    }
    const deltas = record.type === "tool-call-chunks" ? record.args : record.texts;
    let time = record.time0;
    for (let index = 0; index < (deltas?.length ?? 0); index += 1) {
      if (index > 0) time += record.dt[index - 1];
      if (deltas[index] || index === 0 && record.type === "tool-call-chunks" && record.name !== void 0) return time;
    }
  }
  return void 0;
}
function decodeRate(tokens, elapsedMs) {
  return Number.isFinite(tokens) && tokens >= 0 && Number.isFinite(elapsedMs) && elapsedMs > 0 ? tokens * 1e3 / elapsedMs : null;
}
function speedIntensity(rate) {
  return Number.isFinite(rate) ? Math.max(0, Math.min(1, (rate - 18) / (100 - 18))) : 0;
}
var OutputSpeed = class {
  #active;
  #recent = null;
  #step;
  observe({ change }) {
    if (change.kind === "prepend") return;
    if (change.kind === "replace") {
      this.#active = void 0;
      this.#recent = null;
      this.#step = void 0;
    }
    if (change.kind === "settle-assistant") {
      if (change.entry) this.#accept(change.entry.event);
      if (this.#active?.id === change.attemptId) this.#active = void 0;
      return;
    }
    for (const { event } of change.entries) this.#accept(event);
  }
  #accept(event) {
    const data = event.data;
    if (event.type === "assistant/live-chunk") {
      const text = deltaText(data.chunk);
      if (!text) return;
      if (this.#active?.id !== data.attemptId) this.#active = { id: data.attemptId, samples: [] };
      const samples = this.#active.samples;
      samples.push({ time: event.time, tokens: estimateTokens(text) });
      while (samples.length > 1 && samples[0].time < event.time - WINDOW_MS) samples.shift();
      if (this.#step?.first === void 0 && this.#step?.turn === data.turn && this.#step?.step === data.step) {
        this.#step.first = event.time;
      }
    } else if (event.type === "step/start") {
      this.#step = { turn: data.turn, step: data.step, first: void 0 };
      this.#active = void 0;
    } else if (event.type === "assistant/attempt" || event.type === "assistant/message") {
      const step = this.#step?.turn === data.turn && this.#step?.step === data.step ? this.#step : void 0;
      const first = step?.first ?? firstDeltaTime(data.stream);
      if (event.type === "assistant/message") {
        const rate = decodeRate(data.usage?.outputTokens, event.time - first);
        if (rate !== null) this.#recent = rate;
      } else if (step && first !== void 0) {
        step.first = first;
      }
      this.#active = void 0;
    } else if (event.type === "step/end" || event.type === "turn/end") {
      this.#active = void 0;
      this.#step = void 0;
    }
  }
  sample(now, stats) {
    const samples = this.#active?.samples ?? [];
    const latest = samples.at(-1);
    const streaming = latest !== void 0 && now - latest.time <= LIVE_HOLD_MS;
    if (streaming) {
      const active = samples.filter((sample) => sample.time >= now - WINDOW_MS);
      const first = active[0];
      const span = first ? latest.time - first.time : 0;
      if (active.length > 1 && span >= MIN_SAMPLE_MS) {
        const tokens = active.slice(1).reduce((total, sample) => total + sample.tokens, 0);
        return { kind: "live", rate: decodeRate(tokens, Math.max(span, now - first.time)) };
      }
    }
    if (this.#recent !== null) return { kind: "recent", rate: this.#recent };
    const aggregate = decodeRate(stats?.decodeTokens, stats?.decodeMs);
    return aggregate === null ? { kind: "waiting", rate: null } : { kind: "session", rate: aggregate };
  }
};

// src/client/speed-ui.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var emptySpeed = { kind: "waiting", rate: null };
function useOutputSpeed(binding) {
  const [reading, setReading] = (0, import_react4.useState)(emptySpeed);
  (0, import_react4.useEffect)(() => {
    if (!binding) return;
    const { eventSource, session } = binding;
    const stats = session.projections.faceOf("sessionStats");
    const speed = new OutputSpeed();
    const initial = eventSource.getSnapshot();
    speed.observe({ change: { kind: "replace", entries: initial.entries } });
    const refresh = () => {
      const next = speed.sample(Date.now(), stats.getSnapshot());
      if (next.rate !== null) next.rate = Math.round(next.rate * 10) / 10;
      setReading((previous) => previous.kind === next.kind && previous.rate === next.rate ? previous : next);
    };
    const offEvents = eventSource.subscribe(() => {
      speed.observe(eventSource.getSnapshot());
      refresh();
    });
    const offStats = stats.subscribe(refresh);
    refresh();
    const timer = setInterval(refresh, 200);
    return () => {
      clearInterval(timer);
      offEvents();
      offStats();
    };
  }, [binding]);
  return reading;
}
function useSpeedMotion(container, reading, effortOpen, speedOpen) {
  const reduceMotion = useReducedMotion();
  const current = (0, import_react4.useRef)(0);
  const target = reading.kind === "live" ? speedIntensity(reading.rate) : 0;
  (0, import_react4.useEffect)(() => {
    const root = container.current;
    if (!root) return;
    let frame;
    let last = performance.now();
    const apply2 = (intensity) => {
      root.style.setProperty("--dsh-ui-speed-intensity", intensity.toFixed(4));
      root.toggleAttribute("data-glowing", intensity > 0);
      const sharedRate = 1 + 4 * intensity;
      const pulseRate = 2.4 / (2.4 - 1.85 * intensity);
      const animated = [root, ...root.querySelectorAll("[data-dsh-ui-motion]")];
      for (const element of animated) {
        for (const animation of element.getAnimations()) {
          const name2 = animation.animationName;
          if (!["effort-spectrum-cycle", "dsh-ui-star-drift", "dsh-ui-zap-breathe"].includes(name2)) continue;
          const rate = name2 === "dsh-ui-zap-breathe" ? pulseRate : sharedRate;
          if (Math.abs(animation.playbackRate - rate) > 0.01) animation.updatePlaybackRate(rate);
        }
      }
    };
    const animate = (time) => {
      const fraction = 1 - Math.exp(-(time - last) / (target > current.current ? 145 : 350));
      last = time;
      current.current += (target - current.current) * fraction;
      if (Math.abs(current.current - target) < 3e-3) {
        current.current = target;
        apply2(target);
        return;
      }
      apply2(current.current);
      frame = requestAnimationFrame(animate);
    };
    if (reduceMotion) {
      current.current = target;
      apply2(target);
    } else {
      frame = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(frame);
  }, [container, target, reduceMotion, effortOpen, speedOpen]);
}
function SpeedButton({ reading, stats, modeName, english, onOpenChange }) {
  const popover = usePopover();
  const heading = english ? "Session stats" : "\u4F1A\u8BDD\u7EDF\u8BA1";
  const number = reading.rate === null ? null : `${reading.rate.toFixed(1)} tok/s`;
  const label = {
    live: english ? "Live estimate" : "\u5B9E\u65F6\u4F30\u7B97",
    recent: english ? "Latest completed step" : "\u6700\u8FD1\u4E00\u6B65",
    session: english ? "Session average" : "\u4F1A\u8BDD\u5E73\u5747",
    waiting: english ? "Waiting for output" : "\u7B49\u5F85\u8F93\u51FA"
  }[reading.kind];
  const seconds = (value) => Number.isFinite(value) ? `${(value / 1e3).toFixed(1)}${english ? "s" : " \u79D2"}` : "\u2014";
  const averageTtft = stats?.ttftSteps > 0 ? stats.ttftMs / stats.ttftSteps : null;
  const averageTps = decodeRate(stats?.decodeTokens, stats?.decodeMs);
  const rows = [
    [english ? "Model time" : "\u6A21\u578B\u7528\u65F6", seconds(stats?.llmMs)],
    ...stats?.toolMs > 0 ? [[english ? "Tool time" : "\u5DE5\u5177\u7528\u65F6", seconds(stats.toolMs)]] : [],
    [english ? "Average first token (TTFT)" : "\u9996 token \u5E73\u5747 (TTFT)", seconds(averageTtft)],
    [english ? "Output speed (TPS)" : "\u8F93\u51FA\u901F\u5EA6 (TPS)", averageTps === null ? number ?? "\u2014" : `${Math.round(averageTps)} tok/s`],
    ...number && (reading.kind === "live" || reading.kind === "recent" && averageTps !== null) ? [[label, number]] : []
  ];
  const turns = stats?.turns ?? 0;
  const steps = stats?.steps ?? 0;
  (0, import_react4.useEffect)(() => {
    onOpenChange?.(popover.open);
  }, [popover.open]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "button",
      {
        ...popover.trigger,
        className: "dsh-ui-control dsh-ui-speed-trigger",
        title: number ? `${label} \xB7 ${number}` : heading,
        "aria-label": number ? `${heading}, ${label} ${number}` : heading,
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "dsh-ui-speed-glyph", "data-dsh-ui-motion": "", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "zap" }) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { ...popover.content, className: "dsh-ui-popover dsh-ui-speed-popover", "aria-label": heading, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("b", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "zap" }),
          heading
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: english ? `${turns} turns \xB7 ${steps} steps` : `${turns} \u8F6E ${steps} \u6B65` })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("dl", { children: [
        modeName && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "dsh-ui-speed-mode", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: english ? "Session mode" : "\u4F1A\u8BDD\u6A21\u5F0F" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: modeName })
        ] }),
        rows.map(([name2, value]) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: name2 }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: value })
        ] }, name2))
      ] })
    ] })
  ] });
}

// src/client/selection.js
var ULTRA_THINK = "ultra-think";
var presetNames = /* @__PURE__ */ new Map([
  ["standard", ["\u6807\u51C6\u6A21\u5F0F", "Standard mode"]],
  ["ptc", ["PTC \u6A21\u5F0F", "PTC mode"]],
  ["minimal", ["\u6781\u7B80\u6A21\u5F0F", "Minimal mode"]],
  ["cordis", ["\u521B\u4F5C\u8005\u6A21\u5F0F", "Creator mode"]]
]);
function presetName(id, presets, english) {
  return presets.find((preset) => preset.id === id)?.name ?? presetNames.get(id)?.[english ? 1 : 0] ?? id;
}
function availablePresets(roster) {
  const presets = roster.presets.filter((preset) => preset.broken === void 0);
  const defaultPresetId = presets.find((preset) => preset.id === roster.defaultPresetId)?.id ?? presets.find((preset) => preset.isDefault)?.id;
  return { presets, defaultPresetId };
}
function modelIn(groups, selection) {
  return groups.find((group) => group.id === selection?.provider)?.models.find((model) => model.id === selection.model);
}
function highestEffort(model) {
  return model?.reasoning?.efforts?.at(-1)?.id;
}
function reasoningEffortFor(model, preferred) {
  const reasoning = model?.reasoning;
  const efforts = reasoning?.efforts ?? [];
  return efforts.find((level) => level.id === preferred)?.id ?? efforts.find((level) => level.id === reasoning.defaultEffort)?.id ?? efforts[0]?.id;
}
function isSelectedModel(selection, provider, modelId) {
  return selection?.provider === provider && selection?.model === modelId;
}
function ultraAvailable(model, root, team, canChangePreset2, remote, presets = []) {
  return root && highestEffort(model) === "max" && team !== void 0 && typeof remote?.agentTeams?.setEnabled === "function" && (!canChangePreset2 || typeof remote?.agentPresets?.select === "function" && presets.some((preset) => preset.id === "ptc" && preset.broken === void 0));
}
function ultraActive({ selection, model, teamEnabled, canChangePreset: canChangePreset2, preset, root, ordinaryMax }) {
  return !ordinaryMax && root && highestEffort(model) === "max" && reasoningEffortFor(model, selection?.reasoningEffort) === "max" && teamEnabled === true && (!canChangePreset2 || preset === "ptc");
}
function canChangePreset(snapshot) {
  return snapshot.blank === true && snapshot.awaitingFirstTurn !== true && (snapshot.pendingSubmissions?.length ?? 0) === 0;
}
function selectionFor(provider, model, preferred) {
  const effort = reasoningEffortFor(model, preferred);
  return { provider, model: model.id, ...effort === void 0 ? {} : { reasoningEffort: effort } };
}
function requireSuccess(result) {
  if (!result.ok) {
    const error = new Error(result.error?.message ?? "Selection was rejected");
    error.code = result.error?.code;
    throw error;
  }
  return result.value;
}
function createUltraMemory() {
  const fallback = /* @__PURE__ */ new Map();
  const listeners = /* @__PURE__ */ new Set();
  const prefix = "dsh-ui.ultra.";
  const key = (sessionId) => prefix + sessionId;
  return {
    subscribe(listener) {
      listeners.add(listener);
      const onStorage = (event) => {
        if (event.key === null || event.key.startsWith(prefix)) listener();
      };
      globalThis.addEventListener?.("storage", onStorage);
      return () => {
        listeners.delete(listener);
        globalThis.removeEventListener?.("storage", onStorage);
      };
    },
    get(sessionId) {
      if (fallback.has(sessionId)) return fallback.get(sessionId);
      try {
        const saved = JSON.parse(localStorage.getItem(key(sessionId)));
        if (saved === null || typeof saved !== "object") return void 0;
        if (saved.ordinaryMax === true) return { ordinaryMax: true };
        const ordinaryPreset = typeof saved.ordinaryPreset === "string" ? saved.ordinaryPreset : void 0;
        if (ordinaryPreset !== void 0 || saved.enabledTeam === true) return { ordinaryPreset, enabledTeam: saved.enabledTeam === true };
      } catch {
      }
    },
    set(sessionId, value) {
      try {
        if (value === void 0) localStorage.removeItem(key(sessionId));
        else localStorage.setItem(key(sessionId), JSON.stringify(value));
        fallback.delete(sessionId);
      } catch {
        fallback.set(sessionId, value);
      }
      for (const listener of listeners) listener();
    }
  };
}
async function changeSelection({
  directory,
  sessionId,
  remote,
  before,
  next,
  wantUltra,
  savedUltra,
  confirmDisable,
  presetIsMutable,
  presetId,
  lockedMessage
}) {
  const rollbacks = [];
  let ordinaryPreset = savedUltra?.ordinaryPreset;
  let enabledTeam = savedUltra?.enabledTeam === true;
  const disableOwnedTeam = !wantUltra && enabledTeam && before.teamEnabled === true;
  if (disableOwnedTeam && before.lastUsed !== null && !confirmDisable()) {
    return { status: "cancelled", ultraState: savedUltra };
  }
  async function commit(write, undo) {
    const result = await write();
    requireSuccess(result);
    if (undo) rollbacks.push(undo);
  }
  const selectPreset = (id) => remote.agentPresets.select(sessionId, id);
  const selectTeam = (enabled) => remote.agentTeams.setEnabled(sessionId, enabled);
  async function changePreset(id, previousId, allowLock = true) {
    try {
      await commit(() => selectPreset(id), async () => {
        if (previousId !== void 0 && presetIsMutable()) requireSuccess(await selectPreset(previousId));
      });
      return true;
    } catch (error) {
      if (allowLock && error.code === "agent-preset/locked") return false;
      throw error;
    }
  }
  try {
    const previousPreset = before.preset;
    if (presetId !== void 0) {
      if (!before.presetMutable || !presetIsMutable()) throw new Error(lockedMessage ?? "The session mode is locked");
      const targetPreset = wantUltra ? "ptc" : presetId;
      if (targetPreset !== before.preset) await changePreset(targetPreset, previousPreset, false);
      ordinaryPreset = wantUltra ? presetId : void 0;
    } else if (wantUltra && before.presetMutable && presetIsMutable() && before.preset !== "ptc") {
      if (await changePreset("ptc", previousPreset)) ordinaryPreset = previousPreset;
    } else if (!wantUltra && before.presetMutable && presetIsMutable() && before.preset === "ptc" && ordinaryPreset !== void 0 && ordinaryPreset !== "ptc") {
      await changePreset(ordinaryPreset, "ptc");
    }
    if (wantUltra && before.teamEnabled === false) {
      await commit(() => selectTeam(true), async () => requireSuccess(await selectTeam(false)));
      enabledTeam = true;
    } else if (disableOwnedTeam) {
      await commit(() => selectTeam(false), async () => requireSuccess(await selectTeam(true)));
    }
    const previous = before.selection;
    if (next && (previous?.provider !== next.provider || previous?.model !== next.model || previous?.reasoningEffort !== next.reasoningEffort)) {
      requireSuccess(await directory.select(next));
    }
    let ultraState;
    if (wantUltra && (ordinaryPreset !== void 0 || enabledTeam)) ultraState = { ordinaryPreset, enabledTeam };
    if (!wantUltra && (next ?? previous)?.reasoningEffort === "max") ultraState = { ordinaryMax: true };
    return { status: "saved", ultraState };
  } catch (error) {
    const rollbackErrors = [];
    for (const rollback of rollbacks.reverse()) {
      try {
        await rollback();
      } catch (failure) {
        rollbackErrors.push(failure.message);
      }
    }
    if (rollbackErrors.length > 0) {
      throw new Error(`${error.message} (${rollbackErrors.join(" \xB7 ")})`, { cause: error });
    }
    throw error;
  }
}

// src/client/composer.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var ULTRA = { id: ULTRA_THINK, name: "Ultra Think" };
var SPECTRUM_TINT = /* @__PURE__ */ new Map([["high", "13%"], ["xhigh", "28%"], ["max", "44%"], [ULTRA_THINK, "100%"]]);
var selectionWrites = /* @__PURE__ */ new Map();
function disableTeam(english) {
  return window.confirm(english ? "Disable agent teamwork?\n\nShared task tools and coordination instructions will stop. This may affect cache reuse and subsequent token usage." : "\u786E\u8BA4\u505C\u7528\u667A\u80FD\u4F53\u56E2\u961F\u534F\u4F5C\uFF1F\n\n\u505C\u7528\u540E\u5C06\u505C\u6B62\u5171\u4EAB\u4EFB\u52A1\u5DE5\u5177\u548C\u56E2\u961F\u534F\u8C03\u6307\u4EE4\uFF0C\u53EF\u80FD\u5F71\u54CD\u7F13\u5B58\u590D\u7528\u4E0E\u540E\u7EED token \u7528\u91CF\u3002");
}
function EffortPanel({
  popover,
  efforts,
  index,
  modelName,
  english,
  busy,
  report,
  selectIndex,
  reset,
  openModels,
  modeTitle,
  modeEntry,
  modeOptions,
  showingModes,
  closeModes
}) {
  const pageFocus = (0, import_react5.useRef)(null);
  const label = english ? "Reasoning effort" : "\u63A8\u7406\u6863\u4F4D";
  const backTitle = english ? "Back to reasoning effort" : "\u8FD4\u56DE\u63A8\u7406\u6863\u4F4D";
  (0, import_react5.useEffect)(() => {
    if (popover.open) pageFocus.current?.focus({ preventScroll: true });
  }, [popover.open, showingModes]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { ...popover.content, className: "dsh-ui-popover dsh-ui-effort-menu", "aria-label": showingModes ? modeTitle : label, children: [
    showingModes ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "dsh-ui-mode-control", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "dsh-ui-mode-head", children: [
        efforts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "button",
          {
            type: "button",
            className: "dsh-ui-control dsh-ui-mode-back",
            title: backTitle,
            "aria-label": backTitle,
            onClick: closeModes,
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, { name: "back" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { ref: pageFocus, tabIndex: -1, children: modeTitle })
      ] }),
      modeOptions
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "dsh-ui-effort-control", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "dsh-ui-effort-head", children: [
        modeEntry,
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "dsh-ui-effort-value", children: efforts.map((effort, position) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { "data-current": position === index ? "" : void 0, children: effort.name }, effort.id)) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "button",
          {
            className: "dsh-ui-control dsh-ui-effort-reset",
            type: "button",
            disabled: busy,
            onClick: reset,
            title: english ? "Restore default effort" : "\u6062\u590D\u9ED8\u8BA4\u63A8\u7406\u6863\u4F4D",
            "aria-label": english ? "Restore default effort" : "\u6062\u590D\u9ED8\u8BA4\u63A8\u7406\u6863\u4F4D",
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, { name: "restore" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "button",
          {
            className: "dsh-ui-control dsh-ui-effort-model",
            type: "button",
            disabled: busy,
            onClick: openModels,
            "aria-label": english ? "Choose model" : "\u9009\u62E9\u6A21\u578B",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: modelName }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, { name: "next" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "dsh-ui-effort-track", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "dsh-ui-effort-rail", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "dsh-ui-effort-fill", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "dsh-ui-effort-spectrum" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "dsh-ui-effort-stars", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "dsh-ui-effort-star-strip", "data-dsh-ui-motion": "" }) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "dsh-ui-effort-stops", "aria-hidden": "true", children: efforts.map((effort, position) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { "data-filled": position <= index ? "" : void 0 }, effort.id)) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "dsh-ui-effort-thumb", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "input",
          {
            ref: pageFocus,
            type: "range",
            className: "dsh-ui-effort-range",
            min: "0",
            max: Math.max(0, efforts.length - 1),
            step: "1",
            value: index < 0 ? 0 : index,
            "aria-label": label,
            "aria-valuetext": efforts[index]?.name,
            disabled: busy || efforts.length < 2,
            onChange: (event) => selectIndex(event.currentTarget.valueAsNumber, false),
            onPointerDown: (event) => {
              event.currentTarget.setPointerCapture(event.pointerId);
              selectIndex(void 0, "start");
            },
            onPointerUp: (event) => selectIndex(event.currentTarget.valueAsNumber, true),
            onPointerCancel: () => selectIndex(void 0, "cancel")
          }
        )
      ] })
    ] }),
    report && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "dsh-ui-model-message", role: "alert", children: report })
  ] });
}
function usePresetRoster(remote) {
  const [roster, setRoster] = (0, import_react5.useState)({ presets: [], loading: true });
  const [revision, setRevision] = (0, import_react5.useState)(0);
  (0, import_react5.useEffect)(() => {
    let active = true;
    async function load() {
      try {
        const result = await remote.agentPresets.list();
        if (!active) return;
        if (result.ok) setRoster(availablePresets(result.value));
        else if (result.error.code === "gateway/invocation-unavailable") setRoster({ presets: [] });
        else setRoster((previous) => ({ ...previous, loading: false, error: result.error.message }));
      } catch (error) {
        if (active) setRoster((previous) => ({ ...previous, loading: false, error: error.message }));
      }
    }
    void load();
    return () => {
      active = false;
    };
  }, [remote, revision]);
  (0, import_react5.useEffect)(() => remote.$on?.("settings/document-updated", (namespace) => {
    if (namespace === "agent-preset-registry") setRevision((value) => value + 1);
  }), [remote]);
  return { ...roster, retry: () => {
    setRoster((previous) => ({ ...previous, loading: true, error: void 0 }));
    setRevision((value) => value + 1);
  } };
}
function PresetOptions({ roster, selected, editable, busy, english, choose }) {
  const { presets, loading, error, retry } = roster;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "dsh-ui-mode-options", children: [
    editable && presets.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "button",
      {
        type: "button",
        className: "dsh-ui-model-row",
        "data-preset-id": preset.id,
        "aria-pressed": selected === preset.id,
        disabled: busy,
        onClick: () => {
          if (selected !== preset.id) choose(preset.id);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: presetName(preset.id, presets, english) }),
          selected === preset.id && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, { name: "check" })
        ]
      },
      preset.id
    )),
    selected && (!editable || !presets.some((preset) => preset.id === selected)) && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "dsh-ui-model-row dsh-ui-current-preset", "data-preset-id": selected, "aria-disabled": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: presetName(selected, presets, english) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, { name: "check" })
    ] }),
    loading && presets.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "dsh-ui-model-message", role: "status", children: english ? "Loading modes\u2026" : "\u6B63\u5728\u52A0\u8F7D\u6A21\u5F0F\u2026" }),
    error && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "dsh-ui-model-message", role: "alert", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { type: "button", className: "dsh-ui-retry", onClick: retry, children: english ? "Reload modes" : "\u91CD\u65B0\u52A0\u8F7D\u6A21\u5F0F" })
    ] })
  ] });
}
function ComposerControls({
  state,
  locale,
  english,
  roster,
  allowsUltra,
  mode,
  locked,
  select,
  reload,
  reading = emptySpeed,
  stats,
  presetId,
  presetLocked,
  presetMutable,
  selectPreset
}) {
  const models = usePopover();
  const effort = usePopover();
  const root = (0, import_react5.useRef)(null);
  const dragging = (0, import_react5.useRef)(false);
  const returnToEffort = (0, import_react5.useRef)(false);
  const saving = (0, import_react5.useRef)(false);
  const [pending, setPending] = (0, import_react5.useState)(false);
  const [notice, setNotice] = (0, import_react5.useState)(null);
  const [preview, setPreview] = (0, import_react5.useState)(null);
  const [speedOpen, setSpeedOpen] = (0, import_react5.useState)(false);
  const [choosingMode, setChoosingMode] = (0, import_react5.useState)(false);
  const groups = state?.groups ?? [];
  const selection = state?.current;
  const provider = groups.find((group) => group.id === selection?.provider);
  const model = modelIn(groups, selection);
  const nativeEfforts = model?.reasoning?.efforts ?? [];
  const efforts = allowsUltra ? [...nativeEfforts, ULTRA] : nativeEfforts;
  const saved = mode && allowsUltra ? ULTRA_THINK : reasoningEffortFor(model, selection?.reasoningEffort);
  const chosen = efforts.some((row) => row.id === preview) ? preview : saved;
  const position = efforts.findIndex((row) => row.id === chosen);
  const span = Math.max(1, efforts.length - 1);
  const progress = Math.max(0, position / span);
  const spectrumTint = SPECTRUM_TINT.get(chosen) ?? "0%";
  const busy = locked || pending || state?.status === "selecting";
  const modelTitle = english ? "Choose model" : "\u9009\u62E9\u6A21\u578B";
  const effortTitle = english ? "Reasoning effort" : "\u63A8\u7406\u6863\u4F4D";
  const modeTitle = english ? "Choose mode" : "\u6A21\u5F0F\u9009\u62E9";
  const modelName = model?.name ?? selection?.model ?? modelTitle;
  const effortName = chosen === ULTRA_THINK ? "Ultra" : efforts[position]?.name ?? state?.retainedEffort ?? effortTitle;
  const hasEfforts = efforts.length > 0;
  const showingModes = !hasEfforts || choosingMode && !presetLocked;
  const selectedPreset = presetId ?? roster.defaultPresetId;
  const hasModes = selectedPreset || roster.presets.length > 0 || roster.loading || roster.error;
  const lockedModeName = presetLocked && selectedPreset ? presetName(selectedPreset, roster.presets, english) : null;
  useSpeedMotion(root, reading, effort.open && !showingModes, presetLocked && speedOpen);
  (0, import_react5.useEffect)(() => {
    if (!effort.open) {
      dragging.current = false;
      setChoosingMode(false);
      if (!saving.current) setPreview(null);
    }
  }, [effort.open]);
  (0, import_react5.useEffect)(() => {
    if (presetLocked && !hasEfforts && effort.open) effort.close();
  }, [presetLocked, hasEfforts, effort.open]);
  async function commit(write, after) {
    if (saving.current || busy) return;
    saving.current = true;
    setPending(true);
    setNotice(null);
    try {
      const result = await write();
      if (result !== "cancelled") after?.();
    } catch (error) {
      setNotice(error.message || String(error));
    } finally {
      saving.current = false;
      setPending(false);
      setPreview(null);
    }
  }
  function selectIndex(index, action) {
    if (action === "start") {
      dragging.current = true;
      return;
    }
    if (action === "cancel") {
      dragging.current = false;
      setPreview(null);
      return;
    }
    if (action === true) dragging.current = false;
    const chosen2 = efforts[index];
    if (!selection || !model || !chosen2 || busy) return;
    if (dragging.current) {
      setPreview(chosen2.id);
      return;
    }
    if (chosen2.id === saved && (chosen2.id === ULTRA_THINK || (selection.reasoningEffort ?? model.reasoning?.defaultEffort) === chosen2.id)) {
      setPreview(null);
      return;
    }
    setPreview(chosen2.id);
    const wantUltra = chosen2.id === ULTRA_THINK;
    const target = selectionFor(selection.provider, model, wantUltra ? "max" : chosen2.id);
    void commit(() => select(target, wantUltra, roster.defaultPresetId));
  }
  function selectModel(group, nextModel) {
    function finish() {
      const back = returnToEffort.current && nextModel.reasoning?.efforts?.length;
      returnToEffort.current = false;
      if (back) effort.show();
      else models.close({ focus: true });
    }
    if (isSelectedModel(selection, group.id, nextModel.id)) {
      finish();
      return;
    }
    const keepUltra = saved === ULTRA_THINK && highestEffort(nextModel) === "max";
    const target = selectionFor(group.id, nextModel, keepUltra ? "max" : void 0);
    void commit(() => select(target, keepUltra, roster.defaultPresetId), finish);
  }
  function modelLabel(group, row, placement, selected) {
    if (!group || !row) return modelName;
    const badge = row.badge ? locale.resolveText(row.badge.text) : null;
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { "data-provider-id": group.id, "data-model-id": row.id, "data-selected": selected ? "" : void 0, children: [
      placement === "trigger" && badge && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("small", { children: [
        badge,
        " "
      ] }),
      row.name,
      placement !== "trigger" && badge && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("small", { children: [
        " ",
        badge
      ] })
    ] });
  }
  const report = notice ?? (state?.status === "error" ? state.error : null);
  const modeEntry = !presetLocked && hasModes && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "button",
    {
      type: "button",
      className: "dsh-ui-control dsh-ui-mode-trigger",
      title: modeTitle,
      "aria-label": modeTitle,
      onClick: () => setChoosingMode(true),
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, { name: "mode" })
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "div",
    {
      ref: root,
      className: "dsh-ui-selectors",
      "data-effort": chosen === ULTRA_THINK ? "ultra" : chosen,
      "data-starlight": SPECTRUM_TINT.has(chosen) ? "" : void 0,
      style: { "--effort-progress": progress, "--effort-spectrum-tint": spectrumTint },
      children: [
        presetLocked && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          SpeedButton,
          {
            reading,
            stats,
            modeName: lockedModeName,
            english,
            onOpenChange: setSpeedOpen
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "button",
          {
            ...models.trigger,
            className: "dsh-ui-control dsh-ui-model-trigger",
            disabled: busy,
            title: modelName,
            "aria-label": `${modelTitle} \xB7 ${modelName}`,
            onClick: (event) => {
              returnToEffort.current = false;
              models.trigger.onClick(event);
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: modelLabel(provider, model, "trigger", true) })
          }
        ),
        (hasEfforts || !presetLocked && hasModes) && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "button",
          {
            ...effort.trigger,
            disabled: busy,
            className: hasEfforts ? "dsh-ui-control dsh-ui-effort-trigger" : "dsh-ui-control dsh-ui-mode-trigger",
            title: hasEfforts ? effortTitle : modeTitle,
            "aria-label": hasEfforts ? `${effortTitle} \xB7 ${effortName}` : modeTitle,
            children: hasEfforts ? effortName : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, { name: "mode" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { ...models.content, className: "dsh-ui-popover dsh-ui-model-menu", "aria-label": modelTitle, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { children: modelTitle }),
          groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "dsh-ui-provider", role: "group", "aria-label": group.name, children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { children: group.name }),
            group.models.map((row) => {
              const selected = isSelectedModel(selection, group.id, row.id);
              return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                "button",
                {
                  className: "dsh-ui-model-row",
                  type: "button",
                  "aria-pressed": selected,
                  disabled: busy,
                  title: row.description,
                  onClick: () => selectModel(group, row),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: modelLabel(group, row, "option", selected) }),
                    selected && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, { name: "check" })
                  ]
                },
                row.id
              );
            })
          ] }, group.id)),
          (state?.failures ?? []).map((failure) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "dsh-ui-model-message", children: [
            failure.name,
            " \xB7 ",
            failure.message
          ] }, failure.id)),
          groups.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "dsh-ui-model-message", role: "status", children: state?.status === "loading" ? english ? "Loading models\u2026" : "\u6B63\u5728\u52A0\u8F7D\u6A21\u578B\u2026" : english ? "No models available" : "\u6682\u65E0\u53EF\u7528\u6A21\u578B" }),
          reload && (state?.status === "error" || groups.length === 0 && state?.status !== "loading") && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { className: "dsh-ui-retry", type: "button", onClick: reload, children: english ? "Reload" : "\u91CD\u65B0\u52A0\u8F7D" }),
          report && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "dsh-ui-model-message", role: "alert", children: report })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          EffortPanel,
          {
            popover: effort,
            efforts,
            index: position,
            modelName,
            english,
            busy,
            report,
            selectIndex,
            modeTitle,
            modeEntry,
            showingModes,
            closeModes: () => setChoosingMode(false),
            modeOptions: !presetLocked && hasModes && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              PresetOptions,
              {
                roster,
                selected: selectedPreset,
                editable: presetMutable,
                busy,
                english,
                choose: (id) => {
                  void commit(() => selectPreset(id, roster.defaultPresetId));
                }
              }
            ),
            openModels: () => {
              returnToEffort.current = true;
              models.show();
            },
            reset: () => {
              if (!model || !selection) return;
              void commit(() => select(selectionFor(selection.provider, model), false, roster.defaultPresetId));
            }
          }
        ),
        report && !models.open && !effort.open && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "dsh-ui-control-notice", role: "alert", children: report })
      ]
    }
  );
}
function getSelectionState(binding, directory, values, fallbackPreset) {
  const { session } = binding;
  const state = directory.store.getSnapshot();
  const snapshot = session.getSnapshot();
  const projection = (key) => values?.[key] ?? session.projections.faceOf(key).getSnapshot();
  const selection = state.current ?? projection("modelSelection")?.next;
  const team = projection("agentTeam");
  const presetMutable = canChangePreset(snapshot);
  const preset = projection("agentPreset") ?? fallbackPreset;
  return {
    selection,
    presetMutable,
    preset,
    teamEnabled: team?.enabled,
    lastUsed: projection("modelSelection")?.lastUsed ?? null
  };
}
async function saveSelection({
  binding,
  directory,
  remote,
  ultraMemory,
  english,
  target,
  wantUltra = false,
  presetId,
  fallbackPreset,
  staged = false
}) {
  const presetIsMutable = () => canChangePreset(binding.session.getSnapshot());
  const save = async () => {
    let values;
    if (staged) {
      if (!presetIsMutable()) return "cancelled";
      if (target) await directory.load();
      const result2 = await remote.session.projections({ sessionId: binding.sessionId });
      if (!result2.ok) throw new Error(result2.error.message);
      values = result2.value?.values;
    }
    const before = getSelectionState(binding, directory, values, fallbackPreset);
    const result = await changeSelection({
      directory,
      sessionId: binding.sessionId,
      remote,
      before,
      next: target,
      wantUltra,
      presetId,
      savedUltra: ultraMemory.get(binding.sessionId),
      presetIsMutable,
      confirmDisable: () => disableTeam(english),
      lockedMessage: english ? "The mode is locked once the first message is sent." : "\u9996\u6761\u6D88\u606F\u53D1\u51FA\u540E\uFF0C\u6A21\u5F0F\u5DF2\u9501\u5B9A\u3002"
    });
    if (result.status === "saved") ultraMemory.set(binding.sessionId, result.ultraState);
    return result.status;
  };
  const earlier = selectionWrites.get(binding.sessionId);
  const pending = earlier ? earlier.then(save, save) : save();
  selectionWrites.set(binding.sessionId, pending);
  try {
    return await pending;
  } finally {
    if (selectionWrites.get(binding.sessionId) === pending) selectionWrites.delete(binding.sessionId);
  }
}
function ComposerModel({ binding, directory, locale, remote, sessions, ultraMemory, locked }) {
  const english = useLanguage(locale) === "en";
  const state = useStore(directory.store);
  const snapshot = useStore(binding.session);
  const sessionsSnapshot = useStore(sessions.list);
  const projections = binding.session.projections;
  const team = useStore(projections.faceOf("agentTeam"));
  const projectedPreset = useStore(projections.faceOf("agentPreset"));
  const stats = useStore(projections.faceOf("sessionStats"));
  const ordinaryMax = (0, import_react5.useSyncExternalStore)(ultraMemory.subscribe, () => ultraMemory.get(binding.sessionId)?.ordinaryMax === true);
  const reading = useOutputSpeed(binding);
  const summary = sessionsSnapshot?.byId[binding.sessionId];
  const root = snapshot.subagent === null && summary?.origin !== "subagent";
  const mutable = canChangePreset(snapshot);
  const presetLocked = snapshot.blank === false || summary?.blank === false;
  const preset = projectedPreset === void 0 ? summary?.projectionValues?.agentPreset : projectedPreset;
  const model = modelIn(state.groups, state.current);
  const roster = usePresetRoster(remote);
  const allowsUltra = ultraAvailable(model, root, team, mutable, remote, roster.presets);
  const mode = ultraActive({
    selection: state.current,
    model,
    teamEnabled: team?.enabled,
    canChangePreset: mutable,
    preset,
    root,
    ordinaryMax
  });
  (0, import_react5.useEffect)(() => {
    if (root) void directory.load().catch(() => {
    });
  }, [directory, root]);
  if (!root) return null;
  const save = (selection) => saveSelection({ binding, directory, remote, ultraMemory, english, ...selection });
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    ComposerControls,
    {
      state,
      locale,
      english,
      roster,
      allowsUltra,
      mode,
      locked,
      reading,
      stats,
      presetId: preset,
      presetLocked,
      presetMutable: mutable && !presetLocked && typeof remote.agentPresets.select === "function",
      reload: () => {
        void directory.load().catch(() => {
        });
      },
      select: (target, wantUltra, fallbackPreset) => save({ target, wantUltra, fallbackPreset }),
      selectPreset: (presetId, fallbackPreset) => save({ presetId, fallbackPreset })
    }
  );
}
function ModelPreselection({ sessionId, locale, remote, sessions, modelDirectories, conversation, ultraMemory }) {
  const english = useLanguage(locale) === "en";
  const [catalog, setCatalog] = (0, import_react5.useState)({ status: "loading", groups: [] });
  const [staged, setStaged] = (0, import_react5.useState)(null);
  const selectedDraft = (0, import_react5.useRef)(null);
  const roster = usePresetRoster(remote);
  async function load(signal) {
    setCatalog((previous) => ({ ...previous, status: "loading" }));
    try {
      const result = await remote.session.modelCatalog();
      if (signal?.aborted) return;
      if (result.ok) setCatalog({ ...result.value, current: result.value.default, status: "ready" });
      else setCatalog((previous) => ({ ...previous, status: "error", error: result.error.message }));
    } catch (error) {
      if (!signal?.aborted) setCatalog((previous) => ({ ...previous, status: "error", error: error.message }));
    }
  }
  (0, import_react5.useEffect)(() => {
    if (sessionId) return;
    const lifetime = new AbortController();
    void load(lifetime.signal);
    return () => lifetime.abort();
  }, [remote, sessionId]);
  (0, import_react5.useLayoutEffect)(() => {
    if (!sessionId || !staged || selectedDraft.current === staged) return;
    const binding = sessions.binding(sessionId);
    if (!binding) return;
    const directory = modelDirectories.directoryFor(sessionId);
    selectedDraft.current = staged;
    setStaged(null);
    void saveSelection({ binding, directory, remote, ultraMemory, english, ...staged, staged: true }).catch((error) => {
      if (sessions.binding(sessionId) === binding) conversation.input.for(binding.ctx).notify("error", error.message);
    });
  }, [sessionId, staged]);
  if (sessionId) return null;
  const state = { ...catalog, current: staged?.target ?? catalog.current };
  const model = modelIn(state.groups, state.current);
  const allowsUltra = ultraAvailable(model, true, {}, true, remote, roster.presets);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "dsh-ui-preselection", onClick: (event) => event.stopPropagation(), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    ComposerControls,
    {
      state,
      locale,
      english,
      roster,
      allowsUltra,
      mode: staged?.wantUltra === true,
      locked: false,
      reload: () => {
        void load();
      },
      presetId: staged?.wantUltra ? "ptc" : staged?.presetId,
      presetMutable: typeof remote.agentPresets.select === "function",
      select: async (target, wantUltra, fallbackPreset) => {
        setStaged((previous) => ({ ...previous, target, wantUltra, fallbackPreset }));
        return "saved";
      },
      selectPreset: async (presetId, fallbackPreset) => {
        setStaged((previous) => ({ ...previous, presetId, fallbackPreset, wantUltra: false }));
        return "saved";
      }
    }
  ) });
}

// src/client/permission.jsx
var import_react6 = require("react");

// src/client/permission.js
var modes = /* @__PURE__ */ new Map([
  ["read-only", ["reviewAsk", "\u76D1\u7763", "Ask for approval", "\u53EA\u8BFB\u6C99\u7BB1\u3002\u6269\u5927\u6587\u4EF6\u64CD\u4F5C\u6743\u9650\u65F6\u9700\u8981\u5BA1\u6279\u3002", "Read-only sandbox. Broader file access requires approval."]],
  ["approval-required", ["reviewAsk", "\u76D1\u7763", "Ask for approval"]],
  ["workspace-write", ["reviewEdit", "\u81EA\u52A8\u63A5\u53D7\u7F16\u8F91", "Auto-accept edits", "\u5141\u8BB8\u5728\u5DE5\u4F5C\u533A\u548C\u53D7\u8BB8\u53EF\u7684\u4E34\u65F6\u76EE\u5F55\u7F16\u8F91\u3002\u8303\u56F4\u5916\u7684\u64CD\u4F5C\u9700\u8981\u5BA1\u6279\u3002", "Write in the workspace and permitted temporary folders. Broader access requires approval."]],
  ["auto-accept-edits", ["reviewEdit", "\u81EA\u52A8\u63A5\u53D7\u7F16\u8F91", "Auto-accept edits"]],
  ["auto", ["reviewAuto", "\u81EA\u52A8", "Auto", "\u4F7F\u7528 Host \u63D0\u4F9B\u7684\u81EA\u52A8\u5BA1\u6838\u7B56\u7565\u3002", "Use the Host\u2019s automatic approval policy."]],
  ["danger-full-access", ["reviewFull", "\u5B8C\u5168\u8BBF\u95EE", "Full access", "\u53EF\u76F4\u63A5\u8BBF\u95EE\u6587\u4EF6\u548C\u6267\u884C\u547D\u4EE4\uFF0C\u8DF3\u8FC7\u5E38\u89C4\u5BA1\u6279\u3002", "Run commands and access files without routine approval."]]
]);
var order = new Map([...modes.keys()].map((id, index) => [id, index]));
function orderPermissionOptions(options) {
  return options.toSorted((left, right) => (order.get(left.value) ?? order.size) - (order.get(right.value) ?? order.size));
}
function permissionOption(option, english) {
  const mode = modes.get(option.value);
  return {
    value: option.value,
    icon: mode?.[0] ?? "reviewAsk",
    title: mode?.[english ? 2 : 1] ?? option.name ?? option.value,
    description: mode?.[english ? 4 : 3] ?? option.description
  };
}
async function selectPermission(session, value) {
  const result = await session.command(`/permission ${value}`);
  if (!result.ok) throw new Error(result.error.message);
  if (!result.value.matched) throw new Error("The Host did not accept the permission command.");
}

// src/client/permission.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function PermissionPicker({ binding, sessions, locale, remote, locked }) {
  const english = useLanguage(locale) === "en";
  const session = useStore(binding?.session);
  const summary = useStore(sessions.list)?.byId[binding?.sessionId];
  const current = useStore(binding?.session.projections.faceOf("permissions"))?.currentValue;
  if (current === void 0) return null;
  if (session?.subagent != null || summary?.origin === "subagent") {
    const label = english ? "Permissions managed by the subagent task" : "\u6743\u9650\u7531\u5B50\u667A\u80FD\u4F53\u4EFB\u52A1\u7BA1\u7406";
    const detail = current === "custom" ? label : `${label} \xB7 ${permissionOption({ value: current }, english).title}`;
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "dsh-ui-subagent-permission", role: "img", "aria-label": detail, title: detail, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Icon, { name: "reviewLocked" }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    PermissionMenu,
    {
      binding,
      current,
      english,
      remote,
      locked
    },
    binding.sessionId
  );
}
function PermissionMenu({ binding, current, english, remote, locked }) {
  const popover = usePopover({ align: "left" });
  const saving = (0, import_react6.useRef)(false);
  const [catalog, setCatalog] = (0, import_react6.useState)(null);
  const [catalogError, setCatalogError] = (0, import_react6.useState)(false);
  const [revision, refresh] = (0, import_react6.useState)(0);
  const [busy, setBusy] = (0, import_react6.useState)(false);
  const [error, setError] = (0, import_react6.useState)(null);
  (0, import_react6.useEffect)(() => {
    if (!popover.open) setError(null);
  }, [popover.open]);
  (0, import_react6.useEffect)(() => {
    const lifetime = new AbortController();
    setCatalogError(false);
    setCatalog(null);
    void remote.permissionPresets.catalog().then((result) => {
      if (lifetime.signal.aborted) return;
      if (result.ok) setCatalog(orderPermissionOptions(result.value.options));
      else setCatalogError(true);
    }).catch(() => {
      if (!lifetime.signal.aborted) setCatalogError(true);
    });
    return () => lifetime.abort();
  }, [remote, revision]);
  (0, import_react6.useEffect)(() => remote.$on("permission-presets/catalog-changed", () => {
    refresh((revision2) => revision2 + 1);
  }), [remote]);
  (0, import_react6.useEffect)(() => {
    if (locked) popover.close();
  }, [locked]);
  const label = english ? "Approval mode" : "\u5BA1\u6838\u6A21\u5F0F";
  const currentOption = permissionOption(catalog?.find((option) => option.value === current) ?? { value: current }, english);
  async function choose(value) {
    if (locked || saving.current || !catalog?.some((row) => row.value === value)) return;
    if (value === current) {
      popover.close({ focus: true });
      return;
    }
    saving.current = true;
    setBusy(true);
    setError(null);
    try {
      await selectPermission(binding.session, value);
      popover.close({ focus: true });
    } catch (cause) {
      setError(cause.message || String(cause));
    } finally {
      saving.current = false;
      setBusy(false);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "button",
      {
        ...popover.trigger,
        className: "dsh-ui-control dsh-ui-permission-trigger",
        "data-mode": current,
        title: `${label} \xB7 ${currentOption.title}`,
        "aria-label": `${label} \xB7 ${currentOption.title}`,
        disabled: locked || busy,
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Icon, { name: currentOption.icon })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { ...popover.content, className: "dsh-ui-popover dsh-ui-permission-menu", "aria-label": label, children: [
      catalog?.map((row) => {
        const option = permissionOption(row, english);
        return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          "button",
          {
            type: "button",
            className: "dsh-ui-model-row dsh-ui-permission-option",
            "data-mode": option.value,
            "aria-pressed": option.value === current,
            disabled: busy,
            onClick: () => {
              void choose(option.value);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Icon, { name: option.icon }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { children: [
                option.title,
                option.description && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("small", { children: option.description })
              ] }),
              option.value === current && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Icon, { name: "check" })
            ]
          },
          option.value
        );
      }),
      !catalog && !catalogError && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "dsh-ui-model-message", role: "status", children: english ? "Loading approval modes\u2026" : "\u6B63\u5728\u52A0\u8F7D\u5BA1\u6838\u6A21\u5F0F\u2026" }),
      catalogError && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { type: "button", className: "dsh-ui-retry", onClick: () => refresh((revision2) => revision2 + 1), children: english ? "Could not load modes \xB7 Retry" : "\u5BA1\u6838\u6A21\u5F0F\u52A0\u8F7D\u5931\u8D25 \xB7 \u91CD\u8BD5" }),
      error && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "dsh-ui-model-message", role: "alert", children: error })
    ] })
  ] });
}

// src/client/sidebar.jsx
var import_react8 = require("react");
var import_react_dom3 = require("react-dom");

// src/client/sidebar-sessions.jsx
var import_react7 = require("react");
var import_react_dom2 = require("react-dom");
var import_jsx_runtime6 = require("react/jsx-runtime");
function historyTitle(session, english) {
  return session.title?.trim() || (english ? "Untitled chat" : "\u672A\u547D\u540D\u4F1A\u8BDD");
}
function PinnedSession({ session, selected, activity, english, uiWorkspace, remoteAccess, renderFactorySlot, onUnpin, onError }) {
  const { id } = session;
  const canUnpin = useStore((0, import_react7.useMemo)(() => remoteAccess.source("session", id, "workspace/unpinSession"), [remoteAccess, id]));
  const [busy, setBusy] = (0, import_react7.useState)(false);
  const title = historyTitle(session, english);
  const unpin = english ? `Unpin \xB7 ${title}` : `\u53D6\u6D88\u7F6E\u9876 \xB7 ${title}`;
  const target = { kind: "session", value: { sessionId: id, displayTitle: title } };
  const state = activity?.pendingInteraction ? "warning" : activity?.running ?? session.running ? "ongoing" : activity?.completionUnread ? "done" : void 0;
  async function removePin(event) {
    const hadFocus = document.activeElement === event.currentTarget;
    onError("");
    setBusy(true);
    try {
      await uiWorkspace.unpinSession(id);
      if (hadFocus) onUnpin();
    } catch {
      onError(english ? "Could not unpin this chat." : "\u65E0\u6CD5\u53D6\u6D88\u7F6E\u9876\u3002");
    } finally {
      setBusy(false);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "dsh-ui-pinned-row", "data-dsh-ui-pinned-session": id, children: [
    !state && canUnpin && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "button",
      {
        type: "button",
        className: "dsh-ui-control dsh-ui-pinned-unpin",
        "aria-label": unpin,
        title: unpin,
        disabled: busy,
        onClick: removePin,
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Icon, { name: "pin" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "button",
      {
        type: "button",
        className: "dsh-ui-pinned-chat",
        "aria-current": selected || void 0,
        title,
        onClick: () => uiWorkspace.openSession(id),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "dsh-ui-pinned-leading", "aria-hidden": "true", children: state ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { "data-state": state }) : !canUnpin && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Icon, { name: "pin" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "dsh-ui-pinned-title", children: title })
        ]
      }
    ),
    renderFactorySlot("contextMenu.button", {
      target,
      label: english ? `Chat actions \xB7 ${title}` : `\u4F1A\u8BDD\u64CD\u4F5C \xB7 ${title}`,
      className: "dsh-ui-control dsh-ui-pinned-actions"
    })
  ] });
}
function ArchivedSession({ row, english, uiWorkspace, remoteAccess, onError }) {
  const { session, workspace } = row;
  const { id } = session;
  const canRestore = useStore((0, import_react7.useMemo)(() => remoteAccess.source("session", id, "workspace/unarchiveSession"), [remoteAccess, id]));
  const [busy, setBusy] = (0, import_react7.useState)(false);
  const title = historyTitle(session, english);
  const restoreLabel = english ? "Restore chat" : "\u6062\u590D\u4F1A\u8BDD";
  async function restore() {
    onError("");
    setBusy(true);
    try {
      await uiWorkspace.unarchiveSession(id);
    } catch {
      onError(english ? "Could not restore this chat." : "\u65E0\u6CD5\u6062\u590D\u4F1A\u8BDD\u3002");
    } finally {
      setBusy(false);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "dsh-ui-history-row", "data-dsh-ui-history-session": id, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "dsh-ui-history-title", title, children: title }),
    workspace?.title && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("small", { title: workspace.title, children: workspace.title }),
    canRestore && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "button",
      {
        type: "button",
        className: "dsh-ui-control",
        "aria-label": `${restoreLabel} \xB7 ${title}`,
        title: restoreLabel,
        disabled: busy,
        onClick: restore,
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Icon, { name: "restore" })
      }
    )
  ] });
}
function SidebarSessions({ seats, english, sessions, workspaces, uiWorkspace, layout, sessionStatus, remoteAccess, renderFactorySlot }) {
  const list = useStore(sessions.list);
  const workspaceState = useStore(workspaces.list);
  const panel = useStore(layout.panelInfo);
  const activity = useStore(sessionStatus);
  const history = (0, import_react7.useMemo)(() => sidebarSessionLists(list, workspaceState), [list, workspaceState]);
  const [pinnedOpen, setPinnedOpen] = (0, import_react7.useState)(true);
  const [pinnedError, setPinnedError] = (0, import_react7.useState)("");
  const [shown, setShown] = (0, import_react7.useState)(false);
  const [archived, setArchived] = (0, import_react7.useState)(false);
  const [historyError, setHistoryError] = (0, import_react7.useState)("");
  const pinnedSummary = (0, import_react7.useRef)(null);
  const dialog = (0, import_react7.useRef)(null);
  const dialogId = (0, import_react7.useId)();
  const recentLabel = english ? "Recent chats" : "\u6700\u8FD1\u4F1A\u8BDD";
  const pinnedLabel = english ? "Pinned chats" : "\u7F6E\u9876\u4F1A\u8BDD";
  const archiveLabel = english ? "Archived chats" : "\u5DF2\u5F52\u6863\u4F1A\u8BDD";
  const closeLabel = english ? "Close" : "\u5173\u95ED";
  const unassigned = english ? "No project" : "\u672A\u5173\u8054\u9879\u76EE";
  const loading = list?.phase !== "ready" || workspaceState?.phase !== "ready";
  const loadingLabel = english ? "Loading chats\u2026" : "\u6B63\u5728\u52A0\u8F7D\u4F1A\u8BDD\u2026";
  const emptyHistory = english ? "No chats found." : "\u6682\u65E0\u4F1A\u8BDD\u3002";
  const visible = archived ? history.archived : history.recent;
  function showRecent() {
    setArchived(false);
    setHistoryError("");
    dialog.current.showModal();
    setShown(true);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    seats.recent && (0, import_react_dom2.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "button",
      {
        type: "button",
        className: "dsh-ui-sidebar-recents",
        "aria-haspopup": "dialog",
        "aria-controls": dialogId,
        "aria-expanded": shown,
        onClick: showRecent,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Icon, { name: "recents" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: recentLabel })
        ]
      }
    ), seats.recent),
    seats.pinned && (0, import_react_dom2.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "details",
      {
        className: "dsh-ui-pinned-group",
        open: pinnedOpen,
        onToggle: (event) => setPinnedOpen(event.currentTarget.open),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("summary", { ref: pinnedSummary, className: "dsh-ui-pinned-heading", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: pinnedLabel }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Icon, { name: "next" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "dsh-ui-pinned-list", children: [
            history.pinned.map(({ session }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              PinnedSession,
              {
                session,
                english,
                selected: panel?.activePanelId == null && (session.retainedBy?.mainView ?? 0) > 0,
                activity: activity?.get(session.id),
                uiWorkspace,
                remoteAccess,
                renderFactorySlot,
                onUnpin: () => pinnedSummary.current?.focus({ preventScroll: true }),
                onError: setPinnedError
              },
              session.id
            )),
            history.pinned.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "dsh-ui-sidebar-empty", children: loading ? loadingLabel : english ? "No pinned chats." : "\u6682\u65E0\u7F6E\u9876\u4F1A\u8BDD\u3002" }),
            pinnedError && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "dsh-ui-sidebar-error", role: "status", children: pinnedError })
          ] })
        ]
      }
    ), seats.pinned),
    (0, import_react_dom2.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "dialog",
      {
        ref: dialog,
        id: dialogId,
        className: "dsh-ui-history-dialog",
        "data-shortcut-modal": "sidebar-history",
        "aria-labelledby": `${dialogId}-title`,
        onClose: () => setShown(false),
        onClick: (event) => {
          if (event.target !== event.currentTarget) return;
          const { left, top, right, bottom } = event.currentTarget.getBoundingClientRect();
          if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) dialog.current.close();
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "dsh-ui-history-head", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { id: `${dialogId}-title`, children: archived ? archiveLabel : recentLabel }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { type: "button", className: "dsh-ui-control", "aria-label": closeLabel, onClick: () => dialog.current.close(), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Icon, { name: "close" }) })
          ] }),
          shown && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "dsh-ui-history-results", children: [
            !visible.length && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "dsh-ui-sidebar-empty", children: loading ? loadingLabel : emptyHistory }),
            visible.map((row) => {
              const { session, workspace } = row;
              if (archived) return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                ArchivedSession,
                {
                  row,
                  english,
                  uiWorkspace,
                  remoteAccess,
                  onError: setHistoryError
                },
                session.id
              );
              const title = historyTitle(session, english);
              return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
                "button",
                {
                  type: "button",
                  className: "dsh-ui-history-row",
                  "data-dsh-ui-history-session": session.id,
                  onClick: () => {
                    dialog.current.close();
                    uiWorkspace.openSession(session.id);
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "dsh-ui-history-title", title, children: title }),
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("small", { title: workspace?.title || unassigned, children: workspace?.title || unassigned })
                  ]
                },
                session.id
              );
            })
          ] }, archived ? "archived" : "recent"),
          historyError && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "dsh-ui-sidebar-error", role: "status", children: historyError }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "dsh-ui-history-footer", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { type: "button", className: "dsh-ui-control", onClick: () => {
            setHistoryError("");
            setArchived(!archived);
          }, children: archived ? english ? "Back to recent chats" : "\u8FD4\u56DE\u6700\u8FD1\u4F1A\u8BDD" : english ? "View archived chats" : "\u67E5\u770B\u5DF2\u5F52\u6863" }) })
        ]
      }
    ), document.body)
  ] });
}

// src/client/motion.js
var LIST_MOTION = { duration: 320, easing: "cubic-bezier(.22, .75, .24, 1)" };
var REGION = "[data-conversation-content]";
var CARD = "[data-composer-card]";
function composerShift(previous, next) {
  if (previous?.phase !== "hero" || next.phase !== "active" || previous.sessionId && previous.sessionId !== next.sessionId) return null;
  const x = previous.rect.left - next.rect.left;
  const y = previous.rect.top - next.rect.top;
  return Math.abs(x) > 1 || Math.abs(y) > 1 ? { x, y } : null;
}
function installComposerMotion() {
  const states = /* @__PURE__ */ new Map();
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  function track() {
    const live = new Set(document.querySelectorAll(REGION));
    for (const [region, state] of states) {
      if (live.has(region)) continue;
      resize.unobserve(region);
      if (state.card) resize.unobserve(state.card);
      state.motion?.cancel();
      states.delete(region);
    }
    for (const region of live) {
      const previous = states.get(region);
      const card = [...region.querySelectorAll(CARD)].find((node) => node.closest(REGION) === region);
      if (!previous) resize.observe(region);
      if (card !== previous?.card) {
        if (previous?.card) resize.unobserve(previous.card);
        if (card) resize.observe(card);
      }
      if (!card) {
        previous?.motion?.cancel();
        states.set(region, { phase: region.dataset.contentPhase });
        continue;
      }
      const next = {
        card,
        phase: region.dataset.contentPhase,
        sessionId: region.dataset.conversationSession,
        rect: card.getBoundingClientRect(),
        motion: previous?.motion
      };
      const shift = previous?.rect && composerShift(previous, next);
      if (shift && !reduced.matches) {
        previous.motion?.cancel();
        next.motion = card.animate([{ translate: `${shift.x}px ${shift.y}px` }, { translate: "0 0" }], LIST_MOTION);
        next.motion.id = "dsh-ui-composer-dock-shift";
      }
      states.set(region, next);
    }
  }
  const resize = new ResizeObserver(track);
  const observer = new MutationObserver((records) => {
    if (records.some((record) => record.type === "attributes" || [...record.addedNodes, ...record.removedNodes].some((node) => node instanceof Element && (node.matches(`${REGION}, ${CARD}`) || node.querySelector(`${REGION}, ${CARD}`))))) track();
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["data-content-phase", "data-conversation-session"]
  });
  function stopMotion() {
    if (reduced.matches) for (const { motion } of states.values()) motion?.cancel();
  }
  reduced.addEventListener("change", stopMotion);
  track();
  return () => {
    observer.disconnect();
    resize.disconnect();
    reduced.removeEventListener("change", stopMotion);
    for (const { motion } of states.values()) motion?.cancel();
  };
}

// src/client/sidebar.jsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var LIST = "[data-sidebar-list-area]";
var WIDE = "[data-sidebar-scrollport]";
var SEARCH = '[data-sidebar-workspace-header] button[class*="_searchButton"]';
var PROJECT = '[data-row-key^="workspace:"]:not([data-row-key="workspace:"])';
var SESSION = '[data-row-key^="session:"], [class*="_searchResultHeading"], [data-dsh-ui-pinned-session]';
var SLOT = ':scope > span[class*="_slot"], .dsh-ui-pinned-leading';
var SETTLE_ID = "dsh-ui-session-settle";
function styleNewSession(node, label) {
  if (Array.isArray(node)) return node.map((child) => styleNewSession(child, label));
  if (!(0, import_react8.isValidElement)(node)) return node;
  const { className, children } = node.props;
  if (node.type === "button" && className?.endsWith("_newSession")) {
    const remaining = import_react8.Children.toArray(children).filter((child) => !child.props?.className?.endsWith("_newSessionLabelMask"));
    return (0, import_react8.cloneElement)(node, {
      className: `${className} dsh-ui-sidebar-new`,
      "aria-label": label
    }, /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Icon, { name: "plus" }), /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "dsh-ui-sidebar-new-label", children: label }), ...remaining);
  }
  if (children === void 0) return node;
  const styled = styleNewSession(children, label);
  return styled === children ? node : (0, import_react8.cloneElement)(node, void 0, styled);
}
function SidebarNewSession({ wide, children, locale }) {
  const english = useLanguage(locale) === "en";
  return wide ? styleNewSession(children, english ? "New chat" : "\u65B0\u5EFA") : children;
}
function readIcon(key) {
  try {
    return workspaceIcon(localStorage.getItem(key));
  } catch {
    return "folder";
  }
}
function ProjectIcon({ workspaceId, expanded, title, english }) {
  const key = PROJECT_ICON_STORAGE + workspaceId;
  const [selected, setSelected] = (0, import_react8.useState)(() => readIcon(key));
  const popover = usePopover({ align: "left" });
  const label = english ? "Change project icon" : "\u66F4\u6362\u9879\u76EE\u56FE\u6807";
  (0, import_react8.useEffect)(() => {
    const sync = (event) => {
      if (event.key === key || event.key === null) setSelected(readIcon(key));
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, [key]);
  (0, import_react8.useEffect)(() => {
    if (!expanded) popover.close();
  }, [expanded]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "button",
      {
        ...popover.trigger,
        type: "button",
        tabIndex: expanded ? 0 : -1,
        className: "dsh-ui-control dsh-ui-project-icon",
        "data-dsh-ui-project-icon": selected,
        title: label,
        "aria-label": `${label} \xB7 ${title}`,
        onClick: (event) => {
          event.stopPropagation();
          popover.trigger.onClick(event);
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Icon, { name: selected })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "span",
      {
        ...popover.content,
        className: "dsh-ui-popover dsh-ui-project-menu",
        "aria-label": label,
        onClick: (event) => event.stopPropagation(),
        children: PROJECT_ICONS.map(([icon, zh, en]) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "button",
          {
            type: "button",
            className: "dsh-ui-model-row dsh-ui-project-option",
            "aria-pressed": selected === icon,
            onClick: () => {
              setSelected(icon);
              try {
                localStorage.setItem(key, icon);
              } catch {
              }
              popover.close({ focus: true });
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Icon, { name: icon }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: english ? en : zh }),
              selected === icon && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Icon, { name: "check" })
            ]
          },
          icon
        ))
      }
    )
  ] });
}
function settleStatus(mark) {
  const parts = [...mark.querySelectorAll(".dsh-ui-run-rays, .dsh-ui-run-ripple, .dsh-ui-run-orbit")].map((element) => {
    const { transform, opacity } = getComputedStyle(element);
    return { element, transform, opacity };
  });
  const dot = mark.querySelector(".dsh-ui-session-dot");
  const { scale } = getComputedStyle(dot);
  mark.dataset.status = "unread";
  for (const { element, transform, opacity } of parts) {
    const rays = element.classList.contains("dsh-ui-run-rays");
    const diagonal = element.classList.contains("dsh-ui-run-diagonals");
    if (!rays && Number(opacity) <= 0.01) continue;
    const keyframes = [{ transform, opacity }];
    const tilt = diagonal ? "rotate(45deg) " : "";
    if (rays) keyframes.push({ transform: `${tilt}scale(.86)`, opacity: diagonal ? 0.68 : 0.9, offset: 0.26 });
    const finalTransform = rays ? `${tilt}scale(.12)` : `${transform === "none" ? "" : `${transform} `}scale(.22)`;
    keyframes.push({ transform: finalTransform, opacity: 0 });
    element.animate(keyframes, { ...LIST_MOTION, duration: rays ? 430 : 280 }).id = SETTLE_ID;
  }
  dot.animate([{ scale }, { scale: "1" }], LIST_MOTION).id = SETTLE_ID;
}
function decorateStatus(row, decorated, reduce) {
  const slot = row.querySelector(SLOT);
  if (!slot) return;
  const stateDot = slot.querySelector(":scope > [data-state]");
  const status = sidebarStatus(stateDot?.dataset.state);
  const previous = decorated.get(slot);
  if (!status) {
    previous?.remove();
    decorated.delete(slot);
    return;
  }
  const mark = previous ?? document.createElement("span");
  if (!previous) {
    mark.className = "dsh-ui-session-status-mark";
    mark.setAttribute("aria-hidden", "true");
    for (const part of ["session-dot", "run-rays run-cross", "run-rays run-diagonals", "run-ripple", "run-orbit", "wait-bars"]) {
      const child = document.createElement("span");
      child.className = part.split(" ").map((name2) => `dsh-ui-${name2}`).join(" ");
      mark.append(child);
    }
    slot.append(mark);
    decorated.set(slot, mark);
  }
  if (mark.dataset.status === status) return;
  for (const motion of mark.getAnimations({ subtree: true })) if (motion.id === SETTLE_ID) motion.cancel();
  if (mark.dataset.status === "running" && status === "unread" && !reduce) settleStatus(mark);
  else mark.dataset.status = status;
}
function tuneRowMotion(row) {
  for (const motion of row.getAnimations()) {
    const timing = motion.effect?.getTiming();
    if (timing?.duration === 200 && timing.easing === "ease-out" && !("transitionProperty" in motion) && !("animationName" in motion)) {
      motion.effect.updateTiming(LIST_MOTION);
    }
  }
}
function SidebarDecorations({ locale, slots, sessions, workspaces, uiWorkspace, layout, sessionStatus, remoteAccess, renderFactorySlot }) {
  const english = useLanguage(locale) === "en";
  const [projects, setProjects] = (0, import_react8.useState)([]);
  const [seats, setSeats] = (0, import_react8.useState)({});
  (0, import_react8.useLayoutEffect)(() => {
    const decorated = /* @__PURE__ */ new Map();
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const searchSeat = document.createElement("div");
    const recentSeat = document.createElement("div");
    const pinnedSeat = document.createElement("div");
    const draftStyles = document.createElement("style");
    document.head.append(draftStyles);
    searchSeat.className = "dsh-ui-sidebar-search-seat";
    pinnedSeat.className = "dsh-ui-sidebar-pinned-seat";
    const anchoredSearch = CSS.supports("top: anchor(top)") && CSS.supports("width: anchor-size(width)");
    let openSearch;
    let focusFrame = 0;
    let frame = 0;
    function hideDraftRows() {
      const byId = sessions.list.getSnapshot()?.byId ?? {};
      const rows = Object.values(byId).filter((session) => session.blank === true).map(({ id }) => `${LIST} [data-row-key="${CSS.escape(`session:${id}`)}"]`);
      const css = rows.length > 0 ? `${rows.join(", ")} { display: none; }` : "";
      if (draftStyles.textContent !== css) draftStyles.textContent = css;
    }
    function placeSections() {
      const wide = document.querySelector(WIDE);
      const list = wide?.querySelector(LIST);
      const nav = wide?.querySelector(':scope > nav[class*="_panelList"]');
      const searchButton = nav ? wide.querySelector(SEARCH) : null;
      const searchLabel = searchButton?.getAttribute("aria-label");
      const searchShortcut = searchButton?.getAttribute("aria-keyshortcuts");
      const searchExpanded = searchButton?.ariaExpanded === "true";
      const label = slots.entriesOfSlot("sidebar.panellist").find((entry) => entry.options.id === "schedules")?.options.label;
      const scheduleLabel = typeof label === "function" ? label() : label;
      const schedule = Array.from(nav?.querySelectorAll('button[class*="_panelRow"]') ?? []).find((button) => button.getAttribute("aria-label") === scheduleLabel);
      const scheduleEntry = schedule?.closest('[class*="_panelEntry"]');
      const before = scheduleEntry && scheduleEntry.parentElement === nav ? scheduleEntry : nav?.querySelector(':scope > [class*="_moreAnchor"]') ?? null;
      if (!searchButton) searchSeat.remove();
      else if (nav.firstElementChild !== searchSeat) nav.prepend(searchSeat);
      if (anchoredSearch && searchExpanded && openSearch !== searchButton) {
        searchSeat.scrollIntoView({ block: "nearest", inline: "nearest" });
      }
      openSearch = searchExpanded ? searchButton : void 0;
      if (!nav) recentSeat.remove();
      else if (recentSeat.parentElement !== nav || recentSeat.nextSibling !== before) nav.insertBefore(recentSeat, before);
      if (!list) pinnedSeat.remove();
      else if (list.firstElementChild !== pinnedSeat) list.prepend(pinnedSeat);
      const recent = nav ? recentSeat : void 0;
      const pinned = list ? pinnedSeat : void 0;
      const glyph = schedule?.querySelector('[class*="_panelGlyph"]');
      setSeats((previous) => previous.recent === recent && previous.pinned === pinned && previous.glyph === glyph && previous.searchButton === searchButton && previous.searchLabel === searchLabel && previous.searchShortcut === searchShortcut && previous.searchExpanded === searchExpanded ? previous : { recent, pinned, glyph, searchSeat, searchButton, searchLabel, searchShortcut, searchExpanded });
    }
    function synchronize() {
      frame = 0;
      placeSections();
      const rows = [];
      for (const list of document.querySelectorAll(LIST)) {
        for (const row of list.querySelectorAll(SESSION)) {
          decorateStatus(row, decorated, reduced.matches);
          if (!reduced.matches) tuneRowMotion(row);
        }
        for (const row of list.querySelectorAll(PROJECT)) {
          if (!reduced.matches) tuneRowMotion(row);
          const iconSlot = row.querySelector(':scope > span[class*="_folder"]');
          const titleSlot = row.querySelector(':scope > span[class*="_projectText"]');
          if (!iconSlot || !titleSlot) continue;
          rows.push({
            iconSlot,
            titleSlot,
            id: row.dataset.rowKey.slice("workspace:".length),
            expanded: row.getAttribute("aria-expanded") === "true",
            title: titleSlot.textContent ?? ""
          });
        }
      }
      for (const [slot] of decorated) if (!slot.isConnected) decorated.delete(slot);
      setProjects((previous) => previous.length === rows.length && previous.every((row, index) => row.iconSlot === rows[index].iconSlot && row.titleSlot === rows[index].titleSlot && row.expanded === rows[index].expanded && row.title === rows[index].title) ? previous : rows);
    }
    function touchesSidebar({ target, addedNodes, removedNodes }) {
      if (target instanceof Element && target.closest(`[class*="_sidebarCol"], ${LIST}`)) return true;
      return [...addedNodes, ...removedNodes].some((node) => node instanceof Element && (node.matches(WIDE) || node.querySelector(WIDE)));
    }
    function scheduleSync() {
      if (!frame) frame = requestAnimationFrame(synchronize);
    }
    const observer = new MutationObserver((records) => {
      if (!frame && records.some(touchesSidebar)) scheduleSync();
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["aria-expanded", "aria-label", "aria-keyshortcuts", "data-sidebar-scrollport", "data-state"]
    });
    const unsubscribe = slots.subscribe("sidebar.panellist", scheduleSync);
    const unsubscribeDrafts = sessions.list.subscribe(hideDraftRows);
    function restoreSearchFocus(event) {
      const button = openSearch;
      if (event.key !== "Escape" || !(event.target instanceof HTMLInputElement) || !button?.closest('[class*="_searchSlot"]')?.contains(event.target)) return;
      cancelAnimationFrame(focusFrame);
      focusFrame = requestAnimationFrame(() => {
        if (button.ariaExpanded === "false") searchSeat.firstElementChild?.focus({ preventScroll: true });
      });
    }
    function stopMotion() {
      if (!reduced.matches) return;
      for (const mark of decorated.values()) {
        for (const motion of mark.getAnimations({ subtree: true })) if (motion.id === SETTLE_ID) motion.cancel();
      }
    }
    reduced.addEventListener("change", stopMotion);
    document.addEventListener("keydown", restoreSearchFocus, true);
    hideDraftRows();
    synchronize();
    return () => {
      observer.disconnect();
      unsubscribe();
      unsubscribeDrafts();
      reduced.removeEventListener("change", stopMotion);
      document.removeEventListener("keydown", restoreSearchFocus, true);
      cancelAnimationFrame(focusFrame);
      cancelAnimationFrame(frame);
      searchSeat.remove();
      recentSeat.remove();
      pinnedSeat.remove();
      draftStyles.remove();
      for (const mark of decorated.values()) mark.remove();
    };
  }, [slots, sessions]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    seats.searchButton && (0, import_react_dom3.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "button",
      {
        type: "button",
        className: "dsh-ui-sidebar-search",
        "aria-expanded": seats.searchExpanded,
        "aria-keyshortcuts": seats.searchShortcut ?? void 0,
        onClick: (event) => {
          event.stopPropagation();
          seats.searchButton.click();
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Icon, { name: "search" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: seats.searchLabel || (english ? "Search chats" : "\u641C\u7D22\u4F1A\u8BDD") })
        ]
      }
    ), seats.searchSeat),
    projects.map(({ iconSlot, titleSlot, id, expanded, title }) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react8.Fragment, { children: [
      (0, import_react_dom3.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ProjectIcon, { workspaceId: id, expanded, title, english }), iconSlot),
      (0, import_react_dom3.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Icon, { name: "next", className: "dsh-ui-project-chevron" }), titleSlot)
    ] }, id)),
    seats.glyph && (0, import_react_dom3.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Icon, { name: "calendar", className: "dsh-ui-schedule-icon" }), seats.glyph),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      SidebarSessions,
      {
        seats,
        english,
        sessions,
        workspaces,
        uiWorkspace,
        layout,
        sessionStatus,
        remoteAccess,
        renderFactorySlot
      }
    )
  ] });
}

// src/client/transcript.jsx
var import_react9 = require("react");
var import_react_dom4 = require("react-dom");

// src/client/transcript.js
var thinkingCatalogs = {
  "zh-CN": [
    "\u6DF1\u6F5C\u4E2D\u2026",
    "\u6C42\u7D22\u4E2D\u2026",
    "\u9CB8\u6E38\u4E2D\u2026",
    "\u55B7\u6C34\u4E2D\u2026",
    "\u63A2\u6D77\u4E2D\u2026",
    "\u6253\u635E\u7B54\u6848\u2026",
    "\u6F5C\u6C34\u4E2D\u2026",
    "\u8FFD\u6D6A\u82B1\u4E2D\u2026",
    "\u6570\u6D6A\u82B1\u4E2D\u2026",
    "\u542C\u6D77\u6D6A\u4E2D\u2026",
    "\u6DF1\u547C\u5438\u4E2D\u2026",
    "\u9CB8\u6B4C\u541F\u5531\u2026",
    "\u4E0B\u6F5C\u5343\u7C73\u2026",
    "\u89E6\u5E95\u53CD\u5F39\u2026",
    "\u5BFB\u5B9D\u4E2D\u2026",
    "\u7834\u6D6A\u524D\u884C\u2026",
    "\u63A2\u7D22\u6DF1\u6E0A\u2026",
    "\u635E\u7075\u611F\u4E2D\u2026",
    "\u6DF1\u601D\u719F\u8651\u2026",
    "\u9CB8\u5FC3\u8BBE\u8BA1\u2026",
    "\u9CB8\u5FC3\u6253\u78E8\u2026",
    "\u5410\u6CE1\u6CE1\u4E2D\u2026",
    "\u7FFB\u6D77\u5E95\u4E2D\u2026",
    "\u8FFD\u6D0B\u6D41\u4E2D\u2026",
    "\u6349\u8FF7\u85CF\u4E2D\u2026",
    "\u6447\u5C3E\u5DF4\u4E2D\u2026",
    "\u6652\u9CB8\u80CC\u4E2D\u2026",
    "\u8E6D\u73CA\u745A\u4E2D\u2026",
    "\u901B\u6D77\u5E95\u57CE\u2026",
    "\u641C\u5BFB\u73CD\u73E0\u2026",
    "\u6DF1\u5EA6\u601D\u8003\u4E2D\u2026",
    "\u6DF1\u5EA6\u6C42\u7D22\u4E2D\u2026",
    "\u7CBE\u76CA\u6C42\u9CB8\u4E2D\u2026",
    "\u9CB8\u559C\u915D\u917F\u4E2D\u2026",
    "\u4E00\u9CB8\u60CA\u4EBA\u4E2D\u2026",
    "\u9CB8\u8BDA\u601D\u8003\u4E2D\u2026",
    "\u9493\u5927\u9C7C\u4E2D\u2026",
    "\u7EC7\u6E14\u7F51\u4E2D\u2026",
    "\u6570\u9C7C\u7FA4\u4E2D\u2026",
    "\u8EB2\u6697\u7901\u4E2D\u2026",
    "\u907F\u6F29\u6DA1\u4E2D\u2026",
    "\u67E5\u6D77\u56FE\u4E2D\u2026",
    "\u5347\u951A\u4E2D\u2026",
    "\u626C\u5E06\u4E2D\u2026",
    "\u8D77\u822A\u4E2D\u2026",
    "\u706F\u5854\u4EAE\u8D77\u2026",
    "\u6F6E\u6C50\u8BA1\u7B97\u2026",
    "\u6D77\u5E95\u635E\u9488\u2026",
    "\u6316\u73CD\u73E0\u4E2D\u2026",
    "\u6D6E\u51FA\u6C34\u9762\u2026"
  ],
  en: [
    "Diving\u2026",
    "Seeking\u2026",
    "Surfacing\u2026",
    "Swimming\u2026",
    "Splashing\u2026",
    "Submerging\u2026",
    "Exploring\u2026",
    "Fathoming\u2026",
    "Plunging\u2026",
    "Treading\u2026",
    "Sounding\u2026",
    "Trawling\u2026",
    "Netting\u2026",
    "Fishing\u2026",
    "Drifting\u2026",
    "Floating\u2026",
    "Bubbling\u2026",
    "Spouting\u2026",
    "Breaching\u2026",
    "Wading\u2026",
    "Snorkeling\u2026",
    "Delving\u2026",
    "Probing\u2026",
    "Plumbing\u2026",
    "Sailing\u2026",
    "Anchoring\u2026",
    "Charting\u2026",
    "Navigating\u2026",
    "Foraging\u2026",
    "Dredging\u2026",
    "Pearling\u2026",
    "Reefing\u2026",
    "Clamming\u2026",
    "Musseling\u2026",
    "Surfing\u2026",
    "Deepening\u2026",
    "Whaling\u2026",
    "Orcastrating\u2026",
    "Finishing\u2026",
    "Whalecoming\u2026",
    "Seaing\u2026",
    "Krilling\u2026",
    "Tidying\u2026",
    "Gliding\u2026",
    "Rippling\u2026",
    "Echoing\u2026",
    "Pinging\u2026",
    "Marinating\u2026",
    "Pondering\u2026",
    "Lighthousing\u2026"
  ]
};
var THINKING_PERIOD = 2050;
var THINKING_SHAPES = [
  // Pulse, diamond, cross, and rising trail.
  [[-8.5, 0, 0.76], [0, 0, 1.16], [8.5, 0, 0.76], [0, 0, 0.4, 0.4, 0, 0]],
  [[-8, 0], [0, -7], [8, 0], [0, 7]],
  [[-5.5, 0, 2.1, 0.62], [0, -5.5, 0.62, 2.1], [5.5, 0, 2.1, 0.62], [0, 5.5, 0.62, 2.1]],
  [[-9, 5.5, 0.6, 0.6, 0, 0.64], [-4, 2.5, 0.86], [1.5, -1, 1.42, 0.68, -35], [8, -5.5, 1.5, 0.82, -35]],
  // Orbit, sound bars, triangle, and pinwheel.
  [[-8, -3, 1.25, 0.72, -35], [2.5, -6, 0.8], [8, 3, 1.25, 0.72, -35], [-2.5, 6, 0.8]],
  [[-8.4, 1, 0.66, 1.2], [-2.8, 0, 0.68, 3.1], [2.8, -0.8, 0.68, 2.15], [8.4, 0.6, 0.66, 1.45]],
  [[-8, 5.5], [0, -7, 1.22], [8, 5.5], [0, 2, 0.65, 0.65, 0, 0.62]],
  [[-5.7, -4.3, 1.9, 0.67, 39], [5.7, -4.3, 1.9, 0.67, -39], [5.7, 4.3, 1.9, 0.67, 39], [-5.7, 4.3, 1.9, 0.67, -39]]
];
function thinkingWord(language, previous, random = Math.random) {
  const pool = thinkingCatalogs[language] ?? thinkingCatalogs.en;
  const choices = pool.filter((word) => word !== previous);
  return choices[Math.floor(random() * choices.length)];
}
function turnActivity(entries) {
  for (let index = entries.length - 1; index >= 0; index -= 1) {
    const { type, data } = entries[index].event;
    if (!Number.isSafeInteger(data?.turn)) continue;
    const prefix = `${data.turn}:`;
    switch (type) {
      case "turn/end":
        return "";
      case "turn/start":
      case "step/start":
      case "llm/retry-started":
        return `${prefix}pending`;
      case "llm/retry":
        return `${prefix}retry`;
      case "tool/call":
      case "tool/result":
        return `${prefix}tools`;
      case "assistant/message": {
        const content = data.message?.content;
        if (Array.isArray(content) && content.some((row) => row.type === "tool-call")) return `${prefix}tools`;
        return `${prefix}streaming`;
      }
      case "assistant/live-chunk": {
        const chunk = data.chunk;
        if (chunk?.type === "reasoning-delta" && chunk.text) return `${prefix}thinking`;
        if (chunk?.type === "tool-call-delta") return `${prefix}tools`;
        if (chunk?.type === "text-delta" && chunk.text?.trim()) return `${prefix}streaming`;
        break;
      }
    }
  }
  return "";
}
var tools = {
  search: ["fs_search", "grep", "glob", "search", "web_search", "session_search", "session_event_search"],
  read: ["read", "read_file", "read_files", "read_image", "read_document", "fs_read", "web_fetch", "session_event_read"],
  command: ["bash", "exec", "exec_command", "shell", "terminal", "terminal_exec", "terminal_open", "terminal_input"],
  write: ["write", "write_file", "fs_write", "edit", "str_replace_editor", "todo_write", "str_replace", "edit_file"],
  diff: ["diff", "apply_patch", "git_diff", "workspace_diff"],
  review: ["preview", "review", "plan_review", "exit_plan_mode", "preview_open", "preview_render", "preview_snapshot", "html_render", "office_render", "ask_user_question"]
};
var toolNames = new Map(Object.entries(tools).flatMap(([category, names]) => names.map((name2) => [name2, category])));
var textToolViews = /* @__PURE__ */ new Map([
  ["bash", "bash-toolview-sample"],
  ["read", "read-toolview"],
  ["write", "file-mutation-toolview"],
  ["edit", "file-mutation-toolview"],
  ["todo_write", "todo-toolview"],
  ["web_search", "web-toolview"],
  ["web_fetch", "web-toolview"],
  ["grep", "search-toolview"],
  ["glob", "search-toolview"],
  ["fs_search", "search-toolview"],
  ["apply_patch", "file-mutation-toolview"]
]);
function canGroupTool(root, renderers) {
  const expected = textToolViews.get(root?.name);
  if (expected === void 0) return false;
  const renderer = renderers.get(root.name);
  return (renderer === void 0 || renderer === expected) && (root.content === void 0 || Array.isArray(root.content) && root.content.every((block) => block?.type === "text")) && (root.subCalls === void 0 || Array.isArray(root.subCalls) && root.subCalls.every((child) => canGroupTool(child, renderers)));
}
function toolCategory(name2, variant) {
  return toolNames.get(name2?.split("__").at(-1)) ?? toolNames.get(variant);
}
var toolLabels = {
  search: ["\u641C\u7D22\u8D44\u6599", (count) => `\u641C\u7D22 ${count} \u6B21`, "Search materials", (count) => `Run ${count} searches`],
  read: ["\u8BFB\u53D6\u6587\u4EF6", (count) => `\u8BFB\u53D6 ${count} \u4E2A\u6587\u4EF6`, "Read files", (count) => `Read ${count} files`],
  command: ["\u8FD0\u884C\u547D\u4EE4", (count) => `\u8FD0\u884C ${count} \u6761\u547D\u4EE4`, "Run command", (count) => `Run ${count} commands`],
  write: ["\u5199\u5165\u6587\u4EF6", (count) => `\u5199\u5165 ${count} \u4E2A\u6587\u4EF6`, "Write file", (count) => `Write ${count} files`],
  diff: ["\u67E5\u770B\u6539\u52A8", (count) => `\u67E5\u770B ${count} \u5904\u6539\u52A8`, "View changes", (count) => `Review ${count} changes`],
  review: ["\u9884\u89C8\u7ED3\u679C", (count) => `\u9884\u89C8 ${count} \u6B21`, "Preview result", (count) => `Preview ${count} times`],
  tool: ["\u8C03\u7528\u5DE5\u5177", (count) => `\u8C03\u7528 ${count} \u6B21\u5DE5\u5177`, "Call tool", (count) => `Make ${count} tool calls`]
};
function toolLabel(category, language, count = 1) {
  const [single, plural] = toolLabels[category].slice(language === "en" ? 2 : 0);
  return count === 1 ? single : plural(count);
}
function describeTools(rows, language) {
  const counts = /* @__PURE__ */ new Map();
  for (const { category, files } of rows) {
    counts.set(category, (counts.get(category) ?? 0) + (files.length || 1));
  }
  return Array.from(counts, ([category, count]) => toolLabel(category, language, count)).join(" \xB7 ");
}
function isToolActive({ state }) {
  return state === "preparing" || state === "running";
}
function toolDescription({ args }) {
  for (const field of ["title", "description", "objective", "task", "task_name", "message"]) {
    const text = args?.textPrefix(field, 144)?.replace(/\s+/g, " ").trim();
    if (text) return text;
  }
}
function toolFiles(args, category, name2) {
  if (!["read", "write", "diff", "review"].includes(category) || name2 === "web_fetch") return [];
  const files = ["paths", "files"].flatMap((key) => {
    const list = args?.value(key);
    return Array.isArray(list) ? list.map((file) => typeof file === "string" ? file : file?.path) : [];
  });
  const path = ["path", "file_path", "file", "filename"].map((key) => args?.text(key)).find(Boolean);
  if (path) files.push(path);
  if (name2 === "apply_patch") {
    const patch = args?.text("patch") ?? args?.text("input") ?? "";
    for (const [, file] of patch.matchAll(/^\*\*\* (?:Add File|Update File|Move to): (.+)$/gm)) files.push(file);
  }
  return Array.from(new Set(files.filter((file) => typeof file === "string" && file.trim())));
}
function toolResultText(root, category) {
  const text = root.content?.filter((block) => block.type === "text").map((block) => block.text).join("\n") ?? "";
  const exitCode = root.meta?.exitCode ?? (category === "command" ? text.match(/\[exit code: (-?\d+)\]\s*$/i)?.[1] : void 0);
  const signal = root.meta?.signal ?? (category === "command" ? text.match(/\[killed by signal: ([^\]\n]+)\]\s*$/i)?.[1] : void 0);
  const failed = root.isError || exitCode != null && Number(exitCode) !== 0 || signal != null;
  const output = root.error?.reason ? [root.error.reason, text].filter(Boolean).join("\n") : text;
  return { output, failed };
}
function toolRows(calls, closed) {
  const rows = [];
  function add(root, depth) {
    const name2 = root.name?.split("__").at(-1);
    const category = toolCategory(name2) ?? "tool";
    const files = toolFiles(root.args, category, name2);
    const target = ["command", "cmd", "query", "pattern", "url", "path", "description"].map((field) => root.args?.textPrefix(field, 360)).find(Boolean);
    const { output, failed } = toolResultText(root, category);
    const stopped = ["interrupted", "ASK_ABORTED", "TOOL_ABORTED"].includes(root.error?.code);
    const state = root.kind === "tool-result" ? stopped ? "stopped" : failed ? "error" : "done" : closed ? "stopped" : root.phase === "preparing" ? "preparing" : "running";
    rows.push({ root, name: name2, category, files, target, state, output, depth });
    for (const child of root.subCalls ?? []) add(child, depth + 1);
  }
  for (const { root } of calls) add(root, 0);
  return rows;
}
function summarizeToolOutput({ root, output }, language) {
  const lineCount = root.meta?.lines?.length;
  if (Number.isSafeInteger(lineCount) && root.meta?.path && !root.isError) {
    return language === "en" ? `Read ${lineCount} ${lineCount === 1 ? "line" : "lines"}` : `\u5DF2\u8BFB\u53D6 ${lineCount} \u884C`;
  }
  const body = output.match(/^<path>[^\n]*<\/path>\n<type>[^\n]*<\/type>\n<content>\n([\s\S]*)\n<\/content>$/)?.[1] ?? output;
  return body.trim().split("\n", 1)[0].slice(0, 180);
}
function reasoningBlocks(steps) {
  return steps.flatMap(({ blocks }) => blocks.flatMap((block) => {
    if (block.kind !== "reasoning") return [];
    const signature = "<signature>";
    const raw = block.text;
    if (signature.startsWith(raw)) return [];
    if (!raw.startsWith(signature)) return raw.trim() ? [raw] : [];
    const end = raw.indexOf("</signature>", signature.length);
    const text = end < 0 ? "" : raw.slice(end + "</signature>".length).replace(/^(?:\r?\n)+/, "");
    return text.trim() ? [text] : [];
  }));
}
var TOOL_BATCH_SIZE = 6;
function workBatches(members, closed) {
  const batches = [];
  let batch;
  for (const { key, kind, data } of members) {
    const call = kind === "tool-call" ? data : null;
    const texts = call ? [] : reasoningBlocks([data]);
    if (!call && !texts.length) continue;
    if (!batch || batch.calls.length === TOOL_BATCH_SIZE) {
      batch = { key, calls: [], texts: [] };
      batches.push(batch);
    }
    if (call) batch.calls.push(call);
    else batch.texts.push(...texts);
  }
  return batches.map(({ key, calls, texts }) => ({ key, rows: toolRows(calls, closed), texts }));
}
function liveAnswerStep(steps, lastStep) {
  const step = steps.at(-1);
  if (!step || lastStep !== void 0 && step.step !== lastStep) return void 0;
  const answer = step.blocks.some((block) => block.kind === "text" ? block.text.trim() : block.kind === "image" || block.kind === "other");
  return answer && !step.blocks.some((block) => block.kind === "tool-call") ? step.step : void 0;
}

// src/client/transcript.jsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var FLOW = '[data-slot="conversation.chat.flow"]';
var RUNNING = "[data-chat-running]:not([data-holding])";
var TOOL = '[data-chat-flow-kind="tool-call"]';
var REASONING = '[data-chat-group-part="reasoning"], [data-chat-flow-kind="reasoning"]';
var NATIVE_PROCESS = "data-dsh-ui-replaced-process";
var REPLACED_GROUP = "data-dsh-ui-replaced-group";
var DETAIL_LABEL = "data-dsh-ui-detail-label";
var NOTE = "data-dsh-ui-note";
var AUTO_CONTEXT = "data-dsh-ui-automatic-context";
var TOOL_SLOTS = ["tool.call.toolview", "conversation.chat.node"];
var EMPTY = [];
var AUTOMATIC_CONTEXT = /* @__PURE__ */ new Set(["runtime-context", "skill-catalog", "time-context"]);
var EXPOSED_END_REASONS = /* @__PURE__ */ new Set(["aborted", "interrupted", "error"]);
var labels = {
  pending: ["\u601D\u8003\u4E2D\u2026", "Thinking\u2026"],
  thinking: ["\u6B63\u5728\u63A8\u7406\u2026", "Reasoning\u2026"],
  tools: ["\u8C03\u7528\u5DE5\u5177\u4E2D\u2026", "Running tools\u2026"],
  retry: ["\u7B49\u5F85\u91CD\u8BD5\u2026", "Waiting to retry\u2026"],
  waiting: ["\u7B49\u5F85\u8F93\u5165\u2026", "Waiting for input\u2026"]
};
function ThinkingCue({ phase, language }) {
  const reduced = useReducedMotion();
  const label = labels[phase][language === "en" ? 1 : 0];
  const [cue, setCue] = (0, import_react9.useState)(() => ({ tick: 0, word: thinkingWord(language) }));
  (0, import_react9.useEffect)(() => {
    if (reduced) return;
    const timer = setInterval(() => setCue((previous) => ({
      tick: previous.tick + 1,
      word: thinkingWord(language, previous.word),
      previous: previous.word
    })), THINKING_PERIOD);
    return () => clearInterval(timer);
  }, [language, reduced]);
  const holdLabel = reduced || phase === "waiting";
  const dots = THINKING_SHAPES[reduced ? 1 : cue.tick % THINKING_SHAPES.length];
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "dsh-ui-thinking", "data-phase": phase, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "dsh-ui-sr-only", role: "status", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "dsh-ui-thinking-dots", "aria-hidden": "true", children: dots.map(([x, y, sx = 1, sy = sx, rotate = 0, opacity = 1], index) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "span",
      {
        style: { transform: `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${sx}, ${sy})`, opacity }
      },
      index
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "dsh-ui-thinking-words", "aria-hidden": "true", children: [
      !holdLabel && cue.previous && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { "data-word-exit": "", children: cue.previous }, `out-${cue.tick}`),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { "data-word-enter": !holdLabel && cue.tick > 0 ? "" : void 0, children: holdLabel ? label : cue.word }, holdLabel ? "status" : cue.tick)
    ] })
  ] });
}
function TurnCue({ turn, binding, sessionStatus, language, activeTools, activeRetry }) {
  const status = useStore(sessionStatus)?.get(binding.sessionId);
  const { eventSource } = binding;
  const subscribe = (0, import_react9.useCallback)((listener) => eventSource.subscribe(listener), [eventSource]);
  const snapshot = (0, import_react9.useCallback)(() => turnActivity(eventSource.getSnapshot().entries), [eventSource]);
  const [activeTurn, phase] = (0, import_react9.useSyncExternalStore)(subscribe, snapshot).split(":");
  if (String(turn) !== activeTurn || !status?.running && !status?.pendingInteraction) return null;
  const shownPhase = status.pendingInteraction ? "waiting" : phase;
  if (shownPhase === "tools" && activeTools || shownPhase === "retry" && activeRetry) return null;
  if (!labels[shownPhase]) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ThinkingCue, { phase: shownPhase, language }, language);
}
function ToolSignal({ category, active = true }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "dsh-ui-tool-signal", "data-category": category, "data-active": active ? "" : void 0, "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", {}),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", {}),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", {})
  ] });
}
var toolIcons = {
  search: "M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm4.7 11.2L21 21",
  command: "m4 6 6 6-6 6m9 0h7",
  diff: "M12 3v18M4 8h5M6.5 5.5v5M15 16h5",
  review: "M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm3 5h8m-8 4h8m-8 4h5",
  tool: "M5 7h14v13H5Zm4 0V4h6v3m-10 6h14"
};
function ToolIcon({ category }) {
  if (category === "read" || category === "write") return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Icon, { name: category === "read" ? "file" : "pencil" });
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "svg",
    {
      className: "dsh-ui-icon",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: toolIcons[category] })
    }
  );
}
var toolStates = {
  running: ["\u8FD0\u884C\u4E2D", "Running"],
  preparing: ["\u8FD0\u884C\u4E2D", "Running"],
  done: ["\u5B8C\u6210", "Done"],
  stopped: ["\u5DF2\u505C\u6B62\u5904\u7406", "Stopped"],
  error: ["\u5931\u8D25", "Failed"]
};
function ToolItem({ row, language, openFile, inspectCall }) {
  const { root, name: name2, category, state, files, target, output, depth } = row;
  const english = language === "en";
  const [open, setOpen] = (0, import_react9.useState)(false);
  const id = (0, import_react9.useId)();
  const active = isToolActive(row);
  const title = toolDescription(root) || category === "tool" && name2 || toolLabel(category, language);
  const detailLabel = english ? "Tool details" : "\u5DE5\u5177\u8BE6\u60C5";
  const stateLabel = toolStates[state][english ? 1 : 0];
  const summary = summarizeToolOutput(row, language);
  const args = open ? root.call?.argsRaw ?? root.argsRaw : void 0;
  const offset = name2 === "read" || name2 === "read_file" ? root.args?.value("offset") : void 0;
  const line = Number.isSafeInteger(offset) && offset > 0 ? offset : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "dsh-ui-tool-item", "data-category": category, "data-state": state, "data-nested": depth ? "" : void 0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "dsh-ui-tool-heading", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ToolIcon, { category }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "dsh-ui-tool-title", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "dsh-ui-tool-name", title, children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "dsh-ui-tool-targets", children: [
          files.map((path) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
            "button",
            {
              type: "button",
              className: "dsh-ui-tool-target",
              title: path,
              onClick: () => openFile(path, line === void 0 ? void 0 : { line }),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("code", { children: path }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Icon, { name: "next" })
              ]
            },
            path
          )),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
            "button",
            {
              type: "button",
              className: "dsh-ui-tool-target",
              title: target || detailLabel,
              "aria-expanded": open,
              "aria-controls": open ? id : void 0,
              onClick: () => setOpen((value) => !value),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("code", { children: files.length ? detailLabel : target || name2 || detailLabel }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Icon, { name: "next" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "dsh-ui-tool-mark", "aria-hidden": "true", children: active ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ToolSignal, { category }) : state === "done" && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Icon, { name: "check" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "dsh-ui-tool-state", children: stateLabel })
    ] }),
    summary && !open && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "dsh-ui-tool-output", children: summary }),
    open && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { id, className: "dsh-ui-tool-detail", children: [
      args && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("pre", { children: args }),
      output && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("pre", { children: output }),
      inspectCall && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("button", { type: "button", className: "dsh-ui-tool-target", onClick: () => inspectCall(root.callId), children: [
        english ? "Open call in trajectory" : "\u5728\u8F68\u8FF9\u4E2D\u67E5\u770B\u8C03\u7528",
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Icon, { name: "next" })
      ] })
    ] })
  ] });
}
function ToolGroup({ rows, language, label, openFile, inspectCall, showToolDetail, expanded }) {
  const [visited, setVisited] = (0, import_react9.useState)(false);
  const active = rows.findLast(isToolActive);
  const title = describeTools(rows, language);
  const currentTool = showToolDetail && active && (toolDescription(active.root) || active.target || active.name);
  const status = active && toolStates[active.state][language === "en" ? 1 : 0];
  const hint = [title, status, currentTool].filter(Boolean).join(" \xB7 ");
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "details",
    {
      className: "dsh-ui-tool-group",
      open: expanded || void 0,
      onToggle: (event) => {
        if (event.currentTarget.open) setVisited(true);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("summary", { className: "dsh-ui-tool-summary", title: hint, children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ToolSignal, { category: active?.category ?? rows.at(-1)?.category, active: Boolean(active) }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "dsh-ui-tool-summary-text", children: label }),
          status && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "dsh-ui-sr-only", children: status }),
          currentTool && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "dsh-ui-tool-live-detail", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { "aria-hidden": "true", children: "\xB7 " }),
            currentTool
          ] }, active.root.callId),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Icon, { name: "next" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "dsh-ui-tools", children: (visited || expanded) && rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          ToolItem,
          {
            row,
            language,
            openFile,
            inspectCall
          },
          row.root.callId
        )) })
      ]
    }
  );
}
function Reasoning({ texts, english, expanded }) {
  const [visited, setVisited] = (0, import_react9.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "details",
    {
      className: "dsh-ui-reasoning",
      open: expanded || void 0,
      onToggle: (event) => {
        if (event.currentTarget.open) setVisited(true);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("summary", { className: "dsh-ui-reasoning-summary", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: english ? "Reasoning" : "\u601D\u8003\u8FC7\u7A0B" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Icon, { name: "next" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "dsh-ui-reasoning-log", children: (visited || expanded) && texts.map((text, index) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { children: text }, index)) })
      ]
    }
  );
}
function NativeProcessDetails({ header, content, label, open }) {
  const toggle = (0, import_react9.useRef)(null);
  (0, import_react9.useLayoutEffect)(() => {
    if (open) return;
    if (content.contains(document.activeElement)) toggle.current?.focus({ preventScroll: true });
    const reveal = () => header.click();
    content.setAttribute("hidden", "until-found");
    content.addEventListener("beforematch", reveal);
    return () => {
      content.removeEventListener("beforematch", reveal);
      content.removeAttribute("hidden");
    };
  }, [header, content, open]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "button",
    {
      ref: toggle,
      type: "button",
      className: "dsh-ui-process-toggle",
      "aria-expanded": open,
      "aria-controls": header.getAttribute("aria-controls"),
      onClick: () => header.click(),
      children: [
        label,
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Icon, { name: "next" })
      ]
    }
  );
}
function processHost(turn) {
  const element = document.createElement("div");
  element.className = "dsh-ui-turn-process";
  element.dataset.chatTurn = String(turn);
  element.dataset.dshUiProcessHost = "";
  return element;
}
function useTurnPlacement(anchor, turn, answerKey, current, nodes, groupable, english, keepNativeOpen) {
  const [hosts] = (0, import_react9.useState)(() => /* @__PURE__ */ new Map());
  const [cueHost] = (0, import_react9.useState)(() => processHost(turn));
  const [sections, setSections] = (0, import_react9.useState)(EMPTY);
  const [running, setRunning] = (0, import_react9.useState)(null);
  const [otherProcess, setOtherProcess] = (0, import_react9.useState)(false);
  (0, import_react9.useLayoutEffect)(() => () => {
    for (const section of hosts.values()) section.target.remove();
    hosts.clear();
    cueHost.remove();
  }, [hosts, cueHost]);
  (0, import_react9.useLayoutEffect)(() => {
    const flow = anchor?.closest(FLOW) ?? anchor?.closest("[data-chat-flow]");
    if (!flow) return;
    const turnId = String(turn);
    const marked = /* @__PURE__ */ new Set();
    const replacedGroups = /* @__PURE__ */ new Set();
    const automatic = /* @__PURE__ */ new Set();
    const adapted = /* @__PURE__ */ new Map();
    const notes = /* @__PURE__ */ new Set();
    const reasoningLabel = english ? "Reasoning" : "\u601D\u8003\u8FC7\u7A0B";
    const otherLabel = english ? "Other details" : "\u5176\u4ED6\u8BE6\u60C5";
    const sameTurn = (row) => row?.getAttribute("data-chat-turn") === turnId;
    const isHost = (row) => row.hasAttribute("data-dsh-ui-process-host");
    function place() {
      const rows = [...flow.children].filter((row) => sameTurn(row) && !isHost(row));
      const live = current ? flow.querySelector(`:scope > ${RUNNING}`) : null;
      const placements = [];
      const activeKeys = /* @__PURE__ */ new Set();
      const hide = /* @__PURE__ */ new Set();
      const replaced = /* @__PURE__ */ new Set();
      const autoContext = /* @__PURE__ */ new Set();
      const details = /* @__PURE__ */ new Map();
      const transitional = /* @__PURE__ */ new Set();
      let other = false;
      for (const row of rows) {
        if (row.matches('[data-chat-flow-kind="assistant-step"]:not([data-chat-group-part="reasoning"])') && row.dataset.chatNodeKey !== answerKey) transitional.add(row);
        const group = row.hasAttribute("data-step-process");
        const content = group && row.querySelector(":scope > [data-step-process-body] > [data-step-process-content]");
        const members = content ? [...content.children].filter((member) => member.hasAttribute("data-chat-flow-kind")) : [row];
        const key = row.dataset.chatFlowKey ?? row.dataset.chatNodeKey;
        const work = [];
        for (const member of members) {
          const nodeKey = member.dataset.chatNodeKey;
          const data = nodes?.get(nodeKey)?.data;
          if (key && (member.matches(TOOL) && groupable.has(data?.root?.callId) || member.matches(REASONING) && data?.blocks)) {
            work.push(nodeKey);
            hide.add(member);
          } else if (member.dataset.chatFlowKind === "context" && AUTOMATIC_CONTEXT.has(data?.producer?.label)) {
            hide.add(member);
            autoContext.add(member);
          }
        }
        const nativeMembers = members.filter((member) => !hide.has(member));
        let header, nativeContent, label, nativeOpen;
        if (content && members.length && !nativeMembers.length) {
          if (work.length) replaced.add(row);
          else autoContext.add(row);
        } else if (content && nativeMembers.length) {
          other = true;
          header = row.querySelector(":scope > div > button[data-process-activity]");
          if (header) {
            label = nativeMembers.every((member) => member.matches(REASONING)) ? reasoningLabel : otherLabel;
            details.set(header, label);
            if (!keepNativeOpen && row.hasAttribute("data-group-expanded-mode")) {
              nativeContent = content;
              nativeOpen = header.getAttribute("aria-expanded") === "true";
            }
          }
        } else {
          other ||= nativeMembers.some((member) => member.hasAttribute("data-turn-process-member"));
        }
        if (!key || !work.length && !nativeContent) continue;
        let section = hosts.get(key);
        if (!section || work.length !== section.members.length || work.some((id, index) => id !== section.members[index]) || nativeContent !== section.nativeContent || header !== section.header || label !== section.label || nativeOpen !== section.nativeOpen) {
          section = {
            key,
            members: work,
            target: section?.target ?? processHost(turn),
            header,
            nativeContent,
            label,
            nativeOpen
          };
          hosts.set(key, section);
        }
        if (section.target.parentElement !== row) row.prepend(section.target);
        activeKeys.add(key);
        placements.push(section);
      }
      for (const [key, section] of hosts) {
        if (activeKeys.has(key)) continue;
        section.target.remove();
        hosts.delete(key);
      }
      if (current && !live) {
        const answer = rows.find((row) => row.dataset.chatNodeKey === answerKey && answerKey !== void 0);
        const tail = rows.find((row) => row.dataset.chatFlowKind === "turn-tail");
        const next = answer ?? tail ?? rows.at(-1)?.nextElementSibling ?? null;
        if (next !== cueHost && (cueHost.parentElement !== flow || cueHost.nextElementSibling !== next)) {
          flow.insertBefore(cueHost, next);
        }
      } else {
        cueHost.remove();
      }
      for (const [previous, next, attribute, value = ""] of [
        [marked, hide, NATIVE_PROCESS],
        [replacedGroups, replaced, REPLACED_GROUP],
        [automatic, autoContext, AUTO_CONTEXT],
        [notes, transitional, NOTE]
      ]) {
        for (const row of previous) if (!next.has(row)) {
          row.removeAttribute(attribute);
          previous.delete(row);
        }
        for (const row of next) if (!previous.has(row)) {
          row.setAttribute(attribute, value);
          previous.add(row);
        }
      }
      for (const [header, original] of adapted) if (!details.has(header)) {
        restoreTitle(header, original);
        adapted.delete(header);
      }
      for (const [header, label] of details) {
        if (!adapted.has(header)) adapted.set(header, header.getAttribute("aria-label"));
        if (header.getAttribute(DETAIL_LABEL) !== label) {
          header.setAttribute(DETAIL_LABEL, label);
          header.setAttribute("aria-label", label);
        }
      }
      setSections((previous) => previous.length === placements.length && previous.every((part, index) => part === placements[index]) ? previous : placements);
      setRunning(live);
      setOtherProcess(other);
    }
    function restoreTitle(header, original) {
      if (header.getAttribute("aria-label") === header.getAttribute(DETAIL_LABEL)) {
        if (original === null) header.removeAttribute("aria-label");
        else header.setAttribute("aria-label", original);
      }
      header.removeAttribute(DETAIL_LABEL);
    }
    const observer = new MutationObserver((records) => {
      if (records.some(({ target, attributeName, addedNodes, removedNodes }) => {
        if (attributeName === "data-holding") return current && target.parentElement === flow;
        if (attributeName === "aria-expanded" && !target.matches("button[data-process-activity]")) return false;
        const group = target.closest("[data-step-process]");
        if (attributeName) return sameTurn(target) || sameTurn(group);
        const changed = [...addedNodes, ...removedNodes].filter((node) => node instanceof HTMLElement && !isHost(node));
        if (target === flow) return changed.some((node) => sameTurn(node) || current && node.hasAttribute("data-chat-running"));
        return changed.length > 0 && sameTurn(group) && (target === group || target.parentElement === group || target.matches("[data-step-process-content]"));
      })) place();
    });
    observer.observe(flow, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-holding", "data-turn-process-member", "data-chat-group-part", "data-group-expanded-mode", "aria-expanded"]
    });
    place();
    return () => {
      observer.disconnect();
      for (const row of marked) row.removeAttribute(NATIVE_PROCESS);
      for (const row of replacedGroups) row.removeAttribute(REPLACED_GROUP);
      for (const row of automatic) row.removeAttribute(AUTO_CONTEXT);
      for (const [header, original] of adapted) restoreTitle(header, original);
      for (const row of notes) row.removeAttribute(NOTE);
    };
  }, [anchor, hosts, cueHost, turn, answerKey, current, nodes, groupable, english, keepNativeOpen]);
  return { sections, running, cueHost, otherProcess };
}
function TurnProcess({
  node,
  turnProcess,
  binding,
  chat,
  openTurn,
  sessionStatus,
  chatSettings,
  slots,
  locale,
  openFile,
  inspectCall
}) {
  const language = useLanguage(locale);
  const english = language === "en";
  const turn = node.data.turn;
  const current = useStore(openTurn) === turn;
  const pendingInteraction = useStore(current ? sessionStatus : void 0)?.get(binding.sessionId)?.pendingInteraction;
  const getNodes = (0, import_react9.useCallback)(() => chat.getSnapshot()?.nodes, [chat]);
  const nodes = (0, import_react9.useSyncExternalStore)(chat.subscribe, getNodes);
  const assistants = useStore(nodes?.turnDataSource(turn, "assistant-step")) ?? EMPTY;
  const calls = useStore(nodes?.turnDataSource(turn, "tool-call")) ?? EMPTY;
  const toolVersion = useSlotVersion(slots, TOOL_SLOTS);
  const groupable = (0, import_react9.useMemo)(() => {
    const toolSeat = slots.entriesOfSlot(TOOL_SLOTS[1]).find((entry) => entry.options.key === "tool-call");
    if (!toolSeat?.children?.[TOOL_SLOTS[0]]) return /* @__PURE__ */ new Set();
    const renderers = new Map(slots.entriesOfSlot(TOOL_SLOTS[0]).map((entry) => [entry.options.key, entry.registrant ?? null]));
    return new Set(calls.filter((call) => canGroupTool(call.root, renderers)).map((call) => call.root.callId));
  }, [calls, slots, toolVersion]);
  const retries = useStore(nodes?.turnDataSource(turn, "model-retry")) ?? EMPTY;
  const compactions = useStore(current ? nodes?.turnDataSource(turn, "compaction") : void 0) ?? EMPTY;
  const mode = useStore(chatSettings)?.value?.transcriptView;
  const expanded = mode === "verbose";
  const showToolDetail = mode !== "compact" && !expanded;
  const location2 = chat.getSnapshot()?.timeline.turns.get(turn);
  const closed = location2?.status === "closed";
  const answerStep = closed ? node.data.answerStep : liveAnswerStep(assistants, location2?.steps.at(-1)?.step);
  const answerKey = answerStep == null ? void 0 : chat.getSnapshot()?.locations.getStep(turn, answerStep).find((key) => nodes?.get(key)?.kind === "assistant-step");
  const [anchor, setAnchor] = (0, import_react9.useState)(null);
  const otherLabel = english ? "Other details" : "\u5176\u4ED6\u8BE6\u60C5";
  const { sections, running, cueHost, otherProcess } = useTurnPlacement(
    anchor,
    turn,
    answerKey,
    current,
    nodes,
    groupable,
    english,
    expanded || Boolean(pendingInteraction)
  );
  const work = (0, import_react9.useMemo)(() => sections.map((section) => ({
    ...section,
    batches: workBatches(section.members.map((key) => nodes?.get(key)).filter(Boolean), closed)
  })), [sections, nodes, calls, assistants, closed]);
  const hasBatches = work.some((section) => section.batches.length > 0);
  const activeTools = work.some((section) => section.batches.some((batch) => batch.rows.some(isToolActive)));
  const activeRetry = retries.some(({ current: current2 }) => current2.retryState === "scheduled");
  const compacting = compactions.some((row) => row.kind === "compaction-progress" && row.status === "running");
  const canFold = closed && turnProcess?.foldable && turnProcess.hasContent && (hasBatches || otherProcess) && !EXPOSED_END_REASONS.has(location2.end?.data.reason?.kind);
  const toggleRef = (0, import_react9.useRef)(null);
  const open = turnProcess?.open;
  (0, import_react9.useLayoutEffect)(() => {
    if (!canFold || open) return;
    const member = document.activeElement?.closest("[data-step-process], [data-turn-process-member]");
    if (member?.dataset.chatTurn === String(turn)) toggleRef.current?.focus({ preventScroll: true });
  }, [canFold, open, turn]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { hidden: true, ref: setAnchor, "data-dsh-ui-process-anchor": "" }),
    canFold && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "button",
      {
        ref: toggleRef,
        type: "button",
        className: "dsh-ui-process-toggle",
        "aria-expanded": open,
        onClick: (event) => {
          event.currentTarget.focus({ preventScroll: true });
          turnProcess.setOpen(!open);
        },
        children: [
          english ? "Work details" : "\u5904\u7406\u8FC7\u7A0B",
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Icon, { name: "next" })
        ]
      }
    ),
    work.map(({ key, target, batches, header, nativeContent, label, nativeOpen }) => (0, import_react_dom4.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
      batches.map((batch) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "dsh-ui-work-batch", children: [
        batch.rows.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          ToolGroup,
          {
            rows: batch.rows,
            language,
            label: otherLabel,
            openFile,
            inspectCall,
            showToolDetail,
            expanded
          }
        ),
        batch.texts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Reasoning, { texts: batch.texts, english, expanded })
      ] }, batch.key)),
      nativeContent && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(NativeProcessDetails, { header, content: nativeContent, label, open: nativeOpen })
    ] }), target, key)),
    current && (0, import_react_dom4.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
      running && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { hidden: true, "data-dsh-ui-running-ready": "" }),
      compacting ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "dsh-ui-thinking dsh-ui-compaction-cue", role: "status", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "dsh-ui-compaction-signal", "aria-hidden": "true" }),
        english ? "Compacting context\u2026" : "\u6B63\u5728\u538B\u7F29\u4E0A\u4E0B\u6587\u2026"
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        TurnCue,
        {
          turn,
          binding,
          sessionStatus,
          language,
          activeTools,
          activeRetry
        }
      )
    ] }), running ?? cueHost)
  ] });
}

// src/client/context.js
var OVERVIEW_KIND = "deepseek-overview";
var OVERVIEW_TAB = "@local/dsh-deepseek-ui/overview";
function openOverview(sidebarRight, sessionId, options) {
  const kind = sidebarRight.tabsIn(sessionId).some((tab) => tab.kind === "guide") ? "guide" : OVERVIEW_KIND;
  sidebarRight.openTabIn(sessionId, kind, options);
}
function contextUsage(pressure) {
  const used = pressure?.projectedTokens ?? pressure?.pressureTokens;
  const limit = pressure?.contextWindow;
  if (!Number.isFinite(used) || used < 0 || !Number.isFinite(limit) || limit <= 0) return null;
  const ratio = Math.min(1, used / limit);
  return { used, limit, ratio, percent: Math.round(100 * ratio) };
}
var fields = [
  ["system", "systemTokens"],
  ["tools", "toolsTokens"],
  ["messages", "messageTokens"]
];
function contextComposition(breakdown) {
  const parts = fields.map(([kind, field]) => ({ kind, tokens: breakdown?.[field] }));
  if (parts.some(({ tokens }) => !Number.isFinite(tokens) || tokens < 0)) return [];
  const total = parts.reduce((sum, { tokens }) => sum + tokens, 0);
  if (total === 0) return [];
  return parts.map((part) => ({ ...part, share: part.tokens / total }));
}

// src/client/context-ring.jsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function ContextRing({ binding, locale, sidebarRight }) {
  const english = useLanguage(locale) === "en";
  const mounted = useStore(sidebarRight.mounted);
  const usage = contextUsage(useStore(binding?.session.projections.faceOf("contextPressure")));
  if (!binding) return null;
  const title = english ? "Context window" : "\u4E0A\u4E0B\u6587\u7A97\u53E3";
  const label = usage ? `${title} \xB7 ${usage.percent}%` : title;
  const ring = /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "dsh-ui-context-ring", "aria-hidden": "true", style: { "--dsh-ui-ring-progress": `${usage?.percent ?? 0}%` } });
  if (mounted !== binding.sessionId) {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "dsh-ui-context-status", role: "img", title: label, "aria-label": label, children: ring });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "button",
    {
      type: "button",
      className: "dsh-ui-control dsh-ui-context-trigger",
      title: label,
      "aria-label": label,
      onClick: () => openOverview(sidebarRight, binding.sessionId),
      children: ring
    }
  );
}

// src/client/overview.jsx
var import_react10 = require("react");
var import_dsh_client_ui_primitives2 = require("@deepseek-ai/dsh-client-ui-primitives");

// src/client/overview-data.js
async function readInspector(route, query, signal) {
  const response = await fetch(`/api/deepseek-ui/${route}?${new URLSearchParams(query)}`, { signal });
  const body = await response.json().catch((error) => {
    signal?.throwIfAborted();
    if (response.ok) throw error;
    return null;
  });
  if (!response.ok) {
    const code = body?.status ?? body?.error ?? (response.status === 404 ? "inspector-route-unavailable" : void 0);
    throw Object.assign(new Error(`Inspector request failed (${response.status})`), { code, status: response.status });
  }
  return body;
}
async function readWorkspaceGit(forge, query, signal) {
  try {
    return await readInspector("git", query, signal);
  } catch (error) {
    const withDiff = query.diff === 1;
    const read = withDiff ? forge?.localDiff : forge?.worktreeBases;
    if (error.status === 401 || error.status === 403 || !["git-unavailable", "forge-unavailable", "inspector-route-unavailable"].includes(error.code) || typeof read !== "function") throw error;
    signal.throwIfAborted();
    const result = await read.call(forge, query.sessionId, withDiff ? { kind: "uncommitted" } : "", signal);
    signal.throwIfAborted();
    if (result.ok) return withDiff ? { status: "ready", diff: result.value } : { status: "ready", current: result.value.current?.name };
    if (result.error.code === "forgePanel/not-a-checkout") return { status: "no-checkout" };
    const code = result.error.code === "forgePanel/diff-too-large" ? "diff-too-large" : result.error.code;
    throw Object.assign(new Error(result.error.message), { code });
  }
}
function mergeContextPages(previous, items) {
  return [...new Map([...previous, ...items].map((item) => [item.sessionId, item])).values()];
}
function subagentProject(workspaces, summaries, sessionId, parentId) {
  const visited = /* @__PURE__ */ new Set([sessionId]);
  while (parentId && !visited.has(parentId)) {
    visited.add(parentId);
    const workspace = workspaces?.find((item) => item.sessionIds.includes(parentId));
    if (workspace) return workspace;
    const parent = summaries?.[parentId];
    parentId = parent?.origin === "subagent" ? parent.parentId : void 0;
  }
}
function relativeFileAddress(sessionId, path) {
  const parts = path.replaceAll("\\", "/").replace(/^(?:\.\/)+/, "").split("/");
  const encoded = parts.map((part) => encodeURIComponent(part).replace(/%3A/giu, ":")).join("/");
  return `dsh-resource://file/session/${encodeURIComponent(sessionId)}/${encoded}`;
}
function localChangesAddress(sessionId) {
  return `dsh-resource://forge-changes/${encodeURIComponent(sessionId)}/local`;
}
function diffPreview(hunks, limit = 240) {
  const rows = [];
  let total = 0;
  for (const hunk of hunks) {
    total += hunk.lines.length + 1;
    if (rows.length >= limit) continue;
    rows.push({ kind: "header", text: `@@ -${hunk.oldStart},${hunk.oldLines} +${hunk.newStart},${hunk.newLines} @@` });
    for (const line of hunk.lines.slice(0, limit - rows.length)) {
      const kind = line.startsWith("+") ? "add" : line.startsWith("-") ? "remove" : "context";
      rows.push({ kind, text: line });
    }
  }
  return { rows, omitted: Math.max(0, total - rows.length) };
}

// src/client/slot-compat.js
var MODEL_EXTENSIONS = [
  "conversation.input.model.label",
  "conversation.input.model.options",
  "conversation.input.model.pane"
];
var PANEL_SECTION = "conversation.session.panel.section";
var PANEL_ACTIONS = "conversation.session.panel.section.actions";
var PANEL_EXTENSIONS = [
  PANEL_SECTION,
  PANEL_ACTIONS,
  "conversation.session.panel.environment.row",
  "conversation.session.panel.indicator"
];
var VIEW_EXTENSIONS = ["conversation.view", "conversation.session.header.views.actions"];
var RELOCATED_SECTIONS = ["subagents", "shared-tasks", "background-jobs"];
function hasModelExtensions(slots) {
  return MODEL_EXTENSIONS.some((key) => slots.entriesOfSlot(key).some((entry) => (
    // The stock Team toggle is intentionally replaced by Ultra in this UI.
    entry.locale !== "agent-team" || (entry.options.id ?? entry.options.key) !== "agent-team"
  )));
}
function needsNativeSessionPanel(slots) {
  const sections = slots.entriesOfSlot(PANEL_SECTION);
  const actions = slots.entriesOfSlot(PANEL_ACTIONS);
  if (sections.some(({ options, children, locale }) => {
    if (options.id === "environment") return !children?.[PANEL_EXTENSIONS[2]] || Object.keys(children).length !== 1;
    if (options.id === "change-requests" && locale === "forgePanel") {
      return !children?.["forge.change-request.card.actions"] || Object.keys(children).length !== 1;
    }
    return !RELOCATED_SECTIONS.includes(options.id) || Boolean(children);
  })) return true;
  if (actions.some(({ options, children, locale }) => (options.key !== "change-requests" || locale !== "forgePanel") && (!RELOCATED_SECTIONS.includes(options.key) || children))) return true;
  return slots.entriesOfSlot(PANEL_EXTENSIONS[2]).some(({ options }) => !["project", "forge.checkout", "forge.local", "forge.connection"].includes(options.id)) || slots.entriesOfSlot(PANEL_EXTENSIONS[3]).some(({ options }) => !["subagents.running", "background-jobs.running", "forge.attention"].includes(options.id));
}
function registerWhen(slots, name2, dependencies, enabled, register) {
  return slots.inject(name2, () => {
    let dispose;
    function sync() {
      if (enabled()) dispose ??= register();
      else if (dispose) {
        const remove = dispose;
        dispose = void 0;
        remove();
      }
    }
    const stop = dependencies.map((key) => slots.subscribe(key, sync));
    try {
      sync();
    } catch (error) {
      for (const unsubscribe of stop) unsubscribe();
      throw error;
    }
    return () => {
      for (const unsubscribe of stop) unsubscribe();
      dispose?.();
    };
  });
}

// src/client/overview.jsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var FILES_KIND = "files";
var CHANGES_KIND = "forge-changes";
var GUIDE_TAB = "@deepseek-ai/dsh-client-ui-sidebar-right/guide";
var ROOT_PAGE = { offset: 0, items: [], next: 0, loading: false, error: null };
var PREVIEW_ITEMS = 12;
var DOCKED_PANEL = { presentation: "docked", dismissOverlay() {
} };
var panelFactory = (id, part) => `deepseek-ui.overview.${id}.${part}`;
function registerSessionPanelSections(ctx, slot, key, part) {
  const { slots, sidebarRight } = ctx;
  ctx.effect(() => {
    const factories = /* @__PURE__ */ new Map();
    function sync() {
      const entries = slots.entriesOfSlot(slot);
      for (const id of RELOCATED_SECTIONS) {
        const entry = entries.find((candidate) => candidate.options[key] === id);
        const previous = factories.get(id);
        if (entry === previous?.entry) continue;
        previous?.dispose();
        factories.delete(id);
        if (!entry || entry.children) continue;
        const inject2 = id === "subagents" && part === "body" ? (sessionId, actions) => ({
          ...entry.inject?.(sessionId, actions),
          openChildAside({ parentSessionId, childSessionId, mode }) {
            const query = new URLSearchParams({ parent: parentSessionId, mode });
            const address = `dsh-resource://subagentchat/session/${encodeURIComponent(childSessionId)}?${query}`;
            sidebarRight.openResourceIn(sessionId, address, { kind: "subagentchat", destination: "sidebar" });
          }
        }) : entry.inject;
        const dispose = slots.registerFactory({
          name: panelFactory(id, part),
          scope: "session",
          store: entry.store,
          locale: entry.locale,
          inject: inject2
        }, entry.component);
        factories.set(id, { entry, dispose });
      }
    }
    sync();
    const unsubscribe = slots.subscribe(slot, sync);
    return () => {
      unsubscribe();
      for (const { dispose } of factories.values()) dispose();
    };
  }, `deepseek-ui: sidebar session panel ${part}`);
}
function useRead(load, enabled) {
  const [state, setState] = (0, import_react10.useState)({ loading: false });
  const [revision, refresh] = (0, import_react10.useState)(0);
  (0, import_react10.useEffect)(() => {
    if (!enabled) return;
    const controller = new AbortController();
    const { signal } = controller;
    setState((old) => ({ value: old.value, loading: true }));
    void load(signal).then((value) => {
      if (!signal.aborted) setState({ value, loading: false });
    }).catch((error) => {
      if (!signal.aborted) setState({ error, loading: false });
    });
    return () => controller.abort();
  }, [load, enabled, revision]);
  return { ...state, retry: () => refresh((count) => count + 1) };
}
function createSectionState() {
  let snapshot = {};
  const listeners = /* @__PURE__ */ new Set();
  return {
    getSnapshot: () => snapshot,
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    set(section, value) {
      if (snapshot[section] === value) return;
      snapshot = { ...snapshot, [section]: value };
      for (const listener of listeners) listener();
    }
  };
}
function message(english, zh, en) {
  return english ? en : zh;
}
function Row({ icon, label, tail, code, onClick }) {
  const content = /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icon, { name: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "dsh-ui-overview-label", "data-code": code ? "" : void 0, children: label }),
    tail && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("small", { children: tail })
  ] });
  return onClick ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "button", className: "dsh-ui-overview-row", title: label, onClick, children: content }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "dsh-ui-overview-row", title: label, children: content });
}
function WorkingDirectory({ sessionId, path, english, openFiles, useContextMenu, renderFactorySlot }) {
  const { getTriggerProps } = useContextMenu();
  const target = { kind: "directory", value: { sessionId, path } };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "dsh-ui-overview-directory", ...getTriggerProps(target), children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Row, { icon: "folder", label: path, code: true, onClick: openFiles }),
    renderFactorySlot("contextMenu.button", {
      target,
      label: message(english, "\u5DE5\u4F5C\u76EE\u5F55\u64CD\u4F5C", "Working folder actions"),
      className: "dsh-ui-control dsh-ui-overview-directory-actions"
    })
  ] });
}
function Collaboration({ binding, list, english, renderFactorySlot, sections }) {
  const team = useStore(binding.session.projections.faceOf("agentTeam"));
  const catalog = list?.projectionsBySession?.[binding.sessionId];
  const hasSubagents = catalog?.state === "error" || Boolean(catalog?.values?.subagentCatalog?.length);
  const hasTasks = team?.enabled === true && (team.failure !== void 0 || team.tasks?.some((task) => task.status !== "deleted"));
  const { collaboration: expanded = false, collaborationView: selected = "subagents" } = useStore(sections);
  const multiple = hasSubagents && hasTasks;
  const current = hasTasks && (!hasSubagents || selected === "shared-tasks") ? "shared-tasks" : "subagents";
  const agentsLabel = message(english, "\u5B50\u667A\u80FD\u4F53", "Subagents");
  const tasksLabel = message(english, "\u534F\u4F5C\u4EFB\u52A1", "Shared tasks");
  const title = multiple ? message(english, "\u534F\u4F5C", "Collaboration") : hasSubagents ? agentsLabel : tasksLabel;
  if (!hasSubagents && !hasTasks) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("section", { className: "dsh-ui-overview-section dsh-ui-overview-native dsh-ui-overview-foldable", "data-overview-section": "collaboration", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    OverviewDisclosure,
    {
      title,
      summary: renderFactorySlot(panelFactory(current, "actions"), {}),
      expanded,
      onToggle: () => {
        if (!expanded) sections.set("collaborationView", current);
        sections.set("collaboration", !expanded);
      },
      children: [
        multiple && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
          "div",
          {
            className: "dsh-ui-collaboration-views",
            role: "group",
            "aria-label": message(english, "\u534F\u4F5C\u89C6\u56FE", "Collaboration views"),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                "button",
                {
                  type: "button",
                  className: "dsh-ui-control",
                  "aria-pressed": current === "subagents",
                  onClick: () => sections.set("collaborationView", "subagents"),
                  children: agentsLabel
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                "button",
                {
                  type: "button",
                  className: "dsh-ui-control",
                  "aria-pressed": current === "shared-tasks",
                  onClick: () => sections.set("collaborationView", "shared-tasks"),
                  children: tasksLabel
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "dsh-ui-overview-native-body", children: renderFactorySlot(panelFactory(current, "body"), DOCKED_PANEL) })
      ]
    }
  ) });
}
function BackgroundJobs({ english, renderFactorySlot, reduced }) {
  const frameRef = (0, import_react10.useRef)(null);
  const sectionRef = (0, import_react10.useRef)(null);
  (0, import_react10.useLayoutEffect)(() => {
    if (reduced) return;
    const frame = frameRef.current;
    const section = sectionRef.current;
    let height = section.getBoundingClientRect().height;
    let motion;
    const observer = new ResizeObserver(() => {
      const nextHeight = section.getBoundingClientRect().height;
      if (Math.abs(height - nextHeight) < 0.5) return;
      const from = motion ? frame.getBoundingClientRect().height : height;
      height = nextHeight;
      motion?.cancel();
      frame.dataset.resizing = "";
      const animation = frame.animate([
        { height: `${from}px` },
        { height: `${height}px` }
      ], LIST_MOTION);
      motion = animation;
      animation.id = "dsh-ui-background-jobs-resize";
      animation.onfinish = () => {
        if (motion !== animation) return;
        motion = void 0;
        delete frame.dataset.resizing;
      };
    });
    observer.observe(section, { box: "border-box" });
    return () => {
      observer.disconnect();
      motion?.cancel();
      delete frame.dataset.resizing;
    };
  }, [reduced]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { ref: frameRef, className: "dsh-ui-background-jobs", "data-overview-section": "background-jobs", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { ref: sectionRef, className: "dsh-ui-overview-section dsh-ui-overview-native", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "dsh-ui-overview-heading", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { children: message(english, "\u540E\u53F0\u4EFB\u52A1", "Background jobs") }),
      renderFactorySlot(panelFactory("background-jobs", "actions"), {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "dsh-ui-overview-native-body", children: renderFactorySlot(panelFactory("background-jobs", "body"), DOCKED_PANEL) })
  ] }) });
}
function Notice({ children, retry, english }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "dsh-ui-overview-note", role: "status", children: [
    children,
    retry && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
      " \xB7 ",
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "button", onClick: retry, children: message(english, "\u91CD\u8BD5", "Retry") })
    ] })
  ] });
}
function More({ action, english }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "button", className: "dsh-ui-overview-more", onClick: action, children: message(english, "\u663E\u793A\u66F4\u591A", "Show more") });
}
function OverviewReveal({ id, expanded, children }) {
  const setInert = (0, import_react10.useCallback)((element) => {
    if (element) element.inert = !expanded;
  }, [expanded]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "div",
    {
      ref: setInert,
      id,
      className: "dsh-ui-overview-reveal",
      "data-expanded": expanded ? "" : void 0,
      "aria-hidden": !expanded,
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "dsh-ui-overview-reveal-content", children })
    }
  );
}
function OverviewDisclosure({ title, summary, preview, expanded, onToggle, children }) {
  const id = (0, import_react10.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "dsh-ui-overview-disclosure-heading", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "button",
      {
        type: "button",
        className: "dsh-ui-control dsh-ui-overview-toggle",
        "aria-controls": id,
        "aria-expanded": expanded,
        onClick: onToggle,
        children: [
          title,
          summary && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "dsh-ui-overview-toggle-summary", children: summary }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icon, { name: "next" })
        ]
      }
    ) }),
    preview,
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(OverviewReveal, { id, expanded, children })
  ] });
}
var taskStatusKeys = { completed: "completed", in_progress: "inProgress", pending: "pending" };
var handledTaskRequests = /* @__PURE__ */ new WeakSet();
function TaskCard({ tasks, running, activeSession, t, taskRequest, sections }) {
  const id = (0, import_react10.useId)();
  const done = tasks.filter((item) => item.status === "completed").length;
  const active = tasks.filter((item) => item.status === "in_progress").length;
  const pending = tasks.length - done - active;
  const complete = done === tasks.length;
  const [defaultExpanded, setDefaultExpanded] = (0, import_react10.useState)(!complete);
  const { tasks: expanded = defaultExpanded } = useStore(sections);
  const counts = { done, active, pending };
  const summary = Object.entries(counts).filter(([, count]) => count > 0).map(([status, count]) => t(`todo.progress.${status}`, { [status]: count })).join(" \xB7 ");
  const title = t("todo.title");
  (0, import_react10.useLayoutEffect)(() => {
    if (!activeSession) setDefaultExpanded(!complete);
    else if (taskRequest && !handledTaskRequests.has(taskRequest)) {
      handledTaskRequests.add(taskRequest);
      sections.set("tasks", true);
    }
  }, [activeSession, complete, taskRequest, sections]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "section",
    {
      className: "dsh-ui-session-tasks",
      "aria-label": title,
      "data-overview-section": "tasks",
      "data-running": running ? "" : void 0,
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "dsh-ui-task-card", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
          "button",
          {
            type: "button",
            className: "dsh-ui-control dsh-ui-task-toggle",
            "aria-controls": id,
            "aria-expanded": expanded,
            onClick: () => sections.set("tasks", !expanded),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_dsh_client_ui_primitives2.IconChecklistOutlineRegular, { size: 16, "aria-hidden": "true" }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: title }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("small", { children: summary }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icon, { name: "next" })
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "div",
          {
            className: "dsh-ui-task-progress",
            role: "progressbar",
            "aria-label": title,
            "aria-valuemin": 0,
            "aria-valuemax": tasks.length,
            "aria-valuenow": done,
            "aria-valuetext": summary,
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "dsh-ui-task-progress-fill", style: { "--dsh-ui-task-completion": `${done / tasks.length * 100}%` } })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(OverviewReveal, { id, expanded, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("ul", { className: "dsh-ui-task-list", role: "list", children: tasks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("li", { className: "dsh-ui-task-row", "data-task-status": item.status, children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: "dsh-ui-task-state", role: "img", "aria-label": t(`todo.status.${taskStatusKeys[item.status]}`), children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: "dsh-ui-task-dots", "aria-hidden": "true", children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {}),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {}),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {})
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icon, { name: "check" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: item.content })
        ] }, item.content)) }) })
      ] })
    }
  );
}
function SessionTasks({ binding, sessionStatus, sidebarRight, t, taskRequest, sections }) {
  const tasks = useStore(binding.session.projections.faceOf("todos"));
  const running = useStore(sessionStatus)?.get(binding.sessionId)?.running;
  const activeSession = useStore(sidebarRight.mounted) === binding.sessionId;
  return tasks?.length ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    TaskCard,
    {
      tasks,
      running,
      activeSession,
      t,
      taskRequest,
      sections
    }
  ) : null;
}
function TaskShortcut({ useProjection, sessionId, locale, sidebarRight }) {
  const tasks = useProjection("todos");
  const mounted = useStore(sidebarRight.mounted);
  const english = useLanguage(locale) === "en";
  if (!tasks?.length || mounted !== sessionId) return null;
  const label = message(english, "\u67E5\u770B\u4EFB\u52A1", "Show to-dos");
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "button",
    {
      type: "button",
      className: "dsh-ui-control dsh-ui-task-shortcut",
      "aria-label": label,
      title: label,
      onClick: () => openOverview(sidebarRight, sessionId, { params: { section: "tasks" } }),
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_dsh_client_ui_primitives2.IconChecklistOutlineRegular, { size: 16, "aria-hidden": "true" })
    }
  );
}
var contextLabels = {
  system: ["\u7CFB\u7EDF", "System"],
  tools: ["\u5DE5\u5177", "Tools"],
  messages: ["\u6D88\u606F", "Messages"]
};
function ContextEntry({ title, usage, composition, english, current, compact, cached, onClick }) {
  const language = english ? "en" : "zh-CN";
  const tokens = usage && `${usage.used.toLocaleString(language)} / ${usage.limit.toLocaleString(language)} tokens`;
  const percent = usage && `${usage.percent}%`;
  const shares = composition.map(({ kind, share }) => `${message(english, ...contextLabels[kind])} ${share.toLocaleString(
    language,
    { style: "percent", maximumFractionDigits: 1 }
  )}`);
  const estimate = shares.length ? [message(english, "\u5360\u7528\u7EC4\u6210\uFF08\u4F30\u7B97\uFF09", "Estimated composition"), ...shares].join(" \xB7 ") : null;
  const reading = tokens ? `${tokens} \xB7 ${percent}` : message(english, "\u6682\u65E0\u7528\u91CF", "Usage unavailable");
  const label = [title, reading, estimate].filter(Boolean).join(" \xB7 ");
  const Tag = onClick ? "button" : "div";
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    Tag,
    {
      type: onClick ? "button" : void 0,
      className: "dsh-ui-context-entry",
      "aria-label": label,
      "aria-current": current ? "true" : void 0,
      "data-compact": compact ? "" : void 0,
      "data-empty": usage ? void 0 : "",
      onClick,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: "dsh-ui-context-label", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "dsh-ui-context-name", title, children: title }),
          cached && !compact && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("small", { title: message(english, "\u8FC1\u79FB\u524D\u7F13\u5B58", "Cached before migration"), children: message(english, "\u7F13\u5B58", "Cached") }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("small", { children: percent ?? message(english, "\u6682\u65E0\u7528\u91CF", "Usage unavailable") })
        ] }),
        usage && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "span",
            {
              "data-dsh-ui-reading": "meter",
              role: "meter",
              "aria-label": title,
              title: estimate ?? reading,
              "aria-valuemin": 0,
              "aria-valuemax": usage.limit,
              "aria-valuenow": Math.min(usage.used, usage.limit),
              "aria-valuetext": [reading, estimate].filter(Boolean).join(" \xB7 "),
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "dsh-ui-context-used", style: { width: `${usage.ratio * 100}%` }, "aria-hidden": "true", children: composition.filter(({ tokens: tokens2 }) => tokens2 > 0).map(({ kind, share }) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { "data-context-part": kind, style: { width: `${share * 100}%` } }, kind)) })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { "data-dsh-ui-reading": "tokens", title: tokens, children: tokens })
        ] })
      ]
    }
  );
}
function ContextBreakdown({ composition, english }) {
  if (composition.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("dl", { className: "dsh-ui-context-breakdown", title: message(english, "\u6309\u4E0A\u4E0B\u6587\u5206\u7C7B\u4F30\u7B97", "Estimated by context category"), children: composition.map(({ kind, tokens }) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { "data-context-part": kind, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("dt", { children: message(english, ...contextLabels[kind]) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("dd", { children: tokens.toLocaleString(english ? "en" : "zh-CN") })
  ] }, kind)) });
}
function ProjectContext({ binding, currentTitle, currentStarted, workspaceId, memberIds, list, uiWorkspace, english, sections }) {
  const pressure = useStore(binding?.session.projections.faceOf("contextPressure"));
  const breakdown = useStore(binding?.session.projections.faceOf("contextBreakdown"));
  const reduced = useReducedMotion();
  const current = (0, import_react10.useRef)(null);
  const readingBefore = (0, import_react10.useRef)(null);
  const motions = (0, import_react10.useRef)([]);
  const { context: expanded = !workspaceId } = useStore(sections);
  const [shown, setShown] = (0, import_react10.useState)(3);
  const [requested, setRequested] = (0, import_react10.useState)(0);
  const [retry, setRetry] = (0, import_react10.useState)(0);
  const [page, setPage] = (0, import_react10.useState)(ROOT_PAGE);
  const completed = (0, import_react10.useRef)(/* @__PURE__ */ new Set());
  const sessionId = binding?.sessionId;
  const currentProjection = list?.projectionsBySession?.[sessionId]?.values;
  const usage = contextUsage(pressure ?? currentProjection?.contextPressure);
  const composition = usage ? contextComposition(breakdown ?? currentProjection?.contextBreakdown) : [];
  (0, import_react10.useEffect)(() => {
    if (!expanded || !workspaceId || completed.current.has(requested)) return;
    const controller = new AbortController();
    const { signal } = controller;
    setPage((old) => ({ ...old, loading: true, error: null }));
    const query = { workspaceId, ...typeof requested === "string" ? { cursor: requested } : { offset: requested } };
    void readInspector("context", query, signal).then((result) => {
      if (signal.aborted) return;
      completed.current.add(requested);
      setPage((old) => ({
        offset: requested,
        next: result.nextCursor ?? result.nextOffset,
        items: requested === 0 ? result.items : mergeContextPages(old.items, result.items),
        loading: false,
        error: null
      }));
    }).catch((error) => {
      if (signal.aborted) return;
      if (error.code === "workspace-cursor-changed") {
        completed.current.clear();
        setRequested(0);
      } else setPage((old) => ({ ...old, loading: false, error }));
    });
    return () => controller.abort();
  }, [expanded, workspaceId, requested, retry]);
  function toggle() {
    readingBefore.current = reduced ? null : new Map([...current.current.querySelectorAll("[data-dsh-ui-reading]")].map((element) => [element, element.getBoundingClientRect()]));
    sections.set("context", !expanded);
  }
  (0, import_react10.useLayoutEffect)(() => {
    const measured = readingBefore.current;
    readingBefore.current = null;
    for (const motion of motions.current) motion.cancel();
    motions.current = [];
    if (!measured || reduced) return;
    for (const [element, old] of measured) {
      if (!element.isConnected) continue;
      const next = element.getBoundingClientRect();
      const scaleX = next.width ? old.width / next.width : 1;
      const transform = `translate(${old.left - next.left}px, ${old.top - next.top}px) scaleX(${scaleX})`;
      const motion = element.animate([{ transform }, { transform: "none" }], LIST_MOTION);
      motion.id = "context-reading-shift";
      motions.current.push(motion);
    }
    return () => {
      for (const motion of motions.current) motion.cancel();
    };
  }, [expanded, reduced]);
  const members = new Set(memberIds);
  members.delete(sessionId);
  const others = page.items.filter((item) => members.has(item.sessionId));
  const morePages = page.next !== null && page.next !== page.offset && others.length < members.size;
  function showMore() {
    setShown((count) => count + PREVIEW_ITEMS);
    if (morePages && shown + PREVIEW_ITEMS > others.length) setRequested(page.next);
  }
  const showProject = Boolean(workspaceId && expanded);
  const title = message(english, "\u4E0A\u4E0B\u6587\u7A97\u53E3", "Context window");
  const preview = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { ref: current, children: currentStarted && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    ContextEntry,
    {
      title: currentTitle,
      usage,
      composition,
      english,
      current: true,
      compact: !showProject
    }
  ) });
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "section",
    {
      className: "dsh-ui-overview-section dsh-ui-overview-foldable dsh-ui-project-context",
      "aria-label": title,
      "data-overview-section": "context",
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(OverviewDisclosure, { title, preview, expanded, onToggle: toggle, children: [
        currentStarted && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ContextBreakdown, { composition, english }),
        workspaceId ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
          others.slice(0, shown).map((item) => {
            const id = item.sessionId;
            const name2 = list?.byId[id]?.title?.trim() || message(english, "\u672A\u547D\u540D\u4F1A\u8BDD", "Untitled session");
            const live = list?.projectionsBySession?.[id]?.values;
            const usage2 = contextUsage(live?.contextPressure ?? item.contextPressure);
            return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              ContextEntry,
              {
                title: name2,
                usage: usage2,
                english,
                composition: usage2 ? contextComposition(live?.contextBreakdown ?? item.contextBreakdown) : [],
                cached: !live?.contextPressure && item.status === "migration-required",
                onClick: () => uiWorkspace.openSession(id)
              },
              id
            );
          }),
          page.loading && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Notice, { children: message(english, "\u6B63\u5728\u8BFB\u53D6\u9879\u76EE\u4F1A\u8BDD\u2026", "Reading project sessions\u2026") }),
          page.error && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Notice, { english, retry: () => setRetry((value) => value + 1), children: message(english, "\u9879\u76EE\u4F1A\u8BDD\u7528\u91CF\u8BFB\u53D6\u5931\u8D25", "Could not read project usage") }),
          !page.loading && !page.error && others.length === 0 && (page.next === null || members.size === 0) && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Notice, { children: message(english, "\u6B64\u9879\u76EE\u6682\u65E0\u5176\u4ED6\u4F1A\u8BDD\u3002", "No other sessions in this project.") }),
          !page.loading && !page.error && (others.length > shown || morePages) && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(More, { english, action: showMore })
        ] }) : composition.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Notice, { children: message(english, "\u6682\u65E0\u4E0A\u4E0B\u6587\u7528\u91CF\u660E\u7EC6\u3002", "No context usage breakdown yet.") })
      ] })
    }
  );
}
function FileFolder({ label, path, ...props }) {
  const [expanded, setExpanded] = (0, import_react10.useState)(false);
  const [visited, setVisited] = (0, import_react10.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("details", { className: "dsh-ui-overview-disclosure", onToggle: (event) => {
    const open = event.currentTarget.open;
    setExpanded(open);
    if (open) setVisited(true);
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("summary", { className: "dsh-ui-overview-row", title: path, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icon, { name: "folder" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "dsh-ui-overview-label", "data-code": "", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icon, { name: "next" })
    ] }),
    visited && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(DirectoryEntries, { path, ...props, visible: expanded && props.visible })
  ] });
}
function DirectoryEntries({ sessionId, path, remote, english, visible, openFile }) {
  const load = (0, import_react10.useCallback)(async (signal) => {
    const result = await remote.workspaceFiles.list(sessionId, path, signal);
    if (!result.ok) throw new Error(result.error.message);
    return result.value;
  }, [remote, sessionId, path]);
  const state = useRead(load, visible);
  const [shown, setShown] = (0, import_react10.useState)(PREVIEW_ITEMS);
  if (state.error) return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Notice, { english, retry: state.retry, children: message(english, "\u6587\u4EF6\u5217\u8868\u8BFB\u53D6\u5931\u8D25", "Could not list files") });
  if (!state.value) return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Notice, { children: message(english, "\u6B63\u5728\u8BFB\u53D6\u6587\u4EF6\u2026", "Reading files\u2026") });
  const { path: directory, truncated } = state.value;
  const entries = directory ? state.value.entries : state.value.entries.filter((entry) => entry.name !== ".git");
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: directory ? "dsh-ui-overview-nested" : void 0, children: [
    entries.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Notice, { children: message(english, "\u6B64\u76EE\u5F55\u6CA1\u6709\u6587\u4EF6\u3002", "This directory is empty.") }),
    entries.slice(0, shown).map((entry) => {
      const relative = directory ? `${directory}/${entry.name}` : entry.name;
      return entry.type === "directory" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        FileFolder,
        {
          label: entry.name,
          path: relative,
          sessionId,
          remote,
          english,
          visible,
          openFile
        },
        entry.name
      ) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Row, { icon: "file", label: entry.name, code: true, onClick: () => openFile(relative, entry.type) }, entry.name);
    }),
    entries.length > shown && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(More, { english, action: () => setShown((count) => count + PREVIEW_ITEMS) }),
    truncated && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Notice, { children: message(english, "\u5DF2\u8FBE\u5230 Host \u7684\u76EE\u5F55\u8BFB\u53D6\u4E0A\u9650\u3002", "The Host directory limit was reached.") })
  ] });
}
function DiffFile({ file, english, openChanges }) {
  const [visited, setVisited] = (0, import_react10.useState)(false);
  const preview = visited ? diffPreview(file.hunks) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("details", { className: "dsh-ui-overview-disclosure", onToggle: (event) => {
    if (event.currentTarget.open) setVisited(true);
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("summary", { className: "dsh-ui-overview-row", title: file.previousPath ? `${file.previousPath} \u2192 ${file.path}` : file.path, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icon, { name: "file" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "dsh-ui-overview-label", "data-code": "", children: file.path }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("small", { className: "dsh-ui-diff-tally", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { "data-kind": "add", children: [
          "+",
          file.additions
        ] }),
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { "data-kind": "remove", children: [
          "\u2212",
          file.deletions
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icon, { name: "next" })
    ] }),
    preview && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "dsh-ui-overview-nested", children: [
      file.previousPath && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Notice, { children: [
        file.previousPath,
        " \u2192 ",
        file.path
      ] }),
      preview.rows.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("pre", { className: "dsh-ui-overview-patch", children: preview.rows.map(({ text, kind }, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { "data-kind": kind, children: [
        text,
        "\n"
      ] }, index)) }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Notice, { children: file.binary ? message(english, "\u4E8C\u8FDB\u5236\u6587\u4EF6", "Binary file") : file.oversized ? message(english, "\u6587\u4EF6\u8D85\u8FC7 Diff \u8BFB\u53D6\u4E0A\u9650", "File diff exceeds the size limit") : message(english, "\u6B64\u6539\u52A8\u6CA1\u6709\u6587\u672C\u5DEE\u5F02\u3002", "This change has no text diff.") }),
      preview.omitted > 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Notice, { children: [
        message(english, `\u8FD8\u6709 ${preview.omitted} \u884C`, `${preview.omitted} more rows`),
        openChanges && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
          " \xB7 ",
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "button", onClick: openChanges, children: message(english, "\u5728\u6539\u52A8\u4E2D\u67E5\u770B", "Open Changes") })
        ] })
      ] })
    ] })
  ] });
}
function Changes({ state, english, openChanges }) {
  const [shown, setShown] = (0, import_react10.useState)(PREVIEW_ITEMS);
  if (state.error?.code === "diff-too-large") return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Notice, { children: message(english, "\u672A\u63D0\u4EA4\u6539\u52A8\u8D85\u8FC7 Forge \u7684\u8BFB\u53D6\u4E0A\u9650\u3002", "Uncommitted changes exceed the Forge limit.") });
  if (state.error) return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Notice, { english, retry: state.retry, children: message(english, "\u672A\u63D0\u4EA4\u6539\u52A8\u8BFB\u53D6\u5931\u8D25", "Could not read uncommitted changes") });
  if (!state.value?.diff) return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Notice, { children: message(english, "\u6B63\u5728\u8BFB\u53D6\u672A\u63D0\u4EA4\u6539\u52A8\u2026", "Reading uncommitted changes\u2026") });
  const { files, omitted } = state.value.diff;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    files.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Notice, { children: message(english, "\u5DE5\u4F5C\u6811\u5E72\u51C0\u3002", "Working tree is clean.") }),
    files.slice(0, shown).map((file) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(DiffFile, { file, english, openChanges }, file.path)),
    files.length > shown && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(More, { english, action: () => setShown((count) => count + PREVIEW_ITEMS) }),
    omitted > 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Notice, { children: message(english, `\u53E6\u6709 ${omitted} \u4E2A\u672A\u8DDF\u8E2A\u6587\u4EF6\u8D85\u51FA Forge \u663E\u793A\u4E0A\u9650\u3002`, `${omitted} untracked files exceed the Forge limit.`) })
  ] });
}
function OverviewBody({
  binding,
  workspace,
  cwd,
  list,
  workspaceState,
  uiWorkspace,
  sidebarRight,
  sidebarRightTabs,
  remote,
  english,
  visible,
  sessionStatus,
  t,
  taskRequest,
  useContextMenu,
  renderFactorySlot,
  getForge,
  sections
}) {
  const sessionId = binding.sessionId;
  const workspaceId = workspace?.workspaceId;
  const archived = new Set(workspaceState?.archivedSessionIds);
  const memberIds = workspace?.sessionIds.filter((id) => !archived.has(id)) ?? [];
  const chatIds = memberIds.filter((id) => isListedChat(list?.byId[id]));
  const session = useStore(binding.session);
  const summary = list?.byId[sessionId];
  const child = session?.subagent != null || summary?.origin === "subagent";
  const parentId = session?.subagent?.address?.parentSessionId ?? summary?.parentId;
  const parentProject = child && !workspace ? subagentProject(workspaceState?.items, list?.byId, sessionId, parentId) : void 0;
  const workingDirectory = useStore(binding.session.projections.faceOf("workingDirectory")) ?? cwd;
  const currentStarted = session?.blank === false || isListedChat(summary);
  const scroll = (0, import_react10.useRef)(null);
  const changes = (0, import_react10.useRef)(null);
  const { environment: environmentOpen = true, files: filesOpen = false, changes: diffOpen = false } = useStore(sections);
  const reduced = useReducedMotion();
  const readBranch = (0, import_react10.useCallback)(
    (signal) => readWorkspaceGit(getForge(), { workspaceId, sessionId }, signal),
    [getForge, workspaceId, sessionId]
  );
  const readDiff = (0, import_react10.useCallback)(
    (signal) => readWorkspaceGit(getForge(), { workspaceId, sessionId, diff: 1 }, signal),
    [getForge, workspaceId, sessionId]
  );
  const branch = useRead(readBranch, visible && Boolean(workspaceId));
  const hasCheckout = branch.value?.status === "ready";
  const diff = useRead(readDiff, visible && diffOpen && hasCheckout);
  const hasChanges = hasCheckout && diff.value?.status !== "no-checkout";
  const currentTitle = summary?.title?.trim() || message(english, "\u5F53\u524D\u4F1A\u8BDD", "Current session");
  const projectTitle = workspace?.title || (parentProject?.title ? message(english, `\u4E3B\u4F1A\u8BDD\u9879\u76EE \xB7 ${parentProject.title}`, `Parent session project \xB7 ${parentProject.title}`) : message(english, "\u672A\u5173\u8054\u9879\u76EE", "No project"));
  const openFiles = () => sidebarRight.openTabIn(sessionId, FILES_KIND);
  const openChanges = sidebarRightTabs.get(CHANGES_KIND) ? () => sidebarRight.openResourceIn(sessionId, localChangesAddress(sessionId)) : void 0;
  (0, import_react10.useLayoutEffect)(() => {
    if (visible && taskRequest !== void 0) scroll.current?.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }, [visible, taskRequest, reduced]);
  function openFile(path, type) {
    const address = relativeFileAddress(sessionId, path);
    if (type === "file" && sidebarRightTabs.candidates(address).length > 0) sidebarRight.openResourceIn(sessionId, address);
    else openFiles();
  }
  function showChanges() {
    if (diffOpen) diff.retry();
    sections.set("changes", true);
    requestAnimationFrame(() => {
      const pane = scroll.current;
      const target = changes.current;
      if (!pane || !target) return;
      const top = pane.scrollTop + target.getBoundingClientRect().top - pane.getBoundingClientRect().top - 5;
      pane.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
      target.querySelector("button")?.focus({ preventScroll: true });
    });
  }
  const desktop = document.documentElement.dataset.platform;
  const platform = { darwin: "macOS", win32: "Windows", linux: "Linux" }[desktop];
  const local = location.protocol === "dsh-app:" || ["localhost", "127.0.0.1", "[::1]"].includes(location.hostname);
  const hostLabel = local ? message(english, "\u672C\u673A", "Local machine") : message(english, "\u8FDC\u7A0B Host", "Remote host");
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { ref: scroll, className: "dsh-ui-overview", "data-dsh-ui-overview": "", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("header", { className: "dsh-ui-inspector-heading", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { children: child ? message(english, "\u5B50\u667A\u80FD\u4F53\u8BE6\u60C5", "Subagent details") : message(english, "\u4F1A\u8BDD\u8BE6\u60C5", "Chat details") }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      SessionTasks,
      {
        binding,
        sessionStatus,
        sidebarRight,
        t,
        taskRequest,
        sections
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("section", { className: "dsh-ui-overview-section dsh-ui-overview-foldable", "data-overview-section": "environment", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      OverviewDisclosure,
      {
        title: message(english, "\u73AF\u5883", "Environment"),
        expanded: environmentOpen,
        onToggle: () => sections.set("environment", !environmentOpen),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Row, { icon: "computer", label: platform && local ? `${hostLabel} \xB7 ${platform}` : hostLabel }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Row, { icon: "layers", label: projectTitle }),
          workingDirectory && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            WorkingDirectory,
            {
              sessionId,
              path: workingDirectory,
              english,
              openFiles,
              useContextMenu,
              renderFactorySlot
            }
          ),
          hasChanges && branch.value.current !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            Row,
            {
              icon: "branch",
              code: true,
              label: branch.value.current ?? message(english, "\u5206\u79BB\u7684 HEAD", "Detached HEAD"),
              tail: message(english, "\u672A\u63D0\u4EA4\u6539\u52A8", "Uncommitted"),
              onClick: showChanges
            }
          )
        ]
      }
    ) }),
    visible && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      Collaboration,
      {
        binding,
        list,
        english,
        renderFactorySlot,
        sections
      }
    ),
    !archived.has(sessionId) && (currentStarted || workspaceId) && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      ProjectContext,
      {
        binding,
        currentTitle,
        currentStarted,
        workspaceId,
        memberIds: chatIds,
        list,
        uiWorkspace,
        english,
        sections
      },
      JSON.stringify([workspaceId, memberIds, chatIds])
    ),
    visible && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(BackgroundJobs, { english, renderFactorySlot, reduced }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("section", { className: "dsh-ui-overview-section dsh-ui-overview-foldable", "data-overview-section": "files", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      OverviewDisclosure,
      {
        title: message(english, "\u5DE5\u4F5C\u533A\u6587\u4EF6", "Workspace files"),
        expanded: filesOpen,
        onToggle: () => sections.set("files", !filesOpen),
        children: workingDirectory ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          DirectoryEntries,
          {
            sessionId,
            path: ".",
            remote,
            english,
            visible: visible && filesOpen,
            openFile
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Notice, { children: message(english, "\u6B64\u4F1A\u8BDD\u6682\u65E0\u53EF\u4EE5\u8BFB\u53D6\u7684\u5DE5\u4F5C\u533A\u3002", "No workspace directory is available.") })
      }
    ) }),
    hasChanges && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "section",
      {
        ref: changes,
        className: "dsh-ui-overview-section dsh-ui-overview-foldable",
        "data-overview-section": "changes",
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          OverviewDisclosure,
          {
            title: message(english, "\u672A\u63D0\u4EA4\u6539\u52A8", "Uncommitted changes"),
            expanded: diffOpen,
            onToggle: () => sections.set("changes", !diffOpen),
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Changes, { state: diff, english, openChanges })
          }
        )
      }
    )
  ] });
}
function OverviewTab({
  sessionId,
  locale,
  workspaces,
  sessions,
  uiWorkspace,
  sidebarRight,
  sidebarRightTabs,
  remote,
  sessionStatus,
  useTabInfo,
  useContextMenu,
  renderFactorySlot,
  getForge,
  sections
}) {
  const english = useLanguage(locale) === "en";
  const workspaceState = useStore(workspaces.list);
  const list = useStore(sessions.list);
  const { tab } = useTabInfo();
  const workspace = workspaceState?.items.find((item) => item.sessionIds.includes(sessionId));
  const binding = sessions.binding(sessionId);
  const cwd = list?.byId[sessionId]?.cwd || workspace?.path;
  const taskRequest = tab.navigation?.params?.section === "tasks" ? tab.navigation : void 0;
  if (!binding) return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Notice, { children: message(english, "\u4F1A\u8BDD\u4FE1\u606F\u6B63\u5728\u52A0\u8F7D\u2026", "Loading the session\u2026") });
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    OverviewBody,
    {
      binding,
      workspace,
      workspaceState,
      list,
      cwd,
      visible: tab.visible,
      uiWorkspace,
      sidebarRight,
      sidebarRightTabs,
      remote,
      english,
      sessionStatus,
      t: locale.bind("conversation"),
      taskRequest,
      useContextMenu,
      renderFactorySlot,
      getForge,
      sections
    },
    JSON.stringify([sessionId, workspace?.workspaceId, cwd])
  );
}
function registerOverview(ctx) {
  const { locale, slots, workspaces, sessions, uiWorkspace, sidebarRight, sidebarRightTabs, remote } = ctx;
  const title = () => message(!locale.getSnapshot().active.startsWith("zh"), "\u4F1A\u8BDD\u8BE6\u60C5", "Chat details");
  const getForge = () => ctx.get("remote.forgePanel");
  const sectionStates = /* @__PURE__ */ new Map();
  const injectOverview = (sessionId) => {
    if (!sectionStates.has(sessionId)) sectionStates.set(sessionId, createSectionState());
    return {
      sessionId,
      locale,
      workspaces,
      sessions,
      uiWorkspace,
      sidebarRight,
      sidebarRightTabs,
      remote,
      getForge,
      sessionStatus: ctx.uiSession.sessionStatus,
      sections: sectionStates.get(sessionId)
    };
  };
  registerSessionPanelSections(ctx, "conversation.session.panel.section", "id", "body");
  registerSessionPanelSections(ctx, "conversation.session.panel.section.actions", "key", "actions");
  ctx.effect(() => sidebarRightTabs.register({
    id: OVERVIEW_TAB,
    kind: OVERVIEW_KIND,
    title,
    guide: [{
      id: "deepseek-overview",
      order: 15,
      title,
      description: () => message(!locale.getSnapshot().active.startsWith("zh"), "\u73AF\u5883\u3001\u4E0A\u4E0B\u6587\u7A97\u53E3\u548C\u5DE5\u4F5C\u533A\u6539\u52A8", "Environment, context window and workspace changes"),
      icon: () => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icon, { name: "layers" })
    }]
  }), "deepseek-ui: overview tab");
  slots.inject("sidebar.right.pane.tab", () => slots.register({
    name: "sidebar.right.pane.tab",
    key: OVERVIEW_TAB,
    inject: injectOverview
  }, OverviewTab));
  slots.inject("sidebar.right.tab.guide", () => slots.register({
    name: "sidebar.right.tab.guide",
    id: "deepseek-ui.inspector",
    priority: -10,
    select: () => ({}),
    inject: injectOverview
  }, OverviewTab));
  slots.inject("sidebar.right.pane.tab.title", () => slots.register({
    name: "sidebar.right.pane.tab.title",
    key: GUIDE_TAB,
    priority: -10
  }, () => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icon, { name: "overview" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: title() })
  ] })));
  slots.inject("conversation.session.header.utilities", () => slots.register({
    name: "conversation.session.header.utilities",
    id: "deepseek-ui.task-shortcut",
    inject: (sessionId) => ({ sessionId, locale, sidebarRight })
  }, TaskShortcut));
}

// src/client/inspector.jsx
var import_react11 = require("react");
var import_react_dom5 = require("react-dom");

// src/client/inspector-tabs.js
function fileTabRole(tab) {
  if (tab?.kind === "files") return "tree";
  if (tab?.kind === "compaction-summary" || tab?.contentId?.startsWith("dsh-resource://file/")) return "preview";
}
function inspectorView(tab) {
  if (tab?.kind === "guide" || tab?.kind === OVERVIEW_KIND) return "overview";
  if (tab?.kind === "forge-changes" || tab?.kind === "changes-review") return "diff";
  if (fileTabRole(tab)) return "files";
  return tab?.kind;
}

// src/client/inspector.jsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var COLUMN = "[data-rightbar-col]";
var DOCKED_PANE = '[data-dockkit-host="dock"] [data-dockkit-pane]';
var PANE_TABS = "[data-dockkit-strip-tabs] > [data-dockkit-tab]";
var LOCAL_CHANGES = '[data-forge-changes="local"]';
var CHECKOUT_STATUS = "data-dsh-ui-checkout-status";
var PRIMARY = [
  { view: "overview", kind: "guide", icon: "overview", zh: "\u4F1A\u8BDD\u8BE6\u60C5", en: "Chat details" },
  { view: "files", kind: "files", icon: "folder", zh: "\u6587\u4EF6", en: "Files" },
  { view: "diff", kind: "forge-changes", icon: "diff", zh: "\u6539\u52A8", en: "Changes" },
  { view: "browser", kind: "browser", icon: "globe", zh: "\u6D4F\u89C8\u5668", en: "Browser" },
  { view: "forge-panel", kind: "forge-panel", icon: "branch", zh: "\u4EE3\u7801\u5BA1\u67E5\u548C\u53D8\u66F4", en: "Code review and changes" }
];
function openedPanels({ seat, sessionId }, sidebarRight, inventory) {
  const panelIds = new Set(inventory.filter((item) => item.sessionId === sessionId && !fileTabRole(item)).map((item) => item.tabId));
  const chips = seat.nextElementSibling?.querySelectorAll(`${DOCKED_PANE} ${PANE_TABS}`) ?? [];
  return Array.from(chips).flatMap((chip) => {
    const id = chip.dataset.dockkitTab;
    if (!panelIds.has(id)) return [];
    const title = chip.querySelector("[data-dockkit-tab-title]")?.textContent.trim() || sidebarRight.tabsIn(sessionId).find((tab) => tab.id === id)?.title;
    if (!title) return [];
    const paneId = chip.closest("[data-dockkit-pane]").dataset.dockkitPane;
    return [{ id, title, canClose: sidebarRight.menuTabs(sessionId, paneId, id).close }];
  });
}
function revealFileTab(tab) {
  tab.scrollIntoView({ block: "nearest", inline: "nearest", container: "nearest", behavior: "instant" });
}
function LocalChangesCheckout({ target, form, getForge, locale }) {
  const marker = (0, import_react11.useRef)(null);
  const [emptyPanel, setEmptyPanel] = (0, import_react11.useState)(null);
  const english = useLanguage(locale) === "en";
  const sessionId = form === "bar" && target.source.kind === "local" ? target.sessionId : null;
  (0, import_react11.useLayoutEffect)(() => {
    const panel = marker.current?.closest(LOCAL_CHANGES);
    if (!sessionId || !panel) return;
    const forge = getForge();
    if (!forge) return;
    const controller = new AbortController();
    const { signal } = controller;
    let stream;
    let branchCheck;
    function showStatus(status) {
      if (panel.getAttribute(CHECKOUT_STATUS) === status) return;
      if (status) panel.setAttribute(CHECKOUT_STATUS, status);
      else panel.removeAttribute(CHECKOUT_STATUS);
      for (const trigger of panel.querySelectorAll('button[aria-haspopup="menu"][aria-expanded="true"]')) {
        if (!trigger.checkVisibility()) trigger.click();
      }
      setEmptyPanel(status === "none" ? panel : null);
    }
    showStatus("pending");
    async function followCheckout() {
      stream = forge.follow(sessionId, signal);
      for await (const state of stream) {
        signal.throwIfAborted();
        const { checkout } = state;
        let status = checkout.state;
        if (checkout.state === "ready" && checkout.checkout.commit === null) status = "unborn";
        if (status === "ready" && state.local === null) {
          const { root, branch, commit } = checkout.checkout;
          const key = JSON.stringify([state.directory, root, branch, commit, state.worktree?.created?.baseCommit]);
          if (branchCheck?.key !== key) {
            const bases = await forge.diffBases(sessionId, "", signal);
            signal.throwIfAborted();
            branchCheck = { key, missing: bases.ok && bases.value.automatic === null };
          }
          if (branchCheck.missing) status = "no-base";
        } else branchCheck = void 0;
        showStatus(status);
      }
    }
    void followCheckout().catch(() => {
      if (!signal.aborted) showStatus(null);
    });
    return () => {
      controller.abort();
      stream?.dispose?.();
      panel.removeAttribute(CHECKOUT_STATUS);
    };
  }, [sessionId, getForge]);
  return sessionId === null ? null : /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { hidden: true, ref: marker }),
    emptyPanel && (0, import_react_dom5.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "dsh-ui-changes-empty", role: "status", children: english ? "This directory is not a Git repository." : "\u5F53\u524D\u76EE\u5F55\u4E0D\u662F Git \u4ED3\u5E93" }), emptyPanel)
  ] });
}
function registerLocalChangesCheckout(ctx) {
  const getForge = () => ctx.get("remote.forgePanel");
  ctx.slots.inject("forge.changes.toolbar", () => ctx.slots.register({
    name: "forge.changes.toolbar",
    id: "deepseek-ui.checkout-status",
    inject: () => ({ getForge, locale: ctx.locale })
  }, LocalChangesCheckout));
}
function useInspectorDock(sidebarRight, sessionId) {
  const [dock, setDock] = (0, import_react11.useState)(null);
  (0, import_react11.useLayoutEffect)(() => {
    if (!sessionId) return;
    const seat = document.createElement("div");
    seat.className = "dsh-ui-inspector-seat";
    let column = null;
    let frame = 0;
    const selectedFiles = /* @__PURE__ */ new WeakMap();
    function sync() {
      frame = 0;
      column = document.querySelector(COLUMN);
      const panel = Array.from(column?.querySelectorAll("[data-sidebar-right-panel]") ?? []).find((node) => node.dataset.sidebarRightSession === sessionId);
      const surface = panel?.querySelector("[data-dockkit-surface]");
      if (!surface) {
        seat.remove();
        setDock(null);
        return;
      }
      if (seat.nextElementSibling !== surface) surface.before(seat);
      const panes = Array.from(surface.querySelectorAll(DOCKED_PANE));
      const pane = panes.find((node) => node.hasAttribute("data-dockkit-pane-active")) ?? panes[0];
      const tabs = new Map(sidebarRight.tabsIn(sessionId).map((tab2) => [tab2.id, tab2]));
      const tab = tabs.get(pane?.dataset.dockkitContent);
      const fullscreen = panel.dataset.sidebarRightPanel === "fullscreen";
      const expanded = panel.hasAttribute("data-sidebar-right-open");
      for (const node of panes) {
        let selected;
        for (const chip of node.querySelectorAll(PANE_TABS)) {
          const role = fileTabRole(tabs.get(chip.dataset.dockkitTab));
          if (role) {
            chip.dataset.inspectorFileTab = role;
            if (expanded && chip.ariaSelected === "true") selected = chip;
          } else chip.removeAttribute("data-inspector-file-tab");
        }
        if (selected && selectedFiles.get(node) !== selected) revealFileTab(selected);
        selectedFiles.set(node, selected);
      }
      seat.inert = !expanded;
      setDock((previous) => previous?.seat === seat && previous.pane === pane && previous.tab === tab && previous.fullscreen === fullscreen && previous.expanded === expanded ? previous : { sessionId, seat, pane, tab, fullscreen, expanded });
    }
    function navigateFileTabs(event) {
      const tab = event.target;
      if (!tab.matches?.("[data-inspector-file-tab]") || !column?.contains(tab)) return;
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      const files = Array.from(tab.parentElement.querySelectorAll(":scope > [data-inspector-file-tab]"));
      const delta = event.key === "ArrowLeft" ? -1 : 1;
      const index = event.key === "Home" ? 0 : event.key === "End" ? files.length - 1 : (files.indexOf(tab) + delta + files.length) % files.length;
      event.preventDefault();
      event.stopPropagation();
      files[index].focus({ preventScroll: true });
      revealFileTab(files[index]);
    }
    const observer = new MutationObserver((records) => {
      if (frame) return;
      const columnRemoved = column && !column.isConnected;
      const columnChanged = records.some(({ target, addedNodes }) => column?.contains(target) || target.matches?.(COLUMN) || Array.from(addedNodes).some((node) => node.matches?.(COLUMN) || node.querySelector?.(COLUMN)));
      if (columnRemoved || columnChanged) frame = requestAnimationFrame(sync);
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: [
        "data-rightbar-col",
        "data-dockkit-pane-active",
        "data-dockkit-content",
        "data-sidebar-right-session",
        "data-sidebar-right-open",
        "data-sidebar-right-panel"
      ]
    });
    document.addEventListener("keydown", navigateFileTabs, true);
    sync();
    return () => {
      observer.disconnect();
      document.removeEventListener("keydown", navigateFileTabs, true);
      cancelAnimationFrame(frame);
      seat.remove();
    };
  }, [sidebarRight, sessionId]);
  return dock?.sessionId === sessionId ? dock : null;
}
function InspectorTools({ dock, english, sidebarRight, sidebarRightTabs, webTerminals }) {
  const { sessionId, pane, tab, fullscreen, expanded } = dock;
  const popover = usePopover();
  const inventory = useStore(popover.open ? sidebarRight.openTabs : void 0);
  const [shellList, setShellList] = (0, import_react11.useState)(null);
  const [chooseShell, setChooseShell] = (0, import_react11.useState)(false);
  const [registry, setRegistry] = (0, import_react11.useState)(() => sidebarRightTabs.entries());
  const active = inspectorView(tab);
  const t = (zh, en) => english ? en : zh;
  const paneId = pane?.dataset.dockkitPane;
  const paneTabIds = new Set(Array.from(pane?.querySelectorAll(PANE_TABS) ?? [], (node) => node.dataset.dockkitTab));
  const paneTabs = sidebarRight.tabsIn(sessionId).filter((row) => paneTabIds.has(row.id));
  (0, import_react11.useEffect)(() => sidebarRightTabs.subscribe(() => setRegistry(sidebarRightTabs.entries())), [sidebarRightTabs]);
  (0, import_react11.useEffect)(() => {
    if (!expanded && popover.open) popover.close();
  }, [expanded, popover.open]);
  (0, import_react11.useEffect)(() => {
    if (!popover.open) setChooseShell(false);
  }, [popover.open]);
  (0, import_react11.useEffect)(() => {
    if (!popover.open || !chooseShell || !webTerminals) return;
    const controller = new AbortController();
    setShellList(null);
    void webTerminals.launchShells(sessionId, controller.signal).then((choices) => {
      if (!controller.signal.aborted) setShellList(choices);
    }).catch(() => {
      if (!controller.signal.aborted) setShellList({ failed: true, shells: [] });
    });
    return () => controller.abort();
  }, [popover.open, chooseShell, sessionId, webTerminals]);
  function openView({ kind, view }) {
    if (sidebarRight.mounted.getSnapshot() !== sessionId) return;
    const matches = (row) => view === "overview" || view === "diff" ? inspectorView(row) === view : row?.kind === kind;
    if (matches(tab)) return;
    const existing = paneTabs.findLast(matches);
    if (existing) {
      sidebarRight.focus(existing.id);
      return;
    }
    if (!sidebarRightTabs.get(kind)) return;
    if (view === "diff") sidebarRight.openResourceIn(sessionId, localChangesAddress(sessionId), { kind, destination: "sidebar" });
    else sidebarRight.openTabIn(sessionId, kind, { paneId });
  }
  function run(action) {
    popover.close({ focus: true });
    if (sidebarRight.mounted.getSnapshot() === sessionId && sidebarRight.isExpanded()) action();
  }
  const extras = sidebarRightTabs.guide().filter((entry) => entry.kind !== OVERVIEW_KIND && !PRIMARY.some((view) => view.kind === entry.kind));
  const panels = inventory ? openedPanels(dock, sidebarRight, inventory) : [];
  const moreLabel = t("\u66F4\u591A\u9762\u677F", "More panels");
  const openedLabel = t("\u5DF2\u6253\u5F00\u7684\u9762\u677F", "Open panels");
  const closeLabel = t("\u6536\u8D77\u53F3\u4FA7\u9762\u677F", "Close right panel");
  const modeLabel = fullscreen ? t("\u9000\u51FA\u5168\u5C4F", "Exit full screen") : t("\u5168\u5C4F", "Full screen");
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("nav", { className: "dsh-ui-inspector-tools", "aria-label": t("\u53F3\u4FA7\u9762\u677F\u89C6\u56FE", "Right panel views"), "data-window-drag": true, children: [
    PRIMARY.map((item) => {
      const label = english ? item.en : item.zh;
      const available = registry.some((type) => type.kind === item.kind) || item.view === "diff" && paneTabs.some((row) => inspectorView(row) === item.view);
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "button",
        {
          type: "button",
          className: "dsh-ui-control dsh-ui-inspector-tool",
          "data-inspector-view": item.view,
          "aria-label": label,
          title: label,
          "aria-pressed": active === item.view,
          disabled: !available,
          onClick: () => openView(item),
          children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Icon, { name: item.icon })
        },
        item.view
      );
    }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "button",
      {
        ...popover.trigger,
        className: "dsh-ui-control dsh-ui-inspector-tool",
        "aria-label": moreLabel,
        title: moreLabel,
        "data-inspector-view": "more",
        "data-active": active === "terminal" ? "" : void 0,
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Icon, { name: "terminal" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { ...popover.content, className: "dsh-ui-popover dsh-ui-inspector-menu", "aria-label": moreLabel, children: [
      extras.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "button",
        {
          type: "button",
          className: "dsh-ui-control dsh-ui-inspector-menu-row",
          "data-inspector-launcher": entry.kind,
          onClick: () => run(() => sidebarRight.openTabIn(sessionId, entry.kind, { paneId })),
          children: [
            entry.kind === "terminal" && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Icon, { name: "terminal" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: entry.title() })
          ]
        },
        `${entry.kind}:${entry.id}`
      )),
      webTerminals && registry.some((type) => type.kind === "terminal") && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
          "button",
          {
            type: "button",
            className: "dsh-ui-control dsh-ui-inspector-menu-row",
            "aria-expanded": chooseShell,
            "data-inspector-command": "choose-shell",
            onClick: () => setChooseShell((value) => !value),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: t("\u9009\u62E9 Shell", "Choose shell") }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Icon, { name: "next" })
            ]
          }
        ),
        chooseShell && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "dsh-ui-inspector-shells", children: [
          shellList?.shells.map((shell) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
            "button",
            {
              type: "button",
              className: "dsh-ui-control dsh-ui-inspector-menu-row",
              onClick: () => run(() => {
                webTerminals.selectShell(shell.path);
                sidebarRight.openTabIn(sessionId, "terminal", { paneId, params: { shellPath: shell.path } });
              }),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: shell.name }),
                shell.path === shellList.selectedShell && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Icon, { name: "check" })
              ]
            },
            shell.path
          )),
          !shellList && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { role: "status", children: t("\u6B63\u5728\u8BFB\u53D6 Shell\u2026", "Loading shells\u2026") }),
          shellList?.shells.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { role: "status", children: shellList.failed ? t("\u65E0\u6CD5\u8BFB\u53D6 Shell\u3002", "Could not load shells.") : t("\u6CA1\u6709\u53EF\u7528\u7684 Shell\u3002", "No shells available.") })
        ] })
      ] }),
      panels.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { className: "dsh-ui-inspector-open-panels", "aria-label": openedLabel, children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "dsh-ui-inspector-open-heading", children: openedLabel }),
        panels.map(({ id, title, canClose }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "dsh-ui-inspector-open-panel", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
            "button",
            {
              type: "button",
              className: "dsh-ui-control dsh-ui-inspector-menu-row",
              "data-inspector-open-tab": id,
              title,
              "aria-current": id === tab?.id ? "page" : void 0,
              onClick: () => run(() => sidebarRight.focus(id)),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: title }),
                id === tab?.id && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Icon, { name: "check" })
              ]
            }
          ),
          canClose && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "button",
            {
              type: "button",
              className: "dsh-ui-control dsh-ui-inspector-tool",
              "data-inspector-close-tab": id,
              "aria-label": t(`\u5173\u95ED ${title}`, `Close ${title}`),
              onClick: () => run(() => sidebarRight.close(id)),
              children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Icon, { name: "close" })
            }
          )
        ] }, id))
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "button",
      {
        type: "button",
        className: "dsh-ui-control dsh-ui-inspector-tool dsh-ui-inspector-fullscreen",
        "data-inspector-command": "fullscreen",
        "data-active": fullscreen ? "" : void 0,
        "aria-label": modeLabel,
        title: modeLabel,
        disabled: !pane,
        onClick: () => {
          const selected = sidebarRight.commandTarget(pane);
          if (selected?.sessionId === sessionId) sidebarRight.toggleFullscreen(selected);
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Icon, { name: "maximize" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "button",
      {
        type: "button",
        className: "dsh-ui-control dsh-ui-inspector-tool dsh-ui-inspector-close",
        "aria-label": closeLabel,
        title: closeLabel,
        onClick: () => {
          if (sidebarRight.isExpanded()) sidebarRight.toggleExpanded();
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Icon, { name: "close" })
      }
    )
  ] });
}
function InspectorToolbar({ locale, sidebarRight, sidebarRightTabs, getWebTerminals }) {
  const english = useLanguage(locale) === "en";
  const sessionId = useStore(sidebarRight.mounted);
  const dock = useInspectorDock(sidebarRight, sessionId);
  return dock ? (0, import_react_dom5.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    InspectorTools,
    {
      dock,
      english,
      sidebarRight,
      sidebarRightTabs,
      webTerminals: getWebTerminals()
    }
  ), dock.seat) : null;
}

// src/client/session-motion.js
var MAIN = '[data-conversation-content]:not([class*="_embeddedBody"])';
var HEADER = "header[data-window-drag]:has(> [data-conversation-header-leading])";
var TITLE = `${HEADER} :is(span[class*="_crumbCurrent"],
  [data-subagent-action] button:not([class*="_ancestorSwitcherTrigger"]) [class*="_switcherTitle"])`;
var SECTION = "[data-overview-section]";
var REVEAL = ".dsh-ui-overview-reveal";
var EXIT_TIME = 105;
function visibleOverview(sessionId) {
  const panel = document.querySelector(`[data-sidebar-right-panel][data-sidebar-right-open][data-sidebar-right-session="${CSS.escape(sessionId)}"]`);
  const overview = panel?.querySelector("[data-dsh-ui-overview]");
  return overview?.checkVisibility({ visibilityProperty: true }) ? overview : null;
}
function disclosureElements(overview) {
  const result = /* @__PURE__ */ new Map();
  for (const section of overview?.querySelectorAll(SECTION) ?? []) {
    const reveal = section.querySelector(REVEAL);
    if (reveal) result.set(section.dataset.overviewSection, reveal);
  }
  return result;
}
function snapshotDisclosures(overview) {
  if (!overview) return null;
  return new Map(Array.from(disclosureElements(overview), ([section, reveal]) => [section, {
    open: reveal.hasAttribute("data-expanded"),
    height: reveal.getBoundingClientRect().height
  }]));
}
function snapshotTitle(...nodes) {
  let snapshot;
  for (const node of nodes) {
    if (!node?.isConnected) continue;
    const style = getComputedStyle(node);
    const opacity = Number(style.opacity);
    if (opacity <= (snapshot?.opacity ?? 0)) continue;
    const { left, top, width, height } = node.getBoundingClientRect();
    snapshot = {
      text: node.textContent,
      opacity,
      style: {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`,
        font: style.font,
        color: style.color,
        padding: style.padding,
        direction: style.direction
      }
    };
  }
  return snapshot;
}
function installSessionSwitchMotion(mounted) {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const animations = /* @__PURE__ */ new Set();
  let sessionId = mounted.getSnapshot();
  let pending;
  let timeout;
  let ghost;
  function play(element, frames, options, id, finish) {
    const animation = element.animate(frames, options);
    animation.id = id;
    animations.add(animation);
    animation.onfinish = () => {
      animations.delete(animation);
      finish?.();
    };
  }
  function showTitle(snapshot, incoming) {
    const outgoing = document.createElement("span");
    outgoing.className = "dsh-ui-session-title-outgoing";
    outgoing.setAttribute("aria-hidden", "true");
    outgoing.textContent = snapshot.text;
    Object.assign(outgoing.style, {
      ...snapshot.style,
      position: "fixed",
      boxSizing: "border-box",
      pointerEvents: "none",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    });
    incoming.closest(HEADER).append(outgoing);
    ghost = outgoing;
    play(
      outgoing,
      [{ opacity: snapshot.opacity, translate: "0 0" }, { opacity: 0, translate: "0 -3px" }],
      { duration: EXIT_TIME, easing: "ease-out", fill: "forwards" },
      "dsh-ui-session-title-out",
      () => {
        outgoing.remove();
        if (ghost === outgoing) ghost = null;
      }
    );
    play(
      incoming,
      [{ opacity: 0, translate: "0 3px" }, { opacity: 1, translate: "0 0" }],
      { ...LIST_MOTION, duration: 175, delay: EXIT_TIME, fill: "backwards" },
      "dsh-ui-session-title-in"
    );
  }
  function showDisclosures(before, overview) {
    for (const [section, reveal] of disclosureElements(overview)) {
      const old = before.get(section);
      const open = reveal.hasAttribute("data-expanded");
      if (open && !old?.open) {
        play(
          reveal,
          [{ gridTemplateRows: "0fr", opacity: 0 }, { gridTemplateRows: "1fr", opacity: 1 }],
          LIST_MOTION,
          "dsh-ui-section-expand"
        );
      } else if (!open && old?.open && old.height > 0) {
        play(reveal, [{ blockSize: `${old.height}px` }, { blockSize: "0px" }], LIST_MOTION, "dsh-ui-section-collapse");
      }
    }
  }
  function sync() {
    if (!pending) return;
    const main = document.querySelector(MAIN);
    if (main?.dataset.conversationSession !== sessionId) return;
    if (pending.title) {
      const incoming = document.querySelector(TITLE);
      if (incoming && incoming.textContent !== sessionId) {
        showTitle(pending.title, incoming);
        pending.title = null;
      } else if (main.dataset.contentPhase === "hero") pending.title = null;
    }
    if (pending.disclosures) {
      const overview = visibleOverview(sessionId);
      if (overview) {
        showDisclosures(pending.disclosures, overview);
        pending.disclosures = null;
      }
    }
    if (!pending.title && !pending.disclosures) stopWatching();
  }
  const observer = new MutationObserver(sync);
  function stopWatching() {
    observer.disconnect();
    clearTimeout(timeout);
    pending = null;
  }
  function stopAnimations() {
    for (const animation of animations) animation.cancel();
    animations.clear();
    ghost?.remove();
    ghost = null;
  }
  function switchSession() {
    const next = mounted.getSnapshot();
    if (next === sessionId) return;
    const title = snapshotTitle(ghost, document.querySelector(TITLE)) ?? pending?.title;
    const disclosures = sessionId && snapshotDisclosures(visibleOverview(sessionId));
    const animate = sessionId && next && !reduced.matches;
    stopWatching();
    stopAnimations();
    sessionId = next;
    if (!animate || !title && !disclosures) return;
    pending = { title, disclosures };
    observer.observe(document.body, {
      childList: true,
      characterData: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-conversation-session", "data-content-phase", "data-sidebar-right-open", "hidden"]
    });
    timeout = setTimeout(stopWatching, 500);
    sync();
  }
  function motionPreferenceChanged() {
    if (!reduced.matches) return;
    stopWatching();
    stopAnimations();
  }
  const unsubscribe = mounted.subscribe(switchSession);
  reduced.addEventListener("change", motionPreferenceChanged);
  return () => {
    unsubscribe();
    reduced.removeEventListener("change", motionPreferenceChanged);
    stopWatching();
    stopAnimations();
  };
}

// src/client/theme.jsx
var import_react12 = require("react");

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

// src/client/theme.jsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function readTheme() {
  try {
    return localStorage.getItem(themeStorageKey) === "blue" ? "blue" : "clay";
  } catch {
    return "clay";
  }
}
function ThemePicker({ locale, store, choose }) {
  const english = useLanguage(locale) === "en";
  const selected = useStore(store);
  const labelId = (0, import_react12.useId)();
  const labels2 = english ? { clay: "Claude orange", blue: "Whale blue" } : { clay: "\u514B\u52B3\u5FB7\u6A59", blue: "\u9CB8\u9C7C\u84DD" };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "dsh-ui-theme-setting", role: "group", "aria-labelledby": labelId, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { id: labelId, children: english ? "Theme colors" : "\u4E3B\u9898\u914D\u8272" }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "dsh-ui-theme-options", children: Object.entries(labels2).map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      "button",
      {
        type: "button",
        className: "dsh-ui-theme-option",
        "data-theme-option": id,
        "aria-pressed": selected === id,
        onClick: () => choose(id),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { "aria-hidden": "true", style: { backgroundColor: themeSwatches[id] } }),
          label
        ]
      },
      id
    )) })
  ] });
}
function registerTheme(ctx, source) {
  let selected = readTheme();
  let disposeTokens;
  const listeners = /* @__PURE__ */ new Set();
  const store = {
    getSnapshot: () => selected,
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }
  };
  function apply2() {
    document.documentElement.dataset.dshUiTheme = selected;
    disposeTokens = ctx.theme.overrideTokens(source, themePalettes[selected]);
  }
  function update(next) {
    if (next === selected) return;
    selected = next;
    apply2();
    for (const listener of listeners) listener();
  }
  function choose(next) {
    if (next === selected) return;
    update(next);
    try {
      localStorage.setItem(themeStorageKey, next);
    } catch {
    }
  }
  ctx.effect(() => {
    apply2();
    const sync = (event) => {
      if (event.key === themeStorageKey || event.key === null) update(readTheme());
    };
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("storage", sync);
      disposeTokens();
      delete document.documentElement.dataset.dshUiTheme;
    };
  }, "deepseek-ui: theme colors");
  ctx.slots.inject("settings.general.item", () => ctx.slots.register({
    name: "settings.general.item",
    id: "deepseek-ui.theme",
    order: 10.5,
    inject: () => ({ locale: ctx.locale, store, choose })
  }, ThemePicker));
}

// src/client/theme.css
var theme_default = '.dsh-ui-theme-setting {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px 16px;\n  padding: 16px 0;\n  border-bottom: 0.5px solid var(--dsh-ui-border);\n  color: var(--dsh-ui-text);\n  font-size: 14px;\n}\n\n.dsh-ui-theme-options {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.dsh-ui-theme-option {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  min-height: 32px;\n  padding: 4px 10px;\n  border: 1px solid var(--dsh-ui-border);\n  border-radius: 8px;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  font-size: 13px;\n  cursor: pointer;\n  transition: background-color var(--dsh-ui-motion), border-color var(--dsh-ui-motion), color var(--dsh-ui-motion);\n}\n\n.dsh-ui-theme-option > span {\n  flex: none;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n\n.dsh-ui-theme-option:hover { background: var(--dsh-ui-muted); }\n.dsh-ui-theme-option[aria-pressed="true"] {\n  border-color: var(--dsh-ui-focus);\n  background: var(--dsh-ui-accent-surface);\n  color: var(--dsh-ui-accent-surface-foreground);\n}\n.dsh-ui-theme-option:focus-visible {\n  outline: 2px solid var(--dsh-ui-focus);\n  outline-offset: 2px;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .dsh-ui-theme-option { transition: none; }\n}\n';

// src/client/hero.css
var hero_default = `.dsh-ui-brand-name {
  color: var(--dsh-ui-sidebar-foreground);
  font: 600 18px / 1.15 var(--dsh-ui-font);
}

/* The root-scoped brand seat lives in the native headline's leading hitbox. */
span:has(> .dsh-ui-hero-mark, > [data-slot="conversation.hero.brand.mark"] .dsh-ui-hero-mark) {
  flex: 0 1 auto;
  min-width: 0;
  max-width: 100%;
}

span:has(> .dsh-ui-hero-mark, > [data-slot="conversation.hero.brand.mark"] .dsh-ui-hero-mark) + span {
  display: none;
}

.dsh-ui-hero-mark {
  display: inline-flex;
  min-width: 0;
  max-width: 100%;
}

[data-content-phase="hero"] [data-composer-seat] {
  container-type: inline-size;
}

[data-content-phase="hero"] [class*="_composerHero"] {
  row-gap: 4px;
  padding-bottom: 12px;
}

[data-content-phase="hero"] [class*="_composerHero"] > :has(.dsh-ui-hero-mark) {
  margin-bottom: 8px;
}

[data-content-phase="hero"] [class*="_composerHero"] > [class*="_heroWorkspaceRow"] {
  order: 1;
  margin: 0 calc(var(--dsh-composer-side-clearance) + 7px);
  padding: 0;
}

[data-content-phase="hero"] [class*="_heroWorkspaceRow"] > button[class*="_workspace"] {
  gap: 5px;
  min-height: 27px;
  padding: 0 5px;
  border-radius: 7px;
  color: var(--dsh-ui-text-muted);
  font: 400 13px / 1.35 var(--dsh-ui-font);
}

[data-content-phase="hero"] [class*="_heroWorkspaceRow"] > button[class*="_workspace"]:is(:hover, [aria-expanded="true"]) {
  background: var(--dsh-ui-muted);
}

[data-content-phase="hero"] [class*="_heroWorkspaceRow"] > button[class*="_workspace"] svg {
  color: inherit;
}

.dsh-ui-workspace-glyph {
  display: inline-grid;
  place-items: center;
  flex: none;
  width: 16px;
  height: 16px;
}

.dsh-ui-workspace-glyph[data-workspace-id] { color: var(--dsh-ui-accent); }
.dsh-ui-workspace-glyph > .dsh-ui-icon { width: 16px; height: 16px; }

[class*="_heroWorkspaceRow"] button > .dsh-ui-workspace-glyph { order: -1; }
[class*="_heroWorkspaceRow"] button:has(> .dsh-ui-workspace-glyph) > svg[class*="_folder"] { display: none; }

.dsh-ui-workspace-name {
  display: flex;
  align-items: baseline;
  gap: 5px;
  min-width: 0;
}

.dsh-ui-workspace-name small {
  min-width: 0;
  overflow: hidden;
  color: var(--dsh-ui-text-muted);
  text-overflow: ellipsis;
}

.dsh-ui-greeting {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .13em;
  max-width: 100%;
  padding: 0 .05em;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--dsh-ui-text);
  font: 300 min(clamp(23px, 3.5vw, 37px), calc(94cqi / (var(--greeting-length, 7) + 1.6))) / 1.35
    "Source Han Serif CN", "Source Han Serif SC", "Noto Serif CJK SC", "Songti SC", serif;
  letter-spacing: -.025em;
  white-space: nowrap;
  cursor: pointer;
}

.dsh-ui-greeting:lang(en) {
  font: 300 clamp(22px, 3.5vw, 37px) / 1.35 "Anthropic Serif Display", Georgia, serif;
  letter-spacing: -.01em;
  word-spacing: .065em;
  white-space: normal;
  text-align: start;
}

.dsh-ui-greeting-mark {
  display: grid;
  place-items: center;
  flex: none;
  width: 1.38em;
  height: 1.05em;
  translate: 0 1px;
}

.dsh-ui-greeting-mark img {
  display: block;
  width: .92em;
  height: auto;
  object-fit: contain;
}

.dsh-ui-greeting-text {
  display: inline-block;
  min-width: 0;
  text-wrap: balance;
}

.dsh-ui-greeting-letter {
  display: inline-block;
  transform-origin: center 65%;
}

@media (prefers-reduced-motion: no-preference) {
  .dsh-ui-greeting-text[data-letter-motion] .dsh-ui-greeting-letter {
    animation: greeting-breathe 5.4s ease-in-out var(--letter-breath-delay) infinite;
  }
}

@keyframes greeting-breathe {
  0%, 100% {
    translate: 0 calc((var(--letter-offset) + .029em) * var(--greeting-strength));
    rotate: calc((var(--letter-tilt) - .38deg) * var(--greeting-strength));
  }
  50% {
    translate: 0 calc((var(--letter-offset) - .037em) * var(--greeting-strength));
    rotate: calc((var(--letter-tilt) + .42deg) * var(--greeting-strength));
  }
}

.dsh-ui-hero-extras {
  box-sizing: border-box;
  align-self: center;
  width: min(100%, 760px);
  min-width: 0;
  padding: 0 18px;
}

.dsh-ui-suggestions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
}

.dsh-ui-suggestion {
  display: inline-flex;
  align-items: center;
  min-height: 29px;
  gap: 5px;
  padding: 1px 9px;
  border: 1px solid var(--dsh-ui-border);
  border-radius: 7px;
  background: var(--dsh-ui-surface);
  color: var(--dsh-ui-text);
  font: 400 13px / 1.3 var(--dsh-ui-font);
  white-space: nowrap;
  cursor: pointer;
  transition: background var(--dsh-ui-motion), border-color var(--dsh-ui-motion);
}

.dsh-ui-suggestion:hover {
  background: var(--dsh-ui-muted);
  border-color: var(--dsh-ui-input);
}

.dsh-ui-suggestion .dsh-ui-icon {
  width: 14px;
  height: 14px;
  color: var(--dsh-ui-icon-muted);
}

.dsh-ui-preselection { display: flex; min-width: 0; }
`;

// src/client/composer.css
var composer_default = '@property --effort-spectrum-color {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: #6e4bdc;\n}\n\n.dsh-ui-selectors {\n  --dsh-ui-speed-intensity: 0;\n  --effort-progress: 0;\n  --effort-spectrum-tint: 0%;\n  --effort-spectrum-ink: color-mix(in oklab, var(--effort-spectrum-color), var(--dsh-ui-text) 38%);\n  --effort-selection-text: color-mix(in oklab, var(--dsh-ui-accent-surface-foreground),\n    var(--effort-spectrum-ink) var(--effort-spectrum-tint));\n  position: relative;\n  display: inline-flex;\n  min-width: 0;\n  align-items: center;\n  gap: 2px;\n  color: var(--dsh-ui-text);\n  font: 400 13px / 1.35 var(--dsh-ui-font);\n  animation: var(--effort-spectrum-animation, effort-spectrum-cycle) 26s ease-in-out infinite;\n}\n\nbody[data-ds-dark-theme] .dsh-ui-selectors {\n  --effort-spectrum-ink: color-mix(in oklab, var(--effort-spectrum-color), var(--dsh-ui-text) 58%);\n}\n\n@keyframes effort-spectrum-cycle {\n  0%, 100% { --effort-spectrum-color: #6e4bdc; }\n  14% { --effort-spectrum-color: #4d7fd4; }\n  31%, 37% { --effort-spectrum-color: #2d9e89; }\n  50% { --effort-spectrum-color: #7ca35a; }\n  64%, 69% { --effort-spectrum-color: #ce914f; }\n  82%, 87% { --effort-spectrum-color: #c86b9a; }\n  94% { --effort-spectrum-color: #9964cf; }\n}\n\nhtml[data-dsh-ui-theme="blue"] .dsh-ui-selectors {\n  --effort-spectrum-animation: effort-blue-spectrum;\n  --effort-spectrum-color: var(--dsh-ui-focus);\n}\n\n@keyframes effort-blue-spectrum {\n  0%, 100% { --effort-spectrum-color: var(--dsh-ui-focus); }\n  50% { --effort-spectrum-color: color-mix(in oklab, var(--dsh-ui-focus), var(--dsh-ui-effort-start) 24%); }\n}\n\n.dsh-ui-control {\n  min-width: 0;\n  min-height: 27px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 5px;\n  border: 0;\n  border-radius: 7px;\n  color: inherit;\n  background: transparent;\n  font: inherit;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: color var(--dsh-ui-motion), background var(--dsh-ui-motion);\n}\n\n.dsh-ui-control:hover:enabled,\n.dsh-ui-control[aria-expanded="true"] {\n  background: var(--dsh-ui-muted);\n}\n\n.dsh-ui-control:disabled,\n.dsh-ui-model-row:disabled {\n  opacity: .5;\n  cursor: default;\n}\n\n.dsh-ui-model-trigger > span {\n  display: block;\n  max-width: min(22vw, 220px);\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.dsh-ui-effort-trigger {\n  flex: none;\n  color: color-mix(in oklab, var(--dsh-ui-text), var(--effort-spectrum-ink) var(--effort-spectrum-tint));\n}\n\n.dsh-ui-speed-trigger {\n  flex: none;\n  width: 25px;\n  color: color-mix(in oklab, var(--dsh-ui-icon-muted), var(--effort-spectrum-color)\n    calc(var(--dsh-ui-speed-intensity) * 100%));\n}\n\n.dsh-ui-speed-trigger path {\n  fill: color-mix(in oklab, transparent, currentColor calc(var(--dsh-ui-speed-intensity) * 100%));\n}\n\n.dsh-ui-selectors[data-glowing] .dsh-ui-speed-trigger .dsh-ui-icon {\n  filter: drop-shadow(0 0 calc(7px * var(--dsh-ui-speed-intensity))\n    color-mix(in oklab, transparent, currentColor calc(var(--dsh-ui-speed-intensity) * 88%)));\n}\n\n/* The button is the popover anchor. Only its glyph should scale. */\n.dsh-ui-selectors[data-glowing] .dsh-ui-speed-glyph {\n  animation: dsh-ui-zap-breathe 2.4s ease-in-out infinite;\n}\n\n@keyframes dsh-ui-zap-breathe {\n  0%, 100% { scale: 1; opacity: calc(1 - .24 * var(--dsh-ui-speed-intensity)); }\n  50% { scale: calc(1 + .12 * var(--dsh-ui-speed-intensity)); opacity: 1; }\n}\n\n.dsh-ui-popover {\n  --dsh-ui-popover-offset: 0 -4px;\n  --dsh-ui-popover-origin: top right;\n  position: fixed;\n  box-sizing: border-box;\n  inset: auto;\n  width: min(268px, calc(100vw - 16px));\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  border: 1px solid var(--dsh-ui-border);\n  border-radius: 9px;\n  box-shadow: 0 5px 20px color-mix(in srgb, var(--dsh-ui-text) 13%, transparent);\n  background: var(--dsh-ui-surface-overlay);\n  color: var(--dsh-ui-text);\n  font: 400 13px / 1.45 var(--dsh-ui-font);\n  opacity: 0;\n  translate: var(--dsh-ui-popover-offset);\n  scale: .98;\n  transform-origin: var(--dsh-ui-popover-origin);\n  pointer-events: none;\n  transition: opacity var(--dsh-ui-motion), translate var(--dsh-ui-motion), scale var(--dsh-ui-motion),\n    display var(--dsh-ui-duration) allow-discrete, overlay var(--dsh-ui-duration) allow-discrete,\n    background-color var(--dsh-ui-motion), border-color var(--dsh-ui-motion), color var(--dsh-ui-motion);\n}\n\n.dsh-ui-permission-trigger, .dsh-ui-context-trigger {\n  width: 27px;\n  padding: 0;\n  color: var(--dsh-ui-icon-muted);\n}\n\n.dsh-ui-permission-trigger[data-mode="danger-full-access"] { color: var(--dsh-ui-danger); }\n.dsh-ui-subagent-permission, .dsh-ui-context-status {\n  display: inline-grid;\n  place-items: center;\n  flex: none;\n  width: 27px;\n  min-height: 27px;\n  color: var(--dsh-ui-icon-muted);\n}\n.dsh-ui-permission-menu { width: min(322px, calc(100vw - 16px)); padding: 5px; }\n.dsh-ui-permission-menu .dsh-ui-permission-option {\n  display: grid;\n  grid-template-columns: 19px minmax(0, 1fr) 14px;\n  align-items: center;\n  gap: 8px;\n  min-height: 47px;\n  font-size: 13px;\n}\n.dsh-ui-permission-option > span { display: grid; gap: 1px; white-space: normal; }\n.dsh-ui-permission-option > span small { color: var(--dsh-ui-text-muted); font-size: 11px; line-height: 1.42; }\n.dsh-ui-permission-option > .dsh-ui-icon:first-child { color: var(--dsh-ui-icon-muted); }\n\n@property --dsh-ui-ring-progress {\n  syntax: "<percentage>";\n  inherits: false;\n  initial-value: 0%;\n}\n.dsh-ui-context-ring {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background: conic-gradient(var(--dsh-ui-accent) var(--dsh-ui-ring-progress), var(--dsh-ui-input) 0);\n  mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1.7px));\n  transition: --dsh-ui-ring-progress var(--dsh-ui-motion);\n}\n[data-composer-dock]:has(.dsh-ui-context-ring) > span[style*="--dsh-context-"] { display: none; }\n[data-composer-dock] [data-composer-stat="activity"],\n[data-composer-dock] [data-composer-stat="usage"] { display: none; }\n\n[data-content-phase="active"] [data-slot="conversation.composer.bar"] {\n  --dsh-ui-chat-toolbar-gap: 4px;\n  --dsh-ui-chat-toolbar-height: 32px;\n  --dsh-ui-chat-primary-size: 32px;\n\n  /* Draw one field around the editor and attachments while the native buttons keep their event handlers. */\n  & [data-composer-card] {\n    --dsh-ui-chat-actions-space: 47px;\n    display: grid;\n    grid-template-columns: minmax(0, 1fr);\n    grid-template-rows: auto auto minmax(48px, auto) auto;\n    isolation: isolate;\n    gap: 0;\n    padding: 0;\n    border: 0;\n    background: transparent;\n    box-shadow: none;\n  }\n\n  & [data-composer-card]:has([class*="_trailing"] > button[class*="_primary"] ~ button[class*="_primary"]) {\n    --dsh-ui-chat-actions-space: 81px;\n  }\n\n  & [data-composer-card]::before {\n    content: "";\n    grid-area: 1 / 1 / 4 / 2;\n    z-index: -1;\n    pointer-events: none;\n    border: 1px solid var(--dsh-ui-input);\n    border-radius: 13px;\n    background: var(--dsh-ui-surface);\n    box-shadow: 0 2px 5px color-mix(in srgb, var(--dsh-ui-text) 7%, transparent);\n    transition: border-color var(--dsh-ui-motion), background-color var(--dsh-ui-motion);\n  }\n\n  & [data-composer-card]:has([data-composer-input]:focus)::before { border-color: var(--dsh-ui-focus); }\n\n  & [data-composer-card] > [class*="_accessory"] { grid-area: 1 / 1; }\n  & [data-composer-card] > [data-slot="conversation.input.attachments"] {\n    grid-area: 2 / 1;\n    display: block !important;\n    min-width: 0;\n  }\n\n  & [data-composer-card] > [data-input-scroll] {\n    grid-area: 3 / 1;\n    margin: 0;\n  }\n\n  & [data-composer-input] {\n    min-height: 48px;\n    padding: 12px var(--dsh-ui-chat-actions-space) 12px 13px;\n  }\n\n  & [data-composer-placeholder] { inset: 12px var(--dsh-ui-chat-actions-space) auto 13px; }\n\n  & [data-placeholder="\u53D1\u6D88\u606F\u6216\u521B\u5EFA\u4EFB\u52A1, / \u8C03\u7528\u6307\u4EE4, @ \u6587\u4EF6\u6216\u5BF9\u8BDD"] + [data-composer-placeholder],\n  & [data-placeholder="Message or run a task, / commands, @ files or sessions"] + [data-composer-placeholder] {\n    font-size: 0;\n    &::before { font-size: var(--dsh-content-font-size, 14px); }\n  }\n\n  & [data-placeholder="\u53D1\u6D88\u606F\u6216\u521B\u5EFA\u4EFB\u52A1, / \u8C03\u7528\u6307\u4EE4, @ \u6587\u4EF6\u6216\u5BF9\u8BDD"] + [data-composer-placeholder]::before { content: "\u8F93\u5165\u6D88\u606F"; }\n  & [data-placeholder="Message or run a task, / commands, @ files or sessions"] + [data-composer-placeholder]::before { content: "Message"; }\n\n  & [data-composer-card] > [class*="_row"] {\n    grid-area: 4 / 1;\n    position: relative;\n    reading-flow: flex-visual;\n    justify-content: flex-start;\n    gap: 2px;\n    min-height: var(--dsh-ui-chat-toolbar-height);\n    margin-block-start: var(--dsh-ui-chat-toolbar-gap);\n    padding: 0 31px 0 4px;\n  }\n\n  & [data-composer-card] > [class*="_row"] > :is([class*="_tools"]:not([hidden]), [class*="_trailing"]) { display: contents; }\n  & [class*="_tools"] > button[class*="_add"] {\n    border-radius: 7px;\n    background: transparent;\n    color: var(--dsh-ui-icon-muted);\n  }\n\n  & [class*="_trailing"] > [class*="_activity"] { order: 1; }\n  & [data-slot="conversation.input.left"] > * { order: 2; }\n  & [class*="_trailing"] > [class*="_standardControls"] {\n    order: 3;\n    margin-inline-start: auto;\n  }\n  & [class*="_tools"] > [class*="_modes"] { order: 4; }\n  & .dsh-ui-model-trigger > span { max-width: clamp(48px, calc(100cqi - 182px), 220px); }\n\n  & [data-slot="conversation.input.activity"] button:has(svg[data-icon*="microphone"]) {\n    border-radius: 7px;\n    color: var(--dsh-ui-icon-muted);\n  }\n\n  & [class*="_trailing"] > button[class*="_primary"] {\n    position: absolute;\n    inset-inline-end: 10px;\n    inset-block-end: calc(100% + var(--dsh-ui-chat-toolbar-gap) + 8px);\n    reading-order: -1;\n    width: var(--dsh-ui-chat-primary-size);\n    height: var(--dsh-ui-chat-primary-size);\n    border-radius: 7px;\n    background: transparent;\n    color: var(--dsh-ui-accent);\n    transform: none;\n  }\n\n  & [class*="_trailing"] > button[class*="_primary"]:has(~ button[class*="_primary"]) {\n    inset-inline-end: calc(12px + var(--dsh-ui-chat-primary-size));\n  }\n\n  & [class*="_trailing"] > button[class*="_primary"]:hover:not(:disabled) { background: var(--dsh-ui-muted); }\n  & [class*="_trailing"] > button[class*="_primary"]:disabled:not([data-sending]) { color: var(--dsh-ui-icon-muted); }\n  & [class*="_trailing"] > button[class*="_primary"] > svg:has(> path:only-child) { width: 13px; height: 13px; }\n\n  /* The dock and toolbar align on their last row even when tools wrap. */\n  & [data-composer-dock] {\n    box-sizing: border-box;\n    z-index: 1;\n    justify-content: flex-end;\n    width: min(100%, var(--dsh-composer-card-max-width));\n    min-height: var(--dsh-ui-chat-toolbar-height);\n    height: var(--dsh-ui-chat-toolbar-height);\n    margin-block-start: calc(-1 * var(--dsh-ui-chat-toolbar-height));\n    padding: 0 1px 0 0;\n    pointer-events: none;\n  }\n\n  & [data-composer-dock] :is(button, [data-slot="conversation.composer.dock"] > *) { pointer-events: auto; }\n}\n\n.dsh-ui-popover[data-align="left"] { --dsh-ui-popover-origin: top left; }\n.dsh-ui-popover[data-placement="above"] {\n  --dsh-ui-popover-offset: 0 4px;\n  --dsh-ui-popover-origin: bottom right;\n}\n.dsh-ui-popover[data-placement="above"][data-align="left"] { --dsh-ui-popover-origin: bottom left; }\n.dsh-ui-popover:popover-open { opacity: 1; translate: none; scale: 1; pointer-events: auto; }\n\n@starting-style {\n  .dsh-ui-popover:popover-open { opacity: 0; translate: var(--dsh-ui-popover-offset); scale: .98; }\n}\n\n.dsh-ui-selectors:has(.dsh-ui-effort-menu:popover-open) .dsh-ui-model-menu:not(:popover-open),\n.dsh-ui-selectors:has(.dsh-ui-model-menu:popover-open) .dsh-ui-effort-menu:not(:popover-open) {\n  transition: none;\n}\n\n.dsh-ui-model-menu {\n  width: min(318px, calc(100vw - 16px));\n  padding: 6px;\n}\n\n.dsh-ui-model-menu h3,\n.dsh-ui-model-menu h4 {\n  margin: 0;\n  padding: 4px 7px;\n}\n\n.dsh-ui-model-menu h3 { font-size: 13px; font-weight: 600; }\n.dsh-ui-model-menu h4 {\n  color: var(--dsh-ui-text-muted);\n  font-size: 11px;\n  font-weight: 500;\n}\n.dsh-ui-provider + .dsh-ui-provider {\n  margin-top: 4px;\n  padding-top: 3px;\n  border-top: 1px solid var(--dsh-ui-border);\n}\n\n.dsh-ui-model-row,\n.dsh-ui-retry {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 30px;\n  padding: 4px 7px;\n  border: 0;\n  border-radius: 6px;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  text-align: start;\n  cursor: pointer;\n  transition: background-color var(--dsh-ui-motion), color var(--dsh-ui-motion);\n}\n\n.dsh-ui-provider > .dsh-ui-model-row { padding-inline-start: 15px; }\n.dsh-ui-model-row > span { overflow-wrap: anywhere; }\nbutton.dsh-ui-model-row:hover:enabled,\n.dsh-ui-retry:hover {\n  background: var(--dsh-ui-muted);\n}\n\n.dsh-ui-model-row[aria-pressed="true"] {\n  background: var(--dsh-ui-accent-surface);\n  color: var(--dsh-ui-accent-surface-foreground);\n}\n\n.dsh-ui-current-preset { cursor: default; }\n.dsh-ui-model-row .dsh-ui-icon { width: 13px; height: 13px; color: var(--dsh-ui-accent); }\n.dsh-ui-model-row small, .dsh-ui-model-trigger small {\n  font-size: .84em;\n  color: var(--dsh-ui-text-muted);\n}\n\n.dsh-ui-model-message {\n  margin: 0;\n  padding: 5px 7px;\n  color: var(--dsh-ui-text-muted);\n  overflow-wrap: anywhere;\n}\n\n.dsh-ui-control-notice {\n  position: absolute;\n  z-index: 2;\n  bottom: calc(100% + 5px);\n  right: 0;\n  width: max-content;\n  max-width: min(270px, 60vw);\n  padding: 5px 8px;\n  border: 1px solid var(--dsh-ui-border);\n  border-radius: 7px;\n  background: var(--dsh-ui-surface-overlay);\n  color: var(--dsh-ui-accent-surface-foreground);\n  overflow-wrap: anywhere;\n}\n\n.dsh-ui-speed-popover {\n  width: min(264px, calc(100vw - 16px));\n  padding: 11px 12px;\n}\n\n.dsh-ui-speed-popover header,\n.dsh-ui-speed-popover header b,\n.dsh-ui-speed-popover dl > div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n\n.dsh-ui-speed-popover header {\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--dsh-ui-border);\n}\n\n.dsh-ui-speed-popover header span,\n.dsh-ui-speed-popover dt { color: var(--dsh-ui-text-muted); }\n.dsh-ui-speed-popover dl { display: grid; gap: 5px; margin: 8px 0 0; }\n.dsh-ui-speed-popover dd { margin: 0; white-space: nowrap; font-variant-numeric: tabular-nums; }\n.dsh-ui-speed-mode dt { flex: none; }\n.dsh-ui-speed-popover .dsh-ui-speed-mode dd { white-space: normal; overflow-wrap: anywhere; text-align: end; }\n\n.dsh-ui-mode-control { padding: 8px; }\n.dsh-ui-mode-head {\n  display: grid;\n  grid-template-columns: 25px minmax(0, 1fr) 25px;\n  align-items: center;\n  gap: 5px;\n  min-height: 27px;\n  margin-bottom: 4px;\n}\n.dsh-ui-mode-head h3 {\n  grid-column: 2;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n}\n.dsh-ui-mode-trigger, .dsh-ui-mode-back {\n  flex: none;\n  width: 25px;\n  padding: 0;\n  color: var(--dsh-ui-icon-muted);\n}\n.dsh-ui-mode-trigger:hover:enabled, .dsh-ui-mode-trigger[aria-expanded="true"] { color: var(--dsh-ui-accent); }\n.dsh-ui-mode-options { display: grid; gap: 2px; }\n\n.dsh-ui-effort-control {\n  --effort-thumb: 20px;\n  --effort-rail-height: 15px;\n  --effort-rail-lead: 8px;\n  --effort-ease: cubic-bezier(.22,.74,.24,1);\n  --effort-slide: 320ms var(--effort-ease);\n  --effort-fill-color: color-mix(in oklab, var(--dsh-ui-effort-start), var(--dsh-ui-effort-end)\n    calc(var(--effort-progress) * 100%));\n  --effort-track-neutral: color-mix(in srgb, var(--dsh-ui-input) 58%, var(--dsh-ui-muted));\n  --effort-track-tint: 43%;\n  --effort-star-opacity: 0;\n  --effort-star-mask: -8%;\n  --effort-star-tile: 240px;\n  --effort-star-tail: calc(3px + 2.5px * var(--dsh-ui-speed-intensity));\n  --effort-thumb-surface: var(--dsh-ui-surface);\n  --effort-thumb-border: color-mix(in srgb, var(--dsh-ui-input) 78%, var(--dsh-ui-surface));\n  padding: 10px 11px 9px;\n  color: var(--dsh-ui-text-muted);\n  font-size: 12px;\n}\n\nbody[data-ds-dark-theme] .dsh-ui-effort-control {\n  --effort-track-tint: 25%;\n}\n\n.dsh-ui-selectors[data-starlight] .dsh-ui-effort-control {\n  --effort-star-opacity: .78;\n  --effort-star-mask: calc((.92 - var(--effort-progress)) * 50%);\n}\n\n.dsh-ui-selectors[data-starlight][data-effort="high"] .dsh-ui-effort-control {\n  --effort-star-opacity: .54;\n  --effort-star-mask: calc((.82 - var(--effort-progress)) * 50%);\n}\n\n.dsh-ui-selectors[data-starlight][data-effort="max"] .dsh-ui-effort-control {\n  --effort-star-opacity: .98;\n  --effort-star-mask: calc((1.14 - var(--effort-progress)) * 50%);\n}\n\n.dsh-ui-selectors[data-effort="ultra"] .dsh-ui-effort-control {\n  --effort-star-opacity: 1;\n  --effort-star-mask: 55%;\n  --effort-thumb-surface: #fffdfd;\n  --effort-thumb-border: #e8e0f3;\n}\n\n.dsh-ui-effort-control:has(.dsh-ui-effort-range:active) { --effort-slide: 150ms var(--effort-ease); }\n.dsh-ui-effort-head {\n  display: grid;\n  grid-template-columns: minmax(25px, 1fr) minmax(0, max-content) minmax(25px, 1fr);\n  align-items: center;\n  gap: 1px 5px;\n}\n.dsh-ui-effort-model {\n  grid-area: 2 / 1 / 3 / -1;\n  justify-self: center;\n  gap: 3px;\n  min-height: 19px;\n  max-width: 100%;\n  color: var(--dsh-ui-text-muted);\n}\n.dsh-ui-effort-model span { overflow: hidden; text-overflow: ellipsis; }\n.dsh-ui-effort-model .dsh-ui-icon { height: 11px; width: 11px; }\n.dsh-ui-effort-reset { grid-area: 1 / 3; justify-self: end; width: 25px; }\n.dsh-ui-effort-reset .dsh-ui-icon { height: 14px; width: 14px; }\n.dsh-ui-effort-value {\n  grid-area: 1 / 2;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  place-items: center;\n  min-height: 26px;\n  color: var(--effort-selection-text);\n  font-size: 19px;\n  line-height: 1.25;\n  white-space: nowrap;\n}\n.dsh-ui-effort-value > span {\n  grid-area: 1 / 1;\n  max-inline-size: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transform: translateY(2px);\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 190ms ease, transform var(--effort-slide), visibility var(--effort-slide);\n}\n.dsh-ui-effort-value > [data-current] { visibility: visible; transform: translateY(0); opacity: 1; }\n\n.dsh-ui-effort-track {\n  position: relative;\n  height: 31px;\n  margin: 6px 0 0 var(--effort-rail-lead);\n}\n\n.dsh-ui-effort-rail {\n  position: absolute;\n  inset: calc(50% - var(--effort-rail-height) / 2) 0 auto calc(-1 * var(--effort-rail-lead));\n  height: var(--effort-rail-height);\n  overflow: hidden;\n  border-radius: 5px;\n  background: color-mix(in oklab, var(--effort-track-neutral), var(--dsh-ui-effort-start) var(--effort-track-tint));\n  pointer-events: none;\n}\n\n.dsh-ui-effort-fill {\n  --effort-travel-width: calc(100% - var(--effort-thumb) - var(--effort-rail-lead));\n  position: absolute;\n  inset: 0;\n  clip-path: inset(0 calc(var(--effort-travel-width) * (1 - var(--effort-progress)) + var(--effort-thumb) / 2) 0 0);\n  background-color: var(--effort-fill-color);\n  background-image: linear-gradient(100deg, #fff3, transparent 72%);\n  transition: clip-path var(--effort-slide), background-color 300ms ease;\n}\n\n.dsh-ui-effort-fill::before, .dsh-ui-effort-stars, .dsh-ui-effort-spectrum { position: absolute; inset: 0; }\n.dsh-ui-effort-fill::before, .dsh-ui-effort-stars {\n  opacity: var(--effort-star-opacity);\n  mask-image: linear-gradient(to right, transparent 20%, #00000007 22%, #00000038 25%, #0000008a 28%, #000000de 31%, #000 34%);\n  mask-size: 300% 100%;\n  mask-position: var(--effort-star-mask) center;\n  mask-repeat: no-repeat;\n  transition: opacity 420ms ease, mask-position 600ms cubic-bezier(.27, .58, .25, 1), transform 540ms var(--effort-ease);\n}\n\n.dsh-ui-effort-fill::before, .dsh-ui-effort-spectrum {\n  background: radial-gradient(ellipse at 24% 0%, #fff3, transparent 51%),\n    linear-gradient(105deg in oklab, color-mix(in oklab, var(--effort-spectrum-color), white 25%),\n      var(--effort-spectrum-color) 62%, color-mix(in oklab, var(--effort-spectrum-color), black 8%));\n}\n\n.dsh-ui-effort-fill::before {\n  transform: translateX(calc(3px * (1 - var(--effort-star-opacity))));\n  content: "";\n}\n\n.dsh-ui-effort-spectrum {\n  opacity: 0;\n  transition: opacity 580ms var(--effort-ease);\n}\n\n.dsh-ui-selectors[data-effort="ultra"] .dsh-ui-effort-spectrum { opacity: 1; }\n\n.dsh-ui-effort-star-strip {\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: calc(100% + var(--effort-star-tile));\n  background:\n    radial-gradient(circle at 5% 61%, #fff9 0 .65px, transparent 1.2px),\n    radial-gradient(circle at 10% 28%, #e2eaffc9 0 .8px, transparent 1.35px),\n    radial-gradient(circle at 17% 73%, #f4f1ffcc 0 1px, transparent 1.6px),\n    radial-gradient(circle at 23% 39%, #fff9 0 .65px, transparent 1.15px),\n    radial-gradient(circle at 31% 62%, #f5efffc9 0 .95px, transparent 1.55px),\n    radial-gradient(circle at 38% 25%, #fff8 0 .65px, transparent 1.15px),\n    radial-gradient(circle at 43% 78%, #e3dcffc9 0 .7px, transparent 1.35px),\n    radial-gradient(circle at 50% 51%, #fffbe7e3 0 1px, transparent 1.55px),\n    radial-gradient(circle at 55% 28%, #f8f3ff80 0 .7px, transparent 1.2px),\n    radial-gradient(circle at 63% 69%, #fffaffde 0 .95px, transparent 1.55px),\n    radial-gradient(circle at 70% 44%, #f5ecffdf 0 1.2px, transparent 1.9px),\n    radial-gradient(circle at 78% 76%, #e6ecff9c 0 .65px, transparent 1.2px),\n    radial-gradient(circle at 85% 34%, #f1eaffbd 0 .85px, transparent 1.45px),\n    radial-gradient(circle at 91% 65%, #f4edffd9 0 1px, transparent 1.65px),\n    radial-gradient(circle at 96% 29%, #e7edffc9 0 .65px, transparent 1.25px),\n    radial-gradient(ellipse var(--effort-star-tail) .65px at 32% 62%,\n      rgb(255 247 233 / calc(.45 * var(--dsh-ui-speed-intensity))), transparent),\n    radial-gradient(ellipse var(--effort-star-tail) .65px at 71% 44%,\n      rgb(255 247 233 / calc(.61 * var(--dsh-ui-speed-intensity))), transparent);\n  background-size: var(--effort-star-tile) 100%;\n  background-repeat: repeat-x;\n  animation: dsh-ui-star-drift 2.8s linear infinite;\n}\n\n@keyframes dsh-ui-star-drift {\n  to { transform: translateX(calc(-1 * var(--effort-star-tile))); }\n}\n\n.dsh-ui-effort-thumb {\n  position: absolute;\n  inset: 0 calc(var(--effort-thumb) / 2);\n  transform: translateX(calc(var(--effort-progress) * 100%));\n  transition: transform var(--effort-slide);\n  pointer-events: none;\n}\n\n.dsh-ui-effort-thumb::before {\n  position: absolute;\n  inset: calc(50% - var(--effort-thumb) / 2) auto auto calc(-1 * var(--effort-thumb) / 2);\n  width: var(--effort-thumb);\n  height: var(--effort-thumb);\n  border: 1px solid var(--effort-thumb-border);\n  border-radius: 6px;\n  box-shadow: 0 1px 4px #34244424;\n  background: var(--effort-thumb-surface);\n  transition: background-color var(--dsh-ui-motion), border-color var(--dsh-ui-motion);\n  content: "";\n}\n\n.dsh-ui-effort-track:has(.dsh-ui-effort-range:focus-visible) .dsh-ui-effort-thumb::before {\n  outline: 2px solid var(--dsh-ui-focus);\n  outline-offset: 2px;\n}\n\n.dsh-ui-effort-range {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  margin: 0;\n  outline: 0;\n  opacity: 0;\n  cursor: grab;\n}\n.dsh-ui-effort-range:active { cursor: grabbing; }\n.dsh-ui-effort-range:disabled { cursor: default; }\n\n.dsh-ui-effort-range::-webkit-slider-thumb {\n  appearance: none;\n  width: var(--effort-thumb);\n  height: var(--effort-thumb);\n}\n.dsh-ui-effort-range { appearance: none; }\n\n.dsh-ui-effort-stops {\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  inset: 0 calc(var(--effort-thumb) / 2);\n  pointer-events: none;\n}\n.dsh-ui-effort-stops span {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: color-mix(in srgb, var(--dsh-ui-text-muted) 43%, transparent);\n  transition: background-color var(--dsh-ui-motion);\n}\n.dsh-ui-effort-stops [data-filled] { background: #fff7; }\n\n@media (prefers-reduced-motion: reduce) {\n  [data-content-phase="active"] [data-slot="conversation.composer.bar"] [data-composer-card]::before { transition: none; }\n  .dsh-ui-popover, .dsh-ui-context-ring, .dsh-ui-control, .dsh-ui-model-row, .dsh-ui-retry { transition: none; }\n  .dsh-ui-selectors,\n  .dsh-ui-selectors[data-glowing] .dsh-ui-speed-glyph,\n  .dsh-ui-effort-star-strip { animation: none; }\n  .dsh-ui-effort-fill, .dsh-ui-effort-fill::before, .dsh-ui-effort-stars, .dsh-ui-effort-spectrum, .dsh-ui-effort-thumb,\n  .dsh-ui-effort-value > span { transition: none; }\n}\n';

// src/client/sidebar.css
var sidebar_default = 'html:root [class*="_frame"] > [class*="_sidebarCol"]:has([data-sidebar-scrollport]) {\n  background: color-mix(in srgb, var(--dsh-ui-canvas) 78%, var(--dsh-ui-sidebar));\n  border-right: 1px solid color-mix(in srgb, var(--dsh-ui-sidebar-border) 72%, var(--dsh-ui-canvas));\n}\n\n/* The column supplies the fill and divider. Keep the titlebar strip and footer geometry native. */\n[class*="_sidebarCol"] [class*="_root"]:has(> [class*="_scrollRegion"] > [data-sidebar-scrollport]) {\n  background: transparent;\n}\n\n[data-platform="darwin"] [class*="_frame"]:not([data-sidebar-drawer]):has(> [class*="_sidebarCol"] [data-sidebar-scrollport]) > [class*="_centerCol"] {\n  border-left: 0;\n}\n\n[class*="_sidebarCol"] [class*="_logoRow"]:has(.dsh-ui-brand-name) {\n  height: 35px;\n  margin-inline: calc(14px - var(--dsh-sidebar-inline-padding));\n  margin-bottom: 10px;\n  padding: 0 2px 0 1px;\n}\n\nhtml:not([data-platform="darwin"], [data-windows-titlebar]) [class*="_sidebarCol"] [class*="_logoRow"]:has(.dsh-ui-brand-name) {\n  margin-top: 8px;\n}\n\n[class*="_logoRow"] [class*="_brandIdentity"] {\n  height: 30px;\n  gap: 3px;\n}\n\n[class*="_logoRow"] [class*="_brandMark"] {\n  width: 28px;\n  height: 30px;\n}\n\n[class*="_logoRow"] [class*="_brandMark"] img {\n  width: 18px;\n  height: 18px;\n  object-fit: contain;\n  transform: translateX(2px);\n}\n\n[class*="_logoRow"] .dsh-ui-brand-name {\n  overflow: hidden;\n  color: var(--dsh-ui-sidebar-foreground);\n  font: 600 18px / 1.2 var(--dsh-ui-font);\n  letter-spacing: -.025em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n[class*="_newSessionRow"]:has(.dsh-ui-sidebar-new) {\n  margin: 0 calc(14px - var(--dsh-sidebar-inline-padding));\n}\n\n[class*="_scrollRegion"]:has(> [data-sidebar-scrollport]) {\n  margin-top: 2px;\n}\n\n/* The native scroll handoff still owns both scrolling regions. Align its middle track to the new row. */\n[data-sidebar-scrollport][class*="_scrollArea"] {\n  grid-template-columns: calc(18px - var(--dsh-sidebar-inline-padding)) minmax(0, 1fr) 12px;\n  grid-template-rows: 0 max-content 2px max-content;\n}\n\n[data-sidebar-scrollport] > nav[class*="_panelList"] {\n  gap: 2px;\n  margin-bottom: 10px;\n}\n\n[data-sidebar-scrollport] > [class*="_regionArea"] {\n  --dsh-sidebar-inline-padding: 14px;\n  --dsh-sidebar-row-padding: 10px;\n}\n\nbutton.dsh-ui-sidebar-new[class*="_newSession"],\n:is(.dsh-ui-sidebar-search, .dsh-ui-sidebar-recents),\n[data-sidebar-scrollport] nav[class*="_panelList"] button[class*="_panelRow"] {\n  box-sizing: border-box;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  min-height: 36px;\n  height: 36px;\n  padding: 0 10px;\n  gap: 8px;\n  border: 0;\n  border-radius: 7px;\n  background: transparent;\n  color: var(--dsh-ui-sidebar-foreground);\n  font: 400 15px / 1.55 var(--dsh-ui-font);\n  text-align: start;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: background-color var(--dsh-ui-motion), color var(--dsh-ui-motion);\n}\n\n.dsh-ui-sidebar-new-label {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n:is(.dsh-ui-sidebar-new, .dsh-ui-sidebar-search, .dsh-ui-sidebar-recents, .dsh-ui-pinned-heading,\n  .dsh-ui-pinned-chat, button.dsh-ui-history-row):focus-visible {\n  outline: 2px solid var(--dsh-ui-focus);\n  outline-offset: -2px;\n}\n\n:is(.dsh-ui-sidebar-new, .dsh-ui-sidebar-new:hover) [class*="_newSessionShortcut"] {\n  margin-inline-start: auto;\n  color: var(--dsh-ui-sidebar-muted-foreground);\n  font: 11px system-ui, sans-serif;\n  opacity: .84;\n}\n\n.dsh-ui-sidebar-new > .dsh-ui-icon,\n:is(.dsh-ui-sidebar-search, .dsh-ui-sidebar-recents) > .dsh-ui-icon,\n[data-sidebar-scrollport] nav[class*="_panelList"] [class*="_panelGlyph"] svg {\n  width: 17px;\n  height: 17px;\n  color: var(--dsh-ui-icon-muted);\n}\n\n[data-sidebar-scrollport] [class*="_panelGlyph"]:has(> .dsh-ui-schedule-icon) svg:not(.dsh-ui-schedule-icon) {\n  display: none;\n}\n\n[data-sidebar-scrollport] nav[class*="_panelList"] > [class*="_panelEntryWide"] {\n  border: 0;\n  border-radius: 7px;\n  background: transparent;\n}\n\n[data-sidebar-scrollport] nav[class*="_panelList"] [class*="_panelEntryWide"]:has([class*="_panelUnpin"]) [class*="_panelTitle"] {\n  margin-inline-end: 28px;\n}\n\n[data-sidebar-scrollport] nav[class*="_panelList"] [class*="_panelUnpin"] {\n  top: 4px;\n  border-radius: 7px;\n}\n\n@media (hover: hover) {\n  button.dsh-ui-sidebar-new[class*="_newSession"]:hover,\n  :is(.dsh-ui-sidebar-search, .dsh-ui-sidebar-recents):hover,\n  [data-sidebar-scrollport] nav[class*="_panelList"] button[class*="_panelRow"]:hover,\n  [data-sidebar-scrollport] nav[class*="_panelList"] :where([class*="_panelEntryWide"]:hover) button[class*="_panelRow"] {\n    background-color: var(--dsh-ui-sidebar-row-hover);\n  }\n}\n\n[data-sidebar-scrollport] nav[class*="_panelList"] button[class*="_panelRow"][aria-current="page"] {\n  background-color: var(--dsh-ui-sidebar-row-selected);\n}\n\n[data-sidebar-scrollport] nav[class*="_panelList"] button[class*="_panelRow"][aria-expanded="true"] {\n  background-color: var(--dsh-ui-sidebar-row-hover);\n}\n\n[data-sidebar-scrollport] :is(.dsh-ui-sidebar-search, .dsh-ui-sidebar-recents)[aria-expanded="true"] {\n  background-color: var(--dsh-ui-sidebar-row-hover);\n}\n\n[data-sidebar-scrollport] [data-sidebar-workspace-header] {\n  color: var(--dsh-ui-sidebar-muted-foreground);\n  font: 400 14px / 1.4 var(--dsh-ui-font);\n}\n\n[data-sidebar-scrollport] [data-sidebar-workspace-header] [class*="_sectionLabel"] {\n  left: 0;\n}\n\n.dsh-ui-sidebar-search-seat {\n  anchor-name: --dsh-ui-sidebar-search;\n  min-height: 36px;\n}\n\n[data-sidebar-scrollport]:has(> nav > .dsh-ui-sidebar-search-seat) [data-sidebar-workspace-header] {\n  & [class*="_searchSlot"]:not([class*="_searchSlotExpanded"]) { display: none; }\n  & [class*="_sectionLabel"]:not([class*="_sectionLabelHidden"]) { margin-inline-end: auto; }\n}\n\n@supports (top: anchor(top)) and (width: anchor-size(width)) {\n  [data-sidebar-scrollport]:has(> nav > .dsh-ui-sidebar-search-seat) {\n    &:has([data-sidebar-workspace-header] [class*="_searchSlotExpanded"]) .dsh-ui-sidebar-search { visibility: hidden; }\n\n    & [data-sidebar-workspace-header] {\n      overflow: visible;\n\n      &:has([class*="_searchSlotExpanded"]) {\n        margin-right: -4px;\n        padding-inline: var(--dsh-sidebar-row-padding) 1px;\n        gap: 4px;\n      }\n      & [class*="_sectionLabelHidden"] { max-width: 45%; margin-inline-end: auto; }\n      & [class*="_headerActionsHidden"] { max-width: 60px; pointer-events: auto; }\n      & :is([class*="_sectionLabelHidden"], [class*="_headerActionsHidden"]) {\n        visibility: visible;\n        opacity: 1;\n        transform: none;\n        transition: none;\n      }\n      & [class*="_searchSlotExpanded"] {\n        position: fixed;\n        position-anchor: --dsh-ui-sidebar-search;\n        position-visibility: anchors-visible;\n        top: anchor(top);\n        left: anchor(left);\n        width: anchor-size(width);\n        height: anchor-size(height);\n        max-width: none;\n        margin: 0;\n        z-index: 1;\n        transition: none;\n      }\n      & [class*="_searchExpanded"] {\n        height: 36px;\n        background: var(--dsh-ui-surface);\n        border: 1px solid var(--dsh-ui-sidebar-border);\n        border-radius: 7px;\n      }\n      & [class*="_searchExpanded"]:focus-within { border-color: var(--dsh-ui-focus); }\n      & [class*="_searchInput"] { font-family: var(--dsh-ui-font); }\n    }\n  }\n}\n\n[data-sidebar-scrollport] [data-sidebar-workspace-header] button {\n  border-radius: 7px;\n  color: var(--dsh-ui-icon-muted);\n}\n\n@media (hover: hover) {\n  [data-sidebar-scrollport] [data-sidebar-workspace-header] :is(button[class*="_iconButton"], button[class*="_clearButton"], :not([class*="_searchExpanded"]) > button[class*="_searchButton"]):hover {\n    background-color: var(--dsh-ui-sidebar-row-hover);\n  }\n}\n\n[data-sidebar-list-area] :is([data-row-key^="workspace:"], [data-row-key^="session:"])[role="treeitem"] {\n  border: 0;\n  border-radius: 7px;\n  color: var(--dsh-ui-sidebar-foreground);\n  transition: background-color var(--dsh-ui-motion), color var(--dsh-ui-motion);\n}\n\n[data-sidebar-list-area] [data-row-key^="workspace:"][role="treeitem"] {\n  min-height: 35px;\n  height: 35px;\n  padding: 0 10px;\n  padding-inline-start: calc(10px + var(--dsh-workspace-indent, 0px));\n  gap: 0;\n  font: 400 14px / 1.4 var(--dsh-ui-font);\n}\n\n[data-sidebar-list-area] [data-row-key^="session:"][role="treeitem"] {\n  min-height: 30px;\n  height: 30px;\n  padding: 0 8px;\n  font: 400 13px / 1.3 var(--dsh-ui-font);\n  transition: background-color var(--dsh-ui-list-motion), color var(--dsh-ui-motion);\n}\n\n[data-sidebar-list-area] [class*="_groupSection"] [data-row-key^="session:"] {\n  margin-inline-start: calc(30px + var(--dsh-workspace-indent, 0px));\n}\n\n[data-sidebar-list-area] :is([data-row-key^="workspace:"], [data-row-key^="session:"])[role="treeitem"] span[class*="_title"] {\n  font-size: inherit;\n  line-height: inherit;\n}\n\n[data-sidebar-list-area] [data-row-key^="session:"] > span[class*="_title"] {\n  margin: 0 4px 0 0;\n}\n\n[data-sidebar-list-area] :is([data-row-key^="workspace:"], [data-row-key^="session:"])[role="treeitem"]:hover {\n  background-color: var(--dsh-ui-sidebar-row-hover);\n}\n\n[data-sidebar-list-area] [data-row-key^="session:"][role="treeitem"][aria-selected="true"] {\n  background-color: var(--dsh-ui-sidebar-row-selected);\n}\n\n[data-sidebar-list-area] button[class*="_sessionOverflowButton"] {\n  width: auto;\n  margin-inline-start: calc(30px + var(--dsh-workspace-indent, 0px));\n  padding: 4px 5px 5px 8px;\n  border-radius: 7px;\n  color: var(--dsh-ui-sidebar-muted-foreground);\n  font: 400 12px / 1.3 var(--dsh-ui-font);\n}\n\n[data-sidebar-list-area] button[class*="_sessionOverflowButton"]:hover {\n  background-color: var(--dsh-ui-sidebar-row-hover);\n}\n\n[class*="_regionArea"] :has(> [data-sidebar-workspace-header] [class*="_searchSlotExpanded"]) .dsh-ui-sidebar-pinned-seat {\n  display: none;\n}\n\n.dsh-ui-pinned-group { margin: 1px 0; }\n\n.dsh-ui-pinned-heading {\n  display: flex;\n  align-items: center;\n  min-height: 35px;\n  gap: 5px;\n  padding: 0 10px;\n  border-radius: 7px;\n  color: var(--dsh-ui-sidebar-foreground);\n  font: 400 14px / 1.4 var(--dsh-ui-font);\n  cursor: pointer;\n  list-style: none;\n  transition: background-color var(--dsh-ui-motion);\n}\n\n.dsh-ui-pinned-heading::-webkit-details-marker { display: none; }\n.dsh-ui-pinned-heading:hover { background: var(--dsh-ui-sidebar-row-hover); }\n\n.dsh-ui-pinned-heading .dsh-ui-icon {\n  width: 12px;\n  height: 12px;\n  color: var(--dsh-ui-sidebar-muted-foreground);\n  transition: transform var(--dsh-ui-list-motion);\n}\n\n.dsh-ui-pinned-group[open] > summary .dsh-ui-icon { transform: rotate(90deg); }\n\n@supports (interpolate-size: allow-keywords) {\n  .dsh-ui-pinned-group { interpolate-size: allow-keywords; }\n  .dsh-ui-pinned-group::details-content {\n    block-size: 0;\n    overflow: clip;\n    opacity: 0;\n    transition: block-size var(--dsh-ui-list-motion), opacity var(--dsh-ui-motion), content-visibility 320ms allow-discrete;\n  }\n  .dsh-ui-pinned-group[open]::details-content { block-size: auto; opacity: 1; }\n}\n\n.dsh-ui-pinned-list {\n  display: grid;\n  gap: 2px;\n  margin: 0 0 4px 10px;\n  padding-inline-start: 5px;\n}\n\n.dsh-ui-pinned-row { position: relative; min-width: 0; }\n\n.dsh-ui-pinned-chat, button.dsh-ui-history-row {\n  box-sizing: border-box;\n  width: 100%;\n  border: 0;\n  border-radius: 7px;\n  color: inherit;\n  background: transparent;\n  text-align: start;\n  cursor: pointer;\n  transition: background-color var(--dsh-ui-motion);\n}\n\n.dsh-ui-pinned-chat {\n  display: flex;\n  align-items: center;\n  min-height: 30px;\n  padding: 0 34px 0 3px;\n  color: var(--dsh-ui-sidebar-foreground);\n  font: 400 13px / 1.3 var(--dsh-ui-font);\n  transition: background-color var(--dsh-ui-list-motion);\n}\n\n:where(.dsh-ui-pinned-row:hover) > .dsh-ui-pinned-chat { background: var(--dsh-ui-sidebar-row-hover); }\n.dsh-ui-pinned-chat[aria-current="true"] { background: var(--dsh-ui-sidebar-row-selected); }\n\n.dsh-ui-pinned-leading {\n  display: flex;\n  align-items: center;\n  flex: none;\n  width: 20px;\n  height: 16px;\n  color: var(--dsh-ui-sidebar-muted-foreground);\n}\n\n.dsh-ui-pinned-leading > [data-state] { display: none; }\n.dsh-ui-pinned-title, .dsh-ui-history-title, .dsh-ui-history-row small {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.dsh-ui-pinned-row :is(.dsh-ui-pinned-unpin, .dsh-ui-pinned-actions) {\n  position: absolute;\n  inset-block-start: 50%;\n  z-index: 1;\n  width: 24px;\n  height: 24px;\n  min-height: 24px;\n  padding: 0;\n  translate: 0 -50%;\n  color: var(--dsh-ui-sidebar-muted-foreground);\n}\n\n.dsh-ui-pinned-unpin { inset-inline-start: -2px; }\n.dsh-ui-pinned-actions { inset-inline-end: 2px; }\n.dsh-ui-pinned-row svg { width: 14px; height: 14px; }\n\n@media (hover: hover) {\n  .dsh-ui-pinned-row:not(:hover, :focus-within) .dsh-ui-pinned-actions:not([aria-expanded="true"]) { opacity: 0; }\n}\n\n.dsh-ui-sidebar-empty, .dsh-ui-sidebar-error {\n  margin: 3px 8px 6px 3px;\n  color: var(--dsh-ui-sidebar-muted-foreground);\n  font: 400 12px / 1.4 var(--dsh-ui-font);\n}\n\n.dsh-ui-sidebar-error { color: var(--dsh-ui-accent); }\n\n.dsh-ui-history-dialog {\n  box-sizing: border-box;\n  width: min(480px, calc(100% - 35px));\n  max-height: 80%;\n  margin: auto;\n  overflow: auto;\n  padding: 15px;\n  color: var(--dsh-ui-text);\n  border: 1px solid var(--dsh-ui-border);\n  border-radius: 13px;\n  background: var(--dsh-ui-surface-overlay);\n  box-shadow: 0 14px 50px #24190c2c;\n  font: 400 15px / 1.55 var(--dsh-ui-font);\n}\n\n.dsh-ui-history-dialog::backdrop { background: #20190f46; }\n\n.dsh-ui-history-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n\n.dsh-ui-history-head h2 { margin: 0; font-size: 18px; }\n.dsh-ui-history-head button { width: 32px; height: 32px; color: var(--dsh-ui-icon-muted); }\n\n.dsh-ui-history-results {\n  display: grid;\n  gap: 3px;\n  max-height: 270px;\n  overflow: auto;\n  margin-top: 8px;\n}\n\n.dsh-ui-history-row {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 35%) auto;\n  align-items: center;\n  min-height: 35px;\n  padding: 4px 8px;\n  column-gap: 8px;\n  font: inherit;\n}\n\n.dsh-ui-history-row small { grid-column: 2; color: var(--dsh-ui-text-muted); text-align: end; }\n.dsh-ui-history-row > button { grid-column: 3; }\nbutton.dsh-ui-history-row:hover { background: var(--dsh-ui-muted); }\n.dsh-ui-history-footer { margin-top: 10px; }\n.dsh-ui-history-footer button { padding: 5px 12px; border: 1px solid var(--dsh-ui-border); }\n\n[data-sidebar-list-area] :is([data-row-key^="session:"], [class*="_searchResultHeading"]) > span[class*="_slot"] {\n  justify-content: flex-start;\n  inline-size: 0;\n  transition: inline-size var(--dsh-ui-list-motion);\n}\n\n[data-sidebar-list-area] :is([data-row-key^="session:"], [class*="_searchResultHeading"]) > span[class*="_slot"]:has(> :not([aria-hidden="true"])),\n[data-sidebar-list-area] span[class*="_slot"]:has(> .dsh-ui-session-status-mark[data-status="unread"]) {\n  inline-size: 16px;\n}\n\n[data-sidebar-list-area] [data-row-key^="session:"]:has([class*="_pinIndicator"]) > span[class*="_slot"],\n[data-sidebar-list-area] span[class*="_slot"]:has(> .dsh-ui-session-status-mark:is([data-status="running"], [data-status="waiting"])) {\n  inline-size: 20px;\n}\n\n[data-sidebar-list-area] span[class*="_slot"]:has(> .dsh-ui-session-status-mark) > [data-state] {\n  display: none;\n}\n\n[data-sidebar-list-area] [data-row-key^="workspace:"] > span[class*="_folder"]:has(> .dsh-ui-project-icon) {\n  display: inline-flex;\n  inline-size: 0;\n  overflow: clip;\n  transition: inline-size var(--dsh-ui-list-motion);\n}\n\n[data-sidebar-list-area] [data-row-key^="workspace:"][aria-expanded="true"] > span[class*="_folder"]:has(> .dsh-ui-project-icon) {\n  inline-size: 23px;\n}\n\n[data-sidebar-list-area] [data-row-key^="workspace:"] span[class*="_folder"]:has(> .dsh-ui-project-icon) > svg {\n  display: none;\n}\n\n[data-sidebar-list-area] [data-row-key^="workspace:"]:has(.dsh-ui-project-icon) > span[class*="_chevron"] {\n  display: none;\n}\n\n[data-sidebar-list-area] [data-row-key^="workspace:"] > span[class*="_projectText"]:has(> .dsh-ui-project-chevron) {\n  flex-direction: row;\n  align-items: center;\n  gap: 5px;\n}\n\n.dsh-ui-project-chevron {\n  width: 12px;\n  height: 12px;\n  color: var(--dsh-ui-sidebar-muted-foreground);\n  transition: transform var(--dsh-ui-list-motion);\n}\n\n[data-row-key^="workspace:"][aria-expanded="true"] .dsh-ui-project-chevron {\n  transform: rotate(90deg);\n}\n\n.dsh-ui-project-icon {\n  flex: none;\n  justify-content: flex-start;\n  inline-size: 22px;\n  min-block-size: 20px;\n  padding: 0;\n  color: var(--dsh-ui-accent);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateX(-4px) scale(.88);\n  transition: transform var(--dsh-ui-list-motion), opacity var(--dsh-ui-motion), visibility var(--dsh-ui-motion),\n    background-color var(--dsh-ui-motion);\n}\n\n.dsh-ui-project-icon:hover:enabled,\n.dsh-ui-project-icon[aria-expanded="true"] {\n  background-color: color-mix(in srgb, var(--dsh-ui-accent-surface) 35%, transparent);\n}\n\n[data-row-key^="workspace:"][aria-expanded="true"] .dsh-ui-project-icon {\n  opacity: 1;\n  visibility: visible;\n  transform: none;\n}\n\n.dsh-ui-project-menu {\n  width: min(190px, calc(100vw - 16px));\n  padding: 4px;\n}\n\n.dsh-ui-project-menu .dsh-ui-project-option {\n  display: grid;\n  grid-template-columns: 17px minmax(0, 1fr) 14px;\n  align-items: center;\n  gap: 7px;\n  min-height: 30px;\n}\n\n.dsh-ui-session-status-mark {\n  position: relative;\n  flex: none;\n  width: 14px;\n  height: 14px;\n  color: var(--dsh-ui-accent);\n  opacity: 1;\n  transform: none;\n  transition: opacity 175ms var(--dsh-ui-ease), transform var(--dsh-ui-list-motion), color var(--dsh-ui-list-motion);\n}\n\n@starting-style {\n  .dsh-ui-session-status-mark { opacity: 0; transform: translateX(-4px) scale(.86); }\n}\n\n.dsh-ui-session-status-mark[data-status="waiting"] { color: var(--dsh-ui-session-waiting); }\n.dsh-ui-session-status-mark[data-status="unread"] { color: var(--dsh-ui-session-unread); }\n\n.dsh-ui-session-dot {\n  position: absolute;\n  inset: 50% auto auto 50%;\n  width: 5px;\n  height: 5px;\n  translate: -50% -50%;\n  scale: .52;\n  border-radius: 50%;\n  background: currentColor;\n  transition: scale var(--dsh-ui-list-motion), opacity var(--dsh-ui-motion);\n}\n.dsh-ui-session-status-mark[data-status="waiting"] .dsh-ui-session-dot { opacity: 0; scale: .2; }\n.dsh-ui-session-status-mark[data-status="unread"] .dsh-ui-session-dot { scale: 1; }\n.dsh-ui-run-rays { position: absolute; inset: 0; opacity: 0; }\n.dsh-ui-run-rays::before, .dsh-ui-run-rays::after {\n  position: absolute;\n  inset: 50% auto auto 50%;\n  width: 1.35px;\n  height: 10.5px;\n  transform: translate(-50%, -50%);\n  border-radius: 999px;\n  background: currentColor;\n  content: "";\n}\n.dsh-ui-run-rays::after { width: 10.5px; height: 1.35px; }\n.dsh-ui-run-diagonals::before { height: 9px; }\n.dsh-ui-run-diagonals::after { width: 9px; }\n.dsh-ui-run-ripple, .dsh-ui-run-orbit { position: absolute; inset: 1px; opacity: 0; }\n.dsh-ui-run-ripple { border: 1.15px solid currentColor; border-radius: 50%; }\n.dsh-ui-run-orbit::before, .dsh-ui-run-orbit::after {\n  position: absolute;\n  inset-block-start: 50%;\n  width: 2.7px;\n  height: 2.7px;\n  translate: 0 -50%;\n  border-radius: 50%;\n  background: currentColor;\n  content: "";\n}\n.dsh-ui-run-orbit::before { inset-inline-start: 0; }\n.dsh-ui-run-orbit::after { inset-inline-end: 0; width: 2.3px; height: 2.3px; opacity: .76; }\n.dsh-ui-session-status-mark[data-status="running"] { --run-cycle: 4.8s ease-in-out infinite; }\n.dsh-ui-session-status-mark[data-status="running"] .dsh-ui-session-dot { animation: dsh-ui-run-core var(--run-cycle); }\n.dsh-ui-session-status-mark[data-status="running"] .dsh-ui-run-cross { animation: dsh-ui-run-cross var(--run-cycle); }\n.dsh-ui-session-status-mark[data-status="running"] .dsh-ui-run-diagonals { animation: dsh-ui-run-diagonals var(--run-cycle); }\n.dsh-ui-session-status-mark[data-status="running"] .dsh-ui-run-ripple { animation: dsh-ui-run-ripple var(--run-cycle); }\n.dsh-ui-session-status-mark[data-status="running"] .dsh-ui-run-orbit { animation: dsh-ui-run-orbit var(--run-cycle); }\n@keyframes dsh-ui-run-core {\n  0%, 100% { scale: .52; }\n  18% { scale: .62; }\n  36% { scale: .68; }\n  58% { scale: .48; }\n  78% { scale: .43; }\n  95% { scale: .54; }\n}\n@keyframes dsh-ui-run-cross {\n  0%, 3%, 100% { transform: rotate(0deg) scale(.18); opacity: 0; }\n  11% { transform: rotate(-9deg) scale(.82); opacity: .82; }\n  18% { transform: rotate(7deg) scale(1); opacity: 1; }\n  26% { transform: rotate(19deg) scale(.77); opacity: .8; }\n  36%, 99% { transform: rotate(29deg) scale(.19); opacity: 0; }\n}\n@keyframes dsh-ui-run-diagonals {\n  0%, 8%, 100% { transform: rotate(38deg) scale(.18); opacity: 0; }\n  18%, 21% { transform: rotate(51deg) scale(.97); opacity: .83; }\n  28% { transform: rotate(64deg) scale(.67); opacity: .5; }\n  36%, 99% { transform: rotate(73deg) scale(.18); opacity: 0; }\n}\n@keyframes dsh-ui-run-ripple {\n  0%, 28% { transform: scale(.24); opacity: 0; }\n  39% { transform: scale(.48); opacity: .89; }\n  54% { transform: scale(.94); opacity: .69; }\n  68%, 100% { transform: scale(1.08); opacity: 0; }\n}\n@keyframes dsh-ui-run-orbit {\n  0%, 57% { transform: rotate(-53deg) scale(.46); opacity: 0; }\n  69% { transform: rotate(6deg) scale(.91); opacity: .91; }\n  83% { transform: rotate(135deg) scale(.93); opacity: .86; }\n  96%, 100% { transform: rotate(219deg) scale(.14); opacity: 0; }\n}\n.dsh-ui-wait-bars {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  grid-auto-flow: column;\n  place-content: center;\n  gap: 2.6px;\n  opacity: 0;\n  scale: .72;\n  transition: opacity var(--dsh-ui-motion), scale var(--dsh-ui-list-motion);\n}\n.dsh-ui-wait-bars::before, .dsh-ui-wait-bars::after {\n  width: 1.55px;\n  height: 7px;\n  border-radius: 999px;\n  background: currentColor;\n  content: "";\n}\n.dsh-ui-session-status-mark[data-status="waiting"] .dsh-ui-wait-bars { opacity: 1; scale: 1; }\n.dsh-ui-session-status-mark[data-status="waiting"] .dsh-ui-wait-bars::before,\n.dsh-ui-session-status-mark[data-status="waiting"] .dsh-ui-wait-bars::after { animation: dsh-ui-wait-breathe 2.4s ease-in-out infinite; }\n.dsh-ui-session-status-mark[data-status="waiting"] .dsh-ui-wait-bars::after { animation-delay: -1.2s; }\n@keyframes dsh-ui-wait-breathe {\n  0%, 7%, 93%, 100% { scale: 1 .55; opacity: .58; }\n  44%, 56% { scale: 1 1.22; opacity: 1; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  button.dsh-ui-sidebar-new[class*="_newSession"],\n  .dsh-ui-sidebar-search, .dsh-ui-sidebar-recents, .dsh-ui-pinned-heading, .dsh-ui-pinned-heading .dsh-ui-icon,\n  .dsh-ui-pinned-group::details-content, .dsh-ui-pinned-chat, button.dsh-ui-history-row,\n  [data-sidebar-scrollport] nav[class*="_panelList"] button[class*="_panelRow"],\n  [data-sidebar-list-area] [data-row-key][role="treeitem"],\n  [data-sidebar-list-area] span[class*="_slot"],\n  [data-sidebar-list-area] span[class*="_folder"],\n  .dsh-ui-project-icon, .dsh-ui-project-chevron, .dsh-ui-session-status-mark { transition: none; }\n\n  .dsh-ui-session-status-mark *,\n  .dsh-ui-session-status-mark *::before,\n  .dsh-ui-session-status-mark *::after { animation: none !important; transition: none; }\n\n  .dsh-ui-session-status-mark[data-status="running"] .dsh-ui-run-cross { opacity: 1; }\n}\n';

// src/client/transcript.css
var transcript_default = '[data-chat-flow] [data-step-process]:has(> [data-dsh-ui-process-host] > .dsh-ui-work-batch) [data-dsh-ui-replaced-process],\n[data-chat-flow] [data-dsh-ui-replaced-process]:has(> [data-dsh-ui-process-host] > .dsh-ui-work-batch) > [data-slot="conversation.chat.node"],\n[data-chat-flow] [data-dsh-ui-replaced-group]:has(> [data-dsh-ui-process-host] > .dsh-ui-work-batch) > :not([data-dsh-ui-process-host]),\n[data-chat-flow] [data-dsh-ui-automatic-context],\n[data-chat-flow] [data-step-process] button[data-dsh-ui-detail-label] > *,\n[data-chat-flow] [data-chat-flow-kind="turn-process"]:has([data-dsh-ui-process-anchor]:only-child),\n[data-chat-flow] [data-chat-running]:has(> [data-dsh-ui-running-ready]) > span,\n[data-chat-flow] [data-chat-running]:has(> [data-dsh-ui-running-ready]):not(:has(> .dsh-ui-thinking)),\n.dsh-ui-turn-process:empty {\n  display: none;\n}\n\n[data-chat-flow] [data-chat-running]:has(> .dsh-ui-thinking) {\n  --dsh-chat-flow-gap: 0px;\n}\n\n[data-dsh-ui-note] > [data-slot="conversation.chat.node"] > div {\n  font-size: calc(15px + var(--dsh-content-font-delta, 0px));\n}\n\n.dsh-ui-turn-process {\n  min-width: 0;\n  color: var(--dsh-ui-text-muted);\n  font: 400 13px / 1.5 var(--dsh-ui-font);\n}\n\n.dsh-ui-work-batch + .dsh-ui-work-batch { margin-block-start: 10px; }\n\n.dsh-ui-tool-group {\n  min-width: 0;\n  margin-block: 1px 0;\n  animation: dsh-ui-tool-arrive var(--dsh-ui-motion) both;\n}\n\n:is(.dsh-ui-tool-group, .dsh-ui-reasoning, [data-chat-flow-kind="model-retry"] details) {\n  interpolate-size: allow-keywords;\n}\n\n:is(.dsh-ui-tool-group, .dsh-ui-reasoning, [data-chat-flow-kind="model-retry"] details)::details-content {\n  block-size: 0;\n  opacity: 0;\n  overflow: clip;\n  transition: block-size var(--dsh-ui-motion), opacity var(--dsh-ui-motion),\n    content-visibility var(--dsh-ui-motion) allow-discrete;\n}\n\n:is(.dsh-ui-tool-group, .dsh-ui-reasoning, [data-chat-flow-kind="model-retry"] details)[open]::details-content {\n  block-size: auto;\n  opacity: 1;\n}\n\n:is(.dsh-ui-tool-summary, .dsh-ui-reasoning-summary, .dsh-ui-process-toggle,\n  button[data-dsh-ui-detail-label], [data-chat-flow-kind="model-retry"] summary) {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  width: fit-content;\n  max-width: 100%;\n  min-height: 24px;\n  padding: 0 4px 0 0;\n  border: 0;\n  border-radius: 5px;\n  background: transparent;\n  color: var(--dsh-ui-text-muted);\n  font: 400 13px / 1.5 var(--dsh-ui-font);\n  text-align: start;\n  list-style: none;\n  cursor: pointer;\n}\n\n:is(.dsh-ui-tool-summary, .dsh-ui-reasoning-summary)::-webkit-details-marker { display: none; }\n\n:is(.dsh-ui-tool-summary, .dsh-ui-reasoning-summary, .dsh-ui-process-toggle,\n  button[data-dsh-ui-detail-label], [data-chat-flow-kind="model-retry"] summary):hover {\n  color: var(--dsh-ui-text);\n  background: var(--dsh-ui-muted);\n}\n\n.dsh-ui-tool-summary-text, .dsh-ui-tool-live-detail, .dsh-ui-tool-name, .dsh-ui-tool-target code {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.dsh-ui-tool-summary-text { flex-shrink: 0; max-inline-size: min(64ch, 70%); }\n\n.dsh-ui-tool-summary:not(:has(.dsh-ui-tool-live-detail)) .dsh-ui-tool-summary-text {\n  flex-shrink: 1;\n  max-inline-size: none;\n}\n\n.dsh-ui-tool-live-detail {\n  color: var(--dsh-ui-icon-muted);\n  animation: dsh-ui-live-detail-in 240ms var(--dsh-ui-ease) both;\n}\n\n@keyframes dsh-ui-live-detail-in { from { opacity: 0; translate: -3px 0; } }\n\n:is(.dsh-ui-tool-summary, .dsh-ui-reasoning-summary, .dsh-ui-process-toggle) > .dsh-ui-icon {\n  flex: none;\n  width: 11px;\n  height: 11px;\n  transition: transform var(--dsh-ui-motion);\n}\n\ndetails[open] > :is(.dsh-ui-tool-summary, .dsh-ui-reasoning-summary) > .dsh-ui-icon,\n.dsh-ui-process-toggle[aria-expanded="true"] > .dsh-ui-icon,\n.dsh-ui-tool-target[aria-expanded="true"] > .dsh-ui-icon { transform: rotate(90deg); }\n\n[data-step-process] button[data-dsh-ui-detail-label]::before {\n  content: attr(data-dsh-ui-detail-label);\n}\n\n[data-step-process] button[data-dsh-ui-detail-label]::after,\n[data-chat-flow-kind="model-retry"] details > summary::after {\n  box-sizing: border-box;\n  flex: none;\n  width: 6px;\n  height: 6px;\n  margin-inline: 2px;\n  border: solid currentColor;\n  border-width: 0 1px 1px 0;\n  content: "";\n  transform: rotate(-45deg);\n  transition: transform var(--dsh-ui-motion);\n}\n\nbutton[data-dsh-ui-detail-label][aria-expanded="true"]::after,\n[data-chat-flow-kind="model-retry"] details[open] > summary::after { transform: rotate(45deg); }\n\n[data-chat-flow-kind="model-retry"] details > div {\n  margin: 2px 0 6px 5px;\n  padding: 2px 0 2px 11px;\n  border-inline-start: 1px solid var(--dsh-ui-border);\n  color: var(--dsh-ui-text-muted);\n  font: 400 12px / 1.6 var(--dsh-ui-font);\n}\n\n[data-chat-flow-kind="model-retry"] details[data-active] > summary::before {\n  flex: none;\n  width: 5px;\n  height: 5px;\n  margin-inline: 3px 2px;\n  border-radius: 50%;\n  background: var(--dsh-ui-session-unread);\n  content: "";\n  animation: dsh-ui-thinking-breathe 1.25s ease-in-out infinite;\n}\n\n:is(.dsh-ui-tools, .dsh-ui-reasoning-log) {\n  box-sizing: border-box;\n  max-block-size: min(24rem, 45vh);\n  overflow: auto;\n  align-content: start;\n}\n\n.dsh-ui-tools {\n  display: grid;\n  gap: 7px;\n  margin: 2px 0 6px 5px;\n  padding: 2px 0 2px 11px;\n  border-inline-start: 1px solid var(--dsh-ui-border);\n}\n\n.dsh-ui-tool-item { min-width: 0; }\n.dsh-ui-tool-item[data-nested] { margin-inline-start: 12px; }\n\n.dsh-ui-tool-heading {\n  display: grid;\n  grid-template-columns: 14px minmax(0, 1fr) 18px max-content;\n  align-items: center;\n  gap: 6px;\n  min-height: 24px;\n  font: 400 13px / 1.4 var(--dsh-ui-font);\n}\n\n.dsh-ui-tool-heading > .dsh-ui-icon, .dsh-ui-tool-mark > .dsh-ui-icon {\n  width: 14px;\n  height: 14px;\n}\n\n.dsh-ui-tool-item:is([data-state="running"], [data-state="preparing"]) .dsh-ui-tool-heading > .dsh-ui-icon {\n  color: var(--dsh-ui-accent);\n}\n\n.dsh-ui-tool-title { min-width: 0; }\n.dsh-ui-tool-name { display: block; color: var(--dsh-ui-text); }\n.dsh-ui-tool-targets { display: flex; flex-wrap: wrap; gap: 0 8px; }\n\n.dsh-ui-tool-target {\n  display: inline-flex;\n  align-items: center;\n  max-width: 100%;\n  min-height: 18px;\n  margin-inline-start: -3px;\n  padding: 0 3px;\n  gap: 3px;\n  border: 0;\n  border-radius: 4px;\n  background: transparent;\n  color: var(--dsh-ui-text-muted);\n  text-align: start;\n  font: 400 11px / 1.45 ui-monospace, monospace;\n  cursor: pointer;\n}\n\n.dsh-ui-tool-target > .dsh-ui-icon { flex: none; width: 10px; height: 10px; opacity: .72; }\n.dsh-ui-tool-target:is(:hover, :focus-visible) { color: var(--dsh-ui-accent); background: var(--dsh-ui-muted); }\n.dsh-ui-tool-state { font-size: 11px; white-space: nowrap; }\n.dsh-ui-tool-item[data-state="error"] .dsh-ui-tool-state { color: var(--dsh-ui-danger); }\n.dsh-ui-tool-mark { display: grid; place-items: center; }\n.dsh-ui-tool-mark > .dsh-ui-icon { color: var(--dsh-ui-running-foreground); }\n\n.dsh-ui-tool-output, .dsh-ui-tool-detail {\n  margin: 2px 0 0 20px;\n  font: 400 12px / 1.55 var(--dsh-ui-font);\n  overflow-wrap: anywhere;\n}\n\n.dsh-ui-tool-detail { display: grid; gap: 4px; justify-items: start; }\n.dsh-ui-tool-detail pre {\n  box-sizing: border-box;\n  max-width: 100%;\n  max-height: 300px;\n  margin: 0;\n  padding: 6px 8px;\n  overflow: auto;\n  border-radius: 5px;\n  background: var(--dsh-ui-muted);\n  color: var(--dsh-ui-text);\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n\n.dsh-ui-reasoning-summary { min-height: 26px; }\n.dsh-ui-reasoning-summary > .dsh-ui-icon { width: 12px; height: 12px; }\n.dsh-ui-reasoning-log {\n  display: grid;\n  gap: 8px;\n  margin: 1px 0 9px 3px;\n  padding: 3px 0 3px 13px;\n  border-inline-start: 1px solid var(--dsh-ui-border);\n  font: 400 12px / 1.75 var(--dsh-ui-font);\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n\n.dsh-ui-tool-signal {\n  --signal-motion: 350ms cubic-bezier(.22, .76, .28, 1);\n  --signal-low-x: .55;\n  --signal-low-y: .65;\n  position: relative;\n  display: block;\n  inline-size: 18px;\n  block-size: 14px;\n  flex: none;\n  color: var(--dsh-ui-accent);\n  transition: color var(--signal-motion), inline-size var(--signal-motion),\n    margin-inline-end var(--signal-motion), opacity 200ms var(--dsh-ui-ease);\n}\n\n.dsh-ui-tool-summary > .dsh-ui-tool-signal:not([data-active]) {\n  inline-size: 0;\n  margin-inline-end: -5px;\n  opacity: 0;\n}\n\n.dsh-ui-tool-signal > span {\n  --signal-x: -5px;\n  --signal-y: 0px;\n  --signal-w: 3.5px;\n  --signal-h: 3.5px;\n  position: absolute;\n  inset-block-start: 50%;\n  inset-inline-start: 9px;\n  inline-size: var(--signal-w);\n  block-size: var(--signal-h);\n  translate: calc(var(--signal-x) - 50%) calc(var(--signal-y) - 50%);\n  rotate: var(--signal-tilt, 0deg);\n  transition: inline-size var(--signal-motion), block-size var(--signal-motion),\n    translate var(--signal-motion), rotate var(--signal-motion);\n}\n\n.dsh-ui-tool-signal > span:nth-child(2) { --signal-x: 0px; --signal-delay: -130ms; }\n.dsh-ui-tool-signal > span:nth-child(3) { --signal-x: 5px; --signal-delay: -260ms; }\n\n.dsh-ui-tool-signal > span::before {\n  display: block;\n  inline-size: 100%;\n  block-size: 100%;\n  border-radius: 2px;\n  background: currentColor;\n  content: "";\n  animation: dsh-ui-tool-wave 1.1s ease-in-out var(--signal-delay, 0ms) infinite paused;\n}\n\n.dsh-ui-tool-signal[data-active] > span::before { animation-play-state: running; }\n\n.dsh-ui-tool-signal[data-category="command"] { --signal-low-x: 1; --signal-low-y: .42; }\n.dsh-ui-tool-signal[data-category="command"] > span { --signal-w: 3px; --signal-h: 8px; --signal-y: 0px; }\n.dsh-ui-tool-signal[data-category="command"] > span:nth-child(2) { --signal-h: 11px; --signal-y: -1.5px; }\n.dsh-ui-tool-signal[data-category="command"] > span:nth-child(3) { --signal-h: 6px; --signal-y: 1px; }\n.dsh-ui-tool-signal[data-category="command"] > span::before {\n  transform-origin: bottom;\n}\n\n.dsh-ui-tool-signal[data-category="read"] {\n  --signal-low-x: .48;\n  --signal-low-y: 1;\n  color: var(--dsh-ui-context-message);\n}\n.dsh-ui-tool-signal[data-category="read"] > span { --signal-w: 12px; --signal-h: 2px; --signal-x: 0px; --signal-y: -4px; }\n.dsh-ui-tool-signal[data-category="read"] > span:nth-child(2) { --signal-w: 10px; --signal-x: -1px; --signal-y: 0px; }\n.dsh-ui-tool-signal[data-category="read"] > span:nth-child(3) { --signal-w: 8px; --signal-x: -2px; --signal-y: 4px; }\n.dsh-ui-tool-signal[data-category="read"] > span::before { transform-origin: left; }\n\n.dsh-ui-tool-signal[data-category="search"] { color: var(--dsh-ui-session-waiting); }\n.dsh-ui-tool-signal[data-category="search"] > span:nth-child(2) { --signal-w: 5px; --signal-h: 5px; }\n.dsh-ui-tool-signal:is([data-category="write"], [data-category="diff"]) { color: var(--dsh-ui-running-foreground); }\n.dsh-ui-tool-signal:is([data-category="write"], [data-category="diff"]) > span {\n  --signal-w: 5px;\n  --signal-h: 2.5px;\n  --signal-tilt: -35deg;\n}\n.dsh-ui-tool-signal:is([data-category="write"], [data-category="diff"]) > span:first-child { --signal-y: 2.5px; }\n.dsh-ui-tool-signal:is([data-category="write"], [data-category="diff"]) > span:last-child { --signal-y: -2.5px; }\n.dsh-ui-tool-signal[data-category="review"] { color: var(--dsh-ui-focus); }\n.dsh-ui-tool-signal[data-category="review"] > span:first-child { --signal-x: -4px; --signal-y: 3px; }\n.dsh-ui-tool-signal[data-category="review"] > span:nth-child(2) { --signal-y: -4px; }\n.dsh-ui-tool-signal[data-category="review"] > span:last-child { --signal-x: 4px; --signal-y: 3px; }\n\n@keyframes dsh-ui-tool-wave {\n  0%, 100% {\n    scale: var(--signal-low-x) var(--signal-low-y);\n    background-color: color-mix(in srgb, currentColor 64%, var(--dsh-ui-canvas));\n  }\n  54% { scale: 1; background-color: currentColor; }\n}\n\n[data-chat-flow] {\n  --compact-motion: dsh-ui-compact-gather 1.5s var(--dsh-ui-ease) infinite;\n  --compact-settle: var(--dsh-ui-motion);\n\n  @media (prefers-reduced-motion: reduce) {\n    --compact-motion: none;\n    --compact-settle: 0s;\n  }\n\n  & :where(.dsh-ui-compaction-signal, [data-compaction-icon="context"],\n    :is([data-chat-flow-kind="manual-compaction"], [data-chat-flow-kind="compaction"])\n      [data-state="running"][data-variant="others"] [data-disclosure-row] > span:has(> svg[data-icon="dsw-icon-api-outline-regular"])) {\n    position: relative;\n\n    & > svg { opacity: 0; }\n\n    &::before {\n      position: absolute;\n      inset: 0;\n      inline-size: 16px;\n      block-size: 14px;\n      margin: auto;\n      color: var(--dsh-ui-accent);\n      background-image: linear-gradient(currentColor 0 0),\n        linear-gradient(color-mix(in srgb, currentColor 67%, transparent) 0 0),\n        linear-gradient(color-mix(in srgb, currentColor 49%, transparent) 0 0);\n      background-position: 5px 6px, 1px 2px, 10px 10px;\n      background-size: 7px 2px, 7px 2px, 5px 2px;\n      background-repeat: no-repeat;\n      pointer-events: none;\n      animation: var(--compact-motion);\n      content: "";\n    }\n  }\n\n  & :is([data-chat-flow-kind="manual-compaction"], [data-chat-flow-kind="compaction"])\n    [data-state="running"][data-variant="others"]\n    [data-disclosure-row] > [data-shimmer] > [aria-hidden="true"][inert] { display: none; }\n\n  & [data-compaction-icon="context"]::before {\n    background-image: linear-gradient(currentColor 0 0),\n      linear-gradient(color-mix(in srgb, currentColor 57%, transparent) 0 0);\n    background-position: 2px 5px, 2px 9px;\n    background-size: 12px 2px, 7px 2px;\n    animation: none;\n    transition: opacity var(--compact-settle), scale var(--compact-settle);\n    @starting-style { opacity: .48; scale: .8 1; }\n  }\n}\n\n.dsh-ui-compaction-signal { inline-size: 16px; block-size: 14px; flex: none; }\n\n/* When the turn shows its live cue, the process group keeps only the outcome. */\n[data-chat-flow]:has(.dsh-ui-compaction-cue)\n  [data-chat-flow-kind="compaction"]:has([data-state="running"][data-variant="others"]) {\n  display: none;\n}\n\n@keyframes dsh-ui-compact-gather {\n  0%, 100% {\n    background-position: 5px 6px, 1px 2px, 10px 10px;\n    background-size: 7px 2px, 7px 2px, 5px 2px;\n    opacity: .8;\n  }\n  34% {\n    background-position: 4px 6px, 3px 4px, 7px 8px;\n    background-size: 8px 2px, 7px 2px, 6px 2px;\n    opacity: 1;\n  }\n  53%, 69% {\n    background-position: 2px 6px, 2px 6px, 2px 6px;\n    background-size: 12px 2px, 12px 2px, 12px 2px;\n    opacity: 1;\n  }\n}\n\n@keyframes dsh-ui-tool-arrive { from { opacity: 0; translate: 0 4px; } }\n\n.dsh-ui-thinking {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 26px;\n  margin-block: 0 5px;\n  color: var(--dsh-ui-text-muted);\n  font: 400 13px / 1.5 var(--dsh-ui-font);\n}\n\n.dsh-ui-thinking-dots {\n  position: relative;\n  flex: none;\n  width: 29px;\n  height: 24px;\n  color: var(--dsh-ui-accent);\n}\n\n.dsh-ui-thinking[data-phase="waiting"] .dsh-ui-thinking-dots { color: var(--dsh-ui-session-waiting); }\n.dsh-ui-thinking-dots > span {\n  position: absolute;\n  inset: calc(50% - 1.75px) auto auto calc(50% - 1.75px);\n  width: 3.5px;\n  height: 3.5px;\n  border-radius: 50%;\n  transition: transform 560ms cubic-bezier(.2, .72, .26, 1), opacity 480ms var(--dsh-ui-ease);\n}\n\n.dsh-ui-thinking-dots > span::before {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: inherit;\n  background: currentColor;\n  animation: dsh-ui-thinking-breathe 1.45s ease-in-out infinite;\n  content: "";\n}\n\n.dsh-ui-thinking-dots > span:nth-child(2)::before { animation-delay: 115ms; }\n.dsh-ui-thinking-dots > span:nth-child(3)::before { animation-delay: 230ms; }\n.dsh-ui-thinking-dots > span:nth-child(4)::before { animation-delay: 345ms; }\n\n@keyframes dsh-ui-thinking-breathe {\n  0%, 100% { scale: .84; opacity: .6; }\n  53% { scale: 1.08; opacity: 1; }\n}\n\n.dsh-ui-thinking-words { display: grid; min-width: 0; white-space: nowrap; }\n.dsh-ui-thinking-words > span {\n  --dsh-ui-word-shimmer: dsh-ui-preview-shimmer 1.65s ease-in-out infinite;\n  grid-area: 1 / 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background: linear-gradient(106deg, var(--dsh-ui-text-muted) 36%, var(--dsh-ui-text) 50%, var(--dsh-ui-text-muted) 64%) 100% center / 225% 100%;\n  background-clip: text;\n  color: transparent;\n  animation: var(--dsh-ui-word-shimmer);\n}\n\n.dsh-ui-thinking-words > [data-word-enter] {\n  animation: var(--dsh-ui-word-shimmer), dsh-ui-thinking-in 200ms cubic-bezier(.25, .62, .28, 1) 85ms both;\n}\n.dsh-ui-thinking-words > [data-word-exit] {\n  animation: var(--dsh-ui-word-shimmer), dsh-ui-thinking-out 135ms var(--dsh-ui-ease) both;\n}\n\n@keyframes dsh-ui-preview-shimmer { to { background-position: 0 center; } }\n@keyframes dsh-ui-thinking-in { from { opacity: 0; translate: 0 2px; filter: blur(.65px); } }\n@keyframes dsh-ui-thinking-out { to { opacity: 0; translate: 0 -2px; filter: blur(.65px); } }\n\n:is([data-question-key], [data-plan-review-key], [data-approval-key]) > :is(section, div[class*="_card"]) {\n  border: 1px solid var(--dsh-ui-border);\n  border-radius: 12px;\n  background: var(--dsh-ui-surface);\n  box-shadow: 0 2px 8px color-mix(in srgb, var(--dsh-ui-text) 8%, transparent);\n  font-family: var(--dsh-ui-font);\n  transition: background-color var(--dsh-ui-motion), border-color var(--dsh-ui-motion), box-shadow var(--dsh-ui-motion);\n}\n\n[data-question-key] > section { container-type: inline-size; }\n[data-question-key] > section > header::before,\n:is([data-plan-review-key], [data-approval-key]) [class*="_strip"] > [data-state="warning"] {\n  flex: 0 0 6px;\n  width: 6px !important;\n  height: 6px !important;\n  border-radius: 50%;\n  background: var(--dsh-ui-session-waiting);\n  box-shadow: 0 0 0 2px color-mix(in srgb, var(--dsh-ui-session-waiting) 13%, transparent);\n  animation: dsh-ui-thinking-breathe 1.4s ease-in-out infinite;\n}\n[data-question-key] > section > header::before { margin-top: 7px; content: ""; }\n:is([data-plan-review-key], [data-approval-key]) [class*="_strip"] { color: var(--dsh-ui-session-waiting); }\n\n[data-question-key] [data-question-scroll] > :is([role="radiogroup"], [role="group"]):has(> [data-option-row]) {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 2px 8px;\n}\n\n[data-question-key] [data-option-row] {\n  min-width: 0;\n  border-radius: 7px;\n  transition: background-color var(--dsh-ui-motion), border-color var(--dsh-ui-motion), color var(--dsh-ui-motion);\n}\n\n[data-question-key] [data-option-row]:hover { background: var(--dsh-ui-muted); }\n[data-question-key] [data-option-row]:has([aria-checked="true"]) {\n  background: color-mix(in srgb, var(--dsh-ui-accent-surface) 68%, transparent);\n  color: var(--dsh-ui-accent-surface-foreground);\n  border-color: var(--dsh-ui-accent-surface);\n}\n\n[data-question-key] [data-option-row] [role="radio"] > span[class*="_number"] {\n  display: grid;\n  place-items: center;\n  flex: 0 0 14px;\n  width: 14px;\n  height: 14px;\n  margin-block-start: 3px;\n  border: 1px solid var(--dsh-ui-icon-muted);\n  border-radius: 50%;\n  corner-shape: round;\n  font-size: 0;\n  background: transparent;\n  transition: border-color var(--dsh-ui-motion);\n}\n\n[data-question-key] [role="radio"] > span[class*="_number"]::after {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--dsh-ui-accent);\n  scale: .35;\n  opacity: 0;\n  transition: scale var(--dsh-ui-motion), opacity var(--dsh-ui-motion);\n  content: "";\n}\n\n[data-question-key] [role="radio"][aria-checked="true"] > span[class*="_number"] { border-color: var(--dsh-ui-accent); }\n[data-question-key] [role="radio"][aria-checked="true"] > span[class*="_number"]::after { scale: 1; opacity: 1; }\n[data-question-key] [data-option-description] { display: block; margin-block-start: 1px; }\n[data-question-key] [class*="_customRow"] { grid-column: 1 / -1; }\n\n@container (max-width: 450px) {\n  [data-question-key] [data-question-scroll] > :is([role="radiogroup"], [role="group"]):has(> [data-option-row]) {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  :is(.dsh-ui-tool-group, .dsh-ui-reasoning, [data-chat-flow-kind="model-retry"] details)::details-content,\n  :is(.dsh-ui-tool-summary, .dsh-ui-reasoning-summary, .dsh-ui-process-toggle) > .dsh-ui-icon,\n  button[data-dsh-ui-detail-label]::after,\n  [data-chat-flow-kind="model-retry"] summary::after {\n    transition: none;\n  }\n  .dsh-ui-thinking-dots > span, .dsh-ui-thinking-dots > span::before,\n  .dsh-ui-thinking-words > span, .dsh-ui-tool-signal,\n  .dsh-ui-tool-signal > span, .dsh-ui-tool-signal > span::before,\n  .dsh-ui-tool-group, .dsh-ui-tool-live-detail,\n  [data-chat-flow-kind="model-retry"] summary::before,\n  [data-question-key] > section > header::before,\n  :is([data-plan-review-key], [data-approval-key]) [class*="_strip"] > [data-state="warning"] {\n    animation: none;\n    transition: none;\n  }\n  .dsh-ui-thinking-words > span { background: none; color: inherit; }\n}\n';

// src/client/overview.css
var overview_default = '.dsh-ui-overview {\n  box-sizing: border-box;\n  flex: 1 1 0;\n  height: 100%;\n  min-height: 0;\n  overflow: auto;\n  overscroll-behavior: contain;\n  scrollbar-width: thin;\n  color: var(--dsh-ui-text);\n  background: var(--dsh-ui-surface);\n  padding: 0 17px 15px;\n  font: 400 13px / 1.5 var(--dsh-ui-font);\n}\n\n@keyframes dsh-ui-inspector-arrive { from { opacity: .4; translate: 0 4px; } }\n\n.dsh-ui-inspector-heading { margin: 12px 0 1px; }\n.dsh-ui-inspector-heading h2 { margin: 0; font-size: 16px; font-weight: 500; }\n\n[data-slot="conversation.input.dock"] [data-testid="todo-panel"]:not([class*="_embeddedBody"] *) { display: none; }\n\n.dsh-ui-task-shortcut {\n  width: 28px;\n  min-height: 28px;\n  padding: 0;\n  color: var(--dsh-ui-icon-muted);\n  animation: dsh-ui-inspector-arrive var(--dsh-ui-motion) both;\n}\n\n.dsh-ui-session-tasks {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  grid-template-rows: 1fr;\n  margin-block-start: 10px;\n  transition: grid-template-rows var(--dsh-ui-list-motion), opacity var(--dsh-ui-motion);\n}\n\n.dsh-ui-task-card {\n  min-height: 0;\n  overflow: hidden;\n  border: 1px solid var(--dsh-ui-border);\n  border-radius: 10px;\n  background: color-mix(in srgb, var(--dsh-ui-muted) 24%, var(--dsh-ui-surface));\n}\n\n.dsh-ui-task-card h3 { margin: 0; font-size: 14px; font-weight: 500; }\n\n.dsh-ui-task-toggle {\n  display: grid;\n  grid-template-columns: 16px auto minmax(0, 1fr) 13px;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  min-height: 36px;\n  padding: 6px 9px;\n  text-align: start;\n}\n\n.dsh-ui-task-toggle > svg:first-child { color: var(--dsh-ui-icon-muted); }\n.dsh-ui-task-toggle small { text-align: end; white-space: normal; text-wrap: pretty; }\n\n.dsh-ui-task-progress {\n  height: 3px;\n  overflow: hidden;\n  margin: 0 10px 8px;\n  border-radius: 999px;\n  background: var(--dsh-ui-border);\n}\n\n.dsh-ui-task-progress-fill {\n  display: block;\n  width: var(--dsh-ui-task-completion);\n  height: 100%;\n  border-radius: inherit;\n  background: var(--dsh-ui-accent);\n  transition: width var(--dsh-ui-list-motion), background-color var(--dsh-ui-motion);\n}\n\n.dsh-ui-task-list {\n  display: grid;\n  gap: 2px;\n  padding: 0 5px 5px;\n  margin: 0;\n  list-style: none;\n}\n\n.dsh-ui-task-row {\n  display: grid;\n  grid-template-columns: 16px minmax(0, 1fr);\n  align-items: start;\n  gap: 6px;\n  padding: 4px 5px;\n  border-radius: 5px;\n  color: var(--dsh-ui-text-muted);\n  overflow-wrap: anywhere;\n  animation: dsh-ui-inspector-arrive var(--dsh-ui-motion) both;\n  transition: background-color var(--dsh-ui-motion), color var(--dsh-ui-motion);\n}\n\n.dsh-ui-task-row[data-task-status="in_progress"] {\n  color: var(--dsh-ui-text);\n  background: color-mix(in srgb, var(--dsh-ui-accent-surface) 30%, transparent);\n}\n\n.dsh-ui-task-state {\n  display: grid;\n  place-items: center;\n  width: 16px;\n  height: 1lh;\n  color: var(--dsh-ui-icon-muted);\n}\n\n.dsh-ui-task-state > * {\n  grid-area: 1 / 1;\n  transition: opacity var(--dsh-ui-motion), scale var(--dsh-ui-motion), color var(--dsh-ui-motion);\n}\n\n.dsh-ui-task-dots { display: flex; gap: 2px; align-items: center; }\n.dsh-ui-task-dots > span {\n  width: 3.5px;\n  height: 3.5px;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: .6;\n  transition: opacity var(--dsh-ui-motion), scale var(--dsh-ui-motion);\n}\n\n.dsh-ui-task-row[data-task-status="pending"] .dsh-ui-task-dots > :is(:first-child, :last-child) {\n  opacity: 0;\n  scale: .55;\n}\n.dsh-ui-task-row[data-task-status="in_progress"] .dsh-ui-task-dots { color: var(--dsh-ui-accent); }\n.dsh-ui-task-row[data-task-status="completed"] .dsh-ui-task-dots { opacity: 0; scale: .75; }\n\n.dsh-ui-task-state > .dsh-ui-icon {\n  width: 14px;\n  height: 14px;\n  color: var(--dsh-ui-running-foreground);\n  opacity: 0;\n  scale: .78;\n}\n.dsh-ui-task-row[data-task-status="completed"] .dsh-ui-task-state > .dsh-ui-icon { opacity: 1; scale: 1; }\n\n@media (prefers-reduced-motion: no-preference) {\n  .dsh-ui-session-tasks[data-running] .dsh-ui-overview-reveal[data-expanded] [data-task-status="in_progress"] .dsh-ui-task-dots {\n    & > span { animation: dsh-ui-task-wave 1.7s ease-in-out infinite; }\n    & > :nth-child(2) { animation-delay: 140ms; }\n    & > :nth-child(3) { animation-delay: 280ms; }\n  }\n}\n\n@keyframes dsh-ui-task-wave {\n  0%, 58%, 100% { opacity: .6; translate: 0 0; scale: 1; }\n  26% { opacity: 1; translate: 0 -1.5px; scale: 1.15; }\n}\n\n@starting-style {\n  .dsh-ui-session-tasks[data-running] { grid-template-rows: 0fr; opacity: 0; }\n  .dsh-ui-session-tasks[data-running] .dsh-ui-task-progress-fill { width: 0; }\n}\n\n.dsh-ui-overview-section { padding: 14px 0 13px; }\n.dsh-ui-overview-section + .dsh-ui-overview-section,\n.dsh-ui-background-jobs > .dsh-ui-overview-section,\n.dsh-ui-background-jobs + .dsh-ui-overview-section { border-top: 1px solid var(--dsh-ui-border); }\n.dsh-ui-overview-section h3 { margin: 0 0 8px; font-size: 14px; font-weight: 500; }\n.dsh-ui-overview-heading { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-block-end: 5px; }\n.dsh-ui-overview-heading h3 { margin: 0; }\n.dsh-ui-overview-native:not(:has(.dsh-ui-overview-native-body > *)) { display: none; }\n.dsh-ui-overview-native :is(.dsh-ui-overview-heading, .dsh-ui-overview-toggle-summary) > span {\n  min-width: 0;\n  color: var(--dsh-ui-text-muted);\n  font: inherit;\n  font-size: 11px;\n  white-space: normal;\n  text-align: end;\n  text-wrap: pretty;\n}\n.dsh-ui-overview-native .dsh-ui-overview-heading > h3 { flex: none; }\n.dsh-ui-background-jobs { display: flow-root; }\n.dsh-ui-background-jobs[data-resizing] { overflow: clip; }\n.dsh-ui-background-jobs [data-job-row] { transition: opacity var(--dsh-ui-motion), translate var(--dsh-ui-motion); }\n@starting-style {\n  .dsh-ui-background-jobs [data-job-row] { opacity: 0; translate: 0 3px; }\n}\n.dsh-ui-overview-toggle-summary { flex: 1; min-width: 0; text-align: end; }\n.dsh-ui-overview-native[data-overview-section="collaboration"] .dsh-ui-overview-native-body { padding-block-start: 4px; }\n.dsh-ui-collaboration-views { display: flex; flex-wrap: wrap; gap: 4px; margin: 5px 0 2px; }\n.dsh-ui-collaboration-views > button {\n  min-height: 23px;\n  padding: 0 7px;\n  color: var(--dsh-ui-text-muted);\n  font-size: 11px;\n}\n.dsh-ui-collaboration-views > button[aria-pressed="true"] {\n  color: var(--dsh-ui-accent-surface-foreground);\n  background: var(--dsh-ui-accent-surface);\n}\n.dsh-ui-overview-native [role="treeitem"]:focus-visible {\n  outline: 2px solid var(--dsh-ui-focus);\n  outline-offset: -2px;\n}\n.dsh-ui-overview-native [data-session-panel-row="fold"] > button {\n  justify-content: flex-start;\n  gap: 6px;\n  width: 100%;\n  padding: 4px 6px;\n  border: 0;\n  border-radius: 6px;\n  background: transparent;\n  color: var(--dsh-ui-text-muted);\n  cursor: pointer;\n  font: inherit;\n  display: flex;\n  align-items: center;\n}\n.dsh-ui-overview-native [data-session-panel-row="fold"] > button:hover { background: var(--dsh-ui-muted); }\n.dsh-ui-overview-foldable { padding: 8px 0; }\n.dsh-ui-overview-section .dsh-ui-overview-disclosure-heading { margin: 0; }\n.dsh-ui-overview-toggle { justify-content: space-between; width: 100%; padding: 0 5px 0 0; }\n:is(.dsh-ui-overview-toggle, .dsh-ui-task-toggle)[aria-expanded="true"]:not(:hover) { background: transparent; }\n:is(.dsh-ui-overview-toggle, .dsh-ui-task-toggle) > .dsh-ui-icon:last-child {\n  width: 14px;\n  height: 14px;\n  color: var(--dsh-ui-icon-muted);\n  transition: transform var(--dsh-ui-list-motion);\n}\n:is(.dsh-ui-overview-toggle, .dsh-ui-task-toggle)[aria-expanded="true"] > .dsh-ui-icon:last-child {\n  transform: rotate(90deg);\n}\n\n.dsh-ui-overview-row {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-width: 0;\n  min-height: 32px;\n  gap: 7px;\n  padding: 2px 4px;\n  border: 0;\n  border-radius: 6px;\n  color: inherit;\n  background: transparent;\n  text-align: start;\n  font: inherit;\n  transition: background-color var(--dsh-ui-motion), color var(--dsh-ui-motion);\n}\n.dsh-ui-overview-row:is(button, summary), button.dsh-ui-context-entry { cursor: pointer; }\n.dsh-ui-overview-row:is(button, summary):hover, button.dsh-ui-context-entry:hover { background: var(--dsh-ui-muted); }\n.dsh-ui-overview :is(button, summary):focus-visible { outline: 2px solid var(--dsh-ui-focus); outline-offset: -1px; }\n.dsh-ui-overview-row > .dsh-ui-icon { width: 14px; height: 14px; color: var(--dsh-ui-icon-muted); }\n.dsh-ui-overview-directory { display: flex; align-items: center; gap: 2px; }\n.dsh-ui-overview-directory .dsh-ui-overview-row { flex: 1; }\n.dsh-ui-overview-directory-actions { width: 27px; height: 27px; flex: none; padding: 0; color: var(--dsh-ui-icon-muted); }\n.dsh-ui-overview-label { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.dsh-ui-overview-label[data-code], .dsh-ui-overview-patch {\n  font: 400 11px / 1.5 ui-monospace, "SF Mono", Menlo, monospace;\n}\n.dsh-ui-overview small { flex: none; color: var(--dsh-ui-text-muted); font-size: 11px; }\n.dsh-ui-overview-note { margin: 5px 3px 0; color: var(--dsh-ui-text-muted); font-size: 12px; text-wrap: pretty; }\n.dsh-ui-overview-note button, .dsh-ui-overview-more {\n  padding: 2px 3px;\n  border: 0;\n  border-radius: 4px;\n  background: transparent;\n  color: var(--dsh-ui-accent);\n  cursor: pointer;\n  font: inherit;\n}\n.dsh-ui-overview-more { margin-block-start: 3px; font-size: 12px; }\n.dsh-ui-overview :is(.dsh-ui-overview-more, .dsh-ui-overview-note button):hover { background: var(--dsh-ui-accent-surface); }\n\n.dsh-ui-overview-reveal {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  grid-template-rows: 0fr;\n  visibility: hidden;\n  opacity: 0;\n  transition: grid-template-rows var(--dsh-ui-list-motion), opacity var(--dsh-ui-motion), visibility var(--dsh-ui-list-motion);\n}\n.dsh-ui-overview-reveal[data-expanded] { grid-template-rows: 1fr; visibility: visible; opacity: 1; }\n.dsh-ui-overview-reveal-content { min-height: 0; overflow: clip; }\n.dsh-ui-project-context .dsh-ui-overview-reveal-content { display: grid; grid-template-columns: minmax(0, 1fr); align-content: start; gap: 4px; }\n.dsh-ui-project-context .dsh-ui-overview-reveal[data-expanded] { margin-block-start: 4px; }\n\n.dsh-ui-context-entry {\n  display: grid;\n  box-sizing: border-box;\n  grid-template: "label label" 20px "meter tokens" 17px / minmax(0, 1fr) max-content;\n  align-items: start;\n  gap: 0 8px;\n  width: 100%;\n  min-width: 0;\n  padding: 5px 4px;\n  border: 0;\n  border-radius: 6px;\n  background: transparent;\n  color: var(--dsh-ui-text);\n  text-align: start;\n  font: inherit;\n  transition: background-color var(--dsh-ui-list-motion);\n}\n.dsh-ui-context-entry[aria-current="true"] { background: var(--dsh-ui-muted); }\n.dsh-ui-context-entry[data-compact] { grid-template-rows: 20px 9px; background: transparent; }\n.dsh-ui-context-entry[data-empty] { grid-template-rows: 20px 0; }\n.dsh-ui-context-label { grid-area: label; display: flex; align-items: center; gap: 6px; min-width: 0; }\n.dsh-ui-context-name { flex: 1; min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;\n  transition: opacity var(--dsh-ui-motion), translate var(--dsh-ui-motion), visibility var(--dsh-ui-motion); }\n.dsh-ui-context-entry[data-compact]:not([data-empty]) .dsh-ui-context-name { opacity: 0; visibility: hidden; translate: -3px 0; }\n.dsh-ui-context-entry [data-dsh-ui-reading="meter"] {\n  grid-area: meter;\n  width: 100%;\n  min-width: 0;\n  height: 4px;\n  margin-block-start: 6px;\n  overflow: hidden;\n  border-radius: 2px;\n  background: var(--dsh-ui-border);\n  transform-origin: left center;\n}\n.dsh-ui-context-used {\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n  border-radius: inherit;\n  background: var(--dsh-ui-accent);\n  transition: width var(--dsh-ui-motion);\n}\n.dsh-ui-context-used > span { flex: none; background: var(--context-part-color); }\n.dsh-ui-project-context [data-context-part="system"] { --context-part-color: var(--dsh-ui-context-system); }\n.dsh-ui-project-context [data-context-part="tools"] { --context-part-color: var(--dsh-ui-context-tool); }\n.dsh-ui-project-context [data-context-part="messages"] { --context-part-color: var(--dsh-ui-accent); }\n.dsh-ui-context-entry [data-dsh-ui-reading="tokens"] {\n  grid-area: tokens;\n  justify-self: end;\n  color: var(--dsh-ui-text-muted);\n  font: 400 10px / 1.45 system-ui, sans-serif;\n  font-variant-numeric: tabular-nums;\n  transform-origin: left center;\n  white-space: nowrap;\n}\n.dsh-ui-context-entry[data-compact] [data-dsh-ui-reading="meter"] { grid-column: 1 / -1; margin-block-start: 2px; }\n.dsh-ui-context-entry[data-compact] [data-dsh-ui-reading="tokens"] { grid-area: 1 / 1; align-self: center; justify-self: start; }\n.dsh-ui-context-breakdown { display: flex; flex-wrap: wrap; gap: 3px 8px; margin: 3px 4px 6px; color: var(--dsh-ui-text-muted); font-size: 11px; }\n.dsh-ui-context-breakdown div { display: inline-flex; align-items: center; gap: 4px; }\n.dsh-ui-context-breakdown div::before { content: ""; width: 6px; height: 6px; border-radius: 2px; background: var(--context-part-color); }\n.dsh-ui-context-breakdown dd { margin: 0; font-variant-numeric: tabular-nums; }\n\n.dsh-ui-overview-disclosure { min-width: 0; }\n.dsh-ui-overview-disclosure > summary { list-style: none; }\n.dsh-ui-overview-disclosure > summary::-webkit-details-marker { display: none; }\n.dsh-ui-overview-disclosure > summary > .dsh-ui-icon:last-child { width: 12px; transition: transform var(--dsh-ui-list-motion); }\n.dsh-ui-overview-disclosure[open] > summary > .dsh-ui-icon:last-child { transform: rotate(90deg); }\n.dsh-ui-overview-nested { border-inline-start: 1px solid var(--dsh-ui-border); margin-inline-start: 9px; padding-inline-start: 7px; }\n\n@supports (interpolate-size: allow-keywords) {\n  .dsh-ui-overview-disclosure { interpolate-size: allow-keywords; }\n  .dsh-ui-overview-disclosure::details-content {\n    block-size: 0;\n    overflow: clip;\n    opacity: 0;\n    transition: block-size var(--dsh-ui-list-motion), opacity var(--dsh-ui-motion), content-visibility 320ms allow-discrete;\n  }\n  .dsh-ui-overview-disclosure[open]::details-content { block-size: auto; opacity: 1; }\n}\n\n.dsh-ui-overview-patch {\n  overflow: auto;\n  max-block-size: 340px;\n  padding: 5px 0;\n  margin: 3px 0 6px;\n  border: 1px solid var(--dsh-ui-border);\n  border-radius: 7px;\n  background: var(--dsh-ui-muted);\n  tab-size: 4;\n}\n.dsh-ui-overview-patch span { display: block; box-sizing: border-box; min-height: 1lh; padding-inline: 5px; width: max-content; min-width: 100%; }\n.dsh-ui-overview-patch [data-kind="header"] { color: var(--dsh-ui-text-muted); }\n.dsh-ui-overview :is(.dsh-ui-overview-patch, .dsh-ui-diff-tally) [data-kind="add"] { color: var(--dsh-ui-diff-add); }\n.dsh-ui-overview :is(.dsh-ui-overview-patch, .dsh-ui-diff-tally) [data-kind="remove"] { color: var(--dsh-ui-diff-remove); }\n.dsh-ui-overview-patch [data-kind="add"] { background: color-mix(in srgb, var(--dsh-ui-diff-add) 12%, transparent); }\n.dsh-ui-overview-patch [data-kind="remove"] { background: color-mix(in srgb, var(--dsh-ui-diff-remove) 12%, transparent); }\n\n@media (prefers-reduced-motion: reduce) {\n  .dsh-ui-overview, .dsh-ui-task-shortcut, .dsh-ui-task-row { animation: none; }\n  .dsh-ui-overview *, .dsh-ui-overview-disclosure::details-content { transition: none; }\n}\n';

// src/client/inspector.css
var inspector_default = '[data-forge-changes="local"][data-dsh-ui-checkout-status="none"] > :not(.dsh-ui-changes-empty),\n[data-forge-changes="local"]:is([data-dsh-ui-checkout-status="pending"], [data-dsh-ui-checkout-status="unborn"])\n  :is([data-forge-base], [data-forge-commits]),\n[data-forge-changes="local"][data-dsh-ui-checkout-status="no-base"] > :has([data-forge-base=""]) [data-forge-commits] {\n  display: none;\n}\n\n.dsh-ui-changes-empty {\n  display: grid;\n  flex: 1;\n  place-items: center;\n  padding: 20px;\n  color: var(--dsh-ui-text-muted);\n  font: 400 13px / 1.5 var(--dsh-ui-font);\n  text-align: center;\n}\n\n[data-sidebar-right-panel] > [class*="_panelBody"]:has(> .dsh-ui-inspector-seat) {\n  flex-direction: column;\n}\n\n.dsh-ui-inspector-seat {\n  position: relative;\n  z-index: var(--dsh-dockkit-dock-layer, 10);\n  flex: none;\n  visibility: hidden;\n  transform: translateX(var(--dsh-sidebar-width));\n  border-inline-start: 1px solid var(--dsh-ui-sidebar-border);\n  background: var(--dsh-ui-surface);\n  transition: transform var(--ds-transition-duration-slow) var(--ds-ease-in-out),\n    visibility 0s linear var(--ds-transition-duration-slow);\n}\n\n[data-sidebar-right-open] .dsh-ui-inspector-seat {\n  transform: none;\n  visibility: visible;\n  transition: transform var(--ds-transition-duration-slow) var(--ds-ease-in-out);\n}\n\n@starting-style {\n  [data-sidebar-right-opening] .dsh-ui-inspector-seat { transform: translateX(var(--dsh-sidebar-width)); }\n}\n\n.dsh-ui-inspector-seat + [data-dockkit-surface] { min-height: 0; }\n\n.dsh-ui-inspector-seat + [data-dockkit-surface] [data-dockkit-host="dock"] {\n  & [data-dockkit-pane]:not(\n    :has([data-inspector-file-tab][aria-selected="true"]):has([data-inspector-file-tab="preview"])\n  ) > :is([data-dockkit-strip], :has(> [data-dockkit-strip])) {\n    display: none;\n  }\n  & [data-dockkit-strip-tabs] > :not([data-inspector-file-tab]),\n  & :is([data-dockkit-add-tab], [data-dockkit-split-control], [data-sidebar-right-mode], [data-sidebar-right-toggle]) {\n    display: none;\n  }\n}\n\n.dsh-ui-inspector-tools {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  height: 40px;\n  padding: 0 11px;\n  border-bottom: 1px solid var(--dsh-ui-border);\n  pointer-events: auto;\n}\n\n.dsh-ui-inspector-tool {\n  min-width: 24px;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  color: var(--dsh-ui-icon-muted);\n}\n\n.dsh-ui-inspector-tool .dsh-ui-icon { width: 17px; height: 17px; }\n\n.dsh-ui-inspector-tool:is([aria-pressed="true"], [aria-expanded="true"], [data-active]) {\n  color: var(--dsh-ui-accent-surface-foreground);\n  background: var(--dsh-ui-accent-surface);\n}\n\n.dsh-ui-inspector-fullscreen { margin-inline-start: auto; }\n\n.dsh-ui-inspector-menu {\n  min-width: 152px;\n  width: max-content;\n  max-width: calc(100vw - 16px);\n  padding: 4px;\n  border-radius: 8px;\n  box-shadow: 0 5px 20px #2519091a;\n}\n\n.dsh-ui-inspector-menu:popover-open { display: grid; }\n\n.dsh-ui-inspector-menu .dsh-ui-inspector-menu-row {\n  justify-content: flex-start;\n  gap: 6px;\n  width: 100%;\n  min-height: 30px;\n  padding: 3px 8px;\n  border-radius: 5px;\n  color: var(--dsh-ui-text);\n  font: 400 13px / 1.4 var(--dsh-ui-font);\n}\n\n.dsh-ui-inspector-menu-row svg { width: 14px; height: 14px; color: var(--dsh-ui-icon-muted); }\n.dsh-ui-inspector-menu-row > span { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; text-align: start; }\n.dsh-ui-inspector-shells { margin-inline-start: 7px; padding-inline-start: 3px; border-inline-start: 1px solid var(--dsh-ui-border); }\n.dsh-ui-inspector-shells p { margin: 3px 7px; color: var(--dsh-ui-text-muted); font-size: 12px; }\n\n.dsh-ui-inspector-open-panels {\n  margin-top: 4px;\n  padding-top: 4px;\n  border-top: 1px solid var(--dsh-ui-border);\n  max-inline-size: 300px;\n  min-inline-size: 0;\n}\n\n.dsh-ui-inspector-open-heading {\n  padding: 3px 8px;\n  color: var(--dsh-ui-text-muted);\n  font: 400 12px / 1.4 var(--dsh-ui-font);\n}\n\n.dsh-ui-inspector-open-panel { display: flex; align-items: center; }\n.dsh-ui-inspector-open-panel .dsh-ui-inspector-menu-row { flex: 1; min-width: 0; }\n.dsh-ui-inspector-open-panel .dsh-ui-inspector-tool { flex-shrink: 0; }\n\nhtml[data-platform="darwin"]:not([data-fullscreen]) [data-sidebar-right-panel="fullscreen"] .dsh-ui-inspector-tools {\n  padding-inline-start: 88px;\n}\n\n@media (max-width: 960px) {\n  .dsh-ui-inspector-tools { gap: 1px; padding-inline: 6px; }\n  .dsh-ui-inspector-tool { width: 24px; height: 28px; }\n  .dsh-ui-inspector-tool .dsh-ui-icon { width: 15px; height: 15px; }\n  .dsh-ui-overview { padding-inline: 10px; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  [data-sidebar-right-panel] .dsh-ui-inspector-seat { transition: none; }\n}\n';

// src/client/index.jsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var name = "deepseek-integrated-ui";
var inject = [
  "slots",
  "theme",
  "locale",
  "sessions",
  "modelDirectories",
  "conversation",
  "remote",
  "remote.session",
  "remote.agentTeams",
  "remote.agentPresets",
  "remote.permissionPresets",
  "remote.workspaceFiles",
  "uiSession",
  "uiSession.sessionStatus",
  "uiWorkspace",
  "workspaces",
  "sidebarRight",
  "sidebarRightTabs",
  "uiConversation",
  "layout",
  "remoteAccess"
];
function HeaderViews({ slots }) {
  useSlotVersion(slots, VIEW_EXTENSIONS);
  const extensions = slots.entriesOfSlot(VIEW_EXTENSIONS[0]).some(({ options }) => !["chat", "trajectory"].includes(options.id)) || slots.entriesOfSlot(VIEW_EXTENSIONS[1]).some(({ options }) => options.id !== "entry-customization");
  return extensions ? null : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { hidden: true, "data-dsh-ui-compact-view-tabs": "" });
}
function apply(ctx) {
  registerTheme(ctx, name);
  ctx.effect(() => {
    ctx.layout?.panels?.setRightbar?.(0);
  }, "deepseek-ui: right panel startup width");
  ctx.effect(() => {
    const style = document.createElement("style");
    style.dataset.dshUi = name;
    style.textContent = [theme_default, hero_default, composer_default, sidebar_default, transcript_default, overview_default, inspector_default].join("\n");
    document.head.append(style);
    return () => style.remove();
  }, "deepseek-ui: scoped styles");
  ctx.effect(() => typeof MutationObserver === "undefined" ? void 0 : installComposerMotion(), "deepseek-ui: composer docking");
  ctx.effect(
    () => typeof MutationObserver === "undefined" ? void 0 : installSessionSwitchMotion(ctx.sidebarRight.mounted),
    "deepseek-ui: session switching"
  );
  const { slots, locale, sessions, modelDirectories, conversation, remote } = ctx;
  const ultraMemory = createUltraMemory();
  const preselection = (sessionId) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    ModelPreselection,
    {
      sessionId,
      locale,
      remote,
      sessions,
      modelDirectories,
      conversation,
      ultraMemory
    }
  );
  slots.inject("sidebar.brand.mark", () => slots.register({
    name: "sidebar.brand.mark",
    priority: -10
  }, BrandMark));
  slots.inject("sidebar.brand.name", () => slots.register({
    name: "sidebar.brand.name",
    priority: -10
  }, BrandName));
  slots.inject("sidebar.session.action", () => slots.register({
    name: "sidebar.session.action",
    id: "deepseek-ui.new-session",
    inject: () => ({ locale })
  }, SidebarNewSession));
  slots.inject("conversation.hero.brand.mark", () => slots.register({
    name: "conversation.hero.brand.mark",
    priority: -10,
    inject: () => ({ locale, sessions, modelDirectories, conversation, renderPreselection: preselection })
  }, HeroMark));
  slots.inject("conversation.hero.frame", () => slots.register({
    name: "conversation.hero.frame",
    id: "deepseek-ui.workspace-frame",
    inject: () => ({ locale, conversation })
  }, HeroWorkspaceFrame));
  slots.inject("conversation.hero.workspace", () => slots.register({
    name: "conversation.hero.workspace",
    priority: -10,
    inject: () => ({ locale, workspaces: ctx.workspaces, uiWorkspace: ctx.uiWorkspace, layout: ctx.layout })
  }, HeroWorkspacePicker));
  slots.inject("conversation.hero.agentPreset", () => slots.register({
    name: "conversation.hero.agentPreset",
    priority: -10
  }, () => null));
  slots.inject("conversation.session.header.actions", () => slots.register({
    name: "conversation.session.header.actions",
    id: "agent-preset",
    priority: -10
  }, () => null));
  registerWhen(
    slots,
    "conversation.session.header.utilities",
    PANEL_EXTENSIONS,
    () => !needsNativeSessionPanel(slots),
    () => slots.register({
      name: "conversation.session.header.utilities",
      id: "session-panel",
      priority: -10
    }, () => null)
  );
  registerWhen(
    slots,
    "conversation.chat.aside",
    PANEL_EXTENSIONS,
    () => !needsNativeSessionPanel(slots),
    () => slots.register({
      name: "conversation.chat.aside",
      priority: -10
    }, () => null)
  );
  slots.inject("conversation.session.header.utilities", () => slots.register({
    name: "conversation.session.header.utilities",
    id: "deepseek-ui.view-overflow",
    inject: () => ({ slots })
  }, HeaderViews));
  registerWhen(slots, "conversation.input.model", MODEL_EXTENSIONS, () => !hasModelExtensions(slots), () => slots.register({
    name: "conversation.input.model",
    priority: -10,
    // Fall back to the native owner when a plugin uses any of its child slots.
    inject: (sessionId) => ({
      binding: sessions.binding(sessionId),
      directory: modelDirectories.directoryFor(sessionId),
      locale,
      remote,
      sessions,
      ultraMemory
    })
  }, ComposerModel));
  slots.inject("conversation.input.permission", () => slots.register({
    name: "conversation.input.permission",
    priority: -10,
    inject: (sessionId) => ({ binding: sessions.binding(sessionId), sessions, locale, remote })
  }, PermissionPicker));
  slots.inject("conversation.chat.node", () => slots.register({
    name: "conversation.chat.node",
    key: "turn-process",
    priority: -10,
    inject: (sessionId) => {
      const binding = sessions.binding(sessionId);
      const conversationView = ctx.uiConversation.binding(binding);
      return {
        slots,
        locale,
        binding,
        chat: conversationView.target("chat"),
        openTurn: conversationView.openTurn,
        chatSettings: ctx.get("configForms")?.get("ui-chat"),
        sessionStatus: ctx.uiSession.sessionStatus
      };
    }
  }, TurnProcess));
  registerOverview(ctx);
  registerLocalChangesCheckout(ctx);
  slots.inject("shell.overlay", function* () {
    yield slots.register({
      name: "shell.overlay",
      id: "deepseek-ui.sidebar",
      inject: () => ({
        locale,
        slots,
        sessions,
        workspaces: ctx.workspaces,
        uiWorkspace: ctx.uiWorkspace,
        layout: ctx.layout,
        sessionStatus: ctx.uiSession.sessionStatus,
        remoteAccess: ctx.remoteAccess
      })
    }, SidebarDecorations);
    yield slots.register({
      name: "shell.overlay",
      id: "deepseek-ui.inspector-toolbar",
      inject: () => ({
        locale,
        sidebarRight: ctx.sidebarRight,
        sidebarRightTabs: ctx.sidebarRightTabs,
        getWebTerminals: () => ctx.get("webTerminals")
      })
    }, InspectorToolbar);
  });
  slots.inject("conversation.composer.dock", () => slots.register({
    name: "conversation.composer.dock",
    id: "deepseek-ui.context",
    order: 3,
    inject: (sessionId) => ({ binding: sessions.binding(sessionId), locale, sidebarRight: ctx.sidebarRight })
  }, ContextRing));
}

  return module.exports;
} });

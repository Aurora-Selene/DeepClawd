# DeepClawd

DeepClawd 是 DeepSeek Harness Desktop 的界面插件，提供克劳德橙、鲸鱼蓝两套主题，以及首页、输入框、项目侧栏、对话流和会话详情的界面增强。插件包名为 `@local/dsh-deepseek-ui`。

支持范围以 `package.json` 为准，当前锁定经过桌面验证的 DSH `0.2.3-alpha.2`。接管同一槽位的完整界面皮肤应单独启用。

## 构建与验证

```sh
npm ci
npm test
npm run smoke:desktop
```

`npm run build` 生成 `lib/index.js` 和 `lib/client.js`。Desktop 加载校验使用已安装应用的 Host，临时建立桌面 profile 并在退出时清理。可向 `node scripts/smoke-desktop.mjs` 传入其他 macOS 应用路径。

## 安装到桌面端

先启动一次 DSH Desktop，再用 Node.js 24 或更高版本在仓库根目录构建并打包。

```sh
npm ci
npm run build
npm pack
```

将生成的包安装到桌面 profile。

```sh
npm install --prefix "$HOME/.dsh/profiles/desktop" "$PWD/local-dsh-deepseek-ui-0.1.0.tgz"
```

在桌面 profile 的 `package.json` 中，将 `@local/dsh-deepseek-ui` 加入现有的 `dsh.profile.bundles`，然后重启 DSH Desktop。

## Composer

- 普通档位来自当前模型目录。原生最高档位为 `max` 且团队服务可用时，滑块提供 `Ultra Think`。空白会话还需有可用的 `ptc`，已开始的会话沿用原模式。退出 Ultra 时，根据该会话的本地记录恢复模式和团队设置。
- 输入框工具栏将 `Ultra Think` 显示为 `Ultra`。首条消息发出前可从推理档位面板打开会话模式列表。已锁定的模式显示在闪电按钮的会话统计中。第三方扩展注册模型标签、选项或详细面板时，由原生模型选择器承载这些扩展。
- 会话开始后，工具栏的闪电按钮打开会话统计。实时动画由当前会话流式增量估算，结算速度由 provider token 计数与 DSH 记录的解码用时计算。18 tok/s 开始发光，100 tok/s 达满值，光谱和星空从 1× 平滑加速到 5×。
- 模型、推理档位、会话统计和审核菜单优先向下展开。贴底且下方空间不足时改为向上。审核选项来自 Host 的权限目录，点击选项即可切换。
- 会话态的上下文圆环读取原生压力投影，点击打开右侧「会话详情」。

## 侧栏与对话流

每个工作区可选择六种项目图标，选择保存在桌面渲染器的本地存储中。会话的运行、待输入和未读动画使用 DSH 的原生状态。四点思考提示随正在执行的轮次显示，工具信号灯和提问样式沿用原生工具详情与交互。

处理过程聚合受支持的内置文本工具。第三方工具项、专用扩展卡片和多媒体结果使用 DSH 原生呈现。额外会话视图可从原生更多菜单访问。

## 会话详情

右侧「会话详情」显示当前会话和同项目已开始、未归档会话的上下文用量。已用部分按系统、工具和消息的估算比例分色。工作区路径打开 Files，文件行打开原生预览。Git 分支行展开 Forge 的未提交改动。

- `GET /api/deepseek-ui/context?workspaceId=…&limit=16` 返回工作区已开始、未归档会话的 id、投影状态、上下文用量和 `nextCursor`。下一页传入 `cursor=…`。旧客户端仍可使用 `offset` 和 `nextOffset`。
- `GET /api/deepseek-ui/git?workspaceId=…&sessionId=…&diff=1` 返回已有会话的 Forge 分支信息和未提交改动。省略 `diff` 时读取分支。

两条路由使用 DSH Connection 的 owner 鉴权。工作区会话成员来自原生 registry，Git 读取由 Forge 执行。

有额外会话区块或子槽时，原生会话面板提供入口。打开文件或上下文摘要后，右侧文件页显示原生标签栏。其他已打开的右侧面板可在「更多面板」中切换和关闭。

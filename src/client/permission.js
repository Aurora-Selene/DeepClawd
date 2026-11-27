const modes = new Map([
  ['read-only', ['reviewAsk', '监督', 'Ask for approval', '只读沙箱。扩大文件操作权限时需要审批。', 'Read-only sandbox. Broader file access requires approval.']],
  ['approval-required', ['reviewAsk', '监督', 'Ask for approval']],
  ['workspace-write', ['reviewEdit', '自动接受编辑', 'Auto-accept edits', '允许在工作区和受许可的临时目录编辑。范围外的操作需要审批。', 'Write in the workspace and permitted temporary folders. Broader access requires approval.']],
  ['auto-accept-edits', ['reviewEdit', '自动接受编辑', 'Auto-accept edits']],
  ['auto', ['reviewAuto', '自动', 'Auto', '使用 Host 提供的自动审核策略。', 'Use the Host’s automatic approval policy.']],
  ['danger-full-access', ['reviewFull', '完全访问', 'Full access', '可直接访问文件和执行命令，跳过常规审批。', 'Run commands and access files without routine approval.']],
])

const order = new Map([...modes.keys()].map((id, index) => [id, index]))

export function orderPermissionOptions(options) {
  return options.toSorted((left, right) => (order.get(left.value) ?? order.size) - (order.get(right.value) ?? order.size))
}

export function permissionOption(option, english) {
  const mode = modes.get(option.value)
  return {
    value: option.value,
    icon: mode?.[0] ?? 'reviewAsk',
    title: mode?.[english ? 2 : 1] ?? option.name ?? option.value,
    description: mode?.[english ? 4 : 3] ?? option.description,
  }
}

export async function selectPermission(session, value) {
  const result = await session.command(`/permission ${value}`)
  if (!result.ok) throw new Error(result.error.message)
  if (!result.value.matched) throw new Error('The Host did not accept the permission command.')
}

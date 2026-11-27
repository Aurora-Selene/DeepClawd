import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { randomBytes } from 'node:crypto'
import { once } from 'node:events'
import { mkdir, mkdtemp, rm, symlink, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { setTimeout as delay } from 'node:timers/promises'
import { fileURLToPath } from 'node:url'
import vm from 'node:vm'

const root = fileURLToPath(new URL('../', import.meta.url))
const app = process.argv[2] ?? '/Applications/DeepSeek Harness.app'
const resources = join(app, 'Contents', 'Resources')
const runtime = join(resources, 'app.asar', 'dsh')
const executable = join(app, 'Contents', 'MacOS', 'DeepSeek Harness')
const packageName = '@local/dsh-deepseek-ui'
const scratch = await mkdtemp(join(tmpdir(), 'dsh-phase-one.'))
const profile = join(scratch, 'profiles', 'desktop')
const namespace = join(profile, 'node_modules', '@local')
const profilePackage = {
  name: 'dsh-profile-desktop',
  private: true,
  dependencies: { [packageName]: `file:${root}` },
  dsh: { profile: { bundles: [
    '@deepseek-ai/dsh-base',
    '@deepseek-ai/dsh-web-app',
    '@deepseek-ai/dsh-experimental-forge-bundle',
    packageName,
  ] } },
}

await mkdir(namespace, { recursive: true })
await symlink(root, join(namespace, 'dsh-deepseek-ui'), 'dir')
await writeFile(join(profile, 'package.json'), JSON.stringify(profilePackage))

const child = spawn(executable, [
  '--expose-internals',
  join(runtime, 'node_modules', '@deepseek-ai', 'dsh-desktop-host', 'lib', 'index.js'),
  runtime,
  profile,
  join(resources, 'runtime', 'primary-runtime'),
], {
  cwd: profile,
  env: {
    PATH: process.env.PATH,
    HOME: process.env.HOME,
    LANG: process.env.LANG,
    ELECTRON_RUN_AS_NODE: '1',
    DSH_HOME: scratch,
    DSH_TELEMETRY_DISABLED: '1',
    DSH_DESKTOP_NODE_EXECUTABLE: executable,
  },
  stdio: ['ignore', 'pipe', 'pipe', 'ipc'],
})

child.stdout.resume()
let stderr = ''
child.stderr.setEncoding('utf8').on('data', chunk => { stderr = (stderr + chunk).slice(-4000) })
const exited = once(child, 'exit')
const startupTimeout = AbortSignal.timeout(25_000)

try {
  let desktopCookie
  const ready = await new Promise((resolve, reject) => {
    child.on('message', message => {
      if (message.type === 'starting' && !desktopCookie) {
        const secret = randomBytes(32).toString('base64url')
        desktopCookie = `dsh-desktop-session=${secret}`
        child.send({ type: 'desktop-auth', secret }, error => { if (error) reject(error) })
      }
      if (message.type === 'ready') resolve(message)
      if (message.type === 'fatal') reject(new Error(message.message))
    })
    child.once('error', reject)
    child.once('exit', code => reject(new Error(`Host exited before ready (${code})`)))
    startupTimeout.addEventListener('abort', () => reject(new Error('Desktop Host did not become ready')), { once: true })
  })

  const { injections, url } = ready
  assert(injections.some(row => row.kind === 'style' && row.text.includes('#faf9f5') && row.text.includes('#272621')))
  const graph = injections.find(row => row.kind === 'global' && row.name === '__DSH_BOOT__')?.value
  assert(graph, 'Desktop boot graph missing')
  const row = graph.entries.find(entry => entry.id === packageName)
  assert(row, 'Package did not enter the Desktop boot graph')
  assert.equal(row.immediately, true)

  const login = await fetch(url, { redirect: 'manual', signal: startupTimeout,
    headers: desktopCookie ? { cookie: desktopCookie } : undefined })
  assert([200, 303].includes(login.status), 'Desktop Host owner authentication failed')
  const cookie = login.headers.get('set-cookie')?.split(';')[0] ?? desktopCookie
  await login.body?.cancel()
  assert(cookie, 'Desktop Host owner cookie missing')
  const origin = new URL(url).origin
  const bundle = await fetch(new URL(row.url, origin), { headers: { cookie }, signal: startupTimeout })
  assert.equal(bundle.status, 200)
  let registered
  vm.runInNewContext(await bundle.text(), {
    window: { __ModuleLoader__: { load: entry => { if (entry.id === packageName) registered = entry } } },
  })
  assert.equal(typeof registered?.factory, 'function', 'Client script did not register its factory')
  const allowed = new Set(['react', 'react-dom', 'react/jsx-runtime', '@deepseek-ai/dsh-client-ui-primitives'])
  const plugin = registered.factory(specifier => {
    assert(allowed.has(specifier), `Unexpected client module request: ${specifier}`)
    return {}
  })
  assert.equal(typeof plugin.apply, 'function')

  const route = new URL('/api/deepseek-ui/context', origin)
  const anonymous = await fetch(route, { signal: startupTimeout })
  assert.equal(anonymous.status, 401)
  await anonymous.body?.cancel()
  const owner = await fetch(route, { headers: { cookie }, signal: startupTimeout })
  assert.equal(owner.status, 400)
  assert.equal((await owner.json()).error, 'invalid-query')
  console.log('Desktop Host boot, theme injection, Client factory and owner-only Inspector route passed.')
} catch (error) {
  const detail = stderr.replaceAll(scratch, '<isolated-profile>')
  if (detail) process.stderr.write(detail)
  throw error
} finally {
  if (child.connected) child.send({ type: 'shutdown' })
  const stopTimeout = new AbortController()
  await Promise.race([exited.catch(() => {}), delay(4_000, undefined, { signal: stopTimeout.signal })])
  stopTimeout.abort()
  if (child.exitCode === null && child.signalCode === null) {
    child.kill('SIGKILL')
    await exited.catch(() => {})
  }
  await rm(scratch, { recursive: true, force: true })
}

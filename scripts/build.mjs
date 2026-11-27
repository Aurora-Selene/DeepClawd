import { readFile, mkdir, mkdtemp, rename, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'esbuild'

const root = fileURLToPath(new URL('../', import.meta.url))
const manifest = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'))
await mkdir(new URL('../lib/', import.meta.url), { recursive: true })

const host = await build({
  absWorkingDir: root,
  entryPoints: ['src/host/index.js'],
  bundle: true,
  platform: 'node',
  target: 'node24',
  format: 'esm',
  loader: { '.css': 'text' },
  legalComments: 'inline',
  write: false,
})

const client = await build({
  absWorkingDir: root,
  entryPoints: ['src/client/index.jsx'],
  bundle: true,
  platform: 'browser',
  target: 'chrome140',
  format: 'cjs',
  external: ['react', 'react-dom', '@deepseek-ai/dsh-client-ui-primitives'],
  jsx: 'automatic',
  loader: { '.css': 'text', '.svg': 'dataurl' },
  legalComments: 'inline',
  write: false,
})

// DSH evaluates a classic script that registers a CommonJS-like factory.
// Its shared loader supplies React and DSH's native UI primitives.
const wrapper = [
  `window.__ModuleLoader__.load({ id: ${JSON.stringify(manifest.name)}, factory(require) {`,
  '  const module = { exports: {} };',
  '  const exports = module.exports;',
  client.outputFiles[0].text,
  '  return module.exports;',
  '} });',
  '',
].join('\n')

const destination = join(root, 'lib')
const staging = await mkdtemp(join(destination, '.build-'))
try {
  await Promise.all([
    writeFile(join(staging, 'index.js'), host.outputFiles[0].text),
    writeFile(join(staging, 'client.js'), wrapper),
  ])
  await rename(join(staging, 'index.js'), join(destination, 'index.js'))
  await rename(join(staging, 'client.js'), join(destination, 'client.js'))
} finally {
  await rm(staging, { recursive: true, force: true })
}

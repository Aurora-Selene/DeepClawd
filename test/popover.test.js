import assert from 'node:assert/strict'
import test from 'node:test'
import { popoverPlacement } from '../src/client/popover-placement.js'

test('Composer popovers prefer room below, even when there is more room above', () => {
  assert.deepEqual(popoverPlacement(410, 219, 184), { placement: 'below', maxHeight: 219 })
  assert.deepEqual(popoverPlacement(130, 130, 250), { placement: 'below', maxHeight: 130 })
})

test('a bottom-docked Composer flips its popovers above and clamps the available height', () => {
  assert.deepEqual(popoverPlacement(190, 3, 280), { placement: 'above', maxHeight: 190 })
  assert.deepEqual(popoverPlacement(-1, -6, 90), { placement: 'above', maxHeight: 0 })
})

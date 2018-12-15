'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
function keepFirst(arg){
  return arg.slice(0, 2);
}
function keepLast(arg){
  return arg.slice(arg.length - 2);
}
function keepFirstLast(arg){
  return arg.slice(2, 4);
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(keepFirst('switch'), 'sw')
assert.strictEqual(keepFirst('sw'), 'sw')
assert.strictEqual(keepFirst('s'), 's')
assert.strictEqual(keepFirst(''), '')
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(keepLast('switch'), 'ch')
assert.strictEqual(keepLast('ch'), 'ch')
assert.strictEqual(keepLast('h'), 'h')
assert.strictEqual(keepLast(''), '')
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirstLast('switch'), 'it')
assert.strictEqual(keepFirstLast('tch'), 'h')
assert.strictEqual(keepFirstLast('swit'), 'it')
assert.strictEqual(keepFirstLast(''), '')
// End of tests */

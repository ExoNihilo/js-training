'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
function cutFirst(arg){
  return arg.slice(2);
}

function cutLast(arg){
  return arg.slice(0, arg.length - 2);
}

function cutFirstLast(arg){
  let line = cutFirst(arg);
  line = cutLast(line);
  return line;
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst('switch'), 'itch')
assert.strictEqual(cutFirst('sw'), '')
assert.strictEqual(cutFirst('s'), '')
assert.strictEqual(cutFirst(''), '')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(cutLast('switch'), 'swit')
assert.strictEqual(cutLast('ch'), '')
assert.strictEqual(cutLast('h'), '')
assert.strictEqual(cutLast(''), '')
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirstLast('switch'), 'it')
assert.strictEqual(cutFirstLast('ch'), '')
assert.strictEqual(cutFirstLast('h'), '')
assert.strictEqual(cutFirstLast(''), '')
// End of tests */

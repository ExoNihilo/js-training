'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
function whisper(arg1){
  return arg1.toLowerCase();
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, "function")
assert.strictEqual(whisper('stR'), 'str')
assert.strictEqual(whisper('QSdqsDqSd'), 'qsdqsdqsd')
assert.strictEqual(whisper('BLaBLa'), 'blabla')
assert.strictEqual(whisper('zapZAP'), 'zapzap')

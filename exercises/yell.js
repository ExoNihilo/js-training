'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
function yell(arg1){
  return arg1.toUpperCase();
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, "function")
assert.strictEqual(yell('str'), 'STR')
assert.strictEqual(yell('qsdqsdqsd'), 'QSDQSDQSD')
assert.strictEqual(yell('bLaBLa'), 'BLABLA')
assert.strictEqual(yell('zapZAP'), 'ZAPZAP')

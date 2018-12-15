'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(arg){
  let arr = arg.split(" ");
  for(var i in arr){
    arr[i] = (arr[i].charAt(0).toUpperCase() + arr[i].substring(1).toLowerCase())
  }
  return arr.join(" ");
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('switch'), 'Switch')
assert.strictEqual(jadenCase('super switch'), 'Super Switch')
assert.strictEqual(jadenCase('the super switch'), 'The Super Switch')
// End of tests */

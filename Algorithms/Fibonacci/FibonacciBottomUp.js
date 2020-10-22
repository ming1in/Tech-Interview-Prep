
const assert = require('assert')

/**
 * @description this function returns number n within fibonacci sequence.
 * It utilizes a bottom up approach to decrease runtime and increase 
 * efficiency. To do this we are using the array `bottomUp` to capture 
 * previous result, so we can reference it later.
 * 
 * This has a O(n) Big-O time complexity
 *
 * @param {*} n number you want from the fibonnaci sequence
 */
const fibonacciBottomUp = (n) => {
   if (n === 1 || n === 2) {
  result = 1
   }
  bottomUp = [null,1,1]

  for (let i = 3; i < n+1; i++){
    bottomUp[i] = bottomUp[i - 1] + bottomUp[i - 2]
  }

  return bottomUp[n]
}

assert.equal(fibonacciBottomUp(2), 1)
assert.equal(fibonacciBottomUp(5), 5)
assert.equal(fibonacciBottomUp(6), 8)
assert.equal(fibonacciBottomUp(100), 354224848179262000000)
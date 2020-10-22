const assert = require('assert')

/**
 * @description solutions to this problem is base on the equations 
 * fib(n) = fib(n-1) + fib(n-2). This is really inefficient bc operations 
 * are being repeated.
 * 
 * This has a O(2^n) Big-O time complexity
 * 
 * @param {*} n number of numbers you want from the fibonnaci sequence
 */
const fibonacci = (n) => {
  if (n === 1 || n === 2) {
    return 1
  }

  return fibonacci(n-1) + fibonacci(n-2)
}

assert.equal(fibonacci(2), 1)
assert.equal(fibonacci(5), 5)
assert.equal(fibonacci(6), 8)
assert.equal(fibonacci(100), 354224848179262000000)

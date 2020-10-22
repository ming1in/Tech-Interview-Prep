const assert = require('assert')

memo=[]

/**
 * @description this function returns number n within fibonacci sequence. 
 * It utilizes memoization to decrease runtime and increase efficiency. 
 * 
 * This has a O(n) Big-O time complexity 
 * 
 * @param {*} n number you want from the fibonnaci sequence
 * @param {*} memo array that store previous results  
 */
function fibonacciMemo(n, memo) {
  if (memo[n]) {
    return memo[n]
  }else if (n === 1 || n === 2) {
    result =  1
  } else {
    result = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo)
  }
  memo[n] = result
  return result
}

assert.equal(fibonacciMemo(2, memo), 1)
assert.equal(fibonacciMemo(5, memo), 5)
assert.equal(fibonacciMemo(6, memo), 8)
assert.equal(fibonacciMemo(100, memo), 354224848179262000000)
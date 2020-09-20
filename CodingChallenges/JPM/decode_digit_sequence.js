/*
problem - https://leetcode.com/problems/decode-ways/

find the number of ways to decode a sequence of numbers using the following mapping
{
'A': 1,
'B': 2,
'C' : 3
}
up to {'Z': 26}

solution - https://www.geeksforgeeks.org/count-possible-decodings-given-digit-sequence/
resources - https://www.youtube.com/watch?v=qli-JCrSwuk
 */

const assert = require('assert').strict

/*
time is O(n) because we are using memoization, if memoization were not being used it would be O(n^2). 
The worse case would be a sequence of 1s (1111), but memoization helps speed up that edge case
*/
function numWaysHelper(sequence, n, memo) { 
  //base case: there is only one number, in that case there is only 1 decoding
  //numWaysHelper('',0) = 1
  if (n === 0) {
    return 1
  }

  //base case: the first number is 0 bc 0 can not be decoded
  // numWaysHelper('011',3) = 0
  var s = sequence.length - n
  if (sequence[s] == '0') {
    return 0
  }
  // checks if we have ran through this case before
  if (memo[n] !== null) {
    return memo[n]
  }

  var result = numWaysHelper(sequence, n - 1, memo)

  // checks if the first 2 digits of this substring is greater than 26(there are only 26 letters)
  if (n >= 2 && parseInt(sequence.slice(s, s + 2)) <= 26) {
    result += numWaysHelper(sequence, n - 2, memo)
  } 

  memo[n] = result
  return result
 }

function numWays(sequence) {
  var memo = new Array(sequence.length + 1).fill(null)
  return numWaysHelper(sequence, sequence.length, memo)
}

assert.equal(numWays('12'), 2)
assert.equal(numWays('226'), 3)

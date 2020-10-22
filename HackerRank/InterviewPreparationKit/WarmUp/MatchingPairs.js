/**
 * problems: find the number of matching pairs in a array
 * solutions: sort the array,and iterate through comparing index with next index, if they match skip the next index else move over to next index
 * https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 */
const assert = require('assert')

function sockMerchant(n, ar) {
  var sortedArray = ar.sort()
  
  let idx = 0
  var matchingPairs =0

  while (idx < n) {
    if (sortedArray[idx] === sortedArray[idx + 1]) {
      matchingPairs ++
      idx += 2
    } else {
      idx++
    }

  }

  return matchingPairs
}

assert.equal(sockMerchant(9,[10,20,20,10,10,30,50,10,20]), 3)

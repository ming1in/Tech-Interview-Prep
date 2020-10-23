/**
 * https://www.hackerrank.com/challenges/max-array-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming
 */

const assert = require('assert')

/**
 * @return max sum such that no two element are adjacent
 * 
 * @description O(n) time complexity
 * 
 * @param {*} arr array of integers
 */
const maxSubsetSum = (arr) => {
  var incl = 0 //max sum including previous element
  var excl = 0 //max sum excluding previous element
  var exclNew

  for (let i = 0; i < arr.length; i++){
    console.log('--------------')
    console.log(incl)
    console.log(excl)

    //current max excluding i
    if (incl > excl) {
      exclNew = incl
    } else {
      exclNew = excl
    }

    //current max including i
    incl = excl + arr[i]
    excl = exclNew
  }

  console.log('--------------')
  console.log(incl)
  console.log(excl)

  return Math.max(incl, excl)
}
 
assert.strictEqual(maxSubsetSum([2, 1, 5, 8, 4]), 11)
// assert.strictEqual(maxSubsetSum([3, 5, -7, 8, 10]), 15)
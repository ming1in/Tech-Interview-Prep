/**
 * Given two sorted arrays, merge them to form a single, sorted array with all items in non-decreasing order
 * 
 * Example
 *  a = [1, 2, 3]
 *  b = [2, 5, 5]
 * 
 * Function Description
 * Complete the function mergeArrays in the editor below
 * 
 * mergeArrays has the following parameter(s)
 *  int a[n]: a sorted array of integers
 *  int b[n]: a sorted array of integers
 * 
 * Returns 
 *  int[n]: an array of all the elements from both input arrays in non-decreasing order
 * 
 * Constraints
 *  -> 1 < n < 5 * 10^5
 *  -> 0 <= a[i], b[i] <= 10^9, where 0 <= i < n
 */


const assert = require('assert')

function mergeArrays(a, b) {
  var currentA = 0
  var currentB = 0
  var merged = []

  while (currentA < a.length && currentB  < b.length) {
    var elementA = a[currentA]
    var elementB = b[currentB]

    if ((elementA - elementB) > 0) { 
      merged.push(elementB)
      currentB++
    } else {
      merged.push(elementA)
      currentA++
    }
  }

  if (currentA < a.length) {
    merged = merged.concat(a.slice(currentA))
  } else {
    merged =  merged.concat(b.slice(currentB))
  }

  return merged
}
 
assert.equal(mergeArrays([1, 2, 3], [2, 5, 5]), [1, 2, 2, 3, 5, 5])
assert.equal(mergeArrays([1, 2, 3, 4, 5], [2, 5, 5]), [1, 2, 2, 3, 4, 5, 5, 5])


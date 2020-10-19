/**
 * https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms
 */

const assert = require('assert')

// function minimumAbsoluteDifference(n, arr) {
//   var result

//   for (idx in arr){
//     for (idx2 in arr) {
//       var absDiff = Math.abs(idx - idx2)
//       if (!result) {
//         result = absDiff
//       } else if (absDiff < result) {
//         result = absDiff
//       }

//     }

//   return result
// }


function minimumAbsoluteDifference(n, arr) {
  arr.sort()
  var result = Number.MAX_VALUE

  for (var i = 0; i < arr.length - 1; i++) {
    let absoluteDiff = Math.abs(arr[i] - arr[i + 1])

    result = Math.min(result, absoluteDiff)
  }

  return result

}

assert.equal(minimumAbsoluteDifference(3, [3, -7, 0]), 3)

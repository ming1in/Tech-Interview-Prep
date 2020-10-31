/**
 * Problem:
 * https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
 * 
 * Resources:
 * https://www.geeksforgeeks.org/bubble-sort/
 */
const assert = require('assert')

function BubbleSort(a) {
  var isSorted = false
  var totalSwaps = 0

  while (!isSorted) {
    var swap = 0
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        var temp = a[i + 1]
        a[i + 1] = a[i]
        a[i] = temp
        swap++
        totalSwaps++
      }
    }

    if (swap === 0) {
      isSorted = true
    }
  }
  console.log(`Array is sorted in ${totalSwaps} swaps.`)
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${a[a.length - 1]}`)

  return a
}

assert.equal(BubbleSort([5, 1, 4, 2, 8]), [1, 2, 4, 5, 8])

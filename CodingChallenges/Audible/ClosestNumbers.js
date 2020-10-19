/**
 * Given an array of distinct integers, determine the minimum absolute difference between any two
 * elements, Print all element pairs with that minimal absolute difference in ascending order
 */

const { assert } = require("console")

function closestNumbers(numbers) {
  // Write your code here
  numbers.sort((a, b) => { return a - b }) //sort array of numbers for greedy algo

  var minAbsDiff = Number.MAX_VALUE
  var minAbsDiffPairs = []
  for (var i = 0; i < numbers.length - 1; i++) {
    var absDiff = Math.abs(numbers[i] - numbers[i + 1])

    if (absDiff < minAbsDiff) {
      minAbsDiff = absDiff
      minAbsDiffPairs = [[numbers[i], numbers[i + 1]].sort((a, b) => { return a - b })]
    } else if (absDiff === minAbsDiff) {
      minAbsDiffPairs.push([numbers[i], numbers[i + 1]].sort((a, b) => { return a - b }))
    }
  }

  for (var i = 0; i < minAbsDiffPairs.length; i++) {
    console.log(`${minAbsDiffPairs[i][0]} ${minAbsDiffPairs[i][1]}`)
  }
}

assert.equal(closestNumbers([4, 2, 1, 3]), [[1,2],[2,3],[3,4],[4,5]])
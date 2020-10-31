/**
 * https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
 */

 const assert = require('assert')

function MaximumToys(prices, budget) {
  var sortedPrices = prices.sort((a,b) => a-b)
  var totalPrice = numToys = 0

  for (let i = 0; i < sortedPrices.length; i++){
    if (totalPrice + sortedPrices[i] < budget) {
      numToys++
      totalPrice += sortedPrices[i]
    } else {
      break
    }
  }

  return numToys
}

assert.equal(MaximumToys([1, 2, 3, 4], 7), 3)
assert.equal(MaximumToys([1, 12, 5, 111,200,1000,10], 50), 4)

 

/**
 * https://www.geeksforgeeks.org/count-pairs-difference-equal-k/
 */

function countPairs(numbers, k) {
  // Write your code here
  var count = 0
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if ((numbers[i] - numbers[j] === k)) {
        count ++
      }
    }
  }
  console.log(count)
  return count
}

// countPairs([1, 2, 3, 4, 5, 6], 2)

function method2(numbers, k) {
  var count = 0
  const sortedNumbers = numbers.sort()
  var i = 0
  var j = 0

  while (i< sortedNumbers.length) {
    if (sortedNumbers[i] - sortedNumbers[j] === k) {
      count++
      j++
      i++
    } else if (sortedNumbers[i] - sortedNumbers[j] > k) {
      i++
    } else {
      j++
    }
  }

  console.log(count)
  return count
}

method2([1, 2, 3, 4, 5, 6], 2)
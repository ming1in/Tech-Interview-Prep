/**
 * Time Complexity = O(n^2)
 * 
 * - Compares adjacent array elements and exchanges their values if they are out of order
 * - Smaller values bubble up to the top of the array and larger values sink to the bottom; hence the name
 */

const assert = require('assert')

const BubbleSort = (array) => {
  var exchanges = true
  var pass = 1

  while (exchanges) {
    exchanges = false
    for (let i = 0; i < array.length - pass; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp

        exchanges = true
      }
      console.log(array)
    }
    pass++
  }


  return array
}

assert.notStrictEqual(BubbleSort([54, 12, 28, 17, 22, 7]), [7, 12, 17, 22, 28, 54])
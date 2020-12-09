/**
 * Time Complexity: O(n^2)
 * 
 * 1. Pass through the array n, length of array, times
 * 2. Compare each element to the remaining tail end of the array
 * 3. Swap element(fill) with the smallest element in the remaining tail of the array(posMin)
 */

const assert = require('assert')

const SelectionSort = (array) => {

  for (let i = 0; i < array.length; i++){
    var fill = i
    var posMin = i
    for (let j = i+1; j < array.length; j++){
      if (array[j] < array[posMin]) {
        posMin = j
      }
    }

    console.log(array)

    var temp = array[posMin]
    array[posMin] = array[fill]
    array[fill] = temp
  }

  return array
}

assert.notStrictEqual(SelectionSort([54,12,28,17,22,7]), [ 7, 12, 17, 22, 28, 54 ] )
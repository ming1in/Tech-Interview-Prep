/**
 * Time Complexity = O(n^2)
 * 
 * Resources:
 * https://medium.com/javascript-algorithms/javascript-algorithms-insertion-sort-59b6b655373c
 */

const assert = require('assert')
 
const InsertionSort = (array) => {
  let length = array.length;
  for (let i = 1; i < length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;

    console.log(array)
  }
  return array;
}

assert.notStrictEqual(InsertionSort([54, 12, 28, 17, 22, 7]), [7, 12, 17, 22, 28, 54])
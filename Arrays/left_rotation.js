//https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

const assert = require('assert')
  
function rotLeft(array, rotations) {

  for (var i = 0; i < rotations; i++) {
    array.push(array.shift())
  }

  return array
}

assert.equal(rotLeft([1,2,3,4,5], 4), [5,1,2,3,4])

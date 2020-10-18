//https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

const assert = require('assert')

function hourglassSum(arr) {
  var maxHourglass = -63 //bc the lowest number is -9 and the worse case is you get a entire hourglass of -9. i.e 7 * -9 = -63

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      var hourglass = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]

      if (hourglass > maxHourglass) {
        maxHourglass = hourglass
      }

    }
  }

  return maxHourglass
}

assert.equal(hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]), 19)
/**
 * solution: we iterate through the path taken and keep track of the level. a valley is counted if you are moving up and reaching sea level(0).
 * 
 * https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 */
const assert = require('assert')

function countingValleys(steps, path) {
  var level = 0 
  var valleys = 0
  
  for (let i = 0; i < steps; i++) {
    if (path[i] === 'U') {
      level++
    }else {
      level--
    }

    if (path[i] === 'U' && level === 0) {
      valleys++
    }
  }

  return valleys
}
 
assert.equal(countingValleys(8, 'UDDDUDUU'), 1)
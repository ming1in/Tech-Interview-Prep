/**
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 */

const assert = require('assert')

// 1 = bad cloud
// 0 = good cloud
// can only jump 1 or 2 clouds at a time
// cloud number = index in array c

function jumpingOnClouds(c) {

  var jumps = 0
  var position = 0

  while (position < c.length-1) {
    if (c[position + 2] === 0) {
      jumps++
      position += 2
    } else {
      jumps++
      position++
    }
  }

  return jumps
}
 
assert.equal(jumpingOnClouds([0,0,0,0,1,0]), 3)
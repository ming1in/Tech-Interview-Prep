/**
 * https://www.hackerrank.com/challenges/flipping-bits/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=miscellaneous
 */
const assert = require('assert')

function flippingBits(n) {
  var binary = n.toString(2)
  console.log(binary)

  while(binary.length < 32) {
    binary  = '0' + binary
  }

  console.log(binary)

  binary = binary.replace(/1/g, 'x').replace(/0/g, '1').replace(/x/g, '0')

  const result = parseInt(binary, 2)

  console.log(result)


}
 
// assert.equal(flippingBits(3), 2147483648)
assert.equal(flippingBits(2147483647), 4294967294)
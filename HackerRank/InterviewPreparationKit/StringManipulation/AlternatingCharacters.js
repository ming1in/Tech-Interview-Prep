/**
 * https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
 */
const assert = require('assert')

function alternatingCharacters(s) {
  var deletions = 0
  
  for (let i = 0; i < s.length-1; i++){
    if (s[i] === 'A' && s[i + 1] !== 'B') {
      s.slice(i)
      deletions++
    }
    if (s[i] === 'B' && s[i + 1] !== 'A') {
      s.slice(i)
      deletions++
    }
  }

  return deletions
}
 

assert.equal(alternatingCharacters('AAABBB'), 4)
assert.equal(alternatingCharacters('ABABABAB'), 0)
assert.equal(alternatingCharacters('BBBBB'), 4)
assert.equal(alternatingCharacters('AAAA'), 3)
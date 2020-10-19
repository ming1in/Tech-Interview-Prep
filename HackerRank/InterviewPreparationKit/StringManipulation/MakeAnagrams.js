/**
 * https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
 */

const assert = require('assert')

function makeAnagram(a, b) {
  let freqs = {};
  a.split('').forEach(char => freqs[char] = (freqs[char] || 0) + 1); // increment
  b.split('').forEach(char => freqs[char] = (freqs[char] || 0) - 1); // decrement

var result = Object.keys(freqs).reduce((sum, key) => sum + Math.abs(freqs[key]), 0);

  console.log(result)
  return result
}


assert.equal(makeAnagram("cde", "abc"), 4)
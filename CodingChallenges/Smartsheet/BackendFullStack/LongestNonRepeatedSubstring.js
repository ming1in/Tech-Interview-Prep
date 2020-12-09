/**
 * Given a string s, find the length of the longest substring that contains no repeated characters
 */

 const assert = require('assert')

function LongestNonRepeatedSubstring(s) {
  var visited = {} //{[letter: string]: int}
  var maxSubstring = 0
  var left = 0

  for (let i = 0; i < s.length; i++){
    if (visited[s[i]] !== undefined) {
      left = Math.max(left, visited[s[i]] + 1)
    }

    visited[s[i]] = i
    maxSubstring = Math.max(maxSubstring, i - left + 1)
  }

  return maxSubstring
}
 
assert.equal(LongestNonRepeatedSubstring('nndNfdfdf'), 4) //ndNf
/*
https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
*/

const assert = require('assert').strict


function findSubsets(s1, s2) {

  var subsets = 0

  for (let i = 0; i < s1.length; i++) {
    const element = s1[i];
    
    if (s2.includes(element)) {
      subsets++
    }
  }

  if (subsets > 0) {
    return "YES"
  } else {
    return "NO"
  }
}

assert.equal(findSubsets('hello', 'world'), "YES")
assert.equal(findSubsets('hi', 'world'), 'NO')

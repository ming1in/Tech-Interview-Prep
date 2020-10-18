/*
https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
*/

const assert = require('assert').strict

function sherlockAndAnagrams(s) {
  //check if there are duplicated letters, anagrams can't exist without duplicate letters
  const duplicateCount = s.split('').filter((letter, idx) => s.indexOf(letter) !== idx).length

  console.log(duplicateCount)

  //break s into substrings
  var substrings = getSubstrings(s)

  //find anagram pairs of substrings

  
}

function getSubstrings(s) {
  var substrings = []

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      substrings.push(s.slice(i,j))
    }
  }

  return substrings
}

assert.equal(sherlockAndAnagrams('ifailuhkqq'), 3)
assert.equal(sherlockAndAnagrams('kkkk'), 10)
assert.equal(sherlockAndAnagrams('abba'), 4)
assert.equal(sherlockAndAnagrams('abcd'), 0)

/*
Capitalize all the words in a sentence
 */

const assert = require('assert').strict

function Capitalize(str) {
  /*
  1 - convert words in the sentence into an array
  2 - iterate and capitalize every word in the array
  3 - convert array of words back to a string
   */
  
  return str.split(' ').map((word) => {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
}

assert.equal(Capitalize('hello world'), 'Hello World')
assert.equal(Capitalize('ming lin'), 'Ming Lin')
assert.equal(Capitalize('please capitalize this'), 'Please Capitalize This')


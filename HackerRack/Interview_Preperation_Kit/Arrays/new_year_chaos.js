/*
https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
*/

const assert = require('assert').strict

const minimumBrides = (queue) => {
  var isChaotic = false

  //check if someone did more than 2 bribes
  for (let i = 0; i < queue.length; i++) {
    const element = queue[i];
    if (element - 1 - i > 2) {
      isChaotic = true
    } 
  }

  if (isChaotic) {
    console.log('Too chaotic')
    return 'Too chaotic'
  } else {
      //use bubble sort to find # of bribes
    let swapped
    var bribes = 0

    do {
      swapped = false

      for (let i = 0; i < queue.length; i++) {
        if (queue[i] > queue[i + 1]) {
          let tmp = queue[i]
          queue[i] = queue[i + 1]
          queue[i + 1] = tmp
          bribes++
          swapped = true
        }
      }
    } while (swapped)

    console.log(bribes)
    return bribes
  }
}

assert.equal(minimumBrides([2, 1, 5, 3, 4]), 3)
assert.equal(minimumBrides([2, 5, 1, 3, 4]), 'Too chaotic')

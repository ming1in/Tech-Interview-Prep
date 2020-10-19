/**
 * Amazon engineers have redesigned a keypad used by deliver drivers in urban 
 * areas, in order to determine which key takes the longest time to press, 
 * the keypad is tested by a driver. given the results of that test which 
 * contain key pressed and the time at which it was pressed write an algo to 
 * determine which key takes the longest to press
 */

const { assert } = require("console")

let ascii = {
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',
  4: 'e',
  5: 'f',
  6: 'g',
  7: 'h',
  8: 'i',
  9: 'j',
  10: 'k',
  11: 'l',
  12: 'm',
  13: 'n',
  14: 'o',
  15: 'p',
  16: 'q',
  17: 'r',
  18: 's',
  19: 't',
  20: 'u',
  21: 'v',
  22: 'w',
  24: 'x',
  25: 'y',
  26: 'z',
}

function slowestKey(keyTimes) {
  // Write your code here

  var greatestTime = 0
  var key = 0

  for (let i = 0; i < keyTimes.length; i++) {
    var time
    if (i === 0) {
      time = keyTimes[0][1] - 0
    } else {
      time = keyTimes[i][1] - keyTimes[i - 1][1]
    }

    if (time > greatestTime) {
      greatestTime = time
      key = keyTimes[i][0]
    }
  }

  var char = ascii[key]
  return char
}

assert.equal(slowestKey([[0, 2], [1, 3], [0, 7]]), 'a')


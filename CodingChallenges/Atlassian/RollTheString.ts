/**
 * A single roll operation on a string is a circular increment of each character by one. Looking at the 
 * English alphabet, character in the range ascii[a-z], a becomes b, b becomes c, and z becomes a.
 * 
 * Given an array of integers named roll, perform a roll operation on the first roll[i] characters of s 
 * for each element i in the array, Given a zero indexed string, an operation roll[i] affects characters 
 * at positions 0 through (roll[i] - 1)
 * 
 * Example
 * s = 'abz'
 * roll = [3,2,1]
 * 
 * Perform the following sequence of operations:
 * 1. roll[0] = 3: Roll all three character so 'abz' becomes 'bca'
 * 2. roll[1] = 2: Roll the first two characters so 'bca' becomes 'cda'
 * 3. roll[2] = 1: Roll the first character so 'cda' becomes 'dda
 * 
 * After performing the operations, the final value of s is 'dda'
 * 
 * Function Description
 * Complete function rollTheString in the editor below.
 * 
 * rollTheString has the following parameter(s):
 *  string s: the string to operate on
 *  int roll[n]: an array of integers indicating the number of items in s to roll 
 * Returns:
 *  string: the resulting string after all roll operations have been performed
 * 
 * Constraints
 * Each character in s is a character in the range ascii[a-z]
 *  -> 1 <= length of s <= 10^5
 *  -> 1 <= n <= 10^5
 *  -> 1 <= roll[i] <= length of s, where 0 <= i < n
 */

const assert = require('assert')
 
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function rollTheString(s: String, rolls: Array<Number>) {
  var sArray = s.split('')

  rolls.forEach(roll => {
    for (let i = 0; i < roll; i++){
      var letterPos = sArray[i].charCodeAt(0) - 97
      if (letterPos === 25) {
        sArray[i] = 'a'
      } else {
        sArray[i] = alphabet[letterPos + 1]
      }
    }
  });
  
  console.log(sArray.join(''))
  return sArray.join('') 
 }

assert.equal(rollTheString('abz', [3, 2, 1]), 'dda')
 
